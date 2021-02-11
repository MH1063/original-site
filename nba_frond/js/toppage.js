new Vue({
  el: '#app',
  mounted() {
    this.waypoint();       
  },
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






