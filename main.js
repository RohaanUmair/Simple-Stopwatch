const hours = document.getElementById('hour');
const mins = document.getElementById('min');
const sec = document.getElementById('sec');
const ms = document.getElementById('ms');


let date = Date.now();
let start;
function startTimer(){
    start = setInterval(() => {
        let timeElapsed = Date.now() - date;
        ms.innerText = timeElapsed;

        if (ms.innerText >= 999){
            ms.innerText = 0;
            
            sec.innerText = (sec.innerText < 9) ? '0' + ++sec.innerText : ++sec.innerText;
        }

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
    }, 10);

}


function stopTimer(){
    clearInterval(start);
}


function resetTimer(){
    clearInterval(start);
    ms.innerText = '000';
    sec.innerText = '00';
    mins.innerText = '00';
    hours.innerText = '00';
}




