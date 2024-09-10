const clock=document.querySelector('#clock');

/* setInterval(function(){}, interval) - Conitnuously RUNS the given function 
after given interval of time (in ms)*/
setInterval(() => {
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);