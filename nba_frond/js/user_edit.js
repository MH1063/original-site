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
        .then(function (response) {
          this.user = response.data.user;
        })
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
          name: this.user.name,
          self: this.user.self,
          like_player: this.user.like_pleyer,
          like_team: this.user.like_team,
          like_player_img: this.user.like_pleyer_img,
          like_team_img: this.user.like_team_img,
          icon_img: this.user.icon_img
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
    },
    onImageUploaded: function(e) {
      // event(=e)から画像データを取得する
      if ('Icon_img' === e.target.name){
        let icon_image = e.target.files[0];
        console.log(icon_image);
        this.createImage1(icon_image);
        
      }else if('Like_team_img' === e.target.name){
        let like_team_image = e.target.files[0];
        this.createImage2(like_team_image);
        
      }else{
        let like_player_image = e.target.files[0];
        this.crateImage3(like_player_image);
      }
    },
    createImage1: function(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        this.user.icon_img = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    createImage2: function(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        this.user.icon_img = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    createImage3: function(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        this.user.icon_img = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
});

