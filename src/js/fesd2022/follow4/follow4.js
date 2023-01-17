import OPTIONS from './option'
import SHARED from './../shared/shared'
export default class Follow4 {
  constructor(el, options) {
    const { SETTINGS, EVENTS } = OPTIONS

    this.el = document.querySelector(el)
    this.options = options
    this.__events__ = Object.assign({}, EVENTS)

    if (this.options.on) {
      for (const [k, v] of Object.entries(this.options.on)) {
        this.__events__[k] = [v]
      }
    }

    this.#create()
  }

  #create(el) {
    const f4 = this;
    // console.log(f4.el, 'Follow4');
    // console.log(f4.options, 'Follow4');

    f4.emit('init')

    const words = f4.el
    const div = document.querySelector('.pupil')
    // console.log(words,'123');
    // console.log(f4.options.speed);
    // console.log(f4.options.fixed);
    document.querySelector(f4.options.target).addEventListener('mousemove', function (e) {
      // console.log(f4);

      const x = e.clientX * 100 * f4.options.speed / window.innerWidth;
      const y = e.clientY * 100 * f4.options.speed / window.innerHeight;
    
      const offset = {
        height: div.offsetHeight / 2,
        width: div.offsetWidth / 2
      }

      console.log(offset.height,offset.width);

      if (f4.options.fixed) {
        // console.log('option fixed');
        words.style.transform = `translate(${-x}%,${-y}%)`;
      }
      else {
        words.style.top = `${e.pageY - 33}px`;
        words.style.left = `${e.pageX - 33}px`;
        // words.style.top = `${e.pageY - (f4.options.centerMouse ? offset.height : 0)}px`;
        // words.style.left = `${e.pageX - offset.width}px`;
        console.log(words.style.top,words.style.top,'words');
        console.log(e.pageY,e.pageX,'page');
      }
    });
  };
};
Object.assign(Follow4.prototype, SHARED)