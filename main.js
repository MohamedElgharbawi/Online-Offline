let h2 = document.querySelector("h2");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
function online() {
    btn.style.display = "none";
    ul.style.display = "none";
    h2.innerHTML = "Online-Now";
    h2.style.color = 'green';
}
function offline() {
    ul.style.display = "block";
    h2.innerHTML = "Offline-Now";
    h2.style.color = "gray";
    btn.style.display = "block";
}
window.onload = _ => {
    if (window.navigator.onLine) online();
}
addEventListener("online",  _  => online());
addEventListener("offline", _ => offline());
btn.onclick =  _ => window.location.reload();