function greeting() {
    var d = new Date();
    var hour = d.getHours();
    var day = d.getDay();
    if (hour < 10) {
        if(day == 0 || day == 6) {
            document.write("Go back to sleep, it's the weekend!");
        } else if (day == 1) {
            document.write("Ugh, it's Monday monring!");
        } else {
            document.write("Good morning!");
        }
    }
    if (hour > 10 && hour < 16) {
        if (day == 0 || day == 6) {
            document.write("Hope you are having a great weekend!");
        } else {
            document.write("Good day!");
        }
    }
    if ( hour > 16) {
        if (day == 0) {
            document.write("Enjoy your evening...tomorrow is Monday!");
        } else {
            document.write("Good evening!");
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

    function birthdayCountDown(bdate) {

        var today = new Date();
        var bday = new Date(bdate);
        var currenttime = today.getTime();
        var btime = bday.getTime();

        if ((btime - currenttime) < 0) {


            bday.setFullYear(today.getFullYear());

            if ((bday.getTime() - today.getTime()) < 0) {
                bday.setFullYear(bday.getFullYear() + 1);
            }

        }

        var daysuntil = Math.floor((bday.getTime() / 86400000) - (today.getTime() / 86400000));


        document.write(daysuntil, " days until my birthday!");


    }
