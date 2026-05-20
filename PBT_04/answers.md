## Câu A1:
| Position   | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí                    | Cuộn theo trang? | Use case                       |
| ---------- | ------------------------- | ------------------------------------ | ---------------- | ------------------------------ |
| `static`   | Có                        | Vị trí mặc định                      | Có               | Layout bình thường             |
| `relative` | Có                        | So với vị trí gốc của chính nó       | Có               | Dịch chuyển nhẹ element        |
| `absolute` | Không                     | Phần tử cha gần nhất có position khác static | Có               | Badge, popup, overlay          |
| `fixed`    | Không                     | Viewport/browser window              | Không            | Header cố định, nút scroll top |
| `sticky`   | Có                        | Parent scroll container              | Vừa có vừa không | Sticky menu/sidebar            |

- Khi nào absolute tham chiếu body? Khi tất cả các phần tử cha bọc ngoài nó đều là position: static (mặc định), không có phần tử nào được đặt thuộc tính định vị.
- Khi nào tham chiếu parent? Khi phần tử cha (hoặc cha tổ tiên gần nhất) được thiết lập một thuộc tính định vị khác static (thường là position: relative, hoặc absolute, fixed).
- Khái niệm "Nearest positioned ancestor": Nghĩa là "Phần tử tổ tiên gần nhất có định vị". Trình duyệt sẽ đi ngược từ phần tử hiện tại lên các lớp cha bọc ngoài; nó sẽ dừng lại và lấy làm mốc tọa độ ngay tại phần tử cha đầu tiên có thuộc tính position khác static.
## Câu A2:
- Trường hợp 1: flex: 1 cho 4 items
    + Dự đoán: 4 items xếp trên 1 hàng duy nhất, tự động co giãn đều nhau, mỗi item chiếm chính xác 25% chiều rộng của container.
    + Sơ đồ bố cục (Text Art):
```
┌───────────────────────────────────────────────────────────┐
│ [Item 1(25%)] [Item 2(25%)] [Item 3 (25%)] [Item 4 (25%)] │
└───────────────────────────────────────────────────────────┘
```
- Trường hợp 2: `flex-wrap: wrap`, `width 45%`, `margin 2.5%` cho 6 items   
    + Dự đoán: Thiết lập tổng độ rộng một item chiếm là 45% + 2.5% x 2 = 50%. Do đó, một hàng sẽ chứa vừa khít 2 items. Với 6 items, layout sẽ chia thành 3 hàng, mỗi hàng có 2 cột.
    + Sơ đồ bố cục (Text Art):
```
┌───────────────────────────────────────────────────────────┐
│   [   Item 1 (45%)   ]            [   Item 2 (45%)   ]    │
│   [   Item 3 (45%)   ]            [   Item 4 (45%)   ]    │
│   [   Item 5 (45%)   ]            [   Item 6 (45%)   ]    │
└───────────────────────────────────────────────────────────┘
```
- Trường hợp 3: `space-between` và `align-items: center` cho 3 items
    + Dự đoán: 3 items nằm trên 1 hàng. Item 1 dính sát lề trái, Item 3 dính sát lề phải, Item 2 nằm chính giữa hàng. Tất cả căn giữa hoàn hảo theo chiều dọc.
    + Sơ đồ bố cục (Text Art):
```
┌───────────────────────────────────────────────────────────┐
│ [Item 1]                 [Item 2]                 [Item 3]│
└───────────────────────────────────────────────────────────┘
```
- Trường hợp 4: Grid `200px 1fr 200px` với 3 items
    + Dự đoán: 3 items xếp thành 1 hàng, 3 cột. Cột 1 và cột 3 có độ rộng cố định `200px`. Cột 2 (item 2) nằm ở giữa tự động giãn ra chiếm toàn bộ không gian còn lại (`1fr`). Giữa các cột có khoảng cách `20px`.
    + Sơ đồ bố cục (Text Art):
```
┌───────────────────────────────────────────────────────────┐
│ [Col1:200px]◄-20px-►[Col2:Tựgiãn 1fr]◄-20px-►[Col3:200px] │
└───────────────────────────────────────────────────────────┘
```
- Trường hợp 5: Grid `repeat(3, 1fr)` với 7 items
    + Dự đoán: Layout chia làm 3 cột đều nhau. Tổng cộng có 3 hàng. Hàng 1 (Items 1, 2, 3), Hàng 2 (Items 4, 5, 6). Hàng 3 chỉ có duy nhất Item 7 nằm ở góc ngoài cùng bên trái (Cột 1), hai cột còn lại ở hàng 3 bị bỏ trống.
    + Sơ đồ bố cục (Text Art):
