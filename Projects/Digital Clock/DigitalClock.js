console.log("Working");
//set Alarm Box
let setAlarm = document.getElementById('bx1');
//transition
function alarmEnter(){
    setAlarm.innerText = 'Party time !';
}
function alarmLeave(){
    setAlarm.innerText = 'Set Alarm';
}
//---------------When Click Set Alarm----------------------------------------------------

let clickSetAlarm = document.getElementById('bx1');
clickSetAlarm.setAttribute('onclick', 'clickedAlarm()');
// --------------------for select options-----------------------------------------------
let selected1 = document.getElementById('waketime');
let selected2 = document.getElementById('lunchtime');
let selected3 = document.getElementById('naptime');
let selected4 = document.getElementById('nightTime');
// ----------For Image and Messages show a/c to Time updated by Set Alarm----------------

let wakeUpTime = '';
let lunchTime = '';
let napTime = '';
let nightTime = '';
// ----------------for text show a/c to Set Alarm----------------------------------------
let wakeUpTime1 = '';
let lunchTime1 = '';
let napTime1 = '';
let nightTime1 = '';
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
//---------------Time Option selected by user:-------------------------------------------
function clickedAlarm(){
    wakeUpTime = selected1.options[selected1.selectedIndex].value;
    lunchTime = selected2.options[selected2.selectedIndex].value;
    napTime = selected3.options[selected3.selectedIndex].value;
    nightTime = selected4.options[selected4.selectedIndex].value;
//---------------Updating according to Set Alarm----------------------------------------
{
wakeUpTime1 = selected1.options[selected1.selectedIndex].innerText;
lunchTime1 = selected2.options[selected2.selectedIndex].innerText;
napTime1 = selected3.options[selected3.selectedIndex].innerText;
nightTime1 = selected4.options[selected4.selectedIndex].innerText;
document.getElementById('bx2').innerHTML = `
        <span>Wake Up Time : ${wakeUpTime1}</span><br>
        <span>Lunch Time : ${lunchTime1}</span><br>
        <span>Nap Time : ${napTime1}</span><br>
        <span>Night Time : ${nightTime1}</span>`;
}
}
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
//-------------------For Updating Time-------------------------------------------------
function showTime(){
    var date = new Date();//new Date returns the browser’s date along with the time zone
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
     session = "AM";
    if(h == 0)
        {
            h = 12;
            session = "AM";
        }
//---------------------- for 12 hours formate-------------------------------------------
    if(h > 12)
        {
            h = h - 12;
            session = "PM";
        }
// --------------for adding 0 before currentTime(using  ternary operators)---------------
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// var time = h + ":" + m + ":" + s + " " + session;
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
document.getElementsByClassName("hours-number")[0].innerText = h;
document.getElementsByClassName("minutes-number")[0].innerText = m;
document.getElementsByClassName("seconds-number")[0].innerText = s;
document.getElementsByClassName("am-pm")[0].innerText = session;
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
let element1 = document.getElementById('box1message');
let element2 = document.getElementById('updatemessagebox');
// for image change according to time
let nowTime = h + session;//for store time in nowTime
if(nowTime === wakeUpTime)//if(h<=12 && session=="AM")
    {
        element1.innerText = 'GOOD MORNING!! WAKE UP !!';
        element2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        imageOne.setAttribute('src', './Image/Goodmorning img.svg');
        imageOne.setAttribute('width', '560px');
        // imageOne.setAttribute('height', '350px');
    }
if(nowTime === lunchTime)//if(h>=12 && session=="PM")
    {
        element1.innerText = 'GOOD AFTERNOON !! TAKE SOME SLEEP';
        element2.innerText = "LET'S HAVE SOME LUNCH !!!";
        imageOne.setAttribute('src', './Image/Lunchimg.svg');
        imageOne.setAttribute('width', '560px');
    }
if(nowTime === napTime)//if(h>=04 && session=="PM")
    {
        element1.innerText = 'GOOD EVENING !!!';
        element2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!!!";
        imageOne.setAttribute('src', './Image/evening_image.png');
        imageOne.setAttribute('width', '560px');
        
    }
  if(nowTime === nightTime)//if(h>=08 && session=="PM")
        {
            element1.innerText = 'GOOD NIGHT !!';
            element2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
            imageOne.setAttribute('src', './Image/nightimg.svg');
            imageOne.setAttribute('width', '560px');
        }
}
setInterval(showTime ,1000)
// for imge change location:
let imageOne = document.createElement('img');
 imageOne.setAttribute('src','');
// imageOne.setAttribute('width',"555px");
// imageOne.setAttribute('backgroundRepeat',"no-repeat");
document.querySelector('#evimg').appendChild(imageOne);
// document.getElementById("evimg").style.background-repeat: no-repeat;
// according to time below conditions work:-
// --------------------------------------------------------------------------------




