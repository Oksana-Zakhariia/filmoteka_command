function A(A,e,t,i){Object.defineProperty(A,e,{get:t,set:i,enumerable:!0,configurable:!0})}function e(A){return A&&A.__esModule?A.default:A}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=t.parcelRequired7c6;null==o&&((o=function(A){if(A in i)return i[A].exports;if(A in n){var e=n[A];delete n[A];var t={id:A,exports:{}};return i[A]=t,e.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+A+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(A,e){n[A]=e},t.parcelRequired7c6=o),o.register("kyEFX",(function(e,t){var i,n;A(e.exports,"register",(function(){return i}),(function(A){return i=A})),A(e.exports,"resolve",(function(){return n}),(function(A){return n=A}));var o={};i=function(A){for(var e=Object.keys(A),t=0;t<e.length;t++)o[e[t]]=A[e[t]]},n=function(A){var e=o[A];if(null==e)throw new Error("Could not resolve bundle with id "+A);return e}})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.c8df686c.js","js1mV":"Gohman.fde82de9.jpg","dOLZ9":"Kuruchenko.b255ae71.jpg","cBWIn":"Koshevoi.dd3b9dbe.jpg","4kYto":"Bandura.e13cbcdf.jpg","b7lpX":"Pilganchuk.181c4c7c.jpg","jvNi9":"Kozlov.8db23493.jpg","eokad":"Zaharia.abf4325d.jpg","hW74y":"Samohin.f6a7bde9.jpg","jbm0Y":"Konotop.1d5b0937.jpg","gkvLD":"Chudak.5de2c4a0.jpg","7k2XX":"Yacenko.484c4e88.jpg","iRvFg":"Petrenko.fef24f08.jpg","hdCq8":"Yakumchuk.35fba98a.jpg","bw2Od":"Krukyn.5fa91d4b.jpg","5UbS1":"index.7f859e21.css"}'));const s=document.querySelector(".gallery__list"),a=document.querySelector(".modal__film-card-wrapper"),r=document.getElementById("auth__modal"),g=function(A,e){s.innerHTML="";const t=e?"rating":"rating visually-hidden",i=A.results.map((A=>{if(A.media_type&&"person"===A.media_type)return;const e=A.poster_path&&null!==A.poster_path?`https://image.tmdb.org/t/p/w500${A.poster_path}`:"https://i.ibb.co/mbchPsg/no-poster.png";return`<li class="gallery__item">\n    <div class="id" hidden> ${A.id} </div>\n    <div class="thumb">\n    <img src="${e}" alt="${A.title}" width="280">\n    </div>\n    <div class="gallery__info-wrapper">\n    <p class="gallery__title">${(A.original_title||A.original_name).toUpperCase()}</p>\n    <div class="gallery__info"><span class="genres-and-year">${function(A){const e={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western",10765:"Sci-Fi & Fantasy",10759:"Action & Adventure"};return A.length<3?A.map((A=>e[A])).join(", "):A.map((A=>e[A])).slice(0,2).join(", ")+", Other"}(A.genre_ids)} | ${Number.parseInt(A.release_date||A.first_air_date)||"-"}</span><span class="${t}">${A.vote_average.toFixed(1)}</span></div></div></li>`})).join("");s.insertAdjacentHTML("beforeend",i)};const l=function(A,e,t,i,n){const o=`<div class="thumb_modal-card"><img class="modal__card-img img" src="${A.poster_path&&null!==A.poster_path?`https://image.tmdb.org/t/p/original/${A.poster_path}`:"https://i.ibb.co/mbchPsg/no-poster.png"}" alt="${A.original_title}" \n        ></div>      \n      <div class="modal__card"> \n        <h3 class="modal__card-title">${A.title}</h3> \n        <ul class="modal__card-list list"> \n          <li class="card__item"> \n            <h4 class="card__item-title">Vote / Votes</h4> \n            <p class="card__item-vote">${A.vote_average?A.vote_average.toFixed(1):"0"}</p> \n            <span class="card__item-slash">/</span> \n            <p class="card__item-votes">${A.vote_count}</p> \n           <li class="card__item"> \n            <h4 class="card__item-title">Popularity</h4> \n            <p class="card__item-popularity">${A.popularity?A.popularity.toFixed(1):"0"}</p> \n          </li> \n          <li class="card__item"> \n            <h4 class="card__item-title">Original&nbsp;Title</h4> \n            <p class="card__item-original">${A.original_title}</p> \n          </li> \n          <li class="card__item"> \n            <h4 class="card__item-title">Genre</h4> \n            <p class="card__item-genre">${A.genres.map((A=>A.name)).join(", ")}</p> \n          </li> \n        </ul> \n        <h4 class="card__item-about">About</h4> \n        <p id="card__item-about__text" class="card__item-about__text card__item-text">${A.overview}</p> \n         <ul class="card__btn-list list"> \n          <li class="card__btn-item"> \n            <button class="${i} hidden">${e}</button> \n          </li> \n          <li class="card__btn-item"> \n            <button class="${n} hidden">${t}</button> \n          </li> \n        </ul> \n      </div> `;a.insertAdjacentHTML("beforeend",o)};var I,C,c={};I=void 0===t?"undefined"==typeof window?c:window:t,C=function(A){if(void 0===A&&void 0===A.document)return!1;var e,t,i,n,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',r="Success",g="Failure",l="Warning",I="Info",C={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},c="Success",E="Failure",B="Warning",h="Info",Q={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},d="Show",u="Ask",w="Prompt",m={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},p="Standard",M="Hourglass",D="Circle",R="Arrows",k="Dots",Y="Pulse",G="Custom",F="Notiflix",y={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},U="Standard",S="Hourglass",x="Circle",K="Arrows",f="Dots",V="Pulse",J={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},Z=function(A){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+A+s)},N=function(A){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+A+s)},b=function(e){return e||(e="head"),null!==A.document[e]||(Z('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},q=function(e,t){if(!b("head"))return!1;if(null!==e()&&!A.document.getElementById(t)){var i=A.document.createElement("style");i.id=t,i.innerHTML=e(),A.document.head.appendChild(i)}},T=function(){var A={},e=!1,t=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],t++);for(var i=function(t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(A[i]=e&&"[object Object]"===Object.prototype.toString.call(t[i])?T(A[i],t[i]):t[i])};t<arguments.length;t++)i(arguments[t]);return A},O=function(e){var t=A.document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},W=function(A,e){return A||(A="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+A+'" height="'+A+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},L=function(A,e){return A||(A="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+A+'" height="'+A+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},z=function(A,e){return A||(A="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+A+'" height="'+A+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+A+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+A+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},v=function(A,e){return A||(A="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+A+'" height="'+A+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},H=function(A,e){return A||(A="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+A+'" height="'+A+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},j=function(A,e){return A||(A="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+A+'" height="'+A+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},P=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},X=0,_=function(t,i,n,o){if(!b("body"))return!1;e||rA.Notify.init({});var s=T(!0,e,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof o&&!Array.isArray(o)){var c={};"object"==typeof n?c=n:"object"==typeof o&&(c=o),e=T(!0,e,c)}var E=e[t.toLocaleLowerCase("en")];X++,"string"!=typeof i&&(i="Notiflix "+t),e.plainText&&(i=O(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=T(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(E.fontAwesomeIconColor=E.background),e.cssAnimation||(e.cssAnimationDuration=0);var B=A.document.getElementById(C.wrapID)||A.document.createElement("div");if(B.id=C.wrapID,B.style.width=e.width,B.style.zIndex=e.zindex,B.style.opacity=e.opacity,"center-center"===e.position?(B.style.left=e.distance,B.style.top=e.distance,B.style.right=e.distance,B.style.bottom=e.distance,B.style.margin="auto",B.classList.add("nx-flex-center-center"),B.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",B.style.display="flex",B.style.flexWrap="wrap",B.style.flexDirection="column",B.style.justifyContent="center",B.style.alignItems="center",B.style.pointerEvents="none"):"center-top"===e.position?(B.style.left=e.distance,B.style.right=e.distance,B.style.top=e.distance,B.style.bottom="auto",B.style.margin="auto"):"center-bottom"===e.position?(B.style.left=e.distance,B.style.right=e.distance,B.style.bottom=e.distance,B.style.top="auto",B.style.margin="auto"):"right-bottom"===e.position?(B.style.right=e.distance,B.style.bottom=e.distance,B.style.top="auto",B.style.left="auto"):"left-top"===e.position?(B.style.left=e.distance,B.style.top=e.distance,B.style.right="auto",B.style.bottom="auto"):"left-bottom"===e.position?(B.style.left=e.distance,B.style.bottom=e.distance,B.style.top="auto",B.style.right="auto"):(B.style.right=e.distance,B.style.top=e.distance,B.style.left="auto",B.style.bottom="auto"),e.backOverlay){var h=A.document.getElementById(C.overlayID)||A.document.createElement("div");h.id=C.overlayID,h.style.width="100%",h.style.height="100%",h.style.position="fixed",h.style.zIndex=e.zindex-1,h.style.left=0,h.style.top=0,h.style.right=0,h.style.bottom=0,h.style.background=E.backOverlayColor||e.backOverlayColor,h.className=e.cssAnimation?"nx-with-animation":"",h.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",A.document.getElementById(C.overlayID)||A.document.body.appendChild(h)}A.document.getElementById(C.wrapID)||A.document.body.appendChild(B);var Q=A.document.createElement("div");Q.id=e.ID+"-"+X,Q.className=e.className+" "+E.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof n?"nx-with-close-button":"")+" "+("function"==typeof n?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),Q.style.fontSize=e.fontSize,Q.style.color=E.textColor,Q.style.background=E.background,Q.style.borderRadius=e.borderRadius,Q.style.pointerEvents="all",e.rtl&&(Q.setAttribute("dir","rtl"),Q.classList.add("nx-rtl-on")),Q.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(Q.style.animationDuration=e.cssAnimationDuration+"ms");var d="";if(e.closeButton&&"function"!=typeof n&&(d='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+E.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)Q.innerHTML='<i style="color:'+E.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+E.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?d:"");else{var u="";t===r?u='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':t===g?u='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':t===l?u='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':t===I&&(u='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),Q.innerHTML=u+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?d:"")}else Q.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?d:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=A.document.getElementById(C.wrapID);w.insertBefore(Q,w.firstChild)}else A.document.getElementById(C.wrapID).appendChild(Q);var m=A.document.getElementById(Q.id);if(m){var p,M,D=function(){m.classList.add("nx-remove");var e=A.document.getElementById(C.overlayID);e&&0>=B.childElementCount&&e.classList.add("nx-remove"),clearTimeout(p)},R=function(){if(m&&null!==m.parentNode&&m.parentNode.removeChild(m),0>=B.childElementCount&&null!==B.parentNode){B.parentNode.removeChild(B);var e=A.document.getElementById(C.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(M)};if(e.closeButton&&"function"!=typeof n&&A.document.getElementById(Q.id).querySelector("span.nx-close-button").addEventListener("click",(function(){D();var A=setTimeout((function(){R(),clearTimeout(A)}),e.cssAnimationDuration)})),("function"==typeof n||e.clickToClose)&&m.addEventListener("click",(function(){"function"==typeof n&&n(),D();var A=setTimeout((function(){R(),clearTimeout(A)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof n){var k=function(){p=setTimeout((function(){D()}),e.timeout),M=setTimeout((function(){R()}),e.timeout+e.cssAnimationDuration)};k(),e.pauseOnHover&&(m.addEventListener("mouseenter",(function(){m.classList.add("nx-paused"),clearTimeout(p),clearTimeout(M)})),m.addEventListener("mouseleave",(function(){m.classList.remove("nx-paused"),k()})))}}if(e.showOnlyTheLastOne&&0<X)for(var Y,G=A.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+X+"])"),F=0;F<G.length;F++)null!==(Y=G[F]).parentNode&&Y.parentNode.removeChild(Y);e=T(!0,e,s)},$=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},AA=function(e,i,n,o,s,r){if(!b("body"))return!1;t||rA.Report.init({});var g={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof r&&!Array.isArray(r)){var l={};"object"==typeof s?l=s:"object"==typeof r&&(l=r),g=T(!0,t,{}),t=T(!0,t,l)}var I=t[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof n&&(e===c?n='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===E?n='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===B?n='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===h&&(n='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),t.plainText&&(i=O(i),n=O(n),o=O(o)),t.plainText||(i.length>t.titleMaxLength&&(i="Possible HTML Tags Error",n='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),n.length>t.messageMaxLength&&(i="Possible HTML Tags Error",n='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>t.buttonMaxLength&&(i="Possible HTML Tags Error",n='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>t.titleMaxLength&&(i=i.substring(0,t.titleMaxLength)+"..."),n.length>t.messageMaxLength&&(n=n.substring(0,t.messageMaxLength)+"..."),o.length>t.buttonMaxLength&&(o=o.substring(0,t.buttonMaxLength)+"..."),t.cssAnimation||(t.cssAnimationDuration=0);var C=A.document.createElement("div");C.id=Q.ID,C.className=t.className,C.style.zIndex=t.zindex,C.style.borderRadius=t.borderRadius,C.style.fontFamily='"'+t.fontFamily+'", '+a,t.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.style.display="flex",C.style.flexWrap="wrap",C.style.flexDirection="column",C.style.alignItems="center",C.style.justifyContent="center";var d="",u=!0===t.backOverlayClickToClose;t.backOverlay&&(d='<div class="'+t.className+"-overlay"+(t.cssAnimation?" nx-with-animation":"")+(u?" nx-report-click-to-close":"")+'" style="background:'+(I.backOverlayColor||t.backOverlayColor)+";animation-duration:"+t.cssAnimationDuration+'ms;"></div>');var w,m,p="";if(e===c?(w=t.svgSize,m=I.svgColor,w||(w="110px"),m||(m="#32c682"),p='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+m+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===E?p=function(A,e){return A||(A="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+A+'" height="'+A+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(t.svgSize,I.svgColor):e===B?p=function(A,e){return A||(A="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+A+'" height="'+A+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(t.svgSize,I.svgColor):e===h&&(p=function(A,e){return A||(A="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+A+'" height="'+A+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(t.svgSize,I.svgColor)),C.innerHTML=d+'<div class="'+t.className+"-content"+(t.cssAnimation?" nx-with-animation ":"")+" nx-"+t.cssAnimationStyle+'" style="width:'+t.width+"; background:"+t.backgroundColor+"; animation-duration:"+t.cssAnimationDuration+'ms;"><div style="width:'+t.svgSize+"; height:"+t.svgSize+';" class="'+t.className+'-icon">'+p+'</div><h5 class="'+t.className+'-title" style="font-weight:500; font-size:'+t.titleFontSize+"; color:"+I.titleColor+';">'+i+'</h5><p class="'+t.className+'-message" style="font-size:'+t.messageFontSize+"; color:"+I.messageColor+';">'+n+'</p><a id="NXReportButton" class="'+t.className+'-button" style="font-weight:500; font-size:'+t.buttonFontSize+"; background:"+I.buttonBackground+"; color:"+I.buttonColor+';">'+o+"</a></div>",!A.document.getElementById(C.id)){A.document.body.appendChild(C);var M=function(){var e=A.document.getElementById(C.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),t.cssAnimationDuration)};A.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),M()})),d&&u&&A.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){M()}))}t=T(!0,t,g)},eA=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tA=function(e,t,n,o,s,r,g,l,I){if(!b("body"))return!1;i||rA.Confirm.init({});var C=T(!0,i,{});"object"!=typeof I||Array.isArray(I)||(i=T(!0,i,I)),"string"!=typeof t&&(t="Notiflix Confirm"),"string"!=typeof n&&(n="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof r&&(r="No"),"function"!=typeof g&&(g=void 0),"function"!=typeof l&&(l=void 0),i.plainText&&(t=O(t),n=O(n),s=O(s),r=O(r)),i.plainText||(t.length>i.titleMaxLength&&(t="Possible HTML Tags Error",n='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",r="..."),n.length>i.messageMaxLength&&(t="Possible HTML Tags Error",n='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",r="..."),(s.length||r.length)>i.buttonsMaxLength&&(t="Possible HTML Tags Error",n='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",r="...")),t.length>i.titleMaxLength&&(t=t.substring(0,i.titleMaxLength)+"..."),n.length>i.messageMaxLength&&(n=n.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),r.length>i.buttonsMaxLength&&(r=r.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var c=A.document.createElement("div");c.id=m.ID,c.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),c.style.zIndex=i.zindex,c.style.padding=i.distance,i.rtl&&(c.setAttribute("dir","rtl"),c.classList.add("nx-rtl-on"));var E="string"==typeof i.position?i.position.trim():"center";c.classList.add("nx-position-"+E),c.style.fontFamily='"'+i.fontFamily+'", '+a;var B="";i.backOverlay&&(B='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var h="";"function"==typeof g&&(h='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+r+"</a>");var Q="",d=null,p=void 0;if(e===u||e===w){d=o||"";var M=e===u||200<d.length?Math.ceil(1.5*d.length):250;Q='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+d+'"':"")+' maxlength="'+M+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(c.innerHTML=B+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+t+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+n+Q+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof g?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+h+"</div></div>",!A.document.getElementById(c.id)){A.document.body.appendChild(c);var D=A.document.getElementById(c.id),R=A.document.getElementById("NXConfirmButtonOk"),k=A.document.getElementById("NXConfirmValidationInput");k&&(k.focus(),k.setSelectionRange(0,(k.value||"").length),k.addEventListener("keyup",(function(A){var t=A.target.value;e===u&&t!==d?(A.preventDefault(),k.classList.add("nx-validation-failure"),k.classList.remove("nx-validation-success")):(e===u&&(k.classList.remove("nx-validation-failure"),k.classList.add("nx-validation-success")),("enter"===(A.key||"").toLocaleLowerCase("en")||13===A.keyCode)&&R.dispatchEvent(new Event("click")))}))),R.addEventListener("click",(function(A){if(e===u&&d&&k){if((k.value||"").toString()!==d)return k.focus(),k.classList.add("nx-validation-failure"),A.stopPropagation(),A.preventDefault(),A.returnValue=!1,A.cancelBubble=!0,!1;k.classList.remove("nx-validation-failure")}"function"==typeof g&&(e===w&&k&&(p=k.value||""),g(p)),D.classList.add("nx-remove");var t=setTimeout((function(){null!==D.parentNode&&(D.parentNode.removeChild(D),clearTimeout(t))}),i.cssAnimationDuration)})),"function"==typeof g&&A.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof l&&(e===w&&k&&(p=k.value||""),l(p)),D.classList.add("nx-remove");var A=setTimeout((function(){null!==D.parentNode&&(D.parentNode.removeChild(D),clearTimeout(A))}),i.cssAnimationDuration)}))}i=T(!0,i,C)},iA=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},nA=function(e,t,i,o,s){if(!b("body"))return!1;n||rA.Loading.init({});var r=T(!0,n,{});if("object"==typeof t&&!Array.isArray(t)||"object"==typeof i&&!Array.isArray(i)){var g={};"object"==typeof t?g=t:"object"==typeof i&&(g=i),n=T(!0,n,g)}var l="";if("string"==typeof t&&0<t.length&&(l=t),o){var I="";0<(l=l.length>n.messageMaxLength?O(l).toString().substring(0,n.messageMaxLength)+"...":O(l).toString()).length&&(I='<p id="'+n.messageID+'" class="nx-loading-message" style="color:'+n.messageColor+";font-size:"+n.messageFontSize+';">'+l+"</p>"),n.cssAnimation||(n.cssAnimationDuration=0);var C="";if(e===p)C=W(n.svgSize,n.svgColor);else if(e===M)C=L(n.svgSize,n.svgColor);else if(e===D)C=z(n.svgSize,n.svgColor);else if(e===R)C=v(n.svgSize,n.svgColor);else if(e===k)C=H(n.svgSize,n.svgColor);else if(e===Y)C=j(n.svgSize,n.svgColor);else if(e===G&&null!==n.customSvgCode&&null===n.customSvgUrl)C=n.customSvgCode||"";else if(e===G&&null!==n.customSvgUrl&&null===n.customSvgCode)C='<img class="nx-custom-loading-icon" width="'+n.svgSize+'" height="'+n.svgSize+'" src="'+n.customSvgUrl+'" alt="Notiflix">';else{if(e===G&&(null===n.customSvgUrl||null===n.customSvgCode))return Z('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;C=function(A,e,t){return A||(A="60px"),e||(e="#f8f8f8"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+A+'" height="'+A+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+t+'" stroke="'+t+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(n.svgSize,"#f8f8f8","#32c682")}var c=parseInt((n.svgSize||"").replace(/[^0-9]/g,"")),E=A.innerWidth,B=c>=E?E-40+"px":c+"px",h='<div style="width:'+B+"; height:"+B+';" class="'+n.className+"-icon"+(0<l.length?" nx-with-message":"")+'">'+C+"</div>",Q=A.document.createElement("div");Q.id=y.ID,Q.className=n.className+(n.cssAnimation?" nx-with-animation":"")+(n.clickToClose?" nx-loading-click-to-close":""),Q.style.zIndex=n.zindex,Q.style.background=n.backgroundColor,Q.style.animationDuration=n.cssAnimationDuration+"ms",Q.style.fontFamily='"'+n.fontFamily+'", '+a,Q.style.display="flex",Q.style.flexWrap="wrap",Q.style.flexDirection="column",Q.style.alignItems="center",Q.style.justifyContent="center",n.rtl&&(Q.setAttribute("dir","rtl"),Q.classList.add("nx-rtl-on")),Q.innerHTML=h+I,!A.document.getElementById(Q.id)&&(A.document.body.appendChild(Q),n.clickToClose)&&A.document.getElementById(Q.id).addEventListener("click",(function(){Q.classList.add("nx-remove");var A=setTimeout((function(){null!==Q.parentNode&&(Q.parentNode.removeChild(Q),clearTimeout(A))}),n.cssAnimationDuration)}))}else if(A.document.getElementById(y.ID))var d=A.document.getElementById(y.ID),u=setTimeout((function(){d.classList.add("nx-remove");var A=setTimeout((function(){null!==d.parentNode&&(d.parentNode.removeChild(d),clearTimeout(A))}),n.cssAnimationDuration);clearTimeout(u)}),s);n=T(!0,n,r)},oA=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},sA=0,aA=function(e,t,i,n,s,r){var g;if(Array.isArray(i)){if(1>i.length)return Z("Array of HTMLElements should contains at least one HTMLElement."),!1;g=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return Z("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;g=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return Z("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var l=A.document.querySelectorAll(i);if(1>l.length)return Z('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;g=l}o||rA.Block.init({});var I=T(!0,o,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof s&&!Array.isArray(s)){var C={};"object"==typeof n?C=n:"object"==typeof s&&(C=s),o=T(!0,o,C)}var c="";"string"==typeof n&&0<n.length&&(c=n),o.cssAnimation||(o.cssAnimationDuration=0);var E=J.className;"string"==typeof o.className&&(E=o.className.trim());var B="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,h=(g||[]).length>=B?B:g.length,Q="nx-block-temporary-position";if(e){for(var d,u=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<h;w++)if(d=g[w]){if(-1<u.indexOf(d.tagName.toLocaleLowerCase("en")))break;var m=d.querySelectorAll("[id^="+J.ID+"]");if(1>m.length){var p="";t&&(p=t===S?L(o.svgSize,o.svgColor):t===x?z(o.svgSize,o.svgColor):t===K?v(o.svgSize,o.svgColor):t===f?H(o.svgSize,o.svgColor):t===V?j(o.svgSize,o.svgColor):W(o.svgSize,o.svgColor));var M='<span class="'+E+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+p+"</span>",D="";0<c.length&&(c=c.length>o.messageMaxLength?O(c).substring(0,o.messageMaxLength)+"...":O(c),D='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+E+'-message">'+c+"</span>"),sA++;var R=A.document.createElement("div");R.id=J.ID+"-"+sA,R.className=E+(o.cssAnimation?" nx-with-animation":""),R.style.position=o.position,R.style.zIndex=o.zindex,R.style.background=o.backgroundColor,R.style.animationDuration=o.cssAnimationDuration+"ms",R.style.fontFamily='"'+o.fontFamily+'", '+a,R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",o.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=M+D;var k,Y=A.getComputedStyle(d).getPropertyValue("position"),G="string"==typeof Y?Y.toLocaleLowerCase("en"):"relative",F=Math.round(1.25*parseInt(o.svgSize))+40,y="";F>(d.offsetHeight||0)&&(y="min-height:"+F+"px;"),k=d.getAttribute("id")?"#"+d.getAttribute("id"):d.classList[0]?"."+d.classList[0]:(d.tagName||"").toLocaleLowerCase("en");var U="",q=-1>=["absolute","relative","fixed","sticky"].indexOf(G);if(q||0<y.length){if(!b("head"))return!1;q&&(U="position:relative!important;");var P='<style id="Style-'+J.ID+"-"+sA+'">'+k+"."+Q+"{"+U+y+"}</style>",X=A.document.createRange();X.selectNode(A.document.head);var _=X.createContextualFragment(P);A.document.head.appendChild(_),d.classList.add(Q)}d.appendChild(R)}}}else var $=function(e){var t=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),n=A.document.getElementById("Style-"+i);n&&null!==n.parentNode&&n.parentNode.removeChild(n),clearTimeout(t)}),o.cssAnimationDuration)},AA=function(A){if(A&&0<A.length)for(var e,t=0;t<A.length;t++)(e=A[t])&&(e.classList.add("nx-remove"),$(e));else N("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},eA=function(A){var e=setTimeout((function(){A.classList.remove(Q),clearTimeout(e)}),o.cssAnimationDuration+300)},tA=setTimeout((function(){for(var A,e=0;e<h;e++)(A=g[e])&&(eA(A),m=A.querySelectorAll("[id^="+J.ID+"]"),AA(m));clearTimeout(tA)}),r);o=T(!0,o,I)},rA={Notify:{init:function(A){e=T(!0,C,A),q(P,"NotiflixNotifyInternalCSS")},merge:function(A){return e?void(e=T(!0,e,A)):(Z("You have to initialize the Notify module before call Merge function."),!1)},success:function(A,e,t){_(r,A,e,t)},failure:function(A,e,t){_(g,A,e,t)},warning:function(A,e,t){_(l,A,e,t)},info:function(A,e,t){_(I,A,e,t)}},Report:{init:function(A){t=T(!0,Q,A),q($,"NotiflixReportInternalCSS")},merge:function(A){return t?void(t=T(!0,t,A)):(Z("You have to initialize the Report module before call Merge function."),!1)},success:function(A,e,t,i,n){AA(c,A,e,t,i,n)},failure:function(A,e,t,i,n){AA(E,A,e,t,i,n)},warning:function(A,e,t,i,n){AA(B,A,e,t,i,n)},info:function(A,e,t,i,n){AA(h,A,e,t,i,n)}},Confirm:{init:function(A){i=T(!0,m,A),q(eA,"NotiflixConfirmInternalCSS")},merge:function(A){return i?void(i=T(!0,i,A)):(Z("You have to initialize the Confirm module before call Merge function."),!1)},show:function(A,e,t,i,n,o,s){tA(d,A,e,null,t,i,n,o,s)},ask:function(A,e,t,i,n,o,s,a){tA(u,A,e,t,i,n,o,s,a)},prompt:function(A,e,t,i,n,o,s,a){tA(w,A,e,t,i,n,o,s,a)}},Loading:{init:function(A){n=T(!0,y,A),q(iA,"NotiflixLoadingInternalCSS")},merge:function(A){return n?void(n=T(!0,n,A)):(Z("You have to initialize the Loading module before call Merge function."),!1)},standard:function(A,e){nA(p,A,e,!0,0)},hourglass:function(A,e){nA(M,A,e,!0,0)},circle:function(A,e){nA(D,A,e,!0,0)},arrows:function(A,e){nA(R,A,e,!0,0)},dots:function(A,e){nA(k,A,e,!0,0)},pulse:function(A,e){nA(Y,A,e,!0,0)},custom:function(A,e){nA(G,A,e,!0,0)},notiflix:function(A,e){nA(F,A,e,!0,0)},remove:function(A){"number"!=typeof A&&(A=0),nA(null,null,null,!1,A)},change:function(e){!function(e){"string"!=typeof e&&(e="");var t=A.document.getElementById(y.ID);if(t)if(0<e.length){e=e.length>n.messageMaxLength?O(e).substring(0,n.messageMaxLength)+"...":O(e);var i=t.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var o=A.document.createElement("p");o.id=n.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=n.messageColor,o.style.fontSize=n.messageFontSize,o.innerHTML=e,t.appendChild(o)}}else Z("Where is the new message?")}(e)}},Block:{init:function(A){o=T(!0,J,A),q(oA,"NotiflixBlockInternalCSS")},merge:function(A){return o?void(o=T(!0,o,A)):(Z('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(A,e,t){aA(!0,U,A,e,t)},hourglass:function(A,e,t){aA(!0,S,A,e,t)},circle:function(A,e,t){aA(!0,x,A,e,t)},arrows:function(A,e,t){aA(!0,K,A,e,t)},dots:function(A,e,t){aA(!0,f,A,e,t)},pulse:function(A,e,t){aA(!0,V,A,e,t)},remove:function(A,e){"number"!=typeof e&&(e=0),aA(!1,null,A,null,null,e)}}};return"object"==typeof A.Notiflix?T(!0,A.Notiflix,{Notify:rA.Notify,Report:rA.Report,Confirm:rA.Confirm,Loading:rA.Loading,Block:rA.Block}):{Notify:rA.Notify,Report:rA.Report,Confirm:rA.Confirm,Loading:rA.Loading,Block:rA.Block}},"function"==typeof define&&define.amd?define([],(function(){return C(I)})):"object"==typeof c?c=C(I):I.Notiflix=C(I);var E,B,h,Q=E={};function d(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function w(A){if(B===setTimeout)return setTimeout(A,0);if((B===d||!B)&&setTimeout)return B=setTimeout,setTimeout(A,0);try{return B(A,0)}catch(e){try{return B.call(null,A,0)}catch(e){return B.call(this,A,0)}}}!function(){try{B="function"==typeof setTimeout?setTimeout:d}catch(A){B=d}try{h="function"==typeof clearTimeout?clearTimeout:u}catch(A){h=u}}();var m,p=[],M=!1,D=-1;function R(){M&&m&&(M=!1,m.length?p=m.concat(p):D=-1,p.length&&k())}function k(){if(!M){var A=w(R);M=!0;for(var e=p.length;e;){for(m=p,p=[];++D<e;)m&&m[D].run();D=-1,e=p.length}m=null,M=!1,function(A){if(h===clearTimeout)return clearTimeout(A);if((h===u||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(A);try{h(A)}catch(e){try{return h.call(null,A)}catch(e){return h.call(this,A)}}}(A)}}function Y(A,e){this.fun=A,this.array=e}function G(){}Q.nextTick=function(A){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];p.push(new Y(A,e)),1!==p.length||M||w(k)},Y.prototype.run=function(){this.fun.apply(null,this.array)},Q.title="browser",Q.browser=!0,Q.env={},Q.argv=[],Q.version="",Q.versions={},Q.on=G,Q.addListener=G,Q.once=G,Q.off=G,Q.removeListener=G,Q.removeAllListeners=G,Q.emit=G,Q.prependListener=G,Q.prependOnceListener=G,Q.listeners=function(A){return[]},Q.binding=function(A){throw new Error("process.binding is not supported")},Q.cwd=function(){return"/"},Q.chdir=function(A){throw new Error("process.chdir is not supported")},Q.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F=!1,y=!1,U="${JSCORE_VERSION}",S=function(A,e){if(!A)throw x(e)},x=function(A){return new Error("Firebase Database ("+U+") INTERNAL ASSERT FAILED: "+A)},K=function(A){const e=[];let t=0;for(let i=0;i<A.length;i++){let n=A.charCodeAt(i);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=63&n|128):55296==(64512&n)&&i+1<A.length&&56320==(64512&A.charCodeAt(i+1))?(n=65536+((1023&n)<<10)+(1023&A.charCodeAt(++i)),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=63&n|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=63&n|128)}return e},f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(A,e){if(!Array.isArray(A))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<A.length;e+=3){const n=A[e],o=e+1<A.length,s=o?A[e+1]:0,a=e+2<A.length,r=a?A[e+2]:0,g=n>>2,l=(3&n)<<4|s>>4;let I=(15&s)<<2|r>>6,C=63&r;a||(C=64,o||(I=64)),i.push(t[g],t[l],t[I],t[C])}return i.join("")},encodeString(A,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(A):this.encodeByteArray(K(A),e)},decodeString(A,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(A):function(A){const e=[];let t=0,i=0;for(;t<A.length;){const n=A[t++];if(n<128)e[i++]=String.fromCharCode(n);else if(n>191&&n<224){const o=A[t++];e[i++]=String.fromCharCode((31&n)<<6|63&o)}else if(n>239&&n<365){const o=((7&n)<<18|(63&A[t++])<<12|(63&A[t++])<<6|63&A[t++])-65536;e[i++]=String.fromCharCode(55296+(o>>10)),e[i++]=String.fromCharCode(56320+(1023&o))}else{const o=A[t++],s=A[t++];e[i++]=String.fromCharCode((15&n)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(A,e))},decodeStringToByteArray(A,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<A.length;){const n=t[A.charAt(e++)],o=e<A.length?t[A.charAt(e)]:0;++e;const s=e<A.length?t[A.charAt(e)]:64;++e;const a=e<A.length?t[A.charAt(e)]:64;if(++e,null==n||null==o||null==s||null==a)throw Error();const r=n<<2|o>>4;if(i.push(r),64!==s){const A=o<<4&240|s>>2;if(i.push(A),64!==a){const A=s<<6&192|a;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let A=0;A<this.ENCODED_VALS.length;A++)this.byteToCharMap_[A]=this.ENCODED_VALS.charAt(A),this.charToByteMap_[this.byteToCharMap_[A]]=A,this.byteToCharMapWebSafe_[A]=this.ENCODED_VALS_WEBSAFE.charAt(A),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[A]]=A,A>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(A)]=A,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(A)]=A)}}},V=function(A){const e=K(A);return f.encodeByteArray(e,!0)},J=function(A){return V(A).replace(/\./g,"")},Z=function(A){try{return f.decodeString(A,!0)}catch(A){console.error("base64Decode failed: ",A)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(A){return b(void 0,A)}function b(A,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===A&&(A={});break;case Array:A=[];break;default:return e}for(const t in e)e.hasOwnProperty(t)&&"__proto__"!==t&&(A[t]=b(A[t],e[t]));return A}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function O(){const A="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof A&&void 0!==A.id}function W(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function L(){const A=q();return A.indexOf("MSIE ")>=0||A.indexOf("Trident/")>=0}function z(){return!0===F||!0===y}function v(){try{return"object"==typeof indexedDB}catch(A){return!1}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,j=()=>{try{return H()||(()=>{if(void 0===E||void 0===E.env)return})()||(()=>{if("undefined"==typeof document)return;let A;try{A=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(A){return}const e=A&&Z(A[1]);return e&&JSON.parse(e)})()}catch(A){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${A}`)}},P=A=>{var e,t;return null===(t=null===(e=j())||void 0===e?void 0:e.emulatorHosts)||void 0===t?void 0:t[A]},X=A=>{const e=P(A);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return"["===e[0]?[e.substring(1,t-1),i]:[e.substring(0,t),i]},_=A=>{var e;return null===(e=j())||void 0===e?void 0:e[`_${A}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${wrapCallback(A){return(e,t)=>{e?this.reject(e):this.resolve(t),"function"==typeof A&&(this.promise.catch((()=>{})),1===A.length?A(e):A(e,t))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((A,e)=>{this.resolve=A,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(A,e){if(A.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t=e||"demo-project",i=A.iat||0,n=A.sub||A.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${t}`,aud:t,iat:i,exp:i+3600,auth_time:i,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},A);return[J(JSON.stringify({alg:"none",type:"JWT"})),J(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA extends Error{constructor(A,e,t){super(e),this.code=A,this.customData=t,this.name="FirebaseError",Object.setPrototypeOf(this,eA.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tA.prototype.create)}}class tA{create(A,...e){const t=e[0]||{},i=`${this.service}/${A}`,n=this.errors[A],o=n?function(A,e){return A.replace(iA,((A,t)=>{const i=e[t];return null!=i?String(i):`<${t}?>`}))}(n,t):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new eA(i,s,t)}constructor(A,e,t){this.service=A,this.serviceName=e,this.errors=t}}const iA=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(A){return JSON.parse(A)}function oA(A){return JSON.stringify(A)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=function(A){let e={},t={},i={},n="";try{const o=A.split(".");e=nA(Z(o[0])||""),t=nA(Z(o[1])||""),n=o[2],i=t.d||{},delete t.d}catch(A){}return{header:e,claims:t,data:i,signature:n}},aA=function(A){const e=sA(A).claims;return!!e&&"object"==typeof e&&e.hasOwnProperty("iat")},rA=function(A){const e=sA(A).claims;return"object"==typeof e&&!0===e.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gA(A,e){return Object.prototype.hasOwnProperty.call(A,e)}function lA(A,e){return Object.prototype.hasOwnProperty.call(A,e)?A[e]:void 0}function IA(A){for(const e in A)if(Object.prototype.hasOwnProperty.call(A,e))return!1;return!0}function CA(A,e,t){const i={};for(const n in A)Object.prototype.hasOwnProperty.call(A,n)&&(i[n]=e.call(t,A[n],n,A));return i}function cA(A,e){if(A===e)return!0;const t=Object.keys(A),i=Object.keys(e);for(const n of t){if(!i.includes(n))return!1;const t=A[n],o=e[n];if(EA(t)&&EA(o)){if(!cA(t,o))return!1}else if(t!==o)return!1}for(const A of i)if(!t.includes(A))return!1;return!0}function EA(A){return null!==A&&"object"==typeof A}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function BA(A){const e=[];for(const[t,i]of Object.entries(A))Array.isArray(i)?i.forEach((A=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(A))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function hA(A){const e={};return A.replace(/^\?/,"").split("&").forEach((A=>{if(A){const[t,i]=A.split("=");e[decodeURIComponent(t)]=decodeURIComponent(i)}})),e}function QA(A){const e=A.indexOf("?");if(!e)return"";const t=A.indexOf("#",e);return A.substring(e,t>0?t:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(A,e){e||(e=0);const t=this.W_;if("string"==typeof A)for(let i=0;i<16;i++)t[i]=A.charCodeAt(e)<<24|A.charCodeAt(e+1)<<16|A.charCodeAt(e+2)<<8|A.charCodeAt(e+3),e+=4;else for(let i=0;i<16;i++)t[i]=A[e]<<24|A[e+1]<<16|A[e+2]<<8|A[e+3],e+=4;for(let A=16;A<80;A++){const e=t[A-3]^t[A-8]^t[A-14]^t[A-16];t[A]=4294967295&(e<<1|e>>>31)}let i,n,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],r=this.chain_[3],g=this.chain_[4];for(let A=0;A<80;A++){A<40?A<20?(i=r^s&(a^r),n=1518500249):(i=s^a^r,n=1859775393):A<60?(i=s&a|r&(s|a),n=2400959708):(i=s^a^r,n=3395469782);const e=(o<<5|o>>>27)+i+g+n+t[A]&4294967295;g=r,r=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+r&4294967295,this.chain_[4]=this.chain_[4]+g&4294967295}update(A,e){if(null==A)return;void 0===e&&(e=A.length);const t=e-this.blockSize;let i=0;const n=this.buf_;let o=this.inbuf_;for(;i<e;){if(0===o)for(;i<=t;)this.compress_(A,i),i+=this.blockSize;if("string"==typeof A){for(;i<e;)if(n[o]=A.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(n),o=0;break}}else for(;i<e;)if(n[o]=A[i],++o,++i,o===this.blockSize){this.compress_(n),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const A=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let A=this.blockSize-1;A>=56;A--)this.buf_[A]=255&e,e/=256;this.compress_(this.buf_);let t=0;for(let e=0;e<5;e++)for(let i=24;i>=0;i-=8)A[t]=this.chain_[e]>>i&255,++t;return A}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let A=1;A<this.blockSize;++A)this.pad_[A]=0;this.reset()}}function uA(A,e){const t=new wA(A,e);return t.subscribe.bind(t)}class wA{next(A){this.forEachObserver((e=>{e.next(A)}))}error(A){this.forEachObserver((e=>{e.error(A)})),this.close(A)}complete(){this.forEachObserver((A=>{A.complete()})),this.close()}subscribe(A,e,t){let i;if(void 0===A&&void 0===e&&void 0===t)throw new Error("Missing Observer.");i=function(A,e){if("object"!=typeof A||null===A)return!1;for(const t of e)if(t in A&&"function"==typeof A[t])return!0;return!1}(A,["next","error","complete"])?A:{next:A,error:e,complete:t},void 0===i.next&&(i.next=mA),void 0===i.error&&(i.error=mA),void 0===i.complete&&(i.complete=mA);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(A){}})),this.observers.push(i),n}unsubscribeOne(A){void 0!==this.observers&&void 0!==this.observers[A]&&(delete this.observers[A],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(A){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,A)}sendOne(A,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[A])try{e(this.observers[A])}catch(A){"undefined"!=typeof console&&console.error&&console.error(A)}}))}close(A){this.finalized||(this.finalized=!0,void 0!==A&&(this.finalError=A),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(A,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{A(this)})).catch((A=>{this.error(A)}))}}function mA(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(A,e){return`${A} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MA=function(A){const e=[];let t=0;for(let i=0;i<A.length;i++){let n=A.charCodeAt(i);if(n>=55296&&n<=56319){const e=n-55296;i++,S(i<A.length,"Surrogate pair missing trail surrogate.");n=65536+(e<<10)+(A.charCodeAt(i)-56320)}n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=63&n|128):n<65536?(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=63&n|128):(e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=63&n|128)}return e},DA=function(A){let e=0;for(let t=0;t<A.length;t++){const i=A.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function RA(A){return A&&A._delegate?A._delegate:A}class kA{setInstantiationMode(A){return this.instantiationMode=A,this}setMultipleInstances(A){return this.multipleInstances=A,this}setServiceProps(A){return this.serviceProps=A,this}setInstanceCreatedCallback(A){return this.onInstanceCreated=A,this}constructor(A,e,t){this.name=A,this.instanceFactory=e,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class YA{get(A){const e=this.normalizeInstanceIdentifier(A);if(!this.instancesDeferred.has(e)){const A=new $;if(this.instancesDeferred.set(e,A),this.isInitialized(e)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:e});t&&A.resolve(t)}catch(A){}}return this.instancesDeferred.get(e).promise}getImmediate(A){var e;const t=this.normalizeInstanceIdentifier(null==A?void 0:A.identifier),i=null!==(e=null==A?void 0:A.optional)&&void 0!==e&&e;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(A){if(i)return null;throw A}}getComponent(){return this.component}setComponent(A){if(A.name!==this.name)throw Error(`Mismatching Component ${A.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=A,this.shouldAutoInitialize()){if(function(A){return"EAGER"===A.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(A){}for(const[A,e]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(A);try{const A=this.getOrInitializeService({instanceIdentifier:t});e.resolve(A)}catch(A){}}}}clearInstance(A="[DEFAULT]"){this.instancesDeferred.delete(A),this.instancesOptions.delete(A),this.instances.delete(A)}async delete(){const A=Array.from(this.instances.values());await Promise.all([...A.filter((A=>"INTERNAL"in A)).map((A=>A.INTERNAL.delete())),...A.filter((A=>"_delete"in A)).map((A=>A._delete()))])}isComponentSet(){return null!=this.component}isInitialized(A="[DEFAULT]"){return this.instances.has(A)}getOptions(A="[DEFAULT]"){return this.instancesOptions.get(A)||{}}initialize(A={}){const{options:e={}}=A,t=this.normalizeInstanceIdentifier(A.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:t,options:e});for(const[A,e]of this.instancesDeferred.entries()){t===this.normalizeInstanceIdentifier(A)&&e.resolve(i)}return i}onInit(A,e){var t;const i=this.normalizeInstanceIdentifier(e),n=null!==(t=this.onInitCallbacks.get(i))&&void 0!==t?t:new Set;n.add(A),this.onInitCallbacks.set(i,n);const o=this.instances.get(i);return o&&A(o,i),()=>{n.delete(A)}}invokeOnInitCallbacks(A,e){const t=this.onInitCallbacks.get(e);if(t)for(const i of t)try{i(A,e)}catch(A){}}getOrInitializeService({instanceIdentifier:A,options:e={}}){let t=this.instances.get(A);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:(i=A,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(A,t),this.instancesOptions.set(A,e),this.invokeOnInitCallbacks(t,A),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,A,t)}catch(A){}var i;return t||null}normalizeInstanceIdentifier(A="[DEFAULT]"){return this.component?this.component.multipleInstances?A:"[DEFAULT]":A}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(A,e){this.name=A,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class GA{addComponent(A){const e=this.getProvider(A.name);if(e.isComponentSet())throw new Error(`Component ${A.name} has already been registered with ${this.name}`);e.setComponent(A)}addOrOverwriteComponent(A){this.getProvider(A.name).isComponentSet()&&this.providers.delete(A.name),this.addComponent(A)}getProvider(A){if(this.providers.has(A))return this.providers.get(A);const e=new YA(A,this);return this.providers.set(A,e),e}getProviders(){return Array.from(this.providers.values())}constructor(A){this.name=A,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=[];var yA,UA;(UA=yA||(yA={}))[UA.DEBUG=0]="DEBUG",UA[UA.VERBOSE=1]="VERBOSE",UA[UA.INFO=2]="INFO",UA[UA.WARN=3]="WARN",UA[UA.ERROR=4]="ERROR",UA[UA.SILENT=5]="SILENT";const SA={debug:yA.DEBUG,verbose:yA.VERBOSE,info:yA.INFO,warn:yA.WARN,error:yA.ERROR,silent:yA.SILENT},xA=yA.INFO,KA={[yA.DEBUG]:"log",[yA.VERBOSE]:"log",[yA.INFO]:"info",[yA.WARN]:"warn",[yA.ERROR]:"error"},fA=(A,e,...t)=>{if(e<A.logLevel)return;const i=(new Date).toISOString(),n=KA[e];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[n](`[${i}]  ${A.name}:`,...t)};class VA{get logLevel(){return this._logLevel}set logLevel(A){if(!(A in yA))throw new TypeError(`Invalid value "${A}" assigned to \`logLevel\``);this._logLevel=A}setLogLevel(A){this._logLevel="string"==typeof A?SA[A]:A}get logHandler(){return this._logHandler}set logHandler(A){if("function"!=typeof A)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=A}get userLogHandler(){return this._userLogHandler}set userLogHandler(A){this._userLogHandler=A}debug(...A){this._userLogHandler&&this._userLogHandler(this,yA.DEBUG,...A),this._logHandler(this,yA.DEBUG,...A)}log(...A){this._userLogHandler&&this._userLogHandler(this,yA.VERBOSE,...A),this._logHandler(this,yA.VERBOSE,...A)}info(...A){this._userLogHandler&&this._userLogHandler(this,yA.INFO,...A),this._logHandler(this,yA.INFO,...A)}warn(...A){this._userLogHandler&&this._userLogHandler(this,yA.WARN,...A),this._logHandler(this,yA.WARN,...A)}error(...A){this._userLogHandler&&this._userLogHandler(this,yA.ERROR,...A),this._logHandler(this,yA.ERROR,...A)}constructor(A){this.name=A,this._logLevel=xA,this._logHandler=fA,this._userLogHandler=null,FA.push(this)}}let JA,ZA;const NA=new WeakMap,bA=new WeakMap,qA=new WeakMap,TA=new WeakMap,OA=new WeakMap;let WA={get(A,e,t){if(A instanceof IDBTransaction){if("done"===e)return bA.get(A);if("objectStoreNames"===e)return A.objectStoreNames||qA.get(A);if("store"===e)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vA(A[e])},set:(A,e,t)=>(A[e]=t,!0),has:(A,e)=>A instanceof IDBTransaction&&("done"===e||"store"===e)||e in A};function LA(A){return A!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ZA||(ZA=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(A)?function(...e){return A.apply(HA(this),e),vA(NA.get(this))}:function(...e){return vA(A.apply(HA(this),e))}:function(e,...t){const i=A.call(HA(this),e,...t);return qA.set(i,e.sort?e.sort():[e]),vA(i)}}function zA(A){return"function"==typeof A?LA(A):(A instanceof IDBTransaction&&function(A){if(bA.has(A))return;const e=new Promise(((e,t)=>{const i=()=>{A.removeEventListener("complete",n),A.removeEventListener("error",o),A.removeEventListener("abort",o)},n=()=>{e(),i()},o=()=>{t(A.error||new DOMException("AbortError","AbortError")),i()};A.addEventListener("complete",n),A.addEventListener("error",o),A.addEventListener("abort",o)}));bA.set(A,e)}(A),e=A,(JA||(JA=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((A=>e instanceof A))?new Proxy(A,WA):A);var e}function vA(A){if(A instanceof IDBRequest)return function(A){const e=new Promise(((e,t)=>{const i=()=>{A.removeEventListener("success",n),A.removeEventListener("error",o)},n=()=>{e(vA(A.result)),i()},o=()=>{t(A.error),i()};A.addEventListener("success",n),A.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&NA.set(e,A)})).catch((()=>{})),OA.set(e,A),e}(A);if(TA.has(A))return TA.get(A);const e=zA(A);return e!==A&&(TA.set(A,e),OA.set(e,A)),e}const HA=A=>OA.get(A);function jA(A,e,{blocked:t,upgrade:i,blocking:n,terminated:o}={}){const s=indexedDB.open(A,e),a=vA(s);return i&&s.addEventListener("upgradeneeded",(A=>{i(vA(s.result),A.oldVersion,A.newVersion,vA(s.transaction))})),t&&s.addEventListener("blocked",(()=>t())),a.then((A=>{o&&A.addEventListener("close",(()=>o())),n&&A.addEventListener("versionchange",(()=>n()))})).catch((()=>{})),a}const PA=["get","getKey","getAll","getAllKeys","count"],XA=["put","add","delete","clear"],_A=new Map;function $A(A,e){if(!(A instanceof IDBDatabase)||e in A||"string"!=typeof e)return;if(_A.get(e))return _A.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,n=XA.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!n&&!PA.includes(t))return;const o=async function(A,...e){const o=this.transaction(A,n?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(e.shift())),(await Promise.all([s[t](...e),n&&o.done]))[0]};return _A.set(e,o),o}WA=(A=>({...A,get:(e,t,i)=>$A(e,t)||A.get(e,t,i),has:(e,t)=>!!$A(e,t)||A.has(e,t)}))(WA);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{getPlatformInfoString(){return this.container.getProviders().map((A=>{if(function(A){const e=A.getComponent();return"VERSION"===(null==e?void 0:e.type)}(A)){const e=A.getImmediate();return`${e.library}/${e.version}`}return null})).filter((A=>A)).join(" ")}constructor(A){this.container=A}}const ee=new VA("@firebase/app"),te={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ie=new Map,ne=new Map;function oe(A,e){try{A.container.addComponent(e)}catch(t){ee.debug(`Component ${e.name} failed to register with FirebaseApp ${A.name}`,t)}}function se(A){const e=A.name;if(ne.has(e))return ee.debug(`There were multiple attempts to register component ${e}.`),!1;ne.set(e,A);for(const e of ie.values())oe(e,A);return!0}function ae(A,e){const t=A.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),A.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const re=new tA("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(A){this.checkDestroyed(),this._automaticDataCollectionEnabled=A}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(A){this._isDeleted=A}checkDestroyed(){if(this.isDeleted)throw re.create("app-deleted",{appName:this._name})}constructor(A,e,t){this._isDeleted=!1,this._options=Object.assign({},A),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new kA("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(A,e={}){let t=A;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),n=i.name;if("string"!=typeof n||!n)throw re.create("bad-app-name",{appName:String(n)});var o;if(t||(t=null===(o=j())||void 0===o?void 0:o.config),!t)throw re.create("no-options");const s=ie.get(n);if(s){if(cA(t,s.options)&&cA(i,s.config))return s;throw re.create("duplicate-app",{appName:n})}const a=new GA(n);for(const A of ne.values())a.addComponent(A);const r=new ge(t,i,a);return ie.set(n,r),r}function Ie(A="[DEFAULT]"){const e=ie.get(A);if(!e&&"[DEFAULT]"===A)return le();if(!e)throw re.create("no-app",{appName:A});return e}function Ce(A,e,t){var i;let n=null!==(i=te[A])&&void 0!==i?i:A;t&&(n+=`-${t}`);const o=n.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const A=[`Unable to register library "${n}" with version "${e}":`];return o&&A.push(`library name "${n}" contains illegal characters (whitespace or "/")`),o&&s&&A.push("and"),s&&A.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ee.warn(A.join(" "))}se(new kA(`${n}-version`,(()=>({library:n,version:e})),"VERSION"))}let ce=null;function Ee(){return ce||(ce=jA("firebase-heartbeat-database",1,{upgrade:(A,e)=>{if(0===e)A.createObjectStore("firebase-heartbeat-store")}}).catch((A=>{throw re.create("idb-open",{originalErrorMessage:A.message})}))),ce}async function Be(A,e){try{const t=(await Ee()).transaction("firebase-heartbeat-store","readwrite"),i=t.objectStore("firebase-heartbeat-store");return await i.put(e,he(A)),t.done}catch(A){if(A instanceof eA)ee.warn(A.message);else{const e=re.create("idb-set",{originalErrorMessage:null==A?void 0:A.message});ee.warn(e.message)}}}function he(A){return`${A.name}!${A.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{async triggerHeartbeat(){const A=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=de();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((A=>A.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:A}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((A=>{const e=new Date(A.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const A=de(),{heartbeatsToSend:e,unsentEntries:t}=function(A,e=1024){const t=[];let i=A.slice();for(const n of A){const A=t.find((A=>A.agent===n.agent));if(A){if(A.dates.push(n.date),we(t)>e){A.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),we(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=J(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=A,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(A){this.container=A,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ue(e),this._heartbeatsCachePromise=this._storage.read().then((A=>(this._heartbeatsCache=A,A)))}}function de(){return(new Date).toISOString().substring(0,10)}class ue{async runIndexedDBEnvironmentCheck(){return!!v()&&new Promise(((A,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(i);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(i),A(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var A;e((null===(A=n.error)||void 0===A?void 0:A.message)||"")}}catch(A){e(A)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const A=await async function(A){try{return(await Ee()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(he(A))}catch(A){if(A instanceof eA)ee.warn(A.message);else{const e=re.create("idb-get",{originalErrorMessage:null==A?void 0:A.message});ee.warn(e.message)}}}(this.app);return A||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(A){var e;if(await this._canUseIndexedDBPromise){const t=await this.read();return Be(this.app,{lastSentHeartbeatDate:null!==(e=A.lastSentHeartbeatDate)&&void 0!==e?e:t.lastSentHeartbeatDate,heartbeats:A.heartbeats})}}async add(A){var e;if(await this._canUseIndexedDBPromise){const t=await this.read();return Be(this.app,{lastSentHeartbeatDate:null!==(e=A.lastSentHeartbeatDate)&&void 0!==e?e:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...A.heartbeats]})}}constructor(A){this.app=A,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function we(A){return J(JSON.stringify({version:2,heartbeats:A})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;me="",se(new kA("platform-logger",(A=>new Ae(A)),"PRIVATE")),se(new kA("heartbeat",(A=>new Qe(A)),"PRIVATE")),Ce("@firebase/app","0.9.0",me),Ce("@firebase/app","0.9.0","esm2017"),Ce("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ce("firebase","9.15.0","app");function pe(A,e){var t={};for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&e.indexOf(i)<0&&(t[i]=A[i]);if(null!=A&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(A);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(A,i[n])&&(t[i[n]]=A[i[n]])}return t}Object.create;Object.create;function Me(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const De=Me,Re=new tA("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ke=new VA("@firebase/auth");function Ye(A,...e){ke.logLevel<=yA.ERROR&&ke.error(`Auth (9.15.0): ${A}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(A,...e){throw Se(A,...e)}function Fe(A,...e){return Se(A,...e)}function ye(A,e,t){const i=Object.assign(Object.assign({},De()),{[e]:t});return new tA("auth","Firebase",i).create(e,{appName:A.name})}function Ue(A,e,t){if(!(e instanceof t))throw t.name!==e.constructor.name&&Ge(A,"argument-error"),ye(A,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Se(A,...e){if("string"!=typeof A){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=A.name),A._errorFactory.create(t,...i)}return Re.create(A,...e)}function xe(A,e,...t){if(!A)throw Se(e,...t)}function Ke(A){const e="INTERNAL ASSERTION FAILED: "+A;throw Ye(e),new Error(e)}function fe(A,e){A||Ke(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Map;function Je(A){fe(A instanceof Function,"Expected a class definition");let e=Ve.get(A);return e?(fe(e instanceof A,"Instance stored in cache mismatched with class"),e):(e=new A,Ve.set(A,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(){var A;return"undefined"!=typeof self&&(null===(A=self.location)||void 0===A?void 0:A.href)||""}function Ne(){return"http:"===be()||"https:"===be()}function be(){var A;return"undefined"!=typeof self&&(null===(A=self.location)||void 0===A?void 0:A.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ne()||O()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{get(){return qe()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(A,e){this.shortDelay=A,this.longDelay=e,fe(e>A,"Short delay should be less than long delay!"),this.isMobile=T()||W()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(A,e){fe(A.emulator,"Emulator should always be set here");const{url:t}=A.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{static initialize(A,e,t){this.fetchImpl=A,e&&(this.headersImpl=e),t&&(this.responseImpl=t)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ze=new Te(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(A,e){return A.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:A.tenantId}):e}async function He(A,e,t,i,n={}){return je(A,n,(async()=>{let n={},o={};i&&("GET"===e?o=i:n={body:JSON.stringify(i)});const s=BA(Object.assign({key:A.config.apiKey},o)).slice(1),a=await A._getAdditionalHeaders();return a["Content-Type"]="application/json",A.languageCode&&(a["X-Firebase-Locale"]=A.languageCode),We.fetch()(Xe(A,A.config.apiHost,t,s),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},n))}))}async function je(A,e,t){A._canInitEmulator=!1;const i=Object.assign(Object.assign({},Le),e);try{const e=new _e(A),n=await Promise.race([t(),e.promise]);e.clearNetworkTimeout();const o=await n.json();if("needConfirmation"in o)throw $e(A,"account-exists-with-different-credential",o);if(n.ok&&!("errorMessage"in o))return o;{const e=n.ok?o.errorMessage:o.error.message,[t,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw $e(A,"credential-already-in-use",o);if("EMAIL_EXISTS"===t)throw $e(A,"email-already-in-use",o);if("USER_DISABLED"===t)throw $e(A,"user-disabled",o);const a=i[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw ye(A,a,s);Ge(A,a)}}catch(e){if(e instanceof eA)throw e;Ge(A,"network-request-failed")}}async function Pe(A,e,t,i,n={}){const o=await He(A,e,t,i,n);return"mfaPendingCredential"in o&&Ge(A,"multi-factor-auth-required",{_serverResponse:o}),o}function Xe(A,e,t,i){const n=`${e}${t}?${i}`;return A.config.emulator?Oe(A.config,n):`${A.config.apiScheme}://${n}`}class _e{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(A){this.auth=A,this.timer=null,this.promise=new Promise(((A,e)=>{this.timer=setTimeout((()=>e(Fe(this.auth,"network-request-failed"))),ze.get())}))}}function $e(A,e,t){const i={appName:A.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const n=Fe(A,e,i);return n.customData._tokenResponse=t,n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(A){if(A)try{const e=new Date(Number(A));if(!isNaN(e.getTime()))return e.toUTCString()}catch(A){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(A){return 1e3*Number(A)}function tt(A){const[e,t,i]=A.split(".");if(void 0===e||void 0===t||void 0===i)return Ye("JWT malformed, contained fewer than 3 sections"),null;try{const A=Z(t);return A?JSON.parse(A):(Ye("Failed to decode base64 JWT payload"),null)}catch(A){return Ye("Caught error parsing JWT payload as JSON",null==A?void 0:A.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(A,e,t=!1){if(t)return e;try{return await e}catch(e){throw e instanceof eA&&function({code:A}){return"auth/user-disabled"===A||"auth/user-token-expired"===A}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&A.auth.currentUser===A&&await A.auth.signOut(),e}}class nt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(A){var e;if(A){const A=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),A}{this.errorBackoff=3e4;const A=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,A)}}schedule(A=!1){if(!this.isRunning)return;const e=this.getInterval(A);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(A){return void("auth/network-request-failed"===(null==A?void 0:A.code)&&this.schedule(!0))}this.schedule()}constructor(A){this.user=A,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{_initializeTime(){this.lastSignInTime=At(this.lastLoginAt),this.creationTime=At(this.createdAt)}_copy(A){this.createdAt=A.createdAt,this.lastLoginAt=A.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(A,e){this.createdAt=A,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(A){var e;const t=A.auth,i=await A.getIdToken(),n=await it(A,async function(A,e){return He(A,"POST","/v1/accounts:lookup",e)}(t,{idToken:i}));xe(null==n?void 0:n.users.length,t,"internal-error");const o=n.users[0];A._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?o.providerUserInfo.map((A=>{var{providerId:e}=A,t=pe(A,["providerId"]);return{providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}})):[];const a=(r=A.providerData,g=s,[...r.filter((A=>!g.some((e=>e.providerId===A.providerId)))),...g]);var r,g;const l=A.isAnonymous,I=!(A.email&&o.passwordHash||(null==a?void 0:a.length)),C=!!l&&I,c={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ot(o.createdAt,o.lastLoginAt),isAnonymous:C};Object.assign(A,c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(A){xe(A.idToken,"internal-error"),xe(void 0!==A.idToken,"internal-error"),xe(void 0!==A.refreshToken,"internal-error");const e="expiresIn"in A&&void 0!==A.expiresIn?Number(A.expiresIn):function(A){const e=tt(A);return xe(e,"internal-error"),xe(void 0!==e.exp,"internal-error"),xe(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(A.idToken);this.updateTokensAndExpiration(A.idToken,A.refreshToken,e)}async getToken(A,e=!1){return xe(!this.accessToken||this.refreshToken,A,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(A,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(A,e){const{accessToken:t,refreshToken:i,expiresIn:n}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(A,e){const t=await je(A,{},(async()=>{const t=BA({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:n}=A.config,o=Xe(A,i,"/v1/token",`key=${n}`),s=await A._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",We.fetch()(o,{method:"POST",headers:s,body:t})}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}(A,e);this.updateTokensAndExpiration(t,i,Number(n))}updateTokensAndExpiration(A,e,t){this.refreshToken=e||null,this.accessToken=A||null,this.expirationTime=Date.now()+1e3*t}static fromJSON(A,e){const{refreshToken:t,accessToken:i,expirationTime:n}=e,o=new at;return t&&(xe("string"==typeof t,"internal-error",{appName:A}),o.refreshToken=t),i&&(xe("string"==typeof i,"internal-error",{appName:A}),o.accessToken=i),n&&(xe("number"==typeof n,"internal-error",{appName:A}),o.expirationTime=n),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(A){this.accessToken=A.accessToken,this.refreshToken=A.refreshToken,this.expirationTime=A.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return Ke("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(A,e){xe("string"==typeof A||void 0===A,"internal-error",{appName:e})}class gt{async getIdToken(A){const e=await it(this,this.stsTokenManager.getToken(this.auth,A));return xe(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(A){return async function(A,e=!1){const t=RA(A),i=await t.getIdToken(e),n=tt(i);xe(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const o="object"==typeof n.firebase?n.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:n,token:i,authTime:At(et(n.auth_time)),issuedAtTime:At(et(n.iat)),expirationTime:At(et(n.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,A)}reload(){return async function(A){const e=RA(A);await st(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(A){this!==A&&(xe(this.uid===A.uid,this.auth,"internal-error"),this.displayName=A.displayName,this.photoURL=A.photoURL,this.email=A.email,this.emailVerified=A.emailVerified,this.phoneNumber=A.phoneNumber,this.isAnonymous=A.isAnonymous,this.tenantId=A.tenantId,this.providerData=A.providerData.map((A=>Object.assign({},A))),this.metadata._copy(A.metadata),this.stsTokenManager._assign(A.stsTokenManager))}_clone(A){return new gt(Object.assign(Object.assign({},this),{auth:A,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(A){xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=A,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(A){this.reloadListener?this.reloadListener(A):this.reloadUserInfo=A}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(A,e=!1){let t=!1;A.idToken&&A.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(A),t=!0),e&&await st(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){const A=await this.getIdToken();return await it(this,async function(A,e){return He(A,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:A})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((A=>Object.assign({},A))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(A,e){var t,i,n,o,s,a,r,g;const l=null!==(t=e.displayName)&&void 0!==t?t:void 0,I=null!==(i=e.email)&&void 0!==i?i:void 0,C=null!==(n=e.phoneNumber)&&void 0!==n?n:void 0,c=null!==(o=e.photoURL)&&void 0!==o?o:void 0,E=null!==(s=e.tenantId)&&void 0!==s?s:void 0,B=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,h=null!==(r=e.createdAt)&&void 0!==r?r:void 0,Q=null!==(g=e.lastLoginAt)&&void 0!==g?g:void 0,{uid:d,emailVerified:u,isAnonymous:w,providerData:m,stsTokenManager:p}=e;xe(d&&p,A,"internal-error");const M=at.fromJSON(this.name,p);xe("string"==typeof d,A,"internal-error"),rt(l,A.name),rt(I,A.name),xe("boolean"==typeof u,A,"internal-error"),xe("boolean"==typeof w,A,"internal-error"),rt(C,A.name),rt(c,A.name),rt(E,A.name),rt(B,A.name),rt(h,A.name),rt(Q,A.name);const D=new gt({uid:d,auth:A,email:I,emailVerified:u,displayName:l,isAnonymous:w,photoURL:c,phoneNumber:C,tenantId:E,stsTokenManager:M,createdAt:h,lastLoginAt:Q});return m&&Array.isArray(m)&&(D.providerData=m.map((A=>Object.assign({},A)))),B&&(D._redirectEventId=B),D}static async _fromIdTokenResponse(A,e,t=!1){const i=new at;i.updateFromServerResponse(e);const n=new gt({uid:e.localId,auth:A,stsTokenManager:i,isAnonymous:t});return await st(n),n}constructor(A){var{uid:e,auth:t,stsTokenManager:i}=A,n=pe(A,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new ot(n.createdAt||void 0,n.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{async _isAvailable(){return!0}async _set(A,e){this.storage[A]=e}async _get(A){const e=this.storage[A];return void 0===e?null:e}async _remove(A){delete this.storage[A]}_addListener(A,e){}_removeListener(A,e){}constructor(){this.type="NONE",this.storage={}}}lt.type="NONE";const It=lt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(A,e,t){return`firebase:${A}:${e}:${t}`}class ct{setCurrentUser(A){return this.persistence._set(this.fullUserKey,A.toJSON())}async getCurrentUser(){const A=await this.persistence._get(this.fullUserKey);return A?gt._fromJSON(this.auth,A):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(A){if(this.persistence===A)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=A,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(A,e,t="authUser"){if(!e.length)return new ct(Je(It),A,t);const i=(await Promise.all(e.map((async A=>{if(await A._isAvailable())return A})))).filter((A=>A));let n=i[0]||Je(It);const o=Ct(t,A.config.apiKey,A.name);let s=null;for(const t of e)try{const e=await t._get(o);if(e){const i=gt._fromJSON(A,e);t!==n&&(s=i),n=t;break}}catch(A){}const a=i.filter((A=>A._shouldAllowMigration));return n._shouldAllowMigration&&a.length?(n=a[0],s&&await n._set(o,s.toJSON()),await Promise.all(e.map((async A=>{if(A!==n)try{await A._remove(o)}catch(A){}}))),new ct(n,A,t)):new ct(n,A,t)}constructor(A,e,t){this.persistence=A,this.auth=e,this.userKey=t;const{config:i,name:n}=this.auth;this.fullUserKey=Ct(this.userKey,i.apiKey,n),this.fullPersistenceKey=Ct("persistence",i.apiKey,n),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(A){const e=A.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wt(e))return"Blackberry";if(mt(e))return"Webos";if(ht(e))return"Safari";if((e.includes("chrome/")||Qt(e))&&!e.includes("edge/"))return"Chrome";if(ut(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=A.match(e);if(2===(null==t?void 0:t.length))return t[1]}return"Other"}function Bt(A=q()){return/firefox\//i.test(A)}function ht(A=q()){const e=A.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qt(A=q()){return/crios\//i.test(A)}function dt(A=q()){return/iemobile/i.test(A)}function ut(A=q()){return/android/i.test(A)}function wt(A=q()){return/blackberry/i.test(A)}function mt(A=q()){return/webos/i.test(A)}function pt(A=q()){return/iphone|ipad|ipod/i.test(A)||/macintosh/i.test(A)&&/mobile/i.test(A)}function Mt(){return L()&&10===document.documentMode}function Dt(A=q()){return pt(A)||ut(A)||mt(A)||wt(A)||/windows phone/i.test(A)||dt(A)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(A,e=[]){let t;switch(A){case"Browser":t=Et(q());break;case"Worker":t=`${Et(q())}-${A}`;break;default:t=A}return`${t}/JsCore/9.15.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{pushCallback(A,e){const t=e=>new Promise(((t,i)=>{try{t(A(e))}catch(A){i(A)}}));t.onAbort=e,this.queue.push(t);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(A){if(this.auth.currentUser===A)return;const e=[];try{for(const t of this.queue)await t(A),t.onAbort&&e.push(t.onAbort)}catch(A){e.reverse();for(const A of e)try{A()}catch(A){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==A?void 0:A.message})}}constructor(A){this.auth=A,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{_initializeWithPersistence(A,e){return e&&(this._popupRedirectResolver=Je(e)),this._initializationPromise=this.queue((async()=>{var t,i;if(!this._deleted&&(this.persistenceManager=await ct.create(this,A),!this._deleted)){if(null===(t=this._popupRedirectResolver)||void 0===t?void 0:t._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(A){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const A=await this.assertedPersistence.getCurrentUser();return this.currentUser||A?this.currentUser&&A&&this.currentUser.uid===A.uid?(this._currentUser._assign(A),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(A,!0):void 0}async initializeCurrentUser(A){var e;const t=await this.assertedPersistence.getCurrentUser();let i=t,n=!1;if(A&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(A);t&&t!==o||!(null==s?void 0:s.user)||(i=s.user,n=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(i)}catch(A){i=t,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(A)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(A){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,A,!0)}catch(A){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(A){try{await st(A)}catch(A){if("auth/network-request-failed"!==(null==A?void 0:A.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(A)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const A=navigator;return A.languages&&A.languages[0]||A.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(A){const e=A?RA(A):null;return e&&xe(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(A,e=!1){if(!this._deleted)return A&&xe(this.tenantId===A.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(A),this.queue((async()=>{await this.directlySetCurrentUser(A),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(A){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Je(A))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(A){this._errorFactory=new tA("auth","Firebase",A())}onAuthStateChanged(A,e,t){return this.registerStateListener(this.authStateSubscription,A,e,t)}beforeAuthStateChanged(A,e){return this.beforeStateQueue.pushCallback(A,e)}onIdTokenChanged(A,e,t){return this.registerStateListener(this.idTokenSubscription,A,e,t)}toJSON(){var A;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(A=this._currentUser)||void 0===A?void 0:A.toJSON()}}async _setRedirectUser(A,e){const t=await this.getOrInitRedirectPersistenceManager(e);return null===A?t.removeCurrentUser():t.setCurrentUser(A)}async getOrInitRedirectPersistenceManager(A){if(!this.redirectPersistenceManager){const e=A&&Je(A)||this._popupRedirectResolver;xe(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[Je(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(A){var e,t;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===A?this._currentUser:(null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId)===A?this.redirectUser:null}async _persistUserIfCurrent(A){if(A===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(A)))}_notifyListenersIfCurrent(A){A===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var A,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=null!==(e=null===(A=this.currentUser)||void 0===A?void 0:A.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(A,e,t,i){if(this._deleted)return()=>{};const n="function"==typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return xe(o,this,"internal-error"),o.then((()=>n(this.currentUser))),"function"==typeof e?A.addObserver(e,t,i):A.addObserver(e)}async directlySetCurrentUser(A){this.currentUser&&this.currentUser!==A&&this._currentUser._stopProactiveRefresh(),A&&this.isProactiveRefreshEnabled&&A._startProactiveRefresh(),this.currentUser=A,A?await this.assertedPersistence.setCurrentUser(A):await this.assertedPersistence.removeCurrentUser()}queue(A){return this.operations=this.operations.then(A,A),this.operations}get assertedPersistence(){return xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(A){A&&!this.frameworks.includes(A)&&(this.frameworks.push(A),this.frameworks.sort(),this.clientVersion=Rt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var A;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(null===(A=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===A?void 0:A.getHeartbeatsHeader());return t&&(e["X-Firebase-Client"]=t),e}constructor(A,e,t){this.app=A,this.heartbeatServiceProvider=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ft(this),this.idTokenSubscription=new Ft(this),this.beforeStateQueue=new kt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Re,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=A.name,this.clientVersion=t.sdkClientVersion}}function Gt(A){return RA(A)}class Ft{get next(){return xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(A){this.auth=A,this.observer=null,this.addObserver=uA((A=>this.observer=A))}}function yt(A,e,t){const i=Gt(A);xe(i._canInitEmulator,i,"emulator-config-failed"),xe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const n=!!(null==t?void 0:t.disableWarnings),o=Ut(e),{host:s,port:a}=function(A){const e=Ut(A),t=/(\/\/)?([^?#/]+)/.exec(A.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(i);if(n){const A=n[1];return{host:A,port:St(i.substr(A.length+1))}}{const[A,e]=i.split(":");return{host:A,port:St(e)}}}(e),r=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${r}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||function(){function A(){const A=document.createElement("p"),e=A.style;A.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",A.classList.add("firebase-emulator-warning"),document.body.appendChild(A)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",A):A())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ut(A){const e=A.indexOf(":");return e<0?"":A.substr(0,e+1)}function St(A){if(!A)return null;const e=Number(A);return isNaN(e)?null:e}class xt{toJSON(){return Ke("not implemented")}_getIdTokenResponse(A){return Ke("not implemented")}_linkToIdToken(A,e){return Ke("not implemented")}_getReauthenticationResolver(A){return Ke("not implemented")}constructor(A,e){this.providerId=A,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(A,e){return He(A,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft extends xt{static _fromEmailAndPassword(A,e){return new ft(A,e,"password")}static _fromEmailAndCode(A,e,t=null){return new ft(A,e,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(A){const e="string"==typeof A?JSON.parse(A):A;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(A){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(A,e){return Pe(A,"POST","/v1/accounts:signInWithPassword",ve(A,e))}(A,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(A,e){return Pe(A,"POST","/v1/accounts:signInWithEmailLink",ve(A,e))}(A,{email:this._email,oobCode:this._password});default:Ge(A,"internal-error")}}async _linkToIdToken(A,e){switch(this.signInMethod){case"password":return Kt(A,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(A,e){return Pe(A,"POST","/v1/accounts:signInWithEmailLink",ve(A,e))}(A,{idToken:e,email:this._email,oobCode:this._password});default:Ge(A,"internal-error")}}_getReauthenticationResolver(A){return this._getIdTokenResponse(A)}constructor(A,e,t,i=null){super("password",t),this._email=A,this._password=e,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(A,e){return Pe(A,"POST","/v1/accounts:signInWithIdp",ve(A,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends xt{static _fromParams(A){const e=new Jt(A.providerId,A.signInMethod);return A.idToken||A.accessToken?(A.idToken&&(e.idToken=A.idToken),A.accessToken&&(e.accessToken=A.accessToken),A.nonce&&!A.pendingToken&&(e.nonce=A.nonce),A.pendingToken&&(e.pendingToken=A.pendingToken)):A.oauthToken&&A.oauthTokenSecret?(e.accessToken=A.oauthToken,e.secret=A.oauthTokenSecret):Ge("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(A){const e="string"==typeof A?JSON.parse(A):A,{providerId:t,signInMethod:i}=e,n=pe(e,["providerId","signInMethod"]);if(!t||!i)return null;const o=new Jt(t,i);return o.idToken=n.idToken||void 0,o.accessToken=n.accessToken||void 0,o.secret=n.secret,o.nonce=n.nonce,o.pendingToken=n.pendingToken||null,o}_getIdTokenResponse(A){return Vt(A,this.buildRequest())}_linkToIdToken(A,e){const t=this.buildRequest();return t.idToken=e,Vt(A,t)}_getReauthenticationResolver(A){const e=this.buildRequest();return e.autoCreate=!1,Vt(A,e)}buildRequest(){const A={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)A.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),A.postBody=BA(e)}return A}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends xt{static _fromVerification(A,e){return new Nt({verificationId:A,verificationCode:e})}static _fromTokenResponse(A,e){return new Nt({phoneNumber:A,temporaryProof:e})}_getIdTokenResponse(A){return async function(A,e){return Pe(A,"POST","/v1/accounts:signInWithPhoneNumber",ve(A,e))}(A,this._makeVerificationRequest())}_linkToIdToken(A,e){return async function(A,e){const t=await Pe(A,"POST","/v1/accounts:signInWithPhoneNumber",ve(A,e));if(t.temporaryProof)throw $e(A,"account-exists-with-different-credential",t);return t}(A,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(A){return async function(A,e){return Pe(A,"POST","/v1/accounts:signInWithPhoneNumber",ve(A,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Zt)}(A,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:A,phoneNumber:e,verificationId:t,verificationCode:i}=this.params;return A&&e?{temporaryProof:A,phoneNumber:e}:{sessionInfo:t,code:i}}toJSON(){const A={providerId:this.providerId};return this.params.phoneNumber&&(A.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(A.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(A.verificationCode=this.params.verificationCode),this.params.verificationId&&(A.verificationId=this.params.verificationId),A}static fromJSON(A){"string"==typeof A&&(A=JSON.parse(A));const{verificationId:e,verificationCode:t,phoneNumber:i,temporaryProof:n}=A;return t||e||i||n?new Nt({verificationId:e,verificationCode:t,phoneNumber:i,temporaryProof:n}):null}constructor(A){super("phone","phone"),this.params=A}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{static parseLink(A){const e=function(A){const e=hA(QA(A)).link,t=e?hA(QA(e)).deep_link_id:null,i=hA(QA(A)).deep_link_id;return(i?hA(QA(i)).link:null)||i||t||e||A}(A);try{return new bt(e)}catch(A){return null}}constructor(A){var e,t,i,n,o,s;const a=hA(QA(A)),r=null!==(e=a.apiKey)&&void 0!==e?e:null,g=null!==(t=a.oobCode)&&void 0!==t?t:null,l=function(A){switch(A){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);xe(r&&g&&l,"argument-error"),this.apiKey=r,this.operation=l,this.code=g,this.continueUrl=null!==(n=a.continueUrl)&&void 0!==n?n:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{static credential(A,e){return ft._fromEmailAndPassword(A,e)}static credentialWithLink(A,e){const t=bt.parseLink(e);return xe(t,"argument-error"),ft._fromEmailAndCode(A,t.code,t.tenantId)}constructor(){this.providerId=qt.PROVIDER_ID}}qt.PROVIDER_ID="password",qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{setDefaultLanguage(A){this.defaultLanguageCode=A}setCustomParameters(A){return this.customParameters=A,this}getCustomParameters(){return this.customParameters}constructor(A){this.providerId=A,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Tt{addScope(A){return this.scopes.includes(A)||this.scopes.push(A),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends Ot{static credential(A){return Jt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:A})}static credentialFromResult(A){return Wt.credentialFromTaggedObject(A)}static credentialFromError(A){return Wt.credentialFromTaggedObject(A.customData||{})}static credentialFromTaggedObject({_tokenResponse:A}){if(!A||!("oauthAccessToken"in A))return null;if(!A.oauthAccessToken)return null;try{return Wt.credential(A.oauthAccessToken)}catch(A){return null}}constructor(){super("facebook.com")}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt extends Ot{static credential(A,e){return Jt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:A,accessToken:e})}static credentialFromResult(A){return Lt.credentialFromTaggedObject(A)}static credentialFromError(A){return Lt.credentialFromTaggedObject(A.customData||{})}static credentialFromTaggedObject({_tokenResponse:A}){if(!A)return null;const{oauthIdToken:e,oauthAccessToken:t}=A;if(!e&&!t)return null;try{return Lt.credential(e,t)}catch(A){return null}}constructor(){super("google.com"),this.addScope("profile")}}Lt.GOOGLE_SIGN_IN_METHOD="google.com",Lt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt extends Ot{static credential(A){return Jt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:A})}static credentialFromResult(A){return zt.credentialFromTaggedObject(A)}static credentialFromError(A){return zt.credentialFromTaggedObject(A.customData||{})}static credentialFromTaggedObject({_tokenResponse:A}){if(!A||!("oauthAccessToken"in A))return null;if(!A.oauthAccessToken)return null;try{return zt.credential(A.oauthAccessToken)}catch(A){return null}}constructor(){super("github.com")}}zt.GITHUB_SIGN_IN_METHOD="github.com",zt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends Ot{static credential(A,e){return Jt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:A,oauthTokenSecret:e})}static credentialFromResult(A){return vt.credentialFromTaggedObject(A)}static credentialFromError(A){return vt.credentialFromTaggedObject(A.customData||{})}static credentialFromTaggedObject({_tokenResponse:A}){if(!A)return null;const{oauthAccessToken:e,oauthTokenSecret:t}=A;if(!e||!t)return null;try{return vt.credential(e,t)}catch(A){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ht(A,e){return Pe(A,"POST","/v1/accounts:signUp",ve(A,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.TWITTER_SIGN_IN_METHOD="twitter.com",vt.PROVIDER_ID="twitter.com";class jt{static async _fromIdTokenResponse(A,e,t,i=!1){const n=await gt._fromIdTokenResponse(A,t,i),o=Pt(t);return new jt({user:n,providerId:o,_tokenResponse:t,operationType:e})}static async _forOperation(A,e,t){await A._updateTokensIfNecessary(t,!0);const i=Pt(t);return new jt({user:A,providerId:i,_tokenResponse:t,operationType:e})}constructor(A){this.user=A.user,this.providerId=A.providerId,this._tokenResponse=A._tokenResponse,this.operationType=A.operationType}}function Pt(A){return A.providerId?A.providerId:"phoneNumber"in A?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends eA{static _fromErrorAndOperation(A,e,t,i){return new Xt(A,e,t,i)}constructor(A,e,t,i){var n;super(e.code,e.message),this.operationType=t,this.user=i,Object.setPrototypeOf(this,Xt.prototype),this.customData={appName:A.name,tenantId:null!==(n=A.tenantId)&&void 0!==n?n:void 0,_serverResponse:e.customData._serverResponse,operationType:t}}}function _t(A,e,t,i){return("reauthenticate"===e?t._getReauthenticationResolver(A):t._getIdTokenResponse(A)).catch((t=>{if("auth/multi-factor-auth-required"===t.code)throw Xt._fromErrorAndOperation(A,t,e,i);throw t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(A,e,t=!1){const i=await it(A,e._linkToIdToken(A.auth,await A.getIdToken()),t);return jt._forOperation(A,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ai(A,e,t=!1){const{auth:i}=A,n="reauthenticate";try{const o=await it(A,_t(i,n,e,A),t);xe(o.idToken,i,"internal-error");const s=tt(o.idToken);xe(s,i,"internal-error");const{sub:a}=s;return xe(A.uid===a,i,"user-mismatch"),jt._forOperation(A,n,o)}catch(A){throw"auth/user-not-found"===(null==A?void 0:A.code)&&Ge(i,"user-mismatch"),A}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(A,e,t=!1){const i="signIn",n=await _t(A,i,e),o=await jt._fromIdTokenResponse(A,i,n);return t||await A._updateCurrentUser(o.user),o}async function ti(A,e){return ei(Gt(A),e)}async function ii(A,e,t){const i=Gt(A),n=await Ht(i,{returnSecureToken:!0,email:e,password:t}),o=await jt._fromIdTokenResponse(i,"signIn",n);return await i._updateCurrentUser(o.user),o}function ni(A,e,t){return ti(RA(A),qt.credential(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oi{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(A){return Promise.resolve(!1)}}_set(A,e){return this.storage.setItem(A,JSON.stringify(e)),Promise.resolve()}_get(A){const e=this.storage.getItem(A);return Promise.resolve(e?JSON.parse(e):null)}_remove(A){return this.storage.removeItem(A),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(A,e){this.storageRetriever=A,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends oi{forAllChangedKeys(A){for(const e of Object.keys(this.listeners)){const t=this.storage.getItem(e),i=this.localCache[e];t!==i&&A(e,i,t)}}onStorageEvent(A,e=!1){if(!A.key)return void this.forAllChangedKeys(((A,e,t)=>{this.notifyListeners(A,t)}));const t=A.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(t);if(A.newValue!==i)null!==A.newValue?this.storage.setItem(t,A.newValue):this.storage.removeItem(t);else if(this.localCache[t]===A.newValue&&!e)return}const i=()=>{const A=this.storage.getItem(t);(e||this.localCache[t]!==A)&&this.notifyListeners(t,A)},n=this.storage.getItem(t);Mt()&&n!==A.newValue&&A.newValue!==A.oldValue?setTimeout(i,10):i()}notifyListeners(A,e){this.localCache[A]=e;const t=this.listeners[A];if(t)for(const A of Array.from(t))A(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((A,e,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:A,oldValue:e,newValue:t}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(A,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[A]||(this.listeners[A]=new Set,this.localCache[A]=this.storage.getItem(A)),this.listeners[A].add(e)}_removeListener(A,e){this.listeners[A]&&(this.listeners[A].delete(e),0===this.listeners[A].size&&delete this.listeners[A]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(A,e){await super._set(A,e),this.localCache[A]=JSON.stringify(e)}async _get(A){const e=await super._get(A);return this.localCache[A]=JSON.stringify(e),e}async _remove(A){await super._remove(A),delete this.localCache[A]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(A,e)=>this.onStorageEvent(A,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const A=q();return ht(A)||pt(A)}()&&function(){try{return!(!window||window===window.top)}catch(A){return!1}}(),this.fallbackToPolling=Dt(),this._shouldAllowMigration=!0}}si.type="LOCAL";const ai=si;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends oi{_addListener(A,e){}_removeListener(A,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}ri.type="SESSION";const gi=ri;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{static _getInstance(A){const e=this.receivers.find((e=>e.isListeningto(A)));if(e)return e;const t=new li(A);return this.receivers.push(t),t}isListeningto(A){return this.eventTarget===A}async handleEvent(A){const e=A,{eventId:t,eventType:i,data:n}=e.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:i});const s=Array.from(o).map((async A=>A(e.origin,n))),a=await function(A){return Promise.all(A.map((async A=>{try{return{fulfilled:!0,value:await A}}catch(A){return{fulfilled:!1,reason:A}}})))}(s);e.ports[0].postMessage({status:"done",eventId:t,eventType:i,response:a})}_subscribe(A,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[A]||(this.handlersMap[A]=new Set),this.handlersMap[A].add(e)}_unsubscribe(A,e){this.handlersMap[A]&&e&&this.handlersMap[A].delete(e),e&&0!==this.handlersMap[A].size||delete this.handlersMap[A],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(A){this.eventTarget=A,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ii(A="",e=10){let t="";for(let A=0;A<e;A++)t+=Math.floor(10*Math.random());return A+t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li.receivers=[];class Ci{removeMessageHandler(A){A.messageChannel&&(A.messageChannel.port1.removeEventListener("message",A.onMessage),A.messageChannel.port1.close()),this.handlers.delete(A)}async _send(A,e,t=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let n,o;return new Promise(((s,a)=>{const r=Ii("",20);i.port1.start();const g=setTimeout((()=>{a(new Error("unsupported_event"))}),t);o={messageChannel:i,onMessage(A){const e=A;if(e.data.eventId===r)switch(e.data.status){case"ack":clearTimeout(g),n=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(n),s(e.data.response);break;default:clearTimeout(g),clearTimeout(n),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:A,eventId:r,data:e},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(A){this.target=A,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ei(){return void 0!==ci().WorkerGlobalScope&&"function"==typeof ci().importScripts}class Bi{toPromise(){return new Promise(((A,e)=>{this.request.addEventListener("success",(()=>{A(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(A){this.request=A}}function hi(A,e){return A.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Qi(){const A=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,t)=>{A.addEventListener("error",(()=>{t(A.error)})),A.addEventListener("upgradeneeded",(()=>{const e=A.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(A){t(A)}})),A.addEventListener("success",(async()=>{const t=A.result;t.objectStoreNames.contains("firebaseLocalStorage")?e(t):(t.close(),await function(){const A=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Bi(A).toPromise()}(),e(await Qi()))}))}))}async function di(A,e,t){const i=hi(A,!0).put({fbase_key:e,value:t});return new Bi(i).toPromise()}function ui(A,e){const t=hi(A,!0).delete(e);return new Bi(t).toPromise()}class wi{async _openDb(){return this.db||(this.db=await Qi()),this.db}async _withRetries(A){let e=0;for(;;)try{const e=await this._openDb();return await A(e)}catch(A){if(e++>3)throw A;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ei()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=li._getInstance(Ei()?self:null),this.receiver._subscribe("keyChanged",(async(A,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(A,e)=>["keyChanged"]))}async initializeSender(){var A,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(A){return null}}(),!this.activeServiceWorker)return;this.sender=new Ci(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(null===(A=t[0])||void 0===A?void 0:A.fulfilled)&&(null===(e=t[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(A){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:A},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const A=await Qi();return await di(A,"__sak","1"),await ui(A,"__sak"),!0}catch(A){}return!1}async _withPendingWrite(A){this.pendingWrites++;try{await A()}finally{this.pendingWrites--}}async _set(A,e){return this._withPendingWrite((async()=>(await this._withRetries((t=>di(t,A,e))),this.localCache[A]=e,this.notifyServiceWorker(A))))}async _get(A){const e=await this._withRetries((e=>async function(A,e){const t=hi(A,!1).get(e),i=await new Bi(t).toPromise();return void 0===i?null:i.value}(e,A)));return this.localCache[A]=e,e}async _remove(A){return this._withPendingWrite((async()=>(await this._withRetries((e=>ui(e,A))),delete this.localCache[A],this.notifyServiceWorker(A))))}async _poll(){const A=await this._withRetries((A=>{const e=hi(A,!1).getAll();return new Bi(e).toPromise()}));if(!A)return[];if(0!==this.pendingWrites)return[];const e=[],t=new Set;for(const{fbase_key:i,value:n}of A)t.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(n)&&(this.notifyListeners(i,n),e.push(i));for(const A of Object.keys(this.localCache))this.localCache[A]&&!t.has(A)&&(this.notifyListeners(A,null),e.push(A));return e}notifyListeners(A,e){this.localCache[A]=e;const t=this.listeners[A];if(t)for(const A of Array.from(t))A(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(A,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[A]||(this.listeners[A]=new Set,this._get(A)),this.listeners[A].add(e)}_removeListener(A,e){this.listeners[A]&&(this.listeners[A].delete(e),0===this.listeners[A].size&&delete this.listeners[A]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}wi.type="LOCAL";const mi=wi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(A){return new Promise(((e,t)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n,o;i.setAttribute("src",A),i.onload=e,i.onerror=A=>{const e=Fe("internal-error");e.customData=A,t(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==o?o:document).appendChild(i)}))}function Mi(A){return`__${A}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Mi("rcb"),new Te(3e4,6e4);async function Di(A,e,t){var i;const n=await t.verify();try{let o;if(xe("string"==typeof n,A,"argument-error"),xe("recaptcha"===t.type,A,"argument-error"),o="string"==typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){xe("enroll"===e.type,A,"internal-error");const t=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(A,e){return He(A,"POST","/v2/accounts/mfaEnrollment:start",ve(A,e))}(A,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:n}});return t.phoneSessionInfo.sessionInfo}{xe("signin"===e.type,A,"internal-error");const t=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;xe(t,A,"missing-multi-factor-info");const s=await function(A,e){return He(A,"POST","/v2/accounts/mfaSignIn:start",ve(A,e))}(A,{mfaPendingCredential:e.credential,mfaEnrollmentId:t,phoneSignInInfo:{recaptchaToken:n}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(A,e){return He(A,"POST","/v1/accounts:sendVerificationCode",ve(A,e))}(A,{phoneNumber:o.phoneNumber,recaptchaToken:n});return e}}finally{t._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ri{verifyPhoneNumber(A,e){return Di(this.auth,A,RA(e))}static credential(A,e){return Nt._fromVerification(A,e)}static credentialFromResult(A){const e=A;return Ri.credentialFromTaggedObject(e)}static credentialFromError(A){return Ri.credentialFromTaggedObject(A.customData||{})}static credentialFromTaggedObject({_tokenResponse:A}){if(!A)return null;const{phoneNumber:e,temporaryProof:t}=A;return e&&t?Nt._fromTokenResponse(e,t):null}constructor(A){this.providerId=Ri.PROVIDER_ID,this.auth=Gt(A)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ki(A,e){return e?Je(e):(xe(A._popupRedirectResolver,A,"argument-error"),A._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ri.PROVIDER_ID="phone",Ri.PHONE_SIGN_IN_METHOD="phone";class Yi extends xt{_getIdTokenResponse(A){return Vt(A,this._buildIdpRequest())}_linkToIdToken(A,e){return Vt(A,this._buildIdpRequest(e))}_getReauthenticationResolver(A){return Vt(A,this._buildIdpRequest())}_buildIdpRequest(A){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return A&&(e.idToken=A),e}constructor(A){super("custom","custom"),this.params=A}}function Gi(A){return ei(A.auth,new Yi(A),A.bypassAuthState)}function Fi(A){const{auth:e,user:t}=A;return xe(t,e,"internal-error"),Ai(t,new Yi(A),A.bypassAuthState)}async function yi(A){const{auth:e,user:t}=A;return xe(t,e,"internal-error"),$t(t,new Yi(A),A.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{execute(){return new Promise((async(A,e)=>{this.pendingPromise={resolve:A,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(A){this.reject(A)}}))}async onAuthEvent(A){const{urlResponse:e,sessionId:t,postBody:i,tenantId:n,error:o,type:s}=A;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:t,tenantId:n||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(A){this.reject(A)}}onError(A){this.reject(A)}getIdpTask(A){switch(A){case"signInViaPopup":case"signInViaRedirect":return Gi;case"linkViaPopup":case"linkViaRedirect":return yi;case"reauthViaPopup":case"reauthViaRedirect":return Fi;default:Ge(this.auth,"internal-error")}}resolve(A){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(A),this.unregisterAndCleanUp()}reject(A){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(A),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(A,e,t,i,n=!1){this.auth=A,this.resolver=t,this.user=i,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Te(2e3,1e4);async function xi(A,e,t){const i=Gt(A);Ue(A,e,Tt);const n=ki(i,t);return new Ki(i,"signInViaPopup",e,n).executeNotNull()}class Ki extends Ui{async executeNotNull(){const A=await this.execute();return xe(A,this.auth,"internal-error"),A}async onExecution(){fe(1===this.filter.length,"Popup operations only handle one event");const A=Ii();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],A),this.authWindow.associatedEvent=A,this.resolver._originValidation(this.auth).catch((A=>{this.reject(A)})),this.resolver._isIframeWebStorageSupported(this.auth,(A=>{A||this.reject(Fe(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var A;return(null===(A=this.authWindow)||void 0===A?void 0:A.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ki.currentPopupAction=null}pollUserCancellation(){const A=()=>{var e,t;(null===(t=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===t?void 0:t.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(A,Si.get())};A()}constructor(A,e,t,i,n){super(A,e,i,n),this.provider=t,this.authWindow=null,this.pollId=null,Ki.currentPopupAction&&Ki.currentPopupAction.cancel(),Ki.currentPopupAction=this}}Ki.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fi=new Map;class Vi extends Ui{async execute(){let A=fi.get(this.auth._key());if(!A){try{const e=await async function(A,e){const t=Ni(e),i=Zi(A);if(!await i._isAvailable())return!1;const n="true"===await i._get(t);return await i._remove(t),n}(this.resolver,this.auth)?await super.execute():null;A=()=>Promise.resolve(e)}catch(e){A=()=>Promise.reject(e)}fi.set(this.auth._key(),A)}return this.bypassAuthState||fi.set(this.auth._key(),(()=>Promise.resolve(null))),A()}async onAuthEvent(A){if("signInViaRedirect"===A.type)return super.onAuthEvent(A);if("unknown"!==A.type){if(A.eventId){const e=await this.auth._redirectUserForId(A.eventId);if(e)return this.user=e,super.onAuthEvent(A);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(A,e,t=!1){super(A,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,t),this.eventId=null}}function Ji(A,e){fi.set(A._key(),e)}function Zi(A){return Je(A._redirectPersistence)}function Ni(A){return Ct("pendingRedirect",A.config.apiKey,A.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(A,e,t=!1){const i=Gt(A),n=ki(i,e),o=new Vi(i,n,t),s=await o.execute();return s&&!t&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}class qi{registerConsumer(A){this.consumers.add(A),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,A)&&(this.sendToConsumer(this.queuedRedirectEvent,A),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(A){this.consumers.delete(A)}onEvent(A){if(this.hasEventBeenHandled(A))return!1;let e=!1;return this.consumers.forEach((t=>{this.isEventForConsumer(A,t)&&(e=!0,this.sendToConsumer(A,t),this.saveEventToCache(A))})),this.hasHandledPotentialRedirect||!function(A){switch(A.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oi(A);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=A,e=!0)),e}sendToConsumer(A,e){var t;if(A.error&&!Oi(A)){const i=(null===(t=A.error.code)||void 0===t?void 0:t.split("auth/")[1])||"internal-error";e.onError(Fe(this.auth,i))}else e.onAuthEvent(A)}isEventForConsumer(A,e){const t=null===e.eventId||!!A.eventId&&A.eventId===e.eventId;return e.filter.includes(A.type)&&t}hasEventBeenHandled(A){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ti(A))}saveEventToCache(A){this.cachedEventUids.add(Ti(A)),this.lastProcessedEventTime=Date.now()}constructor(A){this.auth=A,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ti(A){return[A.type,A.eventId,A.sessionId,A.tenantId].filter((A=>A)).join("-")}function Oi({type:A,error:e}){return"unknown"===A&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Li=/^https?/;async function zi(A){if(A.config.emulator)return;const{authorizedDomains:e}=await async function(A,e={}){return He(A,"GET","/v1/projects",e)}(A);for(const A of e)try{if(vi(A))return}catch(A){}Ge(A,"unauthorized-domain")}function vi(A){const e=Ze(),{protocol:t,hostname:i}=new URL(e);if(A.startsWith("chrome-extension://")){const n=new URL(A);return""===n.hostname&&""===i?"chrome-extension:"===t&&A.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===t&&n.hostname===i}if(!Li.test(t))return!1;if(Wi.test(A))return i===A;const n=A.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Te(3e4,6e4);function ji(){const A=ci().___jsl;if(null==A?void 0:A.H)for(const e of Object.keys(A.H))if(A.H[e].r=A.H[e].r||[],A.H[e].L=A.H[e].L||[],A.H[e].r=[...A.H[e].L],A.CP)for(let e=0;e<A.CP.length;e++)A.CP[e]=null}let Pi=null;function Xi(A){return Pi=Pi||function(A){return new Promise(((e,t)=>{var i,n,o;function s(){ji(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ji(),t(Fe(A,"network-request-failed"))},timeout:Hi.get()})}if(null===(n=null===(i=ci().gapi)||void 0===i?void 0:i.iframes)||void 0===n?void 0:n.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=ci().gapi)||void 0===o?void 0:o.load)){const e=Mi("iframefcb");return ci()[e]=()=>{gapi.load?s():t(Fe(A,"network-request-failed"))},pi(`https://apis.google.com/js/api.js?onload=${e}`).catch((A=>t(A)))}s()}})).catch((A=>{throw Pi=null,A}))}(A),Pi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Te(5e3,15e3),$i={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},An=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function en(A){const e=A.config;xe(e.authDomain,A,"auth-domain-config-required");const t=e.emulator?Oe(e,"emulator/auth/iframe"):`https://${A.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:A.name,v:"9.15.0"},n=An.get(A.config.apiHost);n&&(i.eid=n);const o=A._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${BA(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class nn{close(){if(this.window)try{this.window.close()}catch(A){}}constructor(A){this.window=A,this.associatedEvent=null}}function on(A,e,t,i=500,n=600){const o=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const r=Object.assign(Object.assign({},tn),{width:i.toString(),height:n.toString(),top:o,left:s}),g=q().toLowerCase();t&&(a=Qt(g)?"_blank":t),Bt(g)&&(e=e||"http://localhost",r.scrollbars="yes");const l=Object.entries(r).reduce(((A,[e,t])=>`${A}${e}=${t},`),"");if(function(A=q()){var e;return pt(A)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(g)&&"_self"!==a)return function(A,e){const t=document.createElement("a");t.href=A,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new nn(null);const I=window.open(e||"",a,l);xe(I,A,"popup-blocked");try{I.focus()}catch(A){}return new nn(I)}function sn(A,e,t,i,n,o){xe(A.config.authDomain,A,"auth-domain-config-required"),xe(A.config.apiKey,A,"invalid-api-key");const s={apiKey:A.config.apiKey,appName:A.name,authType:t,redirectUrl:i,v:"9.15.0",eventId:n};if(e instanceof Tt){e.setDefaultLanguage(A.languageCode),s.providerId=e.providerId||"",IA(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,e]of Object.entries(o||{}))s[A]=e}if(e instanceof Ot){const A=e.getScopes().filter((A=>""!==A));A.length>0&&(s.scopes=A.join(","))}A.tenantId&&(s.tid=A.tenantId);const a=s;for(const A of Object.keys(a))void 0===a[A]&&delete a[A];return`${function({config:A}){return A.emulator?Oe(A,"emulator/auth/handler"):`https://${A.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A)}?${BA(a).slice(1)}`}const an=class{async _openPopup(A,e,t,i){var n;fe(null===(n=this.eventManagers[A._key()])||void 0===n?void 0:n.manager,"_initialize() not called before _openPopup()");return on(A,sn(A,e,t,Ze(),i),Ii())}async _openRedirect(A,e,t,i){var n;return await this._originValidation(A),n=sn(A,e,t,Ze(),i),ci().location.href=n,new Promise((()=>{}))}_initialize(A){const e=A._key();if(this.eventManagers[e]){const{manager:A,promise:t}=this.eventManagers[e];return A?Promise.resolve(A):(fe(t,"If manager is not set, promise should be"),t)}const t=this.initAndGetManager(A);return this.eventManagers[e]={promise:t},t.catch((()=>{delete this.eventManagers[e]})),t}async initAndGetManager(A){const e=await async function(A){const e=await Xi(A),t=ci().gapi;return xe(t,A,"internal-error"),e.open({where:document.body,url:en(A),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$i,dontclear:!0},(e=>new Promise((async(t,i)=>{await e.restyle({setHideOnLeave:!1});const n=Fe(A,"network-request-failed"),o=ci().setTimeout((()=>{i(n)}),_i.get());function s(){ci().clearTimeout(o),t(e)}e.ping(s).then(s,(()=>{i(n)}))}))))}(A),t=new qi(A);return e.register("authEvent",(e=>{xe(null==e?void 0:e.authEvent,A,"invalid-auth-event");return{status:t.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[A._key()]={manager:t},this.iframes[A._key()]=e,t}_isIframeWebStorageSupported(A,e){this.iframes[A._key()].send("webStorageSupport",{type:"webStorageSupport"},(t=>{var i;const n=null===(i=null==t?void 0:t[0])||void 0===i?void 0:i.webStorageSupport;void 0!==n&&e(!!n),Ge(A,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(A){const e=A._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=zi(A)),this.originValidationPromises[e]}get _shouldInitProactively(){return Dt()||ht()||pt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gi,this._completeRedirectFn=bi,this._overrideRedirectResult=Ji}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{getUid(){var A;return this.assertAuthConfigured(),(null===(A=this.auth.currentUser)||void 0===A?void 0:A.uid)||null}async getToken(A){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(A)}}addAuthTokenListener(A){if(this.assertAuthConfigured(),this.internalListeners.has(A))return;const e=this.auth.onIdTokenChanged((e=>{A((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(A,e),this.updateProactiveRefresh()}removeAuthTokenListener(A){this.assertAuthConfigured();const e=this.internalListeners.get(A);e&&(this.internalListeners.delete(A),e(),this.updateProactiveRefresh())}assertAuthConfigured(){xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(A){this.auth=A,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=_("authIdTokenMaxAge")||300;let ln=null;var In;In="Browser",se(new kA("auth",((A,{options:e})=>{const t=A.getProvider("app").getImmediate(),i=A.getProvider("heartbeat"),{apiKey:n,authDomain:o}=t.options;return((A,t)=>{xe(n&&!n.includes(":"),"invalid-api-key",{appName:A.name}),xe(!(null==o?void 0:o.includes(":")),"argument-error",{appName:A.name});const i={apiKey:n,authDomain:o,clientPlatform:In,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rt(In)},s=new Yt(A,t,i);return function(A,e){const t=(null==e?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Je);(null==e?void 0:e.errorMap)&&A._updateErrorMap(e.errorMap),A._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(t,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((A,e,t)=>{A.getProvider("auth-internal").initialize()}))),se(new kA("auth-internal",(A=>{const e=Gt(A.getProvider("auth").getImmediate());return new rn(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ce("@firebase/auth","0.21.0",function(A){switch(A){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(In)),Ce("@firebase/auth","0.21.0","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{set(A,e){null==e?this.domStorage_.removeItem(this.prefixedName_(A)):this.domStorage_.setItem(this.prefixedName_(A),oA(e))}get(A){const e=this.domStorage_.getItem(this.prefixedName_(A));return null==e?null:nA(e)}remove(A){this.domStorage_.removeItem(this.prefixedName_(A))}prefixedName_(A){return this.prefix_+A}toString(){return this.domStorage_.toString()}constructor(A){this.domStorage_=A,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{set(A,e){null==e?delete this.cache_[A]:this.cache_[A]=e}get(A){return gA(this.cache_,A)?this.cache_[A]:null}remove(A){delete this.cache_[A]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=function(A){try{if("undefined"!=typeof window&&void 0!==window[A]){const e=window[A];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cn(e)}}catch(A){}return new En},hn=Bn("localStorage"),Qn=Bn("sessionStorage"),dn=new VA("@firebase/database"),un=function(){let A=1;return function(){return A++}}(),wn=function(A){const e=MA(A),t=new dA;t.update(e);const i=t.digest();return f.encodeByteArray(i)},mn=function(...A){let e="";for(let t=0;t<A.length;t++){const i=A[t];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?e+=mn.apply(null,i):e+="object"==typeof i?oA(i):i,e+=" "}return e};let pn=null,Mn=!0;const Dn=function(A,e){S(!e||!0===A||!1===A,"Can't turn on custom loggers persistently."),!0===A?(dn.logLevel=yA.VERBOSE,pn=dn.log.bind(dn),e&&Qn.set("logging_enabled",!0)):"function"==typeof A?pn=A:(pn=null,Qn.remove("logging_enabled"))},Rn=function(...A){if(!0===Mn&&(Mn=!1,null===pn&&!0===Qn.get("logging_enabled")&&Dn(!0)),pn){const e=mn.apply(null,A);pn(e)}},kn=function(A){return function(...e){Rn(A,...e)}},Yn=function(...A){const e="FIREBASE INTERNAL ERROR: "+mn(...A);dn.error(e)},Gn=function(...A){const e=`FIREBASE FATAL ERROR: ${mn(...A)}`;throw dn.error(e),new Error(e)},Fn=function(...A){const e="FIREBASE WARNING: "+mn(...A);dn.warn(e)},yn=function(A){return"number"==typeof A&&(A!=A||A===Number.POSITIVE_INFINITY||A===Number.NEGATIVE_INFINITY)},Un=function(A,e){if(A===e)return 0;if("[MIN_NAME]"===A||"[MAX_NAME]"===e)return-1;if("[MIN_NAME]"===e||"[MAX_NAME]"===A)return 1;{const t=Nn(A),i=Nn(e);return null!==t?null!==i?t-i==0?A.length-e.length:t-i:-1:null!==i?1:A<e?-1:1}},Sn=function(A,e){return A===e?0:A<e?-1:1},xn=function(A,e){if(e&&A in e)return e[A];throw new Error("Missing required key ("+A+") in object: "+oA(e))},Kn=function(A){if("object"!=typeof A||null===A)return oA(A);const e=[];for(const t in A)e.push(t);e.sort();let t="{";for(let i=0;i<e.length;i++)0!==i&&(t+=","),t+=oA(e[i]),t+=":",t+=Kn(A[e[i]]);return t+="}",t},fn=function(A,e){const t=A.length;if(t<=e)return[A];const i=[];for(let n=0;n<t;n+=e)n+e>t?i.push(A.substring(n,t)):i.push(A.substring(n,n+e));return i};function Vn(A,e){for(const t in A)A.hasOwnProperty(t)&&e(t,A[t])}const Jn=function(A){S(!yn(A),"Invalid JSON number");const e=1023;let t,i,n,o,s;0===A?(i=0,n=0,t=1/A==-1/0?1:0):(t=A<0,(A=Math.abs(A))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(A)/Math.LN2),e),i=o+e,n=Math.round(A*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,n=Math.round(A/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(n%2?1:0),n=Math.floor(n/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(t?1:0),a.reverse();const r=a.join("");let g="";for(s=0;s<64;s+=8){let A=parseInt(r.substr(s,8),2).toString(16);1===A.length&&(A="0"+A),g+=A}return g.toLowerCase()};const Zn=new RegExp("^-?(0*)\\d{1,10}$"),Nn=function(A){if(Zn.test(A)){const e=Number(A);if(e>=-2147483648&&e<=2147483647)return e}return null},bn=function(A){try{A()}catch(A){setTimeout((()=>{const e=A.stack||"";throw Fn("Exception was thrown by user callback.",e),A}),Math.floor(0))}},qn=function(A,e){const t=setTimeout(A,e);return"number"==typeof t&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(t):"object"==typeof t&&t.unref&&t.unref(),t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn{getToken(A){return this.appCheck?this.appCheck.getToken(A):new Promise(((e,t)=>{setTimeout((()=>{this.appCheck?this.getToken(A).then(e,t):e(null)}),0)}))}addTokenChangeListener(A){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(A)))}notifyForInvalidToken(){Fn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(A,e){this.appName_=A,this.appCheckProvider=e,this.appCheck=null==e?void 0:e.getImmediate({optional:!0}),this.appCheck||null==e||e.get().then((A=>this.appCheck=A))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{getToken(A){return this.auth_?this.auth_.getToken(A).catch((A=>A&&"auth/token-not-initialized"===A.code?(Rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(A))):new Promise(((e,t)=>{setTimeout((()=>{this.auth_?this.getToken(A).then(e,t):e(null)}),0)}))}addTokenChangeListener(A){this.auth_?this.auth_.addAuthTokenListener(A):this.authProvider_.get().then((e=>e.addAuthTokenListener(A)))}removeTokenChangeListener(A){this.authProvider_.get().then((e=>e.removeAuthTokenListener(A)))}notifyForInvalidToken(){let A='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?A+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?A+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':A+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fn(A)}constructor(A,e,t){this.appName_=A,this.firebaseOptions_=e,this.authProvider_=t,this.auth_=null,this.auth_=t.getImmediate({optional:!0}),this.auth_||t.onInit((A=>this.auth_=A))}}class Wn{getToken(A){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(A){A(this.accessToken)}removeTokenChangeListener(A){}notifyForInvalidToken(){}constructor(A){this.accessToken=A}}Wn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ln=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(A){A!==this.internalHost&&(this.internalHost=A,this.isCacheableHost()&&hn.set("host:"+this._host,this.internalHost))}toString(){let A=this.toURLString();return this.persistenceKey&&(A+="<"+this.persistenceKey+">"),A}toURLString(){const A=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${A}${this.host}/${e}`}constructor(A,e,t,i,n=!1,o="",s=!1){this.secure=e,this.namespace=t,this.webSocketOnly=i,this.nodeAdmin=n,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=A.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hn.get("host:"+A)||this._host}}function vn(A,e,t){let i;if(S("string"==typeof e,"typeof type must == string"),S("object"==typeof t,"typeof params must == object"),"websocket"===e)i=(A.secure?"wss://":"ws://")+A.internalHost+"/.ws?";else{if("long_polling"!==e)throw new Error("Unknown connection type: "+e);i=(A.secure?"https://":"http://")+A.internalHost+"/.lp?"}(function(A){return A.host!==A.internalHost||A.isCustomHost()||A.includeNamespaceInQueryParams})(A)&&(t.ns=A.namespace);const n=[];return Vn(t,((A,e)=>{n.push(A+"="+e)})),i+n.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{incrementCounter(A,e=1){gA(this.counters_,A)||(this.counters_[A]=0),this.counters_[A]+=e}get(){return N(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn={},Pn={};function Xn(A){const e=A.toString();return jn[e]||(jn[e]=new Hn),jn[e]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n{closeAfter(A,e){this.closeAfterResponse=A,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(A,e){for(this.pendingResponses[A]=e;this.pendingResponses[this.currentResponseNum];){const A=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<A.length;++e)A[e]&&bn((()=>{this.onMessage_(A[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(A){this.onMessage_=A,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{open(A,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new _n(A),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(A){if(z()||"complete"===document.readyState)A();else{let e=!1;const t=function(){document.body?e||(e=!0,A()):setTimeout(t,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&t()})),window.attachEvent("onload",t))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ao(((...A)=>{const[e,t,i,n,o]=A;if(this.incrementIncomingBytes_(A),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===e)this.id=t,this.password=i;else{if("close"!==e)throw new Error("Unrecognized command received: "+e);t?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(t,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...A)=>{const[e,t]=A;this.incrementIncomingBytes_(A),this.myPacketOrderer.handleResponse(e,t)}),(()=>{this.onClosed_()}),this.urlFn);const A={start:"t"};A.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(A.cb=this.scriptTagHolder.uniqueCallbackIdentifier),A.v="5",this.transportSessionId&&(A.s=this.transportSessionId),this.lastSessionId&&(A.ls=this.lastSessionId),this.applicationId&&(A.p=this.applicationId),this.appCheckToken&&(A.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Ln.test(location.hostname)&&(A.r="f");const e=this.urlFn(A);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$n.forceAllow_=!0}static forceDisallow(){$n.forceDisallow_=!0}static isAvailable(){return!z()&&(!!$n.forceAllow_||!($n.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(A){const e=oA(A);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const t=V(e),i=fn(t,1840);for(let A=0;A<i.length;A++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[A]),this.curSegmentNum++}addDisconnectPingFrame(A,e){if(z())return;this.myDisconnFrame=document.createElement("iframe");const t={dframe:"t"};t.id=A,t.pw=e,this.myDisconnFrame.src=this.urlFn(t),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(A){const e=oA(A).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}constructor(A,e,t,i,n,o,s){this.connId=A,this.repoInfo=e,this.applicationId=t,this.appCheckToken=i,this.authToken=n,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kn(A),this.stats_=Xn(e),this.urlFn=A=>(this.appCheckToken&&(A.ac=this.appCheckToken),vn(e,"long_polling",A))}}class Ao{static createIFrame_(){const A=document.createElement("iframe");if(A.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(A);try{A.contentWindow.document||Rn("No IE domain setting required")}catch(e){const t=document.domain;A.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return A.contentDocument?A.doc=A.contentDocument:A.contentWindow?A.doc=A.contentWindow.document:A.document&&(A.doc=A.document),A}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const A=this.onDisconnect;A&&(this.onDisconnect=null,A())}startLongPoll(A,e){for(this.myID=A,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const A={};A.id=this.myID,A.pw=this.myPW,A.ser=this.currentSerial;let e=this.urlFn(A),t="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+t.length<=1870))break;{const A=this.pendingSegs.shift();t=t+"&seg"+i+"="+A.seg+"&ts"+i+"="+A.ts+"&d"+i+"="+A.d,i++}}return e+=t,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(A,e,t){this.pendingSegs.push({seg:A,ts:e,d:t}),this.alive&&this.newRequest_()}addLongPollTag_(A,e){this.outstandingRequests.add(e);const t=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(t,Math.floor(25e3));this.addTag(A,(()=>{clearTimeout(i),t()}))}addTag(A,e){z()?this.doNodeLongPoll(A,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const t=this.myIFrame.doc.createElement("script");t.type="text/javascript",t.async=!0,t.src=A,t.onload=t.onreadystatechange=function(){const A=t.readyState;A&&"loaded"!==A&&"complete"!==A||(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),e())},t.onerror=()=>{Rn("Long-poll script failed to load: "+A),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(t)}catch(A){}}),Math.floor(1))}constructor(A,e,t,i){if(this.onDisconnect=t,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,z())this.commandCB=A,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=un(),window["pLPCommand"+this.uniqueCallbackIdentifier]=A,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=Ao.createIFrame_();let t="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){t='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+t+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(A){Rn("frame writing exception"),A.stack&&Rn(A.stack),Rn(A)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo=null;"undefined"!=typeof MozWebSocket?eo=MozWebSocket:"undefined"!=typeof WebSocket&&(eo=WebSocket);class to{static connectionURL_(A,e,t,i,n){const o={v:"5"};return!z()&&"undefined"!=typeof location&&location.hostname&&Ln.test(location.hostname)&&(o.r="f"),e&&(o.s=e),t&&(o.ls=t),i&&(o.ac=i),n&&(o.p=n),vn(A,"websocket",o)}open(A,e){this.onDisconnect=e,this.onMessage=A,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hn.set("previous_websocket_failure",!0);try{let A;if(z()){const e=this.nodeAdmin?"AdminNode":"Node";A={headers:{"User-Agent":`Firebase/5/${Cn}/${E.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(A.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(A.headers["X-Firebase-AppCheck"]=this.appCheckToken);const t={},i=0===this.connURL.indexOf("wss://")?t.HTTPS_PROXY||t.https_proxy:t.HTTP_PROXY||t.http_proxy;i&&(A.proxy={origin:i})}this.mySock=new eo(this.connURL,[],A)}catch(A){this.log_("Error instantiating WebSocket.");const e=A.message||A.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=A=>{this.handleIncomingFrame(A)},this.mySock.onerror=A=>{this.log_("WebSocket error.  Closing connection.");const e=A.message||A.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){to.forceDisallow_=!0}static isAvailable(){let A=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,t=navigator.userAgent.match(e);t&&t.length>1&&parseFloat(t[1])<4.4&&(A=!0)}return!A&&null!==eo&&!to.forceDisallow_}static previouslyFailed(){return hn.isInMemoryStorage||!0===hn.get("previous_websocket_failure")}markConnectionHealthy(){hn.remove("previous_websocket_failure")}appendFrame_(A){if(this.frames.push(A),this.frames.length===this.totalFrames){const A=this.frames.join("");this.frames=null;const e=nA(A);this.onMessage(e)}}handleNewFrameCount_(A){this.totalFrames=A,this.frames=[]}extractFrameCount_(A){if(S(null===this.frames,"We already have a frame buffer"),A.length<=6){const e=Number(A);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),A}handleIncomingFrame(A){if(null===this.mySock)return;const e=A.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const A=this.extractFrameCount_(e);null!==A&&this.appendFrame_(A)}}send(A){this.resetKeepAlive();const e=oA(A);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const t=fn(e,16384);t.length>1&&this.sendString_(String(t.length));for(let A=0;A<t.length;A++)this.sendString_(t[A])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(A){try{this.mySock.send(A)}catch(A){this.log_("Exception thrown from WebSocket.send():",A.message||A.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(A,e,t,i,n,o,s){this.connId=A,this.applicationId=t,this.appCheckToken=i,this.authToken=n,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kn(this.connId),this.stats_=Xn(e),this.connURL=to.connectionURL_(e,o,s,i,t),this.nodeAdmin=e.nodeAdmin}}to.responsesRequiredToBeHealthy=2,to.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{static get ALL_TRANSPORTS(){return[$n,to]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(A){const e=to&&to.isAvailable();let t=e&&!to.previouslyFailed();if(A.webSocketOnly&&(e||Fn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),t=!0),t)this.transports_=[to];else{const A=this.transports_=[];for(const e of io.ALL_TRANSPORTS)e&&e.isAvailable()&&A.push(e);io.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(A){this.initTransports_(A)}}io.globalTransportInitialized_=!1;class no{start_(){const A=this.transportManager_.initialTransport();this.conn_=new A(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=A.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),t=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,t)}),Math.floor(0));const i=A.healthyTimeout||0;i>0&&(this.healthyTimeout_=qn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(A){return e=>{A===this.conn_?this.onConnectionLost_(e):A===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(A){return e=>{2!==this.state_&&(A===this.rx_?this.onPrimaryMessageReceived_(e):A===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(A){const e={t:"d",d:A};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(A){if("t"in A){const e=A.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(A){const e=xn("t",A),t=xn("d",A);if("c"===e)this.onSecondaryControl_(t);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(t)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(A){const e=xn("t",A),t=xn("d",A);"c"===e?this.onControl_(t):"d"===e&&this.onDataMessage_(t)}onDataMessage_(A){this.onPrimaryResponse_(),this.onMessage_(A)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(A){const e=xn("t",A);if("d"in A){const t=A.d;if("h"===e)this.onHandshake_(t);else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let A=0;A<this.pendingDataMessages.length;++A)this.onDataMessage_(this.pendingDataMessages[A]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(t):"r"===e?this.onReset_(t):"e"===e?Yn("Server Error: "+t):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yn("Unknown control packet command: "+e)}}onHandshake_(A){const e=A.ts,t=A.v,i=A.h;this.sessionId=A.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==t&&Fn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const A=this.transportManager_.upgradeTransport();A&&this.startUpgrade_(A)}startUpgrade_(A){this.secondaryConn_=new A(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=A.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),t=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,t),qn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(A){this.log_("Reset packet received.  New host: "+A),this.repoInfo_.host=A,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(A,e){this.log_("Realtime connection established."),this.conn_=A,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const A=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==A&&this.rx_!==A||this.close()}onConnectionLost_(A){this.conn_=null,A||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(A){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(A),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(A){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(A)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(A,e,t,i,n,o,s,a,r,g){this.id=A,this.repoInfo_=e,this.applicationId_=t,this.appCheckToken_=i,this.authToken_=n,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=r,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kn("c:"+this.id+":"),this.transportManager_=new io(e),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{put(A,e,t,i){}merge(A,e,t,i){}refreshAuthToken(A){}refreshAppCheckToken(A){}onDisconnectPut(A,e,t){}onDisconnectMerge(A,e,t){}onDisconnectCancel(A,e){}reportStats(A){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{trigger(A,...e){if(Array.isArray(this.listeners_[A])){const t=[...this.listeners_[A]];for(let A=0;A<t.length;A++)t[A].callback.apply(t[A].context,e)}}on(A,e,t){this.validateEventType_(A),this.listeners_[A]=this.listeners_[A]||[],this.listeners_[A].push({callback:e,context:t});const i=this.getInitialEvent(A);i&&e.apply(t,i)}off(A,e,t){this.validateEventType_(A);const i=this.listeners_[A]||[];for(let A=0;A<i.length;A++)if(i[A].callback===e&&(!t||t===i[A].context))return void i.splice(A,1)}validateEventType_(A){S(this.allowedEvents_.find((e=>e===A)),"Unknown event: "+A)}constructor(A){this.allowedEvents_=A,this.listeners_={},S(Array.isArray(A)&&A.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends so{static getInstance(){return new ao}getInitialEvent(A){return S("online"===A,"Unknown event type: "+A),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||T()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{toString(){let A="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(A+="/"+this.pieces_[e]);return A||"/"}constructor(A,e){if(void 0===e){this.pieces_=A.split("/");let e=0;for(let A=0;A<this.pieces_.length;A++)this.pieces_[A].length>0&&(this.pieces_[e]=this.pieces_[A],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=A,this.pieceNum_=e}}function go(){return new ro("")}function lo(A){return A.pieceNum_>=A.pieces_.length?null:A.pieces_[A.pieceNum_]}function Io(A){return A.pieces_.length-A.pieceNum_}function Co(A){let e=A.pieceNum_;return e<A.pieces_.length&&e++,new ro(A.pieces_,e)}function co(A){return A.pieceNum_<A.pieces_.length?A.pieces_[A.pieces_.length-1]:null}function Eo(A,e=0){return A.pieces_.slice(A.pieceNum_+e)}function Bo(A){if(A.pieceNum_>=A.pieces_.length)return null;const e=[];for(let t=A.pieceNum_;t<A.pieces_.length-1;t++)e.push(A.pieces_[t]);return new ro(e,0)}function ho(A,e){const t=[];for(let e=A.pieceNum_;e<A.pieces_.length;e++)t.push(A.pieces_[e]);if(e instanceof ro)for(let A=e.pieceNum_;A<e.pieces_.length;A++)t.push(e.pieces_[A]);else{const A=e.split("/");for(let e=0;e<A.length;e++)A[e].length>0&&t.push(A[e])}return new ro(t,0)}function Qo(A){return A.pieceNum_>=A.pieces_.length}function uo(A,e){const t=lo(A),i=lo(e);if(null===t)return e;if(t===i)return uo(Co(A),Co(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+A+")")}function wo(A,e){if(Io(A)!==Io(e))return!1;for(let t=A.pieceNum_,i=e.pieceNum_;t<=A.pieces_.length;t++,i++)if(A.pieces_[t]!==e.pieces_[i])return!1;return!0}function mo(A,e){let t=A.pieceNum_,i=e.pieceNum_;if(Io(A)>Io(e))return!1;for(;t<A.pieces_.length;){if(A.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class po{constructor(A,e){this.errorPrefix_=e,this.parts_=Eo(A,0),this.byteLength_=Math.max(1,this.parts_.length);for(let A=0;A<this.parts_.length;A++)this.byteLength_+=DA(this.parts_[A]);Mo(this)}}function Mo(A){if(A.byteLength_>768)throw new Error(A.errorPrefix_+"has a key path longer than 768 bytes ("+A.byteLength_+").");if(A.parts_.length>32)throw new Error(A.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Do(A))}function Do(A){return 0===A.parts_.length?"":"in property '"+A.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends so{static getInstance(){return new Ro}getInitialEvent(A){return S("visible"===A,"Unknown event type: "+A),[this.visible_]}constructor(){let A,e;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",A="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",A="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",A="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",A="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[A];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends oo{sendRequest(A,e,t){const i=++this.requestNumber_,n={r:i,a:A,b:e};this.log_(oA(n)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(n),t&&(this.requestCBHash_[i]=t)}get(A){this.initConnection_();const e=new $,t={action:"g",request:{p:A._path.toString(),q:A._queryObject},onComplete:A=>{const t=A.d;"ok"===A.s?e.resolve(t):e.reject(t)}};this.outstandingGets_.push(t),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),e.promise}listen(A,e,t,i){this.initConnection_();const n=A._queryIdentifier,o=A._path.toString();this.log_("Listen called for "+o+" "+n),this.listens.has(o)||this.listens.set(o,new Map),S(A._queryParams.isDefault()||!A._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(n),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:e,query:A,tag:t};this.listens.get(o).set(n,s),this.connected_&&this.sendListen_(s)}sendGet_(A){const e=this.outstandingGets_[A];this.sendRequest("g",e.request,(t=>{delete this.outstandingGets_[A],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(t)}))}sendListen_(A){const e=A.query,t=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+t+" for "+i);const n={p:t};A.tag&&(n.q=e._queryObject,n.t=A.tag),n.h=A.hashFn(),this.sendRequest("q",n,(n=>{const o=n.d,s=n.s;ko.warnOnListenWarnings_(o,e);(this.listens.get(t)&&this.listens.get(t).get(i))===A&&(this.log_("listen response",n),"ok"!==s&&this.removeListen_(t,i),A.onComplete&&A.onComplete(s,o))}))}static warnOnListenWarnings_(A,e){if(A&&"object"==typeof A&&gA(A,"w")){const t=lA(A,"w");if(Array.isArray(t)&&~t.indexOf("no_index")){const A='".indexOn": "'+e._queryParams.getIndex().toString()+'"',t=e._path.toString();Fn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${A} at ${t} to your security rules for better performance.`)}}}refreshAuthToken(A){this.authToken_=A,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(A)}reduceReconnectDelayIfAdminCredential_(A){(A&&40===A.length||rA(A))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(A){this.appCheckToken_=A,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const A=this.authToken_,e=aA(A)?"auth":"gauth",t={cred:A};null===this.authOverride_?t.noauth=!0:"object"==typeof this.authOverride_&&(t.authvar=this.authOverride_),this.sendRequest(e,t,(e=>{const t=e.s,i=e.d||"error";this.authToken_===A&&("ok"===t?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(t,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(A=>{const e=A.s,t=A.d||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,t)}))}unlisten(A,e){const t=A._path.toString(),i=A._queryIdentifier;this.log_("Unlisten called for "+t+" "+i),S(A._queryParams.isDefault()||!A._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(t,i)&&this.connected_&&this.sendUnlisten_(t,i,A._queryObject,e)}sendUnlisten_(A,e,t,i){this.log_("Unlisten on "+A+" for "+e);const n={p:A};i&&(n.q=t,n.t=i),this.sendRequest("n",n)}onDisconnectPut(A,e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",A,e,t):this.onDisconnectRequestQueue_.push({pathString:A,action:"o",data:e,onComplete:t})}onDisconnectMerge(A,e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",A,e,t):this.onDisconnectRequestQueue_.push({pathString:A,action:"om",data:e,onComplete:t})}onDisconnectCancel(A,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",A,null,e):this.onDisconnectRequestQueue_.push({pathString:A,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(A,e,t,i){const n={p:e,d:t};this.log_("onDisconnect "+A,n),this.sendRequest(A,n,(A=>{i&&setTimeout((()=>{i(A.s,A.d)}),Math.floor(0))}))}put(A,e,t,i){this.putInternal("p",A,e,t,i)}merge(A,e,t,i){this.putInternal("m",A,e,t,i)}putInternal(A,e,t,i,n){this.initConnection_();const o={p:e,d:t};void 0!==n&&(o.h=n),this.outstandingPuts_.push({action:A,request:o,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+e)}sendPut_(A){const e=this.outstandingPuts_[A].action,t=this.outstandingPuts_[A].request,i=this.outstandingPuts_[A].onComplete;this.outstandingPuts_[A].queued=this.connected_,this.sendRequest(e,t,(t=>{this.log_(e+" response",t),delete this.outstandingPuts_[A],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(t.s,t.d)}))}reportStats(A){if(this.connected_){const e={c:A};this.log_("reportStats",e),this.sendRequest("s",e,(A=>{if("ok"!==A.s){const e=A.d;this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(A){if("r"in A){this.log_("from server: "+oA(A));const e=A.r,t=this.requestCBHash_[e];t&&(delete this.requestCBHash_[e],t(A.b))}else{if("error"in A)throw"A server-side error has occurred: "+A.error;"a"in A&&this.onDataPush_(A.a,A.b)}}onDataPush_(A,e){this.log_("handleServerMessage",A,e),"d"===A?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===A?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===A?this.onListenRevoked_(e.p,e.q):"ac"===A?this.onAuthRevoked_(e.s,e.d):"apc"===A?this.onAppCheckRevoked_(e.s,e.d):"sd"===A?this.onSecurityDebugPacket_(e):Yn("Unrecognized action received from server: "+oA(A)+"\nAre you using the latest client?")}onReady_(A,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(A),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(A){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(A))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(A){A&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=A}onOnline_(A){A?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const A=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-A);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const A=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),t=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ko.nextConnectionId_++,n=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,t())},r=function(A){S(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(A)};this.realtime_={close:a,sendRequest:r};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,r]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);o?Rn("getToken() completed but was canceled"):(Rn("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=r&&r.token,s=new no(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,A,e,t,(A=>{Fn(A+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),n))}catch(A){this.log_("Failed to get token: "+A),o||(this.repoInfo_.nodeAdmin&&Fn(A),a())}}}interrupt(A){Rn("Interrupting connection for reason: "+A),this.interruptReasons_[A]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(A){Rn("Resuming connection for reason: "+A),delete this.interruptReasons_[A],IA(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(A){const e=A-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let A=0;A<this.outstandingPuts_.length;A++){const e=this.outstandingPuts_[A];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[A],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(A,e){let t;t=e?e.map((A=>Kn(A))).join("$"):"default";const i=this.removeListen_(A,t);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(A,e){const t=new ro(A).toString();let i;if(this.listens.has(t)){const A=this.listens.get(t);i=A.get(e),A.delete(e),0===A.size&&this.listens.delete(t)}else i=void 0;return i}onAuthRevoked_(A,e){Rn("Auth token revoked: "+A+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==A&&"permission_denied"!==A||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(A,e){Rn("App check token revoked: "+A+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==A&&"permission_denied"!==A||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(A){this.securityDebugCallback_?this.securityDebugCallback_(A):"msg"in A&&console.log("FIREBASE: "+A.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const A of this.listens.values())for(const e of A.values())this.sendListen_(e);for(let A=0;A<this.outstandingPuts_.length;A++)this.outstandingPuts_[A]&&this.sendPut_(A);for(;this.onDisconnectRequestQueue_.length;){const A=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(A.action,A.pathString,A.data,A.onComplete)}for(let A=0;A<this.outstandingGets_.length;A++)this.outstandingGets_[A]&&this.sendGet_(A)}sendConnectStats_(){const A={};let e="js";z()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),A["sdk."+e+"."+Cn.replace(/\./g,"-")]=1,T()?A["framework.cordova"]=1:W()&&(A["framework.reactnative"]=1),this.reportStats(A)}shouldReconnect_(){const A=ao.getInstance().currentlyOnline();return IA(this.interruptReasons_)&&A}constructor(A,e,t,i,n,o,s,a){if(super(),this.repoInfo_=A,this.applicationId_=e,this.onDataUpdate_=t,this.onConnectStatus_=i,this.onServerInfoUpdate_=n,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=ko.nextPersistentConnectionId_++,this.log_=kn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!z())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ro.getInstance().on("visible",this.onVisible_,this),-1===A.host.indexOf("fblocal")&&ao.getInstance().on("online",this.onOnline_,this)}}ko.nextPersistentConnectionId_=0,ko.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yo{static Wrap(A,e){return new Yo(A,e)}constructor(A,e){this.name=A,this.node=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{getCompare(){return this.compare.bind(this)}indexedValueChanged(A,e){const t=new Yo("[MIN_NAME]",A),i=new Yo("[MIN_NAME]",e);return 0!==this.compare(t,i)}minPost(){return Yo.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;class yo extends Go{static get __EMPTY_NODE(){return Fo}static set __EMPTY_NODE(A){Fo=A}compare(A,e){return Un(A.name,e.name)}isDefinedOn(A){throw x("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(A,e){return!1}minPost(){return Yo.MIN}maxPost(){return new Yo("[MAX_NAME]",Fo)}makePost(A,e){return S("string"==typeof A,"KeyIndex indexValue must always be a string."),new Yo(A,Fo)}toString(){return".key"}}const Uo=new yo;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{getNext(){if(0===this.nodeStack_.length)return null;let A,e=this.nodeStack_.pop();if(A=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return A}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const A=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(A.key,A.value):{key:A.key,value:A.value}}constructor(A,e,t,i,n=null){this.isReverse_=i,this.resultGenerator_=n,this.nodeStack_=[];let o=1;for(;!A.isEmpty();)if(o=e?t(A.key,e):1,i&&(o*=-1),o<0)A=this.isReverse_?A.left:A.right;else{if(0===o){this.nodeStack_.push(A);break}this.nodeStack_.push(A),A=this.isReverse_?A.right:A.left}}}class xo{copy(A,e,t,i,n){return new xo(null!=A?A:this.key,null!=e?e:this.value,null!=t?t:this.color,null!=i?i:this.left,null!=n?n:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(A){return this.left.inorderTraversal(A)||!!A(this.key,this.value)||this.right.inorderTraversal(A)}reverseTraversal(A){return this.right.reverseTraversal(A)||A(this.key,this.value)||this.left.reverseTraversal(A)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(A,e,t){let i=this;const n=t(A,i.key);return i=n<0?i.copy(null,null,null,i.left.insert(A,e,t),null):0===n?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(A,e,t)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ko.EMPTY_NODE;let A=this;return A.left.isRed_()||A.left.left.isRed_()||(A=A.moveRedLeft_()),A=A.copy(null,null,null,A.left.removeMin_(),null),A.fixUp_()}remove(A,e){let t,i;if(t=this,e(A,t.key)<0)t.left.isEmpty()||t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.remove(A,e),null);else{if(t.left.isRed_()&&(t=t.rotateRight_()),t.right.isEmpty()||t.right.isRed_()||t.right.left.isRed_()||(t=t.moveRedRight_()),0===e(A,t.key)){if(t.right.isEmpty())return Ko.EMPTY_NODE;i=t.right.min_(),t=t.copy(i.key,i.value,null,null,t.right.removeMin_())}t=t.copy(null,null,null,null,t.right.remove(A,e))}return t.fixUp_()}isRed_(){return this.color}fixUp_(){let A=this;return A.right.isRed_()&&!A.left.isRed_()&&(A=A.rotateLeft_()),A.left.isRed_()&&A.left.left.isRed_()&&(A=A.rotateRight_()),A.left.isRed_()&&A.right.isRed_()&&(A=A.colorFlip_()),A}moveRedLeft_(){let A=this.colorFlip_();return A.right.left.isRed_()&&(A=A.copy(null,null,null,null,A.right.rotateRight_()),A=A.rotateLeft_(),A=A.colorFlip_()),A}moveRedRight_(){let A=this.colorFlip_();return A.left.left.isRed_()&&(A=A.rotateRight_(),A=A.colorFlip_()),A}rotateLeft_(){const A=this.copy(null,null,xo.RED,null,this.right.left);return this.right.copy(null,null,this.color,A,null)}rotateRight_(){const A=this.copy(null,null,xo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,A)}colorFlip_(){const A=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,A,e)}checkMaxDepth_(){const A=this.check_();return Math.pow(2,A)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const A=this.left.check_();if(A!==this.right.check_())throw new Error("Black depths differ");return A+(this.isRed_()?0:1)}constructor(A,e,t,i,n){this.key=A,this.value=e,this.color=null!=t?t:xo.RED,this.left=null!=i?i:Ko.EMPTY_NODE,this.right=null!=n?n:Ko.EMPTY_NODE}}xo.RED=!0,xo.BLACK=!1;class Ko{insert(A,e){return new Ko(this.comparator_,this.root_.insert(A,e,this.comparator_).copy(null,null,xo.BLACK,null,null))}remove(A){return new Ko(this.comparator_,this.root_.remove(A,this.comparator_).copy(null,null,xo.BLACK,null,null))}get(A){let e,t=this.root_;for(;!t.isEmpty();){if(e=this.comparator_(A,t.key),0===e)return t.value;e<0?t=t.left:e>0&&(t=t.right)}return null}getPredecessorKey(A){let e,t=this.root_,i=null;for(;!t.isEmpty();){if(e=this.comparator_(A,t.key),0===e){if(t.left.isEmpty())return i?i.key:null;for(t=t.left;!t.right.isEmpty();)t=t.right;return t.key}e<0?t=t.left:e>0&&(i=t,t=t.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(A){return this.root_.inorderTraversal(A)}reverseTraversal(A){return this.root_.reverseTraversal(A)}getIterator(A){return new So(this.root_,null,this.comparator_,!1,A)}getIteratorFrom(A,e){return new So(this.root_,A,this.comparator_,!1,e)}getReverseIteratorFrom(A,e){return new So(this.root_,A,this.comparator_,!0,e)}getReverseIterator(A){return new So(this.root_,null,this.comparator_,!0,A)}constructor(A,e=Ko.EMPTY_NODE){this.comparator_=A,this.root_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fo(A,e){return Un(A.name,e.name)}function Vo(A,e){return Un(A,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo;Ko.EMPTY_NODE=new class{copy(A,e,t,i,n){return this}insert(A,e,t){return new xo(A,e,null)}remove(A,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(A){return!1}reverseTraversal(A){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Zo=function(A){return"number"==typeof A?"number:"+Jn(A):"string:"+A},No=function(A){if(A.isLeafNode()){const e=A.val();S("string"==typeof e||"number"==typeof e||"object"==typeof e&&gA(e,".sv"),"Priority must be a string or number.")}else S(A===Jo||A.isEmpty(),"priority of unexpected type.");S(A===Jo||A.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let bo,qo,To;class Oo{static set __childrenNodeConstructor(A){bo=A}static get __childrenNodeConstructor(){return bo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(A){return new Oo(this.value_,A)}getImmediateChild(A){return".priority"===A?this.priorityNode_:Oo.__childrenNodeConstructor.EMPTY_NODE}getChild(A){return Qo(A)?this:".priority"===lo(A)?this.priorityNode_:Oo.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(A,e){return null}updateImmediateChild(A,e){return".priority"===A?this.updatePriority(e):e.isEmpty()&&".priority"!==A?this:Oo.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(A,e).updatePriority(this.priorityNode_)}updateChild(A,e){const t=lo(A);return null===t?e:e.isEmpty()&&".priority"!==t?this:(S(".priority"!==t||1===Io(A),".priority must be the last token in a path"),this.updateImmediateChild(t,Oo.__childrenNodeConstructor.EMPTY_NODE.updateChild(Co(A),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(A,e){return!1}val(A){return A&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let A="";this.priorityNode_.isEmpty()||(A+="priority:"+Zo(this.priorityNode_.val())+":");const e=typeof this.value_;A+=e+":",A+="number"===e?Jn(this.value_):this.value_,this.lazyHash_=wn(A)}return this.lazyHash_}getValue(){return this.value_}compareTo(A){return A===Oo.__childrenNodeConstructor.EMPTY_NODE?1:A instanceof Oo.__childrenNodeConstructor?-1:(S(A.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(A))}compareToLeafNode_(A){const e=typeof A.value_,t=typeof this.value_,i=Oo.VALUE_TYPE_ORDER.indexOf(e),n=Oo.VALUE_TYPE_ORDER.indexOf(t);return S(i>=0,"Unknown leaf type: "+e),S(n>=0,"Unknown leaf type: "+t),i===n?"object"===t?0:this.value_<A.value_?-1:this.value_===A.value_?0:1:n-i}withIndex(){return this}isIndexed(){return!0}equals(A){if(A===this)return!0;if(A.isLeafNode()){const e=A;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}constructor(A,e=Oo.__childrenNodeConstructor.EMPTY_NODE){this.value_=A,this.priorityNode_=e,this.lazyHash_=null,S(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),No(this.priorityNode_)}}Oo.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Wo=new class extends Go{compare(A,e){const t=A.node.getPriority(),i=e.node.getPriority(),n=t.compareTo(i);return 0===n?Un(A.name,e.name):n}isDefinedOn(A){return!A.getPriority().isEmpty()}indexedValueChanged(A,e){return!A.getPriority().equals(e.getPriority())}minPost(){return Yo.MIN}maxPost(){return new Yo("[MAX_NAME]",new Oo("[PRIORITY-POST]",To))}makePost(A,e){const t=qo(A);return new Yo(e,new Oo("[PRIORITY-POST]",t))}toString(){return".priority"}},Lo=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{nextBitIsOne(){const A=!(this.bits_&1<<this.current_);return this.current_--,A}constructor(A){var e;this.count=(e=A+1,parseInt(Math.log(e)/Lo,10)),this.current_=this.count-1;const t=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=A+1&t}}const vo=function(A,e,t,i){A.sort(e);const n=function(e,i){const o=i-e;let s,a;if(0===o)return null;if(1===o)return s=A[e],a=t?t(s):s,new xo(a,s.node,xo.BLACK,null,null);{const r=parseInt(o/2,10)+e,g=n(e,r),l=n(r+1,i);return s=A[r],a=t?t(s):s,new xo(a,s.node,xo.BLACK,g,l)}},o=function(e){let i=null,o=null,s=A.length;const a=function(e,i){const o=s-e,a=s;s-=e;const g=n(o+1,a),l=A[o],I=t?t(l):l;r(new xo(I,l.node,i,null,g))},r=function(A){i?(i.left=A,i=A):(o=A,i=A)};for(let A=0;A<e.count;++A){const t=e.nextBitIsOne(),i=Math.pow(2,e.count-(A+1));t?a(i,xo.BLACK):(a(i,xo.BLACK),a(i,xo.RED))}return o}(new zo(A.length));return new Ko(i||e,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho;const jo={};class Po{static get Default(){return S(jo&&Wo,"ChildrenNode.ts has not been loaded"),Ho=Ho||new Po({".priority":jo},{".priority":Wo}),Ho}get(A){const e=lA(this.indexes_,A);if(!e)throw new Error("No index defined for "+A);return e instanceof Ko?e:null}hasIndex(A){return gA(this.indexSet_,A.toString())}addIndex(A,e){S(A!==Uo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const t=[];let i=!1;const n=e.getIterator(Yo.Wrap);let o,s=n.getNext();for(;s;)i=i||A.isDefinedOn(s.node),t.push(s),s=n.getNext();o=i?vo(t,A.getCompare()):jo;const a=A.toString(),r=Object.assign({},this.indexSet_);r[a]=A;const g=Object.assign({},this.indexes_);return g[a]=o,new Po(g,r)}addToIndexes(A,e){const t=CA(this.indexes_,((t,i)=>{const n=lA(this.indexSet_,i);if(S(n,"Missing index implementation for "+i),t===jo){if(n.isDefinedOn(A.node)){const t=[],i=e.getIterator(Yo.Wrap);let o=i.getNext();for(;o;)o.name!==A.name&&t.push(o),o=i.getNext();return t.push(A),vo(t,n.getCompare())}return jo}{const i=e.get(A.name);let n=t;return i&&(n=n.remove(new Yo(A.name,i))),n.insert(A,A.node)}}));return new Po(t,this.indexSet_)}removeFromIndexes(A,e){const t=CA(this.indexes_,(t=>{if(t===jo)return t;{const i=e.get(A.name);return i?t.remove(new Yo(A.name,i)):t}}));return new Po(t,this.indexSet_)}constructor(A,e){this.indexes_=A,this.indexSet_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;class _o{static get EMPTY_NODE(){return Xo||(Xo=new _o(new Ko(Vo),null,Po.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xo}updatePriority(A){return this.children_.isEmpty()?this:new _o(this.children_,A,this.indexMap_)}getImmediateChild(A){if(".priority"===A)return this.getPriority();{const e=this.children_.get(A);return null===e?Xo:e}}getChild(A){const e=lo(A);return null===e?this:this.getImmediateChild(e).getChild(Co(A))}hasChild(A){return null!==this.children_.get(A)}updateImmediateChild(A,e){if(S(e,"We should always be passing snapshot nodes"),".priority"===A)return this.updatePriority(e);{const t=new Yo(A,e);let i,n;e.isEmpty()?(i=this.children_.remove(A),n=this.indexMap_.removeFromIndexes(t,this.children_)):(i=this.children_.insert(A,e),n=this.indexMap_.addToIndexes(t,this.children_));const o=i.isEmpty()?Xo:this.priorityNode_;return new _o(i,o,n)}}updateChild(A,e){const t=lo(A);if(null===t)return e;{S(".priority"!==lo(A)||1===Io(A),".priority must be the last token in a path");const i=this.getImmediateChild(t).updateChild(Co(A),e);return this.updateImmediateChild(t,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(A){if(this.isEmpty())return null;const e={};let t=0,i=0,n=!0;if(this.forEachChild(Wo,((o,s)=>{e[o]=s.val(A),t++,n&&_o.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):n=!1})),!A&&n&&i<2*t){const A=[];for(const t in e)A[t]=e[t];return A}return A&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let A="";this.getPriority().isEmpty()||(A+="priority:"+Zo(this.getPriority().val())+":"),this.forEachChild(Wo,((e,t)=>{const i=t.hash();""!==i&&(A+=":"+e+":"+i)})),this.lazyHash_=""===A?"":wn(A)}return this.lazyHash_}getPredecessorChildName(A,e,t){const i=this.resolveIndex_(t);if(i){const t=i.getPredecessorKey(new Yo(A,e));return t?t.name:null}return this.children_.getPredecessorKey(A)}getFirstChildName(A){const e=this.resolveIndex_(A);if(e){const A=e.minKey();return A&&A.name}return this.children_.minKey()}getFirstChild(A){const e=this.getFirstChildName(A);return e?new Yo(e,this.children_.get(e)):null}getLastChildName(A){const e=this.resolveIndex_(A);if(e){const A=e.maxKey();return A&&A.name}return this.children_.maxKey()}getLastChild(A){const e=this.getLastChildName(A);return e?new Yo(e,this.children_.get(e)):null}forEachChild(A,e){const t=this.resolveIndex_(A);return t?t.inorderTraversal((A=>e(A.name,A.node))):this.children_.inorderTraversal(e)}getIterator(A){return this.getIteratorFrom(A.minPost(),A)}getIteratorFrom(A,e){const t=this.resolveIndex_(e);if(t)return t.getIteratorFrom(A,(A=>A));{const t=this.children_.getIteratorFrom(A.name,Yo.Wrap);let i=t.peek();for(;null!=i&&e.compare(i,A)<0;)t.getNext(),i=t.peek();return t}}getReverseIterator(A){return this.getReverseIteratorFrom(A.maxPost(),A)}getReverseIteratorFrom(A,e){const t=this.resolveIndex_(e);if(t)return t.getReverseIteratorFrom(A,(A=>A));{const t=this.children_.getReverseIteratorFrom(A.name,Yo.Wrap);let i=t.peek();for(;null!=i&&e.compare(i,A)>0;)t.getNext(),i=t.peek();return t}}compareTo(A){return this.isEmpty()?A.isEmpty()?0:-1:A.isLeafNode()||A.isEmpty()?1:A===$o?-1:0}withIndex(A){if(A===Uo||this.indexMap_.hasIndex(A))return this;{const e=this.indexMap_.addIndex(A,this.children_);return new _o(this.children_,this.priorityNode_,e)}}isIndexed(A){return A===Uo||this.indexMap_.hasIndex(A)}equals(A){if(A===this)return!0;if(A.isLeafNode())return!1;{const e=A;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const A=this.getIterator(Wo),t=e.getIterator(Wo);let i=A.getNext(),n=t.getNext();for(;i&&n;){if(i.name!==n.name||!i.node.equals(n.node))return!1;i=A.getNext(),n=t.getNext()}return null===i&&null===n}return!1}return!1}}resolveIndex_(A){return A===Uo?null:this.indexMap_.get(A.toString())}constructor(A,e,t){this.children_=A,this.priorityNode_=e,this.indexMap_=t,this.lazyHash_=null,this.priorityNode_&&No(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}_o.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const $o=new class extends _o{compareTo(A){return A===this?0:1}equals(A){return A===this}getPriority(){return this}getImmediateChild(A){return _o.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Ko(Vo),_o.EMPTY_NODE,Po.Default)}};Object.defineProperties(Yo,{MIN:{value:new Yo("[MIN_NAME]",_o.EMPTY_NODE)},MAX:{value:new Yo("[MAX_NAME]",$o)}}),yo.__EMPTY_NODE=_o.EMPTY_NODE,Oo.__childrenNodeConstructor=_o,Jo=$o,function(A){To=A}($o);function As(A,e=null){if(null===A)return _o.EMPTY_NODE;if("object"==typeof A&&".priority"in A&&(e=A[".priority"]),S(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof A&&".value"in A&&null!==A[".value"]&&(A=A[".value"]),"object"!=typeof A||".sv"in A){return new Oo(A,As(e))}if(A instanceof Array){let t=_o.EMPTY_NODE;return Vn(A,((e,i)=>{if(gA(A,e)&&"."!==e.substring(0,1)){const A=As(i);!A.isLeafNode()&&A.isEmpty()||(t=t.updateImmediateChild(e,A))}})),t.updatePriority(As(e))}{const t=[];let i=!1;if(Vn(A,((A,e)=>{if("."!==A.substring(0,1)){const n=As(e);n.isEmpty()||(i=i||!n.getPriority().isEmpty(),t.push(new Yo(A,n)))}})),0===t.length)return _o.EMPTY_NODE;const n=vo(t,fo,(A=>A.name),Vo);if(i){const A=vo(t,Wo.getCompare());return new _o(n,As(e),new Po({".priority":A},{".priority":Wo}))}return new _o(n,As(e),Po.Default)}}!function(A){qo=A}(As);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es extends Go{extractChild(A){return A.getChild(this.indexPath_)}isDefinedOn(A){return!A.getChild(this.indexPath_).isEmpty()}compare(A,e){const t=this.extractChild(A.node),i=this.extractChild(e.node),n=t.compareTo(i);return 0===n?Un(A.name,e.name):n}makePost(A,e){const t=As(A),i=_o.EMPTY_NODE.updateChild(this.indexPath_,t);return new Yo(e,i)}maxPost(){const A=_o.EMPTY_NODE.updateChild(this.indexPath_,$o);return new Yo("[MAX_NAME]",A)}toString(){return Eo(this.indexPath_,0).join("/")}constructor(A){super(),this.indexPath_=A,S(!Qo(A)&&".priority"!==lo(A),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new class extends Go{compare(A,e){const t=A.node.compareTo(e.node);return 0===t?Un(A.name,e.name):t}isDefinedOn(A){return!0}indexedValueChanged(A,e){return!A.equals(e)}minPost(){return Yo.MIN}maxPost(){return Yo.MAX}makePost(A,e){const t=As(A);return new Yo(e,t)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(A){return{type:"value",snapshotNode:A}}function ns(A,e){return{type:"child_added",snapshotNode:e,childName:A}}function os(A,e){return{type:"child_removed",snapshotNode:e,childName:A}}function ss(A,e,t){return{type:"child_changed",snapshotNode:e,childName:A,oldSnap:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class as{updateChild(A,e,t,i,n,o){S(A.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=A.getImmediateChild(e);return s.getChild(i).equals(t.getChild(i))&&s.isEmpty()===t.isEmpty()?A:(null!=o&&(t.isEmpty()?A.hasChild(e)?o.trackChildChange(os(e,s)):S(A.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(ns(e,t)):o.trackChildChange(ss(e,t,s))),A.isLeafNode()&&t.isEmpty()?A:A.updateImmediateChild(e,t).withIndex(this.index_))}updateFullNode(A,e,t){return null!=t&&(A.isLeafNode()||A.forEachChild(Wo,((A,i)=>{e.hasChild(A)||t.trackChildChange(os(A,i))})),e.isLeafNode()||e.forEachChild(Wo,((e,i)=>{if(A.hasChild(e)){const n=A.getImmediateChild(e);n.equals(i)||t.trackChildChange(ss(e,i,n))}else t.trackChildChange(ns(e,i))}))),e.withIndex(this.index_)}updatePriority(A,e){return A.isEmpty()?_o.EMPTY_NODE:A.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(A){this.index_=A}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(A){const e=this.startIsInclusive_?this.index_.compare(this.getStartPost(),A)<=0:this.index_.compare(this.getStartPost(),A)<0,t=this.endIsInclusive_?this.index_.compare(A,this.getEndPost())<=0:this.index_.compare(A,this.getEndPost())<0;return e&&t}updateChild(A,e,t,i,n,o){return this.matches(new Yo(e,t))||(t=_o.EMPTY_NODE),this.indexedFilter_.updateChild(A,e,t,i,n,o)}updateFullNode(A,e,t){e.isLeafNode()&&(e=_o.EMPTY_NODE);let i=e.withIndex(this.index_);i=i.updatePriority(_o.EMPTY_NODE);const n=this;return e.forEachChild(Wo,((A,e)=>{n.matches(new Yo(A,e))||(i=i.updateImmediateChild(A,_o.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(A,i,t)}updatePriority(A,e){return A}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(A){if(A.hasStart()){const e=A.getIndexStartName();return A.getIndex().makePost(A.getIndexStartValue(),e)}return A.getIndex().minPost()}static getEndPost_(A){if(A.hasEnd()){const e=A.getIndexEndName();return A.getIndex().makePost(A.getIndexEndValue(),e)}return A.getIndex().maxPost()}constructor(A){this.indexedFilter_=new as(A.getIndex()),this.index_=A.getIndex(),this.startPost_=rs.getStartPost_(A),this.endPost_=rs.getEndPost_(A),this.startIsInclusive_=!A.startAfterSet_,this.endIsInclusive_=!A.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{updateChild(A,e,t,i,n,o){return this.rangedFilter_.matches(new Yo(e,t))||(t=_o.EMPTY_NODE),A.getImmediateChild(e).equals(t)?A:A.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(A,e,t,i,n,o):this.fullLimitUpdateChild_(A,e,t,n,o)}updateFullNode(A,e,t){let i;if(e.isLeafNode()||e.isEmpty())i=_o.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let A;i=_o.EMPTY_NODE.withIndex(this.index_),A=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let t=0;for(;A.hasNext()&&t<this.limit_;){const e=A.getNext();if(this.withinDirectionalStart(e)){if(!this.withinDirectionalEnd(e))break;i=i.updateImmediateChild(e.name,e.node),t++}}}else{let A;i=e.withIndex(this.index_),i=i.updatePriority(_o.EMPTY_NODE),A=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let t=0;for(;A.hasNext();){const e=A.getNext();t<this.limit_&&this.withinDirectionalStart(e)&&this.withinDirectionalEnd(e)?t++:i=i.updateImmediateChild(e.name,_o.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(A,i,t)}updatePriority(A,e){return A}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(A,e,t,i,n){let o;if(this.reverse_){const A=this.index_.getCompare();o=(e,t)=>A(t,e)}else o=this.index_.getCompare();const s=A;S(s.numChildren()===this.limit_,"");const a=new Yo(e,t),r=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),g=this.rangedFilter_.matches(a);if(s.hasChild(e)){const A=s.getImmediateChild(e);let l=i.getChildAfterChild(this.index_,r,this.reverse_);for(;null!=l&&(l.name===e||s.hasChild(l.name));)l=i.getChildAfterChild(this.index_,l,this.reverse_);const I=null==l?1:o(l,a);if(g&&!t.isEmpty()&&I>=0)return null!=n&&n.trackChildChange(ss(e,t,A)),s.updateImmediateChild(e,t);{null!=n&&n.trackChildChange(os(e,A));const t=s.updateImmediateChild(e,_o.EMPTY_NODE);return null!=l&&this.rangedFilter_.matches(l)?(null!=n&&n.trackChildChange(ns(l.name,l.node)),t.updateImmediateChild(l.name,l.node)):t}}return t.isEmpty()?A:g&&o(r,a)>=0?(null!=n&&(n.trackChildChange(os(r.name,r.node)),n.trackChildChange(ns(e,t))),s.updateImmediateChild(e,t).updateImmediateChild(r.name,_o.EMPTY_NODE)):A}constructor(A){this.withinDirectionalStart=A=>this.reverse_?this.withinEndPost(A):this.withinStartPost(A),this.withinDirectionalEnd=A=>this.reverse_?this.withinStartPost(A):this.withinEndPost(A),this.withinStartPost=A=>{const e=this.index_.compare(this.rangedFilter_.getStartPost(),A);return this.startIsInclusive_?e<=0:e<0},this.withinEndPost=A=>{const e=this.index_.compare(A,this.rangedFilter_.getEndPost());return this.endIsInclusive_?e<=0:e<0},this.rangedFilter_=new rs(A),this.index_=A.getIndex(),this.limit_=A.getLimit(),this.reverse_=!A.isViewFromLeft(),this.startIsInclusive_=!A.startAfterSet_,this.endIsInclusive_=!A.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Wo}copy(){const A=new ls;return A.limitSet_=this.limitSet_,A.limit_=this.limit_,A.startSet_=this.startSet_,A.startAfterSet_=this.startAfterSet_,A.indexStartValue_=this.indexStartValue_,A.startNameSet_=this.startNameSet_,A.indexStartName_=this.indexStartName_,A.endSet_=this.endSet_,A.endBeforeSet_=this.endBeforeSet_,A.indexEndValue_=this.indexEndValue_,A.endNameSet_=this.endNameSet_,A.indexEndName_=this.indexEndName_,A.index_=this.index_,A.viewFrom_=this.viewFrom_,A}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Wo}}function Is(A){const e={};if(A.isDefault())return e;let t;if(A.index_===Wo?t="$priority":A.index_===ts?t="$value":A.index_===Uo?t="$key":(S(A.index_ instanceof es,"Unrecognized index type!"),t=A.index_.toString()),e.orderBy=oA(t),A.startSet_){const t=A.startAfterSet_?"startAfter":"startAt";e[t]=oA(A.indexStartValue_),A.startNameSet_&&(e[t]+=","+oA(A.indexStartName_))}if(A.endSet_){const t=A.endBeforeSet_?"endBefore":"endAt";e[t]=oA(A.indexEndValue_),A.endNameSet_&&(e[t]+=","+oA(A.indexEndName_))}return A.limitSet_&&(A.isViewFromLeft()?e.limitToFirst=A.limit_:e.limitToLast=A.limit_),e}function Cs(A){const e={};if(A.startSet_&&(e.sp=A.indexStartValue_,A.startNameSet_&&(e.sn=A.indexStartName_),e.sin=!A.startAfterSet_),A.endSet_&&(e.ep=A.indexEndValue_,A.endNameSet_&&(e.en=A.indexEndName_),e.ein=!A.endBeforeSet_),A.limitSet_){e.l=A.limit_;let t=A.viewFrom_;""===t&&(t=A.isViewFromLeft()?"l":"r"),e.vf=t}return A.index_!==Wo&&(e.i=A.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends oo{reportStats(A){throw new Error("Method not implemented.")}static getListenId_(A,e){return void 0!==e?"tag$"+e:(S(A._queryParams.isDefault(),"should have a tag if it's not a default query."),A._path.toString())}listen(A,e,t,i){const n=A._path.toString();this.log_("Listen called for "+n+" "+A._queryIdentifier);const o=cs.getListenId_(A,t),s={};this.listens_[o]=s;const a=Is(A._queryParams);this.restRequest_(n+".json",a,((A,e)=>{let a=e;if(404===A&&(a=null,A=null),null===A&&this.onDataUpdate_(n,a,!1,t),lA(this.listens_,o)===s){let e;e=A?401===A?"permission_denied":"rest_error:"+A:"ok",i(e,null)}}))}unlisten(A,e){const t=cs.getListenId_(A,e);delete this.listens_[t]}get(A){const e=Is(A._queryParams),t=A._path.toString(),i=new $;return this.restRequest_(t+".json",e,((A,e)=>{let n=e;404===A&&(n=null,A=null),null===A?(this.onDataUpdate_(t,n,!1,null),i.resolve(n)):i.reject(new Error(n))})),i.promise}refreshAuthToken(A){}restRequest_(A,e={},t){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,n])=>{i&&i.accessToken&&(e.auth=i.accessToken),n&&n.token&&(e.ac=n.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+A+"?ns="+this.repoInfo_.namespace+BA(e);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(t&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let A=null;if(s.status>=200&&s.status<300){try{A=nA(s.responseText)}catch(A){Fn("Failed to parse JSON response for "+o+": "+s.responseText)}t(null,A)}else 401!==s.status&&404!==s.status&&Fn("Got unsuccessful REST response for "+o+" Status: "+s.status),t(s.status);t=null}},s.open("GET",o,!0),s.send()}))}constructor(A,e,t,i){super(),this.repoInfo_=A,this.onDataUpdate_=e,this.authTokenProvider_=t,this.appCheckTokenProvider_=i,this.log_=kn("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{getNode(A){return this.rootNode_.getChild(A)}updateSnapshot(A,e){this.rootNode_=this.rootNode_.updateChild(A,e)}constructor(){this.rootNode_=_o.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(){return{value:null,children:new Map}}function hs(A,e,t){if(Qo(e))A.value=t,A.children.clear();else if(null!==A.value)A.value=A.value.updateChild(e,t);else{const i=lo(e);A.children.has(i)||A.children.set(i,Bs());hs(A.children.get(i),e=Co(e),t)}}function Qs(A,e,t){null!==A.value?t(e,A.value):function(A,e){A.children.forEach(((A,t)=>{e(t,A)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A,((A,i)=>{Qs(i,new ro(e.toString()+"/"+A),t)}))}class ds{get(){const A=this.collection_.get(),e=Object.assign({},A);return this.last_&&Vn(this.last_,((A,t)=>{e[A]=e[A]-t})),this.last_=A,e}constructor(A){this.collection_=A,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{reportStats_(){const A=this.statsListener_.get(),e={};let t=!1;Vn(A,((A,i)=>{i>0&&gA(this.statsToReport_,A)&&(e[A]=i,t=!0)})),t&&this.server_.reportStats(e),qn(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(A,e){this.server_=e,this.statsToReport_={},this.statsListener_=new ds(A);const t=1e4+2e4*Math.random();qn(this.reportStats_.bind(this),Math.floor(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ws,ms;function ps(A){return{fromUser:!1,fromServer:!0,queryId:A,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ms=ws||(ws={}))[ms.OVERWRITE=0]="OVERWRITE",ms[ms.MERGE=1]="MERGE",ms[ms.ACK_USER_WRITE=2]="ACK_USER_WRITE",ms[ms.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Ms{operationForChild(A){if(Qo(this.path)){if(null!=this.affectedTree.value)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new ro(A));return new Ms(go(),e,this.revert)}}return S(lo(this.path)===A,"operationForChild called for unrelated child."),new Ms(Co(this.path),this.affectedTree,this.revert)}constructor(A,e,t){this.path=A,this.affectedTree=e,this.revert=t,this.type=ws.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{operationForChild(A){return Qo(this.path)?new Ds(this.source,go()):new Ds(this.source,Co(this.path))}constructor(A,e){this.source=A,this.path=e,this.type=ws.LISTEN_COMPLETE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{operationForChild(A){return Qo(this.path)?new Rs(this.source,go(),this.snap.getImmediateChild(A)):new Rs(this.source,Co(this.path),this.snap)}constructor(A,e,t){this.source=A,this.path=e,this.snap=t,this.type=ws.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{operationForChild(A){if(Qo(this.path)){const e=this.children.subtree(new ro(A));return e.isEmpty()?null:e.value?new Rs(this.source,go(),e.value):new ks(this.source,go(),e)}return S(lo(this.path)===A,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,Co(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(A,e,t){this.source=A,this.path=e,this.children=t,this.type=ws.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(A){if(Qo(A))return this.isFullyInitialized()&&!this.filtered_;const e=lo(A);return this.isCompleteForChild(e)}isCompleteForChild(A){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(A)}getNode(){return this.node_}constructor(A,e,t){this.node_=A,this.fullyInitialized_=e,this.filtered_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(A){this.query_=A,this.index_=this.query_._queryParams.getIndex()}}function Fs(A,e,t,i,n,o){const s=i.filter((A=>A.type===t));s.sort(((e,t)=>function(A,e,t){if(null==e.childName||null==t.childName)throw x("Should only compare child_ events.");const i=new Yo(e.childName,e.snapshotNode),n=new Yo(t.childName,t.snapshotNode);return A.index_.compare(i,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A,e,t))),s.forEach((t=>{const i=function(A,e,t){return"value"===e.type||"child_removed"===e.type||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,A.index_)),e}(A,t,o);n.forEach((n=>{n.respondsTo(t.type)&&e.push(n.createEvent(i,A.query_))}))}))}function ys(A,e){return{eventCache:A,serverCache:e}}function Us(A,e,t,i){return ys(new Ys(e,t,i),A.serverCache)}function Ss(A,e,t,i){return ys(A.eventCache,new Ys(e,t,i))}function xs(A){return A.eventCache.isFullyInitialized()?A.eventCache.getNode():null}function Ks(A){return A.serverCache.isFullyInitialized()?A.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;class Vs{static fromObject(A){let e=new Vs(null);return Vn(A,((A,t)=>{e=e.set(new ro(A),t)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(A,e){if(null!=this.value&&e(this.value))return{path:go(),value:this.value};if(Qo(A))return null;{const t=lo(A),i=this.children.get(t);if(null!==i){const n=i.findRootMostMatchingPathAndValue(Co(A),e);if(null!=n){return{path:ho(new ro(t),n.path),value:n.value}}return null}return null}}findRootMostValueAndPath(A){return this.findRootMostMatchingPathAndValue(A,(()=>!0))}subtree(A){if(Qo(A))return this;{const e=lo(A),t=this.children.get(e);return null!==t?t.subtree(Co(A)):new Vs(null)}}set(A,e){if(Qo(A))return new Vs(e,this.children);{const t=lo(A),i=(this.children.get(t)||new Vs(null)).set(Co(A),e),n=this.children.insert(t,i);return new Vs(this.value,n)}}remove(A){if(Qo(A))return this.children.isEmpty()?new Vs(null):new Vs(null,this.children);{const e=lo(A),t=this.children.get(e);if(t){const i=t.remove(Co(A));let n;return n=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&n.isEmpty()?new Vs(null):new Vs(this.value,n)}return this}}get(A){if(Qo(A))return this.value;{const e=lo(A),t=this.children.get(e);return t?t.get(Co(A)):null}}setTree(A,e){if(Qo(A))return e;{const t=lo(A),i=(this.children.get(t)||new Vs(null)).setTree(Co(A),e);let n;return n=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),new Vs(this.value,n)}}fold(A){return this.fold_(go(),A)}fold_(A,e){const t={};return this.children.inorderTraversal(((i,n)=>{t[i]=n.fold_(ho(A,i),e)})),e(A,this.value,t)}findOnPath(A,e){return this.findOnPath_(A,go(),e)}findOnPath_(A,e,t){const i=!!this.value&&t(e,this.value);if(i)return i;if(Qo(A))return null;{const i=lo(A),n=this.children.get(i);return n?n.findOnPath_(Co(A),ho(e,i),t):null}}foreachOnPath(A,e){return this.foreachOnPath_(A,go(),e)}foreachOnPath_(A,e,t){if(Qo(A))return this;{this.value&&t(e,this.value);const i=lo(A),n=this.children.get(i);return n?n.foreachOnPath_(Co(A),ho(e,i),t):new Vs(null)}}foreach(A){this.foreach_(go(),A)}foreach_(A,e){this.children.inorderTraversal(((t,i)=>{i.foreach_(ho(A,t),e)})),this.value&&e(A,this.value)}foreachChild(A){this.children.inorderTraversal(((e,t)=>{t.value&&A(e,t.value)}))}constructor(A,e=(()=>(fs||(fs=new Ko(Sn)),fs))()){this.value=A,this.children=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{static empty(){return new Js(new Vs(null))}constructor(A){this.writeTree_=A}}function Zs(A,e,t){if(Qo(e))return new Js(new Vs(t));{const i=A.writeTree_.findRootMostValueAndPath(e);if(null!=i){const n=i.path;let o=i.value;const s=uo(n,e);return o=o.updateChild(s,t),new Js(A.writeTree_.set(n,o))}{const i=new Vs(t),n=A.writeTree_.setTree(e,i);return new Js(n)}}}function Ns(A,e,t){let i=A;return Vn(t,((A,t)=>{i=Zs(i,ho(e,A),t)})),i}function bs(A,e){if(Qo(e))return Js.empty();{const t=A.writeTree_.setTree(e,new Vs(null));return new Js(t)}}function qs(A,e){return null!=Ts(A,e)}function Ts(A,e){const t=A.writeTree_.findRootMostValueAndPath(e);return null!=t?A.writeTree_.get(t.path).getChild(uo(t.path,e)):null}function Os(A){const e=[],t=A.writeTree_.value;return null!=t?t.isLeafNode()||t.forEachChild(Wo,((A,t)=>{e.push(new Yo(A,t))})):A.writeTree_.children.inorderTraversal(((A,t)=>{null!=t.value&&e.push(new Yo(A,t.value))})),e}function Ws(A,e){if(Qo(e))return A;{const t=Ts(A,e);return new Js(null!=t?new Vs(t):A.writeTree_.subtree(e))}}function Ls(A){return A.writeTree_.isEmpty()}function zs(A,e){return vs(go(),A.writeTree_,e)}function vs(A,e,t){if(null!=e.value)return t.updateChild(A,e.value);{let i=null;return e.children.inorderTraversal(((e,n)=>{".priority"===e?(S(null!==n.value,"Priority writes must always be leaf nodes"),i=n.value):t=vs(ho(A,e),n,t)})),t.getChild(A).isEmpty()||null===i||(t=t.updateChild(ho(A,".priority"),i)),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(A,e){return aa(e,A)}function js(A,e){const t=A.allWrites.findIndex((A=>A.writeId===e));S(t>=0,"removeWrite called with nonexistent writeId.");const i=A.allWrites[t];A.allWrites.splice(t,1);let n=i.visible,o=!1,s=A.allWrites.length-1;for(;n&&s>=0;){const e=A.allWrites[s];e.visible&&(s>=t&&Ps(e,i.path)?n=!1:mo(i.path,e.path)&&(o=!0)),s--}if(n){if(o)return function(A){A.visibleWrites=_s(A.allWrites,Xs,go()),A.allWrites.length>0?A.lastWriteId=A.allWrites[A.allWrites.length-1].writeId:A.lastWriteId=-1}(A),!0;if(i.snap)A.visibleWrites=bs(A.visibleWrites,i.path);else{Vn(i.children,(e=>{A.visibleWrites=bs(A.visibleWrites,ho(i.path,e))}))}return!0}return!1}function Ps(A,e){if(A.snap)return mo(A.path,e);for(const t in A.children)if(A.children.hasOwnProperty(t)&&mo(ho(A.path,t),e))return!0;return!1}function Xs(A){return A.visible}function _s(A,e,t){let i=Js.empty();for(let n=0;n<A.length;++n){const o=A[n];if(e(o)){const A=o.path;let e;if(o.snap)mo(t,A)?(e=uo(t,A),i=Zs(i,e,o.snap)):mo(A,t)&&(e=uo(A,t),i=Zs(i,go(),o.snap.getChild(e)));else{if(!o.children)throw x("WriteRecord should have .snap or .children");if(mo(t,A))e=uo(t,A),i=Ns(i,e,o.children);else if(mo(A,t))if(e=uo(A,t),Qo(e))i=Ns(i,go(),o.children);else{const A=lA(o.children,lo(e));if(A){const t=A.getChild(Co(e));i=Zs(i,go(),t)}}}}}return i}function $s(A,e,t,i,n){if(i||n){const o=Ws(A.visibleWrites,e);if(!n&&Ls(o))return t;if(n||null!=t||qs(o,go())){const o=function(A){return(A.visible||n)&&(!i||!~i.indexOf(A.writeId))&&(mo(A.path,e)||mo(e,A.path))};return zs(_s(A.allWrites,o,e),t||_o.EMPTY_NODE)}return null}{const i=Ts(A.visibleWrites,e);if(null!=i)return i;{const i=Ws(A.visibleWrites,e);if(Ls(i))return t;if(null!=t||qs(i,go())){return zs(i,t||_o.EMPTY_NODE)}return null}}}function Aa(A,e,t,i){return $s(A.writeTree,A.treePath,e,t,i)}function ea(A,e){return function(A,e,t){let i=_o.EMPTY_NODE;const n=Ts(A.visibleWrites,e);if(n)return n.isLeafNode()||n.forEachChild(Wo,((A,e)=>{i=i.updateImmediateChild(A,e)})),i;if(t){const n=Ws(A.visibleWrites,e);return t.forEachChild(Wo,((A,e)=>{const t=zs(Ws(n,new ro(A)),e);i=i.updateImmediateChild(A,t)})),Os(n).forEach((A=>{i=i.updateImmediateChild(A.name,A.node)})),i}return Os(Ws(A.visibleWrites,e)).forEach((A=>{i=i.updateImmediateChild(A.name,A.node)})),i}(A.writeTree,A.treePath,e)}function ta(A,e,t,i){return function(A,e,t,i,n){S(i||n,"Either existingEventSnap or existingServerSnap must exist");const o=ho(e,t);if(qs(A.visibleWrites,o))return null;{const e=Ws(A.visibleWrites,o);return Ls(e)?n.getChild(t):zs(e,n.getChild(t))}}(A.writeTree,A.treePath,e,t,i)}function ia(A,e){return function(A,e){return Ts(A.visibleWrites,e)}(A.writeTree,ho(A.treePath,e))}function na(A,e,t,i,n,o){return function(A,e,t,i,n,o,s){let a;const r=Ws(A.visibleWrites,e),g=Ts(r,go());if(null!=g)a=g;else{if(null==t)return[];a=zs(r,t)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const A=[],e=s.getCompare(),t=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let r=t.getNext();for(;r&&A.length<n;)0!==e(r,i)&&A.push(r),r=t.getNext();return A}}(A.writeTree,A.treePath,e,t,i,n,o)}function oa(A,e,t){return function(A,e,t,i){const n=ho(e,t),o=Ts(A.visibleWrites,n);if(null!=o)return o;if(i.isCompleteForChild(t))return zs(Ws(A.visibleWrites,n),i.getNode().getImmediateChild(t));return null}(A.writeTree,A.treePath,e,t)}function sa(A,e){return aa(ho(A.treePath,e),A.writeTree)}function aa(A,e){return{treePath:A,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{trackChildChange(A){const e=A.type,t=A.childName;S("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),S(".priority"!==t,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(t);if(i){const n=i.type;if("child_added"===e&&"child_removed"===n)this.changeMap.set(t,ss(t,A.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===n)this.changeMap.delete(t);else if("child_removed"===e&&"child_changed"===n)this.changeMap.set(t,os(t,i.oldSnap));else if("child_changed"===e&&"child_added"===n)this.changeMap.set(t,ns(t,A.snapshotNode));else{if("child_changed"!==e||"child_changed"!==n)throw x("Illegal combination of changes: "+A+" occurred after "+i);this.changeMap.set(t,ss(t,A.snapshotNode,i.oldSnap))}}else this.changeMap.set(t,A)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new class{getCompleteChild(A){return null}getChildAfterChild(A,e,t){return null}};class la{getCompleteChild(A){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(A))return e.getNode().getImmediateChild(A);{const e=null!=this.optCompleteServerCache_?new Ys(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oa(this.writes_,A,e)}}getChildAfterChild(A,e,t){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ks(this.viewCache_),n=na(this.writes_,i,e,1,t,A);return 0===n.length?null:n[0]}constructor(A,e,t=null){this.writes_=A,this.viewCache_=e,this.optCompleteServerCache_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(A,e,t,i,n){const o=new ra;let s,a;if(t.type===ws.OVERWRITE){const r=t;r.source.fromUser?s=Ea(A,e,r.path,r.snap,i,n,o):(S(r.source.fromServer,"Unknown source."),a=r.source.tagged||e.serverCache.isFiltered()&&!Qo(r.path),s=ca(A,e,r.path,r.snap,i,n,a,o))}else if(t.type===ws.MERGE){const r=t;r.source.fromUser?s=function(A,e,t,i,n,o,s){let a=e;return i.foreach(((i,r)=>{const g=ho(t,i);Ba(e,lo(g))&&(a=Ea(A,a,g,r,n,o,s))})),i.foreach(((i,r)=>{const g=ho(t,i);Ba(e,lo(g))||(a=Ea(A,a,g,r,n,o,s))})),a}(A,e,r.path,r.children,i,n,o):(S(r.source.fromServer,"Unknown source."),a=r.source.tagged||e.serverCache.isFiltered(),s=Qa(A,e,r.path,r.children,i,n,a,o))}else if(t.type===ws.ACK_USER_WRITE){const a=t;s=a.revert?function(A,e,t,i,n,o){let s;if(null!=ia(i,t))return e;{const a=new la(i,e,n),r=e.eventCache.getNode();let g;if(Qo(t)||".priority"===lo(t)){let t;if(e.serverCache.isFullyInitialized())t=Aa(i,Ks(e));else{const A=e.serverCache.getNode();S(A instanceof _o,"serverChildren would be complete if leaf node"),t=ea(i,A)}g=A.filter.updateFullNode(r,t,o)}else{const n=lo(t);let l=oa(i,n,e.serverCache);null==l&&e.serverCache.isCompleteForChild(n)&&(l=r.getImmediateChild(n)),g=null!=l?A.filter.updateChild(r,n,l,Co(t),a,o):e.eventCache.getNode().hasChild(n)?A.filter.updateChild(r,n,_o.EMPTY_NODE,Co(t),a,o):r,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=Aa(i,Ks(e)),s.isLeafNode()&&(g=A.filter.updateFullNode(g,s,o)))}return s=e.serverCache.isFullyInitialized()||null!=ia(i,go()),Us(e,g,s,A.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A,e,a.path,i,n,o):function(A,e,t,i,n,o,s){if(null!=ia(n,t))return e;const a=e.serverCache.isFiltered(),r=e.serverCache;if(null!=i.value){if(Qo(t)&&r.isFullyInitialized()||r.isCompleteForPath(t))return ca(A,e,t,r.getNode().getChild(t),n,o,a,s);if(Qo(t)){let i=new Vs(null);return r.getNode().forEachChild(Uo,((A,e)=>{i=i.set(new ro(A),e)})),Qa(A,e,t,i,n,o,a,s)}return e}{let g=new Vs(null);return i.foreach(((A,e)=>{const i=ho(t,A);r.isCompleteForPath(i)&&(g=g.set(A,r.getNode().getChild(i)))})),Qa(A,e,t,g,n,o,a,s)}}(A,e,a.path,a.affectedTree,i,n,o)}else{if(t.type!==ws.LISTEN_COMPLETE)throw x("Unknown operation type: "+t.type);s=function(A,e,t,i,n){const o=e.serverCache,s=Ss(e,o.getNode(),o.isFullyInitialized()||Qo(t),o.isFiltered());return Ca(A,s,t,i,ga,n)}(A,e,t.path,i,o)}const r=o.getChanges();return function(A,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const n=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=xs(A);(t.length>0||!A.eventCache.isFullyInitialized()||n&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(is(xs(e)))}}(e,s,r),{viewCache:s,changes:r}}function Ca(A,e,t,i,n,o){const s=e.eventCache;if(null!=ia(i,t))return e;{let a,r;if(Qo(t))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const t=Ks(e),n=ea(i,t instanceof _o?t:_o.EMPTY_NODE);a=A.filter.updateFullNode(e.eventCache.getNode(),n,o)}else{const t=Aa(i,Ks(e));a=A.filter.updateFullNode(e.eventCache.getNode(),t,o)}else{const g=lo(t);if(".priority"===g){S(1===Io(t),"Can't have a priority with additional path components");const n=s.getNode();r=e.serverCache.getNode();const o=ta(i,t,n,r);a=null!=o?A.filter.updatePriority(n,o):s.getNode()}else{const l=Co(t);let I;if(s.isCompleteForChild(g)){r=e.serverCache.getNode();const A=ta(i,t,s.getNode(),r);I=null!=A?s.getNode().getImmediateChild(g).updateChild(l,A):s.getNode().getImmediateChild(g)}else I=oa(i,g,e.serverCache);a=null!=I?A.filter.updateChild(s.getNode(),g,I,l,n,o):s.getNode()}}return Us(e,a,s.isFullyInitialized()||Qo(t),A.filter.filtersNodes())}}function ca(A,e,t,i,n,o,s,a){const r=e.serverCache;let g;const l=s?A.filter:A.filter.getIndexedFilter();if(Qo(t))g=l.updateFullNode(r.getNode(),i,null);else if(l.filtersNodes()&&!r.isFiltered()){const A=r.getNode().updateChild(t,i);g=l.updateFullNode(r.getNode(),A,null)}else{const A=lo(t);if(!r.isCompleteForPath(t)&&Io(t)>1)return e;const n=Co(t),o=r.getNode().getImmediateChild(A).updateChild(n,i);g=".priority"===A?l.updatePriority(r.getNode(),o):l.updateChild(r.getNode(),A,o,n,ga,null)}const I=Ss(e,g,r.isFullyInitialized()||Qo(t),l.filtersNodes());return Ca(A,I,t,n,new la(n,I,o),a)}function Ea(A,e,t,i,n,o,s){const a=e.eventCache;let r,g;const l=new la(n,e,o);if(Qo(t))g=A.filter.updateFullNode(e.eventCache.getNode(),i,s),r=Us(e,g,!0,A.filter.filtersNodes());else{const n=lo(t);if(".priority"===n)g=A.filter.updatePriority(e.eventCache.getNode(),i),r=Us(e,g,a.isFullyInitialized(),a.isFiltered());else{const o=Co(t),g=a.getNode().getImmediateChild(n);let I;if(Qo(o))I=i;else{const A=l.getCompleteChild(n);I=null!=A?".priority"===co(o)&&A.getChild(Bo(o)).isEmpty()?A:A.updateChild(o,i):_o.EMPTY_NODE}if(g.equals(I))r=e;else{r=Us(e,A.filter.updateChild(a.getNode(),n,I,o,l,s),a.isFullyInitialized(),A.filter.filtersNodes())}}}return r}function Ba(A,e){return A.eventCache.isCompleteForChild(e)}function ha(A,e,t){return t.foreach(((A,t)=>{e=e.updateChild(A,t)})),e}function Qa(A,e,t,i,n,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let r,g=e;r=Qo(t)?i:new Vs(null).setTree(t,i);const l=e.serverCache.getNode();return r.children.inorderTraversal(((t,i)=>{if(l.hasChild(t)){const r=ha(0,e.serverCache.getNode().getImmediateChild(t),i);g=ca(A,g,new ro(t),r,n,o,s,a)}})),r.children.inorderTraversal(((t,i)=>{const r=!e.serverCache.isCompleteForChild(t)&&null===i.value;if(!l.hasChild(t)&&!r){const r=ha(0,e.serverCache.getNode().getImmediateChild(t),i);g=ca(A,g,new ro(t),r,n,o,s,a)}})),g}class da{get query(){return this.query_}constructor(A,e){this.query_=A,this.eventRegistrations_=[];const t=this.query_._queryParams,i=new as(t.getIndex()),n=(o=t).loadsAllData()?new as(o.getIndex()):o.hasLimit()?new gs(o):new rs(o);var o;this.processor_=function(A){return{filter:A}}(n);const s=e.serverCache,a=e.eventCache,r=i.updateFullNode(_o.EMPTY_NODE,s.getNode(),null),g=n.updateFullNode(_o.EMPTY_NODE,a.getNode(),null),l=new Ys(r,s.isFullyInitialized(),i.filtersNodes()),I=new Ys(g,a.isFullyInitialized(),n.filtersNodes());this.viewCache_=ys(I,l),this.eventGenerator_=new Gs(this.query_)}}function ua(A,e){const t=Ks(A.viewCache_);return t&&(A.query._queryParams.loadsAllData()||!Qo(e)&&!t.getImmediateChild(lo(e)).isEmpty())?t.getChild(e):null}function wa(A){return 0===A.eventRegistrations_.length}function ma(A,e,t){const i=[];if(t){S(null==e,"A cancel should cancel all event registrations.");const n=A.query._path;A.eventRegistrations_.forEach((A=>{const e=A.createCancelEvent(t,n);e&&i.push(e)}))}if(e){let t=[];for(let i=0;i<A.eventRegistrations_.length;++i){const n=A.eventRegistrations_[i];if(n.matches(e)){if(e.hasAnyCallback()){t=t.concat(A.eventRegistrations_.slice(i+1));break}}else t.push(n)}A.eventRegistrations_=t}else A.eventRegistrations_=[];return i}function pa(A,e,t,i){e.type===ws.MERGE&&null!==e.source.queryId&&(S(Ks(A.viewCache_),"We should always have a full cache before handling merges"),S(xs(A.viewCache_),"Missing event cache, even though we have a server cache"));const n=A.viewCache_,o=Ia(A.processor_,n,e,t,i);var s,a;return s=A.processor_,a=o.viewCache,S(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),S(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),S(o.viewCache.serverCache.isFullyInitialized()||!n.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),A.viewCache_=o.viewCache,Ma(A,o.changes,o.viewCache.eventCache.getNode(),null)}function Ma(A,e,t,i){const n=i?[i]:A.eventRegistrations_;return function(A,e,t,i){const n=[],o=[];return e.forEach((e=>{var t;"child_changed"===e.type&&A.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&o.push((t=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:t}))})),Fs(A,n,"child_removed",e,i,t),Fs(A,n,"child_added",e,i,t),Fs(A,n,"child_moved",o,i,t),Fs(A,n,"child_changed",e,i,t),Fs(A,n,"value",e,i,t),n}(A.eventGenerator_,e,t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da,Ra;class ka{constructor(){this.views=new Map}}function Ya(A,e,t,i){const n=e.source.queryId;if(null!==n){const o=A.views.get(n);return S(null!=o,"SyncTree gave us an op for an invalid query."),pa(o,e,t,i)}{let n=[];for(const o of A.views.values())n=n.concat(pa(o,e,t,i));return n}}function Ga(A,e,t,i,n){const o=e._queryIdentifier,s=A.views.get(o);if(!s){let A=Aa(t,n?i:null),o=!1;A?o=!0:i instanceof _o?(A=ea(t,i),o=!1):(A=_o.EMPTY_NODE,o=!1);const s=ys(new Ys(A,o,!1),new Ys(i,n,!1));return new da(e,s)}return s}function Fa(A,e,t,i,n,o){const s=Ga(A,e,i,n,o);return A.views.has(e._queryIdentifier)||A.views.set(e._queryIdentifier,s),function(A,e){A.eventRegistrations_.push(e)}(s,t),function(A,e){const t=A.viewCache_.eventCache,i=[];t.getNode().isLeafNode()||t.getNode().forEachChild(Wo,((A,e)=>{i.push(ns(A,e))}));return t.isFullyInitialized()&&i.push(is(t.getNode())),Ma(A,i,t.getNode(),e)}(s,t)}function ya(A,e,t,i){const n=e._queryIdentifier,o=[];let s=[];const a=fa(A);if("default"===n)for(const[e,n]of A.views.entries())s=s.concat(ma(n,t,i)),wa(n)&&(A.views.delete(e),n.query._queryParams.loadsAllData()||o.push(n.query));else{const e=A.views.get(n);e&&(s=s.concat(ma(e,t,i)),wa(e)&&(A.views.delete(n),e.query._queryParams.loadsAllData()||o.push(e.query)))}return a&&!fa(A)&&o.push(new(S(Da,"Reference.ts has not been loaded"),Da)(e._repo,e._path)),{removed:o,events:s}}function Ua(A){const e=[];for(const t of A.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Sa(A,e){let t=null;for(const i of A.views.values())t=t||ua(i,e);return t}function xa(A,e){if(e._queryParams.loadsAllData())return Va(A);{const t=e._queryIdentifier;return A.views.get(t)}}function Ka(A,e){return null!=xa(A,e)}function fa(A){return null!=Va(A)}function Va(A){for(const e of A.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja=1;class Za{constructor(A){this.listenProvider_=A,this.syncPointTree_=new Vs(null),this.pendingWriteTree_={visibleWrites:Js.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Na(A,e,t,i,n){return function(A,e,t,i,n){S(i>A.lastWriteId,"Stacking an older write on top of newer ones"),void 0===n&&(n=!0),A.allWrites.push({path:e,snap:t,writeId:i,visible:n}),n&&(A.visibleWrites=Zs(A.visibleWrites,e,t)),A.lastWriteId=i}(A.pendingWriteTree_,e,t,i,n),n?va(A,new Rs({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,t)):[]}function ba(A,e,t=!1){const i=function(A,e){for(let t=0;t<A.allWrites.length;t++){const i=A.allWrites[t];if(i.writeId===e)return i}return null}(A.pendingWriteTree_,e);if(js(A.pendingWriteTree_,e)){let e=new Vs(null);return null!=i.snap?e=e.set(go(),!0):Vn(i.children,(A=>{e=e.set(new ro(A),!0)})),va(A,new Ms(i.path,e,t))}return[]}function qa(A,e,t){return va(A,new Rs({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,t))}function Ta(A,e,t,i,n=!1){const o=e._path,s=A.syncPointTree_.get(o);let a=[];if(s&&("default"===e._queryIdentifier||Ka(s,e))){const r=ya(s,e,t,i);0===s.views.size&&(A.syncPointTree_=A.syncPointTree_.remove(o));const g=r.removed;if(a=r.events,!n){const t=-1!==g.findIndex((A=>A._queryParams.loadsAllData())),n=A.syncPointTree_.findOnPath(o,((A,e)=>fa(e)));if(t&&!n){const e=A.syncPointTree_.subtree(o);if(!e.isEmpty()){const t=function(A){return A.fold(((A,e,t)=>{if(e&&fa(e)){return[Va(e)]}{let A=[];return e&&(A=Ua(e)),Vn(t,((e,t)=>{A=A.concat(t)})),A}}))}(e);for(let e=0;e<t.length;++e){const i=t[e],n=i.query,o=Pa(A,i);A.listenProvider_.startListening(tr(n),Xa(A,n),o.hashFn,o.onComplete)}}}if(!n&&g.length>0&&!i)if(t){const t=null;A.listenProvider_.stopListening(tr(e),t)}else g.forEach((e=>{const t=A.queryToTagMap.get(_a(e));A.listenProvider_.stopListening(tr(e),t)}))}!function(A,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const e=_a(i),t=A.queryToTagMap.get(e);A.queryToTagMap.delete(e),A.tagToQueryMap.delete(t)}}}(A,g)}return a}function Oa(A,e,t,i){const n=$a(A,i);if(null!=n){const i=Ar(n),o=i.path,s=i.queryId,a=uo(o,e);return er(A,o,new Rs(ps(s),a,t))}return[]}function Wa(A,e,t,i=!1){const n=e._path;let o=null,s=!1;A.syncPointTree_.foreachOnPath(n,((A,e)=>{const t=uo(A,n);o=o||Sa(e,t),s=s||fa(e)}));let a,r=A.syncPointTree_.get(n);if(r?(s=s||fa(r),o=o||Sa(r,go())):(r=new ka,A.syncPointTree_=A.syncPointTree_.set(n,r)),null!=o)a=!0;else{a=!1,o=_o.EMPTY_NODE;A.syncPointTree_.subtree(n).foreachChild(((A,e)=>{const t=Sa(e,go());t&&(o=o.updateImmediateChild(A,t))}))}const g=Ka(r,e);if(!g&&!e._queryParams.loadsAllData()){const t=_a(e);S(!A.queryToTagMap.has(t),"View does not exist, but we have a tag");const i=Ja++;A.queryToTagMap.set(t,i),A.tagToQueryMap.set(i,t)}let l=Fa(r,e,t,Hs(A.pendingWriteTree_,n),o,a);if(!g&&!s&&!i){const t=xa(r,e);l=l.concat(function(A,e,t){const i=e._path,n=Xa(A,e),o=Pa(A,t),s=A.listenProvider_.startListening(tr(e),n,o.hashFn,o.onComplete),a=A.syncPointTree_.subtree(i);if(n)S(!fa(a.value),"If we're adding a query, it shouldn't be shadowed");else{const e=a.fold(((A,e,t)=>{if(!Qo(A)&&e&&fa(e))return[Va(e).query];{let A=[];return e&&(A=A.concat(Ua(e).map((A=>A.query)))),Vn(t,((e,t)=>{A=A.concat(t)})),A}}));for(let t=0;t<e.length;++t){const i=e[t];A.listenProvider_.stopListening(tr(i),Xa(A,i))}}return s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A,e,t))}return l}function La(A,e,t){const i=A.pendingWriteTree_,n=A.syncPointTree_.findOnPath(e,((A,t)=>{const i=Sa(t,uo(A,e));if(i)return i}));return $s(i,e,n,t,!0)}function za(A,e){const t=e._path;let i=null;A.syncPointTree_.foreachOnPath(t,((A,e)=>{const n=uo(A,t);i=i||Sa(e,n)}));let n=A.syncPointTree_.get(t);n?i=i||Sa(n,go()):(n=new ka,A.syncPointTree_=A.syncPointTree_.set(t,n));const o=null!=i,s=o?new Ys(i,!0,!1):null;return function(A){return xs(A.viewCache_)}(Ga(n,e,Hs(A.pendingWriteTree_,e._path),o?s.getNode():_o.EMPTY_NODE,o))}function va(A,e){return Ha(e,A.syncPointTree_,null,Hs(A.pendingWriteTree_,go()))}function Ha(A,e,t,i){if(Qo(A.path))return ja(A,e,t,i);{const n=e.get(go());null==t&&null!=n&&(t=Sa(n,go()));let o=[];const s=lo(A.path),a=A.operationForChild(s),r=e.children.get(s);if(r&&a){const A=t?t.getImmediateChild(s):null,e=sa(i,s);o=o.concat(Ha(a,r,A,e))}return n&&(o=o.concat(Ya(n,A,i,t))),o}}function ja(A,e,t,i){const n=e.get(go());null==t&&null!=n&&(t=Sa(n,go()));let o=[];return e.children.inorderTraversal(((e,n)=>{const s=t?t.getImmediateChild(e):null,a=sa(i,e),r=A.operationForChild(e);r&&(o=o.concat(ja(r,n,s,a)))})),n&&(o=o.concat(Ya(n,A,i,t))),o}function Pa(A,e){const t=e.query,i=Xa(A,t);return{hashFn:()=>{const A=function(A){return A.viewCache_.serverCache.getNode()}(e)||_o.EMPTY_NODE;return A.hash()},onComplete:e=>{if("ok"===e)return i?function(A,e,t){const i=$a(A,t);if(i){const t=Ar(i),n=t.path,o=t.queryId,s=uo(n,e);return er(A,n,new Ds(ps(o),s))}return[]}(A,t._path,i):function(A,e){return va(A,new Ds({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e))}(A,t._path);{const i=function(A,e){let t="Unknown Error";"too_big"===A?t="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===A?t="Client doesn't have permission to access the desired data.":"unavailable"===A&&(t="The service is unavailable");const i=new Error(A+" at "+e._path.toString()+": "+t);return i.code=A.toUpperCase(),i}(e,t);return Ta(A,t,null,i)}}}}function Xa(A,e){const t=_a(e);return A.queryToTagMap.get(t)}function _a(A){return A._path.toString()+"$"+A._queryIdentifier}function $a(A,e){return A.tagToQueryMap.get(e)}function Ar(A){const e=A.indexOf("$");return S(-1!==e&&e<A.length-1,"Bad queryKey."),{queryId:A.substr(e+1),path:new ro(A.substr(0,e))}}function er(A,e,t){const i=A.syncPointTree_.get(e);S(i,"Missing sync point for query tag that we're tracking");return Ya(i,t,Hs(A.pendingWriteTree_,e),null)}function tr(A){return A._queryParams.loadsAllData()&&!A._queryParams.isDefault()?new(S(Ra,"Reference.ts has not been loaded"),Ra)(A._repo,A._path):A}class ir{getImmediateChild(A){const e=this.node_.getImmediateChild(A);return new ir(e)}node(){return this.node_}constructor(A){this.node_=A}}class nr{getImmediateChild(A){const e=ho(this.path_,A);return new nr(this.syncTree_,e)}node(){return La(this.syncTree_,this.path_)}constructor(A,e){this.syncTree_=A,this.path_=e}}const or=function(A,e,t){return A&&"object"==typeof A?(S(".sv"in A,"Unexpected leaf node or priority contents"),"string"==typeof A[".sv"]?sr(A[".sv"],e,t):"object"==typeof A[".sv"]?ar(A[".sv"],e):void S(!1,"Unexpected server value: "+JSON.stringify(A,null,2))):A},sr=function(A,e,t){if("timestamp"===A)return t.timestamp;S(!1,"Unexpected server value: "+A)},ar=function(A,e,t){A.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(A,null,2));const i=A.increment;"number"!=typeof i&&S(!1,"Unexpected increment value: "+i);const n=e.node();if(S(null!=n,"Expected ChildrenNode.EMPTY_NODE for nulls"),!n.isLeafNode())return i;const o=n.getValue();return"number"!=typeof o?i:o+i},rr=function(A,e,t,i){return lr(e,new nr(t,A),i)},gr=function(A,e,t){return lr(A,new ir(e),t)};function lr(A,e,t){const i=A.getPriority().val(),n=or(i,e.getImmediateChild(".priority"),t);let o;if(A.isLeafNode()){const i=A,o=or(i.getValue(),e,t);return o!==i.getValue()||n!==i.getPriority().val()?new Oo(o,As(n)):A}{const i=A;return o=i,n!==i.getPriority().val()&&(o=o.updatePriority(new Oo(n))),i.forEachChild(Wo,((A,i)=>{const n=lr(i,e.getImmediateChild(A),t);n!==i&&(o=o.updateImmediateChild(A,n))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(A="",e=null,t={children:{},childCount:0}){this.name=A,this.parent=e,this.node=t}}function Cr(A,e){let t=e instanceof ro?e:new ro(e),i=A,n=lo(t);for(;null!==n;){const A=lA(i.node.children,n)||{children:{},childCount:0};i=new Ir(n,i,A),t=Co(t),n=lo(t)}return i}function cr(A){return A.node.value}function Er(A,e){A.node.value=e,ur(A)}function Br(A){return A.node.childCount>0}function hr(A,e){Vn(A.node.children,((t,i)=>{e(new Ir(t,A,i))}))}function Qr(A,e,t,i){t&&!i&&e(A),hr(A,(A=>{Qr(A,e,!0,i)})),t&&i&&e(A)}function dr(A){return new ro(null===A.parent?A.name:dr(A.parent)+"/"+A.name)}function ur(A){null!==A.parent&&function(A,e,t){const i=function(A){return void 0===cr(A)&&!Br(A)}(t),n=gA(A.node.children,e);i&&n?(delete A.node.children[e],A.node.childCount--,ur(A)):i||n||(A.node.children[e]=t.node,A.node.childCount++,ur(A))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A.parent,A.name,A)}const wr=/[\[\].#$\/\u0000-\u001F\u007F]/,mr=/[\[\].#$\u0000-\u001F\u007F]/,pr=function(A){return"string"==typeof A&&0!==A.length&&!wr.test(A)},Mr=function(A){return"string"==typeof A&&0!==A.length&&!mr.test(A)},Dr=function(A,e,t,i){i&&void 0===e||Rr(pA(A,"value"),e,t)},Rr=function(A,e,t){const i=t instanceof ro?new po(t,A):t;if(void 0===e)throw new Error(A+"contains undefined "+Do(i));if("function"==typeof e)throw new Error(A+"contains a function "+Do(i)+" with contents = "+e.toString());if(yn(e))throw new Error(A+"contains "+e.toString()+" "+Do(i));if("string"==typeof e&&e.length>10485760/3&&DA(e)>10485760)throw new Error(A+"contains a string greater than 10485760 utf8 bytes "+Do(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let t=!1,n=!1;if(Vn(e,((e,o)=>{if(".value"===e)t=!0;else if(".priority"!==e&&".sv"!==e&&(n=!0,!pr(e)))throw new Error(A+" contains an invalid key ("+e+") "+Do(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=e,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=DA(a),Mo(s),Rr(A,o,i),function(A){const e=A.parts_.pop();A.byteLength_-=DA(e),A.parts_.length>0&&(A.byteLength_-=1)}(i)})),t&&n)throw new Error(A+' contains ".value" child '+Do(i)+" in addition to actual children.")}},kr=function(A,e,t,i){if(!(i&&void 0===t||Mr(t)))throw new Error(pA(A,e)+'was an invalid path = "'+t+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Yr=function(A,e){if(".info"===lo(e))throw new Error(A+" failed = Can't modify data under /.info/")},Gr=function(A,e){const t=e.path.toString();if("string"!=typeof e.repoInfo.host||0===e.repoInfo.host.length||!pr(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==t.length&&!function(A){return A&&(A=A.replace(/^\/*\.info(\/|$)/,"/")),Mr(A)}(t))throw new Error(pA(A,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yr(A,e){let t=null;for(let i=0;i<e.length;i++){const n=e[i],o=n.getPath();null===t||wo(o,t.path)||(A.eventLists_.push(t),t=null),null===t&&(t={events:[],path:o}),t.events.push(n)}t&&A.eventLists_.push(t)}function Ur(A,e,t){yr(A,t),Sr(A,(A=>mo(A,e)||mo(e,A)))}function Sr(A,e){A.recursionDepth_++;let t=!0;for(let i=0;i<A.eventLists_.length;i++){const n=A.eventLists_[i];if(n){e(n.path)?(xr(A.eventLists_[i]),A.eventLists_[i]=null):t=!1}}t&&(A.eventLists_=[]),A.recursionDepth_--}function xr(A){for(let e=0;e<A.events.length;e++){const t=A.events[e];if(null!==t){A.events[e]=null;const i=t.getEventRunner();pn&&Rn("event: "+t.toString()),bn(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(A,e,t,i){this.repoInfo_=A,this.forceRestClient_=e,this.authTokenProvider_=t,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Fr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bs(),this.transactionQueueTree_=new Ir,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function fr(A,e,t){if(A.stats_=Xn(A.repoInfo_),A.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)A.server_=new cs(A.repoInfo_,((e,t,i,n)=>{Zr(A,e,t,i,n)}),A.authTokenProvider_,A.appCheckProvider_),setTimeout((()=>Nr(A,!0)),0);else{if(null!=t){if("object"!=typeof t)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{oA(t)}catch(A){throw new Error("Invalid authOverride provided: "+A)}}A.persistentConnection_=new ko(A.repoInfo_,e,((e,t,i,n)=>{Zr(A,e,t,i,n)}),(e=>{Nr(A,e)}),(e=>{!function(A,e){Vn(e,((e,t)=>{br(A,e,t)}))}(A,e)}),A.authTokenProvider_,A.appCheckProvider_,t),A.server_=A.persistentConnection_}A.authTokenProvider_.addTokenChangeListener((e=>{A.server_.refreshAuthToken(e)})),A.appCheckProvider_.addTokenChangeListener((e=>{A.server_.refreshAppCheckToken(e.token)})),A.statsReporter_=function(A,e){const t=A.toString();return Pn[t]||(Pn[t]=e()),Pn[t]}(A.repoInfo_,(()=>new us(A.stats_,A.server_))),A.infoData_=new Es,A.infoSyncTree_=new Za({startListening:(e,t,i,n)=>{let o=[];const s=A.infoData_.getNode(e._path);return s.isEmpty()||(o=qa(A.infoSyncTree_,e._path,s),setTimeout((()=>{n("ok")}),0)),o},stopListening:()=>{}}),br(A,"connected",!1),A.serverSyncTree_=new Za({startListening:(e,t,i,n)=>(A.server_.listen(e,i,t,((t,i)=>{const o=n(t,i);Ur(A.eventQueue_,e._path,o)})),[]),stopListening:(e,t)=>{A.server_.unlisten(e,t)}})}function Vr(A){const e=A.infoData_.getNode(new ro(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e}function Jr(A){return(e=(e={timestamp:Vr(A)})||{}).timestamp=e.timestamp||(new Date).getTime(),e;var e}function Zr(A,e,t,i,n){A.dataUpdateCount++;const o=new ro(e);t=A.interceptServerDataCallback_?A.interceptServerDataCallback_(e,t):t;let s=[];if(n)if(i){const e=CA(t,(A=>As(A)));s=function(A,e,t,i){const n=$a(A,i);if(n){const i=Ar(n),o=i.path,s=i.queryId,a=uo(o,e),r=Vs.fromObject(t);return er(A,o,new ks(ps(s),a,r))}return[]}(A.serverSyncTree_,o,e,n)}else{const e=As(t);s=Oa(A.serverSyncTree_,o,e,n)}else if(i){const e=CA(t,(A=>As(A)));s=function(A,e,t){const i=Vs.fromObject(t);return va(A,new ks({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,i))}(A.serverSyncTree_,o,e)}else{const e=As(t);s=qa(A.serverSyncTree_,o,e)}let a=o;s.length>0&&(a=Hr(A,o)),Ur(A.eventQueue_,a,s)}function Nr(A,e){br(A,"connected",e),!1===e&&function(A){Wr(A,"onDisconnectEvents");const e=Jr(A),t=Bs();Qs(A.onDisconnect_,go(),((i,n)=>{const o=rr(i,n,A.serverSyncTree_,e);hs(t,i,o)}));let i=[];Qs(t,go(),((e,t)=>{i=i.concat(qa(A.serverSyncTree_,e,t));const n=$r(A,e);Hr(A,n)})),A.onDisconnect_=Bs(),Ur(A.eventQueue_,go(),i)}(A)}function br(A,e,t){const i=new ro("/.info/"+e),n=As(t);A.infoData_.updateSnapshot(i,n);const o=qa(A.infoSyncTree_,i,n);Ur(A.eventQueue_,i,o)}function qr(A){return A.nextWriteId_++}function Tr(A,e,t,i,n){Wr(A,"set",{path:e.toString(),value:t,priority:i});const o=Jr(A),s=As(t,i),a=La(A.serverSyncTree_,e),r=gr(s,a,o),g=qr(A),l=Na(A.serverSyncTree_,e,r,g,!0);yr(A.eventQueue_,l),A.server_.put(e.toString(),s.val(!0),((t,i)=>{const o="ok"===t;o||Fn("set at "+e+" failed: "+t);const s=ba(A.serverSyncTree_,g,!o);Ur(A.eventQueue_,e,s),Lr(A,n,t,i)}));const I=$r(A,e);Hr(A,I),Ur(A.eventQueue_,I,[])}function Or(A){A.persistentConnection_&&A.persistentConnection_.interrupt("repo_interrupt")}function Wr(A,...e){let t="";A.persistentConnection_&&(t=A.persistentConnection_.id+":"),Rn(t,...e)}function Lr(A,e,t,i){e&&bn((()=>{if("ok"===t)e(null);else{const A=(t||"error").toUpperCase();let n=A;i&&(n+=": "+i);const o=new Error(n);o.code=A,e(o)}}))}function zr(A,e,t){return La(A.serverSyncTree_,e,t)||_o.EMPTY_NODE}function vr(A,e=A.transactionQueueTree_){if(e||_r(A,e),cr(e)){const t=Pr(A,e);S(t.length>0,"Sending zero length transaction queue");t.every((A=>0===A.status))&&function(A,e,t){const i=t.map((A=>A.currentWriteId)),n=zr(A,e,i);let o=n;const s=n.hash();for(let A=0;A<t.length;A++){const i=t[A];S(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const n=uo(e,i.path);o=o.updateChild(n,i.currentOutputSnapshotRaw)}const a=o.val(!0),r=e;A.server_.put(r.toString(),a,(i=>{Wr(A,"transaction put response",{path:r.toString(),status:i});let n=[];if("ok"===i){const i=[];for(let e=0;e<t.length;e++)t[e].status=2,n=n.concat(ba(A.serverSyncTree_,t[e].currentWriteId)),t[e].onComplete&&i.push((()=>t[e].onComplete(null,!0,t[e].currentOutputSnapshotResolved))),t[e].unwatcher();_r(A,Cr(A.transactionQueueTree_,e)),vr(A,A.transactionQueueTree_),Ur(A.eventQueue_,e,n);for(let A=0;A<i.length;A++)bn(i[A])}else{if("datastale"===i)for(let A=0;A<t.length;A++)3===t[A].status?t[A].status=4:t[A].status=0;else{Fn("transaction at "+r.toString()+" failed: "+i);for(let A=0;A<t.length;A++)t[A].status=4,t[A].abortReason=i}Hr(A,e)}}),s)}(A,dr(e),t)}else Br(e)&&hr(e,(e=>{vr(A,e)}))}function Hr(A,e){const t=jr(A,e),i=dr(t);return function(A,e,t){if(0===e.length)return;const i=[];let n=[];const o=e.filter((A=>0===A.status)).map((A=>A.currentWriteId));for(let a=0;a<e.length;a++){const r=e[a],g=uo(t,r.path);let l,I=!1;if(S(null!==g,"rerunTransactionsUnderNode_: relativePath should not be null."),4===r.status)I=!0,l=r.abortReason,n=n.concat(ba(A.serverSyncTree_,r.currentWriteId,!0));else if(0===r.status)if(r.retryCount>=25)I=!0,l="maxretry",n=n.concat(ba(A.serverSyncTree_,r.currentWriteId,!0));else{const t=zr(A,r.path,o);r.currentInputSnapshot=t;const i=e[a].update(t.val());if(void 0!==i){Rr("transaction failed: Data returned ",i,r.path);let e=As(i);"object"==typeof i&&null!=i&&gA(i,".priority")||(e=e.updatePriority(t.getPriority()));const s=r.currentWriteId,a=Jr(A),g=gr(e,t,a);r.currentOutputSnapshotRaw=e,r.currentOutputSnapshotResolved=g,r.currentWriteId=qr(A),o.splice(o.indexOf(s),1),n=n.concat(Na(A.serverSyncTree_,r.path,g,r.currentWriteId,r.applyLocally)),n=n.concat(ba(A.serverSyncTree_,s,!0))}else I=!0,l="nodata",n=n.concat(ba(A.serverSyncTree_,r.currentWriteId,!0))}Ur(A.eventQueue_,t,n),n=[],I&&(e[a].status=2,s=e[a].unwatcher,setTimeout(s,Math.floor(0)),e[a].onComplete&&("nodata"===l?i.push((()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot))):i.push((()=>e[a].onComplete(new Error(l),!1,null)))))}var s;_r(A,A.transactionQueueTree_);for(let A=0;A<i.length;A++)bn(i[A]);vr(A,A.transactionQueueTree_)}(A,Pr(A,t),i),i}function jr(A,e){let t,i=A.transactionQueueTree_;for(t=lo(e);null!==t&&void 0===cr(i);)i=Cr(i,t),t=lo(e=Co(e));return i}function Pr(A,e){const t=[];return Xr(A,e,t),t.sort(((A,e)=>A.order-e.order)),t}function Xr(A,e,t){const i=cr(e);if(i)for(let A=0;A<i.length;A++)t.push(i[A]);hr(e,(e=>{Xr(A,e,t)}))}function _r(A,e){const t=cr(e);if(t){let A=0;for(let e=0;e<t.length;e++)2!==t[e].status&&(t[A]=t[e],A++);t.length=A,Er(e,t.length>0?t:void 0)}hr(e,(e=>{_r(A,e)}))}function $r(A,e){const t=dr(jr(A,e)),i=Cr(A.transactionQueueTree_,e);return function(A,e,t){let i=t?A:A.parent;for(;null!==i;){if(e(i))return!0;i=i.parent}}(i,(e=>{Ag(A,e)})),Ag(A,i),Qr(i,(e=>{Ag(A,e)})),t}function Ag(A,e){const t=cr(e);if(t){const i=[];let n=[],o=-1;for(let e=0;e<t.length;e++)3===t[e].status||(1===t[e].status?(S(o===e-1,"All SENT items should be at beginning of queue."),o=e,t[e].status=3,t[e].abortReason="set"):(S(0===t[e].status,"Unexpected transaction status in abort"),t[e].unwatcher(),n=n.concat(ba(A.serverSyncTree_,t[e].currentWriteId,!0)),t[e].onComplete&&i.push(t[e].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Er(e,void 0):t.length=o+1,Ur(A.eventQueue_,dr(e),n);for(let A=0;A<i.length;A++)bn(i[A])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=function(A,e){const t=tg(A),i=t.namespace;"firebase.com"===t.domain&&Gn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===t.domain||Gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Fn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const n="ws"===t.scheme||"wss"===t.scheme;return{repoInfo:new zn(t.host,t.secure,i,n,e,"",i!==t.subdomain),path:new ro(t.pathString)}},tg=function(A){let e="",t="",i="",n="",o="",s=!0,a="https",r=443;if("string"==typeof A){let g=A.indexOf("//");g>=0&&(a=A.substring(0,g-1),A=A.substring(g+2));let l=A.indexOf("/");-1===l&&(l=A.length);let I=A.indexOf("?");-1===I&&(I=A.length),e=A.substring(0,Math.min(l,I)),l<I&&(n=function(A){let e="";const t=A.split("/");for(let A=0;A<t.length;A++)if(t[A].length>0){let i=t[A];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(A){}e+="/"+i}return e}(A.substring(l,I)));const C=function(A){const e={};"?"===A.charAt(0)&&(A=A.substring(1));for(const t of A.split("&")){if(0===t.length)continue;const i=t.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Fn(`Invalid query segment '${t}' in query '${A}'`)}return e}(A.substring(Math.min(A.length,I)));g=e.indexOf(":"),g>=0?(s="https"===a||"wss"===a,r=parseInt(e.substring(g+1),10)):g=e.length;const c=e.slice(0,g);if("localhost"===c.toLowerCase())t="localhost";else if(c.split(".").length<=2)t=c;else{const A=e.indexOf(".");i=e.substring(0,A).toLowerCase(),t=e.substring(A+1),o=i}"ns"in C&&(o=C.ns)}return{host:e,port:r,domain:t,subdomain:i,secure:s,scheme:a,pathString:n,namespace:o}};!function(){let A=0;const e=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ig{getPath(){const A=this.snapshot.ref;return"value"===this.eventType?A._path:A.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+oA(this.snapshot.exportVal())}constructor(A,e,t,i){this.eventType=A,this.eventRegistration=e,this.snapshot=t,this.prevName=i}}class ng{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(A,e,t){this.eventRegistration=A,this.error=e,this.path=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{onValue(A,e){this.snapshotCallback.call(null,A,e)}onCancel(A){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,A)}get hasCancelCallback(){return!!this.cancelCallback}matches(A){return this.snapshotCallback===A.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===A.snapshotCallback.userCallback&&this.snapshotCallback.context===A.snapshotCallback.context}constructor(A,e){this.snapshotCallback=A,this.cancelCallback=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sg{get key(){return Qo(this._path)?null:co(this._path)}get ref(){return new ag(this._repo,this._path)}get _queryIdentifier(){const A=Cs(this._queryParams),e=Kn(A);return"{}"===e?"default":e}get _queryObject(){return Cs(this._queryParams)}isEqual(A){if(!((A=RA(A))instanceof sg))return!1;const e=this._repo===A._repo,t=wo(this._path,A._path),i=this._queryIdentifier===A._queryIdentifier;return e&&t&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(A){let e="";for(let t=A.pieceNum_;t<A.pieces_.length;t++)""!==A.pieces_[t]&&(e+="/"+encodeURIComponent(String(A.pieces_[t])));return e||"/"}(this._path)}constructor(A,e,t,i){this._repo=A,this._path=e,this._queryParams=t,this._orderByCalled=i}}class ag extends sg{get parent(){const A=Bo(this._path);return null===A?null:new ag(this._repo,A)}get root(){let A=this;for(;null!==A.parent;)A=A.parent;return A}constructor(A,e){super(A,e,new ls,!1)}}class rg{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(A){const e=new ro(A),t=lg(this.ref,A);return new rg(this._node.getChild(e),t,Wo)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(A){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((e,t)=>A(new rg(t,lg(this.ref,e),Wo))))}hasChild(A){const e=new ro(A);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(A,e,t){this._node=A,this.ref=e,this._index=t}}function gg(A,e){return(A=RA(A))._checkNotDeleted("ref"),void 0!==e?lg(A._root,e):A._root}function lg(A,e){var t,i,n,o;return null===lo((A=RA(A))._path)?(t="child",i="path",o=!1,(n=e)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kr(t,i,n,o)):kr("child","path",e,!1),new ag(A._repo,ho(A._path,e))}function Ig(A,e){A=RA(A),Yr("set",A._path),Dr("set",e,A._path,!1);const t=new $;return Tr(A._repo,A._path,e,null,t.wrapCallback((()=>{}))),t.promise}function Cg(A){A=RA(A);const e=new og((()=>{})),t=new cg(e);return function(A,e,t){const i=za(A.serverSyncTree_,e);return null!=i?Promise.resolve(i):A.server_.get(e).then((i=>{const n=As(i).withIndex(e._queryParams.getIndex());let o;if(Wa(A.serverSyncTree_,e,t,!0),e._queryParams.loadsAllData())o=qa(A.serverSyncTree_,e._path,n);else{const t=Xa(A.serverSyncTree_,e);o=Oa(A.serverSyncTree_,e._path,n,t)}return Ur(A.eventQueue_,e._path,o),Ta(A.serverSyncTree_,e,t,null,!0),n}),(t=>(Wr(A,"get for query "+oA(e)+" failed: "+t),Promise.reject(new Error(t)))))}(A._repo,A,t).then((e=>new rg(e,new ag(A._repo,A._path),A._queryParams.getIndex())))}class cg{respondsTo(A){return"value"===A}createEvent(A,e){const t=e._queryParams.getIndex();return new ig("value",this,new rg(A.snapshotNode,new ag(e._repo,e._path),t))}getEventRunner(A){return"cancel"===A.getEventType()?()=>this.callbackContext.onCancel(A.error):()=>this.callbackContext.onValue(A.snapshot,null)}createCancelEvent(A,e){return this.callbackContext.hasCancelCallback?new ng(this,A,e):null}matches(A){return A instanceof cg&&(!A.callbackContext||!this.callbackContext||A.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(A){this.callbackContext=A}}!function(A){S(!Da,"__referenceConstructor has already been defined"),Da=A}(ag),function(A){S(!Ra,"__referenceConstructor has already been defined"),Ra=A}(ag);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Eg={};let Bg=!1;function hg(A,e,t,i,n){let o=i||A.options.databaseURL;void 0===o&&(A.options.projectId||Gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Rn("Using default host for project ",A.options.projectId),o=`${A.options.projectId}-default-rtdb.firebaseio.com`);let s,a,r=eg(o,n),g=r.repoInfo;void 0!==E&&E.env&&(a=E.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${g.namespace}`,r=eg(o,n),g=r.repoInfo):s=!r.repoInfo.secure;const l=n&&s?new Wn(Wn.OWNER):new On(A.name,A.options,e);Gr("Invalid Firebase Database URL",r),Qo(r.path)||Gn("Database URL must point to the root of a Firebase Database (not including a child path).");const I=function(A,e,t,i){let n=Eg[e.name];n||(n={},Eg[e.name]=n);let o=n[A.toURLString()];o&&Gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new Kr(A,Bg,t,i),n[A.toURLString()]=o,o}(g,A,l,new Tn(A.name,t));return new Qg(I,A)}class Qg{get _repo(){return this._instanceStarted||(fr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ag(this._repo,go())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(A,e){const t=Eg[e];t&&t[A.key]===A||Gn(`Database ${e}(${A.repoInfo_}) has already been deleted.`),Or(A),delete t[A.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(A){null===this._rootInternal&&Gn("Cannot call "+A+" on a deleted database.")}constructor(A,e){this._repoInternal=A,this.app=e,this.type="database",this._instanceStarted=!1}}ko.prototype.simpleListen=function(A,e){this.sendRequest("q",{p:A},e)},ko.prototype.echo=function(A,e){this.sendRequest("echo",{d:A},e)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(A){Cn="9.15.0",se(new kA("database",((A,{instanceIdentifier:e})=>hg(A.getProvider("app").getImmediate(),A.getProvider("auth-internal"),A.getProvider("app-check-internal"),e)),"PUBLIC").setMultipleInstances(!0)),Ce("@firebase/database","0.14.0",A),Ce("@firebase/database","0.14.0","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();const dg=async function(A,e){const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fbee7941f117d258bba2ad0706e433a4&language=en-US&page=1&query=${A}&primary_release_year=integer&page=${e}`);if(!t.ok)throw new Error(t.status);return await t.json()},ug=async function(A){const e=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=fbee7941f117d258bba2ad0706e433a4&page=${A}`);if(!e.ok)throw new Error(e.status);return await e.json()},wg=async function(A){const e=await fetch(`https://api.themoviedb.org/3/movie/${A}?api_key=fbee7941f117d258bba2ad0706e433a4`);if(!e.ok)throw new Error(e.status);return await e.json()},mg=async function(A){const e=await fetch(`https://api.themoviedb.org/3/movie/${A}/videos?api_key=fbee7941f117d258bba2ad0706e433a4`);if(!e.ok)throw new Error(e.status);return await e.json()};var pg,Mg={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
//# sourceMappingURL=index.c8df686c.js.map