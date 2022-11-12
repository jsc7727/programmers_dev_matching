import ContentTitle from "./../components/ContentTitle.js";

const getLabel = ({ labelFor, labelText }) => {
  return `<label for=${labelFor}>${labelText}<span class="mark">(필수*)</span></label>`;
};

function SignupPage({ $target, initialState }) {
  this.state = initialState;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.$main = document.createElement("main");
  this.$main.id = "page_content";

  this.$form_container = document.createElement("form");
  this.$form_container.id = "form_container";
  this.$main.append(this.$form_container);

  this.$form_container.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = {};
    ["name", "email", "nickname", "role", "mbti"].map((v) => {
      const id = e.target[v].id;
      const value = e.target[v].value;
      userData[id] = value;
    });
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    const isDuplicate = personalInfo.some((v) => {
      return v.email === userData.email || v.nickname === userData.nickname;
    });
    if (!isDuplicate) {
      personalInfo.push({ idx: personalInfo.length, ...userData });
      localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
      const cardStatus = JSON.parse(localStorage.getItem("cardStatus"));
      cardStatus.push({
        idx: personalInfo.length,
        status: "card",
      });
      localStorage.setItem("cardStatus", JSON.stringify(cardStatus));
      alert("성공적으로 등록되었습니다.");
    } else {
      alert("이메일 혹은 닉네임이 이미 등록되어 있습니다.");
    }
  });

  new ContentTitle({
    $target: this.$main,
    title: " Hello, GreatPeoPle!",
  });

  this.render = () => {
    $target.appendChild(this.$main);
    const mbtiList = [
      "ENFJ",
      "ENTJ",
      "ENFP",
      "ENTP",
      "ESFJ",
      "ESTJ",
      "ESFP",
      "ESTP",
      "INFJ",
      "INTJ",
      "INFP",
      "INTP",
      "ISFJ",
      "ISTJ",
      "ISFP",
      "ISTP",
    ];
    this.$form_container.innerHTML = `
      <span class="form_elem">
          ${getLabel({ labelFor: "name", labelText: "이름" })}
          <input 
            id="name" 
            placeholder="이름" 
            required pattern="^[ㄱ-ㅎ가-힣]{2,4}$"
            title="2~4 글자의 한글만 입력이 가능합니다."
          />
      </span>
      <span class="form_elem">
          ${getLabel({ labelFor: "email", labelText: "이메일" })}
          <input 
            id="email" 
            placeholder="이메일" 
            required pattern="^[a-z0-9]+@grepp.co$"
            title="이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다." 
          />
      </span>
      <span class="form_elem">
          ${getLabel({ labelFor: "nickname", labelText: "닉네임" })}
          <input 
            id="nickname" 
            placeholder="닉네임" 
            required pattern="^[a-zA-Z]{3,10}$"
            title="대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다."
          />
      </span>
      <span class="form_elem">
          ${getLabel({ labelFor: "role", labelText: "직군" })}
          <select id="role" name="role" required>
              <option value="">직군을 선택해주세요</option>
              <option value="frontend">프론트엔드</option>
              <option value="backend">백엔드</option>
              <option value="fullstack">풀스택</option>
          </select>
      </span>
      <span class="form_elem">
          ${getLabel({ labelFor: "role", labelText: "직군" })}
          <select id="mbti" name="mbti">
              <option value="">MBTI를 선택해주세요</option>
              ${mbtiList.map((mbti) => {
                return `<option value="${mbti}">${mbti}</option>`;
              })}
          </select>
      </span>
      <span class="form_elem">
          <button type="submit">등록</button>
      </span>
    `;
  };
}
export default SignupPage;
