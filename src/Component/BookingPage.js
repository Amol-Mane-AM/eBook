import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThemeContext } from '../Context/ThemeContext';
import '../index.css'; // Make sure your CSS includes styling for booking

function BookingPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState({});
    const { user } = useContext(ThemeContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    useEffect(() => {
        axios.get(`http://localhost:8080/product/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error('Error fetching product:', error));
    }, [id]);

    const validateForm = () => {
        const newErrors = {};

        if (!address.trim()) {
            newErrors.address = "📍 Address is required.";
        } else if (address.trim().length < 10) {
            newErrors.address = "📍 Address must be at least 10 characters.";
        }

        if (!mobile.trim()) {
            newErrors.mobile = "📞 Mobile number is required.";
        } else if (!/^\d{10}$/.test(mobile.trim())) {
            newErrors.mobile = "📞 Mobile number must be exactly 10 digits.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleConfirm = () => {
        if (!validateForm()) return;

        // Navigate to Payment Page with product details
        navigate('/payment', {
            state: {
                productId: product.id,
                productName: product.name,
                price: product.price,
                address,
                mobile
            }
        });
    };

    if (!product) return <p className="text-center mt-5">Loading product...</p>;

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow booking-card p-4 w-100" style={{ maxWidth: '600px' }}>
                <h2 className="text-center mb-4">📚 Booking Confirmation</h2>

                <div className="text-center mb-3">
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-category"><strong>📘 Category:</strong> {product.category}</p>
                    <p className="product-price"><strong>💰 Price:</strong> ₹{product.price}</p>
                </div>

                {/* Address Input */}
                <div className="form-group mb-3">
                    <label htmlFor="address"><strong>📍 Address:</strong></label>
                    <textarea
                        id="address"
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        rows="3"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your address"
                    ></textarea>
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>

                {/* Mobile Input */}
                <div className="form-group mb-4">
                    <label htmlFor="mobile"><strong>📞 Mobile Number:</strong></label>
                    <input
                        type="tel"
                        id="mobile"
                        className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter your 10-digit mobile number"
                    />
                    {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                </div>

                <button className="btn btn-success w-100" onClick={handleConfirm}>
                    ✅ Confirm Booking
                </button>
            </div>
        </div>
    );
}

export default BookingPage;
