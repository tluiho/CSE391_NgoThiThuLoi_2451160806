## Bài 0.1:
1. File .jsx khác file .js:
    - js (JavaScript thuần): Chỉ hiểu cú pháp logic của JavaScript (biến, hàm, vòng lặp). Nếu viết thẻ HTML như <h1> vào đây, chương trình sẽ báo lỗi cú pháp ngay lập tức.
    - jsx (JavaScript XML): Đây là một cú pháp mở rộng. Nó cho phép viết mã HTML trực tiếp bên trong code JavaScript. Công cụ biên dịch (Vite) sẽ tự động chuyển các thẻ HTML này thành mã JavaScript chạy ngầm để hiển thị lên trình duyệt.
2. Tại sao phải có `export default App`: Để component App có thể được import và sử dụng ở file khác.
3. Thử xóa export default → chuyện gì xảy ra: React sẽ báo lỗi vì không import được component `App`.

## Bài 0.2:
### Bài 1:
```js
function UserProfile() {
    return (
        <div className="profile"> {/* Sửa class -> className */}
            <h1>Hồ sơ cá nhân</h1>
            <img src="photo.jpg" alt="Ảnh đại diện" /> {/* Thêm dấu / để đóng thẻ đơn */}
            <table>
                <tbody> {/* Thêm tbody để cấu trúc bảng chuẩn React */}
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;
```
### Bài 2:
```js
function ProductInfo() {
    return (
        <div className="product"> {/* Sửa class -> className */}
            <h2>iPhone 15</h2>
            <p className="price">25.000.000đ</p> {/* Sửa class -> className */}
            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>
            <button type="button">Mua ngay</button>
        </div>
    );
}

export default ProductInfo;
```