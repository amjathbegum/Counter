
const decreseBtn = document.getElementById("decreseBtn");
const increseBtn = document.getElementById("increseBtn");
const resetBtn = document.getElementById("resetBtn");



let count = 0;


increseBtn.addEventListener('click', function () {
    count++;
 
   if (count == 10 || count == 20 || count == 30 || count == 40 || count==50 || count==60||count==70||count==80||count==90||count==100) {
  
    const node = document.createElement("li");
    const d = new Date();
    const textnode = document.createTextNode(d.toLocaleTimeString());  
    node.appendChild(textnode); 
    document.getElementById("myList").appendChild(node);
    
    const numbernode = document.createTextNode(count);
     node.appendChild(numbernode);
      document.getElementById("myNum").appendChild(node);
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

