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
  this.$form_container = document.createElement("div");
  this.$form_container.id = "form_container";
  this.$main.append(this.$form_container);
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
          <input id="name" placeholder="이름">
      </span>
      <span class="form_elem">
          ${getLabel({ labelFor: "email", labelText: "이메일" })}
          <input id="email" placeholder="이메일">
      </span>
      <span class="form_elem">
          ${getLabel({ labelFor: "nickname", labelText: "닉네임" })}
          <input id="nickname" placeholder="닉네임">
      </span>
      <span class="form_elem">
          ${getLabel({ labelFor: "role", labelText: "직군" })}
          <select id="role" name="role">
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
