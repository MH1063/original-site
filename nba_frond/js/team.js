/*teamGET */

/*chat get*/

/*chat post*/

/*chat delete*/

/*favoirtes post*/

/*favoirtes delete*/

/*user get*/
new Vue({
  el: '#app',
  data() {
    return {
      team: {},
      users: [],
      chats: [],
      Content: '',
      Team_id: '',
      activechat: '',
      mychat: false,
      errored: false
    };
  },
  mounted() {
    if(sessionStorage.getItem("userId")){
      
      var id = sessionStorage.getItem('userId');
      var query = location.search;
      var value = query.split('=');
      console.log(decodeURIComponent(value[1]));
      
      /*googleapiは、var valueによって条件分岐して、チームごとのマップを表示する。
      　rakutennapiも同じように条件分岐して、fecth関数を利用して出力する。*/
      
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/teams/${value[1]}`)
        .then(response => (this.team = response.data))
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
      axios
        .get('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users')
        .then(response => (this.users = response.data.user))
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
      axios
        .get('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/index')
        .then(response => (this.chats = response.data))
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
        
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${id}`)
        .then(function (response){
          var arr = response.data.favoritings.chat.id;/*jsonのネストが的確にできているか分からないから、起動する時に確認する*/
          if( arr.includes(this.chats.id)){/*jsonのネストが的確にできているか分からないから、起動する時に確認する*/
            this.activechat = 'true';
          }else{
            this.activechat = 'false';
          }
          var user = response.data.user;
          
        });
      
    }else{
      window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage.html';
    }
  },
  method: {
    chatcreate: function(){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/create', {
          content: this.content,
          team_id: this.team.id /*ここにそれぞれのteam_idの値が入るようにする。*/
        })
        .then(function (response) {
          this.chats.push(response.data);
          console.log(response);
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/team.html';
        })
        .catch(function (error) {
          alert('投稿できませんでした。');
          console.log(error);
          return false;
        });
    },
    chatdestroy: function(chat){/*ここにhtml側から削除するchatidを所得する*/
      axios
        .delete(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/destroy/${chat.id}`
        )
        .then(function (response) {
          console.log(response);
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/team.html';
        })
        .catch(function (error) {
          alert('削除できませんでした。');
          console.log(error);
          return false;
        });
    },
    favorite: function(chat){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/create', {
          chat_id: chat.id /*お気に入りにするchatは、html側から繰り返しの配列からのchatを所得して、そのchatのidを使う。*/
        })
        .then(function (response) {
          console.log(response);
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/team.html';
        })
        .catch(function (error) {
          alert('お気にりにできませんでした。');
          console.log(error);
          return false;
        });
    },
    unfavorite: function(chat){
      axios
        .delete('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/destroy', {
          data: {chat_id: chat.id}/*また、deleteの場合は、ワンチャン、paramsを使った方法にしないと出来ないかもしれない*/
        })
        .then(function (response) {
          console.log(response);
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/team.html';
        })
        .catch(function (error) {
          alert('お気に入りを解除できませんでした。');
          console.log(error);
          return false;
        });
    }
  }
});

