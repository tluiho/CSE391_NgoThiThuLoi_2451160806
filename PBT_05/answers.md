## Câu A1:
1. Thẻ `<meta name="viewport">`chuẩn:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Giải thích từng thuộc tính: 
    + `name="viewport"`: Báo cho trình duyệt biết các chỉ thị bên trong thẻ này dùng để thiết lập cấu hình khung hiển thị (viewport) của trang web.
    + `width=device-width`: Chiều rộng trang bằng chiều rộng thiết bị.
    + `initial-scale=1.0`: Tỷ lệ zoom ban đầu là 1:1.
- Thiếu thẻ này: iPhone sẽ tự ép viewport về `980px`, giao diện bị thu nhỏ tí hon, bắt người dùng phải zoom và cuộn ngang.
- Khác biệt:
    + Mobile-First: Viết CSS cho mobile trước, dùng `@media (min-width)` để tăng tiến lên màn hình lớn.
    + Desktop-First: Viết CSS cho desktop trước, dùng `@media (max-width)` để bóp nhỏ về màn hình bé.
- Ví Dụ: 
```css
.sidebar { display: none; }
@media (min-width: 768px) { .sidebar { display: block; } }

.sidebar { display: block; }
@media (max-width: 767px) { .sidebar { display: none; } }
```
- Lý do khuyên dùng Mobile-First: Tối ưu hiệu năng cho thiết bị yếu, tải ít CSS hơn, tập trung vào nội dung cốt lõi, hợp xu hướng mobile chiếm đa số.
## Câu A2:
- `xs` (< 576px): Điện thoại dọc -> 1 cột.
- `sm` (>= 576px): Điện thoại ngang -> 2 cột.
- `md` (>= 768px): Máy tính bảng dọc -> 2 hoặc 3 cột.
- `lg` (>= 992px): Laptop nhỏ -> 3 hoặc 4 cột.
- `xl` (>= 1200px): Desktop lớn -> 4 cột.
## Câu A3:
| Chiều rộng màn hình | `.container` width |
| ------------------- | -------------------|
|       375px         |       100%         |
|       600px         |       540px        |
|       800px         |       720px        |
|       1000px        |       960px        |
|       1400px        |      1140px        |
## Câu A4:
- 4 tính năng chính:
    + Variables ($): Lưu giá trị để dùng lại (Ví dụ: `$color: red;`)
    + Nesting: Viết CSS lồng nhau (Ví dụ: `nav { ul { list-style: none; } }`).
    + Mixins: Hàm tái sử dụng CSS (Ví dụ: `@mixin flex { display: flex; }`).
    + @extend: Kế thừa thuộc tính của class khác (Ví dụ: `.btn-buy { @extend .btn-base; }`).
- Lý do trình duyệt không đọc được: Trình duyệt chỉ hiểu CSS chuẩn, không hiểu cú pháp nâng cao của SCSS.
- Bước chuyển đổi: Cần dùng công cụ biên dịch (Compiler) như Live Sass Compiler hoặc Node-sass để biên dịch `.scss` sang `.css`.

