export const validEmail = () => {
    const email = document.getElementById("email").value;
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    return !!email.match(emailRegex);
  };
  
  export const collectUserDetails = () => {
      const userName = document.getElementById('userName').value;
      const password = document.getElementById('password').value;
      const email = document.getElementById('email').value;
      return {userName, password, email}
  }
  
  export const validPassword = () => {
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*\d)(?=.*\W).{8,}$/g;
    return !!password.match(passwordRegex);
  };
  
  export const checkFieldsMatch = ({first, second}) => {
    const firstValue = document.getElementById(`${first}`).value;
    const secondValue = document.getElementById(`${second}`).value;
    return (firstValue === secondValue)
  };
  