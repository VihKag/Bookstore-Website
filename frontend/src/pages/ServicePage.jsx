import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faIdCard, faLock, faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import Footer2 from "../components/Footer/footer2";
const ServicePage = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [cartItemCount] = useState(0);

    const cardData = [
        {
            icon: faLock,
            title: "Security",
            content: "Ensure that your website adheres to security standards such as SSL to protect personal data and user accounts."
        },
        {
            icon: faIdCard,
            title: "Secure Payments",
            content: "Integrate secure payment gateways to allow customers to pay with credit cards, debit cards, or online payment methods."
        },
        {
            icon: faMagnifyingGlass,
            title: "Efficient Search",
            content: "Incorporate a powerful search function, allowing users to find books based on criteria such as author names, book titles, genres, or keywords."
        },
        // Add 3 new cards
        {
            icon: faBook,
            title: "Detailed Book Information",
            content: "Provide detailed information about books, including cover images, book descriptions, author information, and publishers."
        },
        {
            icon: faFolder,
            title: "Order Management",
            content: "The order management system helps you track orders, update order status, and send shipping notifications, as well as track shipments to customers."
        },
        {
            icon: faPhone,
            title: "Customer Care",
            content: "Offer customer care services via email, online chat, or phone. Support users in resolving queries, provide assistance with products, and handle arising issues."
        },
    ];


    return (
        <>
            <Header cartItemCount={cartItemCount} />
            <div className="text-center">
                <h1 className="text-4xl font-bold mt-4 mb-2 mx-4 ">Our Service</h1>
                <p className="text-xl mb-2 mx-4 ">Welcome to the services of PKQ Bookstore!</p>
                <div className="flex justify-around p-3 mx-4 flex-wrap">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="max-w-sm rounded overflow-hidden shadow-lg mb-4"
                            style={{
                                backgroundColor: hoveredIndex === index ? "#0dd3b7" : "white", 
                                transition: "background-color 0.3s ease" 
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="px-6 py-4">
                                <FontAwesomeIcon icon={card.icon} className="items-center mb-2" size="2x" />
                                <div className="font-bold text-2xl items-center text-center mb-2">{card.title}</div>
                                <p className="text-gray-700 text-base text-justify">{card.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer2 />

        </>
    );
}

export default ServicePage;
