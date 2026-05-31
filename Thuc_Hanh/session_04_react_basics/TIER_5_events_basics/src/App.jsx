import ClickEvents from "./components/ClickEvents";
import InputEvents from "./components/InputEvents";
import KeyboardEvents from "./components/KeyboardEvents";
import FormEvents from "./components/FormEvents";

function App() {
    return (
        <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "Arial, sans-serif", padding: "0 15px" }}>
            <h1 style={{ 
                textAlign: "center", 
                marginBottom: "30px", 
                lineHeight: "1.4",       
                fontSize: "28px"
            }}>
                Chương 5: Xử lý Sự kiện trong React
            </h1>
            <ClickEvents />
            <InputEvents />
            <KeyboardEvents />
            <FormEvents />
        </div>
    );
}

export default App;