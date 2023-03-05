$(document).ready(function(){
  
  const audioEffect = document.querySelector("audio")
  const divLine = document.querySelector(".lineEffect");
  const containerEl = document.querySelector(".container");
  const introLayoutEl = document.querySelector(".introlayout");
  const intro1El = document.querySelector(".intro1");
  const intro2WrapEl = document.querySelector(".intro2__wrap");
  const intro2El = document.querySelector(".intro2");
  const intro3El = document.querySelector(".intro3");


  const individualLineEl = containerEl.children;

    audioEffect.play();
    audioEffect.volume = 1;
    introLayoutEl.setAttribute("style", "animation: fade-out 1s 8s forwards; display: block;");
    intro1El.setAttribute("style", "animation-name: intro-in, fade-out; animation-duration: 0.15s, 1s; animation-delay: 0s, 2.5s; animation-fill-mode: both, forwards; animation-timing-function: ease-in, ease;");
    intro2El.setAttribute("style", "animation-name: intro-in, intro-reverse; animation-duration: 0.15s, 0.15s; animation-delay: 0.15s, 2.35s; animation-fill-mode: both, forwards; animation-timing-function: linear, linear;");
    intro3El.setAttribute("style", "animation-name: intro-in, intro-reverse; animation-duration: 0.15s, 0.15s; animation-delay: 0.3s, 2.2s; animation-fill-mode: both, forwards; animation-timing-function: ease-out, ease-in;");
    
    function lineEffect () {
      for (let i = 0; i < 10; i += 1) {
        let cloneLine = divLine.cloneNode(false);
        containerEl.prepend(cloneLine);
      }
    
      for (let x = 0; x < 11; x += 1) {
        individualLineEl[x].setAttribute("style", `animation-name: random-position${x}, fade-in;
        animation-duration: 3s, 1s; animation-fill-mode: both, forwards;
        animation-timing-function: linear, ease; animation-iteration-count: infinite, 1`);
      }
    }
    setTimeout(lineEffect, 2500);
    
    function layoutDisplayNone () {
      introLayoutEl.setAttribute("style", "display: none");
      introLayoutEl.replaceChildren();

      location.replace("./main.html");
    }
    setTimeout(layoutDisplayNone, 9500);
    

  const skipBtnEl = document.querySelector(".btn-secondary");
  skipBtnEl.addEventListener("click", () => {
  introLayoutEl.removeAttribute("style")
  introLayoutEl.replaceChildren();
  introLayoutEl.style.display = "none";
  location.replace("./main.html")
  })
})