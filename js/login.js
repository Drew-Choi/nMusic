const id = document.querySelector("input.login-id");
const password = document.querySelector("input.login-pw");
const allText = document.querySelector(".allText");
const loginBtn = document.querySelector(".login-btn");
let regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;


loginBtn.addEventListener("click", function(e){
    allText.innerText = "";
    //일단 클라이언트가 정보를 입력해야 하므로 그 첫 퀘스트를 선사하노나
    if(id.value === "" && password.value === ""){
        //아이디, 비밀번호를 입력하지 않으면
        allText.innerText = "아이디와 비밀번호를 입력해주세요.";
    } else if (id.value === "" && password.value !== "") {
        allText.innerText = "아이디를 입력해주세요.";
    } else if (id.value !== "" && password.value === "") {
        allText.innerText = "비밀번호를 입력해주세요.";
    } else if (regex.test(id.value) === false) {
        allText.innerText = "올바른 이메일이 아닙니다.";
    }
      //4가지 케이스가 모두 아니라면, 아이디와 패스워드를 입력하긴 했으니
      //이제부터는 감별에 들어간다.
    
      else {
      //로그인 정보 불러오기
      //키값으로 로컬스토리지의 제이슨형식을 불러내고-> null값이 아닌지 일단 확인
     let infoGetByLocal = window.localStorage.getItem(`${id.value}`);
      //회원가입여부를 아이디를 키값으로 찾는다. 키가 일치하는게 없다면 Null을 반환하므로
      //null이 나온다면, 회원가입을 유도하던가, 아이디 확인을 요청
     if (infoGetByLocal === null) {
        allText.innerText = 
        `아이디가 잘못되었거나, 회원정보가 없습니다.
         아이디 혹은 회원가입 여부를 확인해주세요.`;
      } else {
        //null값이 아니고 키값이 있다면 비밀번호가 맞는지 확인해야함.
       //앞에 받은 제이슨자료를 다시 객체형으로 바꾸기
       let infoParseObj = JSON.parse(infoGetByLocal);
        //불러낸 자료에서 원하는 키로 분류, 이걸 활용하여 로그인 할 수 있도록 함.
        let getId = infoParseObj.id;
        let getPw = infoParseObj.pw
        //아이디는 키 값과 같다. null이 아니라는 것은 id가 100% 일치한다는 것
        //그래서 그 다음 미션은 비번만 일치하면 되는 것이다.
        if (id.value === getId && password.value != getPw) {
            allText.innerText = "비밀번호를 잘못 입력 하였습니다.";
        } else if (id.value === getId && password.value === getPw){
            //아이디가 111이고 비밀번호가 111이면 통과
            location.replace("./intro.html")
        }
      }
    }
})