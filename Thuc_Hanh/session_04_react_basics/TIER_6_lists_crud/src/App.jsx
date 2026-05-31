import ListBasics from "./components/ListBasics";
import CreateItem from "./components/CreateItem";
import DeleteItem from "./components/DeleteItem";
import UpdateItem from "./components/UpdateItem";

function App() {
    return (
        <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "Arial, sans-serif", padding: "0 15px" }}>
            <h1 style={{ 
                textAlign: "center", 
                marginBottom: "30px", 
                lineHeight: "1.4",
                fontSize: "28px" 
            }}>
                Chương 6: Làm việc với Mảng & Biểu mẫu danh sách
            </h1>
            
            <ListBasics />
            <CreateItem />
            <DeleteItem />
            <UpdateItem />
        </div>
    );
}

export default App;