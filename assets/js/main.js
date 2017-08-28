let acc = document.querySelectorAll('.accordion');
console.log(acc);
acc.forEach((i) =>{
    i.onclick = function (){
      let next = this.nextElementSibling;
      if (next.getAttribute("data-status", "opened")){
        next.style.display = "none";
        next.removeAttribute ("data-status", "opened");

      } else {
      next.style.display = "block";
      next.setAttribute("data-status", "opened");
      }
    };

});
