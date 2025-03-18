"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({mealIdeas, itemName}) {
    let [ingredients, setIngredients] = useState({});
    let [clickedMeal, setClickedMeal] = useState(null);
    
    const Ingredients = {
        name: String,
        quantity: String
    };

    // what a mess!!
    // fetch the clicked meal. create an array of objects from all the keys in the returned meal.
    // filter out keys that don't start with "strIngredient" and keys that have no value.
    // create Ingredient objcts from the name and quantity of ingredient located at these keys.
    // store it at the key of the meal whose id is clickedMeal (reduces need to call API over and over.)
    useEffect(() => {
        if(clickedMeal && !ingredients[clickedMeal]) {
            async function getIngredients() {
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedMeal}`)
                .then((response) => response.json())
                .then((data) => {
                    let mealData = data.meals[0];
                    let ingredientsArr =  
                    Object.keys(data.meals[0])
                    .filter(key => key.startsWith("strIngredient") && mealData[key])
                    .map(key => {
                        const index = key.replace("strIngredient", "");
                        return {
                            name: mealData[key],
                            quantity: mealData[`strMeasure${index}`]
                        };
                    });

                    setIngredients(prevIngredients => ({
                        ...prevIngredients,
                        [clickedMeal]: ingredientsArr
                    }));
                });
            }
            getIngredients();
        }
    }, [clickedMeal]);

    const mealText = (mealIdeas) => {
        if (mealIdeas == null) {
            return(<div><p>No meal ideas found for: {itemName}</p></div>)
        } 
        if (mealIdeas.length == 0) {
            return(<div><p>Click for meal ideas!</p></div>)
        } else {
            return(<div><p>Meal ideas for: {itemName}</p></div>)
        }
    }

    return (
        <div>
            <h1 className="font-semibold text-lg">Meal Ideas</h1>
            {mealText(mealIdeas)}
            {mealIdeas && 
            <ul>
                {mealIdeas.map((meal) => (
                <li key={meal.idMeal} 
                    className="bg-purple-950 hover:bg-green-700 my-4 mx-3 p-2 rounded-sm w-full"
                    onClick={() => clickedMeal === meal.idMeal ? setClickedMeal(null) : setClickedMeal(meal.idMeal)}>
                    <h1>{meal.strMeal}</h1>
                    { clickedMeal === meal.idMeal &&
                        <ul>
                            <li>
                                <h2>Ingredients</h2>
                                <ul>
                                    {ingredients[meal.idMeal] && ingredients[meal.idMeal].map((ingredient) => (
                                        <li key={`${meal.idMeal}-${ingredient.name}--${ingredient.quantity}`}>{ingredient.quantity} of {ingredient.name}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    }
                </li>
                
                ))}
            </ul>
            }
        </div>
    )
}