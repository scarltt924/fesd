import OPTIONS from './option'
import SHARED from './../shared/shared'

function createFollow(e,f4) {
  const elements = f4.el;
  const div = document.querySelector('.pupil');

  const x = e.clientX * 100 * f4.options.reverse / window.innerWidth;
  const y = e.clientY * 100 * f4.options.reverse / window.innerHeight;
  // e.style.position = "absolute";
  console.log(x,y);
  const offset = {
    height: div.offsetHeight / 2,
    width: div.offsetWidth / 2,
  }
  // console.log(offset.height,offset.width);

  // 固定模式
  if (f4.options.fixed) {
    // console.log('option fixed');
    const x = e.pageX * 100 * f4.options.reverse * f4.options.speed / window.innerWidth;
    const y = e.pageY * 100 * f4.options.reverse * f4.options.speed / window.innerHeight;
    if(x < 0) {
      elements.style.transform = `translate(calc(${x}%),calc(${-y}% - 100%))`;
    } else {
      elements.style.transform = `translate(calc(${x}% - 100%),calc(${-y}%))`;
    }
  }

  else {
    // 置中
    if (f4.options.center) {
      elements.style.top = `${e.pageY - elements.offsetHeight / 2}px`;
      elements.style.left = `${e.pageX - elements.offsetWidth / 2}px`;
    }
    elements.style.top = `${e.pageY}px`;
    elements.style.left = `${e.pageX}px`;
    // elements.style.top = `${e.pageY - (f4.options.centerMouse ? offset.height : 0)}px`;
    // elements.style.left = `${e.pageX - offset.width}px`;
    // console.log(elements.style.top,elements.style.top,'elements');
    // console.log(e.pageY,e.pageX,'page');
  }
}
export default class Follow4 {
  constructor(el, options) {
    const { SETTINGS, EVENTS } = OPTIONS;

    this.el = document.querySelector(el);
    this.options = options;
    this.__events__ = Object.assign({}, EVENTS);
    
    if (this.options.on) {
      for (const [k, v] of Object.entries(this.options.on)) {
        this.__events__[k] = [v];
      }
    }
    this.#create();
  }
  #create() {
    this.s = {};
    const options = {
      speed: OPTIONS.SETTINGS.speed,
      target: OPTIONS.SETTINGS.target,
      fixed: OPTIONS.SETTINGS.fixed,
      center: OPTIONS.SETTINGS.center,
      reverse: OPTIONS.SETTINGS.reverse,
    }
    this.#event();
  }
  #event(el) {
    const f4 = this;
    
    f4.emit('init');

    document.querySelector(f4.options.target).addEventListener('mousemove', function (e) {
      createFollow(e,f4)
    });
  };
};

Object.assign(Follow4.prototype, SHARED)