var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
var f = document.getElementsByTagName("form")[0];

f.addEventListener("submit", function(event){
  event.preventDefault();

  // First Name
  if(this['firstName'].value.length <= 3)
  {
    this['firstName'].nextElementSibling.innerHTML = "Invalid";
    this['firstName'].nextElementSibling.style.display = 'block';
  }
  else{
    this['firstName'].nextElementSibling.style.display = 'block';
    this['firstName'].nextElementSibling.innerHTML = "Looks Good!";
  }

  // lastName
  if(this['lastName'].value == "")
  {
    this['lastName'].nextElementSibling.innerHTML = "Valid last name is required.";
    this['lastName'].nextElementSibling.style.display = 'block';
  }
  else{
    this['lastName'].nextElementSibling.style.display = 'block';
    this['lastName'].nextElementSibling.innerHTML = "Looks Good!";
  }

  // Email
  if((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this['email'].value)))
  {
    this['email'].nextElementSibling.innerHTML = "Looks Good!";
    this['email'].nextElementSibling.style.display = 'block';
  }
  else{
    this['email'].nextElementSibling.style.display = 'block';
    this['email'].nextElementSibling.innerHTML = "Please enter a valid email address.";
  }

  // Address
  if(this['address'].value.length <= 3)
  {
    this['address'].nextElementSibling.innerHTML = "Please enter your address.";
    this['address'].nextElementSibling.style.display = 'block';
  }
  else{
    this['address'].nextElementSibling.style.display = 'block';
    this['address'].nextElementSibling.innerHTML = "Looks Good!";
  }

  // country
  if(this['country'].value == "")
  {
    this['country'].nextElementSibling.innerHTML = "Please select a valid country.";
    this['country'].nextElementSibling.style.display = 'block';
  }
  else{
    this['country'].nextElementSibling.style.display = 'block';
    this['country'].nextElementSibling.innerHTML = "Looks Good!";
  }

  // state
  if(this['state'].value == "")
  {
    this['state'].nextElementSibling.innerHTML = "Please select a valid state.";
    this['state'].nextElementSibling.style.display = 'block';
  }
  else{
    this['state'].nextElementSibling.style.display = 'block';
    this['state'].nextElementSibling.innerHTML = "Looks Good!";
  }

  // Zip
  if (!((/^[0-9]*$/.test(this['zip'].value)) && (this['zip'].value.length == 6)))
  {
    this['zip'].nextElementSibling.innerHTML = "Please enter a valid, 6-digit zip.";
    this['zip'].nextElementSibling.style.display = 'block';
  }
  else{
    this['zip'].nextElementSibling.style.display = 'block';
    this['zip'].nextElementSibling.innerHTML = "Looks Good!";
  }

});
