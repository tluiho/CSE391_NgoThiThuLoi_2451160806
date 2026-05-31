const form = document.getElementById("registerForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmInput = document.getElementById("confirmInput");
const phoneInput = document.getElementById("phoneInput");
const submitBtn = document.getElementById("submitBtn");

const successModal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalData = document.getElementById("modalData");

const validations = { name: false, email: false, password: false, confirm: false, phone: false };

function checkFormValidity() {
    submitBtn.disabled = !Object.values(validations).every(val => val === true);
}

function setUIStatus(input, isValid, iconEl, errorEl, errorMsg = "") {
    if (isValid) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorEl.textContent = "";
        iconEl.textContent = "✅";
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        errorEl.textContent = errorMsg;
        iconEl.textContent = "❌";
    }
}

// 1. Validate Tên (2-50 ký tự)
nameInput.addEventListener("input", () => {
    const val = nameInput.value.trim();
    const isValid = val.length >= 2 && val.length <= 50;
    validations.name = isValid;
    setUIStatus(nameInput, isValid, document.getElementById("nameIcon"), document.getElementById("nameError"), "Tên phải từ 2 đến 50 ký tự");
    checkFormValidity();
});

// 2. Validate Email (Regex)
emailInput.addEventListener("input", () => {
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(val);
    validations.email = isValid;
    setUIStatus(emailInput, isValid, document.getElementById("emailIcon"), document.getElementById("emailError"), "Địa chỉ Email không đúng định dạng");
    checkFormValidity();
});

// 3. Password Strength Meter
passwordInput.addEventListener("input", () => {
    const val = passwordInput.value;
    const bar = document.getElementById("strengthBar");
    const txt = document.getElementById("strengthText");
    const icon = document.getElementById("passwordIcon");
    const errorDisplay = document.getElementById("passwordError");
    
    let strength = 0;
    let msg = "";

    if (val.length === 0) {
        strength = 0;
    } else if (val.length < 8) {
        strength = 1; // Yếu
        msg = "Mật khẩu phải từ 8 ký tự trở lên";
    } else {
        const hasUpper = /[A-Z]/.test(val);
        const hasLower = /[a-z]/.test(val);
        const hasNumber = /[0-9]/.test(val);
        const hasSpecial = /[^A-Za-z0-9]/.test(val);

        if (hasUpper && hasLower && hasNumber && hasSpecial) {
            strength = 3; // Mạnh
        } else if (hasNumber && (hasUpper || hasLower)) {
            strength = 2; // Trung bình
        } else {
            strength = 1; // Yếu nhưng đủ ký tự
            msg = "Mật khẩu cần thêm chữ và số để bảo mật hơn";
        }
    }

    // Cập nhật Progress Bar & Text tương ứng màu sắc đề bài yêu cầu
    if (strength === 1) {
        bar.style.width = "33%"; bar.style.backgroundColor = "#dc3545"; // Đỏ
        txt.textContent = "Yếu 🔴"; txt.style.color = "#dc3545";
        validations.password = false;
        setUIStatus(passwordInput, false, icon, errorDisplay, msg || "Mật khẩu quá yếu");
    } else if (strength === 2) {
        bar.style.width = "66%"; bar.style.backgroundColor = "#ffc107"; // Vàng
        txt.textContent = "Trung bình 🟡"; txt.style.color = "#ffc107";
        validations.password = true;
        setUIStatus(passwordInput, true, icon, errorDisplay);
    } else if (strength === 3) {
        bar.style.width = "100%"; bar.style.backgroundColor = "#28a745"; // Xanh
        txt.textContent = "Mạnh 🟢"; txt.style.color = "#28a745";
        validations.password = true;
        setUIStatus(passwordInput, true, icon, errorDisplay);
    } else {
        bar.style.width = "0";
        txt.textContent = "";
        validations.password = false;
        setUIStatus(passwordInput, false, icon, errorDisplay, "");
    }
    
    // Kích hoạt re-validate cho trường confirm password nếu có thay đổi
    confirmInput.dispatchEvent(new Event("input"));
    checkFormValidity();
});

// 4. Confirm Password
confirmInput.addEventListener("input", () => {
    const isValid = confirmInput.value === passwordInput.value && confirmInput.value.length > 0;
    validations.confirm = isValid;
    setUIStatus(confirmInput, isValid, document.getElementById("confirmIcon"), document.getElementById("confirmError"), "Mật khẩu xác nhận không trùng khớp");
    checkFormValidity();
});

// 5. Phone tự động thêm dấu gạch khi gõ (0901-234-567)
phoneInput.addEventListener("input", (e) => {
    let num = e.target.value.replace(/\D/g, ""); // Xoá ký tự không phải số
    if (num.length > 10) num = num.substring(0, 10);
    
    let formatted = num;
    if (num.length > 4 && num.length <= 7) {
        formatted = `${num.slice(0, 4)}-${num.slice(4)}`;
    } else if (num.length > 7) {
        formatted = `${num.slice(0, 4)}-${num.slice(4, 7)}-${num.slice(7)}`;
    }
    e.target.value = formatted;

    const isValid = num.length === 10;
    validations.phone = isValid;
    setUIStatus(phoneInput, isValid, document.getElementById("phoneIcon"), document.getElementById("phoneError"), "Số điện thoại phải đủ 10 chữ số");
    checkFormValidity();
});

// Submit Form - Hiện Modal thông tin
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Đổ dữ liệu vào Modal
    modalData.innerHTML = `
        <p><b>Họ và tên:</b> ${nameInput.value}</p>
        <p><b>Email:</b> ${emailInput.value}</p>
        <p><b>Số điện thoại:</b> ${phoneInput.value}</p>
    `;
    successModal.style.display = "flex";
});

// Đóng modal và reset form
closeModalBtn.addEventListener("click", () => {
    successModal.style.display = "none";
    form.reset();
    document.querySelectorAll("input").forEach(i => i.classList.remove("valid"));
    document.querySelectorAll(".status-icon").forEach(i => i.textContent = "");
    document.getElementById("strengthBar").style.width = "0";
    document.getElementById("strengthText").textContent = "";
    Object.keys(validations).forEach(k => validations[k] = false);
    checkFormValidity();
});