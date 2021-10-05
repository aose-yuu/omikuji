let userName;
let userResult;

userName = prompt("お名前を教えて下さい。");

if (userName == "") {
    userName = "名無し";
}

document.getElementById("name").innerHTML = userName;

let randNum = Math.floor(Math.random() * 5);

switch (randNum) {
    case 0:
        userResult = "大吉";
        break;

    case 1:
        userResult = "中吉";
        break;

    case 2:
        userResult = "小吉";
        break;

    case 3:
        userResult = "吉";
        break;

    default:
        userResult = "凶";
}

document.getElementById("result").innerHTML = userResult;
