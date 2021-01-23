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
  }
});
