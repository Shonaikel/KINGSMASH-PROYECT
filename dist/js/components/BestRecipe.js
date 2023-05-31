app.component("best-recipe", {
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
  `<div class="col-md">
      <div class="card p-3">
      <a href=""><img v-bind:src="image" class="card-img-top rounded" alt="TOP 10"></a>
          <div class="card-body">
            <h5 class="card-title text-recipe-name fs-4">{{ name }}</h5>
            <p class="mt-2 mb-1 color-r fs-5">{{ category }}</p>
            <p class="mb-0 mt-4 text-recipe-info fs-6">{{ time }}</p>
            <p class="mb-0 text-recipe-info fs-6">{{ level }}</p>
              <div class="elements-l">
                  <p class="mt-2 text-recipe-info fs-6">{{ addLikes }}</p>
                  <button class="btn me-2 mb-3" v-on:click="onClickLike()"><img class="like-size" src="images/icons/likeso.png"></button>
                  <button class="btn me-2 mb-3" v-on:click="onClickUnlike()"><img class="like-size" src="images/icons/dislike.png"></button>
              </div>
              <div class="elements-l">
                  <button class="btn btn-dark fw-bold me-2 mb-3" v-on:click="onClicKViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Recipe</button>
                  <button class="btn fw-bold me-2 mb-3"><img class="like-size" src="images/icons/add.png"></button>
              </div> 
          </div>
      </div>
    </div>`,
  });

  /*
   <div class="">
    <div class="col-md">
      <div class="card p-3">
        <a href=""><img v-bind:src="image" class="card-img-top rounded" alt="TOP 10"></a>
      <div class="card-body">
          <h5 class="card-title text-recipe-name fs-4">{{ name }}</h5>
          <p class="mt-2 mb-1 color-r fs-5">{{ category }}</p>
          <p class="card-text text fs-5">{{ description }}</p>
          <p class="mb-0 mt-4 text-recipe-info fs-6">{{ time }}</p>
          <p class="mb-0 text-recipe-info fs-6">{{ level }}</p>
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
  </div>
  */