app.component("recipe-card", {
    props: {
      image: {
        type: String,
      },
      category: {
        type: String,
        default: "recipe category",
      },
      name: {
        type: String,
        default: "recipe name",
      },
      description: {
        type: String,
        default: "recipe description",
      },
      time: {
        type: String,
        default: "recipe time",
      },
      level: {
        type: String,
        default: "recipe level",
      },
      likes: {
        type: Number,
        default: 1
      },
      index: {
          type: String
      },
    },
    
data() {
  return {
    addLikes: this.likes
  }
},
    methods: {
      onClickLike() {
        this.addLikes++;
      },
      onClickUnlike() {
        if(this.addLikes > 0) this.addLikes--;
      },
      onClicKViewRecipe() {
        this.$emit('recipedetails', this.index);
      },
    },
    template:
      /*html*/
  `<div class="">
    <div class="card mb-3">
        
        <div class="row g-0 m-2">
            <div class="col-md-4">
            <a href=""><img v-bind:src="image" class="card-img-top" alt="featured recipe"></a>
            </div>

        <div class="col-md-8">
            <div class="card-body pt-0">
                <p class="mt-2 mb-1 color-r fs-5">{{ category }}</p>
                <h5 class="fs-4">{{ name }}</h5>
                <p class="mb-0 text-recipe-info fs-6">{{ time }}</p>
                <p class="mb-4 text-recipe-info fs-6">{{ level }}</p>
                <div class="elements-l">
                    <p class="mt-2 text-recipe-info fs-6">{{ addLikes }}</p>
                    <button class="btn me-2 mb-3" v-on:click="onClickLike()"><img class="like-size" src="images/icons/likeso.png"></button>
                    <button class="btn me-2 mb-3" v-on:click="onClickUnlike()"><img class="like-size" src="images/icons/dislike.png"></button>
                </div>
            <button class="btn btn-dark fw-bold me-2 mb-3" v-on:click="onClicKViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            View Recipe</button>
            </div>
        </div>
        </div>
    </div>
  </div>`,
  });
  /*
   <section class="row row-cols-md-3 g-4 ps-5 pe-4 card-size-top-10">   
            <div v-if="hasRecipes" v-for="(recipe, index) in recipes" class="col-sm">
                <div class="card mb-3">

                    <div class="row g-0 m-2">
                          
                          <div class="col-md-4">
                            <a href="../dist/recetario.html"><img v-bind:src="recipe.image" class="img-fluid rounded " alt="featured recipe"></a>
                          </div>

                      <div class="col-md-8">
                          <div class="card-body pt-0">
                            <p class="mt-2 mb-1 color-r fs-5">{{ recipe.category }}</p>
                            <h5 class="fs-4">{{ recipe.name }}</h5>
                            <p class="fs-5">{{ recipe.description }}</p>
                            <p class="mb-0 text-recipe-info fs-6">{{ recipe.time }}</p>
                            <p class="mb-4 text-recipe-info fs-6">{{ recipe.level }}</p>
                                <div class="elements-l">
                                  <p class="mt-2 text-recipe-info fs-6">{{ recipe.likes }}</p>
                                  <button class="btn me-2 mb-3" v-on:click="onClickLike(index)"><img class="like-size" src="images/icons/likeso.png"></button>
                                  <button class="btn me-2 mb-3" v-on:click="onClickUnLike(index)"><img class="like-size" src="images/icons/dislike.png"></button>
                                </div>
                            <button class="btn btn-dark fw-bold me-2 mb-3" data-bs-toggle="modal2" data-bs-target="#staticBackdrop"
                            v-on:click="onClickViewRecipe(index)">VER RECETAS</button>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
                <p v-else class="fw-bold">No recipes for this category</p>
          </section>
        </section>
  */