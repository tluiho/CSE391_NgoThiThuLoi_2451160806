function inHoaDon(danhSachMon, coTip = true, ngayTrongTuan = "Wednesday") {
    let tongCong = 0;
    let danhSachChiTietText = "";

    for (let i = 0; i < danhSachMon.length; i++) {
        const mon = danhSachMon[i];
        const thanhTienMon = mon.gia * mon.soLuong;
        tongCong += thanhTienMon;

        const stt = `${i + 1}.`;
        const tenMon = mon.name.padEnd(10, ' ');
        const sl = `x${mon.soLuong}`.padEnd(4, ' ');
        const giaLe = `@${mon.gia / 1000}k`.padEnd(5, ' ');
        const tt = `${thanhTienMon / 1000}k`;
        
        danhSachChiTietText += `|| ${stt} ${tenMon}   ${sl} ${giaLe} = ${tt} ||\n`;
    }

    let phanTramGiam = 0;
    if (tongCong > 1000000) {
        phanTramGiam = 15;
    } else if (tongCong > 500000) {
        phanTramGiam = 10;
    }

    if (ngayTrongTuan.toLowerCase() === "wednesday") {
        phanTramGiam += 5;
    }

    const tienGiamGia = (tongCong * phanTramGiam) / 100;
    const tienSauGiam = tongCong - tienGiamGia;
    const vat = tienSauGiam * 0.08;
    const tip = coTip ? tongCong * 0.05 : 0;
    const thanhToan = tienSauGiam + vat + tip;

    const formatVND = (num) => num.toLocaleString('vi-VN') + "đ";

    console.log("=========================================");
    console.log("||            HÓA ĐƠN NHÀ HÀNG          ||");
    console.log("=========================================");
    console.log(danhSachChiTietText.trim());
    console.log("=========================================");
    console.log(`|| Tổng cộng:          ${formatVND(tongCong).padStart(15, ' ')} ||`);
    console.log(`|| Giảm giá (${phanTramGiam}%):       ${formatVND(tienGiamGia).padStart(15, ' ')} ||`);
    console.log(`|| VAT (8%):           ${formatVND(vat).padStart(15, ' ')} ||`);
    console.log(`|| Tip (5%):           ${formatVND(tip).padStart(15, ' ')} ||`);
    console.log("=========================================");
    console.log(`|| THANH TOÁN:         ${formatVND(thanhToan).padStart(15, ' ')} ||`);
    console.log("=========================================");
}

const cart = [
    { name: "Phở bò", gia: 65000, soLuong: 2 },
    { name: "Trà đá", gia: 5000, soLuong: 3 },
    { name: "Bún chả", gia: 50000, soLuong: 1 }
];

inHoaDon(cart, true, "Wednesday");