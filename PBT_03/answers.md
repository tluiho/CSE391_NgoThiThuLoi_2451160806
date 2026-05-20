# Phần A:
## Câu A1 - 3 Cách nhúng CSS
1. Inline CSS:
 - Ví dụ: `<p style="color: red; font-size: 16px;">Hello</p>`
 - Ưu điểm: Áp dụng nhanh chóng cho một phần tử duy nhất, có độ ưu tiên cao, tiện khi cần test nhanh.
 - Nhược điểm: Làm code HTML trở nên rối rắm, khó bảo trì, không tái sử dụng được code CSS.
 - Khi nào dùng: Khi cần test nhanh hoặc khi viết code cho các thành phần động từ JavaScript (như tính toán vị trí, ẩn/hiện động).
2. Internal CSS:
 - Ví dụ: 
 ```html
 <head>
    <style>
        h1 {
            color: red;
            font-size: 24px;
        }
    </style>
</head>
```
 - Ưu điểm: Quản lý toàn bộ CSS của một trang tại một nơi duy nhất, không cần tạo thêm file bên ngoài.
 - Nhược điểm: Chỉ có tác dụng trên đúng trang đó, không chia sẻ được cho các trang khác trong cùng website; làm tăng dung lượng file HTML.
 - Khi nào dùng: Khi website chỉ có duy nhất một trang (Single Page) hoặc trang đó có style hoàn toàn biệt lập với phần còn lại của hệ thống.
3. External CSS:
 - Ví dụ: `<link rel="stylesheet" href="style.css">` (Trong file style.css chỉ ghi: p { color: green; })
 - Ưu điểm: Tách biệt hoàn toàn cấu trúc (HTML) và giao diện (CSS). Giúp tái sử dụng code cho toàn bộ website, dễ bảo trì, trình duyệt có thể cache file giúp tải trang nhanh hơn ở các lần sau.
 - Nhược điểm: Tốn thêm một yêu cầu HTTP (HTTP Request) để tải file CSS về ở lần đầu tiên.
 - Khi nào dùng: Đây là tiêu chuẩn bắt buộc cho mọi dự án thực tế và chuyên nghiệp.
- Trả lời câu hỏi thêm: Inline CSS sẽ "thắng" (độ ưu tiên cao nhất) vì Theo quy tắc Specificity (Độ ưu tiên) của CSS, Inline CSS có trọng số trực tiếp trên thẻ nên luôn mạnh hơn Selector ở Internal và External. Còn giữa Internal và External, cách nào nằm dưới trong file HTML (đọc sau) sẽ thắng theo quy tắc Cascade (Thứ tự ghi đè).
## Câu A2:
1. h1                           
→ Chọn: ShopTLU
2. .price                       
→ Chọn: 25.990.000đ và 45.990.000đ (Chọn cả 2 thẻ p chứa giá).
3. #app header                  
→ Chọn: `<header class="top-bar dark">`,text content: ShopTLU Home Products About
4. nav a:first-child             
→ Chọn: Home
5. .product.featured h2         
→ Chọn: MacBook Pro (Do có cả 2 class đồng thời)
6. article > p                  
→ Chọn: 25.990.000đ, Mô tả sản phẩm..., 45.990.000đ và Mô tả sản phẩm... (Chọn tất cả các thẻ p là con trực tiếp của thẻ article).
7. a[href="/"]                  → Chọn: Home
8. .top-bar.dark h1              → Chọn: ShopTLU
## Câu A3:
- Trường hợp 1: content-box (mặc định):
    → Chiều rộng hiển thị = 400 + 20x2 + 5x2 = 450px
    → Không gian chiếm trên trang = 450 + 10x2 = 470px
- Trường hợp 2: border-box:
    → Chiều rộng hiển thị = Đúng bằng kích thước khai báo = 400px
    → Kích thước content thực tế = 400 - 40 - 10 = 350px
    → Không gian chiếm trên trang = 400 + 10x2 = 420px
- Trường hợp 3: Margin collapse:
    → Khoảng cách giữa box-a và box-b = 40px
    → Giải thích tại sao KHÔNG PHẢI 65px: Khi hai khối block nằm dọc kề nhau, lề dọc (margin-top và margin-bottom) của chúng không cộng dồn lại mà sẽ hòa nhập vào nhau (collapse). Trình duyệt sẽ chọn lấy giá trị lớn nhất giữa 2 lề (max(25, 40) = 40px) để làm khoảng cách thực tế.
- Nâng cao: Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px
    + Khoảng cách thực tế: 40px + (-10px) = 30px (Quy tắc: Khi có margin âm, khoảng cách bằng tổng đại số của margin dương lớn nhất và margin âm nhỏ nhất).
## Câu A4: 
1. 
- Rule A:
 + Selector: p
 + Trọng số: (0, 0, 1)
- Rule B:
 + Selector: .price
 + Trọng số: (0, 1, 0)
- Rule C:
 + Selector: #main-price
 + Trọng số: (1, 0, 0)
- Rule D:
 + Selector: p.price
 + Trọng số: (0, 1, 1)
2. Element sẽ có màu đỏ: Do Rule C (#main-price) sử dụng ID selector nên có trọng số (1, 0, 0) cao nhất, vượt trội hoàn toàn so với các Class hay Element selector khác.
3. Nếu thêm `<p class="price" id="main-price" style="color: orange;">`, element có màu cam vì Inline Style có độ ưu tiên cao hơn mọi Selector thông thường trong file CSS.
4. Nếu Rule A thêm !important: Element sẽ có màu đen. Vì từ khóa !important phá vỡ mọi quy tắc trọng số thông thường, đưa thuộc tính đó lên mức ưu tiên tối cao nhất.

# Phần B:
## Câu B1: Các loại selector đã dùng
1. Element selector
```css
body
table
th
td
```
2. Class selector
```css
.container
.profile
.skills
.active
```
3. ID selector
```css
#main-header
```
4. Descendant selector
```css
nav a
```
5. Pseudo-class selector
```css
nav a:hover
tr:nth-child(even)
tr:hover
```
