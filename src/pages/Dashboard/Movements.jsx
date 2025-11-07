import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

const movementTypes = ["Поступление", "Расход"];

const Movements = () => {
  const context = useOutletContext();
  const { products = [], setProducts } = context || {};

  const [movements, setMovements] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [movementType, setMovementType] = useState("Поступление");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedMovements = localStorage.getItem("movements");
    if (storedMovements) setMovements(JSON.parse(storedMovements));
  }, []);

  useEffect(() => {
    localStorage.setItem("movements", JSON.stringify(movements));
  }, [movements]);

  const addMovement = () => {
    if (!selectedProduct || !quantity || quantity <= 0) return;

    const product = products.find((p) => p.id === parseInt(selectedProduct));
    if (!product) return;

    const qty = parseInt(quantity);

    if (movementType === "Расход" && qty > product.quantity) {
      alert("Недостаточно товара для списания!");
      return;
    }

    const updatedProducts = products.map((p) =>
      p.id === product.id
        ? {
            ...p,
            quantity: movementType === "Поступление" ? p.quantity + qty : p.quantity - qty,
          }
        : p
    );

    setProducts(updatedProducts);

    const newMovement = {
      id: movements.length > 0 ? movements[movements.length - 1].id + 1 : 1,
      productName: product.name,
      type: movementType,
      quantity: qty,
      date: new Date().toLocaleString(),
    };

    setMovements([newMovement, ...movements]);
    setSelectedProduct("");
    setQuantity("");
  };

  const deleteMovement = (id) => {
    const movementToDelete = movements.find(m => m.id === id);
    if (!movementToDelete) return;

    // Agar Расход bo‘lsa, uni o‘chirishda mahsulot miqdorini tiklash
    const updatedProducts = products.map(p => {
      if (p.name === movementToDelete.productName) {
        const qtyChange = movementToDelete.type === "Поступление" ? -movementToDelete.quantity : movementToDelete.quantity;
        return { ...p, quantity: p.quantity + qtyChange };
      }
      return p;
    });

    setProducts(updatedProducts);
    const filteredMovements = movements.filter(m => m.id !== id);
    setMovements(filteredMovements);
    localStorage.setItem("movements", JSON.stringify(filteredMovements));
  };

  const filteredMovements = movements.filter((m) =>
    m.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-700">Операции с медикаментами</h2>

      <input
        type="text"
        placeholder="Поиск по названию..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <div className="flex gap-2 mt-2 items-center">
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="border p-2 rounded flex-1"
        >
          <option value="">Выберите медикамент</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} ({p.quantity})
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Количество"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border p-2 rounded w-32"
        />

        <select
          value={movementType}
          onChange={(e) => setMovementType(e.target.value)}
          className="border p-2 rounded w-32"
        >
          {movementTypes.map((type, idx) => (
            <option key={idx} value={type}>
              {type}
            </option>
          ))}
        </select>

        <button
          onClick={addMovement}
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
            <th className="p-2 border">Тип операции</th>
            <th className="p-2 border">Количество</th>
            <th className="p-2 border">Дата</th>
            <th className="p-2 border">Действия</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovements.length > 0 ? (
            filteredMovements.map((m) => (
              <tr key={m.id} className="hover:bg-blue-50">
                <td className="p-2 border">{m.id}</td>
                <td className="p-2 border">{m.productName}</td>
                <td className="p-2 border">{m.type}</td>
                <td className="p-2 border">{m.quantity}</td>
                <td className="p-2 border">{m.date}</td>
                <td className="p-2 border">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => deleteMovement(m.id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center p-4 text-gray-500">
                Операции не найдены
              </td>
            </tr>
          )}
        </tbody>
      </motion.table>
    </div>
  );
};

export default Movements;
