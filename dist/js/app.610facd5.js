(function(e){function t(t){for(var n,o,r=t[0],l=t[1],s=t[2],u=0,b=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==c[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Vue_Cv/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"023b":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("7a23"),c=Object(n["s"])("data-v-3a86d592");Object(n["m"])("data-v-3a86d592");var i=Object(n["h"])("div",{class:"overlay"},null,-1),o={playsinline:"playsinline",autoplay:"autoplay",muted:"muted",loop:"loop"},r=Object(n["f"])('<div class="container h-100" data-v-3a86d592><div class="d-flex h-100 text-center align-items-center" data-v-3a86d592><div class="w-100 text-white" data-v-3a86d592><h1 class="display-3" data-v-3a86d592>Lorenzo Marco Alù</h1><p class="lead mb-0" data-v-3a86d592>Web Developer Full Stack</p></div></div></div>',1);Object(n["l"])();var l=c((function(e,t,c,l,s,d){return Object(n["k"])(),Object(n["e"])("header",null,[i,Object(n["h"])("video",o,[Object(n["h"])("source",{src:a("ae46"),type:"video/mp4"},null,8,["src"])]),r])}))},"04ef":function(e,t){},"0d98":function(e,t,a){"use strict";a("6230")},2260:function(e,t,a){e.exports=a.p+"img/presto.6c134f6e.jpg"},"227e":function(e,t,a){"use strict";var n=a("023b"),c=a("5abd");a("aaca");c["default"].render=n["a"],c["default"].__scopeId="data-v-3a86d592",t["default"]=c["default"]},"2e49":function(e,t,a){e.exports=a.p+"img/cc.88a3b224.jpg"},"3f6a":function(e,t,a){},4380:function(e,t,a){e.exports=a.p+"img/covid.cee632ed.jpg"},"4f66":function(e,t,a){"use strict";a("fa4d")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function c(e,t,a,c,i,o){var r=Object(n["n"])("the-navbar");return Object(n["k"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(r,{onSelecCurrentPage:o.setPage},null,8,["onSelecCurrentPage"]),(Object(n["k"])(),Object(n["e"])(Object(n["o"])(i.selectedTab)))],64)}var i=Object(n["s"])("data-v-5437fade");Object(n["m"])("data-v-5437fade");var o={class:"navbar navbar-expand-lg navbar-dark bg-dark "},r={class:"container-fluid"},l=Object(n["h"])("button",{class:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"navbar-collapse collapse ",id:"navbarColor01",style:{}},d={class:"navbar-nav me-auto mb-2 mb-lg-0 custom"},u=Object(n["h"])("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home",-1),b={class:"nav-item"},f={class:"nav-item"},p={class:"nav-item"};Object(n["l"])();var m=i((function(e,t,a,c,i,m){return Object(n["k"])(),Object(n["e"])("nav",o,[Object(n["h"])("div",r,[l,Object(n["h"])("div",s,[Object(n["h"])("ul",d,[Object(n["h"])("li",{class:"nav-item",onClick:t[1]||(t[1]=function(e){return m.selectPage("the-home")})},[u]),Object(n["h"])("li",b,[Object(n["h"])("a",{class:"nav-link",href:"#",onClick:t[2]||(t[2]=function(e){return m.selectPage("about-me")})},"About Me")]),Object(n["h"])("li",f,[Object(n["h"])("a",{class:"nav-link",href:"#",onClick:t[3]||(t[3]=function(e){return m.selectPage("the-works")})},"Works")]),Object(n["h"])("li",p,[Object(n["h"])("a",{class:"nav-link",href:"#",onClick:t[4]||(t[4]=function(e){return m.selectPage("the-contact")})},"Contact")])])])])])})),v={emits:["selecCurrentPage"],methods:{selectPage:function(e){this.$emit("selecCurrentPage",e)}}};a("59ec");v.render=m,v.__scopeId="data-v-5437fade";var h=v;function j(e,t,a,c,i,o){var r=Object(n["n"])("TheHeader");return Object(n["k"])(),Object(n["e"])(r)}var O=a("227e"),g={components:{TheHeader:O["default"]}};g.render=j;var k=g,y=Object(n["s"])("data-v-e1321110");Object(n["m"])("data-v-e1321110");var _={class:"container-fluid"},w=Object(n["h"])("div",{class:"row justify-content-center"},[Object(n["h"])("div",{class:"col-10 col-md-5 text-center my-5 container-custom"},[Object(n["h"])("h1",null,"Su di me")]),Object(n["h"])("div",{class:"col-10 container-custom"},[Object(n["h"])("p",null,"Mi chiamo Lorenzo Marco Alù, ho 29 anni e sono un web developer alla ricerca del primo impiego nel mondo del digitale. Nonostante il mio percorso abbia un incipit diverso da quello del mondo del web, in quanto, negli anni, ho maturato esperienza nel settore alberghiero, ritengo che la cosa mi abbia portato ad acquisire competenze trasversali molto utili in qualsiasi ambito, quali, ad esempio, la predisposizione al team working, forte empatia, grande rispetto dei colleghi e tecniche di leadership. Ho, tuttavia, sentito la necessità di dare una svolta alla mia vita, cambiando ambito di competenza, e avvicinandomi a ciò che da sempre mi aveva realmente appassionato: il mondo IT. Mi sono così iscritto ad un Bootcamp di 3 mesi presso l Hackademy di Aulab, a Bari, ottenendo la qualifica di Full-Stack Developer. Il corso mi ha dato modo di apprendere le più importanti nozioni della programmazione, inerentemente sia al Front-End che al Back-End, fornendomi tutti i tools per potermi affacciare a nuovi linguaggi di programmazione e poterli apprendere al meglio. Sono desideroso di esprimere le mie potenzialità all'interno di un ambiente in cui contribuire attivamente allo sviluppo di nuovi progetti e crescere.")])],-1);Object(n["l"])();var z=y((function(e,t,a,c,i,o){return Object(n["k"])(),Object(n["e"])("div",_,[w])})),x={};a("f2db");x.render=z,x.__scopeId="data-v-e1321110";var S=x,C=Object(n["s"])("data-v-f809fa32");Object(n["m"])("data-v-f809fa32");var P={class:"container-fluid"},M={class:"row justify-content-center"},I=Object(n["h"])("div",{class:"col-10 col-md-5 text-center my-5 container-custom"},[Object(n["h"])("h1",null,"My Work"),Object(n["h"])("p",null,"Ecco alcuni dei miei progetti, buona visione! ;)")],-1),T={class:"row justify-content-center"},E=Object(n["h"])("div",{class:"row"},[Object(n["h"])("div",{class:"col-12 text-center my-5"},[Object(n["h"])("h3",null,[Object(n["g"])(" Vuoi vedere altri progetti? Visita il mio profilo "),Object(n["h"])("a",{href:"https://github.com/LorenzoAlu",target:"_blank"},"GitHub"),Object(n["g"])(";) ")])])],-1);Object(n["l"])();var A=C((function(e,t,c,i,o,r){var l=Object(n["n"])("card-base");return Object(n["k"])(),Object(n["e"])("div",P,[Object(n["h"])("div",M,[I,Object(n["h"])("div",T,[Object(n["h"])(l,{title:"Covid Dashboard",description:"Dashboard realizzata utilizzando Vanilla Javascript e libreria armchard.",link:"https://lorenzoalu.github.io/Covid-Dashboard/",image:a("4380")},null,8,["image"]),Object(n["h"])(l,{title:"Contro Cultura",description:"Sito stile blog d'informazione, realizzato con laravel 8, MySQL e vanilla js.",link:"https://progetto.prestolorenzoalu.it/",image:a("2e49")},null,8,["image"]),Object(n["h"])(l,{title:"Presto.it",description:"Sito d'annunci clone del più famoso Subito.it, realizzato con Bootstrap 5 e vanilla js.",link:"https://lorenzoalu.github.io/project_clone_presto_subito/",image:a("2260")},null,8,["image"]),Object(n["h"])(l,{title:"Presto.it Laravel",description:"Sito d'annunci clone del più famoso Subito.it, realizzato con Bootstrap 5 e Laravel 8, il sito implementa GoogleApi, e le librerie Dropzone e Spatie.",link:"https://github.com/LorenzoAlu/lorenzo_presto",image:a("a8c5")},null,8,["image"])])]),E])})),L=(a("a4d3"),a("e01a"),a("9911"),Object(n["s"])("data-v-27442b54"));Object(n["m"])("data-v-27442b54");var D={class:"col-10 col-md-5 my-3"},H={class:"card h-100 "},N={class:"card-title"},q={class:"card-desciption"};Object(n["l"])();var B=L((function(e,t,a,c,i,o){return Object(n["k"])(),Object(n["e"])("div",D,[Object(n["h"])("div",H,[Object(n["h"])("div",N,[Object(n["h"])("h3",null,Object(n["p"])(a.title),1)]),Object(n["h"])("div",null,[Object(n["h"])("img",{class:"img-fluid mx-auto",src:a.image},null,8,["src"])]),Object(n["h"])("div",q,[Object(n["h"])("p",null,Object(n["p"])(a.description),1),Object(n["h"])("a",{href:a.link,target:"_blank"},"> Link Al Progetto",8,["href"])])])])})),F={props:["image","title","description","link"]};a("f5c5");F.render=B,F.__scopeId="data-v-27442b54";var G=F,V={components:{CardBase:G},data:function(){return{}}};a("0d98");V.render=A,V.__scopeId="data-v-f809fa32";var W=V,J=Object(n["s"])("data-v-d6ff7908");Object(n["m"])("data-v-d6ff7908");var U={class:"container-fluid"},Q={class:"row justify-content-center pt-5"},$=Object(n["h"])("div",{class:"col-10 col-md-6 text-center container-custom"},[Object(n["h"])("h1",null,"Contatti"),Object(n["h"])("p",null,"Desideri contattarmi? Inviami pure una mail o dai un occhiata ai miei social ;)")],-1),K={class:"col-10"},R={class:"container-fluid"},X={class:"row justify-content-center"},Y={class:"col-10"};Object(n["l"])();var Z=J((function(e,t,a,c,i,o){var r=Object(n["n"])("the-form"),l=Object(n["n"])("the-social");return Object(n["k"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("div",U,[Object(n["h"])("div",Q,[$,Object(n["h"])("div",K,[Object(n["h"])(r)])])]),Object(n["h"])("div",R,[Object(n["h"])("div",X,[Object(n["h"])("div",Y,[Object(n["h"])(l)])])])],64)})),ee=Object(n["s"])("data-v-5444e9ce");Object(n["m"])("data-v-5444e9ce");var te=Object(n["h"])("div",{class:"mb-3"},[Object(n["h"])("label",{class:"form-label"},"Name"),Object(n["h"])("input",{class:"form-control",type:"text",name:"user_name"})],-1),ae=Object(n["h"])("div",{class:"mb-3"},[Object(n["h"])("label",{class:"form-label"},"Oggetto"),Object(n["h"])("input",{class:"form-control",type:"text",name:"topic"})],-1),ne=Object(n["h"])("div",{class:"mb-3"},[Object(n["h"])("label",{class:"form-label"},"Email"),Object(n["h"])("input",{class:"form-control",type:"email",name:"user_email"})],-1),ce=Object(n["h"])("div",{class:"mb-3"},[Object(n["h"])("label",{class:"form-label"},"Message"),Object(n["h"])("textarea",{class:"form-control",name:"message"})],-1),ie=Object(n["h"])("input",{class:"btn btn-primary w-100",type:"submit",value:"Invia"},null,-1),oe=Object(n["h"])("h2",null,"Email Inviata!",-1),re=Object(n["h"])("p",null,"Avrai presto mie notizie ;)",-1),le=Object(n["h"])("input",{class:"btn btn-primary w-100",type:"submit",value:"Grazie"},null,-1);Object(n["l"])();var se=ee((function(e,t,a,c,i,o){return Object(n["k"])(),Object(n["e"])(n["b"],{mode:"out-in"},{default:ee((function(){return[i.sendingEmail?(Object(n["k"])(),Object(n["e"])("form",{key:1,class:"text-center",onSubmit:t[2]||(t[2]=Object(n["r"])((function(){return o.resetMail&&o.resetMail.apply(o,arguments)}),["prevent"]))},[oe,re,le],32)):(Object(n["k"])(),Object(n["e"])("form",{key:0,class:"contact-form",onSubmit:t[1]||(t[1]=Object(n["r"])((function(){return o.sendEmail&&o.sendEmail.apply(o,arguments)}),["prevent"]))},[te,ae,ne,ce,ie],32))]})),_:1})})),de=a("0f91"),ue=a.n(de),be={data:function(){return{sendingEmail:!1}},methods:{sendEmail:function(e){var t=this;ue.a.sendForm("service_ga2v6s6","template_c1wf2gg",e.target,"user_hhuffDmG0UIwksjLbfMoI").then((function(e){console.log("SUCCESS!",e.status,e.text),t.sendingEmail=!0}),(function(e){console.log("FAILED...",e)}))},resetMail:function(){this.sendingEmail=!this.sendingEmail}}};a("7a40");be.render=se,be.__scopeId="data-v-5444e9ce";var fe=be,pe=Object(n["s"])("data-v-7f72fe74");Object(n["m"])("data-v-7f72fe74");var me={class:"d-flex justify-content-evenly my-5"},ve={href:"https://www.facebook.com/lorenzo.alu",target:"_blank"},he={href:"https://www.instagram.com/funkyshaker/",target:"_blank"},je={href:"https://github.com/LorenzoAlu",target:"_blank"},Oe={href:"https://www.linkedin.com/in/lorenzo-marco-alu-b653a7196/",target:"_blank"};Object(n["l"])();var ge=pe((function(e,t,a,c,i,o){var r=Object(n["n"])("font-awesome-icon");return Object(n["k"])(),Object(n["e"])("div",me,[Object(n["h"])("a",ve,[Object(n["h"])(r,{icon:{prefix:"fab",iconName:"facebook"},size:"2x"})]),Object(n["h"])("a",he,[Object(n["h"])(r,{icon:{prefix:"fab",iconName:"instagram"},size:"2x"})]),Object(n["h"])("a",je,[Object(n["h"])(r,{icon:{prefix:"fab",iconName:"github"},size:"2x"})]),Object(n["h"])("a",Oe,[Object(n["h"])(r,{icon:{prefix:"fab",iconName:"linkedin"},size:"2x"})])])})),ke={};a("e9b9");ke.render=ge,ke.__scopeId="data-v-7f72fe74";var ye=ke,_e={components:{TheSocial:ye,TheForm:fe}};a("6db3");_e.render=Z,_e.__scopeId="data-v-d6ff7908";var we=_e,ze={components:{TheNavbar:h,TheHome:k,TheWorks:W,AboutMe:S,TheContact:we},data:function(){return{selectedTab:"the-home"}},methods:{setPage:function(e){this.selectedTab=e}}};a("4f66");ze.render=c;var xe=ze,Se=(a("ab8b"),a("ecee")),Ce=a("c074"),Pe=a("f2d1"),Me=a("ad3d");Se["c"].add(Ce["a"],Pe["a"],Pe["c"],Pe["d"],Pe["b"]);var Ie=Object(n["d"])(xe);Ie.component("font-awesome-icon",Me["a"]),Ie.config.productionTip=!1,Ie.mount("#app")},"59ec":function(e,t,a){"use strict";a("6977")},"5a3a":function(e,t,a){},"5abd":function(e,t,a){"use strict";var n=a("04ef"),c=a.n(n);a.d(t,"default",(function(){return c.a}))},6230:function(e,t,a){},6977:function(e,t,a){},"6a43":function(e,t,a){},"6db3":function(e,t,a){"use strict";a("3f6a")},"7a40":function(e,t,a){"use strict";a("c9c4")},a8c5:function(e,t,a){e.exports=a.p+"img/presto2.82fe106d.jpg"},aaca:function(e,t,a){"use strict";a("ed94")},ae46:function(e,t,a){e.exports=a.p+"media/video.8ae12e0a.mp4"},c9c4:function(e,t,a){},cebc:function(e,t,a){},e9b9:function(e,t,a){"use strict";a("5a3a")},ed94:function(e,t,a){},f2db:function(e,t,a){"use strict";a("cebc")},f5c5:function(e,t,a){"use strict";a("6a43")},fa4d:function(e,t,a){}});
//# sourceMappingURL=app.610facd5.js.map