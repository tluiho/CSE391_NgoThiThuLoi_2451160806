import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
    // Lvl 2: Khởi tạo state lấy dữ liệu từ localStorage phòng khi reload trang
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("react_todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");

    // Tự động lưu dữ liệu vào localStorage mỗi khi danh sách todos biến động
    useEffect(() => {
        localStorage.setItem("react_todos", JSON.stringify(todos));
    }, [todos]);

    // ===== Thêm todo mới =====
    function addTodo() {
        if (inputValue.trim() === "") return;
        
        const newTodo = {
            id: Date.now(),
            text: inputValue.trim(),
            done: false,
            // Lvl 1: Thêm ngày giờ khởi tạo
            createdAt: new Date().toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", second: "2-digit", day: "2-digit", month: "2-digit" })
        };
        
        setTodos([...todos, newTodo]);
        setInputValue("");
    }
    
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    }
    
    // ===== Thay đổi trạng thái hoàn thành =====
    function toggleTodo(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    }
    
    // ===== Xóa công việc =====
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // ===== Lvl 2: Sửa nội dung công việc =====
    function updateTodo(id, newText) {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    }
    
    // ===== Lọc dữ liệu hiển thị =====
    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "completed") return todo.done;
        return true;
    });
    
    // Thống kê số liệu công việc
    const totalCount = todos.length; // Lvl 1: Tổng số việc
    const activeCount = todos.filter(todo => !todo.done).length;
    const completedCount = todos.filter(todo => todo.done).length;

    // Lvl 1: Thay đổi placeholder động theo Filter hiện hành
    const getDynamicPlaceholder = () => {
        if (filter === "active") return "Nhập việc CHƯA LÀM để thêm nhanh...";
        if (filter === "completed") return "Nhập việc ĐÃ HOÀN THÀNH để lưu trữ...";
        return "Nhập công việc cần làm mới...";
    };
    
    return (
        <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", fontFamily: "Arial, sans-serif", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", borderRadius: "8px", background: "#fff" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50", lineHeight: "1.4" }}>📋 Advanced Todo List</h1>
            
            {/* Input thêm tác vụ */}
            <div style={{ display: "flex", marginBottom: "20px" }}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={getDynamicPlaceholder()}
                    style={{ 
                        flex: 1, 
                        padding: "12px", 
                        fontSize: "15px",
                        border: "2px solid #ddd",
                        borderRadius: "4px 0 0 4px",
                        outline: "none"
                    }}
                />
                <button 
                    onClick={addTodo}
                    style={{ 
                        padding: "12px 24px", 
                        fontSize: "15px",
                        background: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "0 4px 4px 0",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    Thêm
                </button>
            </div>
            
            {/* Thanh bộ lọc */}
            <TodoFilter filter={filter} setFilter={setFilter} />
            
            {/* Thống kê nhanh tổng quan */}
            <p style={{ fontSize: "13px", color: "#666", textAlign: "right", margin: "5px 0" }}>
                📊 Tổng cộng: <strong>{totalCount}</strong> công việc trong hệ thống
            </p>

            {/* Render Danh sách công việc */}
            {filteredTodos.length === 0 ? (
                <div style={{ textAlign: "center", padding: "40px", color: "#999", border: "1px dashed #ddd", borderRadius: "4px" }}>
                    {todos.length === 0 ? "📝 Hệ thống trống. Hãy viết việc cần làm!" : "🔍 Không tìm thấy việc nào khớp bộ lọc"}
                </div>
            ) : (
                filteredTodos.map(todo => (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onUpdate={updateTodo}
                    />
                ))
            )}
            
            {todos.length > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", padding: "10px", background: "#f9f9f9", borderRadius: "4px", borderLeft: "4px solid #3498db", fontSize: "14px" }}>
                    <span style={{ color: "#2980b9", fontWeight: "bold" }}>⏳ {activeCount} việc đang chờ</span>
                    {completedCount > 0 && (
                        <span style={{ color: "#27ae60", fontWeight: "bold" }}>✅ Đã giải quyết {completedCount} việc</span>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;