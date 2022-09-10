//bài 1

function findEven() {
    var random =  Math.floor(Math.random() * (20 - 4 + 1) + 4);

    for(let i = 4; i < random; i++) {
        if(i % 2 == 0) {
            console.log(i)
        }
    }
}

//bài 2 sử dụng hover bên css

//bài 3

function numberOneTriangle() {
let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = 0; j < i; j++) {
    string += "1";
  }

  string += "\n";
}

console.log(string);
}

//bài 4
function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();