/*session delete*/

/*user delete*/
new Vue({
  el: '#app',
  data() {
    return {
      teams: [],
      errored: false
    };
  },
  mounted() {
    if(sessionStorage.getItem("userId")){
      axios
        .get('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/teams/index')
        .then(response => (this.teams = response.data))
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
    }else{
      window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage.html';
    }
  },
  methods: {
    destroyUser: function(){
      var id = sessionStorage.getItem('userId');
      axios
        .delete(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${id}`
        )
        .then(function (response) {
          console.log(response);
          sessionStorage.removeItem('userId');
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage.html';
        })
        .catch(function (error) {
          alert('退会できませんでした。');
          console.log(error);
          return false;
        });
    },
    logout: function(){
      var id = sessionStorage.getItem('userId');
      axios
        .delete(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/sessions/${id}`
        )
        .then(function (response) {
          console.log(response);
          sessionStorage.removeItem('userId');
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage.html';
        })
        .catch(function (error) {
          alert('ログアウトできませんでした。');
          console.log(error);
          return false;
        });
    },
    teamget: function(number){
      console.log(number);
      window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/team.html?number=' +  number;
    }
  }
});


