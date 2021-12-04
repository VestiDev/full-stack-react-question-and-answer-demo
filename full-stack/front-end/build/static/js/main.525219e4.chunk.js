(this["webpackJsonpfull-stack-react"]=this["webpackJsonpfull-stack-react"]||[]).push([[0],{75:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(28),i=n.n(s),a=(n(75),n(126)),u=n(44),o=n(18),j=n(11),d=n(12),b=n(124),l=n(25),f=n(21),O=n(17),x=n.n(O),h=n(24),p=function(){var e=Object(h.a)(x.a.mark((function e(t,n,c){var r,s,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat("http://localhost:5000").concat(n),s={method:t,mode:"cors",headers:{"Content-Type":"application/json"}},c&&(s.body=JSON.stringify(c)),e.next=5,fetch(r,s);case 5:return i=e.sent,e.abrupt("return",i.json());case 7:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),v=Object(f.b)("questions/updateQuestion",function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("PUT","/question/".concat(t.id),{question:t});case 2:return n=e.sent,e.abrupt("return",n.questions.map((function(e){return e.id=e._id,delete e._id,e})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(f.b)("questions/deleteQuestion",function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("DELETE","/question/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(f.b)("questions/fetchQuestion",function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("GET","/question/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.questions.map((function(e){return e.id=e._id,delete e._id,e})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(f.b)("questions/fetchQuestions",Object(h.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("GET","/questions");case 2:return t=e.sent,e.abrupt("return",t.questions.map((function(e){return e.id=e._id,delete e._id,e})));case 4:case"end":return e.stop()}}),e)})))),g=(Object(f.b)("questions/deleteQuestion",function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("DELETE","/question/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(e,t){e.loading=!1,e.items=Object(l.a)(Object(l.a)({},e.items),t.payload.reduce((function(e,t){return e[t.id]=t,e}),{}))}),y=function(e){e.loading=!0},C=function(e,t){delete e.items[t.payload]},k=Object(f.c)({name:"questions",initialState:{items:{},loading:!1},reducers:{addQuestions:g,addAnswer:function(e,t){var n=t.payload,c=n.questionId,r=n.answer,s=e.items[c].answers||{};s[r.id]=r,e.items[c].answers=s},removeQuestion:C,upvote:function(e,t){var n=t.payload.questionId,c=(e.items[n].upvotes||0)+1;e.items[n].upvotes=c}},extraReducers:function(e){e.addCase(v.fulfilled,g),e.addCase(v.pending,y),e.addCase(m.fulfilled,g),e.addCase(m.pending,y),e.addCase(w.fulfilled,g),e.addCase(w.pending,y),e.addCase(q.fulfilled,C),e.addCase(q.pending,y)}}),Q=(k.actions,{questions:k.reducer}),T=n(119),S=n(125),E=n(4),I=n(118),D=n(120),L=function(e){return function(t){return t.questions.items[e]}},A=n(2),_=function(e){var t=e.questionId,n=Object(c.useState)(""),r=Object(d.a)(n,2),s=r[0],i=r[1],a=Object(o.b)(),u=Object(o.c)(L(t));return Object(A.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(A.jsx)(I.a,{multiline:!0,placeholder:"Answer this question",rows:4,value:s,onChange:function(e){return i(e.target.value||"")}}),Object(A.jsx)(T.a,{onClick:function(){return function(){var e=Object(D.a)(),t={id:e,text:s};a(v(Object(l.a)(Object(l.a)({},u),{},{answers:Object(l.a)(Object(l.a)({},u.answers),{},Object(E.a)({},e,t))}))),i("")}()},children:"Submit"})]})},P=function(e){var t=e.questionId,n=Object(o.c)(L(t)),c=Object.values(n.answers||{});return Object(A.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(A.jsx)(b.a,{variant:"h2",children:"Answers:"}),c.length?null:Object(A.jsx)(b.a,{variant:"h4",children:"No answers yet."}),c.map((function(e){return Object(A.jsx)(S.a,{style:{padding:12},children:Object(A.jsx)(b.a,{variant:"h5",children:e.text})},e.id)})),Object(A.jsx)(_,{questionId:t})]})},F=function(e){var t=e.question,n=Object(o.b)();return Object(A.jsxs)(T.a,{onClick:function(e){e.stopPropagation(),n(v(Object(l.a)(Object(l.a)({},t),{},{upvotes:(t.upvotes||0)+1})))},children:["\u25b2 ",t.upvotes||0]})},J=function(){var e=Object(j.g)(),t=Object(o.b)(),n=e.questionId,r=Object(o.c)(function(e){return function(t){return t.questions.items[e]}}(n)),s=Object(j.f)(),i=Object(c.useState)(!1),u=Object(d.a)(i,2),l=u[0],f=u[1];return Object(c.useEffect)((function(){if(l)return!1;t(m(n)),f(!0)}),[t,l,f,n]),r?Object(A.jsxs)(a.a,{children:[Object(A.jsx)(b.a,{variant:"h1",children:r.text}),Object(A.jsx)(F,{question:r}),Object(A.jsx)(T.a,{onClick:function(){t(q(r.id)),s("/")},children:"Delete"}),Object(A.jsx)("hr",{}),Object(A.jsx)(P,{questionId:r.id})]}):Object(A.jsx)(a.a,{children:Object(A.jsx)("h2",{children:"That question doesn't exist."})})},B=n(122),G=function(e){var t=e.questions,n=Object(j.f)();return Object(A.jsxs)("div",{children:[Object(A.jsx)(b.a,{variant:"h2",children:"Questions"}),Object(A.jsx)(B.a,{container:!0,spacing:2,children:t.map((function(e){return Object(A.jsx)(B.a,{item:!0,xs:4,style:{cursor:"pointer"},onClick:function(){return n("/question/".concat(e.id))},children:Object(A.jsxs)(S.a,{style:{padding:12,flexDirection:"row",display:"flex"},children:[Object(A.jsx)(F,{question:e}),Object(A.jsx)(b.a,{variant:"h6",children:e.text})]})},e.id)}))})]})},N=Object(f.b)("questions/createQuestion",function(){var e=Object(h.a)(x.a.mark((function e(t){var n,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.questionText,c=t.navigate,e.next=3,p("POST","/question",{question:{text:n}});case 3:r=e.sent,c("/question/".concat(r.insertedId));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(o.b)(),i=Object(j.f)();return Object(A.jsxs)(a.a,{style:{display:"flex",flexDirection:"column"},children:[Object(A.jsx)(b.a,{variant:"h2",children:"Ask a Question"}),Object(A.jsx)(I.a,{multiline:!0,rows:4,value:n,onChange:function(e){return r(e.target.value||"")}}),Object(A.jsx)(T.a,{onClick:function(){return s(N({questionText:n,navigate:i})),void r("")},children:"Submit"})]})},R=function(e){return Object.values(e.questions.items)},U=function(e){return e.questions.loading},W=function(){var e=Object(o.c)(R),t=Object(o.c)(U),n=Object(c.useState)(!1),r=Object(d.a)(n,2),s=r[0],i=r[1],a=Object(o.b)();return Object(c.useEffect)((function(){if(s)return!1;a(w()),i(!0)}),[a,s,i]),t?Object(A.jsxs)("div",{children:[Object(A.jsx)(b.a,{variant:"h1",children:"Latest Questions"}),Object(A.jsx)(b.a,{variant:"h4",children:"Loading..."})]}):Object(A.jsxs)("div",{children:[Object(A.jsx)(b.a,{variant:"h1",children:"Latest Questions"}),Object(A.jsx)(G,{questions:e})]})},z=function(){return Object(A.jsxs)(j.c,{children:[Object(A.jsx)(j.a,{path:"/",element:Object(A.jsx)(W,{})}),Object(A.jsx)(j.a,{path:"/question/:questionId",element:Object(A.jsx)(J,{})}),Object(A.jsx)(j.a,{path:"/create-question",element:Object(A.jsx)(M,{})}),Object(A.jsx)(j.a,{path:"*",element:Object(A.jsx)("main",{children:Object(A.jsx)("p",{children:"There's nothing here!"})})})]})},H=n(127),K=function(){var e=Object(j.f)();return Object(A.jsxs)(H.a,{style:{justifyContent:"space-between"},children:[Object(A.jsxs)(b.a,{variant:"h4",color:"primary",style:{textShadow:"1px 1px black, 2px 2px #fff",cursor:"pointer"},onClick:function(){return e("/")},children:["\u203d\xa0",Object(A.jsx)("i",{children:"Q&A World"})]}),Object(A.jsx)("div",{children:Object(A.jsx)(T.a,{onClick:function(){return e("/create-question")},variant:"contained",children:"Ask Question"})})]})},V=Object(f.a)({reducer:Object(l.a)({},Q)});var X=function(){return Object(A.jsx)(o.a,{store:V,children:Object(A.jsx)(u.a,{children:Object(A.jsxs)(a.a,{children:[Object(A.jsx)(K,{}),Object(A.jsx)(z,{})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(X,{})}),document.getElementById("root")),Y()}},[[83,1,2]]]);
//# sourceMappingURL=main.525219e4.chunk.js.map