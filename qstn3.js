var d = new Date();

var month = d.getMonth() + 1;

if(month < 10){

    month = "0" + month;
}

var day = d.getDay();

if(day < 10){

    day = "0" + day;
}
var year = d.getFullYear();


console.log(month + "-" +  day + "-" + year);

console.log(month + "/" +  day + "/" + year);

console.log(day + "-" +  month + "-" + year);

console.log(day + "/" +  month + "/" + year);
