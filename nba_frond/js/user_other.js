/*relationship POST*/

/*relationship DELETE*/


new Vue({
  el: '#app',
  data() {
    return {
      user: {},
      activefollow: '',
      errored: false
    };
  },
  mounted() {
    if(sessionStorage.getItem("userId")){
      
      var id = sessionStorage.getItem('userId');
      var query = location.search;
      var value = query.split('=');
      console.log(decodeURIComponent(value[1]));
      
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${value[1]}`)
        .then(function (response){
          this.user = response.data.user;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
        
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${id}`)
        .then(function (response){
          var arr = response.data.followings.user.id;/*jsonのネストが的確にできているか分からないから、起動する時に確認する*/
          if( arr.includes(this.user.id)){
            this.activefollow = 'true';
          }else{
            this.activefollow = 'false';
          }
        });
        
    }else{
      window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage.html';
    }
  },
  method: {
    follow: function(){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/relationship/create', {
          follow_id: this.user.id 
        })
        .then(function (response) {
          console.log(response);
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/user_other.html';
        })
        .catch(function (error) {
          alert('フォローできませんでした。');
          console.log(error);
          return false;
        });
    },
    unfollow: function(){
      axios
        .delete('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/relationship/destroy', {
          /*follow_id: this.user.id ここにteamページからアクセスしたuserの情報が乗るようにする。また、deleteの場合は、ワンチャン、paramsを使った方法にしないと出来ないかもしれない。*/
          data: {follow_id: this.user.id}
        })
        .then(function (response) {
          console.log(response);
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/user_other.html';
        })
        .catch(function (error) {
          alert('アンフォローできませんでした');
          console.log(error);
          return false;
        });
    }
  },
  
});

