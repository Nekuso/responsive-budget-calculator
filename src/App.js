import React, {useState} from 'react';

const App = () => {

    const [currentCount, setCurrentCount] = useState(0);

    function increment() {
        setCurrentCount(currentCount + 1 )
    }

    function decrement() {
        setCurrentCount(currentCount - 1 )
    }

    return (
        <div>
            <button onClick={increment}>+1</button>
            <h1>{currentCount}</h1>
            <button onClick={decrement}>-1</button>
        </div>
    );
}

export default App;
