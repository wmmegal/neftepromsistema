import 'virtual:svg-icons-register';
import '../css/tailwind.css';
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.data('app', () => ({
    rule: true,
    showMenu: true,
    matchMedia() {
        return window.matchMedia('(min-width: 1200px)').matches;
    },
    init() {
        this.showMenu = this.matchMedia();
    },
}));

Alpine.start();

const splideCta = document.querySelector('.splide-cta');

if (splideCta) {
    new Splide('.splide-cta', {
        type: 'loop',
        arrows: false,
        pagination: true,
        autoplay: true,
        interval: 5000,
        breakpoints: {
            640: {
                height: 220,
            },
        },
    }).mount();
}
