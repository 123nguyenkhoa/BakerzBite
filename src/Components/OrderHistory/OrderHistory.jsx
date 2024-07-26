import React, { useState, useEffect } from "react";
import {
  getOrdersFromIndexedDB,
  deleteOrderFromIndexedDB,
} from "../../Utils/indexedDB";
import "./OrderHistory.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const storedOrders = await getOrdersFromIndexedDB();
      setOrders(storedOrders.filter((order) => order.status === "Succeed"));
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (id) => {
    await deleteOrderFromIndexedDB(id);
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div className="order-history-container">
      <h1>Order History</h1>
      {orders.length > 0 ? (
        <table className="order-history-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Order Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) =>
              order.products
                .filter((product) => product.quantity > 0)
                .map((product, prodIndex) => (
                  <tr key={`${order.id}-${prodIndex}`}>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>${product.price ? product.price.toFixed(2) : "N/A"}</td>
                    <td>
                      $
                      {product.price && product.quantity
                        ? (product.price * product.quantity).toFixed(2)
                        : "N/A"}
                    </td>
                    <td>{order.status}</td>
                    <td>{new Date(order.dateTime).toLocaleString()}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteOrder(order.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      ) : (
        <p>No order history available.</p>
      )}
    </div>
  );
};

export default OrderHistory;
