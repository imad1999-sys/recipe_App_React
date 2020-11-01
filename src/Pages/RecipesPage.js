import React from 'react';
import "../css/Card.css";
export default function RecipePage({ title, calories, image, ingredients }) {
    return (
       /* <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img src={image} alt="" />
        </div>*/
        <div className="col mb-4">
            <div className="card">
                <img src={image} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="ingredient">ingredients: </p>
                    <ol className="ingredient-contain">
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                    <p className="food-calories">Calories: </p>
                    <p className="calories">{calories}</p>
                </div>
            </div>
        </div>
    );
}