import { useState } from "react";

function StringState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px", borderRadius: "8px" }}>
            <h3 style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}>Bài 4.2 — useState với chuỗi</h3>
            
            <div style={{ marginBottom: "15px" }}>
                <label style={{ fontWeight: "bold" }}>Tên: </label>
                <input 
                    maxLength={100} 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Nhập tên..."
                    style={{ padding: "5px", width: "200px" }}
                />
                <span style={{ marginLeft: "10px", fontSize: "14px", color: "#666" }}>
                    {name.length}/100
                </span>
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label style={{ fontWeight: "bold" }}>Email: </label>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Nhập email..."
                    style={{ padding: "5px", width: "200px" }}
                />
                {email && (
                    <span style={{ marginLeft: "10px", fontWeight: "bold", color: email.includes("@") ? "green" : "red" }}>
                        {email.includes("@") ? "✓ Email hợp lệ" : "✗ Email không hợp lệ (thiếu @)"}
                    </span>
                )}
            </div>
            {name && (
                <p style={{ background: "#f0f0f0", padding: "10px", borderRadius: "4px" }}>
                    Xin chào <strong>{name}</strong>! Email của bạn là {email || "(chưa nhập)"}
                </p>
            )}
        </div>
    );
}

export default StringState;