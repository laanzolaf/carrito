import { useState } from 'react';


const ClickableComponent = () => {
    const [count, setCount] = useState (0);
    const [timestamp, setTimesTamp] = useState (new Date());


    function updateCount (){
        setCount (count+1);
        setTimesTamp(new Date());
    }
        

    return (

        <div>
            <span>Clicks: {count}, último click: {timestamp.toString()}</span>
            <button type="button" onClick={updateCount}>Click aquí</button>

        </div>
    )
}

export default ClickableComponent;