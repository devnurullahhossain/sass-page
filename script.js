let animate = gsap.timeline();

animate.from("#animaImg", {
  duration: 3,
  x: 50,
  delay: 0.5,
  opacity: 0,
  duration: 1,
  y: 0,
  stagger: 0.2,
});

gsap.from("#main-navigation__header img", {
  y: -100,
  duration: 1,
  opacity: 0,
  delay: 0.5,
});
animate.from(".hero__left h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
});
// section one

animate.from(".first-sec__left img", {
  x: -200,
  opacity: 0,
  stagger: 0.4,
  duration: 1,
});
animate.from(".first-sec__right h2", {
  y: 100,
  opacity: 0,
  stagger: 0.4,
  duration: 1,
});
// section two
animate.from(".second-sec__left h2", {
  y: 100,
  opacity: 0,
  stagger: 0.5,
  duration: 1,
});
animate.from(".second-sec__right img", {
  x: 200,
  opacity: 0,
  stagger: 0.5,
  duration: 1,
});
// download
animate.from(".download__left h2", {
  y: 100,
  opacity: 0,
  stagger: 0.6,
  duration: 1,
});
animate.from(".download__right img", {
  y: 100,
  opacity: 0,
  stagger: 0.6,
  duration: 1,
});