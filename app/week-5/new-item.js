"use client";

import { useState } from "react";

const NewItem = () => {
    let [name, setName] = useState("");
    let [quantity, setQuantity] = useState(1);
    let [category, setCategory] = useState("produce");

    let options = [
        "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"
    ];

    const increment = (event) => {
        quantity < 20 && setQuantity(quantity + 1);
    };

    const decrement = (event) => {
        quantity > 0 && setQuantity(quantity - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === "") {
            alert("Please enter a valid item.");
        } else {
            alert(`Item added: ${name}, ${quantity}, ${category}`);
        }
        reset();
        return;
    }

    function handleChange(event) {  
        event.preventDefault();
        switch (event.target.name) {
            case "nameField":
                setName(event.target.value.toLowerCase())
                break;
            case "categoryField":
                setCategory(event.target.value)
                break;
            default:
                break;
        }

        return;
    }

    const reset = () => {
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <div>
                <h1 className={"text-lg font-bold flex justify-center"}>Item Form</h1>
                <div className={"flex w-100 flex-row items-start m-2"}>
                    <input 
                        className={"rounded p-2 text-black"}
                        name="nameField" value={name} 
                        placeholder="Item Name" 
                        required={true} 
                        onChange={(event) => {handleChange(event)}}
                    />
                </div>
                <div className={"flex w-100 flex-row items-start m-2"}>
                    <p className={"bg-purple-100 text-black py-2 px-4 rounded w-40"}>Quantity: { quantity }</p>
                    <button className={"bg-purple-500 hover:bg-purple-700 py-2 px-4 rounded ml-2 w-40"}
                            onClick={(event) => {handleChange(event); increment(event); }}
                    >Increment</button>
                    <button className={"bg-purple-500 hover:bg-purple-700 py-2 px-4 rounded ml-2 w-40"}
                            onClick={(event) => { handleChange(event); decrement(event);}}
                    >Decrement</button>
                </div>
             
                <div className={"flex w-100 flex-row items-start m-2"}>
                    <select 
                        className={"rounded p-2 text-black"}
                        name="categoryField" value={category} onChange={handleChange}
                    >
                        <option>Please choose one option</option>
                        {options.map((option) => {
                            return (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className={"flex w-100 flex-row items-start m-2"}>
                    <button className={"bg-purple-500 hover:bg-purple-700 text-white italic py-2 px-4 rounded w-40"}>Submit</button>
                </div>
            </div>
        </form>
    )
}


export default NewItem;