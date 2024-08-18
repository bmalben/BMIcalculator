uname=localStorage.getItem('uname')
console.log(uname);
hei=localStorage.getItem('height')
console.log(hei);
wei=localStorage.getItem('weight')
console.log(wei);


h=hei/100;
console.log(h);
x=h*h;
console.log(x);

const bmi = wei/x;
let roundedBMI = parseFloat(bmi.toFixed(2));
console.log(roundedBMI);


// const x=bmi;
let y='';
if(!isNaN(bmi))
    {
        if(bmi<18.5){
            y='Underweight'
            stat2.innerHTML=`<h4 style=color:yellow>${roundedBMI}</h4>`
            stat.innerHTML=`<h4 style=color:yellow>${y}</h4>`
            image.innerHTML=`<img src="./images/skinny.png" alt="">`
            // const utterance = new SpeechSynthesisUtterance(`Hey ${uname}Your BMI is ${roundedBMI} and your status is ${y}. You are Skinny Dude...`);
            // speechSynthesis.speak(utterance);
        }
        else if (bmi>=18.5&&bmi<24.9){
            y='Normal weight';
            stat2.innerHTML=`<h4 style=color:greenyellow>${roundedBMI}</h4>`
            stat.innerHTML=`<h4 style=color:greenyellow>${y}</h4>`
            image.innerHTML=`<img src="./images/normal.png" alt="">`
            // const utterance = new SpeechSynthesisUtterance(`Hey ${uname}Your BMI is ${roundedBMI} and your status is ${y}. You are Perfect Dude...`);
            // speechSynthesis.speak(utterance);
        } 
        else if(bmi>=25&&bmi<29.9){
            y='Overweight';
            stat2.innerHTML=`<h4 style=color:orange>${roundedBMI}</h4>`
            stat.innerHTML=`<h4 style=color:orange>${y}</h4>`
            image.innerHTML=`<img src="./images/overweight.png" alt="">`
            // const utterance = new SpeechSynthesisUtterance(`Hey ${uname}Your BMI is ${roundedBMI} and your status is ${y}. You are Bulk Dude...`);
            // speechSynthesis.speak(utterance);
        } 
        else{
            y='Obese';
            stat2.innerHTML=`<h4 style=color:red>${roundedBMI}</h4>`
            stat.innerHTML=`<h4 style=color:red>${y}</h4>`
            image.innerHTML=`<img src="./images/obese.png" alt="">`
            // const utterance = new SpeechSynthesisUtterance(`Hey ${uname}Your BMI is ${roundedBMI} and your status is ${y}. You are Fat Man...`);
            // speechSynthesis.speak(utterance);
        }
        speakStatus(y);
    }
    else{
        // bmiResult.textContent = '0';
        // bmiStatus.textContent = 'Unknown';
        // updateChart(0);
        speakStatus('Unknown');
        // const utterance = new SpeechSynthesisUtterance(`Hey ${uname}Your BMI and your status is unknown`);
        // speechSynthesis.speak(utterance);
    }

    console.log(y);

    function speakStatus(status){
        const utterance = new SpeechSynthesisUtterance(`Hey ${uname}Your BMI is ${roundedBMI} and your status is ${status}.`);
        speechSynthesis.speak(utterance);
    }


head.innerHTML=`<h3>${uname}</h3>`


