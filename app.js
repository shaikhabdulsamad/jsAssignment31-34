//************************* Chapter : 31-34 ******************** */

//************************* Task : 01 ******************** */

// var date = new Date();
// document.write(date)


//************************* Task : 02 ******************** */

// var arr = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
// var date = new Date();
// var month = date.getMonth();
// document.write(arr[month])


//************************* Task : 03 ******************** */

// var arr = ["Sun","Mon","Tue","Wed","Thus","Fri","Sat"]
// var date = new Date();
// var day = date.getDay();
// alert(arr[day])


//************************* Task : 04 ******************** */

// var date = new Date();
// var day = date.getDay();
// if(day === 0 || day === 6){
//     alert("It's Fun day")
// }


//************************* Task : 05 ******************** */

// var date = new Date();
// var getDate = date.getDate();
// if(getDate <= 15){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }


//************************* Task : 06 ******************** */

// var date = new Date();
// var milisec = date.getTime();
// var min = Math.floor(milisec/(1000*60));
// document.write("current date: "+ date+"<br>"+"milisec since jan 1, 1970: "+milisec+"<br>"+"min since jan 1, 1970: "+min)


//************************* Task : 07 ******************** */

// var date = new Date();
// var getHours = date.getHours();
// if(getHours <= 12){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }


//************************* Task : 08 ******************** */

// var laterDate = new Date ("Dec 31, 2020")
// console.log(laterDate)


//************************* Task : 09 ******************** */

// var laterDate = new Date ("Jan 18, 2015");
// var date = new Date();

// var diff = date.getTime() - laterDate.getTime();
// var floor = Math.floor(diff/(1000*60*60*24));
// alert(floor + " days have passed since 1st Ramadan, 2015")


//************************* Task : 10 ******************** */

// var laterDate = new Date ("Jan 1, 2015");
// var date = new Date();

// var diff = date.getTime() - laterDate.getTime();
// var floor = Math.floor(diff/(1000));

// alert(floor + " sec had passed since beginning of 2015")


//************************* Task : 12 ******************** */

// var userInput = +prompt("Enter your age")
// var date = new Date();
// var year = date.getFullYear()
// alert("Your age is " +userInput+"\n"+ "Your birth year is " + (year-userInput))


//************************* Task : 13 ******************** */

// var arr = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
// var userName = prompt("Enter customer name");
// var date = new Date();
// var month = date.getMonth()
// var year = date.getFullYear()
// var unit = 410;
// var unitRate = 16;
// var netAmount = unit * unitRate;
// var lateCharges = 350;
// var grossAmount = netAmount + lateCharges;

// document.write("Customer Name: "+ userName+ "<br>"+
//                 "Bill of Month: "+ arr[month] + " "+ year+ "<br>"+
//                 "Number of Units: "+ unit+ "<br>"+
//                 "Charges per Unit: "+ unitRate+ "<br><br>"+
//                 "Net amount payable (within due date): "+netAmount+ "<br>"+
//                 "Late payment surcharge: "+ lateCharges+ "<br>"+
//                 "Gross amount payable (after due date): "+grossAmount+ "<br>")

