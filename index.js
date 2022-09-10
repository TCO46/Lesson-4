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

  string += "<br/>";
}

document.write(string);
}

numberOneTriangle()

//bài 4


