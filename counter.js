let count = 0;

function updateDisplay(){
  document.getElementById("counter").textContent = count;
}
function increment() {
count++;
document.getElementById("decrement").style.display = "inline-block"
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


if(count === 0) {
  document.getElementById("decrement").style.display = "none";
}
 
}



function reset() {
count = 0;
updateDisplay();
}