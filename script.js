 const theButton = document.getElementById("thebutton")
 const closeIcon = document.getElementById("closeicon")
 const ace = document.getElementById("ace")
 const king = document.getElementById("king")
 const queen = document.getElementById("queen")
 const jack = document.getElementById("jack")
 const cards = document.getElementsByClassName("cards")
 const submitButton = document.getElementById('submitbutton');
 const userName = document.getElementById('username')

 theButton.addEventListener("click", function() {
     this.classList.add("clicked");
     ace.classList.add("actual");
     king.classList.add("actual");
     queen.classList.add("actual");
     jack.classList.add("actual");
     toggleResetButtonVisibility();
 });

ace.addEventListener("click", function(){
    ace.classList.toggle("selected")
})
king.addEventListener("click", function(){
    king.classList.toggle("selected")
})
queen.addEventListener("click", function(){
    queen.classList.toggle("selected")
})
jack.addEventListener("click", function(){
    jack.classList.toggle("selected")
})

 closeIcon.addEventListener("click", function(){
     theButton.classList.remove("clicked");
     ace.classList.remove("actual");
     king.classList.remove("actual");
     queen.classList.remove("actual");
     jack.classList.remove  ("actual");
     ace.classList.remove("selected")
     king.classList.remove("selected")
     queen.classList.remove("selected")
     jack.classList.remove("selected")
     toggleResetButtonVisibility();
 })

 submitButton.addEventListener("click", function(){
    theButton.classList.remove("clicked");
    ace.classList.remove("actual");
    king.classList.remove("actual");
    queen.classList.remove("actual");
    jack.classList.remove  ("actual");
    ace.classList.remove("selected")
    king.classList.remove("selected")
    queen.classList.remove("selected")
    jack.classList.remove("selected")
    toggleResetButtonVisibility();
    userName.value = '';
 })

 function toggleResetButtonVisibility() {   
    closeIcon.style.display = theButton.classList.contains("clicked") ? "block" : "none";
    submitButton.style.display = theButton.classList.contains("clicked") ? "block" : "none";
}



