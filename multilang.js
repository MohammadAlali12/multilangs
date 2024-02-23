let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let about = document.getElementById("about");
let contact = document.getElementById("contact");






arabic.onclick = () => {
    setlanugage("arabic");
    localStorage.setItem("lang","arabic");

};

english.onclick = () => {
    setlanugage("english");
    localStorage.setItem("lang","english");



};
onload = () =>{ setlanugage(localStorage.getItem("lang")) }

function setlanugage(getlanugage){
    if(getlanugage === "arabic"){
        title.innerHTML = "المبرمج محمد";
        text1.innerHTML = "  أهلاً بك في موقعي انا محمد العلي"
        about.innerHTML = " حولنا";
        text2.innerHTML = " أحب تعلم البرمجة";
        contact.innerHTML = " تواصل معنا ";



    } 
    else if(getlanugage === "english"){
        title.innerHTML = "coder Mohammad ";
        text1.innerHTML = "welcome in my Website I am Mohammad Alali";
        about.innerHTML = " About US";
        text2.innerHTML = " I love learn programming ";
        contact.innerHTML = " Contact With US ";


        




    }


}