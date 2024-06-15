my_leads = [];

const txt = document.getElementById("inputs");

const su = document.getElementById("input-btn");

const kul = document.getElementById("ulist");

const clr = document.getElementById("clear");

const tab_btn = document.getElementById("tab");

tab_btn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    my_leads.push(tabs[0].url);
    localStorage.setItem("my_leads-1", JSON.stringify(my_leads));
    addlinks(my_leads);
  });
});

let localStorage_val = JSON.parse(localStorage.getItem("my_leads-1"));

if (localStorage_val) {
  my_leads = localStorage_val;
  console.log(localStorage_val);
  addlinks(my_leads);
}

su.addEventListener("click", function () {
  my_leads.push(txt.value);
  localStorage.setItem("my_leads-1", JSON.stringify(my_leads));
  txt.value = "";
  addlinks(my_leads);
});

function addlinks(leads) {
  let listitems = "";
  for (let i = 0; i < leads.length; i++) {
    listitems += `<li> 
         <a target="_blank" class="kiwi" href="${leads[i]}">${leads[i]}
         </a>
         </li>`;
  }
  kul.innerHTML = listitems;
}

clr.addEventListener("dblclick", function () {
  localStorage.removeItem("my_leads-1");
  my_leads = [];
  addlinks(my_leads);
});
