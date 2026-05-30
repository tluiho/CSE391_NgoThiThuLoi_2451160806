function createCart() {
    let items = [];
    let discountCode = null;

    const discountRules = {
        "SALE10": (total) => total * 0.1,
        "SALE20": (total) => total * 0.2,
        "FREESHIP": () => 30000
    };

    return {
        addItem(product, quantity = 1) {
            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
        },

        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },

        updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
                return;
            }
            const item = items.find(item => item.id === productId);
            if (item) item.quantity = newQuantity;
        },

        getTotal() {
            const rawTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (!discountCode || !discountRules[discountCode]) return rawTotal;
            
            const discountAmount = discountRules[discountCode](rawTotal);
            const finalTotal = rawTotal - discountAmount;
            return finalTotal < 0 ? 0 : finalTotal;
        },

        applyDiscount(code) {
            if (discountRules.hasOwnProperty(code)) {
                discountCode = code;
            }
        },

        getItemCount() {
            return items.reduce((sum, item) => sum + item.quantity, 0);
        },

        clearCart() {
            items = [];
            discountCode = null;
        },

        printCart() {
            const format = (num) => num.toLocaleString('vi-VN');
            console.log("┌──────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm      │ SL │ Đơn giá    │ Tổng       │");
            
            items.forEach((item, index) => {
                const stt = String(index + 1).padEnd(1, ' ');
                const name = item.name.padEnd(13, ' ');
                const qty = String(item.quantity).padStart(2, ' ');
                const price = format(item.price).padStart(10, ' ');
                const total = format(item.price * item.quantity).padStart(10, ' ');
                console.log(`│ ${stt} │ ${name} │ ${qty} │ ${price} │ ${total} │`);
            });

            console.log("├──────────────────────────────────────────────┤");
            const finalTotalText = `${format(this.getTotal())}đ`.padStart(25, ' ');
            console.log(`│ Tổng cộng:  ${finalTotalText} │`);
            console.log("└──────────────────────────────────────────────┘");
        }
    };
}

// Test
const cart = createCart();
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount());
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());