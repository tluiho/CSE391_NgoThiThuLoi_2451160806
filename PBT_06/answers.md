# TRACK A — BOOTSTRAP 5
## Câu A1:
| Kích thước      | `< 768px`   | `768px - 991px` | `≥ 992px`  |
| --------------- | ----------- | --------------- | ---------- |
| Số cột mỗi box  | 12          | 6               | 3          |
| Số box mỗi hàng | 1           | 2               | 4          |
- `col-md-6` nghĩa là: 
 + md = medium devices (≥768px)
 + 6 = chiếm 6/12 cột
=> Từ tablet trở lên, mỗi box rộng 50%.
- Không cần `col-sm-12` vì: Theo nguyên lý Mobile-First, class mặc định `col-12` tự động áp dụng và kế thừa lên các màn hình lớn hơn cho đến khi gặp breakpoint khác ghi đè.
## Câu A2:
1. `d-none d-md-block`: Ẩn trên mobile (< 768px); Hiện dạng block trên tablet/desktop (>= 768px).
2. Liệt kê 5 spacing utilities:
    - `mt-3`: Lề trên (`margin-top: 1rem`).
    - `px-4`: Đệm trái/phải (`padding-left/right: 1.5rem`).
    - `mb-auto`: Tự động đẩy phần tử dưới (`margin-bottom: auto`).
    - `me-2`: Lề phải (`margin-right: 0.5rem`).
    - `py-5`: KĐệm trên/dưới (`padding-top/bottom: 3rem`).
3. Khác nhau: `.container` (cố định độ rộng tối đa theo mốc màn hình); `.container-fluid` (luôn rộng 100% mọi màn hình); `.container-md` (rộng 100% trên mobile, cố định độ rộng từ màn hình >= 768px).