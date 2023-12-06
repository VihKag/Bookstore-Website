import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './cart.css'
import React, { useState, useEffect } from 'react';
import pic from '../../assets/image/book1.jpg'

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  useEffect(() => {
    setCartItemCount(calculateTotalQuantity());
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.name === product.name);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      setCartItemCount(calculateTotalQuantity());
    } else {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: pic,
        quantity: 1,
      };
      setCartItems([...cartItems, newProduct]);
      setCartItemCount(calculateTotalQuantity());

    }

    setTotalPrice(totalPrice + product.price);
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;

    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });

    return totalQuantity;
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
    setTotalPrice(totalPrice - product.price * product.quantity);
    setCartItemCount(0);
  };


  const increaseQuantity = (product) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    setTotalPrice(totalPrice + product.price);
  };

  const decreaseQuantity = (product) => {
    if (product.quantity === 1) {
      removeFromCart(product);
    } else {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      setTotalPrice(totalPrice - product.price);
    }
  };
  const handleCheckout = () => {
    // Xử lý thanh toán ở đây, ví dụ:
    alert("Đã nhấn nút Thanh toán");
  };
  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <div className="container-cart">
        <h1 className="cart-title">YOUR CART</h1>
        <div className="cart-wrapper">
          <div className="cart-items-wrapper">
            {cartItems.length === 0 ? (
              <p className="empty-cart"> Your cart is empty! Please choose products you desire and add them to your cart!</p>
            ) : (
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li className="cart-item" key={item.id}>
                    <div className="item-info">
                      <img src={item.image} alt={item.name} className="item-image" />
                      <div>
                        <p className="item-name">{item.name}</p>
                        <p className="item-price">{item.price}đ</p>
                      </div>
                    </div>
                    <div className="quantity">
                      <button className="quantity-btn" onClick={() => decreaseQuantity(item)}>
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button className="quantity-btn" onClick={() => increaseQuantity(item)}>
                        +
                      </button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p className="cart-info">Quantity of items: {calculateTotalQuantity()}</p>
            <p className="total-cart">Total amount: {totalPrice}đ</p>
            {/* Thêm các thông tin khác của đơn hàng */}
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
        <h2>Product list</h2>
        <ul className="product-list">
          <li className="product-list-item">
            <button onClick={() => addToCart({ id: 1, image: 'assets/image/book1.jpg', name: 'Product 1', price: 100000 })}>
              Add to cart
            </button>
          </li>
          <li className="product-list-item">
            <button onClick={() => addToCart({ id: 2, image: 'assets/image/book1.jpg', name: 'Product 2', price: 200000 })}>
              Add to cart
            </button>
          </li>
          <li className="product-list-item">
            <button onClick={() => addToCart({ id: 3, image: 'assets/image/book1.jpg', name: 'Product 3', price: 300000 })}>
              Add to cart
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Cart;