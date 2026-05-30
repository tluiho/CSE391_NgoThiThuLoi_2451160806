const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 7;
let guessedNumbers = [];
while (attempts < maxAttempts) {
    let input = prompt(`Lần ${attempts + 1}/${maxAttempts}\nNhập số từ 1-100:`);
    let guess = Number(input);
    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }
    guessedNumbers.push(guess)
    attempts++;
    if (guess === answer) {
        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
        break;
    }
    else if (guess < answer) {
        alert("Cao hơn!");
    }
    else {
        alert("Thấp hơn!");
    }
}
if (attempts === maxAttempts &&
    guessedNumbers[guessedNumbers.length - 1] !== answer) {
    alert(`Bạn đã hết lượt! Đáp án là ${answer}`);
}