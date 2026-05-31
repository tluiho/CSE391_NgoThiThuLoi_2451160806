import { useState } from "react";

function ConditionalDemo() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    const [stock, setStock] = useState(3);

    return (
        <div style={{ padding: "15px", border: "2px solid #ffb6c1", marginBottom: "20px", borderRadius: "10px" }}>
            <h3>2. Hiển Thị Có Điều Kiện 🎯</h3>
            <p>Trạng thái hệ thống: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
            <button type="button" onClick={() => setIsOnline(!isOnline)}>Đổi trạng thái mạng</button>
            
            <hr style={{ borderColor: "#ffe4e1", margin: "10px 0" }} />

            <div>
                <button type="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
                </button>
                {isLoggedIn && (
                    <ul style={{ background: "#fffafb", padding: "10px 25px", border: "1px dashed #ffb6c1", marginTop: "5px" }}>
                        <li>Trang cá nhân</li>
                        <li>Cài đặt tài khoản</li>
                    </ul>
                )}
            </div>

            <hr style={{ borderColor: "#ffe4e1", margin: "10px 0" }} />

            <p>Số lượng: {stock > 0 ? `${stock} sản phẩm` : <span style={{ color: "red", fontWeight: "bold" }}>❌ Hết hàng</span>}</p>
            <button type="button" onClick={() => setStock(stock > 0 ? stock - 1 : 5)}>
                {stock > 0 ? "Mua ngay" : "Nhập thêm hàng (+5)"}
            </button>
        </div>
    );
}

export default ConditionalDemo;