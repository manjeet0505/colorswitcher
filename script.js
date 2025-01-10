const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',(event)=>{
         if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
         }
         if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
         }
         if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
         }
         if(event.target.id === 'purple'){
            body.style.backgroundColor = event.target.id;
         }
         if(event.target.id === 'palegreen'){
            body.style.backgroundColor = event.target.id;
         }
         if(event.target.id === 'aqua'){
            body.style.backgroundColor = event.target.id;
         }
         if(event.target.id === 'orange'){
            body.style.backgroundColor = event.target.id;
         }
    })
})