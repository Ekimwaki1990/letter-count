document.getElementById("input").onkeyup = function() {
    document.getElementById("count").innerHTML = this.value.length;
};