let msgPara = document.querySelector(".msg-para");
let buttons = document.querySelectorAll(".button");
let img = document.querySelector(".img img ");
msgPara.innerText ="";
const clicked = ()=>{
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const value = button.value;
        check(value);
    });
});
};
clicked();
const check =(value)=>{
if(value==="no"){
    console.log(value);
    msgPara.innerText="Really?"
   let newsrc = `https://api-ninjas-data.s3.us-west-2.amazonaws.com/emojis/U%2B1F914.png`;
   img.src = newsrc;
}
}