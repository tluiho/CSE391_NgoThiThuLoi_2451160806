import { useState } from "react";

function UpdateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);
    
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");
    const [notifyMessage, setNotifyMessage] = useState("");
    
    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age.toString());
    }
    
    function saveEdit() {
        // Không cho lưu nếu tên trống hoặc tuổi rỗng
        if (editName.trim() === "" || editAge === "") {
            alert("Không được để trống tên hoặc tuổi!");
            return;
        }
        
        setItems(items.map(item => 
            item.id === editingId 
                ? { ...item, name: editName.trim(), age: parseInt(editAge) }
                : item
        ));
        
        setEditingId(null); // Thoát chế độ sửa
        
        // Hiển thị thông báo "Đã lưu thành công!"
        setNotifyMessage("✅ Đã lưu thay đổi!");
        setTimeout(() => setNotifyMessage(""), 2500);
    }
    
    function cancelEdit() {
        setEditingId(null);
    }
    
    function handleKeyDown(event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") cancelEdit();
    }
    
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3 style={{ borderBottom: "2px solid #333", paddingBottom: "5px", lineHeight: "1.4" }}>
                Bài 6.4 — Sửa phần tử (UPDATE)
            </h3>

            {notifyMessage && (
                <p style={{ color: "green", fontWeight: "bold" }}>{notifyMessage}</p>
            )}
            
            {items.map(item => (
                <div key={item.id} style={{ 
                    padding: "10px", 
                    margin: "5px 0",
                    background: "#f9f9f9",
                    borderRadius: "4px"
                }}>
                    {editingId === item.id ? (
                        <div style={{ display: "flex", gap: "10px" }}>
                            {/*Highlight ô input bằng cách dùng viền màu xanh lá (outline/border) khi đang sửa */}
                            <input 
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                onKeyDown={handleKeyDown}
                                autoFocus
                                style={{ padding: "5px", border: "2px solid #27ae60", borderRadius: "4px", outline: "none" }}
                            />
                            <input 
                                type="number"
                                value={editAge}
                                onChange={(e) => setEditAge(e.target.value)}
                                onKeyDown={handleKeyDown}
                                style={{ padding: "5px", width: "60px", border: "2px solid #27ae60", borderRadius: "4px", outline: "none" }}
                            />
                            <button onClick={saveEdit} style={{ background: "#27ae60", color: "white", border: "none", padding: "4px 10px", cursor: "pointer", borderRadius: "4px" }}>
                                Lưu
                            </button>
                            <button onClick={cancelEdit} style={{ background: "#95a5a6", color: "white", border: "none", padding: "4px 10px", cursor: "pointer", borderRadius: "4px" }}>
                                Hủy
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span>{item.name} - {item.age} tuổi</span>
                            <button onClick={() => startEdit(item)} style={{ background: "#3498db", color: "white", border: "none", padding: "4px 10px", cursor: "pointer", borderRadius: "4px" }}>
                                ✏️ Sửa
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UpdateItem;