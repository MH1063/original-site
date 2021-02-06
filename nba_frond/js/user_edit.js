/*user get*/
/*user put*/
new Vue({
  el: '#app',
  data() {
    return {
      user: {},
      image1_url: '',
      image2_url: '',
      image3_url: '',
      errored: false
    };
  },
  mounted() {
    if(sessionStorage.getItem("userId")){
      var id = sessionStorage.getItem('userId');
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${id}`
        )
        .then(response => {
          console.log(response.data.user);
          this.user = response.data.user;
          console.log(this.user);
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
      console.log(this.user);
      console.log(this.user.name);
      var username = this.user.name;
      console.log(username);
      axios
        .put(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${id}`, {
          user: { name: this.user.name,
            self: this.user.self,
            like_player: this.user.like_player,
            like_team: this.user.like_team,
          }
        })
        .then(response => {
          console.log(response);
          this.editImage();
        })
        .catch(error => {
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
        this.user.icon_img = icon_image;
        this.previewImage1(icon_image);
        
      }else if('Like_team_img' === e.target.name){
        let like_team_image = e.target.files[0];
        this.user.like_team_img = like_team_image;
        this.previewImage2(like_team_image);
        
      }else if('Like_player_img' === e.target.name){
        let like_player_image = e.target.files[0];
        this.user.like_player_img = like_player_image;
        this.previewImage3(like_player_image);
      }
    },
    previewImage1: function(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target);
        this.image1_url = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    previewImage2: function(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target);
        this.image2_url = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    previewImage3: function(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target);
        this.image3_url = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    editImage: function(){
      var id = sessionStorage.getItem('userId');
      let formData = new FormData();
      formData.append('icon_img', this.user.icon_img);
      formData.append('like_team_img', this.user.like_team_img);
      formData.append('like_player_img', this.user.like_player_img);
      console.log(formData);
      axios
        .put(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${id}/image_update`,
          formData
          ,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(response => {
          console.log(response);
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/user.html';
        }).catch(error => {
          alert('画像の編集できませんでした。');
          console.log(error);
        });
    }
  },
});


