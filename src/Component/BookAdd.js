import React, { useState } from 'react';
import axios from 'axios';

const BookAdd = () => {
    const [book, setBook] = useState({
        name: '',
        category: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/product/save", book)
            .then(res => {
                alert("Book saved successfully!");
                console.log(res.data);
                setBook({ name: '', category: '', price: '' }); // ✅ Clear form
            })
            .catch(err => {
                console.error("Error saving book:", err);
                alert("Failed to save book.");
            });
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add New Book</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group mb-3">
                    <label>Book Name</label>
                    <input
                        type="text"
                        name="name"
                        value={book.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter book name"
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        value={book.category}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter category"
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={book.price}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter price"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Save Book</button>
            </form>
        </div>
    );
};

export default BookAdd;
