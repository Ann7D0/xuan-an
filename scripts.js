
function check () {
    var date = document.getElementById("datePicker").value;
    var logindate = Boolean (date == '1999-07-15');
    var name = document.getElementById("namePicker").value;
    var loginname = Boolean (name.toLowerCase() === 'trần thị xuân');
    
    if (logindate == false || loginname == false) {
        window.location.replace("sorry.html");
    }

    if (logindate == true  && loginname == true) {
        window.location.href ="welcome.html"
    }
    console.log(loginname);
    console.log(logindate);
}
