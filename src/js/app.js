/*jshint esversion: 6 */

import 'jquery';
import 'popper.js';
import 'bootstrap';
import '../scss/app.scss';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';

$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#div1").offset().top
        }, 2000);
    });
});
