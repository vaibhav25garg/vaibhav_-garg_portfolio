const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  header.classList.toggle('.sticky', window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.oneclick = () =>{
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('act');
}

function sendMail(){
  var params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  }

  console.log("function call");
  
  const serviceID = "service_avbkn5m";
  const templateID = "template_2g99uxm";

  emailjs.send(serviceID,templateID,params)
  .then(
    (res)=>{
      document.getElementById("name").value = "",
      document.getElementById("email").value = "",
      document.getElementById("message").value = "",
      console.log(res);
      alert("your message sent successfully");
    }
  )
  .catch((err) => console.log(err));
}

