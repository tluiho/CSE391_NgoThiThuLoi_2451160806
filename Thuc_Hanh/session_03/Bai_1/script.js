
const duLieuMau = [
    { maSV: "SV001", hoTen: "Ngô Thị Thu A", ngaySinh: "2000-01-15", lopHoc: "66HTTT1", diemTB: "3.75", email: "ngothithuA@tlu.edu.vn" },
    { maSV: "SV002", hoTen: "Nguyễn Văn Khải", ngaySinh: "2002-05-20", lopHoc: "66CNTT1", diemTB: "3.52", email: "khainv@tlu.edu.vn" },
    { maSV: "SV003", hoTen: "Trần Đức Nam", ngaySinh: "2003-11-02", lopHoc: "66CNTT2", diemTB: "2.80", email: "namtd@tlu.edu.vn" }
];

let danhSachSV = JSON.parse(localStorage.getItem('db_sinhvien_tlu'));
if (!danhSachSV || danhSachSV.length === 0) {
    danhSachSV = duLieuMau;
}

const thanBangSV = document.getElementById('student-table-body');
const khungPopup = document.getElementById('student-modal');
const bieuMauForm = document.getElementById('student-form');

function capNhatGiaoDien() {
    thanBangSV.innerHTML = '';

    let tongDiemLop = 0;

    for (let i = 0; i < danhSachSV.length; i++) {
        const sv = danhSachSV[i];
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
    }

    document.getElementById('stat-total').innerText = danhSachSV.length;
    
    let diemTB = danhSachSV.length > 0 ? (tongDiemLop / danhSachSV.length) : 0;
    document.getElementById('stat-avg').innerText = diemTB.toFixed(2);

    localStorage.setItem('db_sinhvien_tlu', JSON.stringify(danhSachSV));
}

document.getElementById('btn-open-modal').addEventListener('click', function() {
    document.getElementById('modal-title').innerText = "Thêm sinh viên mới";
    document.getElementById('form-mode').value = "THEM"; // Ghi nhớ trạng thái Thêm
    document.getElementById('studentId').disabled = false; // Cho phép nhập mã SV
    bieuMauForm.reset(); // Xóa sạch các chữ cũ trong form
    xoaCacThongBaoLoi();
    khungPopup.classList.remove('hidden'); 
});

function anPopup() {
    khungPopup.classList.add('hidden');
}
document.getElementById('btn-close-modal').addEventListener('click', anPopup);
document.getElementById('btn-cancel-form').addEventListener('click', anPopup);

bieuMauForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    xoaCacThongBaoLoi();

    const maSVInput = document.getElementById('studentId').value.trim();
    const cheDoForm = document.getElementById('form-mode').value;

    if (cheDoForm === "THEM" && danhSachSV.some(sv => sv.maSV.toLowerCase() === maSVInput.toLowerCase())) {
        document.getElementById('err-studentId').innerText = "Mã sinh viên này đã tồn tại!";
        return;
    }

    // Gom thông tin từ các ô nhập liệu vào một đối tượng
    const thongTinSV = {
        maSV: maSVInput,
        hoTen: document.getElementById('fullName').value.trim(),
        ngaySinh: document.getElementById('dob').value,
        lopHoc: document.getElementById('className').value.trim(),
        diemTB: document.getElementById('gpa').value,
        email: document.getElementById('email').value.trim()
    };

    if (cheDoForm === "THEM") {
        danhSachSV.push(thongTinSV); // Thêm vào cuối mảng
    } else {
        const viTriSua = document.getElementById('student-id-hidden').value;
        danhSachSV[viTriSua] = thongTinSV; // Đè dữ liệu mới lên vị trí cũ
    }

    capNhatGiaoDien(); // Vẽ lại bảng mới và tính lại điểm lớp
    anPopup();         // Đóng form
});

// Hàm chạy khi click nút Sửa
function bamNutSua(index) {
    document.getElementById('modal-title').innerText = "Cập nhật thông tin sinh viên";
    document.getElementById('form-mode').value = "SUA"; // Chuyển trạng thái sang Sửa
    document.getElementById('student-id-hidden').value = index; // Lưu lại vị trí dòng cần sửa
    xoaCacThongBaoLoi();

    const svHienTai = danhSachSV[index];

    // Đổ dữ liệu cũ lên lại các ô nhập liệu của form popup
    document.getElementById('studentId').value = svHienTai.maSV;
    document.getElementById('studentId').disabled = true; // Khóa trường mã sinh viên không cho sửa bừa bãi
    document.getElementById('fullName').value = svHienTai.hoTen;
    document.getElementById('dob').value = svHienTai.ngaySinh;
    document.getElementById('className').value = svHienTai.lopHoc;
    document.getElementById('gpa').value = svHienTai.diemTB;
    document.getElementById('email').value = svHienTai.email;

    khungPopup.classList.remove('hidden'); // Mở popup ra
}

// Hàm chạy khi click nút Xóa
function bamNutXoa(index){
    const svCanXoa = danhSachSV[index];
    const xacNhan = confirm(`Bạn có chắc chắn muốn xóa sinh viên: ${svCanXoa.hoTen} (Mã: ${svCanXoa.maSV}) không?`);
    
    if (xacNhan === true) {
        danhSachSV.splice(index, 1);
        capNhatGiaoDien(); 
}
}

function xoaCacThongBaoLoi() {
    document.querySelectorAll('.error-msg').forEach(o => o.innerText = '');
}

capNhatGiaoDien();