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
         }
     },
     template: 
     /*html*/
 `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
 <div class="modal-dialog">
     <div class="modal-content">
         <div class="modal-header">
             <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ name }}</h1>
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
</div>`

 })