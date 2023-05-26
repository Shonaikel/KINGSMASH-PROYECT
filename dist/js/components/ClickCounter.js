app.component('click-counter', {
    data() {
        return {
            counter: 0
        }
    },
    template: 
    /*html*/
    `<button class='btn btn-primary' v-on:click='counter++'>{{ counter }}</button>`
})