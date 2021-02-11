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
      chats: [],
      Content: '',
      Team_id: '',
      team_status: '',
      teamImage: [],
      imageArena: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
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
      
      this.team_status = value[1];
      
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/teams/${value[1]}`)
        .then(response => {
          console.log(response.data);
          this.team = response.data;
          this.imageArena = response.data.arena_img.url;
          this.image1 = response.data.player1_img.url;
          this.image2 = response.data.player2_img.url;
          this.image3 = response.data.player3_img.url;
          this.image4 = response.data.player4_img.url;
          this.image5 = response.data.player5_img.url;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/index/${value[1]}`)
        .then(response => {
          console.log(response.data);
          this.chats = response.data.chats;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
        
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users/${id}`)
        .then(response => {
          console.log(response.data.user);
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
    getchats: function(){
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/index/${this.team_status}`)
        .then(response => {
          this.chats = response.data.chats})
        .catch(error => {
          console.log(error);
        });
    },
    chatcreate: function(){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/create', {
          content: this.Content,
          team_id: this.team.id /*ここにそれぞれのteam_idの値が入るようにする。*/
        })
        .then(response => {
          this.Content = '';
          this.getchats();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          alert('投稿できませんでした。');
          return false;
        });
    },
    chatdestroy: function(value){/*ここにhtml側から削除するchatidを所得する*/
      axios
        .delete(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/destroy/${value}`
        )
        .then(response => {
          console.log(response);
          this.getchats();
        })
        .catch(error => {
          alert('削除できませんでした。');
          console.log(error);
          return false;
        });
    },
    userget: function(number){
      console.log(number);
      window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/user_other.html?number=' +  number;
    },
  },
});

/*
var favoriteButton = {
  name: 'PageA', 
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
      var user_id = this.user_id;
      var arr = this.chat.favoiriter.map(function(user){
        return user.id;
      });
      return this.chatsort(user_id, arr);
    }
  },
  method:{
    chatsort: function(user_id, arr){
      console.log(user_id);
      console.log(arr);
      if( arr.includes(user_id)){
        return false;
      }else{
        return true;
      }
    },
    favorite: function(value){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/create', {
          chat_id: value お気に入りにするchatは、html側から繰り返しの配列からのchatを所得して、そのchatのidを使う。
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          alert('お気にりにできませんでした。');
          console.log(error);
          return false;
        });
    },
    unfavorite: function(value){
      axios
        .delete('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/destroy', {
          data: {chat_id: value} また、deleteの場合は、ワンチャン、paramsを使った方法にしないと出来ないかもしれない
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          alert('お気に入りを解除できませんでした。');
          console.log(error);
          return false;
        });
    },
  },
  template:`
    <div class="icon-mark" v-if="favoritecompare">
        <a href="#" v-on:click="favorite(chat.id)"><i class="far fa-star icon"></i></a>
    </div>
    <div class="icon-mark" v-else>
        <a href="#" v-on:click="unfavorite(chat.id)"><i class="fas fa-star"></i></a>
    </div>
    `,
};*/



Vue.component('favorite-button', {
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
  data() {
    return{
      userId: this.user_id,
      Chat: this.chat,
    };
  },
  computed: {
    favoritecompare(){
      console.log(this.Chat);
      const userId = this.userId;
      const arr = this.Chat.favoiriter.map(function(user){
        return user.id;
      });
      return this.chatsort(userId, arr);
    }
  },
  methods:{
    chatsort: function(userId, arr){
      console.log(userId);
      console.log(arr);
      if( arr.includes(userId)){
        return false;
      }else{
        return true;
      }
    },
    favorite: function(value){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/create', {
          chat_id: value /*お気に入りにするchatは、html側から繰り返しの配列からのchatを所得して、そのchatのidを使う。*/
        })
        .then(response => {
          console.log(response);
          this.getchat();
        })
        .catch(error => {
          alert('お気にりにできませんでした。');
          console.log(error);
          return false;
        });
    },
    unfavorite: function(value){
      axios
        .delete('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/destroy', {
          data: {chat_id: value} /*また、deleteの場合は、ワンチャン、paramsを使った方法にしないと出来ないかもしれない*/
        })
        .then(response => {
          console.log(response);
          this.getchat();
        })
        .catch(error => {
          alert('お気に入りを解除できませんでした。');
          console.log(error);
          return false;
        });
    },
    getchat: function(){
      var id = this.chat.id;
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/${id}`)
        .then(response => {
          console.log(response.data);
          this.Chat = response.data;
          /*ここにコンポーネントだけリロードできるようにする。*/
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  template:/*`
    <div class="icon-mark" v-if="favoritecompare">
        <a href="#" v-on:click="favorite(chat.id)"><i class="far fa-star icon"></i></a>
    </div>
    <div class="icon-mark" v-else>
        <a href="#" v-on:click="unfavorite(chat.id)"><i class="fas fa-star"></i></a>
    </div>
    `,*/
    `
    <div v-if="userId !== Chat.user_id">
        <div class="icon-mark" v-if="favoritecompare">
            <button type = "botton" class="btn btn-primary btn-sm" v-on:click="favorite(chat.id)">favorite</button>
        </div>
        <div class="icon-mark" v-else>
            <button type = "botton" class="btn btn-danger btn-sm" v-on:click="unfavorite(chat.id)">unfavorite</button>
        </div>
    </div>
    `,
  /*`
    <div class="icon-mark" v-if="favoritecompare">
        <span v-on:click="favorite(chat.id)"><i class="far fa-star icon"></i></span>
    </div>
    <div class="icon-mark" v-else>
        <span v-on:click="unfavorite(chat.id)"><i class="fas fa-star"></i></span>
    </div>
    `,*/
});


/*Vue.component('favorite-button', {
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
  data() {
    return{
      userId: this.user_id,
      Chat: this.chat,
      favoritecompare: '',
    };
  },
  mounted(){
    console.log(this.Chat);
    const userId = this.userId;
    const arr = this.Chat.favoiriter.map(function(user){
      return user.id;
    });
    return this.chatsort(userId, arr);
  },
  methods:{
    chatsort: function(userId, arr){
      console.log(userId);
      console.log(arr);
      if( arr.includes(userId)){
        this.favoritecompare = false;
      }else{
        this.favoritecompare = true;
      }
    },
    getreload: function(){
      console.log(this.Chat);
      const userId = this.userId;
      const arr = this.Chat.favoiriter.map(function(user){
        return user.id;
      });
      return this.chatsort(userId, arr);
    },
    favorite: function(value){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/create', {
          chat_id: value 
        })
        .then(response => {
          console.log(response);
          this.getchat();
        })
        .catch(error => {
          alert('お気にりにできませんでした。');
          console.log(error);
          return false;
        });
    },
    unfavorite: function(value){
      axios
        .delete('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/favorites/destroy', {
          data: {chat_id: value} 
        })
        .then(response => {
          console.log(response);
          this.getchat();
        })
        .catch(error => {
          alert('お気に入りを解除できませんでした。');
          console.log(error);
          return false;
        });
    },
    getchat: function(){
      var id = this.chat.id;
      axios
        .get(`https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/chats/${id}`)
        .then(response => {
          console.log(response.data);
          this.Chat = response.data;
          this.getreload();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  template:`
    <div class="icon-mark" v-if="favoritecompare">
        <a href="#" v-on:click="favorite(chat.id)"><i class="far fa-star icon"></i></a>
    </div>
    <div class="icon-mark" v-else>
        <a href="#" v-on:click="unfavorite(chat.id)"><i class="fas fa-star"></i></a>
    </div>
    `,
});*/