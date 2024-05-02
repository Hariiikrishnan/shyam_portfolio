
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