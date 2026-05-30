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


