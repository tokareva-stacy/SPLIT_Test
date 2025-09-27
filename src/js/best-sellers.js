import Swiper from 'swiper';
import 'swiper/css';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/pagination';


const swiper = new Swiper('.bestsellers-swiper', {
  modules: [Scrollbar],
  slidesPerView: 1.2, 
  spaceBetween: 12,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  }
});
