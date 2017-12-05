function greeting() {
    var hour = d.getHours();
    var day = d.getDay();
    if (hour < 10) {
        if(day == 0 || day == 6) {
            return "Go back to sleep, it's the weekend!";
        } else if (day == 1) {
            return "Ugh, it's Monday monring!";
        } else {
            return "Good morning!";
        }
    if (hour > 10 && hour < 16) {
        if (day == 0 || day == 6) {
            return "Hope you are having a great weekend!";
        } else {
            return "Good day!";
        }
    }
    if ( hour > 16) {
        if (day == 0) {

        }
    }

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

function birthdayCountDown(birthdate) {

    var today = new Date();
    var birthday = new Date(birthdate);
    var currenttime = today.getTime();
    var birthtime = birthday.getTime();

    if ((birthtime - currenttime) < 0) {


        birthday.setFullYear(today.getFullYear());

        if ((birthday.getTime() - today.getTime()) < 0) {
            birthday.setFullYear(birthday.getFullYear() + 1);
        }

    }

    var daysuntil = Math.floor((birthday.getTime() / 86400000) - (today.getTime() / 86400000));


    document.write(daysuntil);

}
