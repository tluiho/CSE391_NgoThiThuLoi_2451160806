# Phần A
## Câu A1:
```js
// Đoạn 1
console.log(x);
var x = 5;

- Dự đoán undefined
- Giải thích Đoạn 1 (var): Do cơ chế Hoisting, biến var x được kéo lên đầu và tự động khởi tạo giá trị undefined trước khi lệnh console.log chạy.

// Đoạn 2
console.log(y);
let y = 10;

- Dự đoán ReferenceError: Cannot access 'y' before initialization
- Giải thích Đoạn 2 (let): Biến let y cũng được hoist nhưng không khởi tạo trước. Nó bị rơi vào vùng chết tạm thời (Temporal Dead Zone), cố truy cập trước khi khai báo sẽ gây lỗi.

// Đoạn 3
const z = 15;
z = 20;
console.log(z);

- Dự đoán TypeError: Assignment to constant variable.
- Giải thích Đoạn 3 (const): Biến const là hằng số, không thể gán lại giá trị mới (z = 20 là bất hợp pháp).

// Đoạn 4 
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

- Dự đoán [1, 2, 3, 4]
- Giải thích Đoạn 4 (const với Array): const chỉ cố định địa chỉ ô nhớ của mảng chứ không cấm thay đổi nội dung bên trong. Lệnh arr.push(4) không đổi địa chỉ nên hợp lệ.

// Đoạn 5 Dự đoán: Trong block: 2 và Ngoài block: 1
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);

- Dự đoán trong block: 2 và ngoài block: 1
- Giải thích Đoạn 5 (Block Scope): Biến let có phạm vi trong block {}. Biến a = 2 bên trong block là biến độc lập, hoàn toàn không ảnh hưởng đến biến a = 1 ở bên ngoài.
```
## Câu A2:
