new Vue({
  el: '#app',
  /*data(){
    return{
      active: false
    };
  },*/
  mounted() {
    this.waypoint();       
  },
  /*method: {
    waypoint(){
      this.active = true;

      this.waypoint.destroy();
    },
    offset: '50%',
  },*/
  methods: {
    waypoint () {
      let elem = this.$el.querySelectorAll('.animated');

      elem.forEach(x => {
        this.waypoint = new window.Waypoint({
          element: x,
          handler: () => {
            x.classList.add('fadeInUp');
          },
          offset: '50%',
        });
      });
    },
  },
  beforeDestroy: function () {
    this.waypoint.destroy();
  }
});





/*waypoint({
  handler(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      
      this.active = !this.active;

      this.waypoint.destroy();
    }
  },
  offset: '50%',
  v-bind:class='{fadeInUp: active}'
});*/

