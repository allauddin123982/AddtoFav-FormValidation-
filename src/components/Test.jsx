import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 10, quantity: 0 },
    { id: 2, name: 'Product B', price: 20, quantity: 0 },
    { id: 3, name: 'Product C', price: 15, quantity: 0 },
  ]);

  const calculateTotalBill = () => {
    let total = 0;
    products.forEach(product => {
      total += product.price * product.quantity;
    });
    return total;
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div className='m-2 p-2 border w-[400px]' key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <input
            className='border'
            type="number"
            value={product.quantity}
            onChange={e => {
              const newQuantity = parseInt(e.target.value);
              if (!isNaN(newQuantity)) {
                const updatedProducts = [...products];
                updatedProducts.find(p => p.id === product.id).quantity = newQuantity;
                setProducts(updatedProducts);
              }
            }}
          />
        </div>
      ))}
      <h3>Total Bill: ${calculateTotalBill()}</h3>
    </div>
  );
}

export default App;
