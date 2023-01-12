const d = new Date();

var day = d.getDay();

if(day==0){
    
    day="Sunday";

}else if(day==1){
    day="Monday";
}else if(day==2){
    day="Tuesday";
}else if(day==3){
    day="Wednesday";
}else if(day==4){
    day="Thursday";
}else if(day==5){
    day="Friday";
}else if(day==6){
    day="Saturday";
}

var hour =d.getHours();

var timeperiod ;
if(hour >=12){
    timeperiod = "PM";

}else{
    timeperiod = "AM";
}

if(hour >12){

    hour = hour - 12 ;
}
if(hour <10){
    hour = "0" + hour;

}

var minute = d.getMinutes();

if(minute <10){
    minute = "0" + minute;
}

var second = d.getSeconds();

if(second <10){
    second = "0" + second;
}

console.log("Today is : " + " " + day +"\n" + "Current time is :" +  " " + hour + " " +  timeperiod+":" + " " + minute + ":" + " " + second );


