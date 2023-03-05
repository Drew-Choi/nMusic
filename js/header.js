  $(".search__icon").click(() => {
    if($(".search").hasClass("on") !== true) {
      $(".search").addClass("on");
      $(".search__icon").addClass("on");
      $(".search").attr("placeholder", "노래제목,  가수,  장르");
      if(matchMedia("screen and (min-width: 360px) and (max-width: 415px)").matches){
        $(".mobile-menus").addClass("on");
        $(".mobile__check").addClass("on");
      }
    }
  })

  $(window).mousedown(function(e) {
    let eTargetId = e.target.id
    if(eTargetId !== "no-hidden") {
      $(".search").removeClass("on");
      $(".search__icon").removeClass("on");
      $(".search").removeAttr("placeholder", "노래제목,  가수,  장르");
      if(matchMedia("screen and (min-width: 360px) and (max-width: 415px)").matches){
        $(".mobile-menus").removeClass("on");
        $(".mobile__check").removeClass("on");
      }
    }
  })

  $(".mobile__check").click (() => {
   $(".mobile-menus").removeClass("on")
   $(".mobile-check").removeClass("on")
   $(".search").removeClass("on");
   $(".search__icon").removeClass("on");
   $(".search").removeAttr("placeholder", "노래제목,  가수,  장르");
  })

for (let i = 1; i <= 4; i += 1) {
  let profileIcons = document.querySelector(`.icon${i}`);
  profileIcons.setAttribute("style", `background-image: url("../img/netflix_logo/nav_logo/netflixMusic_default-login${i}.png")`);
}

// 헤더 스크롤이벤트
//스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
// window.addEventListener('scroll', () => { 
//   console.log(window.scrollX, window.scrollY);
// });
//본코드

window.addEventListener('scroll', () => {
  const innerEl = document.querySelector("header > .inner");
  if(window.scrollY > 50) {
    innerEl.setAttribute("style", "background-color: black;");
  } else {
    innerEl.removeAttribute("style");
  }
})

//로그아웃 dom
//replace기능은 뒤로 가기가 안되서 로그아웃시에만 사용
let logoutEl = document.querySelector(".logoout__text");
let logoutLogoEl = document.querySelector(".logout__logo");

logoutEl.addEventListener("click", () => {
  location.replace("./index.html");
})

logoutLogoEl.addEventListener("click", () => {
  location.replace("./index.html");
})