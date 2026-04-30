# PHẦN A - KIỂM TRA ĐỌC HIỂU
## Câu A1:
Nguồn tham chiếu: 01_introduction_html_universe.md
1. Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter thứ tự các bước là:
    1.Trình duyệt tìm IP của shopee.vn bằng DNS lookup.
    2.Thiết lập kết nối TCP tới server.
    3.Bắt tay HTTPS/TLS để bảo mật.
    4.Gửi HTTP request đến server.
    5.Server trả về HTML trang web.
    6.Trình duyệt tải thêm CSS, JS, ảnh.
    7.Phân tích dữ liệu và render giao diện hiển thị trang web.

2. Trong DevTools của Chrome, tab Network cho thấy thông tin về tất cả các tài nguyên mà trình duyệt đã tải xuống hoặc đang tải, bao gồm tệp tin, hình ảnh và các cuộc gọi API. Các thông tin chính bao gồm: Name, Status, Type, Time/Waterfall.
    - Status Code của request đầu tiên: ![alt text](anh1.png)
    - Tổng thời gian load trang: ![alt text](anh2.png)
    - Một request trả về file CSS: ![alt text](anh3.png)

## Câu A2:
Nguồn tham chiếu: 04_visible_part_html.md
- Trang web này bị đánh giá thấp vì HTML không sử dụng semantic rõ ràng:
    + Dùng `<div>` thay cho thẻ semantic: `<div class="header">,<div class="menu">`,..
    + Không dùng thẻ heading: `<div class="title">iPhone 16 Pro</div>`
    + Menu không dùng `<nav>`: `<div class="menu">`
    + Không có thuộc tính alt cho ảnh
- Sửa lại:
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<main>
    <article class="product">
        <h1>iPhone 16 Pro</h1>
        <p class="price">25.990.000đ</p>
        <img src="iphone.jpg" alt="iPhone 16 Pro chính hãng">
    </article>
</main>

## Câu A3:
    Hộp 1               <-- Dòng 1
    Text A Text B       <-- Dòng 2
    Hộp 2               <-- Dòng 3
    Text C Text D       <-- Dòng 4: "Text D" in đậm
    Hộp 3               <-- Dòng 5
- Giải thích:
   + `<div>` Xuống dòng sau khi kết thúc: Hộp 1, Hộp 2, Hộp 3 mỗi cái nằm trên 1 dòng riêng.
    + `<span>` hiển thị liên tiếp trên cùng 1 dòng: Text A Text B cùng 1 dòng.
    + `<strong>` chỉ có tác dụng in đậm: Text D in đậm vẫn cùng dòng với Text C.

## Câu A4:
- `<thead>`(table head): chứa phần tiêu đề của bảng, thường gồm có các ô `<th>`.
- `<tboby>`(table body): chứa nội dung chính của bảng, gồm các dòng dữ liệu `<tr>` với ô `<td>`.
- `<tfoot>`(table foot): chứa phần kết hoặc tổng kết.

- Không dùng table làm layout vì:
    + Sai ngữ nghĩa: Table chỉ dùng cho dữ liệu dạng bảng, không phải bố cục.
    + Khó responsive: Table có cấu trúc cứng, khó hiển thị đẹp trên mobile.
    + Code rối, khó bảo trì: Phải lồng nhiều `<tr>`, `<td>`, khó sửa và mở rộng.
    + Hiệu năng kém: Trình duyệt phải render gần như toàn bộ bảng rồi mới hiển thị.

## 