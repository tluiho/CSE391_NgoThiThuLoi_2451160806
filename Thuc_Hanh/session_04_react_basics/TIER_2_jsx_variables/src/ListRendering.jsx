function ListRendering() {
    const products = [
        { id: 1, name: "iPhone 16", price: 25990000 },
        { id: 2, name: "AirPods Pro", price: 6990000 },
        { id: 3, name: "Apple Watch", price: 8990000 },
        { id: 4, name: "Chuột", price: 500000 },
        { id: 5, name: "Bàn phím", price: 900000 }
    ];

    const total = products.reduce(
        (sum, p) => sum + p.price,
        0
    );
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map(product => (
                    <li
                        key={product.id}
                        style={{
                            color:
                                product.price > 1000000
                                    ? "red"
                                    : "black"
                        }}
                    >
                        {product.name} {product.price.toLocaleString()}đ
                    </li>
                ))}
            </ul>
            <h3>
                Tổng tiền:
                {total.toLocaleString()}đ
            </h3>
        </div>
    );
}

export default ListRendering;