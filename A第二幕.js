const chapter1 = [

{
bg:"王城.png",
speaker:"旁白",
text:"直到那个孩子出生。"
},

{
bg:"王城.png",
speaker:"侍臣",
text:"若是继承问题重新评估……"
},


{
bg:"王城.png",
speaker:"大臣",
text:"或许更适合的是那位新生的王子。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"她第一次意识到。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"“属于自己”的东西，是可以被替代的。"
},

{
bg:"王城.png",
speaker:"寓幽",
text:"……"
},

{
bg:"王城.png",
speaker:"寓幽",
text:"原来……是这样啊。"
}

];

let current = 0;

let typingTimer = null;

window.onload = () => {
loadScene();
typeText();
};

function loadScene(){

const data = chapter1[current];

document.getElementById("speaker").innerText = data.speaker;

// 背景切换
document.getElementById("storyBg").style.backgroundImage =
`url(${data.bg})`;
}

// 打字机效果
function typeText(){

const text = chapter1[current].text;

let i = 0;

const box = document.getElementById("dialogText");
box.innerText = "";

clearInterval(typingTimer);

typingTimer = setInterval(()=>{

box.innerText += text[i];
i++;

if(i >= text.length){
clearInterval(typingTimer);
}

},30);
}

// 点击推进
document.getElementById("storyPlayer")
.addEventListener("click",()=>{

// 如果还在打字 → 直接显示完整
if(document.getElementById("dialogText").innerText
!== chapter1[current].text){

clearInterval(typingTimer);
document.getElementById("dialogText").innerText =
chapter1[current].text;

return;
}

// 下一句
current++;

if(current >= chapter1.length){

document.getElementById("speaker").innerText = "";
document.getElementById("dialogText").innerText = "——序章結束——";

setTimeout(()=>{

window.location.href="A-剧.html";

},1200);

return;
}

loadScene();
typeText();

});