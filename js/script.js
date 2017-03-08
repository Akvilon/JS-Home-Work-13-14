"use strict";


var obj = {

heading: "Тест по программированию",

questions:[
     {title:"Язык сценариев для придания интерактивности веб-страницам это:",
      chekboxName:["one","two","three"],
      id:["1","2","3"],
      answers:["C++", "JavaScript", "Java"],
      correct:2
      },
     {title:"Один из создателей JavaScript это:",
      chekboxName:["one","two","three"],
      id:["4","5","6"],
      answers:["Бьёрн Страуструп", "Джеймс Гослинг", "Брендан Эйх"],
      correct:6
      },
      {title:"Что из ниже перечисленного не написано с использованием JavaScript:",
      chekboxName:["one","two","three"],
      id:["7","8","9"],
      answers:["jQuery", "React", "Laravel"],
      correct:9
      }]
      };


try {
var save = JSON.stringify(obj);
localStorage.setItem("object", save);
}
catch (e) {
  alert (e)
}
try {
var response = JSON.parse(localStorage.getItem("object"));
}
catch (e) {
  alert (e)
}


var html = $('#test').html();
var content = tmpl(html,response);
$("body").append(content);



function showModal(e){
     e.preventDefault();
     var modal = $("<div class='modal'></div>");
     var result = 0;
     var answer = $('input:checked');
     var correct = [];
     for (var i=0; i<response.questions.length;i++){
          correct[i] = response.questions[i].correct;
          if($(answer[i]).attr('id')==correct[i]){
            modal.append('<p class="correct">Ответ верный</p>');
     } else {
          modal.append('<p class="incorrect">Вы ошиблись</p>');
     }
}
modal.append('<button>Пройти тест снова</button>');
$('body').append(modal);

$('button').one('click',function(e){
     e.preventDefault();
     modal.detach();
     $('input').attr('checked', false);
})
}
$('.results').on('click',showModal);
