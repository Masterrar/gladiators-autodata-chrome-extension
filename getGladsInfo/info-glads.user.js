// ==UserScript==
// @name myUserJS
// @description Мой самый первый юзерскрипт 
// @author Vasya Pupkin
// @license MIT
// @version 1.0
// @include http://userscripts.org/*
// ==/UserScript==
// [1] Оборачиваем скрипт в замыкание, для кроссбраузерности (opera, ie)
console.log("Я работаю");
var $ =jQuery;
function get(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function (data) {
      if (xhr.readyState == 4) {
          if (xhr.status == 200) {
              callback(data.srcElement.responseText);
          } else {
              callback(null);
          }
      }
  }
  // Note that any URL fetched here must be matched by a permission in
  // the manifest.json file!
  xhr.open('GET', url, true);
  xhr.send();
};
(function (window, undefined) {  // [2] нормализуем window
  var w =window;
  /*
  var w;
  if (typeof window.unsafeWindow != undefined) {
      w = window.unsafeWindow
  } else {
      w = window;
  }
  */
  // В юзерскрипты можно вставлять практически любые javascript-библиотеки.
  // Код библиотеки копируется прямо в юзерскрипт.
  // При подключении библиотеки нужно передать w в качестве параметра окна window
  // Пример: подключение jquery.min.js
   (function(a,b){function ci(a) 
    {
      a.jQuery=a.$=d;
    
    
    }})(w);

  // [3] не запускаем скрипт во фреймах
  // без этого условия скрипт будет запускаться несколько раз на странице с фреймами
  if (w.self != w.top) {
      return;
  }
  // [4] дополнительная проверка наряду с @include
  //if (/http:\/\/userscripts.org/.test(w.location.href)) {
      //Ниже идёт непосредственно код скрипта
      var menuGlads = $(".menu::nth-child(2)");
  var glads = menuGlads.getQuerySelector(".submenu > ul::nth-child(1) > a");
  glads.mousedown(function() {
      alert( "Handler for .mousedown() called." );
    });
  //}
})(window);

function init(){
  
}

