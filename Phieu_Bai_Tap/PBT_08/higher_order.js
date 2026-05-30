// 1. pipe()
function pipe(...fns) {
    return function(initialValue) {
        return fns.reduce((currentValue, currentFn) => currentFn(currentValue), initialValue);
    };
}

// 2. memoize()
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// 3. debounce()
function debounce(fn, delay) {
    let timerId = null;
    return function(...args) {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// 4. retry()
async function retry(fn, maxAttempts = 3) {
    let currentAttempt = 0;
    while (currentAttempt < maxAttempts) {
        try {
            return await fn();
        } catch (error) {
            currentAttempt++;
            if (currentAttempt >= maxAttempts) {
                throw error;
            }
        }
    }
}

// Test 

// Test 1: pipe
const processValue = pipe(
    x => x * 2,        
    x => x + 10,       
    x => x.toString(), 
    x => "Kết quả: " + x
);
console.log("--- TEST PIPE ---");
console.log(processValue(5));

// Test 2: memoize
const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});
console.log("\n--- TEST MEMOIZE ---");
console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

// Test 3: debounce
console.log("\n--- TEST DEBOUNCE (Đợi log kết quả sau 500ms) ---");
const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

search("a");
search("ab");
search("abc"); // Chỉ có cuộc gọi cuối này được kích hoạt sau 500ms lặng im

// Test 4: retry
console.log("\n--- TEST RETRY ---");
let counter = 0;
const unstableTask = async () => {
    counter++;
    if (counter < 3) {
        console.log(`Lần thử ${counter}: Thất bại ngẫu nhiên...`);
        throw new Error("Lỗi kết nối mạng");
    }
    return "Kết nối thành công ở lần thử 3!";
};

retry(unstableTask, 3)
    .then(res => console.log("Kết quả nhận được:", res))
    .catch(err => console.error("Thất bại hoàn toàn:", err.message));