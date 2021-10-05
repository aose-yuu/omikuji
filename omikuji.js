let userName;
let userResult;

userName = prompt("お名前を教えて下さい。");
document.getElementById("name").innerHTML = userName;

let randNum = Math.floor(Math.random() * 5);

if (randNum == 0) {
    userResult = "大吉";
}
if (randNum == 1) {
    userResult = "中吉";
}
if (randNum == 2) {
    userResult = "小吉";
}
if (randNum == 3) {
    userResult = "吉";
}
if (randNum == 4) {
    userResult = "凶";
}
