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
    - Status Code của request đầu tiên: ![alt text](screenshots/anh1.png)
    - Tổng thời gian load trang: ![alt text](screenshots/anh2.png)
    - Một request trả về file CSS: ![alt text](screenshots/anh3.png)

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

## Câu B3:
* Lỗi 1: Dòng 1 — <!DOCTYPE> thiếu html — sửa thành `<!DOCTYPE html>`
* Lỗi 2: Dòng 2 — thiếu thuộc tính lang — thêm lang="vi"
* Lỗi 3: Dòng 4 — `<title>` không đóng — thêm `</title>`
* Lỗi 4: Dòng 5 — charset sai (utf8) — sửa thành UTF-8
* Lỗi 5: Dòng 8 — thẻ `<h1>` không đóng đúng — sửa `</h1>`
* Lỗi 6: Dòng 12 — thẻ `<a>` không đóng — thêm `</a>`
* Lỗi 7: Dòng 13 — link không đúng (home, products) — sửa thành #home, #products
* Lỗi 8: Dòng 18 — `<img>` thiếu dấu ngoặc kép và alt — sửa src="iphone.jpg" và thêm alt
* Lỗi 9: Dòng 20 — thẻ `<b>` đóng sai thứ tự — sửa thành `<strong>...</strong>`
* Lỗi 10: Dòng 30 — bảng thiếu `<thead>` và `<tbody>` — bổ sung cấu trúc
* Lỗi 11: Dòng 38 — dùng 2 thẻ `<main>` là sai semantic — thay cái thứ 2 bằng `<aside>`
* Lỗi 12: Dòng 43 — `<p>` trong footer không đóng — thêm `</p>`
* Lỗi 13: Dòng 44 — thiếu đóng `</html>`

## Câu B4: 
- Chọn web: tiki.vn
1. 
    -   3 thẻ semantic HTML5:
   ![alt text](screenshots/anh4.png)
    `<header>`
    - Vị trí: Phần đầu trang
    - Chức năng: Chứa logo và menu điều hướng
    - `<nav>`
    - Vị trí: Thanh menu
    - Chức năng: Điều hướng giữa các trang
    - `<footer>`
    - Vị trí: Cuối trang
    - Chức năng: Thông tin bản quyền, liên hệ
2.  
    - Không tìm thấy thẻ `<table>` trên trang shopee.
    - Không dùng thead, tbody: Shopee sử dụng CSS + div để layout thay vì table
3. 
    - `<form>` trên trang Shopee:
    ![alt text](screenshots/anh5.png)
    - Action: không khai báo (Mặc định gửi dữ liệu về chính URL hiện tại).
    - Method: không khai báo (Mặc định là phương thức `get`).
    - Input types: 
        - `type="text"`: Sử dụng cho ô nhập "Email/Số điện thoại/Tên đăng nhập" (name="loginKey").
        - `type="password"`: Sử dụng cho ô nhập "Mật khẩu" (name="password").
        - Thẻ `<button type="button">` (trong thẻ div mật khẩu): Dùng để ẩn/hiện mật khẩu.
        - Thẻ `<button>` ở cuối cùng: Đóng vai trò là nút Đăng nhập để submit toàn bộ dữ liệu trong form.

## Câu C2:
Ý kiến “chỉ cần dùng `<div>` + class là đủ” nghe có vẻ nhanh gọn, nhưng về kỹ thuật lại thiếu bền vững. Trước hết, về SEO, các công cụ tìm kiếm không chỉ đọc nội dung mà còn phân tích ngữ nghĩa cấu trúc. Những thẻ như `<header>, <main>, <article>, <nav>` giúp bot hiểu đâu là nội dung chính, đâu là điều hướng hay phần phụ. Nếu mọi thứ đều là `<div>`, trang trở nên “vô nghĩa” về mặt cấu trúc, khiến việc index kém chính xác và có thể ảnh hưởng thứ hạng.

Thứ hai là accessibility. Các công cụ hỗ trợ như screen reader dựa vào semantic HTML để giúp người dùng khiếm thị điều hướng nhanh. Ví dụ, họ có thể nhảy thẳng đến `<nav>` hoặc `<main>` chỉ bằng phím tắt. Nếu thay bằng `<div>`, bạn buộc phải thêm ARIA roles thủ công, vừa tốn công vừa dễ sai.

Một ví dụ rõ ràng: dùng `<button>` thay vì `<div>` để làm nút. `<button>` mặc định hỗ trợ focus, điều khiển bằng bàn phím (Enter/Space), và có ý nghĩa rõ ràng cho cả trình duyệt lẫn assistive tech. Nếu dùng `<div>`, bạn phải viết thêm JavaScript để mô phỏng tất cả hành vi đó.

Tuy nhiên, `<div>` vẫn rất hữu ích khi làm container layout hoặc nhóm các phần tử không có ý nghĩa riêng, ví dụ khi dùng Flexbox/Grid để chia cột.

Tóm lại, semantic HTML không phải “tốn thời gian”, mà là khoản đầu tư giúp code rõ ràng, dễ bảo trì và thân thiện hơn với cả máy lẫn người.
## Phần D :
https://drive.google.com/file/d/1l7Kv9Fn2DH2N2iVLyxrVjjWiwDgVlZKo/view?usp=sharing