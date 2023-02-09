/* Price Range Start */

const slider = document.getElementById("range-slider");
const output = document.getElementById("range-value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value + "$";
}

/* Price Range End */