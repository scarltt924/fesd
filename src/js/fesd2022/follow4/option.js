export default {
  SETTINGS: {
    // 移動速度
    speed: 1,
    // 指定互動目標元素
    target: 'body',
    // 固定模式
    fixed: false,
    // 是否置中游標
    center: false,
    // 是否反方向飄移 - 反向 -1 正向 1
    reverse: -1,
  },
  // function
  on: {
    enterModel: null,
    leaveModel: null,
  },
  EVENTS: {
    init: null,
    destroy: null,
    update: null,
    enterModel: null,
    leaveModel: null,
  },
  TEMPLATE() {
    return ``;
  },
};
