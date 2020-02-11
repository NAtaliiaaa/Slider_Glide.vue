import '@babel/polyfill';
import Vue from 'vue/dist/vue.esm.js';


//1
Vue.component("blog-item", {
    template: '<li>{{ message }} !</li>',
    customOption: 'something',
    data() {
        return {
            message: 'Welcome to Vue.js'
        };
    },

    beforeCreate() {

    },
    created: function() {
        console.log('created')
        console.log(this.$options.customOption)
        console.log(`${this.message}`);

    },
    beforeMount: function() {
        console.log('beforeMount()');
        console.log(this.$options.customOption)
        console.log(`${this.message}`); //console.log(this.message);
    },
    mounted: function() {
        console.log('mounted()');
        console.log(this.$el);
        console.log(this.$options.customOption);


    },
    // beforeUpdate: function() {
    //     console.log('beforeUpdate()');
    //     console.log(this.$el);
    // },
    // updated: function() {
    //     console.log('updated()');
    // },
    // beforeDestroy: function() {
    //     console.log('beforeDestroy()');
    // },
    // destroyed: function() {
    //     console.log('destroyed()');
    // }
});
//2
Vue.component("blog-list", {
    template: '<ul><blog-item> </blog-item></ul >',
});


// task2

Vue.component("first-component", {
    template: `<div class="first-component" v-on:mouseover="num"></div>`,
    methods: {
        num() {
            return this.$parent.$children[1].count++;
        }
    }
});

Vue.component("second-component", {
    template: `<div class="second-component" >Кількість: {{count}}</div>`,
    data() {
        return {
            count: 0
        };
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const vm = new Vue({
        el: '#app',
        data: {

        },
        created() {
            console.log(`${this}`);
        }
    });
    let vm1 = new Vue({
        el: "#app1",
    });







    // let vm5 = new Vue({
    //     el: "#app1",
    // });



















    // Vue.component('list-item', {
    //     props: ['affairs'],
    //     template: '<li  class="list__affair">{{affairs}}  </li>',
    // });

    // document.addEventListener('DOMContentLoaded', () => {
    //     const vue = new Vue({
    //         el: '#app',
    //         data: {
    //             newTodo: '',
    //             affairs: []

    //         },
    //         methods: {
    //             addTodo(toDoAffair) {

    //                 this.affairs.push(toDoAffair)
    //                 this.newTodo = ''
    //             },
    //             clearAll() {
    //                 this.affairs = []
    //             },
    //             removeTodo(index) {
    //                 this.affairs.splice(index, 1)
    //             }
    //         }

    //     });

    //     window.VUE = vue;

    // const k = new Vue({
    //     el: '#app8',
    //     data() {
    //         return {
    //             names: ["name1", "name2", "name3", "name4", "name5", "name6"]
    //         };
    //     },
    //     computed: {
    //         randomName() {
    //             return this.names[Math.floor(Math.random() * this.names.length)];
    //         }
    //     }
    // });
});