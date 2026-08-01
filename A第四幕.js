const chapter1 = [

{
bg:"王城.png",
speaker:"旁白",
text:"而另一边。"
},

{
bg:"王城.png",
speaker:"篁",
text:"她一个人在外面。"
},


{
bg:"王城.png",
speaker:"篁",
text:"不安全。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"于是，王子做了一个愚蠢的决定。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"他没有带护卫。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"也没有通知任何人。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"也没有通知任何人。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"他去找她了。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"三天后。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"他失踪了。"
},

{
bg:"王城.png",
speaker:"老虎",
text:"终于等到王室分裂的机会了。"
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