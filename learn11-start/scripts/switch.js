//calculate function to get zodiac sign based on date

function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let monthName = ""; //empty variable for month name
    let westZ = ""; //empty variable for zodiac sign
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);

    //list months for switch statement + default
    switch (month) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "That is not a valid month.";
    }


    //else-if statement based on zodiac dates + in case of invalid date
    //use comparison operators + and/or statements to selects bw dates
    if ((month === 3 && date >= 21) || (month == 4 && date <= 19)) {
        westZ = "Aries";
    } else if ((month === 4 && date >= 20) || (month == 5 && date <= 20)) {
        westZ = "Taurus";
    } else if ((month === 5 && date >= 21) || (month == 6 && date <= 20)) {
        westZ = "Gemini";
    } else if ((month === 6 && date >= 21) || (month == 7 && date <= 22)) {
        westZ = "Cancer";
    } else if ((month === 7 && date >= 23) || (month == 8 && date <= 22)) {
        westZ = "Leo";
    } else if ((month === 8 && date >= 23) || (month == 9 && date <= 22)) {
        westZ = "Virgo";
    } else if ((month === 9 && date >= 23) || (month == 10 && date <= 22)) {
        westZ = "Libra";
    } else if ((month === 10 && date >= 23) || (month == 11 && date <= 21)) {
        westZ = "Scorpio";
    } else if ((month === 11 && date >= 22) || (month == 12 && date <= 21)) {
        westZ = "Sagittarius";
    } else if ((month === 12 && date >= 21) || (month == 1 && date <= 20)) {
        westZ = "Capricorn";
    } else if ((month === 1 && date >= 21) || (month == 2 && date <= 18)) {
        westZ = "Aquarius";
    } else if ((month === 2 && date >= 19) || (month == 3 && date <= 20)) {
        westZ = "Pisces";
    } else {
        westZ = "That is an invalid date.";
    }

    //https://creativeartsguild.org/images/uploads/categories/12_Chinese_Zodiac_Signs.pdf
    //quick source I found that lists all the years
    switch (year) {
        case 1924:
        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
            chi = "Rat"
            break;
        case 1925:
        case 1937:
        case 1949:
        case 1961:
        case 1973:
        case 1985:
        case 1997:
        case 2009:
        case 2021:
            chi = "Ox"
            break;
        case 1926:
        case 1938:
        case 1950:
        case 1962:
        case 1974:
        case 1986:
        case 1998:
        case 2010:
        case 2022:
            chi = "Tiger"
            break;
        case 1927:
        case 1939:
        case 1951:
        case 1963:
        case 1975:
        case 1987:
        case 1999:
        case 2011:
        case 2023:
            chi = "Rabbit"
            break;        
        case 1928:
        case 1940:
        case 1952:
        case 1964:
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            chi = "Dragon"
            break;
        case 1929:
        case 1941:
        case 1953:
        case 1965:
        case 1977:
        case 1989:
        case 2001:
        case 2013:
        case 2025:
            chi = "Snake"
            break;        
        case 1930:
        case 1942:
        case 1954:
        case 1966:
        case 1978:
        case 1990:
        case 2002:
        case 2014:
        case 2026:
            chi = "Horse"
            break;        
        case 1931:
        case 1943:
        case 1955:
        case 1967:
        case 1979:
        case 1991:
        case 2003:
        case 2015:
        case 2027:
            chi = "Goat"
            break;
        case 1932:
        case 1944:
        case 1956:
        case 1968:
        case 1980:
        case 1992:
        case 2004:
        case 2016:
        case 2028:
            chi = "Monkey"
            break;
        case 1933:
        case 1945:
        case 1957:
        case 1969:
        case 1981:
        case 1993:
        case 2005:
        case 2017:
        case 2029:
            chi = "Rooster"
            break;
        case 1934:
        case 1946:
        case 1958:
        case 1970:
        case 1982:
        case 1994:
        case 2006:
        case 2018:
        case 2030:
            chi = "Dog"
            break;
        case 1935:
        case 1947:
        case 1959:
        case 1971:
        case 1983:
        case 1995:
        case 2007:
        case 2019:
        case 2031:
            chi = "Pig"
            break;
        default:
            chi = "This is not a year in this list.";
    }

    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    //display western zodiac on page
    document.getElementById("zodiac").innerHTML = "Your Western zodiac sign is: " + westZ;
}