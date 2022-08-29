// window.alert("test");
 
function currentDate () { //creating and naming the function, defineing paramanters

let  today = new Date(); //creating a var called "today" and assasigning it as the current date;
let  dd = String(today.getDate()).padStart(2, '0'); //creating a var called "dd" assasning current day of month
let  mm = String(today.getMonth() + 1).padStart(2, '0'); //creating a var called "mm" assasininf current month of year
let  yyyy = today.getFullYear(); //creating a var called "yyyy" and assasining the current year

today = mm + '/' + dd + '/' + yyyy;//reassigning "today" var as concatination of "mm" "dd" "yyyy"
let dateDiv = document.getElementById("date"); //creating "dateDiv" var and assining it as HTML element with a Id "date"
dateDiv.innerHTML = today; //reference the var "dateDiv" and setiing its HTML content as "today"
}
currentDate(); //calling the function








