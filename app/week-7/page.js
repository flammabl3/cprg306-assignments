"use client";

import ItemList from "./item-list";
import NewItem from './new-item';
import { useState } from "react";
import itemsData from "./items.json";

export default function Page() {
    let [items, setItems] = useState(itemsData);

    return (
        <main className="bg-gray-950">
            <meta title="Shopping List"></meta>
            <h1 className="p-2 m-2   text-2xl font-bold">Shopping List</h1>
            <NewItem items={items} setItems={setItems}/>
            <ItemList items={items} setItems={setItems}/>
        </main>
    );
}