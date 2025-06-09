var chs = document.querySelectorAll("#char");
var wds = document.querySelectorAll(".as");
var ico = document.querySelectorAll("#navv i");
var hs = document.querySelectorAll("h3");
var nav = document.getElementById("navv");
var niu = document.querySelectorAll("#yy");
var mid = document.getElementById("mid");
var sects = document.querySelectorAll("#sect");
const firebaseConfig = {
  apiKey: "AIzaSyCZldly3sOYzi6fTYsrvXZeYbrRX3Rt3Gk",
  authDomain: "ayaan-shakoor.firebaseapp.com",
  projectId: "ayaan-shakoor",
  storageBucket: "ayaan-shakoor.appspot.com",
  messagingSenderId: "1079940003778",
  appId: "1:1079940003778:web:9c4c5b3d489c379e1e485b",
  measurementId: "G-BM06BS9RYR",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var stext =
  '    <div class="as">18 yrs old</div>\
<div class="as">Web Dev</div>\
<div class="as">28-nov-2006</div>\
<div class="as">languages known javascript,bash scripting,html,php & kotlin</div>\
<div class="as">Frameworks known react,node,jquery and ejs </div>\
<div class="as">Styling with css and scss</div>\
<div class="as">Api known stripe,peerjs,socket.io,</div>\
    <div class="as">geolocation,</div>\
<div class="as">history and webRTC</div>\
<div class="as">Databases  </div>\
<div class="as"><ul><li>sql [mysql,postgressql]</li> <li>nosql [mongodb]</li></ul></div>\
 ';
var sect_1 = sects[0];
var sect_2 = sects[1];
localStorage.clear();
ico[3].onclick = () =>
  ico[3].style.color == "white" ? console.log("nonoe") : contact();
ico[4].onclick = () =>
  ico[4].style.color == "white" ? console.log("nonoe") : projects();
ico[2].onclick = () =>
  ico[2].style.color == "white" ? console.log("nonoe") : messages();
ico[1].style.color = "white";
ico[1].onclick = () =>
  ico[1].style.color == "white" ? console.log("nonoe") : about();
ico[0].onclick = () =>
  ico[0].style.color == "white" ? console.log("nonoe") : home();
hs[1].style.color = "white";
localStorage.setItem("current", 0);
home();
function projects() {
  localStorage.setItem("current", 4);
  removeproj();
  removedabt();
  removemsg();
  removehome();
  removedcontact();
  ico[4].style.color = "white";
  hs[4].style.color = "white";
  refresh();
  document.getElementById("top").nextElementSibling.id = "projects";
  var pr = document.querySelector("#projects");
  var a = document.createElement("div");
  a.className = "gridee";
  a.innerHTML =
    '<div id="pj">Semester-marks</div>\
  <div id="pj">Bffforever</div>\
  <div id="pj">File-Sender</div>\
  <div id="pj">Php-tool</div>\
  ';
  pr.append(a);
  document.querySelectorAll("#pj").forEach((item) => {
    item.onclick = (e) => {
      open(`https://github.com/ayaanbff/${e.target.innerText}`, "blank");
    };
  });
}
function removeproj() {
  document
    .querySelector("#projects")
    ?.childNodes?.forEach((item) => item.remove());
}
function home() {
  localStorage.setItem("current", 0);
  removedabt();
  removehome()
  removemsg();
  removeproj();

  removedcontact();
  ico[0].style.color = "white";
  hs[0].style.color = "white";
  refresh();
  document.getElementById("top").nextElementSibling.id = "contact";
  var wel = document.createElement("div");
  wel.id = "welst";
  wel.innerHTML =
    "<div><h1><span>Hi,</span> Welcome to my website !</h1></div>\
<div id='hmys'>I am ayaan shakoor 18 yrs old currently pursuing my school studies . To know more about me go to about page or navigate contact page .</div><div id='hu'><h2>Go on have a little scroll </h2>\
";
  document.querySelector("#contact").append(wel);
}
function removehome() {
  document.getElementById("top").nextElementSibling.innerHTML = "";
}
function messages() {
  removedabt();
  removeproj();
  removehome();
  removemsg();
  removedcontact();
  localStorage.setItem("current", 2);

  ico[2].style.color = "white";
  hs[2].style.color = "white";
  refresh();
  document.getElementById("top").nextElementSibling.id = "msgg";
  var msgg = document.getElementById("msgg");
  var inp = document.createElement("div");
  inp.id = "txdiv";
  var hh = document.createElement("div");
  hh.id = "hhh";
  hh.innerText = "Send an anonymous message";
  var ms = document.createElement("textarea");
  ms.id = "txxt";
  ms.placeholder = "Say something.........";
  var ii = document.createElement("div");
  ii.id = "icons";
  ii.innerHTML =
    "<div class='tyt'>\
    <input type='file' onchange='awer(awe.files.length)' multiple='true' \
    style='display:none;visibility:hidden' id='awe'><i onclick='awe.click()'\
     class='fa fa-plus'></i></input>\
    </div>\
    <div class='tyt'>\
<i class='fa fa-send' onclick='sendmsg()'></i>\
    </div>";

  inp.append(hh, ms, ii);
  msgg.append(inp);
  // awe.onclick=()=>awe.files
}
var file;
function sendmsg() {
  if (file?.length > 0 || txxt.value != "") {
    firebase
      .firestore()
      .collection("social")
      .doc(txxt.value?.toString()||"ab"+Math.random().toFixed(3))
      .set({
        msg: txxt.value?.toString(),
      })
      .then(() => {
        txxt.value = "";
      });
    if (!file?.length) return;
    for (let o = 0; o < file.length; o++) {
      firebase
        .storage()
        .ref()
        .child(txxt.value?.toString() + file[o].name)
        .put(file[o]);
    }
    document.querySelector("#wdd")?.remove();
    // msg upload
    file = [];
  }
}
function awer(a) {
  file = [];
  file = awe.files;
  document.querySelector("#wdd")?.remove();
  document.querySelector(
    ".tyt"
  ).innerHTML += `<div id="wdd">${a} files selected</div>`;
}
function removemsg() {
  document.querySelector("#msgg")?.children[0]?.remove();
}

function contact() {
  removehome();
  removemsg();
  removeproj();
  removedabt();
  removedcontact();
  localStorage.setItem("current", 3);
  document.getElementById("top").nextElementSibling.id = "contact";
  ico[3].style.color = "white";
  hs[3].style.color = "white";
  refresh();
  var main = document.querySelector("#contact");
  var a = document.createElement("div");
  a.innerHTML =
    '<div id="pph">Phone no. <a href="tel:+916307655542">6307655542</a> |</div> Email:\
<a href="mailto:ayaanshakoor111@gmail.com"> ayaanshakoor111@gmail.com</a>\
';
  a.className = "detail";
  var b = document.createElement("div");
  b.className = "gride";
  b.innerHTML =
    '<div id="icou"><i onclick="lnk(4)" class="fa fa-snapchat"></i></div>\
<div id="icou"><i onclick="lnk(5)" class="fa fa-linkedin"></i></div>\
<div id="icou"><i onclick="lnk(2)" class="fa fa-phone"></i></div>\
<div id="icou"><i onclick="lnk(1)" class="fa fa-envelope"></i></div>\
<div id="icou"><i onclick="lnk(3)" class="fa fa-github"></i></div>\
<div id="icbtn"><form method="GET" action="https://www.buymeacoffee.com/ayaanshakoor">\
<button id="checkout-button" type="submit">Buy me a coffee <i class="fa fa-coffee"></i>"\
</button>\
</form></div>\
';

  //upi://pay?pa=6307655542@fam&pn=Ayaan%20Shakoor&cu=INR

  main.append(a, b);
}
function lnk(sa){
switch(sa){
  case 1:
    window.open("mailto:ayaanshakoor111@gmail.com")
    break
  case 2:
    window.open("tel:+916307655542")
    break
  case 3:
    window.open("https://github.com/ayaanbff/")
    break
  case 4:
    window.open("https://www.snapchat.com/add/ayaan_shakoor?share_id=1W945uem0Iw&locale=en-GB")
    break
  case 5:
    window.open("https://in.linkedin.com/in/ayaan-shakoor-aa5218253")
    break
  case 6:
    break
  case 7:
    window.open("https://wa.me/+916307655542")
    break
  case 8:
    window.open("https://t.me/ayaan_shakoor")
    break
  case 9:
    window.open("https://www.facebook.com/people/Ayaan-Shakoor/pfbid0fygNfGTHCcbGGrSfCED8WFSdnDPYPpx9dCBp8VCsEaD7qJdJDyKvpzF7ZzUzaxi5l/")
    break
}

}
function removedabt() {
  removemsg();
  document.querySelectorAll("#sect")?.forEach((item) => item.remove());
  document
    .getElementById("top")
    .nextElementSibling.classList.remove("midafter");
}
function removedcontact() {
  document.querySelector(".detail")?.remove();
  document.querySelector(".gride")?.remove();
}

function about() {
  localStorage.setItem("current", 1);
  removehome();
  removeproj();
  removedcontact();
  removedabt();
  ico[1].style.color = "white";
  hs[1].style.color = "white";
  refresh();
  document.getElementById("top").nextElementSibling.id = "mid";
  var mi = document.querySelector("#mid");
  mi.classList.add("midafter");
  var a = sect_1;
  a.style.animationDelay = "0ms";
  var b = sect_2;
  b.style.animationDelay = "0ms";
  var category = "history";
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes",
    headers: { "X-Api-Key": "B9WtaX0GJFIygNtj91lGpw==Q8h1XfrkvMDFpGDR" },
    contentType: "application/json",
    success: 
    function (result) {
      b.innerText = result[0].quote;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
  a.querySelectorAll(".as").forEach((item) => item.remove());
  mi.append(a, b);
  setTimeout(() => {
    document.querySelector("#sect:first-child").innerHTML = stext;
    txt();
  }, 2000);
}
for (var a = 0; a < ico.length; a++) {
  ico[a].addEventListener("mouseover", (e) => {
    var hsa = e.target.nextElementSibling;
    hsa.style.color = "white";
  });
  ico[a].addEventListener("mouseout", (e) => {
    var hsa = e.target.nextElementSibling;
    if (hsa == hs[localStorage.getItem("current")]) {
    } else hsa.style.color = "black";
    if (e.target == ico[localStorage.getItem("current")]) {
    } else e.target.style.color = "rgba(255, 255, 255, .65)";
  });
}

function refresh() {
  for (var i = 0; i < ico.length; i++) {
    var iw = localStorage.getItem("current");
    if (hs[i] == hs[iw]) {
    } else hs[i].style.color = "black";
    if (ico[i] == ico[iw]) {
    } else ico[i].style.color = "rgba(255, 255, 255, .65)";
  }
}

nav.onmouseenter = () => {
  console.log(1);
  hs.forEach((item) => {
    item.animate([{ opacity: 0 }, { opacity: 1 }], {
      delay: 0,
      duration: 1000,
      fill: "forwards",
    });
  });

  for (var g = 1; g < 5; g++) {
    item = niu[g];
    item.animate([{ opacity: 0 }, { opacity: 1, position: "relative" }], {
      delay: 0,
      duration: 1000,
      fill: "forwards",
    });
  }
};
nav.onmouseleave = () => {
  refresh();
  hs.forEach((item) => {
    item.animate(
      { opacity: 0 },

      {
        delay: 0,
        duration: 0,
        fill: "forwards",
      }
    );
  });

  for (var g = 1; g < 5; g++) {
    item = niu[g];
    item.animate([{ opacity: 1 }, { opacity: 0, position: "absolute" }], {
      delay: 0,
      duration: 20,
      fill: "forwards",
    });
  }
};

setTimeout(() => {
  for (var a = 0; a < chs.length; a++) {
    chs[a].animate(
      [
        { opacity: "0", visibility: "hidden" },
        { opacity: "1", visibility: "visible" },
      ],
      {
        delay: a * 500,
        duration: 500,
        fill: "forwards",
      }
    );
  }
}, 2000);

setTimeout(() => {
  for (var a = 0; a < wds.length; a++) {
    wds[a].animate(
      [
        { opacity: "0", visibility: "hidden" },
        { opacity: "1", visibility: "visible", position: "relative" },
      ],
      {
        delay: a * 500,
        duration: 500,
        fill: "forwards",
      }
    );
  }
}, 6000);
var txt = () => {
  let wd = document.querySelectorAll(".as");
  for (var a = 0; a < wd.length; a++) {
    wd[a].animate(
      [
        { opacity: "0", visibility: "hidden" },
        { opacity: "1", visibility: "visible", position: "relative" },
      ],
      {
        delay: a * 500,
        duration: 500,
        fill: "forwards",
      }
    );
  }
};
