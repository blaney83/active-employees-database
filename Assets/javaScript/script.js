$(document).ready(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDnTnSs-voSLIgLaD-taGh_x2HImFOTxG8",
        authDomain: "justinbrownproject.firebaseapp.com",
        databaseURL: "https://justinbrownproject.firebaseio.com",
        projectId: "justinbrownproject",
        storageBucket: "justinbrownproject.appspot.com",
        messagingSenderId: "559375476223"
    };
    firebase.initializeApp(config);


var database = firebase.database();

var name = "";
var role = "";
var date = "";
var rate = "";


//function for the onclick button
$(".btn").on("submit", function () {
    //prevents the data from affecting the page
    event.preventDefault();
    //creating values for each section
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    date = moment($("#date-input").val().trim(), "MM/DD/YYYY");
    rate = $("#rate-input").val().trim();

    //will push all inputted information to firebase
    database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate,
    });

});

database.ref().on("value", function (snapshot) {



//we need to use snapshot to loop through the data base data and display all the employees stored in the db. this code below here, currently creates the proper elements to insert into our table.  
    var $tableRow = $("<tr>")
    var $nameData = $("<td>")
    var $roleData = $("<td>")
    var $dateData = $("<td>")
    var $rateData = $("<td>")
    var $monthsData = $("<td>")
    var $billedData = $("<td>")
    var date = moment.unix(empStart).format("MM/DD/YYYY")
    var empMonths = moment().diff(moment(empStart, "X"), "months")
    var empBilled = empMonths * rate;
    

    $nameData.text(name)
    $roleData.text(role)
    $dateData.text(date)
    $rateData.text(rate)
    $monthsData.text(empWorked)
    $billedData.text(empBilled)



    $tableRow = $tableRow.append($nameData).append($roleData).append($dateData).append($rateData).append($monthsData).append($billedData);

     $("#appendHere").append($tableRow)



})

})