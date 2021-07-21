(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),s=(n(19),n(10)),o=n(2),l=n(3),u=n(5),m=n(4),b=(n(20),n(13)),d=n(7),h=n(6),j=n.n(h),p=n(23),f=n(0),O=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).inputIdName=Object(p.a)(),t.inputIdNumber=Object(p.a)(),t.state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.submitForm=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number,c=a.trim(),i=r.trim();""!==c&&""!==i?(t.props.handleSubmit(Object(b.a)({id:Object(p.a)()},t.state)),t.setState({name:"",number:""})):alert("fill in all fields")},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.inputIdName,e=this.inputIdNumber,n=this.state,a=this.submitForm;return Object(f.jsxs)("form",{className:j.a.Form,onSubmit:a,children:[Object(f.jsx)("label",{htmlFor:t,className:j.a.Label,children:"Name"}),Object(f.jsx)("input",{id:t,className:j.a.Input,type:"text",name:"name",value:n.name,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:e,className:j.a.Label,children:"Number"}),Object(f.jsx)("input",{id:e,className:j.a.Input,type:"tel",name:"number",value:n.number,onChange:this.handleChange}),Object(f.jsx)("button",{type:"submit",className:j.a.AddBtn,children:"Add contact"})]})}}]),n}(a.Component),v=n(8),C=n.n(v),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)("ul",{children:this.props.contacts.map((function(e){var n=e.name,a=e.number,r=e.id;return Object(f.jsx)("li",{children:Object(f.jsxs)("div",{className:C.a.Item,children:[Object(f.jsxs)("p",{className:C.a.Text,children:[n,": ",Object(f.jsx)("span",{children:a})]}),Object(f.jsx)("button",{type:"button",className:C.a.Button,onClick:function(){return t.props.deleteContact(r)},children:"Delete"})]})},r)}))})}}]),n}(r.a.Component);_.defaultProps={renderArr:[]};var x=n(9),I=n.n(x),F=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).inputId=Object(p.a)(),t.state={filter:""},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:I.a.Item,children:[Object(f.jsx)("label",{className:I.a.Label,htmlFor:this.inputId,children:"Find contacts by name"}),Object(f.jsx)("input",{className:I.a.Input,id:this.inputId,value:this.props.filter,onChange:this.props.handleChange})]})}}]),n}(r.a.Component),y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleSubmit=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert(e.name+" is already exist"):(t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e]),filter:""}})),alert("you have new contact"))},t.findInFilter=function(){var e=t.state,n=e.contacts,a=e.filter;return""===a?n:n.filter((function(e){var n=e.name;return t.testFunc(a,n)}))},t.setFilter=function(e){if(""!==e)return t.setState({filter:e})},t.handleChange=function(e){var n=e.target.value;t.setState({filter:n}),t.setFilter(n.trim())},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.reduce((function(t,n){return n.id!==e?[].concat(Object(s.a)(t),[n]):Object(s.a)(t)}),[])}}))},t}return Object(l.a)(n,[{key:"testFunc",value:function(t,e){var n=e.slice(0,t.length);return t.toLowerCase()===n.toLowerCase()}},{key:"render",value:function(){var t=this.findInFilter();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{handleSubmit:this.handleSubmit}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(F,{handleChange:this.handleChange,filter:this.state.filter}),Object(f.jsx)(_,{contacts:t,deleteContact:this.deleteContact})]})}}]),n}(r.a.Component);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={Form:"ContactForm_Form__KLU4N",AddBtn:"ContactForm_AddBtn__3kWWZ",Item:"ContactForm_Item__1OhL8",Label:"ContactForm_Label__kxURd",Input:"ContactForm_Input__3CYAB"}},8:function(t,e,n){t.exports={Button:"ContactList_Button__ur5sW",Item:"ContactList_Item__2bdgD",Text:"ContactList_Text__3h41j"}},9:function(t,e,n){t.exports={Label:"Filter_Label__1ynYp",Input:"Filter_Input__2UzAJ",Item:"Filter_Item__2dlRi"}}},[[22,1,2]]]);
//# sourceMappingURL=main.de6bd53e.chunk.js.map