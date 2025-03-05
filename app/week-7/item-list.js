"use client";

import Item from "./item";

import { useState, useEffect } from "react";

export default function ItemList({items, setItems}) {
    let [sortBy, setSortBy] = useState("name");
    let [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
      sortItems(sortBy);
    }, [items, sortBy]);

    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
        );
      }

      const sortItems = (newSort) => {
        let sorted = [];
        if (newSort === "name") {
            sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
        } else if (newSort === "category") {
            sorted = [...sorted].sort((a, b) => a.name.localeCompare(b.name));
            sorted = [...items].sort((a, b) => a.category.localeCompare(b.category));
        } else if (newSort === "group") {
            sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
            sorted = sorted .reduce((acc, item) => {
                let group = item.category;
                if (!acc[group]) {
                    acc[group] = [];
                }
                acc[group].push(item);
                return acc;
            }, {});
        }
        setSortedItems(sorted);
        setSortBy(newSort);
    };

    
    const renderItems = (items, sortBy) => {
        // since items is an object, and does not use numbered indices, we must iterate through the keys, then iterate through the array present at
        // items[group], with group being the key. What an ugly solution!! but pretty cool
        if (sortBy === "group") {
            return Object.keys(items).map((group) => (
                <div key={group}>
                    <h1 className = "1xl font-bold">{toTitleCase(group)}</h1>
                    {items[group].map((item) => (
                        <Item key={item.id} item={item}/>
                    ))}
                </div>
            ));
        } else {
            return items.map((item) => (
                <Item key={item.id} item={item} showGroup={true}/>
            ));
        }
    };

    return (
      <div>
        <div className="flex flex-row items-center justify-start w-1/3 mx-2 px-2">
          <p>Sort By: </p>
          <button
            className={`p-2 m-2 hover:bg-purple-900 text-white rounded-lg w-20 ${
              sortBy === "name" ? "bg-purple-900" : "bg-purple-800"
            }`}
            onClick={() => sortItems("name")}
          >
            Name
          </button>
          <button
            className={`p-2 m-2 hover:bg-purple-900 text-white rounded-lg w-20 ${
              sortBy === "category" ? "bg-purple-900" : "bg-purple-800"
            }`}
            onClick={() => sortItems("category")}
          >
            Category
          </button>
          <button
            className={`p-2 m-2 hover:bg-purple-900 text-white rounded-lg w-40 ${
              sortBy === "group" ? "bg-purple-900" : "bg-purple-800"
            }`}
            onClick={() => sortItems("group")}
          >
            Grouped Category
          </button>
        </div>
        <ul className="2xl w-1/3 p-2 m-2">
            {
                renderItems(sortedItems, sortBy)
            } 
        </ul>
      </div>
    );
}
