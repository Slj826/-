const params =
new URLSearchParams(window.location.search);

document.addEventListener("copy", (event) => event.preventDefault());
document.addEventListener("cut", (event) => event.preventDefault());
document.addEventListener("paste", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && ["c", "u", "s"].includes(event.key.toLowerCase())) {
        event.preventDefault();
    }
});

const playIntro =
params.get("intro");

const introScreen =
document.getElementById("intro-screen");

if(playIntro && introScreen){

    document.body.classList.add("intro-lock");

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            introScreen.remove();

            document.body.classList.remove("intro-lock");

            const pageContent =
            document.querySelector(".page-content");

            if(pageContent){
                pageContent.classList.add("show");
            }

        },5000);

    });

}else{

    if(introScreen){
        introScreen.remove();
    }

    document.body.classList.remove("intro-lock");

    const pageContent =
    document.querySelector(".page-content");

    if(pageContent){
        pageContent.classList.add("show");
    }

}
