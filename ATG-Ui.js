$ = document.querySelector.bind(document);function $data$(){return new Date();setTimeout("$data$");};let $dia$ = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];let $meses$ = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];function $check$(i){return i < 10 ? "0"+i : i};$("body").style.fontSize="1rem";let visor = $("body");let b = parseInt(window.getComputedStyle(visor).getPropertyValue("font-size"));if(b >= 10 && b <= 12){c = "24" }else if(b >= 13 && b <= 15){c = "21"}else if(b === 16){c = "19"} else if(b === 17){ c = "17" }else if(b > 17 && b <= 20){c = "15" }else if(b > 20 && b <= 25){  c = "13" } else if(b > 25 && b <= 28){  c = "11" }else if(b > 28 && b <= 35){  c = "9.5" };setInterval(()=>{let mode = $("html").getAttribute("dark-mode");mode === "true" ? $("html").classList.add("dark_mode") : $("html").classList.remove("dark_mode");});let atg_style = `*,body{margin:0;}.dark_mode body div{background:#000;color:#fff}.dark_mode body .bar,.dark_mode .about{background:#555}.dark_mode:root{ color: #eee;--bg: #777;--checkbox-checked-color: #777777;--checkbox-color: #D2D2D2; --radio-checked-color: #777777;--input-focus-color: #777777;--switch-circle-color: #b2b2b2;--range-thumb-color: #D2D2D2;}.dark_mode body{background:#000;color:#fff;}:root{--alr_bg: #fff;}.dark_mode:root{--alr_bg : #6D6D6D;}.barpop{ -webkit-animation: piscar .1s ease-in-out;-moz-animation : piscar .1s ease-in-out;-o-animation: piscar .1s ease-in-out;animation:  piscar .7s ease-in-out; font-size: 1rem; position:fixed; display:flex; width:100%;top:0%;left:0; justify-content:center;} .popup{ text-align:center; font-family: sans-serif ; min-width:2rem;box-shadow:0 0 1rem 1px #ddd;font-size: ${parseInt(c)}px;background: #777777DD; position: fixed; padding: 2%;  border-radius: 20px;  color: #ffffff;max-width:90%; display:block; } @keyframes piscarAl{  0%{ opacity: 0;  } 100%{   opacity: 1; } }@keyframes piscar{ 0%{opacity: 0;  } 100%{   opacity: 1; } }  @keyframes FadeOut{  0%{ opacity: 1;  } 100%{   opacity: 0; }}.atg_alert{ padding: 2%; font-family:sans-serif ; position:fixed; border-radius: 1rem; display:block;text-align: center;    box-shadow: 0 0 2rem 0 #bbb; width:90%;left:2.5%; min-height: 4rem;  background: var(--alr_bg); z-index: 100rem; } .alr_title{  font-size: ${5+parseInt(c)}px; display:block;  font-weight: bold;}.alr_msg{  padding-top: 2%;  padding-bottom: 3%; text-align:center;  font-size: ${parseInt(c)+3}px;} .alr_msg,.alr_title{word-wrap: break-word;}.alr_ok{ text-align: center;  margin-top: 1%;font-size: ${2+parseInt(c)}px; font-weight: bold;}.alr_ok:active{opacity: 0.2;}.pop_bar{ width: 100%; display: flex; align-items: center;margin:0%; position: fixed; justify-content: center; top: 90%; overflow: hidden;-webkit-animation: pop .5s; -o-animation: pop .5s; animation: pop .5s ;}.pop_text{background: #484848; color: #fff;padding: 2%;width: 92%; font-size:${c}px ;margin:0%;border-radius: 0.5rem; text-align: center;overflow: hidden; display: inline-block;word-wrap: word-break;-webkit-animation: wd .5s;-o-animation: wd .5s;animation: wd .5s;}@-webkit-keyframes pop{from { top:120%;}to { top:90%; }}@-o-keyframes pop{from { top:120%;}to { top:90%;}}@-moz-keyframes pop{from { top:120%;} to { top: 90%; }}@keyframes pop{from { top: 120%; } to { top: 90%; }}@-webkit-keyframes wd { from {width: 0%} to { width: 92% }}@-o-keyframes wd { from { width: 0%;} to { width:92%;}}@-moz-keyframes wd { from { width: 0%;} to { width: 92%;}}@keyframes wd { from { width:0%;}to { width: 92%;}}`;let $n$ = 0;let n = 0; let s = 0;let $atg = {
  
  data : { horas: ()=>{return $check$($data$().getHours());},minutos : ()=>{return $check$($data$().getMinutes());},segundos : ()=>{return $check$($data$().getSeconds());},relogio : ()=>{return $check$($data$().getHours())+":"+$check$($data$().getMinutes());},dia : ()=>{return $data$().getDate();},diaSmn : ()=>{return $dia$[$data$().getDay()];},diaSmnAbv : ()=>{return $dia$[$data$().getDay()].substr(0,3);},mes : ()=>{return $meses$[$data$().getMonth()];},mesAbv : ()=>{return $meses$[$data$().getMonth()].substr(0,3);},mesNm : ()=>{return $data$().getMonth()+1;},ano : () =>{return $data$().getFullYear();},data : ()=>{return $check$($data$().getDate())+"/"+$check$($data$().getMonth()+1)+"/"+$data$().getFullYear();}},


cpf : { vld:(i)=>{let $num = i.replace(".","").replace(".","").replace(/-/g,"");parseInt($num);let $num1 = $num.substr(0,1);let $num2 = $num.substr(1,1);let $num3 = $num.substr(2,1);let $num4 = $num.substr(3,1);let $num5 = $num.substr(4,1);let $num6 = $num.substr(5,1);let $num7 = $num.substr(6,1);let $num8 = $num.substr(7,1);let $num9 = $num.substr(8,1);let $num10 = $num.substr(9,1);let $num11 = $num.substr(10,1);    $vl1 = $num1*1;$vl2 = $num2*2;$vl3 = $num3*3;$vl4 = $num4*4;$vl5 = $num5*5;$vl6 = $num6*6;$vl7 = $num7*7;$vl8 = $num8*8;$vl9 = $num9*9;let $digit1 = eval($vl1+$vl2+$vl3+$vl4+$vl5+$vl6+$vl7+$vl8+$vl9)%11%10;let $vl10 = $num1*0;let $vl11 = $num2*1;let $vl12 = $num3*2;let $vl13 = $num4*3;let $vl14 = $num5*4;let $vl15 = $num6*5;let $vl16 = $num7*6;let $vl17 = $num8*7;let $vl18 = $num9*8;let $vl19 = $digit1*9;let $digit2 = eval($vl10+$vl11+$vl12+$vl13+$vl14+$vl15+$vl16+$vl17+$vl18+$vl19)%11%10;let $valido = $num10 == $digit1 && $num11 == $digit2 && $digit2 != '' ? "Válido":"Falso";return $valido;}},

version : ()=>{return "v: 2.25 ©"+$atg.data.ano()+" - Andjeckson Tavares"},


loadScript: (e)=>{ document.write(`<script src="${e}"></script>`)},


loadStyle: (e)=>{ document.write(`<link rel="stylesheet" href="${e}"/>`)},


popDroid:(t,c1,c2)=>{let droidpop = document.createElement("div");droidpop.setAttribute("class","pop_bar");document.body.appendChild(droidpop);droidpop.innerHTML = `<div class="pop_text">${t}</div>`; let vl2 = document.getElementsByClassName("pop_text").length; let a = ( $n$ < vl2 ? $n$++ : $n$ = vl2); document.getElementsByClassName("pop_text")[a].style="background:"+(c1 ? c1 : "#777777DD")+";color:"+(c2?c2:"#ffffff");setTimeout(()=>{document.getElementsByClassName("pop_text")[a].style.animation="FadeOut 1s ease-in-out";},2500); setTimeout(()=>{document.getElementsByClassName("pop_text")[a].style.display="none"},3500)},


popup:(t,p,p2,b,c)=>{let barpop = document.createElement("div");barpop.style="top:" +(p?p:80)+"%";barpop.setAttribute("class","barpop");document.body.appendChild(barpop);barpop.innerHTML = `<div class="popup">${t}</div>`; let vl = document.getElementsByClassName("popup").length; let a = ( n < vl ? n++ : n = vl); document.getElementsByClassName("popup")[a].style="background:"+(b ? b : "#777777DD")+";color:"+(c?c:"#ffffff")+";left:"+(p2?p2+"%":" ");setTimeout(()=>{document.getElementsByClassName("barpop")[a].style.animation="FadeOut 1s ease-in-out"},2500);setTimeout(()=>{document.getElementsByClassName("barpop")[a].style.display="none"},3500)},


alertUi:(t,m,p,c1,c2,c3)=>{  let alertObj = document.createElement("div"); alertObj.style.animation="piscarAl 1s ease-in-out";alertObj.setAttribute("class","atg_alert");document.body.appendChild(alertObj); let quan = document.getElementsByClassName("atg_alert").length-1; let objAdd = document.getElementsByClassName("atg_alert")[quan] ; document.getElementsByClassName("atg_alert")[quan].style.top=(p?p:30)+"%" ;let titleAl = document.createElement("div"); titleAl.setAttribute("class","alr_title");titleAl.innerText=`${t?t:" "}`;objAdd.appendChild(titleAl); document.getElementsByClassName("alr_title")[quan].style.color=c1;let msgAl = document.createElement("div");msgAl.setAttribute("class","alr_msg");msgAl.innerText=`${m?m:" "}`;objAdd.appendChild(msgAl); document.getElementsByClassName("alr_msg")[quan].style.color=c2;let okAl = document.createElement("div"); okAl.innerText="Ok"; okAl.setAttribute("class","alr_ok"); okAl.setAttribute("onclick","remove_alert()"); objAdd.appendChild(okAl); document.getElementsByClassName("alr_ok")[quan].style.color=c3;}};


function remove_alert(){ al = document.getElementsByClassName("atg_alert").length;let a2 = --al;document.getElementsByClassName("atg_alert")[a2].style.animation="FadeOut 0.5s ease-in-out";setTimeout(function(){document.body.removeChild(document.getElementsByClassName("atg_alert")[a2] );},400)};let n2 = 0;


function dark_mode(){ n2++;let a = (n2%2);if(a === 0){$("html").setAttribute("dark-mode","false");}else{$("html").setAttribute("dark-mode","true");}};document.write(`<style>${atg_style}</style>`);
