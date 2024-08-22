// First page
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: '.first-page',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false,
  },
});

// Second page
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    start: '-40%',
    end: '40%',
    scrub: true,
  },
});

tlH.fromTo(
  '.highlight',
  { color: 'rgba(255,255,255,0.4)' },
  { color: 'rgba(255,255,255,1)', stagger: 1 }
);

const tlHExit = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    start: '-20%',
    end: '60%',
    scrub: true,
  },
});

tlHExit.to('.highlight', { color: 'rgba(255,255,255,0.4)', stagger: 1 });

// Third page
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '-25%',
    end: '30%',
    scrub: true,
  },
});

tlSplit.fromTo('.large-phone', { x: '40%' }, { x: '20%' });
tlSplit.fromTo('.small-phone', { x: '-40%' }, { x: '-20%' }, '<');
tlSplit.fromTo(
  '.product-text-left',
  { x: 0, opacity: 0 },
  { x: -50, opacity: 1 },
  '<'
);
tlSplit.fromTo(
  '.product-text-right',
  { x: 0, opacity: 0 },
  { x: 50, opacity: 1 },
  '<'
);

const tlSplitPin = gsap.timeline({
  scrollTrigger: { trigger: '.third-page', pin: true, pinSpacing: false },
});

// Carousel
const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery-container');

let currentSwatch = 'blue';
let topIndex = 2;

swatches.forEach((swatch, idx) => {
  const slideCoord = slides[idx].getBoundingClientRect().left;

  swatch.addEventListener('click', () => {
    const swatchColor = swatch.getAttribute('swatch');
    if (swatchColor === currentSwatch) return;

    gsap.set(`.${swatchColor}`, { zIndex: topIndex });
    currentSwatch = swatchColor;

    gsap.fromTo(`.${swatchColor}`, { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.to(slides, { x: -slideCoord, duration: 1, ease: 'Power2.out' });
    topIndex++;
  });
});

// Fifth page

const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: '.fifth-page',
    start: '0%',
    end: '150%',
    scrub: true,
    pin: true,
  },
});

tlVideo.fromTo(
  '.product-video',
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);
tlVideo.fromTo(
  '.product-info-container h3',
  { opacity: 0 },
  { opacity: 1, stagger: 0.25, duration: 0.5 },
  '<'
);

// Six page
const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.six-page',
    start: '-25%',
    end: '50%',
    scrub: true,
  },
});

tlParallax.fromTo('.photo-description', { y: 0 }, { y: -80 });
tlParallax.fromTo('.portrait-container', { y: 0 }, { y: -80 }, '<');
tlParallax.fromTo('.phone-video', { y: 0 }, { y: -200 }, '<');
