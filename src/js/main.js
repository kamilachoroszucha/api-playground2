"use strict";

fetch("https://api.openweathermap.org/data/2.5/group?id=763166,756135,3099434,776069,3081368,3096472,3083829,3088171,3080866,2950159,3143244,2643743,683506,3413829&APPID=d9b4d047a1d04c2aab0936d7fd2a6b64&units=metric")
.then(resp => resp.json())
.then(resp => {
  console.log(resp);
  const temp=[];
  const cities=[];

  console.log(resp.list);//array z 2 elementami
 
  for (let i =0;i<(resp.list).length; i++){
    temp.push(Math.round(resp.list[i].main.temp))};
  console.log(typeof(temp[0]));
  console.log(temp);

  for (let i =0;i<(resp.list).length; i++){
    cities.push(resp.list[i].name)};
  console.log(cities);
  const text = document.querySelector('.form__temp--js');
  console.log(text.innerHTML);
  text.addEventListener('keyup', (e)=>{
    
    console.log((e.target.value));
    const result = parseInt(e.target.value);//zmiana na liczbę
    console.log(result);
    const index = temp.indexOf(result);
    console.log(index);
    const city = cities[index];
    console.log(cities[index]);
    const anwser = document.querySelector('.answer--js');
    
    if(index>=0){
      anwser.innerHTML = `You should go to ${city}! `
    }else{
      anwser.innerHTML = `Stop whining! There is no place with this temperature anywhere nearby! Be tough!`
    }
  })
})



