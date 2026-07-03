let value = 0;

const progress = document.getElementById("progress");
const percent = document.getElementById("percent");
const joke = document.getElementById("joke");

const steps = [10,28,54,87,99,100];

let i=0;

function loading(){

if(i>=steps.length){

return;

}

value=steps[i];

progress.style.width=value+"%";

percent.innerHTML=value+"%";

if(value==99){

joke.innerHTML="Still 99%...<br>Just like your replies. 🙂";

setTimeout(()=>{

i++;

loading();

},4000);

return;

}

if(value==100){

joke.innerHTML="Connection Established.";

return;

}

i++;

setTimeout(loading,1000);

}

loading();
