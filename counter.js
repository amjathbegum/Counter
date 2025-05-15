const decreseBtn = document.getElementById("decreseBtn");
const increseBtn = document.getElementById("increseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;
var t;

/*
function myTimer(){
  const d = new Date();
  document.getElementById(increseBtn).innerHTML = d.toLocaleTimeString();
}
*/


increseBtn.addEventListener('click' ,function () {
  if(count<20){
      count++; 
  }
  else if (count == count){
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
  }
  countLabel.textContent = count;
  increseBtn.addEventListener('click', function () {
    decreseBtn.style.display = 'inline-block';
  });
});

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
}

decreseBtn.onclick = function () {
  if (count > 0) {
    count--;
    countLabel.textContent = count;
  }
  else {
    var x = document.getElementById("decreseBtn");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }

  }
}


