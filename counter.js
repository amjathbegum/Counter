let count = 0;

function updateDisplay(){
  document.getElementById("counter").textContent = count;
}
function increment() {
count++;
updateDisplay();
}

function decrement() {
if (count>0)
{
  count--;
}
else{
  count=0;
}
updateDisplay();
}


function reset() {
count = 0;
updateDisplay();
}