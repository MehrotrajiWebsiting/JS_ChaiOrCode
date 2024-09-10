const form=document.querySelector('form');
const result= form.querySelector('#results');

form.addEventListener('submit',(event) => {
    // prevent default action of submitting a form
    event.preventDefault(); //without this, on submitting form the value will disappear again quickly

    let height=document.getElementById('height').value;
    let weight=document.getElementById('weight').value;

    //parseInt will convert 21abc to 21 but Number will not
    let h=Number(height);
    let w=Number(weight);

    // works even when input has 21aa
    if(!w || !h || h<0 || w<0){
         result.innerHTML = "Enter all values correctly";
    }
    else{
        //toFixed(n) round up to n decimal points
        let bmi = (w/((h*.01)**2)).toFixed(2);

        if(bmi<18.6){
            result.innerHTML=`<span>${bmi}<br>Under Weight</span>`;
        }
        else if(bmi<=24.9){
            result.innerHTML=`<span>${bmi}<br>Normal Weight</span>`;
        }
        else{
            result.innerHTML=`<span>${bmi}<br>Overweight</span>`;
        }
    }
    result.innerHTML=`<span>${message}</span>`;
});