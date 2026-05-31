function SimpleVariables() {
    // Thử thách 1: Thông tin cá nhân
    const profile = { name: "Ngo Thi Thu Loi", age: 20, hometown: "Hà Nội" };
    
    // Thử thách 2: Lời chào dựa vào giờ hiện tại
    const currentHour = new Date().getHours();
    let greeting = "Chào buổi tối 🌙";
    if (currentHour < 12) greeting = "Chào buổi sáng ☀️";
    else if (currentHour < 18) greeting = "Chào buổi chiều 🌤️";

    // Thử thách 3: Tính chỉ số BMI
    const weight = 50; 
    const height = 1.53; 
    const bmi = (weight / (height * height)).toFixed(2);

    return (
        <div style={{ padding: "15px", border: "2px solid #ffb6c1", marginBottom: "20px", borderRadius: "10px" }}>
            <h3>{greeting} </h3>
            <p><b>Cá nhân:</b> {profile.name} - {profile.age} tuổi - Quê quán: {profile.hometown}</p>
            <p><b>Chỉ số BMI:</b> {bmi} (Nặng: {weight}kg, Cao: {height}m)</p>
        </div>
    );
}

export default SimpleVariables;