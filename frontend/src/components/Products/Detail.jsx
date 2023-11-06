import React from "react";
import "./detail.css";
const Detail = () => {
    return (
        <div className="ml-2">
            <h2 className="text-2xl font-bold pl-2">Thông tin chi tiết sách</h2>
            <ul className="details-list">
                <li>Tác giả:<strong> Dale Carnegie</strong></li>
                <li>Kích thước:<strong> 14.5 x 20.5 cm </strong></li>
                <li>Định dạng:<strong> bìa mềm</strong></li>
                <li>Số trang:<strong> 320</strong></li>
                <li>Nhà phát hành:<strong> Trí việt</strong></li>
                <li>Ngôn ngữ:<strong> tiếng Việt</strong></li>
            </ul>
            <h3 className="text-lg font-medium pl-3">Về tác giả</h3>
            <p className="text-justify pr-6 pl-3">Dale Breckenridge Carnegie (24 tháng 11 năm 1888 – 1 tháng 11 năm 1955) là một nhà văn và nhà thuyết trình Mỹ và là người phát triển các lớp tự giáo dục, nghệ thuật bán hàng, huấn luyện đoàn thể, nói trước công chúng và các kỹ năng giao tiếp giữa mọi người. Ra đời trong cảnh nghèo đói tại một trang trại ở Missouri, ông là tác giả cuốn Đắc Nhân Tâm, được xuất bản lần đầu năm 1936, một cuốn sách thuộc hàng bán chạy nhất và được biết đến nhiều nhất cho đến tận ngày nay. Ông cũng viết một cuốn tiểu sử Abraham Lincoln, với tựa đề Lincoln con người chưa biết, và nhiều cuốn sách khác.
                Carnegie là một trong những người đầu tiên đề xuất cái ngày nay được gọi là đảm đương trách nhiệm, dù nó chỉ được đề cập tỉ mỉ trong tác phẩm viết của ông. Một trong những ý tưởng chủ chốt trong những cuốn sách của ông là có thể thay đổi thái độ của người khác khi thay đổi sự đối xử của ta với họ.</p>
        </div>
    );
};

export default Detail;
