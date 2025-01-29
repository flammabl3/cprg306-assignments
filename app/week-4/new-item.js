"use client";

import { useState } from "react";

export default function NewItem() {
    let [quantity, setQuantity] = useState(1);

    //one-liner conditional, nice
    const increment = () => quantity < 20 && setQuantity(quantity + 1);
    const decrement = () => quantity > 0 && setQuantity(quantity - 1); 

    return (
        <div className={"flex min-h-screen flex-1 flex-col items-center justify-center"}>
            <p>Quantity: { quantity }</p>
            <button
                    onClick={increment}
                    className={"bg-purple-500 hover:bg-purple-700 text-white italic py-2 px-4 m-2 rounded w-40"}
            >Increment</button>
            <button
                    onClick={decrement}
                    className={"bg-purple-500 hover:bg-purple-700 text-white italic py-2 px-4 m-2 rounded w-40"}
            >Decrement</button>
        </div>
    )
}