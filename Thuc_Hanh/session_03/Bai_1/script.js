const duLieuMau = [
    { maSV: "SV001", hoTen: "Ngô Thị Thu A", ngaySinh: "2000-01-15", lopHoc: "66HTTT1", diemTB: "3.75", email: "ngothithuA@tlu.edu.vn" },
    { maSV: "SV002", hoTen: "Nguyễn Văn Khải", ngaySinh: "2002-05-20", lopHoc: "66CNTT1", diemTB: "3.52", email: "khainv@tlu.edu.vn" },
    { maSV: "SV003", hoTen: "Trần Đức Nam", ngaySinh: "2003-11-02", lopHoc: "66CNTT2", diemTB: "2.80", email: "namtd@tlu.edu.vn" },
    { maSV: "SV004", hoTen: "Trần Thị C", ngaySinh: "2003-11-04", lopHoc: "66CNTT3", diemTB: "2.70", email: "cth@tlu.edu.vn" },
    { maSV: "SV005", hoTen: "Hoàng Mai D", ngaySinh: "2003-01-02", lopHoc: "65HTTT1", diemTB: "2.62", email: "hoangmaid@tlu.edu.vn" }
];

localStorage.removeItem('db_sinhvien_tlu');

let danhSachSV = JSON.parse(localStorage.getItem('db_sinhvien_tlu')) || duLieuMau;

const thanBangSV = document.getElementById('student-table-body');
const khungPopup = document.getElementById('student-modal');
const bieuMauForm = document.getElementById('student-form');

function capNhatGiaoDien() {
    thanBangSV.innerHTML = '';
    let tongDiemLop = 0;

    danhSachSV.forEach((sv, i) => {
        tongDiemLop += parseFloat(sv.diemTB);
        const dongMoi = document.createElement('tr');
        dongMoi.innerHTML = `
            <td>${sv.maSV}</td>
            <td>${sv.hoTen}</td>
            <td>${sv.ngaySinh}</td>
            <td>${sv.lopHoc}</td>
            <td>${parseFloat(sv.diemTB).toFixed(2)}</td>
            <td>${sv.email}</td>
            <td style="text-align: center;">
                <button class="btn btn-warning btn-sm" onclick="bamNutSua(${i})">Sửa</button>
                <button class="btn btn-danger btn-sm" onclick="bamNutXoa(${i})">Xóa</button>
            </td>
        `;
        thanBangSV.appendChild(dongMoi);
    });

    document.getElementById('stat-total').innerText = danhSachSV.length;
    let diemTB = danhSachSV.length > 0 ? (tongDiemLop / danhSachSV.length) : 0;
    document.getElementById('stat-avg').innerText = diemTB.toFixed(2);
    localStorage.setItem('db_sinhvien_tlu', JSON.stringify(danhSachSV));
}

document.getElementById('btn-open-modal').addEventListener('click', function() {
    document.getElementById('modal-title').innerText = "Thêm sinh viên mới";
    document.getElementById('form-mode').value = "THEM";
    document.getElementById('studentId').disabled = false;
    bieuMauForm.reset();
    xoaCacThongBaoLoi();
    khungPopup.classList.remove('hidden'); 
});

function anPopup() { khungPopup.classList.add('hidden'); }
document.getElementById('btn-close-modal').addEventListener('click', anPopup);
document.getElementById('btn-cancel-form').addEventListener('click', anPopup);

function xoaCacThongBaoLoi() {
    document.querySelectorAll('.error-msg').forEach(o => o.innerText = '');
}

