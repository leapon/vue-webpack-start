import Vue from 'vue'
import store from './vuex/store'
import SimpleLabel from './components/SimpleLabel.vue'
import SimpleLabel2 from './components/SimpleLabel2.vue'
import Barplot from './components/Barplot.vue'

Vue.directive('my-directive', function (newValue, oldValue) {
  console.log('>>> my-directive update:', newValue, oldValue);
})

new Vue({
  el: '#plot1',
  store,
  data: {
  },
  components: {
    SimpleLabel,
    SimpleLabel2,
    Barplot
  }
})

// directive for applying select2 
Vue.directive('select', {
  twoWay: true,
  priority: 1000,

  params: ['options'],
    
  bind: function () {
    var self = this
    $(this.el)
      .select2({
        data: this.params.options
      })
      .on('change', function () {
        self.set(this.value)
      })
  },
  update: function (value) {
    $(this.el).val(value).trigger('change')
  },
  unbind: function () {
    $(this.el).off().select2('destroy')
  }
})

var vm = new Vue({
  el: '#el',
  data: {
    selected: 1,
    options: [
      { id: 1, text: 'hello' },
      { id: 2, text: 'what' }
    ]
  }
})


