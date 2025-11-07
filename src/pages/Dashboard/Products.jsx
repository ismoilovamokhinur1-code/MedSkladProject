import React, { useState } from "react";
import { motion } from "framer-motion";

const initialProducts = [
  { id: 1, name: "Парацетамол", quantity: 120, price: 5 },
  { id: 2, name: "Ибупрофен", quantity: 80, price: 10 },
  { id: 3, name: "Амоксициллин", quantity: 50, price: 15 },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [newName, setNewName] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const isValidRussianName = (name) => {
  return /^[А-Яа-яЁё\s-]+$/.test(name);
};

  const addProduct = () => {
    if (!newName || !newQuantity || !newPrice) return;

  if (!isValidRussianName(newName)) {
    alert("Название должно быть на русском языке!");
    return;
  }
    if (!newName || !newQuantity || !newPrice) return;
    const newProduct = {
      id: products.length + 1,
      name: newName,
      quantity: parseInt(newQuantity),
      price: parseFloat(newPrice),
    };
    setProducts([...products, newProduct]);
    setNewName(""); setNewQuantity(""); setNewPrice("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
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
          placeholder="Цена"
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
        <td className="p-2 border">{p.name}</td>
        <td className="p-2 border">{p.quantity}</td>
        <td className="p-2 border">${p.price}</td>
        <td className="p-2 border">
          <button
            onClick={() => deleteProduct(p.id)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
          >
            Удалить
          </button>
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
