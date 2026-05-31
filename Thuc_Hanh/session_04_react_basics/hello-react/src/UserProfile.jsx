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