import '@babel/polyfill';
import '../js/paralax'
import Vue from 'vue/dist/vue.esm.js';
import _ from 'lodash';
import Glide from '@glidejs/glide';

document.addEventListener('DOMContentLoaded', () => {
    //  
    // local component icon User is local for testimonial card
    //
    const icon = Vue.extend({
        props: ["testimonial_icon"],
        template: `<img class="test_icon" :src="testimonial_icon">`
    })

    const separateReview = Vue.extend({
        props: ["review"],
        components: {
            "icon": icon
        },
        template: `<li class="section">
                        <icon :testimonial_icon="review.icon"></icon>
                        <p class="testimonial__title">{{ review.name }}</p>
                        <p class="testimonial__description">{{review.description}}</p>
		</li>`
    })

    var carousel = new Vue({
        el: "#slide__glide",
        components: {
            "item": separateReview,
        },
        data: {
            slides: [{
                    id: 0,
                    name: "Vivianna Kiser",
                    icon: "https://i.pinimg.com/236x/3f/de/4a/3fde4acb0a9cb680d16d62ca51e5ec36--urban-photography-milk.jpg",
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero consectetur ea blanditiis quisquam distinctio quia similique earum nisi adipisci molestiae aliquid excepturi voluptate laboriosam delectus, sunt iure corporis nobis expedita! Sapiente, mollitia? Sunt, quas at id molestiae dolorum modi sed quibusdam quasi possimus vitae numquam distinctio et alias quod error. "
                },
                {
                    id: 1,
                    name: "Vivianna Kiser",
                    icon: "https://lh3.googleusercontent.com/proxy/F2heoOXcO5Lb0k9tnr5pX6ZM8_adcJm2amOYYfu3c1rOH-9-tbSTioshhqej_a-_SgOFMFBe-TEtXEEP89deTq7dB6MnIbArc_l37bpCUlga6TtmLhiefWUN1J_oauwkj9AONomocemQfxANeVlxnLh23xZdhp_Ul-x69YhpXtV1G5-LOjWqtX7XoVZ-9iEU0RQ",
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero consectetur ea blanditiis quisquam distinctio quia similique earum nisi adipisci molestiae aliquid excepturi voluptate laboriosam delectus, sunt iure corporis nobis expedita! Sapiente, mollitia? Sunt, quas at id molestiae dolorum modi sed quibusdam quasi possimus vitae numquam distinctio et alias quod error. "
                },
                {
                    id: 2,
                    name: "Vivianna Kiser",
                    icon: "https://i.pinimg.com/736x/d2/84/1b/d2841bee07610a7559bb4c5eb6d41c38.jpg",
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero consectetur ea blanditiis quisquam distinctio quia similique earum nisi adipisci molestiae aliquid excepturi voluptate laboriosam delectus, sunt iure corporis nobis expedita! Sapiente, mollitia? Sunt, quas at id molestiae dolorum modi sed quibusdam quasi possimus vitae numquam distinctio et alias quod error. "
                },
                {
                    id: 3,
                    name: "Vivianna Kiser",
                    icon: "https://i.pinimg.com/236x/3f/de/4a/3fde4acb0a9cb680d16d62ca51e5ec36--urban-photography-milk.jpg",
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero consectetur ea blanditiis quisquam distinctio quia similique earum nisi adipisci molestiae aliquid excepturi voluptate laboriosam delectus, sunt iure corporis nobis expedita! Sapiente, mollitia? Sunt, quas at id molestiae dolorum modi sed quibusdam quasi possimus vitae numquam distinctio et alias quod error. "
                },
                {
                    id: 4,
                    name: "Vivianna Kiser",
                    icon: "https://i.pinimg.com/236x/3f/de/4a/3fde4acb0a9cb680d16d62ca51e5ec36--urban-photography-milk.jpg",
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero consectetur ea blanditiis quisquam distinctio quia similique earum nisi adipisci molestiae aliquid excepturi voluptate laboriosam delectus, sunt iure corporis nobis expedita! Sapiente, mollitia? Sunt, quas at id molestiae dolorum modi sed quibusdam quasi possimus vitae numquam distinctio et alias quod error. "
                }
            ]
        },
        mounted() {
            new Glide('#slide__glide', {
                type: 'carousel',
                // startAt: 0,
                // perView: 1,
                peek: 400,
            }).mount();
        }
    })

});