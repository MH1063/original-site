/*user get*/
/*user put*/
new Vue({
  el: '#app',
  data() {
    return {
      user: {},
      errored: false
    };
  },
  mounted() {
    if(sessionStorage.getItem("userId")){
      var id = sessionStorage.getItem('userId');
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${id}`
        )
        .then(response => (this.user = response.data.user)
        )
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
    }else{
      window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage.html';
    }
  },
  methods: {
    editUser: function(){
      var id = sessionStorage.getItem('userId');
      axios
        .put(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${id}`, {
          name: this.Name,
          email: this.Email,
          password: this.Password,
          self: this.Self,
          like_player: this.Like_pleyer,
          like_team: this.Like_team,
          like_player_img: this.Like_pleyer_img,
          like_team_img: this.Like_team_img,
          icon_img: this.Icon_img
        }
        )
        .then(function (response) {
          console.log(response);
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/user.html';
        })
        .catch(function (error) {
          alert('編集できませんでした。');
          console.log(error);
          return false;
        });
    }
  }
});