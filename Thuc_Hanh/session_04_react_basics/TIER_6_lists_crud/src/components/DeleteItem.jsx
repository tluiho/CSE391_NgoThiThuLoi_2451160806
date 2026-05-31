import { useState } from "react";

function DeleteItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" }
    ]);
    
    const [deletedHistory, setDeletedHistory] = useState(null); // Lưu lịch sử phục hồi

    function handleDelete(itemToDelete) {
        // Chỉ cho xóa khi người dùng bấm Confirm đồng ý
        if (window.confirm(`Bạn có chắc chắn muốn xóa sinh viên ${itemToDelete.name}?`)) {
            
            // Lưu lại thông tin phòng trường hợp Hoàn tác
            setDeletedHistory({
                item: itemToDelete,
                oldList: items
            });

            // Tiến hành lọc xóa
            setItems(items.filter(item => item.id !== itemToDelete.id));

            //Tự động hủy Hoàn tác sau 5 giây
            setTimeout(() => {
                setDeletedHistory(null);
            }, 5000);
        }
    }
    
    function handleUndo() {
        if (deletedHistory) {
            setItems(deletedHistory.oldList); // Khôi phục mảng cũ trước khi xóa
            setDeletedHistory(null); // Xóa lịch sử sau khi hoàn tác
        }
    }
    
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px", borderRadius: "8px" }}>
            <h3 style={{ borderBottom: "2px solid #333", paddingBottom: "5px", lineHeight: "1.4" }}>
                Bài 6.3 — Xóa phần tử (DELETE)
            </h3>

            {/* Thanh thông báo đã xóa kèm nút hoàn tác trong 5 giây */}
            {deletedHistory && (
                <div style={{ 
                    background: "#fff3cd", 
                    padding: "10px", 
                    marginBottom: "10px", 
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <span style={{ color: "#856404" }}>🗑️ Đã xóa sinh viên: <strong>{deletedHistory.item.name}</strong></span>
                    <button onClick={handleUndo} style={{ background: "#007bff", color: "white", border: "none", padding: "4px 8px", cursor: "pointer", borderRadius: "3px" }}>
                        ↩️ Hoàn tác (5s)
                    </button>
                </div>
            )}
            
            {items.length === 0 ? (
                <p style={{ color: "#999" }}>Danh sách trống hoàn toàn</p>
            ) : (
                items.map(item => (
                    <div key={item.id} style={{ 
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 10px",
                        margin: "5px 0",
                        background: "#f9f9f9",
                        borderLeft: "4px solid #e74c3c"
                    }}>
                        <span>{item.name}</span>
                        <button 
                            onClick={() => handleDelete(item)}
                            style={{ background: "#e74c3c", color: "white", border: "none", padding: "4px 8px", cursor: "pointer", borderRadius: "3px" }}
                        >
                            Xóa
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default DeleteItem;