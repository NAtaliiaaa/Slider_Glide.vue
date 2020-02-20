// import '@babel/polyfill';
// import '../js/paralax'
// import Vue from 'vue/dist/vue.esm.js';
// import axios from 'axios';
// import _ from 'lodash';
// import Siema from 'siema';
// import Parallax from 'scroll-parallax';
// let siemaSider;
// document.addEventListener("DOMContentLoaded", () => {
//     Vue.component('blog-list', {
//         data() {
//             return {
//                 listData: [{
//                         title: 'Title 1',
//                         intro: "Intro 1",
//                     },
//                     {
//                         title: 'Title 2',
//                         intro: "Intro 2",
//                     },
//                     {
//                         title: 'Title 3',
//                         intro: "Intro 3",
//                     },
//                 ],
//             };
//         },
//         watch: {
//             listData() {

//             }
//         },
//         template: `
//         <ul id="list">
//         <list-item :article="item" v-for="item in listData"/>
//         </ul>
//         `,
//         mounted() {
//             // siemaSider = new Siema({
//             //     selector: '#list',
//             //     perPage: 3,

//             // });
//             var p = new Parallax('.parallax', {
//                 offsetYBounds: 50,
//                 intensity: 30,
//                 center: 0.5,
//                 safeHeight: 0.15
//             }).init()

//         },
//     });



//     Vue.component('list-item', {
//         props: ['article'],
//         template: `

//         <li class="steps__item fadeInUp">
//             <div class="steps__item-bg" style="background-image: url('')">
//             <img src="../img/images/Object (9).png" alt="" >

//             </div>
//             <div class="steps__item-overlay"></div>
//             <div class="steps__item-wrap">
//                 <span class="steps__subtitle">STEP 1</span>
//                 <h3 class="steps__title">{{article.title}}
//                 </h3>
//                 <p class="global__info">{{article.intro}}</p>
//             </div>
//         </li>
//         `
//     });
//     let vue = new Vue({
//         el: "#app",
//     });

// });


// // let vue = new Vue({
// //     el: "#app",
// // });



// // var watchExampleVM = new Vue({
// //     el: '#watch-example',
// //     data: {
// //         show: true,
// //         question: '',
// //         answer: 'Пока вы не зададите вопрос, я не могу ответить!'
// //     },
// //     watch: {
// //         // эта функция запускается при любом изменении вопроса
// //         question: function(newQuestion, oldQuestion) {
// //             this.answer = 'Ожидаю, когда вы закончите печатать...'
// //             this.debouncedGetAnswer()
// //         }
// //     },
// //     created: function() {
// //         // _.debounce — это функция lodash, позволяющая ограничить то,
// //         // насколько часто может выполняться определённая операция.
// //         // В данном случае мы ограничиваем частоту обращений к yesno.wtf/api,
// //         // дожидаясь завершения печати вопроса перед отправкой ajax-запроса.
// //         // Узнать больше о функции _.debounce (и её родственнице _.throttle),
// //         // можно в документации: https://lodash.com/docs#debounce
// //         this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
// //     },
// //     methods: {
// //         getAnswer: function() {
// //             if (this.question.indexOf('?') === -1) {
// //                 this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
// //                 return
// //             }
// //             this.answer = 'Думаю...'
// //             var vm = this
// //             axios.get('https://yesno.wtf/api')
// //                 .then(function(response) {
// //                     vm.answer = _.capitalize(response.data.answer)
// //                     vm.image = response.data.image
// //                 })

// //             .catch(function(error) {
// //                 vm.answer = 'Ошибка! Не могу связаться с API. ' + error
// //             })
// //         }
// //     }
// // })