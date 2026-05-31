import { useState } from "react";

function InputEvents() {
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    // Hàm đếm số từ chính xác
    const countWords = (str) => {
        const trimmed = str.trim();
        return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px", borderRadius: "8px" }}>
            <h3 style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}>Bài 5.2 — Input Events</h3>

            {/* 1. Ô nhập email với validation */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", fontWeight: "bold" }}>Email:</label>
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn..."
                    style={{ padding: "6px", width: "250px" }}
                />
                {email && (
                    <span style={{ marginLeft: "10px", color: email.includes("@") ? "green" : "red", fontWeight: "bold" }}>
                        {email.includes("@") ? "✓ Email hợp lệ" : "✗ Thiếu ký tự @"}
                    </span>
                )}
            </div>

            {/* 2 & 3. Đếm số từ và Preview */}
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", fontWeight: "bold" }}>Đoạn văn tự do:</label>
                <textarea 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Nhập văn bản vào đây..."
                    style={{ padding: "6px", width: "100%", boxSizing: "border-box" }}
                    rows={3}
                />
            </div>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>
                Số ký tự: <strong>{text.length}</strong> | Số từ: <strong>{countWords(text)}</strong>
            </p>
            
            {text && (
                <div style={{ background: "#f9f9f9", padding: "10px", borderLeft: "4px solid #007bff", marginTop: "10px" }}>
                    <strong>Preview xem trước:</strong> {text}
                </div>
            )}
        </div>
    );
}

export default InputEvents;