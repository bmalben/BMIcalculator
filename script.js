function Calculate()
{
    event.preventDefault();
    let username=document.getElementById('uname').value
    console.log(username);
    let height=parseFloat(document.getElementById('height').value)
    console.log(height);
    let weight=parseFloat(document.getElementById('weight').value)
    console.log(weight);
    
    localStorage.setItem('uname',username);
    localStorage.setItem('height',height);
    localStorage.setItem('weight',weight);

    // const height = parseFloat(document.getElementById('height').value)/100;
    // const weight = parseFloat(document.getElementById('weight').value);
    // const bmi = weight/(height*height);

    // if(bmi!=0)
    // {
    //     let x=bmi;
    //     let y='';
    //     if(x<18.5){
    //         y='Underweight'
    //     }
    //     else if (x>=18.5&&bmi<24.9){
    //         y='Normal weight';
    //     } 
    //     else if(x>=25&&bmi<29.9){
    //         y='Overweight';
    //     } 
    //     else{
    //         y='Obese';
    //     }
    // }

    // console.log(x);
    // console.log(y);
    

    window.location='./home.html'
}