import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);

    const getColor = () => {
        if (count > 0) return "green";
        if (count < 0) return "red";
        return "black";
    };

    const getStatusText = () => {
        if (count > 0) return "Số dương";
        if (count < 0) return "Số âm";
        return "Bằng 0";
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px", borderRadius: "8px" }}>
            <h3 style={{ color: getColor() }}>Bài 4.1 — Bộ đếm: {count} ({getStatusText()})</h3>
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
                <button onClick={() => setCount(count + 5)}>Tăng (+5)</button>
                <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count * 2)}>Nhân đôi</button>
            </div>
        </div>
    );
}

export default NumberState;