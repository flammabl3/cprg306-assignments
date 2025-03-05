"use client";

import { useState } from "react";

const NewItem = ({items, setItems}) => {
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
            setItems([...items, {id: generateRandomId(), name: name, quantity: quantity, category: category}]);
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

    function generateRandomId(length = 19) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    
    console.log(generateRandomId());

    return (
        <form onSubmit={handleSubmit}>
        <div className={"flex flex-col max-w-sm w-full items-center p-2 m-2"}>
            {/* Row 1: Item Name Input */}
            <div className={"w-full m-2"}>
                <input
                    className={"rounded w-full p-2 text-black"}
                    name="nameField"
                    value={name}
                    placeholder="Item Name"
                    required={true}
                    onChange={(event) => {
                        handleChange(event);
                    }}
                />
            </div>

            {/* Row 2: Quantity and Category */}
            <div className={"flex justify-between items-center w-full space-x-4"}>
                <div className={"bg-white text-black p-2 mt-1 mb-1 rounded flex-1 flex items-center"}>
                    <span className={"flex items-center w-full justify-between"}>
                        {quantity}
                        <div>
                            <button
                                className={
                                    "bg-purple-500 hover:bg-purple-700 py-1 px-2 ml-6 rounded text-white w-10"
                                }
                                onClick={(event) => {
                                    handleChange(event);
                                    decrement(event);
                                }}
                            >
                                -
                            </button>
                            <button
                                className={
                                    "bg-purple-500 hover:bg-purple-700 py-1 ml-1 px-2 rounded text-white w-10"
                                }
                                onClick={(event) => {
                                    handleChange(event);
                                    increment(event);
                                }}
                            >
                                +
                            </button>
                        </div>
                    </span>
                </div>

                <select
                    className={"bg-white text-black p-4 rounded flex-1 h-full"}
                    name="categoryField"
                    value={category}
                    onChange={handleChange}
                >
                    {options.map((option) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </div>

            {/* Row 3: Submit Button */}
            <div className={"flex items-center m-2 w-full"}>
                <button
                    className={
                        "bg-purple-500 hover:bg-purple-700 text-white italic py-2 px-4 rounded w-full"
                    }
                >
                    Submit
                </button>
            </div>
        </div>
    </form>
    );
}


export default NewItem;