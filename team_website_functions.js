function randomGreeting() {

}

function dateMessage() {

    var dayThing = new Date();
    var day = dayThing.getDate();
    var ending;


    if (day == 1 || day == 21 || day == 31) {
        ending = "st";
    } else if (day == 2 || day == 22) {
        ending = "nd";
    } else if (day == 3 || day == 23) {
        ending = "rd";
    } else {
        ending = "th";
    }

    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // gets day of the week from here
    var n = new Date();
    var weekday = n.getDay();
    document.write("Today is ", dayOfWeek[weekday], ", "); //writes the Day of the week

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var s = new Date();
    var month = s.getMonth(); //gets the month function
    document.write(months[month], " "); //displays month
    var r = new Date();
    var dayNumber = r.getDate(); //gets day number
    document.write(dayNumber, ending); //displays day
}

function BirthdayCountDown() {

}
