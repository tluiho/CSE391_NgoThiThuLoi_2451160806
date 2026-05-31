function BadCounter() {
    let count = 0;

    function handleClick() {
        count++;
        console.log("Count:", count);
    }

    return (
        <div>
            <h2>Bad Counter</h2>
            <p>{count}</p>
            <button onClick={handleClick}>
                Tăng
            </button>
        </div>
    );
}

export default BadCounter;