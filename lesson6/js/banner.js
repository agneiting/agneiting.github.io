function banner() {
    var today= new Date();
    var weekDay= today.getDay();
    
    if (weekDay == 5){
    document.getElementById("banner").classList.toggle("popup");
    }
}  