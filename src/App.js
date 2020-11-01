import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import RecipesPage from "../src/Pages/RecipesPage.js";

const App = () => {
  const APP_ID = '034fdf82';
  const APP_KEY = 'b26ae32abbebedf1e34bd85bd8c0922f';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const exampleReq =
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    getRecipes();
    console.log('we are fetching data');
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  const updateDearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
        type="text" 
        className="form-control search-bar" 
        id="exampleFormControlInput1" 
        placeholder="please search about your favorite food" 
        value={search} onChange={updateDearch} 
        />
        <button type="submit" className="btn btn-dark btn-search"><i class="fas fa-search"></i> Search</button>
      </form>
      <div className="row row-cols-1 row-cols-md-2">
        {recipes.map(recipe => (
          <RecipesPage
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}>
          </RecipesPage>
        ))}
      </div>
    </div>
  );
}

export default App;
