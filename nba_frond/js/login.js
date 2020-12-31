new Vue({
  el: '#app',
  data: {
    Email: '',
    Password: ''
  },
  methods: {
    login: function(){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/sessions/create', {
          email: this.Email,
          password: this.Password,
        })
        .then(function (response) {
          console.log(response);
          sessionStorage.setItem('uerId', 'respone.data.user.id');
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage_afterlogin.html';
        })
        .catch(function (error) {
          alert('ログイン出来ませんでした。');
          console.log(error);
          return false;
        });
    }
  }
});
  