## Bài 0.1:
1. File .jsx khác file .js:
    - js (JavaScript thuần): Chỉ hiểu cú pháp logic của JavaScript (biến, hàm, vòng lặp). Nếu viết thẻ HTML như `<h1>` vào đây, chương trình sẽ báo lỗi cú pháp ngay lập tức.
    - jsx (JavaScript XML): Đây là một cú pháp mở rộng. Nó cho phép viết mã HTML trực tiếp bên trong code JavaScript. Công cụ biên dịch (Vite) sẽ tự động chuyển các thẻ HTML này thành mã JavaScript chạy ngầm để hiển thị lên trình duyệt.
2. Tại sao phải có `export default App`: Để component App có thể được import và sử dụng ở file khác.
3. Thử xóa export default → chuyện gì xảy ra: React sẽ báo lỗi vì không import được component `App`.

## Bài 0.2:
### Bài 1: Tạo file UserProfile.jsx trong src/
### Bài 2: Tạo file ProductInfo.jsx trong src/

## Bài 1.1:
1. Tại sao component chỉ render 1 lần?:
    - Vì ban đầu React chỉ cần gọi hàm (function) đúng 1 lần duy nhất để lấy mã JSX, biên dịch và vẽ giao diện lên màn hình (gọi là quá trình Mount / Initial Render).
2. Khi nào nó sẽ render lại (Re-render)?
    - Nó chỉ render lại khi State thay đổi (gọi hàm setState), khi Props (dữ liệu từ cha truyền vào) thay đổi, hoặc khi component cha của nó bị re-render.
## Bài 1.2:
1. Chạy BadCounter → Nhấn nút → Thấy gì?
    - Hiện tượng: Số trên màn hình giữ nguyên là `0`. Nhìn vào F12 Console thấy giá trị `count` vẫn tăng `1, 2, 3....`.
    - Lý do: Biến thường thay đổi không thể kích hoạt cơ chế vẽ lại giao diện của React.
2. Chạy `GoodCounter` → Nhấn nút → Thấy gì?
    - Hiện tượng: Số trên màn hình lập tức cập nhật tăng theo mỗi lần click.
    - Lý do: Hàm `setCount` thông báo cho React biết trạng thái đã đổi, buộc component phải chạy lại (re-render) để lấy JSX mới.
3. Mở Console → Thấy log "render" mấy lần? : Mỗi lần bấm nút ở `GoodCounter` hay `FlowDemo`, bạn sẽ thấy log render chạy thêm 1 lần (tổng số lần bằng số click + 1 lần chạy đầu).
## Bài 1.3: Tạo file trong TIER1/src/