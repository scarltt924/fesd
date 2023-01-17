import Follow4 from '../fesd2022/follow4/follow4'

function move() {
  window.addEventListener("mousemove", (e) => {
    const div = document.querySelector('.pop')
    div.style.top = `${e.pageY - div.offsetHeight / 2}px`;
    div.style.left = `${e.pageX - div.offsetWidth / 2}px`;
  })
}

$(() => {

  move()

  new Follow4('.word.one', {
    speed: 1,
    target: 'body',
    fixed: true,
    on: {
      init() {
        console.log('init')
      }
    }
  })
  new Follow4('.pupil', {
    speed: 1,
    target: 'body',
    fixed: false,
    on: {
      init() {
        console.log('init')
      }
    }
  })
});