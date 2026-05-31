import { useState } from "react";

function ClickEvents() {
    const [bgColor, setBgColor] = useState("#3498db");
    const [btn1Count, setBtn1Count] = useState(0);
    const [btn2Count, setBtn2Count] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    // Hàm sinh màu HEX ngẫu nhiên
    const generateRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setBgColor(color);
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px", borderRadius: "8px" }}>
            <h3 style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}>Bài 5.1 — Click Events</h3>
            
            {/* 1. Đổi màu ngẫu nhiên cho Div */}
            <div style={{ 
                width: "100%", 
                height: "60px", 
                backgroundColor: bgColor, 
                color: "#fff", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                borderRadius: "4px",
                marginBottom: "10px",
                fontWeight: "bold",
                transition: "background 0.2s"
            }}>
                Màu hiện tại: {bgColor}
            </div>
            <button onClick={generateRandomColor} style={{ marginBottom: "15px" }}>Đổi màu ngẫu nhiên</button>

            {/* 2. Đếm số lần click riêng biệt */}
            <div style={{ marginBottom: "15px" }}>
                <button onClick={() => setBtn1Count(btn1Count + 1)} style={{ marginRight: "10px" }}>
                    Nút A ({btn1Count} lần)
                </button>
                <button onClick={() => setBtn2Count(btn2Count + 1)}>
                    Nút B ({btn2Count} lần)
                </button>
            </div>

            {/* 3. Nút Like với icon toggle */}
            <div>
                <button 
                    onClick={() => setIsLiked(!isLiked)} 
                    style={{ fontSize: "16px", padding: "6px 12px", cursor: "pointer" }}
                >
                    {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
                </button>
            </div>
        </div>
    );
}

export default ClickEvents;