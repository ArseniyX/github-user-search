(this["webpackJsonpgithub-user-search-app"]=this["webpackJsonpgithub-user-search-app"]||[]).push([[0],{18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var o,r,i,a,c,l,s,h,d,p,b,u,x,g,m,j,f,O,w,v,y,_,C,F,S,k,B=t(1),T=t.n(B),z=t(9),I=t.n(z),M=(t(18),t(4)),N=t(3),D=t(2),A=Object(D.b)(o||(o=Object(N.a)(["\n\n  * {\n      box-sizing: border-box;\n      transition: all 0.50s linear;\n      font-family: Space Mono;\n  }\n  \n  body {\n    background: ",";\n    color: ",";\n    margin: 0 28px;\n    \n  }\n\n  "])),(function(n){return n.theme.body}),(function(n){return n.theme.text})),U=t.p+"static/media/icon-sun.f28a8996.svg",H=t.p+"static/media/icon-moon.cce754ce.svg",E={body:"#F2F2F2",text:"#222731",toggleBorder:"#FFF",innerTextColor:"#4B6A9B",background:"#363537",innerSpaceBgColor:"#FFF",searchBoxShadow:"0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",modeImgUrl:"".concat(H),modeHoverColor:"#222731",joinedDateColor:"#697C9A",hoverImgColor:"brightness(0%)"},J={body:"#141D2F",text:"#FFF",toggleBorder:"#6B8096",innerTextColor:"#FFF",background:"#999",innerSpaceBgColor:"#1E2A47",searchBoxShadow:"none",modeImgUrl:"".concat(U),modeHoverColor:"#90A4D4",joinedDateColor:"#FFF",hoverImgColor:"brightness(50%)"},L=t(0),X=["Repos","Followers","Following"],P=D.c.div(r||(r=Object(N.a)(["\n  margin-top: 28px;\n  margin-left: 25%;\n  display: flex;\n  \n  background-color: ",";\n  justify-content: space-around;\n  border-radius: 10px;\n  height: 85px;\n  min-width: 230px;\n  text-align: center;\n  flex-direction: row;\n  max-width: 480px;\n  padding: 12px 0;\n  @media (max-width: 800px) {\n    margin-top: 70px;\n    margin-left: 0;\n    max-width: 1000px;\n  }\n"])),(function(n){return n.theme.body})),Q=D.c.div(i||(i=Object(N.a)(["\n  display: block;\n  margin: 0;\n"]))),Z=D.c.p(a||(a=Object(N.a)(["\n  margin: 0;\n"]))),G=function(n){return Object(L.jsx)(P,{children:X.map((function(e,t){var o=Object.keys(n);return Object(L.jsxs)(Q,{children:[Object(L.jsx)(Z,{children:e}),Object(L.jsx)("p",{children:n[o[t]]})]},e)}))})},R=t(13),V=t.p+"static/media/icon-location.1237a42f.svg",q=t.p+"static/media/icon-website.b7923f6c.svg",K=t.p+"static/media/icon-twitter.d5ddd205.svg",W=t.p+"static/media/icon-company.6f78ffb3.svg",Y=D.c.ul(c||(c=Object(N.a)(["\n  margin-left: 25%;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n  width: calc(100% + 25px);\n  padding: 0;\n  min-width: 279px;\n  flex-direction: row;\n  max-width: 480px;\n\n  @media (max-width: 800px) {\n    margin-left: 0;\n    max-width: 1000px;\n  }\n  @media (max-width: 550px) {\n    flex-direction: column;\n  }\n"]))),$=D.c.li(l||(l=Object(N.a)(["\n  flex: 1 1 50%;\n  margin-top: 10px;\n  &.available {\n    color: ",";\n  }\n  &.not-available {\n    color: ",";\n    opacity: 0.5;\n  }\n"])),(function(n){return n.theme.innerTextColor}),(function(n){return n.theme.innerTextColor})),nn=D.c.span(s||(s=Object(N.a)(["\n  margin-left: 10px;\n"]))),en=D.c.img(h||(h=Object(N.a)(["\n  filter: brightness(0%);\n"]))),tn=D.c.a(d||(d=Object(N.a)(["\n  text-decoration: none;\n  color: ",";\n  &:hover {\n    text-decoration: underline;\n  }\n"])),(function(n){return n.theme.innerTextColor})),on=function(n){return"Not available"===n?"not-available":"available"},rn=function(n){var e=Object(R.a)({},n);for(var t in e)null!==e[t]&&""!==e[t]||(e[t]="Not available");var o=e.location,r=e.blog,i=e.twitter_username,a=e.company;return Object(L.jsxs)(Y,{children:[Object(L.jsxs)($,{className:on(o),children:[Object(L.jsx)(en,{src:V,alt:"location"}),Object(L.jsx)(nn,{children:o})]}),Object(L.jsxs)($,{className:on(i),children:[Object(L.jsx)(en,{src:K,alt:"twitter"}),Object(L.jsx)(nn,{children:i})]}),Object(L.jsxs)($,{className:on(r),children:[Object(L.jsx)(en,{src:q,alt:"blog"}),Object(L.jsx)(tn,{style:{margin:"10px"},href:r,target:"_blank",rel:"noreferrer",children:r})]}),Object(L.jsxs)($,{className:on(a),children:[Object(L.jsx)(en,{src:W,alt:"company"}),Object(L.jsx)(nn,{children:a})]})]})},an=D.c.header(p||(p=Object(N.a)(["\n  margin: 31px auto;\n  margin-top: calc(9% - 39px / 2 + 0.5px);\n  display: flex;\n  justify-content: space-between;\n  max-width: 730px;\n  text-align: center;\n"]))),cn=D.c.h1(b||(b=Object(N.a)(["\n  font-weight: bold;\n  font-size: 26px;\n  line-height: 39px;\n"]))),ln=D.c.button(u||(u=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  border: none;\n  letter-spacing: 1px;\n  color: ",";\n  background-color: transparent;\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n\n  &:hover::after {\n    filter: ",";\n    transition: all 0.5s linear;\n  }\n\n  &::after {\n    content: url(",");\n    margin-left: 10px;\n    transition: all 0.5s linear;\n\n    &:hover {\n      filter: ",";\n    }\n  }\n"])),(function(n){return n.theme.innerTextColor}),(function(n){return n.theme.modeHoverColor}),(function(n){return n.theme.hoverImgColor}),(function(n){return n.theme.modeImgUrl}),(function(n){return n.theme.hoverImgColor})),sn=function(n){var e=n.modeState,t=n.modeChange;return Object(L.jsxs)(an,{children:[Object(L.jsx)(cn,{children:"devfinder"}),Object(L.jsx)(ln,{onClick:t,children:"dark"===e?"light":"dark"})]})},hn=D.c.div(x||(x=Object(N.a)(["\n  display: block;\n  width: 100%;\n"]))),dn=D.c.div(g||(g=Object(N.a)(["\n  position: relative;\n\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n"]))),pn=D.c.img(m||(m=Object(N.a)(["\n  height: 117px;\n  border-radius: 50%;\n  @media (max-width: 400px) {\n    height: 70px;\n  }\n"]))),bn=D.c.div(j||(j=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  width: 100%;\n  padding-left: 7%;\n  @media (max-width: 800px) {\n    position: static;\n  }\n"]))),un=D.c.h2(f||(f=Object(N.a)(["\nwidth: 150px;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-family: Space Mono;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 26px;\n  line-height: 39px;\n  @media (max-width: 400px) {\n    font-size: 16px;\n    line-height: 10px;\n  }\n"]))),xn=D.c.a(O||(O=Object(N.a)(["\n  width: 0;\n  color: #0079ff;\n  text-decoration: none;\n"]))),gn=D.c.p(w||(w=Object(N.a)(["\n  font-size: 15px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 6px;\n  margin-bottom: 0;\n  color: ",";\n  @media (max-width: 800px) {\n    position: static;\n  }\n"])),(function(n){return n.theme.joinedDateColor})),mn=D.c.p(v||(v=Object(N.a)(["\n  position: static;\n  @media (max-width: 800px) {\n    position: absolute;\n    left: 0;\n    bottom: -70px;\n  }\n"]))),jn=function(n){var e=n.slice(0,10).split("-"),t=new Date(e);return"".concat(e[2]," ").concat(t.toLocaleString("en-us",{month:"short",year:"numeric"}))},fn=function(n){var e=n.avatar_url,t=n.name,o=n.html_url,r=n.login,i=n.created_at,a=n.bio;return Object(L.jsx)(hn,{children:Object(L.jsxs)(dn,{children:[Object(L.jsx)(pn,{src:e,alt:"github image"}),Object(L.jsxs)(bn,{children:[Object(L.jsx)(un,{children:t}),Object(L.jsxs)(xn,{href:o,target:"_blank",rel:"noreferrer",children:["@",r]}),Object(L.jsxs)(gn,{children:["Joined ",jn(i)]}),Object(L.jsx)(mn,{children:null===a?"This profile has no bio":a})]})]})})},On={login:"octocat",id:583231,node_id:"MDQ6VXNlcjU4MzIzMQ==",avatar_url:"https://avatars.githubusercontent.com/u/583231?v=4",gravatar_id:"",url:"https://api.github.com/users/octocat",html_url:"https://github.com/octocat",followers_url:"https://api.github.com/users/octocat/followers",following_url:"https://api.github.com/users/octocat/following{/other_user}",gists_url:"https://api.github.com/users/octocat/gists{/gist_id}",starred_url:"https://api.github.com/users/octocat/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/octocat/subscriptions",organizations_url:"https://api.github.com/users/octocat/orgs",repos_url:"https://api.github.com/users/octocat/repos",events_url:"https://api.github.com/users/octocat/events{/privacy}",received_events_url:"https://api.github.com/users/octocat/received_events",type:"User",site_admin:!1,name:"The Octocat",company:"@github",blog:"https://github.blog",location:"San Francisco",email:null,hireable:null,bio:null,twitter_username:null,public_repos:8,public_gists:8,followers:4015,following:9,created_at:"2011-01-25T18:44:36Z",updated_at:"2021-09-22T14:27:38Z"},wn=t.p+"static/media/icon-search.0cc0c984.svg",vn=D.c.div(y||(y=Object(N.a)(["\n  display: flex;\n  position: relative;\n"]))),yn=D.c.input(_||(_=Object(N.a)(["\n  height: 69px;\n  width: 100%;\n\n  padding: 18px 50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  font-family: Space Mono;\n  font-size: 18px;\n  line-height: 25px;\n  box-shadow: ",";\n  border: none;\n  border-radius: 15px;\n\n  /* identical to box height, or 192% */\n\n  color: ",";\n  background: "," url(",") no-repeat\n    scroll 13px 50%;\n  outline: none;\n\n  @media (max-width: 450px) {\n    font-size: 13px;\n    height: 60px;\n  }\n"])),(function(n){return n.searchBoxShadow}),(function(n){return n.theme.innerTextColor}),(function(n){return n.theme.innerSpaceBgColor}),wn),_n=D.c.button(C||(C=Object(N.a)(["\n  height: 50px;\n  width: 106px;\n\n  position: absolute;\n  top: 15%;\n  right: 10px;\n  background: #0079ff;\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 24px;\n  border: none;\n\n  /* identical to box height */\n\n  color: #ffffff;\n\n  &:hover {\n    cursor: pointer;\n    background: #60abff;\n  }\n\n  @media (max-width: 450px) {\n    width: 84px;\n    height: 46px;\n    font-size: 14px;\n  }\n"]))),Cn=D.c.span(F||(F=Object(N.a)(["\n  position: absolute;\n\n  top: 35%;\n  right: 130px;\n  line-height: 24px;\n  font-family: Space Mono;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 22px;\n\n  color: #f74646;\n"]))),Fn=function(n){var e=n.onChangeSearch,t=n.error,o=n.onSearchButton;return Object(L.jsxs)(vn,{children:[Object(L.jsx)(yn,{onChange:e,placeholder:"Search GitHub username..."}),t&&Object(L.jsx)(Cn,{children:"No results"}),Object(L.jsx)(_n,{onClick:o,children:"Search"})]})},Sn=D.c.main(S||(S=Object(N.a)(["\n  width: 100%;\n  margin: 0 auto;\n  max-width: 730px;\n"]))),kn=D.c.div(k||(k=Object(N.a)(["\n  padding: 6%;\n  display: flex;\n  flex-direction: column;\n  margin: 24px auto;\n  background: ",";\n  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);\n  border-radius: 15px;\n  @media (min-width: 768px) {\n  }\n"])),(function(n){return n.theme.innerSpaceBgColor})),Bn=function(){var n=window.matchMedia("(prefers-color-scheme: dark)").matches,e=Object(B.useState)(n?"dark":"light"),t=Object(M.a)(e,2),o=t[0],r=t[1],i=Object(B.useState)(null),a=Object(M.a)(i,2),c=a[0],l=a[1],s=Object(B.useState)(null),h=Object(M.a)(s,2),d=h[0],p=h[1],b=Object(B.useState)(!1),u=Object(M.a)(b,2),x=u[0],g=u[1],m=Object(B.useState)(""),j=Object(M.a)(m,2),f=j[0],O=j[1];null===d&&p(On),Object(B.useEffect)((function(){""!==f&&fetch("https://api.github.com/users/".concat(f)).then((function(n){return n.json()})).then((function(n){"Not Found"!==n.message?p(n):g(!0)})).catch((function(n){throw n}))}),[f]);var w=null!==d?d:"",v=w.avatar_url,y=w.name,_=w.html_url,C=w.created_at,F=w.login,S=w.bio,k=w.public_repos,T=w.followers,z=w.following,I=w.location,N=w.blog,U=w.twitter_username,H=w.company;return Object(L.jsxs)(D.a,{theme:"light"===o?E:J,children:[Object(L.jsx)(A,{}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(sn,{modeState:o,modeChange:function(){r("light"===o?"dark":"light")}}),Object(L.jsxs)(Sn,{children:[Object(L.jsx)(Fn,{onChangeSearch:function(n){g(!1),l(n.target.value)},error:x,onSearchButton:function(){f!==c&&null!==c&&O(c)}}),Object(L.jsxs)(kn,{children:[Object(L.jsx)(fn,{avatar_url:v,name:y,html_url:_,bio:S,login:F,created_at:C}),Object(L.jsx)(G,{public_repos:k,followers:T,following:z}),Object(L.jsx)(rn,{location:I,blog:N,twitter_username:U,company:H})]})]}),Object(L.jsx)("footer",{style:{textAlign:"center",marginTop:"35px"},children:Object(L.jsxs)("div",{style:{color:"grey"},children:["Challenge by"," ",Object(L.jsx)(tn,{href:"https://www.frontendmentor.io?ref=challenge",rel:"noreferrer",target:"_blank",children:"Frontend Mentor"}),". Coded by"," ",Object(L.jsx)(tn,{href:"https://github.com/ArseniyX/",target:"_blank",rel:"noreferrer",children:"ArseniyX"}),"."]})})]})]})},Tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),o(n),r(n),i(n),a(n)}))};I.a.render(Object(L.jsx)(T.a.StrictMode,{children:Object(L.jsx)(Bn,{})}),document.getElementById("root")),Tn()}},[[22,1,2]]]);
//# sourceMappingURL=main.38a0de4f.chunk.js.map