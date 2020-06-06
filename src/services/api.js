import Global from "./global";
import Local from "./local";

export default {
  install(Vue) {
    Vue.prototype.$global = Global;
    Vue.prototype.$local = Local;
  }
};