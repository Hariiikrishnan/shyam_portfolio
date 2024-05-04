
var sideBar = document.getElementsByClassName("sideBarMenu")[0];
// Hamburger Menu Functions
 function showSideBar(){
  console.log("hello")
  sideBar.classList.add("show");
}
function closeSideBar(){
  console.log("Closing")
   sideBar.classList.add("close");
   setTimeout(()=>{
     sideBar.classList.remove("show");
     sideBar.classList.remove("close");
     
  },400)
 }


// var user_name = document.getElementsByClassName("name")[0].value;
// var mail = document.getElementsByClassName("mail")[0].value;
// var msg = document.getElementsByClassName("msg")[0].value;
// console.log(document.getElementsByClassName("name")[0]);
// console.log(document.getElementsByClassName("name")[0].value);
function sendMail(){
  //  console.log(document.getElementsByClassName("name")[0].value);
  //  console.log(document.getElementsByClassName("mail")[0].value);
  //  console.log(document.getElementsByClassName("msg")[0].value);
   var usr_name = document.getElementsByClassName("name")[0].value;
   var mail = document.getElementsByClassName("mail")[0].value;
  var msg = document.getElementsByClassName("msg")[0].value;
  console.log(usr_name);
  console.log(mail);
  console.log(msg);
  window.location = `mailto:shyam2lca@gmail.com?subject=From%20${usr_name}&body=${msg}`;
 }