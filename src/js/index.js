import '@babel/polyfill';
import Vue from 'vue/dist/vue.esm.js';


Vue.component('list-item', {
    props: ['affairs'],
    template: '<li  class="list__affair">{{affairs}}  </li>',
});
// Vue.component('list-btn', {
//     props: ['affairs'],
//     template: ' <input class="list__btn" type="button" value="Delete"> ',
//     //     v-on:click="removeTodo(index)"
// });

document.addEventListener('DOMContentLoaded', () => {
    const vue = new Vue({
        el: '#app',
        data: {
            newTodo: '',
            affairs: []

        },
        methods: {
            addTodo(toDoAffair) {

                this.affairs.push(toDoAffair)
                this.newTodo = ''
            },
            clearAll() {
                this.affairs = []
            },
            removeTodo(index) {
                this.affairs.splice(index, 1)
            }
        }

    });

    window.VUE = vue;

    // 
    // {# =========================== #}
    // {# ===========================TASK 3  ===========================#}
    // {# =========================== #}
    const k = new Vue({
        el: '#app8',
        data() {
            return {
                names: ["name1", "name2", "name3", "name4", "name5", "name6"]
            };
        },
        computed: {
            randomName() {
                return this.names[Math.floor(Math.random() * this.names.length)];
            }
        }
    });
});