// VALIDATION
function kiemTraDuLieu(maSV, hoTen, ngaySinh, lopHoc, diemTB, email, cheDoForm) {
    let hopLe = true;

    // 1. Kiểm tra Mã sinh viên (Theo placeholder của bạn: Ví dụ SV001 -> Chữ cái SV + 3 số)
    if (!maSV) {
        document.getElementById('err-studentId').innerText = "Mã sinh viên không được để trống!";
        hopLe = false;
    } else {
        const mauMSSV = /^[A-Z]{2}\d{3}$/i; 
        if (!mauMSSV.test(maSV)) {
            document.getElementById('err-studentId').innerText = "Mã SV không đúng định dạng (Ví dụ: SV006)!";
            hopLe = false;
        } else if (cheDoForm === "THEM" && danhSachSV.some(sv => sv.maSV.toLowerCase() === maSV.toLowerCase())) {
            document.getElementById('err-studentId').innerText = "Mã sinh viên này đã tồn tại!";
            hopLe = false;
        }
    }

    // 2. Kiểm tra Họ và tên (Kiểm tra độ dài chuỗi)
    if (!hoTen) {
        document.getElementById('err-fullName').innerText = "Họ và tên không được để trống!";
        hopLe = false;
    } else if (hoTen.length < 2) {
        document.getElementById('err-fullName').innerText = "Họ tên quá ngắn (tối thiểu 2 ký tự)!";
        hopLe = false;
    }

    // 3. Kiểm tra Ngày sinh (Kiểm tra khoảng tuổi hợp lệ từ 15-60)
    if (!ngaySinh) {
        document.getElementById('err-dob').innerText = "Vui lòng chọn ngày sinh!";
        hopLe = false;
    } else {
        const namSinh = new Date(ngaySinh).getFullYear();
        const namHienTai = new Date().getFullYear();
        const tuoi = namHienTai - namSinh;
        if (tuoi < 15 || tuoi > 60) {
            document.getElementById('err-dob').innerText = "Tuổi sinh viên phải từ 15 đến 60 tuổi!";
            hopLe = false;
        }
    }

    // 4. Kiểm tra Lớp học
    if (!lopHoc) {
        document.getElementById('err-className').innerText = "Lớp học không được để trống!";
        hopLe = false;
    }

    // 5. Kiểm tra Điểm số (Nằm trong khoảng cho phép từ 0 đến 4)
    if (!diemTB) {
        document.getElementById('err-gpa').innerText = "Điểm trung bình không được để trống!";
        hopLe = false;
    } else {
        const diem = parseFloat(diemTB);
        if (isNaN(diem) || diem < 0 || diem > 4) {
            document.getElementById('err-gpa').innerText = "Điểm số phải nằm trong khoảng từ 0.00 đến 4.00!";
            hopLe = false;
        }
    }

    // 6. Kiểm tra Email đúng định dạng
    if (!email) {
        document.getElementById('err-email').innerText = "Email không được để trống!";
        hopLe = false;
    } else {
        const mauEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!mauEmail.test(email)) {
            document.getElementById('err-email').innerText = "Định dạng email không hợp lệ!";
            hopLe = false;
        }
    }

    return hopLe;
}

bieuMauForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    xoaCacThongBaoLoi();

    const maSVInput = document.getElementById('studentId').value.trim();
    const hoTenInput = document.getElementById('fullName').value.trim();
    const ngaySinhInput = document.getElementById('dob').value;
    const lopHocInput = document.getElementById('className').value.trim();
    const diemTBInput = document.getElementById('gpa').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const cheDoForm = document.getElementById('form-mode').value;

    // Gọi hàm validation kiểm tra dữ liệu đầu vào
    const hopLe = kiemTraDuLieu(maSVInput, hoTenInput, ngaySinhInput, lopHocInput, diemTBInput, emailInput, cheDoForm);

    // Không cho submit form nếu dữ liệu chưa hợp lệ
    if (!hopLe) return;

    const thongTinSV = {
        maSV: maSVInput,
        hoTen: hoTenInput,
        ngaySinh: ngaySinhInput,
        lopHoc: lopHocInput,
        diemTB: diemTBInput,
        email: emailInput
    };

    if (cheDoForm === "THEM") {
        danhSachSV.push(thongTinSV);
    } else {
        const viTriSua = document.getElementById('student-id-hidden').value;
        danhSachSV[viTriSua] = thongTinSV;
    }

    capNhatGiaoDien();
    anPopup();
});

function bamNutSua(index) {
    document.getElementById('modal-title').innerText = "Cập nhật thông tin sinh viên";
    document.getElementById('form-mode').value = "SUA";
    document.getElementById('student-id-hidden').value = index;
    xoaCacThongBaoLoi();

    const svHienTai = danhSachSV[index];
    document.getElementById('studentId').value = svHienTai.maSV;
    document.getElementById('studentId').disabled = true;
    document.getElementById('fullName').value = svHienTai.hoTen;
    document.getElementById('dob').value = svHienTai.ngaySinh;
    document.getElementById('className').value = svHienTai.lopHoc;
    document.getElementById('gpa').value = svHienTai.diemTB;
    document.getElementById('email').value = svHienTai.email;

    khungPopup.classList.remove('hidden');
}

function bamNutXoa(index){
    const svCanXoa = danhSachSV[index];
    if (confirm(`Bạn có chắc chắn muốn xóa sinh viên: ${svCanXoa.hoTen} không?`)) {
        danhSachSV.splice(index, 1);
        capNhatGiaoDien(); 
    }
}

capNhatGiaoDien();