(this["webpackJsonpgithub-user-search-app"]=this["webpackJsonpgithub-user-search-app"]||[]).push([[0],{19:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var o,r,i,c,a,l,s,h,p,d,b,u,x,g,m,j,f,O,w,v,y,_,C,F,S,k,z,B=t(1),T=t.n(B),M=t(9),I=t.n(M),D=(t(19),t(4)),N=t(3),A=t(2),U=Object(A.b)(o||(o=Object(N.a)(["\n\n  * {\n      box-sizing: border-box;\n      transition: all 0.50s linear;\n      font-family: Space Mono;\n  }\n  \n  body {\n    background: ",";\n    color: ",";\n    margin: 0 17px;\n    \n  }\n\n  "])),(function(n){return n.theme.body}),(function(n){return n.theme.text})),E=t.p+"static/media/icon-sun.f28a8996.svg",P=t.p+"static/media/icon-moon.cce754ce.svg",H={body:"#F2F2F2",text:"#222731",toggleBorder:"#FFF",innerTextColor:"#4B6A9B",background:"#363537",innerSpaceBgColor:"#FFF",searchBoxShadow:"0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",modeImgUrl:"".concat(P),modeHoverColor:"#222731",joinedDateColor:"#697C9A",hoverImgColor:"brightness(0%)"},J={body:"#141D2F",text:"#FFF",toggleBorder:"#6B8096",innerTextColor:"#FFF",background:"#999",innerSpaceBgColor:"#1E2A47",searchBoxShadow:"none",modeImgUrl:"".concat(E),modeHoverColor:"#90A4D4",joinedDateColor:"#FFF",hoverImgColor:"brightness(50%)"},L=t(0),X=["Repos","Followers","Following"],Q=A.c.div(r||(r=Object(N.a)(["\n  margin-top: 12px;\n  margin-left: 25%;\n  display: flex;\n\n  background-color: ",";\n  justify-content: space-around;\n  border-radius: 10px;\n  height: 85px;\n  min-width: 230px;\n  text-align: center;\n  flex-direction: row;\n  max-width: 480px;\n  padding: 12px 0;\n  @media (max-width: 800px) {\n    margin-left: 0;\n    max-width: 1000px;\n  }\n"])),(function(n){return n.theme.body})),Z=A.c.div(i||(i=Object(N.a)(["\n  display: block;\n  margin: 0;\n"]))),G=A.c.p(c||(c=Object(N.a)(["\n  font-size: 13px;\n  margin: 0;\n"]))),K=A.c.p(a||(a=Object(N.a)(["\n  font-weight: bold;\n  font-size: 16px;\n"]))),R=function(n){return Object(L.jsx)(Q,{children:X.map((function(e,t){var o=Object.keys(n);return Object(L.jsxs)(Z,{children:[Object(L.jsx)(G,{children:e}),Object(L.jsx)(K,{children:n[o[t]]})]},e)}))})},V=t(14),q=t.p+"static/media/icon-location.1237a42f.svg",W=t.p+"static/media/icon-website.b7923f6c.svg",Y=t.p+"static/media/icon-twitter.d5ddd205.svg",$=t.p+"static/media/icon-company.6f78ffb3.svg",nn=A.c.ul(l||(l=Object(N.a)(["\n  margin-left: 25%;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n  width: calc(100% + 25px);\n  padding: 0;\n  min-width: 279px;\n  flex-direction: row;\n  max-width: 480px;\n\n  @media (max-width: 800px) {\n    margin-left: 0;\n    max-width: 1000px;\n  }\n  @media (max-width: 550px) {\n    flex-direction: column;\n  }\n"]))),en=A.c.li(s||(s=Object(N.a)(["\n  flex: 1 1 50%;\n  margin-top: 10px;\n  &.available {\n    color: ",";\n  }\n  &.not-available {\n    color: ",";\n    opacity: 0.5;\n  }\n"])),(function(n){return n.theme.innerTextColor}),(function(n){return n.theme.innerTextColor})),tn=A.c.span(h||(h=Object(N.a)(["\n  margin-left: 10px;\n"]))),on=A.c.img(p||(p=Object(N.a)(["\n  filter: brightness(0%);\n"]))),rn=A.c.a(d||(d=Object(N.a)(["\n  text-decoration: none;\n  color: ",";\n  &:hover {\n    text-decoration: underline;\n  }\n"])),(function(n){return n.theme.innerTextColor})),cn=function(n){return"Not available"===n?"not-available":"available"},an=function(n){var e=Object(V.a)({},n);for(var t in e)null!==e[t]&&""!==e[t]||(e[t]="Not available");var o=e.location,r=e.blog,i=e.twitter_username,c=e.company;return Object(L.jsxs)(nn,{children:[Object(L.jsxs)(en,{className:cn(o),children:[Object(L.jsx)(on,{src:q,alt:"location"}),Object(L.jsx)(tn,{children:o})]}),Object(L.jsxs)(en,{className:cn(i),children:[Object(L.jsx)(on,{src:Y,alt:"twitter"}),Object(L.jsx)(tn,{children:i})]}),Object(L.jsxs)(en,{className:cn(r),children:[Object(L.jsx)(on,{src:W,alt:"blog"}),Object(L.jsx)(rn,{style:{margin:"10px"},href:r,target:"_blank",rel:"noreferrer",children:r})]}),Object(L.jsxs)(en,{className:cn(c),children:[Object(L.jsx)(on,{src:$,alt:"company"}),Object(L.jsx)(tn,{children:c})]})]})},ln=A.c.header(b||(b=Object(N.a)(["\n  margin: 31px auto;\n  margin-top: calc(9% - 39px / 2 + 0.5px);\n  display: flex;\n  justify-content: space-between;\n  max-width: 730px;\n  text-align: center;\n"]))),sn=A.c.h1(u||(u=Object(N.a)(["\n  font-weight: bold;\n  font-size: 26px;\n  line-height: 39px;\n"]))),hn=A.c.button(x||(x=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  border: none;\n  letter-spacing: 1px;\n  color: ",";\n  background-color: transparent;\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n\n  &:hover::after {\n    filter: ",";\n    transition: all 0.5s linear;\n  }\n\n  &::after {\n    content: url(",");\n    margin-left: 10px;\n    transition: all 0.5s linear;\n\n    &:hover {\n      filter: ",";\n    }\n  }\n"])),(function(n){return n.theme.innerTextColor}),(function(n){return n.theme.modeHoverColor}),(function(n){return n.theme.hoverImgColor}),(function(n){return n.theme.modeImgUrl}),(function(n){return n.theme.hoverImgColor})),pn=function(n){var e=n.modeState,t=n.modeChange;return Object(L.jsxs)(ln,{children:[Object(L.jsx)(sn,{children:"devfinder"}),Object(L.jsx)(hn,{onClick:t,children:"dark"===e?"light":"dark"})]})},dn=t(13),bn=A.c.div(g||(g=Object(N.a)(["\n  display: block;\n  width: 100%;\n"]))),un=A.c.div(m||(m=Object(N.a)(["\n  position: relative;\n\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n"]))),xn=A.c.img(j||(j=Object(N.a)(["\n  height: 117px;\n  border-radius: 50%;\n  @media (max-width: 400px) {\n    height: 70px;\n  }\n"]))),gn=A.c.div(f||(f=Object(N.a)(["\n  display: block;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  width: 100%;\n  padding-left: 7%;\n  @media (max-width: 574px) {\n    position: static;\n    display: flex;\n  }\n"]))),mn=A.c.h2(O||(O=Object(N.a)(["\n  width: 150px;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-family: Space Mono;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 26px;\n  line-height: 39px;\n  @media (max-width: 400px) {\n    font-size: 16px;\n    line-height: 15px;\n  }\n"]))),jn=A.c.a(w||(w=Object(N.a)(["\n  width: 0;\n  color: #0079ff;\n  text-decoration: none;\n"]))),fn=A.c.p(v||(v=Object(N.a)(["\n  font-size: 15px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 6px;\n  margin-bottom: 0;\n  color: ",";\n  @media (max-width: 574px) {\n    position: static;\n  }\n"])),(function(n){return n.theme.joinedDateColor})),On=A.c.p(y||(y=Object(N.a)(["\n  position: static;\n  line-height: 25px;\n  font-size: 15px;\n"]))),wn=function(n){var e=n.slice(0,10).split("-"),t=new Date(e);return"".concat(e[2]," ").concat(t.toLocaleString("en-us",{month:"short",year:"numeric"}))},vn=function(n){var e=n.avatar_url,t=n.name,o=n.html_url,r=n.login,i=n.created_at,c=n.bio,a=Object(dn.useMediaPredicate)("(max-width: 574px)");return Object(L.jsxs)(bn,{children:[Object(L.jsxs)(un,{children:[Object(L.jsx)(xn,{src:e,alt:"github image"}),Object(L.jsxs)(gn,{children:[Object(L.jsx)(mn,{children:t}),Object(L.jsxs)(jn,{href:o,target:"_blank",rel:"noreferrer",children:["@",r]}),Object(L.jsxs)(fn,{children:["Joined ",wn(i)]}),!a&&Object(L.jsx)(On,{children:null===c?"This profile has no bio":c})]})]}),a&&Object(L.jsx)(On,{children:null===c?"This profile has no bio":c})]})},yn={login:"octocat",id:583231,node_id:"MDQ6VXNlcjU4MzIzMQ==",avatar_url:"https://avatars.githubusercontent.com/u/583231?v=4",gravatar_id:"",url:"https://api.github.com/users/octocat",html_url:"https://github.com/octocat",followers_url:"https://api.github.com/users/octocat/followers",following_url:"https://api.github.com/users/octocat/following{/other_user}",gists_url:"https://api.github.com/users/octocat/gists{/gist_id}",starred_url:"https://api.github.com/users/octocat/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/octocat/subscriptions",organizations_url:"https://api.github.com/users/octocat/orgs",repos_url:"https://api.github.com/users/octocat/repos",events_url:"https://api.github.com/users/octocat/events{/privacy}",received_events_url:"https://api.github.com/users/octocat/received_events",type:"User",site_admin:!1,name:"The Octocat",company:"@github",blog:"https://github.blog",location:"San Francisco",email:null,hireable:null,bio:null,twitter_username:null,public_repos:8,public_gists:8,followers:4015,following:9,created_at:"2011-01-25T18:44:36Z",updated_at:"2021-09-22T14:27:38Z"},_n=t.p+"static/media/icon-search.0cc0c984.svg",Cn=A.c.div(_||(_=Object(N.a)(["\n  display: flex;\n  position: relative;\n"]))),Fn=A.c.input(C||(C=Object(N.a)(["\n  height: 69px;\n  width: 100%;\n\n  padding: 18px 50px;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  font-family: Space Mono;\n  font-size: 18px;\n  line-height: 25px;\n  box-shadow: ",";\n  border: none;\n  border-radius: 15px;\n\n  /* identical to box height, or 192% */\n\n  color: ",";\n  background: "," url(",") no-repeat\n    scroll 13px 50%;\n  outline: none;\n\n  &::placeholder {\n    opacity: 0.8;\n    word-spacing: 0px;\n  }\n\n  @media (max-width: 450px) {\n    font-size: 13px;\n    height: 60px;\n    padding: 18px 45px;\n  }\n\n  @media (max-width: 375px) {\n    font-size: 12px;\n  }\n"])),(function(n){return n.theme.searchBoxShadow}),(function(n){return n.theme.innerTextColor}),(function(n){return n.theme.innerSpaceBgColor}),_n),Sn=A.c.button(F||(F=Object(N.a)(["\n  height: 50px;\n  width: 106px;\n\n  position: absolute;\n  top: 15%;\n  right: 10px;\n  background: #0079ff;\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 24px;\n  border: none;\n  word-spacing: 10px;\n\n  color: #fff;\n\n  &:hover {\n    cursor: pointer;\n    background: #60abff;\n  }\n\n  @media (max-width: 450px) {\n    width: 84px;\n    height: 46px;\n    font-size: 14px;\n  }\n  \n"]))),kn=A.c.span(S||(S=Object(N.a)(["\n  position: absolute;\n\n  top: 35%;\n  right: 130px;\n  line-height: 24px;\n  font-family: Space Mono;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 22px;\n\n  color: #f74646;\n"]))),zn=function(n){var e=n.onChangeSearch,t=n.error,o=n.onSearchButton,r=n.onEnterPressed;return Object(L.jsxs)(Cn,{children:[Object(L.jsx)(Fn,{onChange:e,onKeyUp:r,placeholder:"Search GitHub username..."}),t&&Object(L.jsx)(kn,{children:"No results"}),Object(L.jsx)(Sn,{onClick:o,children:"Search"})]})},Bn=A.c.main(k||(k=Object(N.a)(["\n  width: 100%;\n  margin: 0 auto;\n  max-width: 730px;\n"]))),Tn=A.c.div(z||(z=Object(N.a)(["\n  padding: 6%;\n  display: flex;\n  flex-direction: column;\n  margin: 24px auto;\n  background: ",";\n  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);\n  border-radius: 15px;\n  @media (min-width: 768px) {\n  }\n"])),(function(n){return n.theme.innerSpaceBgColor})),Mn=function(){var n=window.matchMedia("(prefers-color-scheme: dark)").matches,e=Object(B.useState)(n?"dark":"light"),t=Object(D.a)(e,2),o=t[0],r=t[1],i=Object(B.useState)(null),c=Object(D.a)(i,2),a=c[0],l=c[1],s=Object(B.useState)(null),h=Object(D.a)(s,2),p=h[0],d=h[1],b=Object(B.useState)(!1),u=Object(D.a)(b,2),x=u[0],g=u[1],m=Object(B.useState)(""),j=Object(D.a)(m,2),f=j[0],O=j[1],w=function(){f!==a&&null!==a&&O(a)};null===p&&d(yn),Object(B.useEffect)((function(){""!==f&&fetch("https://api.github.com/users/".concat(f)).then((function(n){return n.json()})).then((function(n){"Not Found"!==n.message?d(n):g(!0)})).catch((function(n){throw n}))}),[f]);var v=null!==p?p:"",y=v.avatar_url,_=v.name,C=v.html_url,F=v.created_at,S=v.login,k=v.bio,z=v.public_repos,T=v.followers,M=v.following,I=v.location,N=v.blog,E=v.twitter_username,P=v.company;return Object(L.jsxs)(A.a,{theme:"light"===o?H:J,children:[Object(L.jsx)(U,{}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(pn,{modeState:o,modeChange:function(){r("light"===o?"dark":"light")}}),Object(L.jsxs)(Bn,{children:[Object(L.jsx)(zn,{onChangeSearch:function(n){g(!1),l(n.target.value)},error:x,onSearchButton:w,onEnterPressed:function(n,e){13===n.keyCode&&(n.preventDefault(),w())}}),Object(L.jsxs)(Tn,{children:[Object(L.jsx)(vn,{avatar_url:y,name:_,html_url:C,bio:k,login:S,created_at:F}),Object(L.jsx)(R,{public_repos:z,followers:T,following:M}),Object(L.jsx)(an,{location:I,blog:N,twitter_username:E,company:P})]})]}),Object(L.jsx)("footer",{style:{textAlign:"center",marginTop:"35px"},children:Object(L.jsxs)("div",{style:{color:"grey"},children:["Challenge by"," ",Object(L.jsx)(rn,{href:"https://www.frontendmentor.io?ref=challenge",rel:"noreferrer",target:"_blank",children:"Frontend Mentor"}),". Coded by"," ",Object(L.jsx)(rn,{href:"https://github.com/ArseniyX/",target:"_blank",rel:"noreferrer",children:"ArseniyX"}),"."]})})]})]})},In=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};I.a.render(Object(L.jsx)(T.a.StrictMode,{children:Object(L.jsx)(Mn,{})}),document.getElementById("root")),In()}},[[23,1,2]]]);
//# sourceMappingURL=main.301e200d.chunk.js.map