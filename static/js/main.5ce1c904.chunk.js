(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{43:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(8),i=n.n(o),s=n(5),u=n(21),l=n(12),b=n(3),d=n(22),j=n.n(d),m=n(4),f=n(23),h=n.n(f),O=n(6),p=n(2),v=n(9),C=n.n(v),x={addContact:Object(b.b)("contacts/aad",(function(t,e){return{payload:{id:C.a.generate(),name:t,number:e}}})),deleteContact:Object(b.b)("contacts/delete"),changeFilter:Object(b.b)("contacts/changeFilter")},g=Object(b.c)([],(a={},Object(O.a)(a,x.addContact,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(O.a)(a,x.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),_=Object(b.c)("",Object(O.a)({},x.changeFilter,(function(t,e){return e.payload}))),y=Object(p.c)({items:g,filter:_}),N={key:"contacts",storage:h.a,blacklist:["filter"]},k=[].concat(Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),[j.a]),w=Object(b.a)({reducer:{contacts:Object(m.g)(N,y)},middleware:k,devTools:!1}),A={store:w,persistor:Object(m.h)(w)},S=n(10),F=n(11),z=n(14),L=n(13),I=(n(43),n(1)),J=function(t){Object(z.a)(n,t);var e=Object(L.a)(n);function n(){var t;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=[];if(t.props.contacts.map((function(t){return r.push(t.name.toLowerCase())})),r.includes(a.toLowerCase()))return alert("".concat(a," is alredy in contacts"));t.props.onSubmit(a,c),t.resetInput()},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(O.a)({},a,c))},t.resetInput=function(){t.setState({name:"",number:""})},t}return Object(F.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(I.jsx)("form",{className:"add-form",onSubmit:this.handleSubmit,children:Object(I.jsxs)("label",{className:"add-form__label",children:["Name",Object(I.jsx)("input",{className:"add-form__input",type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange}),Object(I.jsxs)("label",{className:"add-form__label",children:["Number",Object(I.jsx)("input",{className:"add-form__input",type:"tel",name:"number",value:n,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(I.jsx)("button",{className:"add-form__btn",type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),T=Object(s.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(x.addContact(e,n))}}}))(J),Z=(n(45),Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(x.changeFilter(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(I.jsx)("div",{className:"find-form",children:Object(I.jsxs)("label",{className:"find-form__label",children:["Find contact by name",Object(I.jsx)("input",{className:"find-form__input",type:"text",value:e,onChange:n})]})})}))),q=(n(46),function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}),B=Object(s.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:q(n,a)}}),(function(t){return{deleteContact:function(e){return t(x.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(I.jsx)("div",{className:"contact",children:Object(I.jsx)("ul",{className:"contact__list",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(I.jsxs)("li",{className:"contact__item",children:[a,"\xa0",c,Object(I.jsx)("button",{type:"button",className:"contact__btn",onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})})})),M=function(t){Object(z.a)(n,t);var e=Object(L.a)(n);function n(){return Object(S.a)(this,n),e.apply(this,arguments)}return Object(F.a)(n,[{key:"render",value:function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"section",children:[Object(I.jsx)("h1",{children:"Phonebook"}),Object(I.jsx)(T,{}),Object(I.jsx)("p",{children:"Contacts"}),Object(I.jsx)(Z,{}),Object(I.jsx)(B,{})]})})}}]),n}(c.Component);i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(s.a,{store:A.store,children:Object(I.jsx)(u.a,{loading:null,persistor:A.persistor,children:Object(I.jsx)(M,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.5ce1c904.chunk.js.map