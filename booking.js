const show=document.getElementById('show');
let date=document.getElementById('date').value;
let time=document.getElementById('time').value;
if(date=="" && time==""){
    document.getElementById("Booked").style.display="none";
    document.getElementById("BookingForm").style.display="block";
}
function showDT(){
    let date=document.getElementById('date').value;
    let time=document.getElementById('time').value;
    console.log(time);
    console.log(date);
    document.getElementById('dispDate').innerHTML=date;
    document.getElementById('dispTime').innerHTML=time;
    document.getElementById("Booked").style.display="block";
    document.getElementById("BookingForm").style.display="none";
}