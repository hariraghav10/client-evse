//Bookingform : 2
//BookingStatus : 1
//Charging : 3

changeTo(5);







var screen=1;
var booking=1;
var time="";
var date="";

//changeTo(5); //root of booking

function checkBooking(){
    console.log("checking");
   // var starCountRef = firebase.database().ref('Users/user1');
   // starCountRef.on('value', (snapshot) => {
   // const data = snapshot.val();
   // document.getElementById('dispDate').innerHTML=data.bookingInfo.Date
   // document.getElementById('dispTime').innerHTML=data.bookingInfo.Time
   // console.log(data)
    
   changeTo(0); //blank screen
  fetch('https://server-evse.vercel.app/bookinginfo2')           //api for the get request
  .then(response => response.json())
  .then(data => {console.log(data["isBooked"])
    if(data["isBooked"]=="2"){
        changeTo(1); //booking Info
        console.log('booked');
    }
    else{
        changeTo(2); //booking form
        console.log('Not booked');
    }
    });

}
let data1
function updateBookingInfo(){
   // var starCountRef = firebase.database().ref('Users/user1');
   // starCountRef.on('value', (snapshot) => {
   // const data = snapshot.val();
   // document.getElementById('dispDate').innerHTML=data.bookingInfo.Date
   // document.getElementById('dispTime').innerHTML=data.bookingInfo.Time
   // console.log(data)
    
    
   //});
   fetch('https://server-evse.vercel.app/bookinginfo2')           //api for the get request
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('dispDate').innerHTML=data.Date
        document.getElementById('dispTime').innerHTML=data.Time
        console.log(data)
        
      });
}  
function cancelBooking(){
    // var starCountRef = firebase.database().ref('Users/user1');
    // starCountRef.on('value', (snapshot) => {
    // const data = snapshot.val();
    // document.getElementById('dispDate').innerHTML=data.bookingInfo.Date
    // document.getElementById('dispTime').innerHTML=data.bookingInfo.Time
    // console.log(data)
     
     
    //});
    fetch('https://server-evse.vercel.app/cancelbooking')           //api for the get request
     //.then(response => response.json())
     .then(data => {
        console.log(data)
        checkBooking();
        
         
       });
 } 

checkBooking();

function changeScreen(screen){
if (screen==1){//booking info
    document.getElementById("S1").style.display="block";
    document.getElementById("S2").style.display="none";
    document.getElementById("S3").style.display="none";
    document.getElementById("S4").style.display="none";
    updateBookingInfo();
}
if (screen==2){//booking form
    
    document.getElementById("S2").style.display="block";
    document.getElementById("S1").style.display="none";
    document.getElementById("S3").style.display="none";
    document.getElementById("S4").style.display="none";
}
if (screen==3){//charging screen
    document.getElementById("S3").style.display="block";
    document.getElementById("S1").style.display="none";
    document.getElementById("S2").style.display="none";
    document.getElementById("S4").style.display="none";
}
if (screen==4){//dashboard screen
    document.getElementById("S4").style.display="block";
    document.getElementById("S1").style.display="none";
    document.getElementById("S2").style.display="none";
    document.getElementById("S3").style.display="none";
}
if (screen==5){//booking screen
    checkBooking();
}
if (screen==0){
    document.getElementById("S4").style.display="none";
    document.getElementById("S1").style.display="none";
    document.getElementById("S2").style.display="none";
    document.getElementById("S3").style.display="none";
}
}

function changeTo(num){
    changeScreen(num)
}

function sendBookingData(){
    let date=String(document.getElementById('date').value);
    let time=String(document.getElementById('time').value);
    //bookingurl="http://localhost:3000/book?t="+time+"&d="+date;
    //fetch(bookingurl)           //api for the get request
    //.then(response => response.json())
    //.then(data => {console.log(data);
    //    //changeTo(5);
    //})

    console.log(date,time);
    
   /*
    var payload = {
        "Time": time,
        "Date": date
    };
    
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );
    
    fetch("http://localhost:3000/booking",
    {
        method: "POST",
        body: data
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })
*/
/*
    fetch("http://localhost:3030/booking", {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify({
            Time: String(time),
            Date:String(date),
            userId: 1
        }),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })*/
     
    fetch('https://server-evse.vercel.app/booking?date='+date+'&time='+time+'&evseid=123&userid=232')           //api for the get request
     //.then(response => response.json())
     
    // Converting to JSON
    //.then(response => response.json())
     
    // Displaying results to console
    .then(json => {console.log(json);checkBooking();});


}
