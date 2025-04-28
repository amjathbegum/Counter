const decreseBtn = document.getElementById("decreseBtn");
const increseBtn = document.getElementById("increseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

increseBtn.onclick =  function(){
  count++;
  countLabel.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}

decreseBtn.onclick = function() {
   count--;
   countLabel.textContent = count;
}


