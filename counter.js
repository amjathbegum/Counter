let count = 0;
let intervalid=null;

function updateDisplay(){
  document.getElementById("counter").textContent = count;
}
function increment() {
  document.getElementById("decrement").style.display = "inline-block"
  if(intervalid !== null) return;

  intervalid=setInterval(() => {
    if(count <50){
      count++;
      updateDisplay();
    }
    else{
      clearInterval(intervalid);
      intervalid=null;
      alert("Count reached 50!")
    }

  }, 1000);

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