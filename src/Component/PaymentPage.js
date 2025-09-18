import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import './PaymentPage.css';
import axios from 'axios';

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(ThemeContext);

    const { productName, price ,productId} = location.state || {};

     const handlePayment = (e) => {
        e.preventDefault();
debugger;
        if (!user) {
            alert("❌ Please log in to make a payment.");
            navigate('/login');
            return;
        }
        if (!productName || !price) {
            alert("❌ Invalid payment details.");
            return;
        }
        // Simulate payment processing
        console.log(`Processing payment of ₹${price} for ${productName}...`);
           axios.put("http://localhost:8080/product/buybook", {
        id: productId,
        user: user.username
    })
    .then(res => {
                 // After successful payment, redirect or show success message
        alert(`✅ Payment of ₹${price} for "${productName}" successful!\nThank you, ${user?.username || 'User'}!`);
        navigate('/product');

                 
            })
            .catch(err => {
                console.error("Error saving book:", err);
                alert("Failed to save book.");
            });

       

       
    };

     

    if (!productName || !price) {
        return <p className="text-center mt-5">❌ Invalid payment data.</p>;
    }

    return (
        <div className="container payment-container mt-5 d-flex justify-content-center align-items-center">
            <div className="payment-card p-4 shadow w-100">
                <h2 className="text-center mb-4">💳 Payment Page</h2>

                <p className="text-center"><strong>📘 Book:</strong> {productId}{productName}</p>
                <p className="text-center"><strong>👤 User:</strong> {user?.username}</p>
                <p className="text-center amount">💰 Amount to Pay: ₹{price}</p>

                <div className="form-group mt-3">
                    <label htmlFor="method"><strong>Payment Method:</strong></label>
                    <select id="method" className="form-control">
                        <option>UPI</option>
                        <option>Credit/Debit Card</option>
                        <option>Cash on Delivery</option>
                    </select>
                </div>

                <button className="btn btn-primary mt-4 w-100" onClick={handlePayment}>
                    ✅ Pay Now
                </button>
            </div>
        </div>
    );
}

export default PaymentPage;
