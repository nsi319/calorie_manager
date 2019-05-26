localStorage.clear();                // to clear exixting ls
function save_data() {
Storage.setItem("Sai_inidata","no");        // create intial values
localStorage.setItem("Pai_inidata","no");
localStorage.setItem("entryvalue",1);        // entry value
document.getElementById("result").innerHTML="INITIALIZATION SUCCESSFULL";
}