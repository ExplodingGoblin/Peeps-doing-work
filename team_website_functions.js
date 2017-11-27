function RandomGreeting(){

}

function dateMessage(){
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // gets day of the week from here
    var n = new Date();
    var weekday = n.getDay();
    document.write("Today is ", dayOfWeek[weekday], ", "); //writes the Day of the week
    console.log(weekday);// 1

    var s = new Date();
    var month = s.getMonth(); //gets the month number
    document.write(s, " "); //displays month
    var r = new Date();
    var dayNumber = r.getDate(); //gets day number
    document.write(dayNumber, "th"); //displays day
}

function BirthdayCountDown(){

}
