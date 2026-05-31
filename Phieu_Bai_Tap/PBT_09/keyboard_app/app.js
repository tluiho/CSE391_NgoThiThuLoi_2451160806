// Thay đổi danh sách gồm 4 ảnh để test phím tắt từ 1-4 dễ dàng
const images = [
    "https://i.pinimg.com/736x/35/39/5e/35395e4cc7748223cd7fd9501cfbfa72.jpg",
    "https://khoinguonsangtao.vn/wp-content/uploads/2022/10/hinh-anh-chill-hoa-tulip.jpg",
    "https://tramhoa.com/wp-content/uploads/2022/09/image2-1657867515-945-width1024height576.jpg",
    "https://img.thuthuatphanmem.vn/uploads/2018/09/24/hinh-anh-hoa-co-mua-xuan_053003270.jpg"
];
let currentIndex = 0;
let slideInterval = null;

// Khai báo danh sách các lệnh thực thi trong Command Palette
const commands = [
    { name: "Chuyển sang Giao diện Tối (Dark mode)", action: () => document.body.classList.add("dark") },
    { name: "Chuyển sang Giao diện Sáng (Light mode)", action: () => document.body.classList.remove("dark") },
    { name: "Xem hình ảnh kế tiếp", action: () => changeImage(1) },
    { name: "Quay lại hình ảnh trước", action: () => changeImage(-1) }
];

const mainImage = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const palette = document.getElementById("palette");
const paletteInput = document.getElementById("paletteInput");
const paletteResults = document.getElementById("paletteResults");

let currentSelectedCommandIndex = 0;

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    mainImage.src = images[currentIndex];
    mainImage.alt = `Hình ảnh hoa tulip số ${currentIndex + 1} trong thư viện`;
}

function jumpToImage(index) {
    if (index >= 0 && index < images.length) {
        currentIndex = index;
        mainImage.src = images[currentIndex];
        mainImage.alt = `Hình ảnh hoa tulip số ${currentIndex + 1} trong thư viện`;
    }
}

function toggleSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
        playBtn.textContent = "Chạy tự động";
    } else {
        slideInterval = setInterval(() => changeImage(1), 2000);
        playBtn.textContent = "Tạm dừng";
    }
}

function openPalette() {
    palette.setAttribute("aria-hidden", "false");
    paletteInput.focus();
    currentSelectedCommandIndex = 0;
    renderCommands(commands);
}

function closePalette() {
    palette.setAttribute("aria-hidden", "true");
    paletteInput.value = "";
}

function renderCommands(filteredList) {
    paletteResults.innerHTML = "";
    if(filteredList.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Không tìm thấy lệnh nào phù hợp";
        paletteResults.appendChild(li);
        return;
    }

    filteredList.forEach((cmd, idx) => {
        const li = document.createElement("li");
        li.textContent = cmd.name;
        li.setAttribute("role", "option");
        li.setAttribute("tabindex", "-1");
        
        if (idx === currentSelectedCommandIndex) {
            li.classList.add("selected");
        }
        
        li.addEventListener("click", () => {
            cmd.action();
            closePalette();
        });
        paletteResults.appendChild(li);
    });
}

prevBtn.addEventListener("click", () => changeImage(-1));
nextBtn.addEventListener("click", () => changeImage(1));
playBtn.addEventListener("click", toggleSlideshow);

// Xử lý toàn bộ logic Keyboard Event điều hướng
window.addEventListener("keydown", (e) => {
    // Ctrl + K để bật/tắt command palette công nghệ
    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        palette.getAttribute("aria-hidden") === "true" ? openPalette() : closePalette();
        return;
    }

    // Nếu Command Palette đang mở, áp dụng cụm phím tắt riêng cho listbox
    if (palette.getAttribute("aria-hidden") === "false") {
        const filtered = commands.filter(c => c.name.toLowerCase().includes(paletteInput.value.toLowerCase()));
        
        if (e.key === "Escape") {
            closePalette();
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (filtered.length > 0) {
                currentSelectedCommandIndex = (currentSelectedCommandIndex + 1) % filtered.length;
                renderCommands(filtered);
            }
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (filtered.length > 0) {
                currentSelectedCommandIndex = (currentSelectedCommandIndex - 1 + filtered.length) % filtered.length;
                renderCommands(filtered);
            }
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (filtered[currentSelectedCommandIndex]) {
                filtered[currentSelectedCommandIndex].action();
                closePalette();
            }
        }
        return;
    }

    // Các phím tắt khi duyệt Gallery bên ngoài
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "Escape") {
        // Đóng tự động chạy slide nếu nhấn Escape
        if(slideInterval) toggleSlideshow(); 
    }
    if (e.key === " ") {
        e.preventDefault(); // Tránh scroll nhảy trang xuống dưới bất ngờ
        toggleSlideshow();
    }
    // Số từ 1-4 để nhảy ảnh tương ứng nhanh
    if (["1", "2", "3", "4"].includes(e.key)) {
        jumpToImage(parseInt(e.key) - 1);
    }
});

paletteInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = commands.filter(c => c.name.toLowerCase().includes(query));
    currentSelectedCommandIndex = 0; // reset tiêu điểm về dòng đầu tiên khi tìm kiếm
    renderCommands(filtered);
});