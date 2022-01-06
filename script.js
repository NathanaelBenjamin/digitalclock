const imgVar = document.querySelector('#img');
let imageArray = ['arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg', 'brian-erickson-JzZ8MofTlQw-unsplash.jpg', 'domenico-loia-EhTcC9sYXsw-unsplash.jpg', 'Guitar.jpg', 'trinity-nguyen-_yMRmwr2OY8-unsplash.jpg'];

let imageIndex = 0;

function slideShow( ){
    imgVar.setAttribute('src', imageArray[imageIndex]);
    imageIndex++;

    if(imageIndex >= imageArray.length){
        imageIndex = 0;
    }
}

setInterval(slideShow, 5000);

//DATE
const clock = document.querySelector('.clock');
const weekDay = document.querySelector('#weekDay');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

var frequency = document.createElement('div');
frequency.innerText = 'AM';
clock.appendChild(frequency);


function getTimeAndDate( ){
    let daysOfTheWeek = [' ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let date = new Date( );
    let today = date.getDay( )
    let realDay = daysOfTheWeek[today];

    let monthsOfTheYear = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let realMonth = monthsOfTheYear[date.getMonth( )];

    weekDay.innerText = realDay;

    let todayDate = date.getUTCDate( ).toString( );
    
    if(todayDate.length === 1 ){    
        //console.log(todayDate)
        day.innerText = ` 0${todayDate} `;
    } 

    month.innerText = realMonth;

    year.innerText = date.getFullYear( );
    
    //TIME.
    let realhour = date.getHours( );

    if(realhour == '00'){
        realhour = 12 + realhour;
        hour.innerText = realhour;
        frequency.innerText = 'AM';
    }

    else if(realhour > 0 && realhour < 12){
        hour.innerText = ` 0${realhour} `;
        frequency.innerText = 'AM';
    }

    else if(realhour == 12){
        frequency.innerHTML = 'PM' ;
    }

    else if(realhour > 12){
        realhour = realhour - 12;
        hour.innerText = ` 0${realhour} `;
        frequency.innerHTML = 'PM' ;
    }

    if(date.getMinutes( ) < 10){
        minute.innerText = '0' + date.getMinutes( );
    }

    else{
        minute.innerText = date.getMinutes( );
    }

    if(date.getSeconds( ) < 10){
        second.innerText = '0' + date.getSeconds( );
    }

    else{
        second.innerText = date.getSeconds( );
    }
    
}

setInterval(getTimeAndDate, 1000);
