!function(n){var e,i,t,s=n.document;n.smiHTML10424=function(){return'<div class="smiinformer10424">\n\t\x3c!-- teaser row --\x3e\n\t<div class="smiteaser-row10424">\n    <div class="smiteaser-container10424">\n        <div class="smiteaser10424">\n            <div class="smiimg10424">\n                <a href="%URL-0%" target="_blank"><img src="%IMG-0%" /></a>\n            </div>\n            <div class="smitext10424">\n                <a class="smititle10424" href="%URL-0%" target="_blank">%TITLE-0%</a>\n            </div>\n        </div>\n    </div>\n\t</div>\n\t\x3c!-- end teaser row --\x3e\n\t\x3c!-- teaser row --\x3e\n\t<div class="smiteaser-row10424">\n    <div class="smiteaser-container10424">\n        <div class="smiteaser10424">\n            <div class="smiimg10424">\n                <a href="%URL-1%" target="_blank"><img src="%IMG-1%" /></a>\n            </div>\n            <div class="smitext10424">\n                <a class="smititle10424" href="%URL-1%" target="_blank">%TITLE-1%</a>\n            </div>\n        </div>\n    </div>\n\t</div>\n\t\x3c!-- end teaser row --\x3e\n\t\x3c!-- teaser row --\x3e\n\t<div class="smiteaser-row10424">\n    <div class="smiteaser-container10424">\n        <div class="smiteaser10424">\n            <div class="smiimg10424">\n                <a href="%URL-2%" target="_blank"><img src="%IMG-2%" /></a>\n            </div>\n            <div class="smitext10424">\n                <a class="smititle10424" href="%URL-2%" target="_blank">%TITLE-2%</a>\n            </div>\n        </div>\n    </div>\n\t</div>\n\t\x3c!-- end teaser row --\x3e\n</div>'},n.smiCSS10424=function(){return'.smiinformer10424 * {\n    font-size: 0;\n    padding: 0;\n    margin: 0;\n    border-width: 0;\n    box-sizing: border-box;\n}\n.smiinformer10424 {\n    border: 0px solid #fff;\n    width: 100%;\n}\n.smiteaser-container10424 {\n    display: inline-block;\n    width: 100%;\n    vertical-align: top;\n}\n.smiteaser-container10424:after {\n    display: table;\n    content: "";\n}\n\n.smiteaser10424 {\n    padding: 0px 15px;\n\n    background-color: #fff;\n    margin-bottom:20px;\n    margin-top: px;\n    margin-left: px;\n\n}\n.smiteaser-container10424:last-child .smiteaser10424 {\n    margin-right: px;\n}\n.smiteaser-row10424:last-child .smiteaser10424 {\n    margin-bottom: px;\n}\n.smiteaser10424:after {\n    content: "";\n    display: table;\n    clear: both;\n}\n\n\n.smiteaser10424 {\n    border: 0px solid #fff;\n}\n\n\n.smiimg10424 {\n    float: none;\n    margin-bottom: 10px;\n}\n.smiimg10424 img {\n    border: 0px solid #fff;\n    width:100%;\n}\na.smititle10424 {\n    font-family: PT sans, Helvetica Neue, Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    color: #555555;\n\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    \n}\na.smititle10424:hover {\n    color: #ff7500;\n\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n}\n.smicat10424 {\n    font-size: 11px;\n    color: #000;\n}\n.smitext10424 {\n    text-align: left;\n    line-height: 21px;\n}'},t="smi_js",s.getElementById(t)||(i=n[e="smiq"],e in n&&i.push&&i.loaded)||function(e,i){var t=s.createElement("script"),a=s.head||s.getElementsByTagName("head")[0],r=n.location.protocol;"https:"!==r&&"http:"!==r&&(r="https:"),t.id="smi_js",t.src=r+"//jsn.24smi.net/smi.js",a.appendChild(t)}(),(n.smiq=n.smiq||[]).push({element:s.getElementById("smi_teaser_10424"),blockId:10424})}(window);

// :::::::::::::::::::::::::::::::egup start:::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::egup start:::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::egup start:::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::egup start:::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::egup start:::::::::::::::::::::::::::::::

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes(); // shows initial box(es) 

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 3 * 4);
  
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}

// :::::::::::::::::::::::::::::::egup finish:::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::egup finish:::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::egup finish:::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::egup finish:::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::egup finish:::::::::::::::::::::::::::::::
