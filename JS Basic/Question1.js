const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
let dateVar = new Date();
let day = days[dateVar.getUTCDay()]
let hours = dateVar.getHours()<12?dateVar.getHours():dateVar.getHours%12;
let minutes = dateVar.getMinutes();
let seconds = dateVar.getSeconds();
let ampm = dateVar.getHours() > 12 ? 'PM' : 'AM';

console.log('Today is : '+day);
console.log('Current time is : '+ dateVar.getHours() + " "+ampm+" : "+ minutes+" : "+ seconds)