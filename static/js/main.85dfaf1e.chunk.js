(this["webpackJsonptetris-game"]=this["webpackJsonptetris-game"]||[]).push([[0],{12:function(n,e,t){n.exports=t.p+"static/media/move.4ae628b5.mp3"},13:function(n,e,t){n.exports=t.p+"static/media/soundgameover.4429a2c2.mp3"},17:function(n,e,t){n.exports=t(27)},22:function(n,e,t){},23:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),i=(t(22),t(23),t(3)),u=t(4),l=t(6),p=t.n(l),x=t(12),d=t.n(x),f=t(13),s=t.n(f),m=t(1),b=t(2);function h(){var n=Object(m.a)(["\nwidth: auto;\nbackground: rgba(",", 0.8);\nborder: ",";\nborder-bottom-color: rgba(",", 0.1);\nborder-right-color: rgba(",", 1);\nborder-top-color: rgba(",", 1);\nborder-left-color: rgba(",", 0.3);\n    \n"]);return h=function(){return n},n}var g=b.a.div(h(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),w={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},v=function(){var n=Math.floor(Math.random()*"IJLOSTZ".length);return w["IJLOSTZ"[n]]},y=a.a.memo((function(n){var e=n.type;return a.a.createElement(g,{type:e,color:w[e].color})}));function E(){var n=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(",", 1fr);\n    grid-template-rows: repeat(\n        ",",\n        calc(17vw / ",")\n      );\n    grid-gap: 1px;\n    width : 100%;\n    max-width: 48vw;\n    background-color: #030202 ;\n    -webkit-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);\n    -moz-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);\n    box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);\n    \n    @media screen and (max-width: 700px) {\n      grid-template-rows: repeat(\n        ",",\n        calc(70vw / ",")\n      );\n      max-width: 52vw;\n  }\n"]);return E=function(){return n},n}var O=b.a.div(E(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.width})),j=function(n){var e=n.stage;return a.a.createElement(O,{width:e[0].length,height:e.length},e.map((function(n,e){return n.map((function(n,e){return a.a.createElement(y,{key:e,type:n[0]})}))})))};function k(){var n=Object(m.a)(["\n    padding: 8px;\n    border-radius: 25px;\n    width: 100%;\n    margin-bottom: 20px;\n    background-color:  #0E0000;\n    -webkit-box-shadow: 2px 2px px 4px rgba(227,11,11,1);\n    -moz-box-shadow: 2px 2px 4px 4px rgba(227,11,11,1);\n    box-shadow: 2px 3px 4px 2px rgba(227,11,11,1);\n    color : ",";\n\n    \n    @media screen and (max-width: 700px) {\n        font-size: 11px;\n        padding: 3px;\n        border-radius: 10px;\n        margin-bottom: 20px;\n        background-color:  #0E0000;\n        -webkit-box-shadow: 2px 2px px 4px rgba(227,11,11,1);\n        -moz-box-shadow: 2px 2px 4px 4px rgba(227,11,11,1);\n        box-shadow: 2px 3px 4px 2px rgba(227,11,11,1);\n        color : ","\n        font-size: 5px;\n    }\n"]);return k=function(){return n},n}var S=b.a.div(k(),(function(n){return n.gameover?"red":"white"}),(function(n){return n.gameover?"red":"white"})),I=function(n){var e=n.gameover,t=n.text;return a.a.createElement(S,{gameover:e},t)};function J(){var n=Object(m.a)(["\npadding: 8px;\nborder-radius: 25px;\nwidth : 20%;\ncolor:white;\nmargin: 0 10px 0 10px;\nbackground-color:  #0E0000;\n-webkit-box-shadow: 2px 2px px 4px rgba(227,11,11,1);\n-moz-box-shadow: 2px 2px 4px 4px rgba(227,11,11,1);\nbox-shadow: 2px 3px 4px 2px rgba(227,11,11,1);\n\n@media screen and (max-width: 700px) {\n    text-align: center;\n    width : 50%;\n    font-size: 25px;\n}\n"]);return J=function(){return n},n}var T=b.a.button(J()),z=function(n){return a.a.createElement(T,{onClick:n.startGame},n.children)};function N(){var n=Object(m.a)(["\npadding: 8px;\nborder-radius: 25px;\nwidth : 20%;\ncolor:white;\nmargin: 0 10px 0 10px;\nbackground-color:  #0E0000;\n-webkit-box-shadow: 2px 2px px 4px rgba(227,11,11,1);\n-moz-box-shadow: 2px 2px 4px 4px rgba(227,11,11,1);\nbox-shadow: 2px 3px 4px 2px rgba(227,11,11,1);\n\n@media screen and (max-width: 700px) {\n    text-align: center;\n    width : 100%;\n    font-size:20px;\n}\n"]);return N=function(){return n},n}var L=b.a.button(N()),Z=function(n){return a.a.createElement(L,{onClick:n.move},n.children)},C=function(){return Array.from(Array(20),(function(){return Array(12).fill([0,"clear"])}))},A=function(n,e,t){for(var r=t.x,a=t.y,o=0;o<n.tetromino.length;o++)for(var c=0;c<n.tetromino[o].length;c++)if(0!==n.tetromino[o][c]&&(!e[o+n.pos.y+a]||!e[o+n.pos.y+a][c+n.pos.x+r]||"clear"!==e[o+n.pos.y+a][c+n.pos.x+r][1]))return!0},H=t(8),M=function(n,e){var t=Object(r.useState)(C()),a=Object(i.a)(t,2),o=a[0],c=a[1],u=Object(r.useState)(0),l=Object(i.a)(u,2),p=l[0],x=l[1];return Object(r.useEffect)((function(){x(0);var t=function(t){var r=t.map((function(n,e){return n.map((function(n,e){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,a){0!==e&&(r[t+n.pos.y][a+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(x((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};c((function(n){return t(n)}))}),[n,e]),[o,c,p]};function F(){var n=Object(m.a)(["\n    width: 55%;\n    margin-top: 10px;\n"]);return F=function(){return n},n}function G(){var n=Object(m.a)(["\n    display : flex;\n    width: 100%;\n"]);return G=function(){return n},n}function P(){var n=Object(m.a)(["\n    display : flex;\n    justify-content: center;\n\n"]);return P=function(){return n},n}function R(){var n=Object(m.a)(["\n    display : flex;\n    padding : 0 0 10px 0;\n    justify-content: center;\n"]);return R=function(){return n},n}function B(){var n=Object(m.a)(["\n    display : flex;\n    width: 50%;\n    flex-direction: column;\n    margin-top: 10px;\n\n    @media screen and (max-width: 700px) {\n        width: 55%;\n    }\n"]);return B=function(){return n},n}function D(){var n=Object(m.a)(["\n    display : flex;\n    width: 100%;\n    justify-content: flex-start;\n    margin : 0 auto;\n    \n    aside {\n        margin : 0 25px;\n    }\n\n    @media screen and (max-width: 700px) {\n        display : flex;\n        width: 100%;\n        justify-content: space-between;\n        margin : 0 auto;\n\n        aside {\n            margin : 0;\n        }\n    }\n"]);return D=function(){return n},n}function K(){var n=Object(m.a)(["\n    display : flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: 45%;\n    padding: 20px 40px ;\n    justify-content: center;\n    border-radius : 50px;\n    margin : 0 auto;\n    background-color: #030202;\n    \n    -webkit-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);\n    -moz-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);\n    box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);\n\n\n    @media screen and (max-width: 700px) {\n        display : flex;\n        flex-direction: column;\n        width: 100%;\n        max-width: 80%;\n        padding: 20px 15px ;\n        justify-content: center;\n        border-radius : 10px;\n        margin : 0 30px 0 20px;\n        background-color: #030202;\n        \n        -webkit-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);\n        -moz-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);\n        box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);\n    }\n      \n"]);return K=function(){return n},n}function q(){var n=Object(m.a)(["\n    display flex;\n    width : 100%;\n    justify-content: center;\n    margin : 0 auto;\n\n    @media screen and (max-width: 700px) {\n        margin : 10px 0 0 0;\n\n    }\n"]);return q=function(){return n},n}function Q(){var n=Object(m.a)(["\n    height: 100vh;\n    width: 100vw;\n"]);return Q=function(){return n},n}var U=b.a.div(Q()),V=b.a.div(q()),W=b.a.div(K()),X=b.a.div(D()),Y=b.a.div(B()),$=b.a.div(R()),_=b.a.div(P()),nn=b.a.div(G()),en=b.a.div(F()),tn=new u.Howl({src:[p.a],loop:!0}),rn=new u.Howl({src:[d.a]}),an=new u.Howl({src:[s.a]}),on=function(){var n=Object(r.useState)(null),e=Object(i.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(!1),l=Object(i.a)(c,2),x=l[0],d=l[1],f=function(){var n=Object(r.useState)({pos:{x:0,y:0},tetromino:w[0].shape,collided:!1}),e=Object(i.a)(n,2),t=e[0],a=e[1],o=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},c=Object(r.useCallback)((function(){a({pos:{x:4,y:0},tetromino:v().shape,collided:!1})}),[]);return[t,function(n){var e=n.x,r=n.y,o=n.collided;a((function(n){return Object(H.a)(Object(H.a)({},n),{},{pos:{x:t.pos.x+e,y:n.pos.y+r},collided:o})}))},c,function(n,e){var r=JSON.parse(JSON.stringify(t));r.tetromino=o(r.tetromino,e);for(var c=r.pos.x,i=1;A(r,n,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return o(r.tetromino,-e),void(r.pos.x=c);a(r)}]}(),s=Object(i.a)(f,4),m=s[0],b=s[1],h=s[2],g=s[3],y=M(m,h),E=Object(i.a)(y,3),O=E[0],k=E[1],S=function(n){var e=Object(r.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],p=u[1],x=Object(r.useState)(0),d=Object(i.a)(x,2),f=d[0],s=d[1],m=[40,100,300,1200],b=Object(r.useCallback)((function(){n>0&&(p((function(e){return e+m[n/2-1]*(f+1)})),o((function(e){return e+n/2})))}),[n,m,f]);return Object(r.useEffect)((function(){b()}),[b,n]),[a,o,l,p,f,s]}(E[2]),J=Object(i.a)(S,6),T=J[0],N=J[1],L=J[2],F=J[3],G=J[4],P=J[5];!function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){B()}),t);var R=function(n){console.log(A(m,O,{x:n,y:0})),A(m,O,{x:n,y:0})||b({x:n,y:0})},B=function(){T>10*(G+1)&&(P((function(n){return n+1})),o(400/(G+1)+200)),A(m,O,{x:0,y:1})?(m.pos.y<1&&(tn.stop(),an.play(),d(!0),o(null)),b({x:0,y:0,collided:!0})):b({x:0,y:1,collided:!1})},D=function(){B()},K=function(n){u.Howler.stop(),tn.play()};return a.a.createElement(U,{rol:"button",tabIndex:"0",onKeyDown:function(n){return function(n){var e=n.keyCode;x||(37===e?R(-1):39===e?R(1):40===e?D():38===e&&g(O,1))}(n)}},a.a.createElement(V,null,a.a.createElement("h1",null,"TETRIS ")),a.a.createElement(W,null,a.a.createElement(X,null,a.a.createElement(j,{stage:O}),a.a.createElement("aside",null,x?a.a.createElement("div",null,a.a.createElement(I,{gameover:x,text:"Juego Terminado"}),a.a.createElement(I,{text:"Puntuaci\xf3n : ".concat(L)}),a.a.createElement(I,{text:"Total Filas : ".concat(T)}),a.a.createElement(I,{text:"Nivel : ".concat(G)})):a.a.createElement("div",null,a.a.createElement(I,{text:"Puntuaci\xf3n : ".concat(L)}),a.a.createElement(I,{text:"Total Filas : ".concat(T)}),a.a.createElement(I,{text:"Nivel : ".concat(G)})))),a.a.createElement(nn,null,a.a.createElement(Y,null,a.a.createElement($,null,a.a.createElement(Z,{move:function(){x||(rn.play(),R(-1))}},a.a.createElement("i",{className:"fas fa-arrow-left"})),a.a.createElement(Z,{move:function(){x||(rn.play(),R(1))}},a.a.createElement("i",{className:"fas fa-arrow-right"}))),a.a.createElement(_,null,a.a.createElement(Z,{move:function(){T>10*(G+1)&&(P((function(n){return n+1})),o(1e3/(G+1)+200));var n=function(n,e){for(var t=n.pos.y;t<e.length;t++)for(var r=0;r<n.tetromino.length;r++)for(var a=0;a<n.tetromino[r].length;a++)if(0!==n.tetromino[r][a]&&(!e[r+t+1]||"clear"!==e[r+t+1][a+n.pos.x][1]))return console.log(t),t}(m,O);b({x:0,y:n-m.pos.y,collided:!0})}},a.a.createElement("i",{className:"fas fa-arrow-down"})),a.a.createElement(Z,{move:function(){g(O,1)}},a.a.createElement("i",{className:"fas fa-sync-alt"})))),a.a.createElement(en,null,a.a.createElement(z,{startGame:function(){console.log("start game"),K(p.a),k(C()),h(),d(!1),o(400),P(0),N(0),F(0)}},a.a.createElement("i",{className:"far fa-play-circle"}))))))};var cn=function(){return a.a.createElement(on,null)};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(cn,null)),document.getElementById("root"))},6:function(n,e,t){n.exports=t.p+"static/media/soundtetris.8238b028.mp3"}},[[17,1,2]]]);
//# sourceMappingURL=main.85dfaf1e.chunk.js.map