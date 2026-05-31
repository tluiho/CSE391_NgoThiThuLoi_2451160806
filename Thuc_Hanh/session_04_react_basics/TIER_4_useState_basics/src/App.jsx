//import NumberState from "./components/NumberState";
// import StringState from "./components/StringState";
// import BooleanState from "./components/BooleanState";
import MultipleStates from "./components/MultipleStates";

function App() {
    return (
        <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "Arial, sans-serif", padding: "0 15px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px", lineHeight: "1.4" }}>
                Học React useState cơ bản
            </h1>
            {/* <NumberState /> */}
            {/* <StringState /> */}
            {/* <BooleanState /> */}
            <MultipleStates />
        </div>
    );
}

export default App;