const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

// get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input1').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class="col-md">
                        <div class="card p-3">
                        <a href=""><img src="${meal.strMealThumb}" class="card-img-top rounded" alt="fod"></a>
                            <div class="card-body">
                            <h5 class="card-title text-recipe-name fs-4">${meal.strMeal}</h5>
                            <p class="mt-2 mb-1 color-r fs-5">${meal.strCategory}</p>
                            <p class="mb-0 mt-4 text-recipe-info fs-6">15 min</p>
                            <p class="mb-0 text-recipe-info fs-6">Easy</p>
                                <div class="elements-l">
                                    <p class="mt-2 text-recipe-info fs-6">100</p>
                                    <button class="btn me-2 mb-3" v-on:click="onClickLike()"><img class="like-size" src="images/icons/likeso.png"></button>
                                    <button class="btn me-2 mb-3" v-on:click="onClickUnlike()"><img class="like-size" src="images/icons/dislike.png"></button>
                                </div>
                                <div class="elements-l">
                                    <button class="btn btn-dark fw-bold me-2 mb-3" v-on:click="onClicKViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Recipe</button>
                                    <button class="btn fw-bold me-2 mb-3"><img class="like-size" src="images/icons/add.png"></button>
                                </div> 
                            </div>
                        </div>
                    </div>
              `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }
        mealList.innerHTML = html;
    });
}

// get recipe of the meal
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

// create a modal
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
