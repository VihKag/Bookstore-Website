import React, { useState } from "react";
import './rating.css';
import { Link } from "react-router-dom";

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send rating and comment to the server or handle data here
        console.log("Đánh giá: ", rating);
        console.log("Bình luận: ", comment);
    };

    return (
        <div className="rating-container">

        <div className="comment-container">
            <div>
                <h2 className="text-xl">Evaluate</h2>
                <div>
                    {[...Array(5)].map((_, i) => {
                        const ratingValue = i + 1;
                        return (
                            <span
                                key={i}
                                style={{ cursor: "pointer", color: ratingValue <= rating ? "gold" : "black", fontSize: "24px" }}
                                onClick={() => handleRatingChange(ratingValue)}
                            >
                                ★
                            </span>
                        );
                    })}
                </div>
            </div>
            <div></div>
            <div>
                <h2 className="text-xl">Comment</h2>
                <form className="rating" onSubmit={handleSubmit}>
                    <textarea
                        rows="4"
                        cols="50"
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="Type your comment..."
                        
                    />
                    <br />
                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-2 px-6 rounded-xl bg-[#0dd3b7] text-white text-lg font-medium comment-send-button" type="submit">Send</button>
                </form>
            </div>
           
        </div>
         <div className="islogin-form">
                <div className="login-text mt-6 ">
                    <p>Sign in to comment </p>
                </div>
                <div className="login-button-container">
                    <Link to="/login" className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-2 px-6 rounded-xl bg-[#0dd3b7] text-white text-m font-medium comment-send-button">Sign in</Link>
                </div>
                <div className="signup-text">
                    <p className="font-medium text-base">Don't you have account? <Link to="/signup" className="text-[#0dd3b7] hover:underline hover:scale-[1.03] ml-1">Register</Link></p>
                </div>
            </div>
            </div>
    );
};

export default Rating;
