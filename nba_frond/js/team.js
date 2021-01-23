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
      user: {},
      users: [],
      chats: [],
      Content: '',
      Team_id: '',
      mychat: false,
      errored: false
    };
  },
  components: {
    'favorite-botton': favoriteBotton,
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
          this.user = response.data.user;
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
        })
        .catch(function (error) {
          alert('投稿できませんでした。');
          console.log(error);
          return false;
        });
    },
    getchats: function(){
      axios
        .get('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/index')
        .then(response => (this.chats = response.data))
        .catch(error => {
          console.log(error);
        });
    },
    chatdestroy: function(value){/*ここにhtml側から削除するchatidを所得する*/
      axios
        .delete(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/destroy/${value}`
        )
        .then(function (response) {
          console.log(response);
          this.getchats();
        })
        .catch(function (error) {
          alert('削除できませんでした。');
          console.log(error);
          return false;
        });
    },
    favorite: function(value){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/create', {
          chat_id: value /*お気に入りにするchatは、html側から繰り返しの配列からのchatを所得して、そのchatのidを使う。*/
        })
        .then(function (response) {
          console.log(response);
          this.getchats();
        })
        .catch(function (error) {
          alert('お気にりにできませんでした。');
          console.log(error);
          return false;
        });
    },
    unfavorite: function(value){
      axios
        .delete('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/destroy', {
          data: {chat_id: value}/*また、deleteの場合は、ワンチャン、paramsを使った方法にしないと出来ないかもしれない*/
        })
        .then(function (response) {
          console.log(response);
          this.getchats();
        })
        .catch(function (error) {
          alert('お気に入りを解除できませんでした。');
          console.log(error);
          return false;
        });
    },
    userget: function(number){
      console.log(number);
      location.href = '/user_other.html?number=' +  number;
    }
  }
});


const favoriteBotton = {
  props:{
    user_id:{
      type: Number,
      required: true,
    },
    chat:{
      type: Object,
      required: true,
    },
  },
  computed: {
    favoritecompare(){
      const left = this.user_id;
      const right = this.chat.favoriter.map(function(user){
        return user.id;
      });
      
      return this.chatsort(left,right);
    }
  },
  method:{
    chatsort: function(user_id,chatuser_id){
      if(user_id.includes(chatuser_id)){
        return true;
      }else{
        return false;
      }
    },
  },
  template:`
    <div class="icon-mark" v-if="favoritecompare">
        <a href="#" v-on:click="favorite(chat.id)"><i class="far fa-star icon"></i></a>
    </div>
    <div class="icon-mark" v-else>
        <a href="#" v-on:click="unfavorite(chat.id)"><i class="fas fa-star"></i></a>
    </div>
    `
  
};