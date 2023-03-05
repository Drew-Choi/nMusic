$(document).ready(function(){

  //데이터베이스
let arryAlbum = [
  { img: "1", name: "나쁜X", item: "dance", artist: "비비(BIBI)" },
  { img: "2", name: "Love or Die", item: "kpop" ,artist: "TNX"},
  { img: "3", name: "Hype boy", item: "kpop" ,artist: "NewJeans"},
  { img: "4", name: "A&W", item: "pop",artist: "Lana Del Rey" },
  { img: "5", name: "ditto", item: "kpop",artist: "NewJeans" },
  { img: "6", name: "죽일 놈 (Guilty)", item: "hiphop",artist: "다이나믹 듀오" },
  { img: "7", name: "그라데이션", item: "kpop", artist: "10CM"},
  { img: "8", name: "VILLAIN DIES", item: "kpop" ,artist: "(여자) 아이들"},
  { img: "9", name: "Teddy Bear", item: "dance",artist: "STAYC" },
  { img: "10", name: "After Like", item: "kpop",artist: "IVE" },
  { img: "11", name: "오르트구름", item: "kpop" ,artist: "윤하"},
  { img: "12", name: "자격지심 (Feat. ZICO)", item: "hiphop" ,artist: "BE'O"},
  { img: "13", name: "85mm", item: "classic" ,artist: "Ludovico Einaudi(루도비코 에이나우디)"},
  { img: "14", name: "캔디", item: "kpop",artist: "NCT DREAM" },
  { img: "15", name: "Nxde", item: "kpop" ,artist: "(여자)아이들"},
  { img: "16", name: "Pink Venom", item: "kpop" ,artist: "BLACKPINK"},
  { img: "17", name: "It's Not Unusual", item: "classic" ,artist: "Hauser" },
  { img: "18", name: "건물 사이에 피어난 장미 (Rose Blossom)", item: "dance",artist: "H1-KEY" },
  { img: "19", name: "I Feel Like Dancing", item: "pop" ,artist: "Jason Mraz"},
  { img: "20", name: "Best Disaster", item: "pop",artist: "Cuco" },
  { img: "21", name: "The River", item: "classic" ,artist: "정재일"},
  { img: "22", name: "TRUSTFALL", item: "pop" ,artist: "P!nk"},
  { img: "23", name: "NOT SORRY (Feat. pH-1) (Prod. by Slom)", item: "hiphop",artist: "이영지" },
  { img: "24", name: "괴짜 (Freak)", item: "hiphop",artist: "지코" },
  { img: "25", name: "연애소설 (Feat. 아이유)", item: "hiphop" ,artist: "에픽하이"},
  { img: "26", name: "Right Here (Feat. Benny Sings)", item: "pop" ,artist: "M.I.L.K"},
  { img: "27", name: "파이팅 해야지 (Feat. 이영지)", item: "dance",artist: "부석순" },
  { img: "28", name: "ANTIFRAGILE", item: "dance",artist: "LE SSERAFIM (르세라핌)"},
  { img: "29", name: "WHEN I MOVE", item: "dance" ,artist: "카라"},
  { img: "30", name: "SMILEY (Feat. BIBI)", item: "dance",artist: "YENA (최예나)" },
];

//chart-albumimg
const albumWrap = document.querySelector(".inner");
const albumImg = document.querySelectorAll(".chart-list .--album-img");//앨범 이미지
const albumLen = albumImg.length;

for(let i = 0; i < albumLen; i++){
  const albumPic = albumImg[i];
  albumPic.style.backgroundImage = `url("../img/main_album/main_album${i+1}.png")`;
  const chartList = document.querySelectorAll(".chart-list");
  chartList[i].querySelector(".--text-box").querySelector(".album-title").textContent = arryAlbum[i].name;
  chartList[i].querySelector(".--text-box").querySelector(".album-sub-title").textContent = arryAlbum[i].artist;
  // albumPic.addEventListener("click",function(e){
  //   console.log(e.target.parentNode.parentNode.children[2].children[0]);
  // })
}



//chart-num
const albumNumAll = document.querySelectorAll(".chart-wrap .inner .--num");//숫자 모두 선택
const albumNumLen = albumNumAll.length; //15

for(let i = 0; i < albumNumLen; i++){
  albumNumAll[i].textContent = i+1;
}

//chart-hover선택
const albumListAll = document.querySelectorAll(".chart-list") //리스트 목록 랩
const albumHoverAll = document.querySelectorAll(".chart-list .--album-img .beforeHover");//hover
//chart-list 클릭 시 하단 플레이어 show 
const audioPlay = document.querySelector(".chart-list-audio"); //chart-list-audio


for (let i = 0; i < albumListAll.length; i++){
  albumListAll[i].addEventListener("mouseover", function(){
    albumHoverAll[i].setAttribute("style","display:block;");
  });
  albumListAll[i].addEventListener("mouseout", function(){
    albumHoverAll[i].setAttribute("style","display:none;");
  }); 
}

const audioArr = ["cardio", "groove", "happy", "light", "lily", "limes", "pop", "swing"];
const audioControl = document.querySelector("ul.control");
let temp ="temp";
//top30 클릭 시
for(let i=0; i<albumHoverAll.length; i++){
  albumHoverAll[i].addEventListener("click",function(e){
    
    audioPlay.setAttribute("style","display:block; visibility:initial; transform:scaleX(1);");
    
    temp=audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-title").textContent;
    audioPlay.querySelector(".audio-album").querySelector(".audio-album-img").textContent ="";
    audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-title").textContent = "";
    audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-sub-title").textContent="";
    
    const img = document.createElement("img");
    img.src= e.target.parentNode.parentNode.children[0].style.backgroundImage;
    img.src = img.src.substring(32,);
    img.src = img.src.replace("%22)","");
    audioPlay.querySelector(".audio-album").querySelector(".audio-album-img").append(img);
    // console.log(e.target.parentNode.parentNode.querySelector(".--text-box").querySelector(".album-title").textContent);
    audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-title").textContent = e.target.parentNode.parentNode.querySelector(".--text-box").querySelector(".album-title").textContent;
    audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-sub-title").textContent = e.target.parentNode.parentNode.querySelector(".--text-box").querySelector(".album-sub-title").textContent;
    
    if(audioPlay.querySelector("audio")===null){
      
      audioPlay.append(audio);
      audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
      audio.play();
      audioControl.querySelector("li.play").classList.add("hidden");
      audioControl.querySelector("li.pause").classList.remove("hidden");
    }else if(temp == e.target.parentNode.parentNode.querySelector(".--text-box").querySelector(".album-title").textContent){
      if(audioControl.querySelector("li.play").className=="play hidden"){
        audioControl.querySelector("li.play").classList.remove("hidden");
        audioControl.querySelector("li.pause").classList.add("hidden");
        audio.pause();
      }else{
        audioControl.querySelector("li.play").classList.add("hidden");
        audioControl.querySelector("li.pause").classList.remove("hidden");
        audio.play();
      }
    }
    else{
      audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
      audioControl.querySelector("li.play").classList.add("hidden");
      audioControl.querySelector("li.pause").classList.remove("hidden");
      audio.play();
    }
    audio.addEventListener("timeupdate", updateProgress); 
  });
}

//급상승 클릭시
const btnModal = document.querySelectorAll(".album-box");
for(let i=0; i<btnModal.length; i++){
  btnModal[i].addEventListener("click", function(e){
    
    
    audioPlay.setAttribute("style","display:block; visibility:initial; transform:scaleX(1);");
    
    temp = audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-title").textContent;
    audioPlay.querySelector(".audio-album").querySelector(".audio-album-img").textContent ="";
    audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-title").textContent = "";
    audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-sub-title").textContent ="";

    audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-title").textContent = e.target.getAttribute("name");
    audioPlay.querySelector(".audio-album").querySelector(".--text-box").querySelector(".album-sub-title").textContent = e.target.getAttribute("artist");
    
    const img = document.createElement("img");
    img.src= e.target.style.backgroundImage;
    img.src = img.src.substring(32,);
    img.src = img.src.replace("%22)","");
    audioPlay.querySelector(".audio-album").querySelector(".audio-album-img").append(img);

    if(audioPlay.querySelector("audio")===null){
      audioPlay.append(audio);
      audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
      audio.play();
      audioControl.querySelector("li.play").classList.add("hidden");
      audioControl.querySelector("li.pause").classList.remove("hidden");
    }else if(temp == e.target.getAttribute("name")){
      if(audioControl.querySelector("li.play").className=="play hidden"){
        audioControl.querySelector("li.play").classList.remove("hidden");
        audioControl.querySelector("li.pause").classList.add("hidden");
        audio.pause();
      }else{
        audioControl.querySelector("li.play").classList.add("hidden");
        audioControl.querySelector("li.pause").classList.remove("hidden");
        audio.play();
      }
    }
    else{
      audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
      audioControl.querySelector("li.play").classList.add("hidden");
      audioControl.querySelector("li.pause").classList.remove("hidden");
      audio.play();
    }
    audio.addEventListener("timeupdate", updateProgress); 
  })
}

// audio bar 기능
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const audio = document.createElement("audio");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");


function updateProgress(e){
  const {duration, currentTime} = e.srcElement;
  const progressPer = (currentTime / duration) * 100;
  
  progress.style.width = `${progressPer}%`;
  if(progressPer===100){
    audioControl.querySelector("li.play").classList.remove("hidden");
    audioControl.querySelector("li.pause").classList.add("hidden");
      audio.currentTime = 0;
  }
}

function changeProgress(e){

  const width = document.querySelector("body").clientWidth;
  const offsetx = e.offsetX;
  const duration = audio.duration; //전체길이
  audio.currentTime =(offsetx / width) * duration; //현재길이
}
progressContainer.addEventListener("click", changeProgress);

playBtn.addEventListener("click",function(){
    audio.play();
    audioControl.querySelector("li.play").classList.add("hidden");
    audioControl.querySelector("li.pause").classList.remove("hidden");
})
pauseBtn.addEventListener("click",function(){
    audio.pause();
    audioControl.querySelector("li.play").classList.remove("hidden");
    audioControl.querySelector("li.pause").classList.add("hidden");
})




//Top10 랭크 스와이퍼
const slide = document.querySelectorAll(".rank-wrapper .album-box"); // 배열로 가지고 옴
const len = slide.length;
for (let i = 0; i < len; i++) {
  // 해당 부분으로 인해서 따로 DOM 요소를 생성해 붙일 필요 X
  // DOM을 만들어서 붙여주게 되면 최초 All 탭에서 항목이 안 보이는 경우가 생기므로 아래와 같이 처리

  // 사진 부분 일괄 적용
  const pic = slide[i];

  if (i < 30) {
    pic.setAttribute("name", `${arryAlbum[i].name}`);
    pic.setAttribute("artist", `${arryAlbum[i].artist}`);
    pic.style.backgroundImage = `url("../img/main_album/main_album${arryAlbum[i].img}.png")`;
    pic.style.boxShadow = `0px 0px 1px #e6e6e6`;
  } else if (i >= 30) {
    pic.setAttribute("name", `${arryAlbum[i - 30].name}`);
    pic.setAttribute("artist", `${arryAlbum[i - 30].artist}`);
    pic.style.backgroundImage = `url("../img/main_album/main_album${arryAlbum[i - 30].img}.png")`;
  }
}

for (let i = 0; i < slide.length; i++) {
  slide[i].addEventListener("mouseover", function (e) {
    slide[i].textContent = "";
    const hoverBox = document.createElement("div");
    hoverBox.setAttribute("class", "hoverBox");
    slide[i].append(hoverBox);
    hoverBox.textContent = `${e.target.getAttribute("name")}`;
  });
  slide[i].addEventListener("mouseout", function (e) {
    slide[i].textContent = "";
  });
}

logoutEl.addEventListener("click", () => {
  location.replace("./index.html");
})

logoutLogoEl.addEventListener("click", () => {
  location.replace("./index.html");
})


})
