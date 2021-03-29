import Vue from 'vue'
import App from './App.vue'

Vue.filter('getLength', function(value) {
  let something = value + " (" + value.length + ")"
  return something;
});

new Vue({
  el: '#app',
  render: h => h(App)
})
