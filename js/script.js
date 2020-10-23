import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import card from './modules/card';
import forms from './modules/forms';
import timer from './modules/timer';
import slider from './modules/slider';
import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    calc();
    card();
    forms(modalTimerId);
    timer();
    slider();

});