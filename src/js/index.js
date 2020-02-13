import '@babel/polyfill';
import Vue from 'vue/dist/vue.esm.js';
import axios from 'axios';
import _ from 'lodash';
import Siema from 'siema';
// import VueCarousel from 'vue-carousel';

let app = new Vue({
    el: ".siema",
    mounted() {
        this.mySiema = new Siema({
            duration: 200,
            easing: 'ease-out',
            perPage: 3,
            startIndex: 0,
            draggable: true,
            threshold: 20,
            loop: false,
        });
    }
});



var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        show: true,
        question: '',
        answer: 'Пока вы не зададите вопрос, я не могу ответить!'
    },
    watch: {
        // эта функция запускается при любом изменении вопроса
        question: function(newQuestion, oldQuestion) {
            this.answer = 'Ожидаю, когда вы закончите печатать...'
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        // _.debounce — это функция lodash, позволяющая ограничить то,
        // насколько часто может выполняться определённая операция.
        // В данном случае мы ограничиваем частоту обращений к yesno.wtf/api,
        // дожидаясь завершения печати вопроса перед отправкой ajax-запроса.
        // Узнать больше о функции _.debounce (и её родственнице _.throttle),
        // можно в документации: https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
                return
            }
            this.answer = 'Думаю...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function(response) {
                    vm.answer = _.capitalize(response.data.answer)
                    vm.image = response.data.image
                })

            .catch(function(error) {
                vm.answer = 'Ошибка! Не могу связаться с API. ' + error
            })
        }
    }
})