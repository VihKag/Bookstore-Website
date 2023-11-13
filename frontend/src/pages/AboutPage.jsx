import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import Footer2 from "../components/Footer/footer2";

const AboutPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cardData = [
        {
            icon: faUser,
            title: "Thành viên nhóm",
            content: "Nhóm của chúng tôi gồm 3 thành viên thuộc khoa Công nghệ thông tin chuyên ngành Công nghệ phần mềm đại học Sư phạm kĩ thuật Thành phố Hồ Chí Minh : Thái Hoàng Phúc - Phạm Nguyễn Phú Quí  Nguyễn Vinh Khang "

        },
        {
            icon: faBook,
            title: "Cam Kết",
            content: "Chúng tôi tự hào về việc cung cấp cho bạn một thư viện sách phong phú, từ những cuốn sách bán chạy nhất đến những tác phẩm văn học kinh điển và sách giáo trình chuyên sâu. Đội ngũ biên tập của chúng tôi luôn chọn lựa kỹ lưỡng để đảm bảo rằng mỗi cuốn sách bạn mua đều là một kiệt tác đáng đọc."
        },
        {
            icon: faPhone,
            title: "Hỗ trợ",
            content: "Nếu bạn có bất kỳ câu hỏi nào hoặc cần sự tư vấn về sách, đừng ngần ngại liên hệ với chúng tôi. Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn lòng giúp đỡ bạn. Chúng tôi tin rằng việc bạn tìm thấy cuốn sách đúng đắn có thể thay đổi cả cuộc đời bạn."
        }
    ];

    return (
        <>
            <Header />
            <div className="text-center">
                <h1 className="text-4xl font-bold mt-4 mb-3 mx-8 ">About us</h1>
                <p className="text-m mt-4 mb-6 mx-8">Chào mừng bạn đến với PKQ BookStore - nơi kết nối niềm đam mê đọc sách với sự tiện lợi của mua sắm trực tuyến! Chúng tôi là đội ngũ cung cấp tài nguyên cho những người đam mê sách, nơi mà trí tưởng tượng bay bổng và kiến thức không bao giờ bị giới hạn.</p>
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
                <p className="text-m mt-6 mb-4 mx-8 text-justify">Xin chân thành cảm ơn bạn đã đến với PKQ BookStore. Chúng tôi hy vọng rằng mỗi cuốn sách bạn mua sẽ mang đến cho bạn những giây phút đọc sách tràn ngập niềm vui và sự sáng tạo. Hãy bắt đầu hành trình khám phá với chúng tôi và để chúng tôi làm nơi bạn tìm thấy những câu chuyện tuyệt vời !!! </p>
            </div>
            <Footer2 />
        </>
    );
}

export default AboutPage;
