import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import PriceTag from "./components/PriceTag";

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://placehold.co/200" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://placehold.co/200" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://placehold.co/200" }
    ];

    const users = [
        { id: 1, name: "Ngo Thi Thu Loi", email: "loi@example.com", avatar: "https://placehold.co/100/ff69b4/ffffff?text=Loi" },
        { id: 2, name: "Nguyen Van Minh", email: "minh@example.com", avatar: "https://placehold.co/100/3498db/ffffff?text=Minh" },
        { id: 3, name: "Le An", email: "an@example.com", avatar: "https://placehold.co/100/2ecc71/ffffff?text=An" }
    ];

    return (
        <div style={{ fontFamily: "sans-serif", background: "#f5f6fa", minHeight: "100vh" }}>
            <Header />
            <main style={{ padding: "20px" }}>
                <h2 style={{ color: "#2c3e50", borderBottom: "2px solid #2c3e50", paddingBottom: "5px" }}>Danh Mục Điện Thoại</h2>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", marginBottom: "40px" }}>
                    {products.map(product => (
                        <ProductCard 
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
                <h2 style={{ color: "#2c3e50", borderBottom: "2px solid #2c3e50", paddingBottom: "5px" }}>Khuyến Mãi Lớn (PriceTag Props)</h2>
                <div style={{ margin: "15px 0" }}>
                    <PriceTag originalPrice={30000000} salePrice={25000000} />
                    <br />
                    <PriceTag originalPrice={150000} salePrice={120000} />
                </div>
                <h2 style={{ color: "#ff1493", borderBottom: "2px solid #ff1493", paddingBottom: "5px", marginTop: "40px" }}>Danh Sách Thành Viên</h2>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                    {users.map(user => (
                        <UserCard 
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            avatar={user.avatar}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;