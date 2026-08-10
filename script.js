const params =
new URLSearchParams(window.location.search);

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
