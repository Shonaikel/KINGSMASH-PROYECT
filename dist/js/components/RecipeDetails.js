app.component('recipe-details', {
    //props q mostraran la info de la receta
     props: {
         name: {
             type:String
         },
         image: {
             type:String
         },
         ingredients: {
             type:String
         },
         instructions: {
             type:String
         },
         category: {
            type: String,
          },
        time: {
            type: String,
          },
        level: {
            type: String,
          },
        likes: {
            type: Number,
            default: 1
          },
          index: {
            type: String
        }
     },
     data() {
        return {
          addLikes: this.likes
        }
      },
     mounted() {
     },
     methods: {
        onClickPrev() {
            console.log("PREV");
            this.$emit('prevrecipe',this.index);
        },
        onClickNext() {
            console.log("NEXT");
            this.$emit('nextrecipe',this.index);
        },
         onClickLike() {
            this.addLikes++;
          },
          onClickUnlike() {
            if(this.addLikes > 0) this.addLikes--;
          },
          onClicKViewRecipe() {
            this.$emit('recipedetails', this.index);
          }
     },
     template: 
     /*html*/
 `<div class="modal fade bd-example-modal-lg" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header color-light">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="h4"><h1 class="ps-5 pe-5 " id="staticBackdropLabel">{{ name }}</h1></div>
                <div class="row g-1 ps-5 pe-5 ">
                    <div class="col-md">
                        <div class="card card-size p-3">
                          <img class="card-img-top rounded " v-bind:src="image" alt="{{ name }}">
                            <div class="card-body">
                                <h3 class="card-title color-r">Categoria</h3>
                                <p class="giant-info filep">20 min</p>
                                <p class="giant-info filep">Easy</p>
                                <p class="giant-info filep"> 15 </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                      <div class="format-paragraph">
                         <div class="h6"><h2 class="color-r"> DESCRIPCION:</h2></div>
                           <p class="fs-6">{{ instructions }}</p>
                         <div class="h6"><h2 class="color-r"> INGREDIENTES:</h2></div>
                           <p class="fs-6">{{ ingredients }}</p>
                      </div>
                    </div>
                </div>     
                <div class="modal-footer color-light">
                    <div>
                        <button type="button" class="btn btn-dark" v-on:click="onClickPrev()">Prev</button>
                        <button type="button" class="btn btn-dark" v-on:click="onClickNext()">Next</button>
                    </div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
        </div>
    </div>
</div>`

 })

 /*`<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
 <div class="modal-dialog">
     <div class="modal-content">
         <div class="modal-header">
         <h1 class="title-margin ps-5 pe-5 modal-title fs-5" id="staticBackdropLabel">{{ name }}</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>

         <div class="modal-body">
             <img class="img-fluid" v-bind:src="image" alt="{{ name }}">
             <p class="text-center fs-6">{{ ingredients }}</p>
             <p class="fst-italic fw-light fs-5" >{{ instructions }}</p>
         </div>

         <div class="modal-footer">
             <div>
                 <button type="button" class="btn btn-dark" v-on:click="onClickPrev()">Prev</button>
                 <button type="button" class="btn btn-dark" v-on:click="onClickNext()">Next</button>
             </div>
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         </div>
     </div>
 </div>
</div>`*/