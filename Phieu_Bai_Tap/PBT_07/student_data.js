const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];
let rankCount = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };
let highestStudent = null;
let lowestStudent = null;

let totalMath = 0, totalPhysics = 0, totalCS = 0;
let totalMaleGPA = 0, countMale = 0;
let totalFemaleGPA = 0, countFemale = 0;

const processedStudents = [];

for (let i = 0; i < students.length; i++) {
    const sv = students[i];

    // 1. Tính điểm trung bình (làm tròn 1 chữ số thập phân)
    const gpa = Math.round((sv.math * 0.4 + sv.physics * 0.3 + sv.cs * 0.3) * 10) / 10;

    // 2. Xếp loại
    let rank = "";
    if (gpa >= 8.0) rank = "Giỏi";
    else if (gpa >= 6.5) rank = "Khá";
    else if (gpa >= 5.0) rank = "Trung bình";
    else rank = "Yếu";
    processedStudents.push({ name: sv.name, gpa: gpa.toFixed(1), rank: rank });
    rankCount[rank]++;

    // Tìm SV điểm cao nhất / thấp nhất
    if (highestStudent === null || gpa > highestStudent.gpa) {
        highestStudent = { name: sv.name, gpa: gpa };
    }
    if (lowestStudent === null || gpa < lowestStudent.gpa) {
        lowestStudent = { name: sv.name, gpa: gpa };
    }

    totalMath += sv.math;
    totalPhysics += sv.physics;
    totalCS += sv.cs;
    if (sv.gender === "M") {
        totalMaleGPA += gpa;
        countMale++;
    } else if (sv.gender === "F") {
        totalFemaleGPA += gpa;
        countFemale++;
    }
}

// 3. In bảng kết quả dạng Markdown table
console.log("| STT | Tên     | TB   | Xếp loại    |");
console.log("|-----|---------|------|-------------|");
for (let i = 0; i < processedStudents.length; i++) {
    const p = processedStudents[i];
    // Pad tên để căn lề bảng cho đẹp mắt
    const paddedName = p.name.padEnd(7, ' ');
    const paddedRank = p.rank.padEnd(11, ' ');
    console.log(`| ${i + 1}   | ${paddedName} | ${p.gpa}  | ${paddedRank} |`);
}
console.log("-------------------------------------");

// 4. Đếm số SV mỗi xếp loại
console.log("Thống kê xếp loại:");
console.log(`- Giỏi: ${rankCount["Giỏi"]} SV`);
console.log(`- Khá: ${rankCount["Khá"]} SV`);
console.log(`- Trung bình: ${rankCount["Trung bình"]} SV`);
console.log(`- Yếu: ${rankCount["Yếu"]} SV`);
console.log("-------------------------------------");

// 5. Tìm SV có điểm TB cao nhất, thấp nhất
console.log(`SV điểm TB cao nhất: ${highestStudent.name} (${highestStudent.gpa.toFixed(1)})`);
console.log(`SV điểm TB thấp nhất: ${lowestStudent.name} (${lowestStudent.gpa.toFixed(1)})`);
console.log("-------------------------------------");

// 6. Tính điểm TB toàn lớp cho từng môn
const avgMath = (totalMath / students.length).toFixed(2);
const avgPhysics = (totalPhysics / students.length).toFixed(2);
const avgCS = (totalCS / students.length).toFixed(2);
console.log("Điểm trung bình các môn của cả lớp:");
console.log(`- Toán: ${avgMath}`);
console.log(`- Vật lý: ${avgPhysics}`);
console.log(`- Khoa học máy tính (CS): ${avgCS}`);
console.log("-------------------------------------");

// 7. Bonus: Tính điểm TB theo giới tính
const avgMale = countMale > 0 ? (totalMaleGPA / countMale).toFixed(2) : 0;
const avgFemale = countFemale > 0 ? (totalFemaleGPA / countFemale).toFixed(2) : 0;
console.log("Điểm trung bình theo giới tính:");
console.log(`- Nam (M): ${avgMale}`);
console.log(`- Nữ (F): ${avgFemale}`);