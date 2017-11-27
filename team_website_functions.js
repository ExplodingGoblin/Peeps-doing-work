function RandomGreeting(){

}

function dateMessage(){
    var months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]; //#2
    var s = new Date();
    var monthNumber = s.getMonth(); //gets the month number
    document.write("The date is ", months[monthNumber], "/"); //displays month
    var r = new Date();
    var dayNumber = r.getDate(); //gets day number
    document.write(dayNumber, "/"); //displays day
    var a = new Date();
    var yearNumber = a.getFullYear(); //gets year
    document.write(yearNumber, " ") //displays year
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // gets day of the week from here
    var n = new Date();
    var weekday = n.getDay();
    document.write("Today is a ", dayOfWeek[weekday], "</br>"); //writes the Day of the week
    console.log(weekday); // 1
}

function BirthdayCountDown(){

}
