import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const initialProducts = [
    { id: 1, name: "Парацетамол", quantity: 120, price: 50000 },
    { id: 2, name: "Ибупрофен", quantity: 80, price: 100000 },
    { id: 3, name: "Амоксициллин", quantity: 50, price: 150000 },
];

const isValidRussianName = (name) => /^[А-Яа-яЁё\s-]+$/.test(name);

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [newName, setNewName] = useState("");
    const [newQuantity, setNewQuantity] = useState("");
    const [newPrice, setNewPrice] = useState("");

    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editQuantity, setEditQuantity] = useState("");
    const [editPrice, setEditPrice] = useState("");

    useEffect(() => {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            setProducts(initialProducts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addProduct = () => {
        if (!newName || !newQuantity || !newPrice) return;

        if (!isValidRussianName(newName)) {
            alert("Название должно быть на русском языке!");
            return;
        }

        const exists = products.some(
            (p) => p.name.toLowerCase() === newName.trim().toLowerCase()
        );
        if (exists) {
            alert(`Медикамент "${newName}" уже существует!`);
            return;
        }

        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            name: newName,
            quantity: parseInt(newQuantity),
            price: parseInt(newPrice),
        };

        setProducts([...products, newProduct]);
        setNewName("");
        setNewQuantity("");
        setNewPrice("");
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    const startEdit = (product) => {
        setEditId(product.id);
        setEditName(product.name);
        setEditQuantity(product.quantity);
        setEditPrice(product.price);
    };

    const saveEdit = () => {
        if (!editName || !editQuantity || !editPrice) return;

        if (!isValidRussianName(editName)) {
            alert("Название должно быть на русском языке!");
            return;
        }

        setProducts(
            products.map((p) =>
                p.id === editId
                    ? { ...p, name: editName, quantity: parseInt(editQuantity), price: parseInt(editPrice) }
                    : p
            )
        );
        setEditId(null);
        setEditName("");
        setEditQuantity("");
        setEditPrice("");
    };

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Медикаменты</h2>

            <input
                type="text"
                placeholder="Поиск по названию..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <div className="flex gap-2 mt-2">
                <input
                    type="text"
                    placeholder="Название"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="border p-2 rounded flex-1"
                />
                <input
                    type="number"
                    placeholder="Количество"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                    className="border p-2 rounded w-32"
                />
                <input
                    type="number"
                    placeholder="Цена (сум)"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="border p-2 rounded w-32"
                />
                <button
                    onClick={addProduct}
                    className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
                >
                    Добавить
                </button>
            </div>

            <motion.table
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full bg-white shadow rounded border-collapse mt-2"
            >
                <thead>
                    <tr className="bg-blue-100">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Название</th>
                        <th className="p-2 border">Количество</th>
                        <th className="p-2 border">Цена</th>
                        <th className="p-2 border">Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((p) => (
                            <tr key={p.id} className="hover:bg-blue-50">
                                <td className="p-2 border">{p.id}</td>
                                <td className="p-2 border">
                                    {editId === p.id ? (
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                            className="border p-1 rounded w-full"
                                        />
                                    ) : (
                                        p.name
                                    )}
                                </td>
                                <td className="p-2 border">
                                    {editId === p.id ? (
                                        <input
                                            type="number"
                                            value={editQuantity}
                                            onChange={(e) => setEditQuantity(e.target.value)}
                                            className="border p-1 rounded w-20"
                                        />
                                    ) : (
                                        p.quantity
                                    )}
                                </td>
                                <td className="p-2 border">
                                    {editId === p.id ? (
                                        <input
                                            type="number"
                                            value={editPrice}
                                            onChange={(e) => setEditPrice(e.target.value)}
                                            className="border p-1 rounded w-24"
                                        />
                                    ) : (
                                        `${p.price.toLocaleString()} сум`
                                    )}
                                </td>
                                <td className="p-2 border flex gap-2">
                                    {editId === p.id ? (
                                        <button
                                            onClick={saveEdit}
                                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
                                        >
                                            Сохранить
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => startEdit(p)}
                                                className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 transition"
                                            >
                                                Редактировать
                                            </button>
                                            <button
                                                onClick={() => deleteProduct(p.id)}
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                                            >
                                                Удалить
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center p-4 text-gray-500">
                                Такой медикамент не найден
                            </td>
                        </tr>
                    )}
                </tbody>
            </motion.table>
        </div>
    );
};

export default Products;
