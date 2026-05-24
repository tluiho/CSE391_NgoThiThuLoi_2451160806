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
## Câu C1:
1. Quy trình: Tạo file `custom.scss`-> Định nghĩa lại `$primary: #E63946;` -> `@import` file Bootstrap gốc vào sau -> Biên dịch sang CSS.
2. Không nên override trực tiếp vì: Biến `$primary `liên kết với hover, active, text-color, bg-color của rất nhiều component. Sửa trực tiếp bằng CSS thuần sẽ làm mất đồng bộ hệ thống màu và mất hiệu ứng hover/focus chuẩn.
## Câu C2:
- CSS thuần: Viết nhiều dòng code, tốn thời gian tính toán responsive, nhưng tùy biến tự do 100%.
- Bootstrap: Gần như 0 dòng CSS, lắp ghép cực nhanh, nhưng UI bị rập khuôn, khó chỉnh sâu.
- Khi nào dùng: Nên dùng cho dự án cần làm nhanh (MVP), trang Admin. Không nên dùng cho web thương hiệu cần sáng tạo độc quyền hoặc tối ưu hiệu năng tối đa.

# TRACK B — TAILWINDCSS
## Câu A1:
1. Classes của `<div>` ngoài cùng:
```html
<div class="flex items-center justify-between p-4 bg-white shadow-md rounded-lg 
            hover:shadow-xl transition-shadow duration-300">
```
- `flex` -> `display: flex`
- `items-center` -> `align-items: center`
- `justify-between` -> `justify-content: space-between`
- `p-4` -> `padding: 1rem (16px)`
- `bg-white` -> `background-color: white`
- `shadow-md` -> đổ bóng mức trung bình
- `rounded-lg` -> bo góc lớn (`border-radius`)
- `hover:shadow-xl` -> khi hover thì bóng lớn hơn
- `transition-shadow` -> animation cho thuộc tính shadow
- `duration-300` -> thời gian transition 300ms
2. Classes của ảnh:
```html
<img class="w-16 h-16 rounded-full object-cover">
```
- `w-16` -> width: `4rem (64px)`
- `h-16` -> height: `4rem (64px)`
- `rounded-full` -> bo tròn 100% (avatar hình tròn)
- `object-cover` -> ảnh fill khung nhưng không méo
3. Classes của div chứa text:
`<div class="ml-4 flex-1">`
- `ml-4` -> `margin-left: 1rem`
- `flex-1` -> phần tử chiếm toàn bộ khoảng trống còn lại (`flex: 1`)
4. Classes của tiêu đề:
```html
<h3 class="text-lg font-semibold text-gray-800 truncate">
```
- `text-lg` -> font size lớn
- `font-semibold` -> font-weight: 600
- `text-gray-800` -> màu xám đậm
- `truncate` -> cắt chữ dài bằng ...
5. Classes của đoạn mô tả:
```html
<p class="text-sm text-gray-500">
```
- `text-sm` -> chữ nhỏ
- `text-gray-500` -> màu xám trung bình
6. Classes của button:
```html
<button class="px-4 py-2 bg-blue-500 text-white rounded-md 
               hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
```
- `px-4` -> padding trái/phải: `1rem`
- `py-2` -> padding trên/dưới: `0.5rem`
- `bg-blue-500` -> nền xanh
- `text-white` -> chữ màu trắng
- `rounded-md` -> bo góc vừa
- `hover:bg-blue-600` -> hover đổi xanh đậm hơn
- `focus:ring-2` -> khi focus hiện viền ring dày 2px
- `focus:ring-blue-300` -> màu ring xanh nhạt
##  Câu A2:
1. `md:`, `lg:`, `xl:`: Các mốc kích thước màn hình (>= 768px, >= 1024px, >= 1280px). `md:grid-cols-2 lg:grid-cols-4` nghĩa là: Mobile 1 cột, Tablet 2 cột, Desktop 4 cột.
2. `hover`: (khi di chuột), `focus`: (khi click vào), `active`: (khi nhấn giữ), `group-hover`: (phần tử con tự động đổi định dạng khi hover vào phần tử cha).
3. Class tương đương: `hidden md:flex`
## Câu C1:
1. HTML size:
- Tailwind thường làm file HTML dài hơn vì chứa nhiều utility classes trực tiếp trong thẻ HTML.
- CSS thuần có HTML gọn hơn vì style được viết trong file CSS riêng.
Ví dụ:
```html
<!-- CSS thuần -->
<button class="btn-primary">Button</button>

<!-- Tailwind -->
<button class="bg-blue-500 text-white px-4 py-2 rounded">
    Button
</button>
```
2. Maintainability (Bảo trì):
- TailwindCSS:
    + Dễ chỉnh sửa trực tiếp tại phần tử HTML.
    + Hạn chế xung đột CSS.
    + Không cần đặt tên class phức tạp.
    + Responsive và hover/focus viết nhanh.
- CSS thuần:
    + Dễ quản lý với project nhỏ.
    + Nhưng với project lớn dễ bị: trùng class; CSS dư thừa; ảnh hưởng ngoài ý muốn.
3. Reusability (Tái sử dụng):
- CSS thuần tái sử dụng bằng class chung:
```css
.btn-primary
.card
.navbar
```
- TailwindCSS tái sử dụng bằng: Component (React/Vue); @apply; template/component library
    Ví dụ:
```css
.btn {
    @apply bg-blue-500 text-white px-4 py-2 rounded;
}
``` 

## Câu C2:
1. Vì sao Tailwind CSS cuối nhỏ hơn Bootstrap?
- Bootstrap chứa sẵn toàn bộ component và utility classes dù có dùng hay không.
- Tailwind chỉ sinh ra CSS cho những class thực sự xuất hiện trong project.
=> Vì vậy file CSS build cuối thường nhỏ hơn Bootstrap.
2. Tailwind JIT / PurgeCSS là:
- Tailwind JIT (Just In Time)
    + Quét file HTML/JS/TS để tìm class đang dùng.
    + Tạo CSS ngay khi developer viết class.
    + Chỉ build đúng class cần thiết.
- PurgeCSS
    + Xóa toàn bộ CSS không sử dụng khỏi file cuối.
    + Giúp giảm kích thước CSS đáng kể.
3. Không nên dùng TailwindCSS:
    1. Trường hợp 1: 
        Website hiển thị nội dung động từ editor như: CKEditor,TinyMCE, Word content.
    -> Vì HTML sinh ra khó gắn utility classes.
    2. Trường hợp 2: 
        Team chưa vững CSS nền tảng -> Dễ lạm dụng utility classes mà không hiểu: Flexbox; Grid; Position; Responsive layout
    => Khó debug và maintain về sau.