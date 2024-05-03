const hours = document.getElementById('hour');
const mins = document.getElementById('min');
const sec = document.getElementById('sec');
const ms = document.getElementById('ms');
const startBtn = document.getElementById('start-btn');


let miliSec;
let start;
function startTimer(){
    startBtn.disabled = true;


    let mSec = 0;

    miliSec = setInterval(() => {
        mSec += 10;
            
        let formattedMs = (ms.innerText < 9) ? '0' + mSec : mSec;


        ms.innerText = formattedMs;
    
        if (mSec >= 990) {
            mSec = 0;
        }

    }, 10);



    start = setInterval(() => {
        sec.innerText = (sec.innerText < 9) ? '0' + ++sec.innerText : ++sec.innerText;

        if (sec.innerText == 59){
            sec.innerText = 0;

            mins.innerText = (mins.innerText < 9) ? '0' + ++mins.innerText : ++mins.innerText;
        }

        if (mins.innerText == 59){
            hours.innerText = 0;

            hours.innerText = (hours.innerText < 9) ? '0' + ++hours.innerText : ++hours.innerText;
        }

        if (hours.innerText == 99){
            clearInterval(start);
        }
    }, 1000);

}


function stopTimer(){
    clearInterval(start);
    clearInterval(miliSec);
    startBtn.disabled = false;
}


function resetTimer(){
    clearInterval(start);
    clearInterval(miliSec);
    startBtn.disabled = false;
    sec.innerText = '00';
    mins.innerText = '00';
    hours.innerText = '00';
    ms.innerText = '000'
}