const chapter1 = [

{
bg:"王城.png",
speaker:"寓幽",
right:"A-序-寓.png",
text:"母亲——!"
},

{
bg:"王城.png",
speaker:"寓幽",
right:"A-序-寓.png",
text:"你答应今天陪我的！"
},

{
bg:"王城.png",
speaker:"伊莱娜",
left:"A-序-伊.png",
text:"我可没有忘记。"
},

{
bg:"王城.png",
speaker:"伊莱娜",
left:"A-序-伊.png",
text:"但总要让我先把这些文件处理完吧？"
},

{
bg:"王城.png",
speaker:"云砚",
left:"A-序-云.png",
text:"或者你可以来找我。"
},

{
bg:"王城.png",
speaker:"云砚",
left:"A-序-云.png",
text:"今天我可是专门空出来陪小公主的。"
},

{
bg:"王城.png",
speaker:"寓幽",
right:"A-序-寓.png",
text:"骗人！"
},

{
bg:"王城.png",
speaker:"寓幽",
right:"A-序-寓.png",
text:"爸爸上次也这么说的！"
},

{
bg:"王城.png",
speaker:"寓幽",
right:"A-序-寓.png",
text:"结果转头又跑去找妈妈了！"
},

{
bg:"王城.png",
speaker:"旁白",
text:"那时的寓幽，是整个王宫最受宠爱的孩子。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"她拥有父母的爱。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"拥有兄长的陪伴。"
},

{
bg:"王城.png",
speaker:"旁白",
text:"也拥有一个看似不会结束的幸福童年。"
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

const left = document.getElementById("charLeft");
const right = document.getElementById("charRight");

if(data.left){

    left.src = data.left;
    left.classList.add("show");

}else{

    left.classList.remove("show");

}

if(data.right){

    right.src = data.right;
    right.classList.add("show");

}else{

    right.classList.remove("show");

}

if(data.speaker === "旁白"){
    document.getElementById("speaker").innerText = "";
}else{
    document.getElementById("speaker").innerText = data.speaker;
}

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

const sound =
document.getElementById("typeSound");

box.innerText += text[i];
i++;
sound.currentTime = 0;

sound.play().catch(()=>{});

if(i >= text.length){
clearInterval(typingTimer);
}

},30);
}

// 点击推进
document.getElementById("storyPlayer")
.addEventListener("click",()=>{

const bgm = document.getElementById("bgm");

// 第一次点击开始播放音乐
if(bgm.paused){
    bgm.play();
}

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
document.getElementById("dialogText").innerText =
"——序章結束——";

document.getElementById("fadeOut").style.opacity = "1";

setTimeout(()=>{

window.location.href="A-剧.html";

},1500);

return;
}

loadScene();
typeText();

});