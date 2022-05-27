(this["webpackJsonpwys-front-end"]=this["webpackJsonpwys-front-end"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(29),c=a.n(r),o=(a(79),a(80),a(54)),i=a(11),l=a(12),d=a(16),u=a(15),h=a(9),j=a(116),m=a(2),b=a(3),p=a(1),O=["user","component","render"],g=function(e){var t=e.user,a=e.component,n=e.render,s=Object(b.a)(e,O);return t&&n?Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:n})):Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(p.jsx)(a,Object(m.a)({},e)):Object(p.jsx)(h.a,{to:"/"})}}))},x=a(60),f=(a(89),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,n=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(p.jsx)(x.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(x.a.Heading,{children:a}),Object(p.jsx)("p",{className:"alert-body",children:n})]})})}}]),a}(s.a.Component)),v=a(72),w=a(44),y=a(13),C=Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(y.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(p.jsx)(y.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(p.jsx)(y.c,{to:"/create-story",className:"nav-link",children:"Create Story"}),Object(p.jsx)(y.c,{to:"/create-prompt",className:"nav-link",children:"Create Prompt"}),Object(p.jsx)(y.c,{to:"/show-stories",className:"nav-link",children:"Show Stories"})]}),S=Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(y.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(p.jsx)(y.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),k=Object(p.jsx)(n.Fragment,{children:Object(p.jsx)(y.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(p.jsxs)(w.a,{sticky:"top",bg:"light",expand:"md",children:[Object(p.jsx)(w.a.Brand,{children:Object(p.jsx)(y.b,{to:"/",style:{color:"#4c4c4e",textDecoration:"none"},children:"What's Your Story?"})}),Object(p.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(p.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),k,t?C:S]})})]})},N=a(6),P="https://wys-api.herokuapp.com",T="http://localhost:8000",U="localhost"===window.location.hostname?T:P,I=a(18),E=a.n(I),F=function(e){return E()({url:U+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},D=a(73),G=a(115),L=a(113),z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(N.a)({},e.target.name,e.target.value))},n.onSignUp=function(e){e.preventDefault();var t,a=n.props,s=a.msgAlert,r=a.history,c=a.setUser;(t=n.state,E()({method:"POST",url:U+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return F(n.state)})).then((function(e){return c(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Successfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){n.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},n.state={email:"",password:"",passwordConfirmation:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.passwordConfirmation;return Object(p.jsx)(D.a,{style:{width:"40rem"},className:"shadow p-3 mb-5 bg-white rounded mx-auto",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Sign Up"}),Object(p.jsxs)(G.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(G.a.Group,{controlId:"email",children:[Object(p.jsx)(G.a.Label,{children:"Email address"}),Object(p.jsx)(G.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(G.a.Group,{controlId:"password",children:[Object(p.jsx)(G.a.Label,{children:"Password"}),Object(p.jsx)(G.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(G.a.Group,{controlId:"passwordConfirmation",children:[Object(p.jsx)(G.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(G.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})}}]),a}(n.Component),q=Object(h.f)(z),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(N.a)({},e.target.name,e.target.value))},n.onSignIn=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,s=t.history,r=t.setUser;F(n.state).then((function(e){return r(e.data.user)})).then((function(){return a({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){n.setState({email:"",password:""}),a({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},n.state={email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(p.jsx)(D.a,{style:{width:"40rem"},className:"shadow p-3 mb-5 bg-white rounded mx-auto",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Sign In"}),Object(p.jsxs)(G.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(G.a.Group,{controlId:"email",children:[Object(p.jsx)(G.a.Label,{children:"Email address"}),Object(p.jsx)(G.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(G.a.Group,{controlId:"password",children:[Object(p.jsx)(G.a.Label,{children:"Password"}),Object(p.jsx)(G.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})}}]),a}(n.Component),H=Object(h.f)(W),M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,n=e.clearUser;(function(e){return E()({url:U+"/sign-out/",method:"DELETE",headers:{Authorization:"Token ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),a}(n.Component),B=Object(h.f)(M),Y=a(8),_=a(114),J=function(e){var t=e.handleChange,a=e.handleSubmit,s=e.title,r=e.story,c=e.user,o=Object(n.useState)(""),i=Object(Y.a)(o,2),l=i[0],d=i[1];return Object(n.useEffect)((function(){E()({method:"GET",url:U+"/prompts",headers:{Authorization:"Token ".concat(c.token)}}).then((function(e){return e})).then((function(e){var t;d(e.data.prompts[(t=e.data.prompts.length,Math.floor(Math.random()*t))].prompt)})).catch(console.error)}),[]),Object(p.jsx)(D.a,{style:{width:"40rem"},className:"shadow p-3 mb-5 bg-white rounded mx-auto",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Tell us a story!"}),Object(p.jsx)(D.a.Img,{className:"justify-content-md-center",variant:"top",src:"https://picsum.photos/286/180"}),Object(p.jsxs)(D.a.Body,{children:[Object(p.jsx)(D.a.Title,{children:l}),Object(p.jsxs)(G.a,{onSubmit:a,children:[Object(p.jsx)(_.a,{children:Object(p.jsx)("input",{className:"p-1 mt-2",name:"title",onChange:t,placeholder:"Give your story a title.",value:s})}),Object(p.jsx)(_.a,{children:Object(p.jsx)("textarea",{className:"p-2 mt-2",name:"story",onChange:t,placeholder:"Tell us all about it!",value:r})}),Object(p.jsx)(L.a,{className:"p-1 mt-2 btn-primary",type:"submit",children:"Submit"})]})]})]})})})},R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(N.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.user,s=t.msgAlert,r=t.history;(function(e,t){return E()({method:"POST",url:U+"/stories/",headers:{Authorization:"Token ".concat(t.token)},data:{story:{title:e.title,story:e.story}}})})(n.state,a).then((function(e){return r.push("/stories/"+e.data.story._id)})).then((function(){return s({heading:"Story Successfully Created",message:"Story created!  Try a new prompt!",variant:"success"})})).catch((function(e){s({heading:"Failed creating your story: "+e.message,message:"Uh oh.  Try a new creating your story again.",variant:"danger"})}))},n.state={title:"",story:""},n}return Object(l.a)(a,[{key:"render",value:function(){return this.state.created?Object(p.jsx)(h.a,{to:"stories/"}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(J,{title:this.state.title,story:this.state.story,user:this.props.user,handleSubmit:this.handleSubmit,handleChange:this.handleChange})})}}]),a}(n.Component),K=Object(h.f)(R);function Q(e){var t=e.user,a=e.id,s=e.msgAlert,r=Object(n.useState)(""),c=Object(Y.a)(r,2),o=c[0],i=c[1],l=Object(n.useState)(""),d=Object(Y.a)(l,2),u=d[0],h=d[1],j=function(e){e.preventDefault(),E()({url:U+"/stories/".concat(a,"/"),method:"PATCH",headers:{Authorization:"Token ".concat(t.token)},data:{story:{title:o,story:u}}}).then((function(e){return e})).then((function(){return s({heading:"Updated Successfully",message:"Story updated!  Let's try one more.",variant:"success"})})).catch((function(e){s({heading:"Failed updating your story: "+e.message,message:"No worky!  Try, try again.",variant:"danger"})}))};return Object(p.jsx)("div",{children:Object(p.jsx)(G.a,{onSubmit:j,children:Object(p.jsxs)("div",{children:[Object(p.jsx)(_.a,{children:Object(p.jsx)("input",{className:"p-1 mt-2",id:"storyId",name:"title",onChange:function(e){i(e.target.value)},type:"text",placeholder:"Title",value:o})}),Object(p.jsx)(_.a,{children:Object(p.jsx)("textarea",{className:"p-1 mt-2",id:"storyId",name:"story",onChange:function(e){h(e.target.value)},type:"textarea",placeholder:"Update story",value:u})}),Object(p.jsx)("button",{className:"p-1 mt-2 btn-primary",value:"submit",onClick:j,children:"Update"})]})})})}function V(e){var t=e.user,a=e.msgAlert,n=e.id;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"p-1 mt-2 btn-primary",value:"submit",onClick:function(e){E()({url:U+"/stories/".concat(n),method:"DELETE",headers:{Authorization:"Token ".concat(t.token)}}).then((function(e){return e})).then((function(){return a({heading:"Deleted Successfully",message:"Story deleted.  Try a new prompt?",variant:"success"})})).catch(console.error)},children:"Delete"})})})}function X(e){var t=e.msgAlert,a=e.user,s=Object(n.useState)([]),r=Object(Y.a)(s,2),c=r[0],o=r[1];if(Object(n.useEffect)((function(){E()({method:"GET",url:U+"/stories",headers:{Authorization:"Token ".concat(a.token)}}).then((function(e){return e})).then((function(e){o(e.data)})).catch(console.error)}),[]),c.length<1)return Object(p.jsx)("h1",{children:"loading..."});var i=c.stories.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)(D.a,{style:{width:"30rem"},className:"shadow p-3 mb-5 bg-white rounded mx-auto",children:[Object(p.jsx)("div",{className:"overflow story-index",children:Object(p.jsx)("img",{src:"https://picsum.photos/286/180",alt:"Random Image"})}),Object(p.jsx)("h4",{children:e.title}),Object(p.jsx)("p",{children:e.story}),Object(p.jsx)(Q,{id:e.id,user:a,msgAlert:t}),Object(p.jsx)(V,{id:e.id,user:a,msgAlert:t})]})},e.id)}));return Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:i})})}var Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(N.a)({},e.target.name,e.target.value))},n.onChangePassword=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,s=t.history,r=t.user;(function(e,t){return E()({url:U+"/change-pw/",method:"PATCH",headers:{Authorization:"Token ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(n.state,r).then((function(){return a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){n.setState({oldPassword:"",newPassword:""}),a({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},n.state={oldPassword:"",newPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword;return Object(p.jsx)(D.a,{style:{width:"40rem"},className:"shadow p-3 mb-5 bg-white rounded mx-auto",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Change Password"}),Object(p.jsxs)(G.a,{onSubmit:this.onChangePassword,children:[Object(p.jsxs)(G.a.Group,{controlId:"oldPassword",children:[Object(p.jsx)(G.a.Label,{children:"Old password"}),Object(p.jsx)(G.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(p.jsxs)(G.a.Group,{controlId:"newPassword",children:[Object(p.jsx)(G.a.Label,{children:"New Password"}),Object(p.jsx)(G.a.Control,{required:!0,name:"newPassword",value:a,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(p.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})}}]),a}(n.Component),$=Object(h.f)(Z),ee=function(e){var t=e.handleChange,a=e.handleSubmit,n=e.name,s=e.prompt;return Object(p.jsx)(D.a,{style:{width:"25rem"},className:"shadow p-3 mb-5 bg-white rounded",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Create a prompt"}),Object(p.jsxs)(G.a,{onSubmit:a,children:[Object(p.jsx)(_.a,{children:Object(p.jsx)("input",{name:"name",type:"text",onChange:t,placeholder:"Give your prompt a name",value:n})}),Object(p.jsx)(_.a,{children:Object(p.jsx)("textarea",{className:"p-3 mt-2",name:"prompt",type:"text",onChange:t,placeholder:"What would you like to ask?",value:s})}),Object(p.jsx)(L.a,{className:"p-1 mt-2 btn-primary",type:"submit",children:"Submit"})]})]})})})},te=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(N.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.user,s=t.msgAlert,r=t.history;(function(e,t){return E()({method:"POST",url:U+"/prompts/",headers:{Authorization:"Token ".concat(t.token)},data:{prompt:{name:e.name,prompt:e.prompt}}})})(n.state,a).then((function(e){return r.push("/prompts/"+e.data.prompt._id)})).then((function(){return s({heading:"Prompt Successfully Created",message:"Prompt created!  Got any others?",variant:"success"})})).catch((function(e){s({heading:"Failed creating your prompt: "+e.message,message:"Uh oh.  Try a new creating your prompt again.",variant:"danger"})}))},n.state={name:"",prompt:""},n}return Object(l.a)(a,[{key:"render",value:function(){return this.state.created?Object(p.jsx)(h.a,{to:"prompts/"}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(ee,{name:this.state.name,prompt:this.state.prompt,handleSubmit:this.handleSubmit,handleChange:this.handleChange})})}}]),a}(n.Component),ae=Object(h.f)(te),ne=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setUser=function(e){return n.setState({user:e})},n.clearUser=function(){return n.setState({user:null})},n.deleteAlert=function(e){n.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},n.msgAlert=function(e){var t=e.heading,a=e.message,s=e.variant,r=Object(j.a)();n.setState((function(e){return{msgAlerts:[].concat(Object(o.a)(e.msgAlerts),[{heading:t,message:a,variant:s,id:r}])}}))},n.state={user:null,msgAlerts:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.msgAlerts,s=t.user;return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(A,{user:s}),a.map((function(t){return Object(p.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("div",{children:["Welcome",Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(h.b,{path:"/sign-up",render:function(){return Object(p.jsx)(q,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(h.b,{path:"/sign-in",render:function(){return Object(p.jsx)(H,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(g,{user:s,path:"/sign-out",render:function(){return Object(p.jsx)(B,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(p.jsx)(g,{user:s,path:"/change-password",render:function(){return Object(p.jsx)($,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/create-story",render:function(){return Object(p.jsx)(K,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/create-prompt",render:function(){return Object(p.jsx)(ae,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/show-stories",render:function(){return Object(p.jsx)(X,{msgAlert:e.msgAlert,user:s})}})]})]})]})}}]),a}(n.Component),se=Object(p.jsx)(y.a,{basename:"/WhatsYourStory",children:Object(p.jsx)(ne,{})});c.a.render(se,document.getElementById("root"))},79:function(e,t,a){},89:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.a7c10ff7.chunk.js.map