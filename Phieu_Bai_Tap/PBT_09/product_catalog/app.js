const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.5, inStock: true },
    { id: 2, name: "MacBook Pro M3", price: 45990000, category: "laptop", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.9, inStock: true },
    { id: 3, name: "AirPods Pro 2", price: 6190000, category: "accessory", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.7, inStock: true },
    { id: 4, name: "iPad Pro M4", price: 28990000, category: "tablet", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.8, inStock: false },
    { id: 5, name: "Samsung S24 Ultra", price: 29990000, category: "phone", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.6, inStock: true },
    { id: 6, name: "Dell XPS 13", price: 34500000, category: "laptop", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.4, inStock: true },
    { id: 7, name: "Sony WH-1000XM5", price: 8490000, category: "accessory", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.8, inStock: true },
    { id: 8, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.3, inStock: true },
    { id: 9, name: "Google Pixel 9 Pro", price: 26500000, category: "phone", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.7, inStock: false },
    { id: 10, name: "Asus ROG Zephyrus", price: 41990000, category: "laptop", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.5, inStock: true },
    { id: 11, name: "Logitech MX Master 3S", price: 2490000, category: "accessory", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.6, inStock: true },
    { id: 12, name: "Lenovo Tab P12", price: 9200000, category: "tablet", image: "https://cdn.pixabay.com/photo/2020/04/28/12/58/tulips-5104396_960_720.jpg", rating: 4.1, inStock: true },
];

let cartCount = 0;
let activeCategory = "all";
let searchQuery = "";
let currentSort = "default";

function initDOM() {
    const body = document.body;
    
    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.textContent = "Tech Catalog";
    
    const rightHeader = document.createElement("div");
    rightHeader.style.display = "flex";
    rightHeader.style.gap = "20px";
    
    const toggleMode = document.createElement("button");
    toggleMode.textContent = "🌙 Dark Mode";
    toggleMode.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggleMode.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    const cartWidget = document.createElement("div");
    cartWidget.className = "cart-widget";
    cartWidget.textContent = "🛒 Giỏ hàng";
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "0";
    cartWidget.appendChild(badge);

    rightHeader.appendChild(toggleMode);
    rightHeader.appendChild(cartWidget);
    header.appendChild(title);
    header.appendChild(rightHeader);
    body.appendChild(header);

    const controls = document.createElement("div");
    controls.className = "controls";

    const searchInput = document.createElement("input");
    searchInput.placeholder = "Tìm sản phẩm...";
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterAndRender();
    });
    controls.appendChild(searchInput);

    const categories = ["all", "phone", "laptop", "tablet", "accessory"];
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat.toUpperCase();
        if (cat === "all") btn.classList.add("active");
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".controls button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = cat;
            filterAndRender();
        });
        controls.appendChild(btn);
    });

    const sortSelect = document.createElement("select");
    const sortOptions = [
        { value: "default", text: "Sắp xếp" },
        { value: "price-asc", text: "Giá tăng dần" },
        { value: "price-desc", text: "Giá giảm dần" },
        { value: "name-az", text: "Tên A-Z" },
        { value: "rating-desc", text: "Đánh giá cao nhất" }
    ];
    sortOptions.forEach(opt => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.text;
        sortSelect.appendChild(o);
    });
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        filterAndRender();
    });
    controls.appendChild(sortSelect);
    body.appendChild(controls);

    const grid = document.createElement("div");
    grid.className = "products-grid";
    body.appendChild(grid);

    filterAndRender();
}

function filterAndRender() {
    let list = products.filter(p => {
        const matchCat = activeCategory === "all" || p.category === activeCategory;
        const matchSearch = p.name.toLowerCase().includes(searchQuery);
        return matchCat && matchSearch;
    });

    if (currentSort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (currentSort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (currentSort === "name-az") list.sort((a, b) => a.name.localeCompare(b.name));
    else if (currentSort === "rating-desc") list.sort((a, b) => b.rating - a.rating);

    renderProducts(list);
}

function renderProducts(list) {
    const grid = document.querySelector(".products-grid");
    grid.innerHTML = "";

    list.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.addEventListener("click", (e) => {
            if (e.target.tagName !== "BUTTON") openModal(p);
        });

        const img = document.createElement("img");
        img.src = p.image;
        card.appendChild(img);

        const info = document.createElement("div");
        info.className = "product-info";
        
        const name = document.createElement("h3");
        name.textContent = p.name;
        
        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = p.price.toLocaleString("vi-VN") + "đ";

        const rating = document.createElement("p");
        rating.textContent = `⭐ ${p.rating}`;

        info.appendChild(name);
        info.appendChild(price);
        info.appendChild(rating);
        card.appendChild(info);

        const btn = document.createElement("button");
        btn.textContent = p.inStock ? "Thêm vào giỏ" : "Hết hàng";
        btn.disabled = !p.inStock;
        btn.addEventListener("click", () => {
            cartCount++;
            document.querySelector(".badge").textContent = cartCount;
        });
        card.appendChild(btn);

        grid.appendChild(card);
    });
}

function openModal(p) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
    });

    const content = document.createElement("div");
    content.className = "modal-content";

    const close = document.createElement("span");
    close.className = "close-modal";
    close.textContent = "×";
    close.addEventListener("click", () => modal.remove());

    const title = document.createElement("h2");
    title.textContent = p.name;

    const img = document.createElement("img");
    img.src = p.image;
    img.style.width = "100%";

    const desc = document.createElement("p");
    desc.style.marginTop = "15px";
    desc.innerHTML = `Danh mục: ${p.category}<br>Giá: ${p.price.toLocaleString("vi-VN")}đ<br>Đánh giá: ⭐ ${p.rating}<br>Trạng thái: ${p.inStock ? "Còn hàng" : "Hết hàng"}`;

    content.appendChild(close);
    content.appendChild(title);
    content.appendChild(img);
    content.appendChild(desc);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

initDOM();