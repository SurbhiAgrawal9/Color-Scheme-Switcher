const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach(function(button){
  //  console.log(button)
     button.addEventListener('click',function(e){
        switch(e){
          case (e.target.id ==='grey'):
            body.style.backgroundColor = e.target.id;
            break;
          case (e.target.id ==='blue'):
            body.style.backgroundColor = e.target.id;
            break;
            default:
              body.style.backgroundColor= e.target.id
              break;
            }
        
     })
})
