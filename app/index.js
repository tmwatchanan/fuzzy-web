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
        <a class="navbar-brand" href="./index.html">Fuzzy Web</a>  
      </div>
      <ul class="nav navbar-nav navbar-right" id="my-button">   
        <li><a href="./learn.html">Learn</a></li>
        <li><a href="./lab.html">Lab</a></li>
        <li><a href="./assignment.html">Assignment</a></li>
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
          <a href="#"><i class="fa fa-facebook-square" style="font-size:36px; color:#3b5998"></i></a>
          <a href="#"><i class="fa fa-twitter-square" style="font-size:36px; color:#0084b4"></i></a>
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
      <img src=${require('./images/fuzzy-content.png')} class="img-responsive" alt="fuzzy content">
    </div>
  `
});

new Vue({
  el: '#my-content'
});

Vue.component('my-lab', {
  template: `
  <div class="container lab-center">
      <div class="center-img">
        <a href="#">
          <img class="img-responsive lab-img" src=${require('./images/empty.png')} />
          <div class="caption text-center">Lab 1: xxxxxx</div>
        </a>
      </div>
      <div class="center-img">
        <a href="#">
          <img class="img-responsive lab-img" src=${require('./images/empty.png')} />
          <div class="caption text-center">Lab 2: xxxxxx</div>
        </a>
      </div>
      <div class="center-img">
        <a href="#">
          <img class="img-responsive lab-img" src=${require('./images/empty.png')} />
          <div class="caption text-center">Lab 3: xxxxxx</div>
        </a>
      </div>
  </div>
  `
});

new Vue({
  el: '#my-lab'
});

Vue.component('assignment-table', {
  template: `
    <div class="main-body">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Difficulty</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            <tr class="info" onclick="window.document.location='./assignments/1.html';">
              <td>#1</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Easy</td>
              <td>
                <button type="button" class="btn btn-default btn-sm"  style="color: green">
                  <span class="glyphicon glyphicon-ok"></span> Done 
                </button>
              </td>
            </tr>
            <tr class="warning" onclick="window.document.location='./assignments/2.html';">
              <td>#2</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Normal</td>
              <td>
                <button type="button" class="btn btn-default btn-sm"  style="color: green">
                  <span class="glyphicon glyphicon-ok"></span> Done 
                </button>
              </td>
            </tr>
            <tr class="danger" onclick="window.document.location='./assignments/3.html';">
              <td>#3</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Hard</td>
              <td>
              <button type="button" class="btn btn-default btn-sm"  style="color: red">
              <span class="glyphicon glyphicon-remove"></span> NO 
            </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
});

new Vue({
  el: '#assignment-table'
});
