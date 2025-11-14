let outerModal = document.getElementById("outer-modal");
let innerModal = document.getElementById("inner-modal");

function removeOuterModal(){
    outerModal.classList.add("hidden");
}

function addOuterModal(){
    outerModal.classList.remove("hidden");
}