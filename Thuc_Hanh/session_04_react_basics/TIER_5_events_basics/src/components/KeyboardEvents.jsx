import { useState, useEffect } from "react";

function KeyboardEvents() {
    // 1. State Game đoán phím
    const keysPool = ["A", "S", "D", "F", "W", "E", "R", "Space"];
    const [targetKey, setTargetKey] = useState("A");
    const [gameMessage, setGameMessage] = useState("Nhấn phím bất kỳ để bắt đầu!");

    // 2. State di chuyển ô vuông
    const [position, setPosition] = useState({ x: 50, y: 50 });

    // 3. State phím tắt Ctrl+D
    const [isDarkBg, setIsDarkBg] = useState(false);

    const handleKeyDown = (e) => {
        // 3. Phím tắt Ctrl + D đổi màu nền vùng này
        // Sử dụng e.key.toLowerCase() để bắt phím "d" hoặc "D"
        if (e.ctrlKey && e.key.toLowerCase() === "d") {
            e.preventDefault(); // Ngăn trình duyệt mở hộp thoại Bookmark mặc định
            setIsDarkBg(!isDarkBg);
            return;
        }

        // 1. Game đoán phím
        let pressedKey = e.key;
        if (pressedKey === " ") pressedKey = "Space"; // Chuẩn hóa phím cách

        if (pressedKey.toLowerCase() === targetKey.toLowerCase()) {
            setGameMessage("🎉 Chính xác! Bạn giỏi quá.");
            // Chọn phím ngẫu nhiên tiếp theo
            const nextKey = keysPool[Math.floor(Math.random() * keysPool.length)];
            setTargetKey(nextKey);
        } else {
            setGameMessage(`❌ Sai rồi! Bạn bấm phím "${pressedKey}". Hãy thử lại.`);
        }

        // 2. Di chuyển ô vuông (Bước nhảy: 10px)
        const step = 10;
        if (e.key === "ArrowUp") setPosition(prev => ({ ...prev, y: Math.max(0, prev.y - step) }));
        if (e.key === "ArrowDown") setPosition(prev => ({ ...prev, y: Math.min(100, prev.y + step) }));
        if (e.key === "ArrowLeft") setPosition(prev => ({ ...prev, x: Math.max(0, prev.x - step) }));
        if (e.key === "ArrowRight") setPosition(prev => ({ ...prev, x: Math.min(200, prev.x + step) }));
    };

    return (
        <div 
            onKeyDown={handleKeyDown}
            tabIndex={0} // Bắt buộc phải có để thẻ div nhận diện được event bàn phím
            style={{ 
                padding: "20px", 
                border: "1px solid #ccc", 
                marginBottom: "20px", 
                borderRadius: "8px",
                outline: "none",
                backgroundColor: isDarkBg ? "#2c3e50" : "#fff",
                color: isDarkBg ? "#fff" : "#000",
                transition: "background 0.3s"
            }}
        >
            <h3 style={{ borderBottom: "2px solid", paddingBottom: "5px" }}>Bài 5.3 — Keyboard Events</h3>
            <p style={{ fontSize: "12px", color: isDarkBg ? "#ccc" : "#666" }}>💡 Hãy click vào vùng này trước khi bấm phím để kích hoạt.</p>
            <p style={{ fontWeight: "bold", color: "#e74c3c" }}>Phím tắt: Bấm Ctrl + D để đổi màu nền vùng này.</p>

            {/* Game đoán phím */}
            <div style={{ background: "rgba(0,0,0,0.05)", padding: "10px", borderRadius: "4px", marginBottom: "15px" }}>
                <h4>🎯 Game: Hãy nhấn phím: <span style={{ fontSize: "20px", color: "#27ae60" }}>{targetKey}</span></h4>
                <p>{gameMessage}</p>
            </div>

            {/* Vùng di chuyển ô vuông */}
            <h4>🕹️ Di chuyển ô vuông (Dùng các phím mũi tên ↑ ↓ ← →):</h4>
            <div style={{ width: "100%", height: "140px", border: "1px dashed #999", position: "relative", background: "rgba(0,0,0,0.02)" }}>
                <div style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#e67e22",
                    position: "absolute",
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transition: "all 0.1s ease-out",
                    borderRadius: "4px"
                }} />
            </div>
        </div>
    );
}

export default KeyboardEvents;