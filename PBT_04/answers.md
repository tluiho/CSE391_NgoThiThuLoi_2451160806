## Câu A1:
| Position   | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí                    | Cuộn theo trang? | Use case                       |
| ---------- | ------------------------- | ------------------------------------ | ---------------- | ------------------------------ |
| `static`   | Có                        | Vị trí mặc định                      | Có               | Layout bình thường             |
| `relative` | Có                        | So với vị trí gốc của chính nó       | Có               | Dịch chuyển nhẹ element        |
| `absolute` | Không                     | Cha relative gần nhất | Có               | Badge, popup, overlay          |
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
