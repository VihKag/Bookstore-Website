import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import Footer2 from "../components/Footer/footer2";

const AboutPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [cartItemCount] = useState(0);

    const cardData = [
        {
            icon: faUser,
            title: "Team members",
            content: "Our team consists of three members from the Faculty of Information Technology, specializing in Software Engineering at the Ho Chi Minh City University of Technical Education: Thai Hoang Phuc, Pham Nguyen Phu Qui, and Nguyen Vinh Khang "

        },
        {
            icon: faBook,
            title: "Commitment",
            content: "We take pride in providing you with a rich library of books, ranging from bestsellers to classic literary works and in-depth textbooks.Our editorial team carefully selects each book to ensure that every purchase you make is a worthwhile and enjoyable masterpiece."
        },
        {
            icon: faPhone,
            title: "Support",
            content: "If you have any questions or need advice on books, please don't hesitate to contact us. Our customer support team is always ready to assist you. We believe that finding the right book can be life-changing, and we are here to help you in that journey."
        }
    ];

    return (
        <>
            <Header cartItemCount={cartItemCount} />
            <div className="text-center">
                <h1 className="text-4xl font-bold mt-4 mb-3 mx-8 ">About us</h1>
                <p className="text-m mt-4 mb-6 mx-8">
                    Welcome to PKQ BookStore - where we connect the passion for reading with the convenience of online shopping! We are a team dedicated to providing resources for book enthusiasts, a place where imagination soars, and knowledge knows no bounds.</p>
                <div className="flex justify-around p-3 mx-8 card-container">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="max-w-sm rounded overflow-hidden shadow-lg"
                            style={{
                                backgroundColor: hoveredIndex === index ? "#0dd3b7" : "white", // Màu nền khi hover
                                transition: "background-color 0.3s ease" // Hiệu ứng chuyển đổi màu nền
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="px-6 py-4">
                                {/* <div className="flex items-center mb-2"> */}
                                <FontAwesomeIcon icon={card.icon} className="items-center mb-2" size="2x" />
                                <div className="font-bold text-2xl items-center text-center mb-2 ">{card.title}</div>
                                {/* </div> */}
                                <p className="text-gray-700 text-base text-justify">{card.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-m mt-6 mb-4 mx-8 text-justify">Thank you sincerely for visiting PKQ BookStore. We hope that each book you purchase will bring you moments of joy and creativity in your reading journey. Begin your exploration with us and let us be the place where you discover fantastic stories!!! </p>
            </div>
            <Footer2 />
        </>
    );
}

export default AboutPage;
