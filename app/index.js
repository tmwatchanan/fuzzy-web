require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css');
import Vue from 'vue';

Vue.component('my-button', {
  template: '<input type="button" class="btn btn-primary" value="Hello   bootstrap">'
})

new Vue({
  el: '#my-button',
  data: {
    // message: "Hello Button"
  }
});

Vue.component('my-navbar', {
  template: '<nav class="navbar navbar-inverse">  <div class="container-fluid">    <div class="navbar-header">      <a class="navbar-brand" href="#">Fuzzy Web</a>    </div>    <ul class="nav navbar-nav navbar-right">      <li><a href="#">Learn</a></li>      <li><a href="#">Lab</a></li>      <li><a href="#">Assignment</a></li>      <li><a href="#">About Us</a></li>    </ul>  </div></nav>'
})

new Vue({
  el: '#my-navbar',
  data: {
    // message: "Hello Navbar"
  }
});
