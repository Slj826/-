const chapter1 = [

{
bg:"王城.png",
speaker:"旁白",
text:"她是王国最受宠爱的公主。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"也是未来注定的继承人。"
},

{
bg:"王城.png",
speaker:"雲硯",
text:"有一天，这个国家会交到你手上。"
},

{
bg:"王城.png",
speaker:"寓幽",
text:"那我会做得很好，对吗？"
},

{
bg:"王城.png",
speaker:"伊萊娜",
text:"你已经做得很好了。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"她相信这一切。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"就像相信太阳会每天升起。"
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

setTimeout(()=>{

window.location.href="A-剧.html";

},800);

return;
}

loadScene();
typeText();

});