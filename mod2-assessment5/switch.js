//display holidays for each month of the year on a web page

//holiday function to determine month + holiday in that month
function holiday() {
    let monthName = ""; //empty variable for each month name
    let holidayName = ""; //empty variable for holiday name that corresponds to that month
    let holidaze = ""; //empty variable for result of switch cases
    
    //[loop for months]
    //for loop to display each month name and holiday names
    //count from 1 to 12 and increment by 1
    for (let month = 1; month <= 12; month++){

        //switch statement [based on months to display variables] as monthName and holidayName + default
        //use at least two holidays per month
        switch (month) {
            case 1:
                monthName = "January";
                holidayName = "1 - New Year's Day" + " & " + "19 - MLK Jr. Day"; 
                break;
            case 2:
                monthName = "February";
                holidayName = "2 - Ground Hog Day" + " & " + "14 - Valentine's Day";
                break;
            case 3:
                monthName = "March";
                holidayName = "17 - Saint Patrick's Day" + " & " + "Ramadan";
                break;
            case 4:
                monthName = "April";
                holidayName = "1 - April Fool's Day" + " & " + "5 - Easter";
                break;
            case 5:
                monthName = "May";
                holidayName = "5 - Cinco De Mayo" + " & " + "10 - Mother's Day";
                break;
            case 6:
                monthName = "June";
                holidayName = "15 - Father's Day" + " & " + "19 - Juneteenth";
                break;
            case 7:
                monthName = "July";
                holidayName = "4 - Independence Day" + " & " + "4th Sunday - National Parent's Day (unofficial)";
                break;
            case 8:
                monthName = "August";
                holidayName = "3 - National Sister's Day" + " & " + "26 - Women's Equality Day";
                break;
            case 9:
                monthName = "September";
                holidayName = "1 - Labor Day" + " & " + "11 - Remembrance";
                break;
            case 10:
                monthName = "October";
                holidayName = "10 - World Mental Health Day" + " & " + "31 - Halloween";
                break;
            case 11:
                monthName = "November";
                holidayName = "11 - Veteran's Day" + " & " + "4th Thursday - Thanksgiving";
                break;
            case 12:
                monthName = "December";
                holidayName = "25 - Christmas" + " & " + "31 - New Year's Eve";
                break;
            default:
                monthName = "That is not a valid month.";
                holidayName = "That is not a valid holiday.";
        }
        //add the end result of each switch case as a h2 header monthName + holidayName as a paragraph
            holidaze += "<h2>" + monthName + "</h2><p>" + holidayName + "</p>";
        }
    //display information on html page using p-id
    document.getElementById("monthly-holidays").innerHTML = holidaze;
}