## Câu A1:
1. Sơ đồ DOM tree:
```html
div#app
├─ header
│  ├─ h1
│  └─ nav
│     ├─ a.active
│     ├─ a
│     └─ a
└─ main
   ├─ form#todoForm
   │  ├─ input#todoInput
   │  └─ button
   └─ ul#todoList
      ├─ li.todo-item
      └─ li.todo-item.completed
```
2. Viết querySelector cho mỗi yêu cầu:
```js
// 1. Chọn thẻ <h1>
const h1 = document.querySelector("h1");

// 2. Chọn input trong form
const input = document.querySelector("#todoForm input");

// 3. Chọn tất cả .todo-item
const todoItems = document.querySelectorAll(".todo-item");

// 4. Chọn link đang active
const activeLink = document.querySelector("nav a.active");

// 5. Chọn <li> đầu tiên trong #todoList
const firstTodo = document.querySelector("#todoList li"); 

// 6. Chọn tất cả <a> bên trong <nav>
const navLinks = document.querySelectorAll("nav a");
```
## Câu A2:
- Khác biệt ngắn gọn:
    + `textContent`: Chỉ xử lý chữ thuần túy. An toàn tuyệt đối.
    + `innerHTML`: Xử lý cả mã HTML. Trình duyệt sẽ biên dịch và chạy các thẻ lệnh.
- Sửa lỗ hổng XSS: `innerHTML` nguy hiểm vì nếu user nhập mã độc (như `<img src=x onerror="...">`), trình duyệt sẽ thực thi đoạn script đó.
- Cách sửa: Thay `innerHTML` bằng `textContent` để biến mã độc thành chuỗi chữ thô vô hại.
```js
const userInput = document.querySelector("#search").value;
// SỬA:
document.querySelector("#result").textContent = userInput;
```
## Câu A3:
- Khi để nguyên comment (Có nổi bọt): Sự kiện lan từ trong ra ngoài.
```
BUTTON
INNER
OUTER
```
- Khi bỏ comment `e.stopPropagation()` (Chặn nổi bọt): Sự kiện bị dừng lại ngay lập tức tại điểm click.
```
BUTTON
```
## Câu C1:
1. Lỗi `countDisplay = count;`: Sai logic gán phần tử. Sửa thành: `countDisplay.textContent = count;`.
2. Lỗi `"onclick"`: Chuỗi sự kiện dư chữ on. Sửa thành: `"click"`.
3. Lỗi `innerHTML = null`: Không chuẩn. Sửa thành chuỗi rỗng: `innerHTML = ""`.
4. Lỗi `item.remove;`: Thiếu dấu ngoặc gọi hàm. Sửa thành: `item.remove();`.
5. Lỗi nối chuỗi LocalStorage: Giá trị lấy ra là string. Sửa thành ép kiểu số: `parseInt(..., 10) || 0;`.
6. Lỗi load giá trị `null`: Trang trống sẽ hiện chữ "null". Sửa bằng cách kiểm tra điều kiện `!== null`.
7. Lỗi mất Event cũ: Khi load `innerHTML` từ bộ nhớ, các thẻ `li` cũ bị mất hàm xóa. Sửa bằng cách dùng vòng lặp gán lại sự kiện sau khi load.
## Câu C2:
1. Tại sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE?
    - Ngốn RAM: Tạo ra 1000 vùng nhớ chứa 1000 hàm giống hệt nhau.
    - Rò rỉ bộ nhớ: Nếu xóa phần tử mà quên gỡ sự kiện, RAM sẽ bị kẹt.
    - Kém linh hoạt: Thêm phần tử mới vào DOM lại phải mất công bind sự kiện lại.
    - Event Delegation giải quyết: Gắn 1 sự kiện duy nhất lên thẻ Cha. Khi click vào thẻ Con, sự kiện tự động "nổi bọt" lên Cha. Thẻ Cha chỉ cần dùng `e.target` để biết con nào vừa click.
2. 
```js
const fragment = document.createDocumentFragment(); // Giỏ chứa tạm thời

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div); // Thêm vào giỏ tạm (không tốn tài nguyên render)
}

document.body.appendChild(fragment); // Đổ cả giỏ vào giao diện thật 1 lần duy nhất
```
- Nhanh hơn vì:
    + Code cũ: Gây 1000 lần Reflow/Repaint (trình duyệt phải tính toán lại bố cục và vẽ lại màn hình 1000 lần liên tiếp gây giật lag).
    + Code mới: Chỉ gây 1 lần Reflow/Repaint duy nhất khi đổ `fragment` vào `body`, giúp giảm tải tối đa cho CPU.
