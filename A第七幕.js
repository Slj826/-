const chapter1 = [

{
bg:"王城.png",
speaker:"旁白",
text:"十九岁。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"王国只剩下她。"
},


{
bg:"王城.png",
speaker:"大臣",
text:"请陛下登基。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"她抬起头。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"没有人再替她做选择了。"
},

{
bg:"王城.png",
speaker:"寓幽",
text:"……"
},

{
bg:"王城.png",
speaker:"寓幽",
text:"我明白了。"
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