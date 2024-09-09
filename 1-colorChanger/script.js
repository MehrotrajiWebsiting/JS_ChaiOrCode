const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(
    (button) =>{
        button.addEventListener('click',function (event){
            // WE CAN ALSO WRITE
            // body.style.backgroundColor=button.id;

            // event.target =>  element on which the event occurred/ element that triggered the event
            body.style.backgroundColor=event.target.id;
        });
    }
);