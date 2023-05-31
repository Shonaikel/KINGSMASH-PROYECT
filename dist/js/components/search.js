const searchBtn = document.getid('search-btn');
const lista = document.getid('meal');
const recipeCloseBtn = document.getid('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
lista.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
});


function getMealList(){
    let searchInput = document.getid('search-input').value.trim();

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {

        let html = "";

        if(data.meals){
                data.meals.forEach(meal => {
                    html += 
                    `<div class = "meal-item" data-id = "${meal.idMeal}">
                            <div class = "meal-img">
                                <img src = "${meal.strMealThumb}" alt = "food">
                            </div>
                            <div class = "meal-name">
                                <h3>${meal.strMeal}</h3>
                                <a href = "#" class = "recipe-btn">Get Recipe</a>
                            </div>
                        </div>`;
                });

                lista.classList.remove('notFound');
        } else{
            html = "NO SE HA PODIDO ENCONTRAR LA RECETA!";
            lista.classList.add('notFound');
        }

        lista.innerHTML = html;
    });
}


// get recipe of the meal
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){

        let item = e.target.parentElement.parentElement;

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.dataset.id}`)

        .then(response => response.json())
    }
}
