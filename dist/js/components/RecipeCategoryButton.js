
app.component('recipe-category-button', {
    props:{
        name:{
            type: String
        }
    },
    methods: {
        onClickCategoryButton() {
            // console.log(this.name);
            this.$emit('selectedcategory', this.name);
        }
    },
    template: 
    /*html*/
    `<button class="btn btn-warning" v-on:click="onClickCategoryButton">{{ name }}</button>`
})