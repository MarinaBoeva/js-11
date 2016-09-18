$(function () {
   $('.carousel').carousel({numberOfSwitch:2,spead:600});

   var html=$('#tmpl-item').html();
   var data={
     lastName:"Боева",
     firstName:"Марина",
     profileImgUrl:"img/profile-img.jpg",
     email:"camado6pota@yandex.ru",
     facebook:"https://www.facebook.com/profile.php?id=100011176115214",
     listItems:['Пункт 1','Пункт 2','Пункт 3','Пункт 4','Пункт 5']
   };
   var content =tmpl(html,data);
   $('body').append(content);
});
