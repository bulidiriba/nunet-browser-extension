(this["webpackJsonpbrowser-extension"]=this["webpackJsonpbrowser-extension"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=(a(79),a(52)),o=a(42),s=a.n(o),m=a(53),u=a(24),d=(a(81),a(82),a(151)),p=a(63),E=a(152),g=a(161),h=a(153),f=a(159),b=a(143),x=a(64),v=a(146),y=a(148),w=a(154),O=a(155),j=a(158),k=a(156),S=a(157),N=a(160),C=a(150),D=a(149),A=a(60),M=a.n(A),T=a(61),U=a.n(T),W=a(59),B=a.n(W),F=a(3),H=a(54),I=a.n(H),J=a(147),L=a(162);var _=function(){return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"center",spacing:1},r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(f.a,{pt:0,align:"right"},r.a.createElement(p.a,{variant:"subtitle1"},"Powered by : "))),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(L.a,{title:"https://nunet.io/"},r.a.createElement(v.a,{underline:"none",href:"https://nunet.io/",target:"_blank"},r.a.createElement(f.a,{align:"left"},r.a.createElement("img",{src:"./assets/img/nunet-logo.svg",alt:"",width:"100px",height:"30px"})))))))};var q=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),A=Object(u.a)(o,2),T=A[0],W=A[1],H=Object(n.useState)(!1),L=Object(u.a)(H,2),q=L[0],P=L[1],R=Object(n.useState)(["Agree","Disagree","Discuss","Unrelated"]),$=Object(u.a)(R,2),z=$[0],G=($[1],Object(n.useState)([])),K=Object(u.a)(G,2),Q=K[0],V=K[1],X=r.a.useState(!1),Y=Object(u.a)(X,2),Z=Y[0],ee=Y[1],te=Object(J.a)((function(e){return{root:{display:"flex",flexDirection:"column",width:"500px",height:"580px"},content:{flex:1},toolbar:{minHeight:"12px",backgroundColor:"light-blue"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},paperMax:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,backgroundColor:e.palette.secondary.light},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}))();Object(n.useEffect)((function(){chrome.tabs.query({active:!0,currentWindow:!0},(function(e){var t=new URL(e[0].url).toString();c(t),ae(t)}))}),[]);var ae=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("http://195.201.197.25:7005/get_score",{params:{url:t}}).then((function(e){console.log(e);var t=e.data.split("\n"),a=[t[0].split(":")[1],t[1].split(":")[1],t[2].split(":")[1],t[3].split(":")[1]];console.log(a),V(a)})).catch((function(e){console.log("Error Occured",e)}));case 2:e.sent,setTimeout((function(){W(!0)}),3e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){ee(!1)},re=z.map((function(e,t){var a=Q.map(Number),n=Math.max.apply(Math,a),l=Number(Q[t]);return r.a.createElement(b.a,{item:!0,xs:3,backgroundColor:"green"},r.a.createElement(x.a,{className:l==n?te.paperMax:te.paper},r.a.createElement(p.a,{variant:"subtitle1"},e),r.a.createElement(f.a,{p:1},r.a.createElement(y.a,null)),(100*l).toFixed(2),"%"))}));function le(){return r.a.createElement("div",null,r.a.createElement(N.a,{open:Z,onClose:ne,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(D.a,null,r.a.createElement(C.a,{id:"alert-dialog-description"},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(f.a,{pt:3},r.a.createElement(p.a,{textAlign:"bottom",variant:"h6"},"Input"))),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(f.a,{align:"right"},r.a.createElement(g.a,{onClick:ne},r.a.createElement(B.a,null))))),r.a.createElement(f.a,{pl:3},r.a.createElement(p.a,{variant:"subtitle1"},"A headline and a body text - either from the same news or from two different articles")),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"h6"},"Output")),r.a.createElement(f.a,{pl:3},r.a.createElement(p.a,{variant:"subtitle1"},"Classify the stance of the body text relative to the claim made in the headline into one of four categories:"),r.a.createElement(f.a,{pl:2},r.a.createElement(p.a,null,"1. ",r.a.createElement("strong",null,"Agrees: "),"The body text agrees with the headline."),r.a.createElement(p.a,null,"2. ",r.a.createElement("strong",null,"Disagrees: "),"The body text disagrees with the headline."),r.a.createElement(p.a,null,"3. ",r.a.createElement("strong",null,"Discusses: "),"The body text discuss the same topic as the headline, but doesnot take a position."),r.a.createElement(p.a,null,"4. ",r.a.createElement("strong",null,"Unrelated: "),"The body text discusses a different topic than the headline.")))))))}return r.a.createElement("div",{className:te.root},r.a.createElement("div",{className:te.content},r.a.createElement(d.a,{position:"static"},r.a.createElement(E.a,{className:te.toolbar},r.a.createElement(v.a,{color:"inherit",href:"#",className:te.link,underline:"none"},r.a.createElement(f.a,{display:"flex",flexDirection:"row"},r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement("img",{alt:"",src:"/logo1.png",width:"30px",height:"30px"}))),r.a.createElement(f.a,{pl:1,pt:.25},r.a.createElement(p.a,{variant:"subtitle1",display:"block"},"FakeNewsDetector")))))),r.a.createElement(w.a,{fixed:!0},T?r.a.createElement(f.a,{pt:3},r.a.createElement(b.a,{container:!0,justify:"center",spacing:1},r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(f.a,{pt:1},r.a.createElement(p.a,{variant:"h6",align:"right"},"Stance Detected"))),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(g.a,{color:"primary",onClick:function(){ee(!0)}},r.a.createElement(M.a,null)))),r.a.createElement(le,null),r.a.createElement(f.a,{pt:2},r.a.createElement(b.a,{container:!0,justify:"center",spacing:2},re)),r.a.createElement(f.a,{pt:5},r.a.createElement(O.a,{m:1},r.a.createElement(k.a,{disableSpacing:!0,m:1,minHeight:"10px"},r.a.createElement(p.a,{variant:"body2",align:"center"},"Article Url"),r.a.createElement(g.a,{className:Object(F.a)(te.expand,Object(i.a)({},te.expandOpen,q)),onClick:function(){P(!q)},"aria-expanded":q,"aria-label":"show-url"},r.a.createElement(U.a,null))),r.a.createElement(S.a,{in:q,timeout:"auto",unmountOnExit:!0},r.a.createElement(j.a,null,r.a.createElement(v.a,{underline:"none",href:l},r.a.createElement(p.a,{variant:"body2"},l))))))):r.a.createElement(b.a,{container:!0,justify:"center"},r.a.createElement(f.a,null,r.a.createElement(f.a,{pt:5,align:"center"},r.a.createElement(p.a,null,"Stance detection started, please wait ...")),r.a.createElement(f.a,{pt:3,align:"center"},r.a.createElement("img",{src:"./assets/img/loading.gif",alt:"loading..."})))))),r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a(106)},79:function(e,t,a){},81:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},82:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.828141a8.chunk.js.map