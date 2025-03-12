"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  let [items, setItems] = useState(itemsData);
  let [clickedItem, setClickedItem] = useState(null);
  let [mealIdeas, setMealIdeas] = useState([]);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      if (clickedItem) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${alphaOnly(
              clickedItem.name
            )}`
          );
          const data = await response.json();
          setMealIdeas(data.meals);
        } catch (error) {
          console.error("Error:", error);
          setMealIdeas([]);
        }
      }
    };
    fetchMealIdeas();
  }, [clickedItem]);

  function alphaOnly(str) {
    return str.replace(/[^a-zA-z]/g, "");
  }

  return (
    <main className="bg-gray-950">
      <meta title="Shopping List"></meta>
      <h1 className="p-2 m-2   text-2xl font-bold">Shopping List</h1>
      <div className="flex">
        <div>
            <NewItem items={items} setItems={setItems} />
            <ItemList
                items={items}
                setItems={setItems}
                setClickedItem={setClickedItem}
            />
        </div>
        <div>
            <MealIdeas mealIdeas={mealIdeas} itemName={clickedItem && clickedItem.name} />
        </div>
      </div>

    </main>
  );
}
