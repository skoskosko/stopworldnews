var div=document.createElement("div");
div.style.position = 'fixed';
div.style.top = '50%';
div.style.left = '50%';
div.style.fontSize  = '1000%';
div.style.opacity = '0.2';
div.style.transform = 'translate(-50%, -50%)';
div.innerText="DO NOT GET RUSTLED";
document.body.appendChild(div);

var imgdiv=document.createElement("div");
imgdiv.style.position = 'fixed';
imgdiv.style.top = '90%';
imgdiv.style.left = '90%';
imgdiv.style.opacity = '0.2';
imgdiv.style.transform = 'translate(-50%, -50%)';
var elem = document.createElement("img");
elem.setAttribute("src", browser.extension.getURL("icons/leave.png")); // chrome.extension.getURL("icons/leave.png"
elem.onclick  = function(){
    window.history.back();
  }
imgdiv.appendChild(elem)
document.body.appendChild(imgdiv);
