//Dom
const idEl = document.querySelector(".login-id");
const pwEl = document.querySelector("#password__input");
const pw2El = document.querySelector("#password__check");
const joinConfirm = document.querySelector("#join__confirm");
const pwModalEl = document.querySelector("#pw_modal-wrongPw");
const emptyModal = document.querySelector("#pw_modal-empty");
const emailWrongModal = document.querySelector("#pw_modal-wrongEmail");
const loginConfirm = document.querySelector("#pw_modal-joinConfirm");
const formEl = document.querySelector("#join-form");
//이메일 체크용 정규식
let regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//form이 받은 자료를 초기화 하지 않게 잠시 초기화를 멈춰주는 JS이벤트
//why? -> action기능을 통해 서버로 바로 보내야하지만, 우린 서버 작업을 안했기 때문에
//임시로 로컬스토리지를 활용해야한다. 그렇기 위해 자료들을 붙잡아 놓아야 한다.
function onPasswordCheck (event) {
  event.preventDefault();
//초기화를 잠시 멈추었을 때 실행할 기능들, 변수에 인풋값들을 담는다.
  let passInput = pwEl.value;
  let passCheck = pw2El.value;
  let idInput = idEl.value;
//아래는 회원가입시 클라이언트가 요상하게 입력하는 걸 막기 위한 것
//입력 오류시 해당 모달들을 띄울 수 있게 각자 상황에 맞게 조건문을 줌
  if (passInput !== "" && passCheck !== "" && idInput !=="") {
    if (regex.test(idInput)) {
      if(passInput === passCheck) {
        //여기는 앞에 모든 회원가입 조건을 true로 통과한 마지막 단계
        //최종적으로 여기서 로컬 스토리지로 자료를 저장하고, 클라이언트가 로그인 페이지로 넘어갈 수 있게 해줌
        loginConfirm.setAttribute("style", "display: flex;");
        //로컬 스토리지로 통과한 자료들을 담는 기능들
        //객체화 시키고
        let membershipInfo = {
          id: idInput,
          pw: passInput,
        }
        //객체를 제이슨화시켜 변수에 담고->
        let infoChangeJason = JSON.stringify(membershipInfo);
        console.log(infoChangeJason);
        //로컬디스크에 저장->
        window.localStorage.setItem(`${idInput}`, infoChangeJason);
        console.log(window.localStorage);
      } else {
        pwModalEl.setAttribute("style", "display: flex;");
      }

    } else {
      emailWrongModal.setAttribute("style", "display: flex;");
    }
 
  } else {
      emptyModal.setAttribute("style", "display: flex;");
  }
}

  
formEl.addEventListener("submit", onPasswordCheck);