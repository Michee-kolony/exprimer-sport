import { AfterViewInit, Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Garde ce fichier vide ou supprime-le
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new Splide('#talents-carousel', {
      type: 'loop',
      perPage: 4,
      perMove: 1,
      gap: '1.5rem',
      arrows: true,
      pagination: true,
      autoplay: true,
      interval: 4000,
      pauseOnHover: true,
      breakpoints: {
        1024: {
          perPage: 3,
          gap: '1.25rem',
        },
        768: {
          perPage: 2,
          gap: '1rem',
        },
        640: {
          perPage: 1,
          gap: '0.75rem',
        },
      },
      classes: {
        arrows: 'splide__arrows !absolute !top-1/2 !-translate-y-1/2 !w-full !flex !justify-between !pointer-events-none !z-10',
        arrow: 'splide__arrow !bg-white !rounded-full !w-10 !h-10 !shadow-md !pointer-events-auto hover:!bg-primary hover:!text-white transition-all duration-300',
        prev: 'splide__arrow--prev !-left-4 md:!-left-5',
        next: 'splide__arrow--next !-right-4 md:!-right-5',
        pagination: 'splide__pagination !bottom-[-2rem]',
        page: 'splide__pagination__page !bg-gray-300 !w-2 !h-2 !mx-1 !transition-all !duration-300 !opacity-100 [&.is-active]:!bg-primary [&.is-active]:!w-6 [&.is-active]:!rounded-full',
      },
    }).mount();
  }
}