function copyRight() {
    let developer = "Jeroen De Vos";
    let now = new Date();
    //let months = ["january", "february", "march", "april", "mei", "june", "july", "august", "september", "october", "november", "december" ];
    let shortMonths = ["jan.", "feb.", "march", "april", "mei", "june", "july", "aug.", "sept.", "oct.", "nov.", "dec." ];
    //let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    let shortWeekDays = ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat." ];
    let date = ' ' + shortWeekDays[now.getDay()] + ' ' + now.getDate() + ' ' + shortMonths[now.getMonth()] + ' ' + now.getFullYear();
    let time = now.getHours() + ':' + now.getMinutes() + ' ';
    document.getElementById("rights").innerHTML = '● ' + date + "<b> &copy; " + developer + " &reg; </b>" + time + ' ●';
}
copyRight();