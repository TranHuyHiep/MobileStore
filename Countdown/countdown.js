var countDownDate = new Date("Nov 30, 2021 15:37:25").getTime(); //Đặt thời gian đích đếm ngược

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now; //Tìm khoảng cách thời gian giữa hiện tại và đích
    
    //Tính ngày, giờ, phút và giây
    //1000 ms = 1s
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  //In kết quả ở thẻ có id='demo'
  document.getElementById("demo").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);