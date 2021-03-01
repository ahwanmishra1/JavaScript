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
    this['firstName'].nextElementSibling.style.color = 'red';
    this['firstName'].nextElementSibling.style.display = 'block';
    this['firstName'].nextElementSibling.style.fontSize = "12px";
  }
  else{
    this['firstName'].nextElementSibling.style.display = 'block';
    this['firstName'].nextElementSibling.style.color = 'green';
    this['firstName'].nextElementSibling.innerHTML = "Looks Good!";
    this['firstName'].nextElementSibling.style.fontSize = "12px";
  }

  // lastName
  if(this['lastName'].value == "")
  {
    this['lastName'].nextElementSibling.innerHTML = "Invalid";
    this['lastName'].nextElementSibling.style.display = 'block';
    this['lastName'].nextElementSibling.style.color = 'red';
    this['lastName'].nextElementSibling.style.fontSize = "12px";
  }
  else{
    this['lastName'].nextElementSibling.style.display = 'block';
    this['lastName'].nextElementSibling.innerHTML = "Looks Good!";
    this['lastName'].nextElementSibling.style.color = 'green';
    this['lastName'].nextElementSibling.style.fontSize = "12px";
  }

  // Email
  if((this['email'].value=="")  ||     (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this['email'].value)))
  {
    this['email'].nextElementSibling.innerHTML = "Looks Good!";
    this['email'].nextElementSibling.style.display = 'block';
    this['email'].nextElementSibling.style.color = 'green';
    this['email'].nextElementSibling.style.fontSize = "12px";
  }
  else{
    this['email'].nextElementSibling.style.display = 'block';
    this['email'].nextElementSibling.innerHTML = "Invalid";
    this['email'].nextElementSibling.style.color = 'red';
    this['email'].nextElementSibling.style.fontSize = "12px";
  }

  // Address
  if(this['address'].value.length <= 3)
  {
    this['address'].nextElementSibling.innerHTML = "Invalid";
    this['address'].nextElementSibling.style.display = 'block';
    this['address'].nextElementSibling.style.color = 'red';
    this['address'].nextElementSibling.style.fontSize = "12px";
  }
  else{
    this['address'].nextElementSibling.style.color = 'green';
    this['address'].nextElementSibling.style.display = 'block';
    this['address'].nextElementSibling.innerHTML = "Looks Good!";
    this['address'].nextElementSibling.style.fontSize = "12px";
  }

  // country
  if(this['country'].value == "")
  {
    this['country'].nextElementSibling.innerHTML = "Invalid";
    this['country'].nextElementSibling.style.display = 'block';
    this['country'].nextElementSibling.style.color = 'red';
    this['country'].nextElementSibling.style.fontSize = "12px";
  }
  else{
    this['country'].nextElementSibling.style.display = 'block';
    this['country'].nextElementSibling.innerHTML = "Looks Good!";
    this['country'].nextElementSibling.style.color = 'green';
    this['country'].nextElementSibling.style.fontSize = "12px";
  }

  // state
  if(this['state'].value == "")
  {
    this['state'].nextElementSibling.innerHTML = "Invalid";
    this['state'].nextElementSibling.style.display = 'block';
    this['state'].nextElementSibling.style.color = 'red';
    this['state'].nextElementSibling.style.fontSize = "12px";
  }
  else{
    this['state'].nextElementSibling.style.display = 'block';
    this['state'].nextElementSibling.innerHTML = "Looks Good!";
    this['state'].nextElementSibling.style.color = 'green';
    this['state'].nextElementSibling.style.fontSize = "12px";
  }

  // Zip
  if (!((/^[0-9]*$/.test(this['zip'].value)) && (this['zip'].value.length == 6)))
  {
    this['zip'].nextElementSibling.innerHTML = "Invalid";
    this['zip'].nextElementSibling.style.display = 'block';
    this['zip'].nextElementSibling.style.color = 'red';
    this['zip'].nextElementSibling.style.fontSize = "12px";
  }
  else{
    this['zip'].nextElementSibling.style.display = 'block';
    this['zip'].nextElementSibling.innerHTML = "Looks Good!";
    this['zip'].nextElementSibling.style.color = 'green';
    this['zip'].nextElementSibling.style.fontSize = "12px";
  }

});
