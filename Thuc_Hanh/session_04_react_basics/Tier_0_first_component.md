## Bài 0.1:
1. File .jsx khác file .js:
    - js (JavaScript thuần): Chỉ hiểu cú pháp logic của JavaScript (biến, hàm, vòng lặp). Nếu viết thẻ HTML như <h1> vào đây, chương trình sẽ báo lỗi cú pháp ngay lập tức.
    - jsx (JavaScript XML): Đây là một cú pháp mở rộng. Nó cho phép viết mã HTML trực tiếp bên trong code JavaScript. Công cụ biên dịch (Vite) sẽ tự động chuyển các thẻ HTML này thành mã JavaScript chạy ngầm để hiển thị lên trình duyệt.
2. Tại sao phải có `export default App`: Để component App có thể được import và sử dụng ở file khác.
3. Thử xóa export default → chuyện gì xảy ra: React sẽ báo lỗi vì không import được component `App`.

## Bài 0.2: