import { useState } from "react";

function BooleanState() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Thử thách: Hiện/Ẩn mật khẩu
    const [isOpenAccordion, setIsOpenAccordion] = useState(false); // Thử thách: Accordion
    const [isLightOn, setIsLightOn] = useState(false); // Thử thách: Bóng đèn

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px", borderRadius: "8px" }}>
            <h3 style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}>Bài 4.3 — useState với boolean</h3>
            <div style={{ marginBottom: "20px" }}>
                <label style={{ fontWeight: "bold" }}>Mật khẩu: </label>
                <input 
                    type={showPassword ? "text" : "password"} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Nhập mật khẩu..."
                    style={{ padding: "5px", width: "200px" }}
                />
                <button style={{ marginLeft: "5px", padding: "5px 10px" }} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "👁️ Ẩn" : "👁️ Hiện"}
                </button>
            </div>
            <div style={{ marginBottom: "20px", border: "1px solid #ddd", borderRadius: "4px", overflow: "hidden" }}>
                <div 
                    onClick={() => setIsOpenAccordion(!isOpenAccordion)} 
                    style={{ background: "#eee", padding: "10px", cursor: "pointer", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}
                >
                    <span>📖 Điều khoản sử dụng</span>
                    <span>{isOpenAccordion ? "▼" : "▶"}</span>
                </div>
                {isOpenAccordion && (
                    <div style={{ padding: "15px", background: "#fff", borderTop: "1px solid #ddd", lineHeight: "1.5" }}>
                        Đây là nội dung của Accordion. Bạn đã kích hoạt trạng thái điều khoản bằng biến Boolean thành công!
                    </div>
                )}
            </div>
            <div style={{ textAlign: "center", padding: "15px", background: isLightOn ? "#fffde7" : "#f5f5f5", borderRadius: "6px", transition: "0.3s" }}>
                <div style={{ fontSize: "50px", marginBottom: "10px" }}>
                    {isLightOn ? "💡" : "⚫"}
                </div>
                <button 
                    onClick={() => setIsLightOn(!isLightOn)}
                    style={{ padding: "6px 12px", cursor: "pointer", background: isLightOn ? "#fbc02d" : "#9e9e9e", color: "#fff", border: "none", borderRadius: "4px" }}
                >
                    {isLightOn ? "TẮT ĐÈN" : "BẬT ĐÈN"}
                </button>
            </div>
        </div>
    );
}

export default BooleanState;