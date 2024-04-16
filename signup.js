const signUp = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let rePassword = document.getElementById("re-enter").value;

  if (username === "" || password === "") {
    alert("Username and password cannot be empty");
    return;
  }

  if (password !== rePassword) {
    alert("Passwords do not match");
    return;
  }

  let user = {
    username: username,
    password: password,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Đăng ký thành công");
  window.location.href = "./login.html";
};

const login = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Username and password cannot be empty");
    return;
  }

  let user = localStorage.getItem(username);
  let data = JSON.parse(user);

  if (user == null) {
    alert("Vui lòng nhập lại ");
  } else if (username == data.username && password == data.password) {
    alert("dang nhap thanh cong");
    window.location.href = "index.html";
  } else {
    alert("dang nhap that bai");
  }
};
