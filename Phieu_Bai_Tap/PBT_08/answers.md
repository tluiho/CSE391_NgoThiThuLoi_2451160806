## Câu A1
```js
// 1. Function Declaration
function tinhThueBaoHiemDecl(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thue: thue, thuc_nhan: luong - thue };
}

// 2. Function Expression
const tinhThueBaoHiemExpr = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thue: thue, thuc_nhan: luong - thue };
};

// 3. Arrow Function
const tinhThueBaoHiemArrow = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thue, thuc_nhan: luong - thue };
};
```
- Có sự khác biệt rất lớn về hoisting giữa 3 cách này:
    + Function Declaration: Được hoisting hoàn toàn, có thể gọi hàm trước dòng khai báo.
    + Function Expression & Arrow Function: Không được hoisting. Gọi hàm trước khi khai báo sẽ bị báo lỗi ngay lập tức.
- VD minh họa:
```js
// HỢP LỆ: Chạy bình thường vì hàm này được hoisting lên đầu scope
console.log(tinhThueBaoHiemDecl(12000000)); 

function tinhThueBaoHiemDecl(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thue, thuc_nhan: luong - thue };
}

// LỖI: ReferenceError: Cannot access 'tinhThueBaoHiemExpr' before initialization
console.log(tinhThueBaoHiemExpr(12000000)); 

const tinhThueBaoHiemExpr = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thue, thuc_nhan: luong - thue };
};
```
## Câu A2:
- Dự đoán output:
    + Đoạn 1:
    ```js
    console.log(c.increment());  // 1
    console.log(c.increment());  // 2
    console.log(c.increment());  // 3
    console.log(c.decrement());  // 2
    console.log(c.getCount());   // 2
    ```
    + Đoạn 2 (Sau 200ms):
    ```js
    var: 3
    var: 3
    var: 3
    let: 0
    let: 1
    let: 2
    ```
- Giải thích: `var` và `let` trong `setTimeout`
    + Với `var`: Do `var` không có phạm vi khối, cả vòng lặp chỉ dùng chung một biến `i` duy nhất. Khi `setTimeout` chạy (sau 100ms), vòng lặp đã chạy xong và biến `i` chung đã bằng `3`.
    + Với `let`: Do `let` có phạm vi khối, mỗi lượt lặp JavaScript tạo ra một biến `j` hoàn toàn mới. Khi `setTimeout` chạy, nó giữ nguyên giá trị `j` chính xác của lượt lặp đó (`0, 1, 2`).
## Câu A3:
- const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```js
// 1. Lấy các số chẵn
const chan = nums.filter(n => n % 2 === 0);

// 2. Nhân mỗi số với 3
const nhanBa = nums.map(n => n * 3);

// 3. Tính tổng tất cả
const tong = nums.reduce((acc, n) => acc + n, 0);

// 4. Tìm số đầu tiên > 7
const dauTienLonHon7 = nums.find(n => n > 7);

// 5. Kiểm tra CÓ số > 10 không
const coSoLonHon10 = nums.some(n => n > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
const tatCaLonHon0 = nums.every(n => n > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const moTa = nums.map(n => `Số ${n} là ${n % 2 === 0 ? 'chẵn' : 'lẻ'}`);

// 8. Đảo ngược mảng (không mutate gốc)
const daoNguoc = [...nums].reverse();
```
## Câu A4:
- Dự đoán Output:
```js
console.log(name, price, ram, color);  // iPhone 16 25990000 8 Titan
console.log(specs);                     // ReferenceError: specs is not defined
```
```js
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000 (gốc không đổi vì spread tạo object mới)
```
```js
console.log(product.specs.ram);        
    // 16
   // Do toán tử spread (...) chỉ sao chép phần bề nổi (Shallow Copy).
    //Với object lồng nhau như specs, nó chỉ sao chép địa chỉ ô nhớ chứ không nhân bản một object mới. Vì vậy, cả copy và product gốc vẫn dùng chung một object specs. Sửa copy.specs sẽ làm thay đổi luôn product.specs.
```
## Câu C1:
- Viết lại:
```js
const processOrders = (orders) => orders
    .filter(({ status, total }) => status === "completed" && total > 100000)
    .map(({ id, customer, total }) => ({
        id, customer, total,
        discount: total * 0.1,
        finalTotal: total * 0.9
    }))
    .sort((a, b) => b.finalTotal - a.finalTotal);
```
## Câu C2:
```js
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },

    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : arr[0];
        let startIndex = initialValue !== undefined ? 0 : 1;

        for (let i = startIndex; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};

// Test
console.log(miniArray.map([1, 2, 3], x => x * 2));          // → [2, 4, 6]
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));    // → [3, 4]
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b));    // → 10
```