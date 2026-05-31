import { useState } from "react";

function ListBasics() {
    const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);
    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);

    // Tính tuổi trung bình lớp học
    const averageAge = students.reduce((sum, s) => sum + s.age, 0) / students.length;

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px", borderRadius: "8px" }}>
            <h3 style={{ borderBottom: "2px solid #333", paddingBottom: "5px", lineHeight: "1.4" }}>
                Bài 6.1 — Render danh sách
            </h3>
            
            <h4>Danh sách trái cây</h4>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            
            <h4>Danh sách sinh viên</h4>
            {students.map((student, index) => (
                <div key={student.id} style={{ 
                    padding: "8px", 
                    margin: "5px 0",
                    background: "#f9f9f9",
                    //  Sinh viên tuổi >= 20 hiển thị chữ màu xanh lá, ngược lại màu đen
                    color: student.age >= 20 ? "#27ae60" : "#000",
                    fontWeight: student.age >= 20 ? "bold" : "normal"
                }}>
                    {/*  Hiển thị STT (index + 1) */}
                    STT {index + 1}: {student.name} - {student.age} tuổi
                </div>
            ))}

            {/* Hiển thị tuổi trung bình */}
            <p style={{ marginTop: "15px", fontStyle: "italic", fontWeight: "bold" }}>
                💡 Tuổi trung bình của danh sách: {averageAge.toFixed(1)} tuổi
            </p>
        </div>
    );
}

export default ListBasics;