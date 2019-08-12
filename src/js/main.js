"use strict";



fetch("https://api.openweathermap.org/data/2.5/group?id=763166,756135,3099434,776069,3081368,3096472,3083829,3088171,3080866,2950159,3143244,2643743,683506,3413829&APPID=d9b4d047a1d04c2aab0936d7fd2a6b64&units=metric")
  .then(resp => resp.json())
  .then(resp => {

    const temp = [];
    const cities = [];

    for (let i = 0; i < (resp.list).length; i++) {
      temp.push(Math.round(resp.list[i].main.temp))
    };
   ;

    for (let i = 0; i < (resp.list).length; i++) {
      cities.push(resp.list[i].name)
    };


    const button = document.querySelector('.form__submit--js')
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const text = document.querySelector('.form__temp--js');
      const result = parseInt(text.value);
      
      if (result) {
        const index = temp.indexOf(result);
        const city = cities[index];
        const anwser = document.querySelector('.answer--js');
        if (index >= 0) {
          anwser.innerHTML = `You should go to ${city}! `
        } else {
          anwser.innerHTML = `Stop whining! There is no place with this temperature anywhere nearby! Be tough!`
        }
      }
    })
  })
  
