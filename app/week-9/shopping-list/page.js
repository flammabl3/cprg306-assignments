"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

import { useUserAuth } from "../_utils/auth-context";
import Layout from '../layout';

export default function Page() {
  const { user } = useUserAuth();

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
    <Layout>
      { user && 
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
      }
      {!user && 
        <div className="flex flex-col items-center justify-center min-h-screen min-w-full">      
          <p className="text-center">
            Not Authorized.
          </p>
          <a href="/"><button className="bg-purple-800 w-20 rounded-md self-center p-2 m-2">Home</button></a>
        </div>
      }
    </Layout>
  );
}
