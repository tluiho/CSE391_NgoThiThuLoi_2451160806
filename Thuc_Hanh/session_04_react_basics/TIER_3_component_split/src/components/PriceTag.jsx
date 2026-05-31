function PriceTag({ originalPrice, salePrice }) {
    // Tính phần trăm giảm giá bằng biểu thức toán học
    const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);
    
    return (
        <div style={{ background: "#f8f9fa", padding: "8px 12px", borderRadius: "6px", display: "inline-block", margin: "5px" }}>
            <span style={{ textDecoration: "line-through", color: "#95a5a6", marginRight: "10px", fontSize: "0.9rem" }}>
                {originalPrice.toLocaleString("vi-VN")}đ
            </span>
            <span style={{ color: "#e74c3c", fontWeight: "bold", fontSize: "1.1rem" }}>
                {salePrice.toLocaleString("vi-VN")}đ
            </span>
            <span style={{ marginLeft: "8px", background: "#e74c3c", color: "white", padding: "2px 5px", borderRadius: "4px", fontSize: "0.75rem" }}>
                -{discount}%
            </span>
        </div>
    );
}
export default PriceTag;