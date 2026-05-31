import { useState, useRef } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" }
    ]);
    const [newName, setNewName] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    
    const inputRef = useRef(null);
    
    function handleAdd() {
        // Validate chặn không cho thêm nếu tên trống hoặc chỉ toàn dấu cách
        if (newName.trim() === "") {
            alert("Tên môn học không được để trống!");
            return;
        }
        
        const newItem = {
            id: Date.now(),
            name: newName.trim()
        };
        
        setItems([...items, newItem]);
        setNewName(""); // Xóa trắng ô input
        
        // Hiển thị "Đã thêm thành công!" ẩn sau 3 giây
        setSuccessMessage(`🎉 Đã thêm thành công môn: ${newItem.name}!`);
        setTimeout(() => setSuccessMessage(""), 3000);

        // Tự động focus con trỏ chuột lại vào ô input
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleAdd();
        }
    }
    
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px", borderRadius: "8px" }}>
            <h3 style={{ borderBottom: "2px solid #333", paddingBottom: "5px", lineHeight: "1.4" }}>
                Bài 6.2 — Thêm phần tử (CREATE)
            </h3>
            
            <div style={{ marginBottom: "15px" }}>
                <input 
                    ref={inputRef}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nhập tên môn học..."
                    style={{ padding: "8px", marginRight: "10px", width: "200px" }}
                />
                <button onClick={handleAdd} style={{ padding: "8px 16px", cursor: "pointer" }}>
                    ➕ Thêm
                </button>
            </div>

            {/* Thông báo thành công */}
            {successMessage && (
                <p style={{ color: "green", fontWeight: "bold", margin: "5px 0" }}>{successMessage}</p>
            )}
            
            <h4>Danh sách ({items.length} môn):</h4>
            {items.map(item => (
                <div key={item.id} style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                    • {item.name}
                </div>
            ))}
        </div>
    );
}

export default CreateItem;