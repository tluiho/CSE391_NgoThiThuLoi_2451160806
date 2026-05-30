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
```js
console.log(typeof null);              // "object"
console.log(typeof undefined);         // "undefined"
console.log(typeof NaN);              // "number"
console.log("5" + 3);                 // "53"
console.log("5" - 3);                 // 2
console.log("5" * "3");              // 15
console.log(true + true);            // 2
console.log([] + []);                // ""
console.log([] + {});                // "[object Object]"
console.log({} + []);                // "[object Object]"
```
- Giải thích "5" + 3 và "5" - 3 cho kết quả khác nhau:
    + Toán tử + (Nối chuỗi): Toán tử + bị quá tải. Khi có một vế là Chuỗi, JavaScript sẽ ưu tiên biến các vế còn lại thành Chuỗi rồi thực hiện phép nối chuỗi. Do đó, 3 thành "3" và "5" + "3" = "53".
    + Toán tử - (Phép trừ): Toán tử - không dùng cho chuỗi, nó chỉ có duy nhất một chức năng là toán học. Do đó, JavaScript sẽ cố gắng ép kiểu chuỗi "5" về dạng số là 5. Phép toán trở thành 5 - 3 = 2. Điều tương tự xảy ra với toán tử * và /.
## Câu A3:
```js
console.log(5 == "5");                // true  
console.log(5 === "5");               // false 
console.log(null == undefined);       // true 
console.log(null === undefined);      // false 
console.log(NaN == NaN);             // false 
console.log(0 == false);             // true  
console.log(0 === false);            // false
console.log("" == false);            // true  
```
- Từ giờ trở đi, nên dùng === vì === so sánh cả giá trị và kiểu dữ liệu mà không tự ý ép kiểu.
## Câu A4:
- 8 giá trị Falsy trong JavaScript:
    1. false
    2. 0 (Số không)
    3. -0 (Số không âm)
    4. 0n (BigInt không)
    5. "" hoặc '' hoặc ``` (Chuỗi rỗng)
    6. null
    7. undefined
    8. NaN
```js
if ("0") console.log("A");         // In chữ A (Chuỗi "0" có chứa ký tự nên là Truthy).
if ("") console.log("B");         // Không in (Chuỗi rỗng là Falsy).
if ([]) console.log("C");        // In chữ C (Mảng rỗng là một Object, Object luôn là Truthy).
if ({}) console.log("D");       // In chữ D (Object rỗng là Truthy).
if (null) console.log("E");    // Không in (Falsy).
if (0) console.log("F");      // Không in (Falsy).
if (-1) console.log("G");    // In chữ G (Mọi số khác 0 đều là Truthy).
if (" ") console.log("H");  // In chữ H (Chuỗi có 1 dấu cách không phải chuỗi rỗng -> Truthy).
```
## Câu A5:
- Cách 1:
```js
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```
- Cách 2:
```js
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```
- Cách 3:
```js
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```
