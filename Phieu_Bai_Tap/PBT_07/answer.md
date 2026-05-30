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
# Phần C:
## Câu C1:
- Lỗi 1: Thiếu dấu `;` 
```js
//Vị trí và Sửa thành:
return "Phần trăm giảm không hợp lệ";

var giamGia = giaBan * phanTramGiam / 100;
let giaSauGiam = giaBan - giamGia;

return giaSauGiam;
```
- Lỗi 2: Sử dụng sai toán tử gán (=) thay vì toán tử so sánh (===)
    + Vị trí: `if (giaSauGiam = 0)`
    + Giải thích: Toán tử `=` là toán tử gán. Câu lệnh này đang gán giá trị `0` cho biến `giaSauGiam`. Trong JavaScript, giá trị `0` là một giá trị Falsy, làm cho điều kiện `if` luôn luôn sai (không bao giờ in ra "Sản phẩm miễn phí!"), đồng thời vô tình ghi đè biến `giaSauGiam` thành `0`.
    + Sửa: Thay bằng toán tử so sánh ===.
- Lỗi 3: Không xử lý ép kiểu dữ liệu đầu vào
    + Vị trí: `const gia = tinhGiaGiamGia("100000", 20)`
    + Giải thích: Tham số truyền vào là một chuỗi `"100000"` chứ không phải số. Mặc dù JavaScript có cơ chế tự động ép kiểu khi thực hiện phép nhân/chia, nhưng đây là một bad practice dễ dẫn đến lỗi nghiêm trọng nếu chuỗi truyền vào chứa chữ (ví dụ: `"100k"` sẽ trả về `NaN`).
    + Sửa: Bổ sung đoạn mã kiểm tra `typeof giaBan !== "number"` hoặc dùng `Number(giaBan)` để ép kiểu chủ động ngay đầu hàm.
- Lỗi 4: Lỗi logic khi hàm trả về chuỗi thông báo lỗi thay vì số
    + Vị trí: `const gia2 = tinhGiaGiamGia(50000, 110)`
    + Giải thích: Khi `phanTramGiam > 100`, hàm trả về một chuỗi `"Phần trăm giảm không hợp lệ"`. Khi dòng tiếp theo chạy: `"Giá: " + gia2`, kết quả in ra sẽ là `"Giá: Phần trăm giảm không hợp lệ"` trông rất mất thẩm mỹ và không đúng logic xử lý lỗi (thông thường nên ném ra một Error hoặc dùng `console.error`).

- 1 lỗi "ẩn" liên quan đến var trong vòng lặp:
    + Vị trí:
    ```js
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log("Item " + i)
        }, 1000)
    }
    ```
    + Giải thích:
        -  `var` không có phạm vi khối: Khi dùng `var i`, JavaScript chỉ tạo ra duy nhất một biến `i` dùng chung cho toàn bộ các vòng lặp.
        - Bất đồng bộ (`setTimeout`): Hàm `setTimeout` sẽ chờ 1 giây mới chạy. Trong lúc nó chờ, vòng lặp `for` đã chạy xong từ lâu và đẩy biến `i` chung lên giá trị `5`.
        - Khi hết 1 giây, cả 5 hàm `setTimeout` đồng loạt chạy và cùng nhìn vào biến `i` lúc này đã bằng `5`, dẫn đến việc in ra 5 lần `Item 5`.
    + Sửa bằng let: Thay `var i = 0` thành `let i = 0`
        - `let` có phạm vi khối. Với mỗi vòng lặp, JavaScript sẽ tạo ra một biến `i` hoàn toàn mới và giữ nguyên giá trị của `i` tại vòng lặp đó cho `setTimeout`. Kết quả sẽ in đúng từ `Item 0` đến `Item 4`.
- Code hoàn chỉnh:
```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (typeof giaBan !== "number" || typeof phanTramGiam !== "number" || Number.isNaN(giaBan) || Number.isNaN(phanTramGiam)) {
        return "Lỗi: Đầu vào phải là số hợp lệ!";
    }

    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Lỗi: Phần trăm giảm không hợp lệ";
    }
    
    let giamGia = (giaBan * phanTramGiam) / 100;
    let giaSauGiam = giaBan - giamGia;

    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}

// TEST
const gia = tinhGiaGiamGia(100000, 20); 
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log(gia2);

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
// Kết quả (sau 1 giây): 
// Item 0
// Item 1
// Item 2
// Item 3
// Item 4
```