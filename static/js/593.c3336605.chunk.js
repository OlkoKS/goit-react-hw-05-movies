"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{47:function(n,e,t){t.d(e,{e:function(){return g}});var r,i,o,a,s=t(917),p=t(689),u=t(87),c=t(168),d=t(867),l=d.ZP.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n  margin: 64px auto;\n  justify-content: center;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px;\n\n  & > * {\n    width: 400px;\n  }\n"]))),x=d.ZP.p(i||(i=(0,c.Z)(["\n  margin: 12px;\n  font-size: 24px;\n  text-align: center;\n"]))),h=d.ZP.div(o||(o=(0,c.Z)(["\n  width: 400px;\n  height: 600px;\n"]))),m=d.ZP.img(a||(a=(0,c.Z)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n"]))),f=t(184),g=function(n){var e=n.movies,t=(0,p.TH)();return(0,f.jsx)(l,{children:e.map((function(n){var e=n.id,r=n.poster_path,i=n.name,o=n.title;return(0,f.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,f.jsxs)("li",{children:[(0,f.jsx)(h,{children:(0,f.jsx)(m,{src:r?"https://image.tmdb.org/t/p/w400/".concat(r):s,alt:o||i})}),(0,f.jsx)(x,{children:o||i})]})},e)}))})}},593:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,o,a=t(512),s=t(47),p=t(439),u=t(791),c=t(168),d=t(867),l=d.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 48px;\n"]))),x=d.ZP.button(i||(i=(0,c.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 0 10px;\n  font-size: 32px;\n  background-color: #7dcfbb;\n  border: none;\n  border-radius: 4px;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),h=d.ZP.input(o||(o=(0,c.Z)(["\n  width: 600px;\n  height: 60px;\n  padding: 0 24px;\n  font-size: 28px;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n"]))),m=t(184),f=function(n){var e=n.onSubmit,t=(0,u.useState)(""),r=(0,p.Z)(t,2),i=r[0],o=r[1];return(0,m.jsxs)(l,{onSubmit:function(n){if(n.preventDefault(),""===i)return alert("Please enter your request!");e(i),o("")},children:[(0,m.jsx)(h,{type:"text",name:"query",value:i,onChange:function(n){var e=n.target.value;o(e.trim())},autoFocus:!0}),(0,m.jsx)(x,{type:"submit",children:"Search"})]})},g=t(178),b=function(){var n=(0,g.pr)(),e=n.movies,t=n.loading,r=n.error,i=n.handleSubmit;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{onSubmit:i}),t&&(0,m.jsx)(a.a,{}),r&&(0,m.jsx)("p",{children:"Something went wrong..."}),e.length>0&&(0,m.jsx)(s.e,{movies:e})]})}},917:function(n,e,t){n.exports=t.p+"static/media/not_found_image.dd0f965ce81844896c90.jpg"}}]);
//# sourceMappingURL=593.c3336605.chunk.js.map