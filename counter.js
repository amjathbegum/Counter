
const decreseBtn = document.getElementById("decreseBtn");
const increseBtn = document.getElementById("increseBtn");
const resetBtn = document.getElementById("resetBtn");




let count = 0;

//function removefunction() {

 // const list = document.getElementById("myList");
 // const numlist = document.getElementById("myNum");

   /* 
    input.addEventListener('click', function(event) {
         if(event.target.tagName === 'LI'){
            event.target.remove
         }

    });
    
  


      input.remove();*/
    // list.remove();
    //numlist.remove();
   

  //input.removeChild(input.)
//}

increseBtn.addEventListener('click', function () {
  count++;



  const numbers = [10, 20, 30, 40, 50, 60];
  for (let i = 0; i < numbers.length; i++) {

    let numarr = numbers[i];
    if (count == numarr) {

      const node = document.createElement("li");
      const d = new Date();
      const textnode = document.createTextNode(d.toLocaleTimeString());

      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      //const numbernode = document.createTextNode(count);
      const numbernode = document.createElement('div');
      const mynumnode = document.createTextNode(count);
      numbernode.appendChild(mynumnode);
      document.getElementById("myNum").appendChild(numbernode);


     const removeBtn = document.createElement('button');

    removeBtn.textContent='Remove';
    removeBtn.className ='deleteTask';
    
    numbernode.appendChild(removeBtn);

    removeBtn.addEventListener('click',function(){
        numbernode.removeChild(node);

    });




      //  removefunction();


    }
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

