"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);

       
    };

    return (
        <div>
            <p>{count}</p>
            <button
                onClick={increment}
                className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
            >Click me....</button>
        </div>
    )
}