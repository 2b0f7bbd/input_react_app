(this.webpackJsonpinput_react_app=this.webpackJsonpinput_react_app||[]).push([[0],{10:function(t,e,n){t.exports=n(16)},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),u=n.n(a),r=n(2),c=n.n(r),l=(n(15),n(7)),s=n(3),p=n(4),i=n(8),o=n(5),h=n(9),d=n(6),f=n.n(d),m=function(t){return u.a.createElement("input",{type:"text",onChange:t.userInputHandler,value:t.value})},I=function(t){return t.hideInfo?null:u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"Your text has ".concat(t.input.length," symbols, \n          ").concat(null===t.input.match(/[a-zA-Z]/g)?0:t.input.match(/[a-zA-Z]/g).length,"\n          characters and\n          ").concat(null===t.input.match(/[\d]/g)?0:t.input.match(/[\d]/g).length,"\n          numbers.")))},g=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,u=new Array(a),r=0;r<a;r++)u[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(u)))).state={userInput:"",hideInfo:!1},n.userInputHandler=function(t){n.setState({userInput:t.target.value})},n.hideInfoHandler=function(){n.setState((function(t){return{hideInfo:!t.hideInfo}}))},n.listItemDeleteHandler=function(t){var e=Object(l.a)(n.state.userInput);e.splice(t,1);var a=e.join("");n.setState({userInput:a}),console.log(n.state)},n}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:f.a.App},u.a.createElement(I,{input:this.state.userInput,hideInfo:this.state.hideInfo}),u.a.createElement(m,{userInputHandler:this.userInputHandler,value:this.state.userInput}))}}]),e}(a.Component);c.a.render(u.a.createElement(g,null),document.getElementById("root"))},6:function(t,e,n){t.exports={App:"App_App__19NVA"}}},[[10,1,2]]]);
//# sourceMappingURL=main.115bd99d.chunk.js.map