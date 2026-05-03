# Phần A:
## Câu A1:
1. type="email": Ô nhập text, tự kiểm tra có @. Dùng cho đăng ký tài khoản
2. type="password": Hiển thị ký tự dạng dấu chấm. Dùng cho đăng nhập
3. type="number": Ô nhập số, có nút tăng/giảm. Dùng nhập số lượng sản phẩm
4. type="tel": Ô nhập số điện thoại. Dùng nhập SĐT giao hàng
5. type="url": Kiểm tra định dạng link. Dùng nhập website người bán
6. type="date": Hiển thị lịch chọn ngày. Dùng chọn ngày giao hàng
7. type="radio": Chọn 1 trong nhiều. Dùng chọn phương thức thanh toán
8. type="checkbox": Chọn nhiều. Dùng chọn nhiều sản phẩm/lọc
9. type="file": Chọn file upload. Dùng upload ảnh đánh giá
10. type="search": Ô tìm kiếm có nút xóa nhanh. Dùng thanh search sản phẩm

## Câu A2:
<!-- Trường hợp 1 -->
`<input type="text" required value="">`   <!-- User để trống --> Không submit được. Vì required mà để trống thì trình duyệt báo lỗi.

![alt text](screenshots/image.png)

<!-- Trường hợp 2 -->
`<input type="email" value="abc">`        <!-- User gõ "abc" --> Không submit được. Vì không đúng định dạng email (thiếu @).
![alt text](screenshots/image-1.png)

<!-- Trường hợp 3 -->
`<input type="number" min="1" max="10" value="15">` <!-- User gõ 15 --> Không submit được. Vì 15 > max (10).

![alt text](screenshots/image-2.png)

<!-- Trường hợp 4 -->
`<input type="text" pattern="[0-9]{10}" value="abc123">` <!-- User gõ "abc123" --> Không submit được. Vì không đúng regex (phải 10 số)
![alt text](screenshots/image-3.png)
<!-- Trường hợp 5 -->
`<input type="password" minlength="8" value="123">`  <!-- User gõ "123" --> Không submit được. Vì độ dài < 8
![alt text](screenshots/image-4.png)

## Câu A3:
