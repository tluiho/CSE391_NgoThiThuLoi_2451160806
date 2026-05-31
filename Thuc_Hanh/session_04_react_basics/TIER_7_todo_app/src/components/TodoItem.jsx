import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        if (editText.trim() === "") return;
        onUpdate(todo.id, editText.trim());
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSave();
        if (e.key === "Escape") {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    return (
        <div style={{ 
            display: "flex",
            alignItems: "center",
            padding: "12px",
            margin: "5px 0",
            background: todo.done ? "#f0fff0" : "#fff",
            border: "1px solid #eee",
            borderRadius: "4px",
            gap: "10px"
        }}>
            {/* Chế độ đang SỬA BIỂU MẪU INLINE */}
            {isEditing ? (
                <div style={{ display: "flex", flex: 1, gap: "5px" }}>
                    <input 
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        style={{ flex: 1, padding: "5px", borderRadius: "4px", border: "1px solid #3498db" }}
                    />
                    <button onClick={handleSave} style={{ background: "#27ae60", color: "#fff", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>✓</button>
                    <button onClick={() => { setIsEditing(false); setEditText(todo.text); }} style={{ background: "#95a5a6", color: "#fff", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>✕</button>
                </div>
            ) : (
                /* Chế độ XEM THÔNG THƯỜNG */
                <>
                    <input 
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => onToggle(todo.id)}
                        style={{ cursor: "pointer" }}
                    />
                    
                    {/* Lvl 2: Double-click vào text để sửa nhanh */}
                    <div 
                        onDoubleClick={() => setIsEditing(true)}
                        style={{ flex: 1, display: "flex", flexDirection: "column", cursor: "pointer" }}
                        title="Double-click để sửa nhanh"
                    >
                        <span style={{ 
                            textDecoration: todo.done ? "line-through" : "none",
                            color: todo.done ? "#999" : "#333",
                            fontSize: "16px"
                        }}>
                            {todo.text}
                        </span>
                        {/* Lvl 1: Hiển thị ngày tạo thời gian thực */}
                        <small style={{ color: "#aaa", fontSize: "11px", marginTop: "2px" }}>
                            📅 Tạo lúc: {todo.createdAt}
                        </small>
                    </div>

                    {/* Nút Sửa */}
                    <button 
                        onClick={() => setIsEditing(true)}
                        style={{ background: "#f39c12", color: "white", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}
                    >
                        ✏️
                    </button>

                    {/* Nút Xóa */}
                    <button 
                        onClick={() => onDelete(todo.id)}
                        style={{ background: "#e74c3c", color: "white", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}
                    >
                        🗑
                    </button>
                </>
            )}
        </div>
    );
}

export default TodoItem;