# Phần A:
## Câu A1 - 3 Cách nhúng CSS
1. Inline CSS:
 - Ví dụ: `<p style="color: red; font-size: 16px;">Hello</p>`
 - Ưu điểm: Áp dụng nhanh chóng cho một phần tử duy nhất, có độ ưu tiên cao, tiện khi cần test nhanh.
 - Nhược điểm: Làm code HTML trở nên rối rắm, khó bảo trì, không tái sử dụng được code CSS.
 - Khi nào dùng: Khi cần test nhanh hoặc khi viết code cho các thành phần động từ JavaScript (như tính toán vị trí, ẩn/hiện động).
2. Internal CSS:
 - Ví dụ: 
 `<head>`
    `<style>`
        p { color: blue; }
    `</style>`
`</head>`
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