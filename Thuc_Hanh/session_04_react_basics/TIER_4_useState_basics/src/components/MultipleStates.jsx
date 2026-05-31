import { useState } from "react";

function MultipleStates() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    function handleSubmit() {
        if (!name.trim() || !age || !email.trim()) return alert("Vui lòng nhập đầy đủ thông tin!");
        if (Number(age) <= 0 || Number(age) >= 100) return alert("Tuổi phải > 0 và < 100!");
        if (!email.includes("@")) return alert("Email không hợp lệ!");
        setSubmitted(true);
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>Bài 4.4 — Form đăng ký</h3>
            {name.trim() && <p style={{ color: "blue" }}>👋 Xin chào {name}!</p>}
            {!submitted ? (
                <div>
                    <input placeholder="Tên" value={name} onChange={(e) => setName(e.target.value)} /><br/>
                    <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: "5px" }} /><br/>
                    <input placeholder="Tuổi" type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ marginTop: "5px" }} /><br/>
                    <label style={{ display: "block", margin: "5px 0" }}>
                        <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} /> Là sinh viên
                    </label>
                    <button onClick={handleSubmit}>Đăng ký</button>
                </div>
            ) : (
                <div style={{ background: "#d4edda", padding: "10px" }}>
                    <p>✅ Đăng ký thành công! (Tên: {name}, Email: {email}, Tuổi: {age}, Sinh viên: {isStudent ? "Có" : "Không"})</p>
                    <button onClick={() => setSubmitted(false)}>Đăng ký lại</button>
                </div>
            )}
        </div>
    );
}

export default MultipleStates;