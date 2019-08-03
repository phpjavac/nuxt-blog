import axios from 'axios';

class Api {
  $http = axios.create({
    baseURL: 'http://localhost:3039',
  });
  axios = axios.interceptors.response
  catch() {
    console.log(this);
  }

  /** 登录接口 */
  login(data) {
    return this.$http.post('./api/user/login', data);
  }

  getUser() {
    return this.$http.get('./api/user');
  }

  addTag(data) {
    return this.$http.post('./api/article/addtag', data);
  }
  getTagList(){
    return this.$http.get('./api/article/taglist');
    
  }
  deleteTag(id){
    return this.$http.delete(`./api/article/deletetag/${id}`);
<<<<<<< HEAD
  }
  getArticle(){
    return this.$http.get('./api/article/list',{
      params: { page: 1, pageSize: 10 }
    });
  }
  
=======
    
  }
>>>>>>> c11345e2f3f09b22a9a7715e5b5c6388c62a02e2
}

export default Api;
