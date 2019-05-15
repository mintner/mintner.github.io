
    
    var mydate = new Date();
    var year = mydate.getYear();
        if(year<1000) {
            year +=1900
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daymonth = mydate.getDate();
    var dayarray = new Array("Sunday,","Monday,","Tuesday,",
    "Wednesday,","Thrusday,","Friday,","Saturday,");
    var montharray = new Array("January","February",
    "March","April","May","June","July","August","September",
    "October","November","December");
    
    var todaysDate = document.getElementById("currentdate");
    todaysDate.textContent = "" +dayarray[day]+ " " +daymonth+ 
    " " +montharray[month]+ " " +year;

