import '@babel/polyfill';
import '../js/paralax'
import Vue from 'vue/dist/vue.esm.js';
import axios from 'axios';
import _ from 'lodash';
// import Siema from 'siema';
import popupS from 'popups';
import Datepicker from 'vuejs-datepicker';
import moment from 'moment'



document.addEventListener('DOMContentLoaded', () => {

    var vm = new Vue({
        el: "#app",
        components: {
            Datepicker
        },
        data: {
            radioColor: [{
                    id: 0,
                    color: "rgb(87, 3, 126)",
                },
                {
                    id: 1,
                    color: "rgb(126, 3, 89)",
                },
                {
                    id: 2,
                    color: "rgb(196, 51, 7)",
                },
                {
                    id: 3,
                    color: "rgb(69, 54, 199)",
                }
            ],

            radioBtn: null,
            show: false,
            // credNum: '4532015112830366',
            credNum: '',
            securityCode: '',
            cardName: '',
        },
        methods: {
            name: function creditCardName(name) {
                if (this.cardName === '') {
                    return true
                } else {
                    return false
                }
            },
            customFormatter(date) {
                return moment(date).format('MMMM  YYYY');
            },
            security: function securCode(code) {
                if (this.securityCode.length != 3) {
                    return false
                } else return true
            },
            pay: function valid_credit_card(value) {
                if ((/[^0-9-\s]+/.test(value))) {
                    // console.log(this.securityCode.length);
                    console.log('false');
                    return false;
                } else {
                    let nCheck = 0,
                        bEven = false;
                    value = value.replace(/\D/g, "");

                    for (var n = value.length - 1; n >= 0; n--) {
                        var cDigit = value.charAt(n),
                            nDigit = parseInt(cDigit, 10);
                        if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
                        nCheck += nDigit;
                        bEven = !bEven;
                    }
                    return (nCheck % 10) == 0;
                }
            },
            all: function al() {
                if (this.pay(this.credNum) && (this.security(this.securityCode))) {
                    popupS.window({
                        mode: 'alert',
                        content: 'Sucsses!!!',

                    });

                } else {
                    popupS.window({
                        mode: 'alert',
                        content: 'ERROR!!!',

                    });
                }
            }
        },
    })
})