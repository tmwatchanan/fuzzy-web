require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css');
require('font-awesome/css/font-awesome.min.css');

import Vue from 'vue';

Vue.component('my-button', {
  template: '<input type="button" class="btn btn-primary" value="Hello   bootstrap">'
});

new Vue({
  el: '#my-button',
  data: {
    // message: "Hello Button"
  }
});

Vue.component('my-navbar', {
  template: `
  <nav class="navbar navbar-inverse"> 
   <div class="container-fluid">  
     <div class="navbar-header">   
        <a class="navbar-brand" href="#">Fuzzy Web</a>  
      </div>
      <ul class="nav navbar-nav navbar-right" id="my-button">   
        <li><a href="./learn.html">Learn</a></li>
        <li><a href="#">Lab</a></li>
        <li><a href="#">Assignment</a></li>
        <li><a href="#">About Us</a></li>
        <li id="fake-nav"><a href="#login" style="padding:0px"><img src=${require('./images/pure-icon-profile.png')} alt="Profile" style="width:40px; height:auto; margin: 5px"></a></li>
      </ul>
    </div>
  </nav>
  `
});

new Vue({
  el: '#my-navbar',
  data: {
    webTitle: "Fuzzy Web"
  }
});

Vue.component('fuzzy-logic-logo', {
  template: `  
    <div align="center">
      <img src=${require('./images/fuzzy_logic-icon.png')} alt="">
      <h1>Welcome to Fuzzy System Learning</h1>
    </div>
  `
});

new Vue({
  el: '#fuzzy-logic-logo'
});

Vue.component('my-footer', {
  template: `
    <div class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <p class="navbar-text pull-left">© 2017 - Fuzzy Web
          <a href="#" target="_blank">CPE405</a>
        </p>
          
        <div class="pull-right">
          <i class="fa fa-facebook-square" style="font-size:36px; color:#3b5998"></i>
          <i class="fa fa-twitter-square" style="font-size:36px; color:#0084b4"></i>
        </div>
      </div>
    </div>
  `
});

new Vue({
  el: '#my-footer'
});

Vue.component('my-content', {
  template: `
    <div align="center">
      <img src=${require('./images/fuzzy-content.png')} class="img-responsive" alt="">
    </div>
  `
});

new Vue({
  el: '#my-content'
});
