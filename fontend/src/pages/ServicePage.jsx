import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook,   faIdCard, faLock, faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

const ServicePage = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cardData = [
        {
            icon: faLock,
            title: "Bảo Mật ",
            content: "Đảm bảo rằng trang web của bạn tuân thủ các tiêu chuẩn bảo mật như SSL để bảo vệ dữ liệu cá nhân và tài khoản người dùng."
        },
        {
            icon: faIdCard,
            title: "Thanh Toán An Toàn",
            content: "ích hợp các cổng thanh toán an toàn để cho phép khách hàng thanh toán bằng thẻ tín dụng, thẻ ghi nợ, hoặc các phương thức thanh toán trực tuyến"
        },
        {
            icon: faMagnifyingGlass,
            title: "Tìm Kiếm Hiệu Quả",
            content: "Tích hợp chức năng tìm kiếm mạnh mẽ, cho phép người dùng tìm sách dựa trên tiêu chí như tên tác giả, tựa sách, thể loại, hoặc từ khoá. "
        },
        // Thêm 3 card mới
        {
            icon: faBook,
            title: "Thông Tin Sách Chi Tiết",
            content: "Cung cấp thông tin chi tiết về sách bao gồm ảnh bìa, mô tả sách, thông tin tác giả và nhà xuất bản."
        },
        {
            icon: faFolder,
            title: "Quản Lý Đơn Hàng",
            content: "Hệ thống quản lý đơn hàng giúp bạn theo dõi các đơn đặt hàng, cập nhật trạng thái đơn hàng, và gửi thông báo vận chuyển và theo dõi vận đơn đến khách hàng."
        },
        {
            icon: faPhone,
            title: "Chăm Sóc Khách Hàng",
            content: "Cung cấp dịch vụ chăm sóc khách hàng qua email, chat trực tuyến hoặc điện thoại. Hỗ trợ người dùng giải đáp thắc mắc, giúp đỡ về sản phẩm và xử lý các vấn đề phát sinh."
        },
    ];

    return (
        <>
            <Header />
            <div className="text-center">
                <h1 className="text-4xl font-bold mt-4 mb-2 mx-4 ">Our Service</h1>
                <p className="text-xl mb-2 mx-4 ">Chào mừng bạn đến với dịch vụ của PKQ Bookstore!!!</p>
                <div className="flex justify-around p-3 mx-4 flex-wrap">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="max-w-sm rounded overflow-hidden shadow-lg mb-4"
                            style={{
                                backgroundColor: hoveredIndex === index ? "#0dd3b7" : "white", // Màu nền khi hover
                                transition: "background-color 0.3s ease" // Hiệu ứng chuyển đổi màu nền
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="px-6 py-4">
                                <FontAwesomeIcon icon={card.icon} className="items-center mb-2" size="2x" />
                                <div className="font-bold text-2xl items-center text-center mb-2">{card.title}</div>
                                <p className="text-gray-700 text-base">{card.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ServicePage;
