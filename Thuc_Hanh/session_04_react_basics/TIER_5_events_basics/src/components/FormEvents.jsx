import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    const [submitted, setSubmitted] = useState(false);

    // Hàm tạo thông báo lỗi realtime
    const getErrors = () => {
        const errors = {};
        if (formData.email && !formData.email.includes("@")) {
            errors.email = "Email bắt buộc phải chứa ký tự @";
        }
        if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Mật khẩu xác nhận không trùng khớp!";
        }
        return errors;
    };

    const errors = getErrors();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn reload trang
        
        // Kiểm tra xem form còn lỗi hay trống dữ liệu không trước khi submit
        if (Object.keys(errors).length > 0 || !formData.username || !formData.email || !formData.password) {
            alert("Vui lòng sửa các lỗi hiển thị trên form trước khi gửi!");
            return;
        }

        setSubmitted(true);
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3 style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}>Bài 5.4 — Form Events</h3>
            
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {/* Tên */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block" }}>Tên đăng nhập:</label>
                        <input name="username" value={formData.username} onChange={handleChange} style={{ width: "100%", padding: "6px" }} required />
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block" }}>Email:</label>
                        <input name="email" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "6px" }} required />
                        {errors.email && <small style={{ color: "red", display: "block", marginTop: "3px" }}>{errors.email}</small>}
                    </div>

                    {/* Mật khẩu */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block" }}>Mật khẩu:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: "100%", padding: "6px" }} required />
                    </div>

                    {/* Xác nhận mật khẩu */}
                    <div style={{ marginBottom: "12px" }}>
                        <label style={{ display: "block" }}>Xác nhận mật khẩu:</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={{ width: "100%", padding: "6px" }} required />
                        {errors.confirmPassword && <small style={{ color: "red", display: "block", marginTop: "3px" }}>{errors.confirmPassword}</small>}
                    </div>

                    <button type="submit" style={{ padding: "8px 16px", background: "#27ae60", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Đăng ký ngay
                    </button>
                </form>
            ) : (
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px", color: "#155724" }}>
                    <h4>✅ Đăng ký form thành công!</h4>
                    <p>Chào mừng thành viên: <strong>{formData.username}</strong></p>
                    <p>Hệ thống đã ghi nhận email: {formData.email}</p>
                    <button onClick={() => { setSubmitted(false); setFormData({ username: "", email: "", password: "", confirmPassword: "" }); }} style={{ marginTop: "10px" }}>
                        Tạo tài khoản mới
                    </button>
                </div>
            )}
        </div>
    );
}

export default FormEvents;