```
┌───────────────────────────────────────────────────────────┐
│ [ Item 1 (1fr)  ]    [ Item 2 (1fr)  ]    [ Item 3 (1fr) ]│
│ [ Item 4 (1fr)  ]    [ Item 5 (1fr)  ]    [ Item 6 (1fr) ]│
│ [ Item 7 (1fr)  ]    (Trống)              (Trống)         │
└───────────────────────────────────────────────────────────┘
```
## Câu C1:
1. Navigation bar ngang (logo + menu + buttons):
- Chọn: Flexbox.
- Lý do: Bản chất thanh menu định hướng theo một chiều ngang trục duy nhất. Flexbox cực kỳ mạnh mẽ trong việc phân bổ khoảng cách tùy biến theo dòng bằng `justify-content: space-between`.
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước):
- Chọn: Grid.
- Lý do: Đây là kiểu bố cục 2 chiều (hàng và cột) cố định nghiêm ngặt. Dùng `grid-template-columns: repeat(3, 1fr)` giúp giữ form 3 cột hoàn chỉnh tự động mà không cần tính toán lề hay ép dòng.
3. Layout blog (main content + sidebar):
- Chọn: Grid (Hoặc kết hợp).
- Lý do: Bố cục layout tổng thể của trang web cần phân chia khu vực có kích thước cố định rõ ràng (ví dụ sidebar luôn rộng `300px`, content ăn theo không gian còn lại `1fr`). Grid quản lý cấu trúc trang lớn tối ưu hơn.
4. Footer với 4 cột thông tin:
- Chọn: Flexbox.
- Lý do: Mặc dù trông giống lưới, nhưng số lượng từ trong các cột thông tin footer có độ dài ngắn hoàn toàn khác nhau. Flexbox xử lý dòng linh hoạt giúp giao diện co giãn tự nhiên ở các thiết bị di động cực tốt bằng `flex-wrap: wrap`.
5. Card sản phẩm(ảnh trên, text giữa, nút dưới cùng dính đáy):
- Chọn: Flexbox.
- Lý do: Bố cục sắp xếp bên trong một hộp theo 1 trục dọc (`flex-direction: column`). Flexbox cho phép điều khiển thành phần nút bấm tự đẩy mình xuống đáy dễ dàng nhờ cơ chế `margin-top: auto`.

## Câu C2:
1. Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy tự do
- Nguyên nhân: Do lượng chữ tiêu đề h3 hoặc mô tả dài ngắn khác nhau làm độ cao phần text của mỗi hộp không đồng bộ. Nếu phần tử cha không được định hướng trục dọc làm việc, nút bấm sẽ bị đẩy lơ lửng ngay sau dòng text kết thúc.
- Code sửa: Biến mỗi thẻ .card thành một flex container hướng dọc, dồn khối text lên và ép nút bấm dính đáy bằng margin tự động.
```css
.card {
    display: flex;
    flex-direction: column; 
}
.card .btn {
    margin-top: auto; 
}
```
2. Lỗi 2: Muốn items căn giữa cả ngang lẫn dọc trong 100vh nhưng vẫn dính góc trái trên
- Nguyên nhân: Chỉ khai báo thuộc tính kích hoạt kích thước display: flex cho khối cha `.hero`, nhưng bạn lại quên hoàn toàn việc thiết lập các lệnh điều hướng căn chỉnh vị trí trên trục ngang và trục dọc cho nó.
- Code sửa: 
```css
.hero {
    height: 100vh;
    display: flex;
    justify-content: center; /* Căn giữa hoàn hảo theo chiều ngang */
    align-items: center;     /* Căn giữa hoàn hảo theo chiều dọc */
}
```
3. Lỗi 3: Sidebar bị co rúm méo mó khi nội dung vùng Content quá dài
- Nguyên nhân: Trong cơ chế mặc định của Flexbox, thuộc tính biến thiên tự co hẹp `flex-shrink` có giá trị mặc định bằng `1`. Khi nội dung ở ô `.content` phình quá to, trình duyệt sẽ tự bóp nghẹt độ rộng của phần tử bên cạnh để nhường chỗ.
- Code sửa: Khóa cứng độ rộng của Sidebar, cấm không cho trình duyệt tự ý co bóp giảm kích thước.
```css
.sidebar {
    width: 250px;
    flex-shrink: 0; /* Ép giá trị về 0 - Không tự động co lại */
}
```