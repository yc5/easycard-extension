const cardIdInput = document.getElementById("cardIdInput");
const birthdayInput = document.getElementById("birthdayInput");
const periodRadios = document.querySelectorAll("input[name=date]");

periodRadios.forEach((e) => {
  var label = document.createElement("label");
  label.textContent =
    e.nextSibling.nodeValue == "自訂時間" ? "近一年" : e.nextSibling.nodeValue;
  label.setAttribute("for", e.id);
  e.parentNode.replaceChild(label, e.nextSibling);
});

function setDate1y() {
  var dt = new Date();
  dt.setFullYear(dt.getFullYear() - 1);
  console.log(dt);
  document.getElementById("START_DATE").value = `${dt.getFullYear()}-${
    dt.getMonth() + 1
  }-${dt.getDate()}`;
}
document.getElementById("date1y").addEventListener("click", setDate1y);
document.getElementById("imgcode").setAttribute("width", "100%");
document.getElementById("imgcode").setAttribute("height", null);
document.querySelector(".checkword").setAttribute("type", "number");
document.querySelector(".checkword").focus();

document.getElementById("date1w").checked = null;
document.getElementById("date1y").checked = true;
setDate1y();

const storage = chrome.storage.local;

chrome.storage.local.get(null, (data) => {
  console.log(data);
  if ("cardid" in data) {
    cardIdInput.value = data.cardid;
  }
  if ("birthday" in data) {
    birthdayInput.value = data.birthday;
  }
});

cardIdInput.addEventListener("input", () => {
  storage.set({
    cardid: cardIdInput.value,
  });
});
birthdayInput.addEventListener("input", () => {
  storage.set({
    birthday: birthdayInput.value,
  });
});
document.querySelector(".checkword").addEventListener("keypress", (e) => {
  if (e.target.value.length > 5) {
    e.preventDefault();
  }
});
document.querySelector(".checkword").addEventListener("keyup", (e) => {
  if (e.target.value.length == 6) {
    e.target.style.backgroundColor = "greenyellow";
    window.document.forms[0].submit();
  }
});
function displayAllPgs() {
  document.querySelectorAll("[id^=pg]").forEach((e) => {
    e.style.display = null;
  });
}
setTimeout(displayAllPgs, 2000);
