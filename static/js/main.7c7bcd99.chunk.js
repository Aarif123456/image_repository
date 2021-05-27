(this["webpackJsonpshopify-image-repository"]=this["webpackJsonpshopify-image-repository"]||[]).push([[0],{179:function(e){e.exports=JSON.parse('{"DragZone.acceptedPrompt":"Your file has been added!","DragZone.dragPrompt":"Drag \'n\' drop some files here, or click to select files","DragZone.fileTypePrompt":"Only images will be accepted","DragZone.initialDragPrompt":"Try dragging a file here!","DragZone.rejectedPrompt":"This file is not authorized","Error.404.errorBody":"Error 404","Error.404.greeting":"Hello!","Error.404.message":"Oh no it looks we lost you. Please go to the home page and try again","Error.processingError":"Processing Error: {errorMessage}","Error.retrieveError":" <b>Error</b>: We encountered an error while retrieving data:<em>{errorMessage}</em> {breakingLine} {breakingLine} Try refreshing the page, and please contact our team if this issue persists.","FileManagement.clear":"Clear","FileManagement.delete":"delete","FileManagement.download":"download","FileManagement.someFileFailedTitle":"There were some problems","FileManagement.upload":"Upload","FileManagement.uploadedFailed":"None of your files were uploaded :(","FileManagement.uploadedFailureInfo":"{filename}: Failed to upload file because \\"{errorMessage}\\"","FileManagement.uploadedSuccessfully":"All your files were uploaded successfully!","Footer.copyright":"Copyright \xa9","Gallery.Table.checkboxLabel":"select all files","Gallery.Table.fileID":"ID","Gallery.Table.fileName":"Name","Gallery.Table.filePath":"Folder","Gallery.Table.fileSize":"Size","Gallery.Table.selected":"{numSelected} selected","Gallery.Table.title":"Gallery Table","Gallery.Table.uploaded":"Uploaded","UserManagement.alreadyRegistered":"Already have an account? Sign in","UserManagement.confirmPassword":"Confirm Password","UserManagement.email":"Email Address","UserManagement.firstName":"First Name","UserManagement.forgotPassword":"Forgot password?","UserManagement.lastName":"Last Name","UserManagement.login":"Sign In","UserManagement.notRegistered":"Don\'t have an account? Sign Up","UserManagement.password":"Password","UserManagement.rememberMe":"Remember me","UserManagement.requiredConfirmPassword":"You need to re-enter your password","UserManagement.requiredEmail":"Email is required","UserManagement.requiredFirstName":"You need to enter your first name","UserManagement.requiredLastName":"You need to enter your last name","UserManagement.requiredPassword":"Password is required","UserManagement.signup":"Sign Up","UserManagement.signupSuccess":"You have successfully created an account !","UserManagement.validConfirmPassword":"Please make sure the passwords match","UserManagement.validEmail":"Enter a valid email","UserManagement.validPassword":"Password should be of minimum 8 characters length","Website.name":"Image Repository"}')},327:function(e,a,r){},328:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r(49),i=r(21),s=r(171),o=r(164),c=r(2);function l(e){var a=e.SuccessComponent,r=e.ErrorComponent,t=void 0===r?D:r,n=e.LoadingComponent,i=void 0===n?f:n,s=e.data,l=e.isLoading,d=e.error,j=Object(o.a)();return{AjaxComponent:function(){if(null===d||void 0===d?void 0:d.error)return Object(c.jsx)(t,{errorMessage:null===d||void 0===d?void 0:d.message});if(l)return Object(c.jsx)(i,{});if(void 0===s)return Object(c.jsx)("div",{});try{return Object(c.jsx)(a,{data:s})}catch(d){var e="Unknown error";if(void 0!==d){var r,n={errorMessage:null!==(r=d.message)&&void 0!==r?r:""};e=j.formatMessage({id:"Error.processingError"},n)}return Object(c.jsx)(t,{errorMessage:e})}}}}var d=r(165);var j="https://arif115.myweb.cs.uwindsor.ca/imagerepository/src/api/",u=r.n(d).a.create({withCredentials:!0,baseURL:j}),m=r(367),b=r(365),g=Object(b.a)({progress:{display:function(e){return e.inline?"default":"block"},margin:function(e){return e.inline?"0":"auto"}}}),f=function(e){var a=e.inline,r=e.size,t=g({inline:a});return Object(c.jsx)(m.a,{className:t.progress,size:r||40})},O=r(18),p=r(395),h=function(e){var a=e.id,r=e.name,t=e.autoCompleteName,n=e.labelTranslatorId,i=e.inputProps,s=e.autoFocus,l=e.type,d=e.helperText,j=Object(o.a)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p.a,{id:a,autoComplete:t,name:r,variant:"outlined",required:!0,fullWidth:!0,label:j.formatMessage({id:n}),autoFocus:s,type:void 0!==l?l:"text",helperText:d,InputProps:Object(O.a)({},i)})})},x=r(374),v=r(375),M=function(e){var a=e.to,r=e.labelTranslatorId,t=e.linkProps;return Object(c.jsx)(c.Fragment,{children:a&&Object(c.jsx)(x.a,Object(O.a)(Object(O.a)({},t),{},{component:n.b,to:a,children:Object(c.jsx)(v.a,{id:r})}))})},y=function(e){return Object(c.jsx)("b",{children:e})},w=function(e){return Object(c.jsx)("em",{children:e})},C=function(e){var a=e.type,r=e.className,t=e.errorMessage,n=e.id,i=e.defaultMessage,s=e.description;return Object(c.jsx)(W,{type:a,className:r,children:Object(c.jsx)(v.a,{id:n,defaultMessage:i,description:s,values:{breakingLine:Object(c.jsx)("br",{}),b:y,em:w,i:w,errorMessage:null!==t&&void 0!==t?t:"Something went wrong :("}})})},N=r(181),P=r(15),S=function(e){var a=e.index,r=e.imageFile,n=e.imageTitle,i=Object(t.useState)(""),s=Object(P.a)(i,2),o=s[0],l=s[1],d=new FileReader;return d.addEventListener("load",(function(){l(d.result)}),!1),d.readAsDataURL(r),Object(c.jsx)("img",{src:o,alt:n,height:200,width:200},"image.".concat(a))},k={width:"100%",height:"auto",borderWidth:2,borderColor:"rgb(102, 102, 102)",borderStyle:"dashed",borderRadius:5},U={borderColor:"#2196f3"},F={borderColor:"#00e676"},T={borderColor:"#ff1744"},I=function(e){var a=e.onDropHandler,r=e.files,n=Object(N.a)({accept:"image/*",onDrop:a}),i=n.getRootProps,s=n.getInputProps,o=n.isDragActive,l=n.isDragAccept,d=n.isDragReject,j=Object(t.useMemo)((function(){return Object(O.a)(Object(O.a)(Object(O.a)(Object(O.a)({},k),o?U:{}),l?F:{}),d?T:{})}),[o,d,l]);return Object(c.jsxs)("div",Object(O.a)(Object(O.a)({},i({className:"dropzone",style:j})),{},{children:[Object(c.jsx)("input",Object(O.a)({},s())),Object(c.jsx)("p",{children:Object(c.jsx)(v.a,{id:"DragZone.dragPrompt"})}),o&&Object(c.jsx)("p",{children:Object(c.jsx)(v.a,{id:"DragZone.acceptedPrompt"})}),d&&Object(c.jsx)("p",{children:Object(c.jsx)(v.a,{id:"DragZone.rejectedPrompt"})}),0===(null!==r&&void 0!==r?r:[]).length&&Object(c.jsx)("p",{children:Object(c.jsx)(v.a,{id:"DragZone.initialDragPrompt"})}),(null!==r&&void 0!==r?r:[]).map((function(e,a){return Object(c.jsx)(S,{index:a,imageFile:e,imageTitle:"Title.".concat(a)},"Image.".concat(a))})),Object(c.jsx)("em",{children:Object(c.jsx)(v.a,{id:"DragZone.fileTypePrompt"})})]}))},D=function(e){var a=e.className,r=e.errorMessage,t=e.defaultMessage,n=e.description;return Object(c.jsx)(C,{type:"error",id:"Error.retrieveError",className:a,errorMessage:r,defaultMessage:t,description:n})},E=function(e){var a=e.errorMessage;return void 0!==a?Object(c.jsxs)("div",{children:[" ",a," "]}):Object(c.jsx)("div",{})},B=r(105);function L(e){var a=Object(t.useState)(void 0),r=Object(P.a)(a,2),n=r[0],i=r[1],s=Object(t.useState)(!1),o=Object(P.a)(s,2),c=o[0],l=o[1],d=Object(t.useState)(),j=Object(P.a)(d,2),m=j[0],b=j[1];return{error:n,isLoading:c,data:m,ajax:function(a){return function(e,a,r,t,n){a(!0),u.post(e,n).then((function(e){var n=e.data;a(!1),r(n),n&&"error"in n&&n.error&&t(n)})).catch((function(e){if(void 0!==e){var r,n={error:!0,message:null!==(r=null===e||void 0===e?void 0:e.message)&&void 0!==r?r:"Unknown error"};t(n),a(!1)}}))}(e,l,b,i,a)}}}var q=r(184),G=(r(391),r(373)),R=r(4),A=Object(b.a)({default:{padding:"15px"},error:{backgroundColor:"#f2dede",color:"#a94442"},warning:{backgroundColor:"#fcf8e3",color:"#8a6d3b"}}),z=function(e,a){switch(a){case"error":return e.error;case"warning":return e.warning}},W=function(e){var a=e.children,r=e.className,t=e.type,n=A();return Object(c.jsx)(G.a,{className:Object(R.a)(n.default,z(n,t),r),children:a})},Z=function(e){var a=e.error;return Object(c.jsxs)(W,{type:"error",children:[Object(c.jsx)("b",{children:"Error"}),": An error occurred while rendering a component: ",Object(c.jsx)("i",{children:a.message}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Try refreshing the page, and please contact our team if this issue persists."]})},H=function(e,a){console.error("ComponentStack:".concat(a.componentStack))},V=function(e){var a=e.children;return Object(c.jsx)(s.ErrorBoundary,{FallbackComponent:Z,onError:H,children:a})},Y=function(){return Object(c.jsx)(V,{children:Object(c.jsxs)(W,{type:"error",children:[Object(c.jsx)(q.a,{variant:"h5",children:Object(c.jsx)(v.a,{id:"Error.404.greeting"})}),Object(c.jsx)(q.a,{variant:"h6",children:Object(c.jsx)(v.a,{id:"Error.404.message"})}),Object(c.jsx)(q.a,{variant:"body2",children:Object(c.jsx)(v.a,{id:"Error.404.errorBody"})})]})})},J=function(){var e=ae();return Object(c.jsx)(V,{children:Object(c.jsx)("div",{className:e.backgroundContainer,children:Object(c.jsx)(X,{})})})},K=r(376),Q=r(377),X=function(){var e=ee();return Object(c.jsx)(K.a,{container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",className:e.mainGrid,children:Object(c.jsx)(K.a,{item:!0,xs:3,children:Object(c.jsxs)(Q.a,{orientation:"vertical",color:"primary",variant:"contained",fullWidth:!0,"aria-label":"vertical landing page button group",className:e.mainButtons,children:[Object(c.jsx)(ne,{}),Object(c.jsx)(te,{})]})})})},_=r(398),$=r.p+"static/media/space.32812815.jpg",ee=Object(b.a)((function(){return Object(_.a)({mainGrid:{minHeight:"100vh"},mainButtons:{minWidth:"30%"}})})),ae=Object(b.a)((function(){return Object(_.a)({backgroundContainer:{backgroundImage:"url(".concat($,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"100vh"}})})),re=r(332),te=function(e){var a=Object(i.f)();return Object(c.jsxs)(re.a,Object(O.a)(Object(O.a)({onClick:function(){a.push("/signup")}},e),{},{children:[" ",Object(c.jsx)(v.a,{id:"UserManagement.signup"})]}))},ne=function(e){var a=Object(i.f)();return Object(c.jsx)(re.a,Object(O.a)(Object(O.a)({onClick:function(){a.push("/login")}},e),{},{children:Object(c.jsx)(v.a,{id:"UserManagement.login"})}))},ie=r(36);var se=r(400),oe=r(378),ce=r(396),le=r(72),de=function(){var e,a=je(),r=Object(o.a)(),t=Object(i.f)(),n=function(e){return ie.b({email:ie.d().email(e.formatMessage({id:"UserManagement.validEmail"})).required(e.formatMessage({id:"UserManagement.requiredEmail"})),password:ie.d().required(e.formatMessage({id:"UserManagement.requiredPassword"})),remember:ie.a()}).defined()}(r),s=Object(le.a)({initialValues:n.cast({email:"",password:"",remember:!1}),validationSchema:n,onSubmit:function(e){u(e)}}),l=L("/UserManagement/login"),d=l.data,j=l.isLoading,u=l.ajax;void 0!==d&&(d.error||t.push("/gallery"));return j?Object(c.jsx)(se.a,{className:a.backdrop,open:!0,children:Object(c.jsx)(f,{})}):Object(c.jsxs)("div",{className:a.paper,children:[Object(c.jsx)(Oe,{}),Object(c.jsxs)("form",{className:a.form,onSubmit:s.handleSubmit,noValidate:!0,children:[Object(c.jsx)(h,{id:"email",labelTranslatorId:"UserManagement.email",name:"email",type:"email",autoCompleteName:"email",helperText:s.touched.email&&s.errors.email,inputProps:{value:s.values.email,onChange:s.handleChange,error:s.touched.email&&Boolean(s.errors.email)}}),Object(c.jsx)(h,{name:"password",labelTranslatorId:"UserManagement.password",type:"password",id:"password",autoCompleteName:"password",helperText:s.touched.password&&s.errors.password,inputProps:{value:s.values.password,onChange:s.handleChange,error:s.touched.password&&Boolean(s.errors.password)}}),Object(c.jsx)(oe.a,{control:Object(c.jsx)(ce.a,{value:s.values.remember,color:"primary",onChange:s.handleChange}),name:"remember",label:r.formatMessage({id:"UserManagement.rememberMe"})}),Object(c.jsx)(he,{}),Object(c.jsxs)(K.a,{container:!0,justify:"flex-end",children:[Object(c.jsx)(K.a,{item:!0,xs:!0,children:Object(c.jsx)(M,{to:"/forgotPassword",linkProps:{variant:"body2"},labelTranslatorId:"UserManagement.forgotPassword"})}),Object(c.jsx)(K.a,{item:!0,children:Object(c.jsx)(M,{to:"/signUp",linkProps:{variant:"body2"},labelTranslatorId:"UserManagement.notRegistered"})})]}),Object(c.jsx)(K.a,{container:!0,justify:"flex-start",children:Object(c.jsx)(pe,{message:null!==(e=null===d||void 0===d?void 0:d.message)&&void 0!==e?e:""})})]})]})},je=Object(b.a)((function(e){return Object(_.a)({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})})),ue=Object(b.a)((function(e){return Object(_.a)({avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}})})),me=Object(b.a)((function(e){return Object(_.a)({submit:{margin:e.spacing(3,0,2)}})})),be=r(401),ge=r(101),fe=r.n(ge),Oe=function(){var e=ue();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(be.a,{className:e.avatar,children:Object(c.jsx)(fe.a,{})}),Object(c.jsx)(q.a,{component:"h1",variant:"h5",children:Object(c.jsx)(v.a,{id:"UserManagement.login"})})]})},pe=function(e){var a=e.message;return Object(c.jsxs)("div",{children:[" ",a," "]})},he=function(){var e=me();return Object(c.jsx)(re.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:Object(c.jsx)(v.a,{id:"UserManagement.login"})})},xe=r(379),ve=function(){return Object(c.jsx)(V,{children:Object(c.jsx)(xe.a,{component:"main",maxWidth:"xs",children:Object(c.jsx)(de,{})})})};var Me=function(){var e=ye(),a=Object(o.a)(),r=Object(i.f)(),t=function(e){return ie.b({email:ie.d().email(e.formatMessage({id:"UserManagement.validEmail"})).required(e.formatMessage({id:"UserManagement.requiredEmail"})),password:ie.d().min(8,e.formatMessage({id:"UserManagement.validPassword"})).required(e.formatMessage({id:"UserManagement.requiredPassword"})),confirmPassword:ie.d().oneOf([ie.c("password"),null],e.formatMessage({id:"UserManagement.validConfirmPassword"})).required(e.formatMessage({id:"UserManagement.requiredConfirmPassword"})),firstName:ie.d().required(e.formatMessage({id:"UserManagement.requiredFirstName"})),lastName:ie.d().required(e.formatMessage({id:"UserManagement.requiredLastName"}))}).defined()}(a),n=Object(le.a)({initialValues:t.cast({email:"",password:"",confirmPassword:"",firstName:"",lastName:""}),validationSchema:t,onSubmit:function(e){j&&n.isSubmitting||m(e)}}),s=L("/UserManagement/register"),d=s.data,j=s.isLoading,u=s.error,m=s.ajax,b=l({SuccessComponent:Pe,ErrorComponent:E,data:d,isLoading:j,error:u}).AjaxComponent;void 0!==d&&(d.id>0&&r.push("login"));return Object(c.jsxs)("div",{className:e.paper,children:[Object(c.jsx)(Ne,{}),Object(c.jsxs)("form",{className:e.form,onSubmit:n.handleSubmit,noValidate:!0,children:[Object(c.jsxs)(K.a,{container:!0,spacing:2,children:[Object(c.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h,{autoCompleteName:"firstName",name:"firstName",id:"firstName",labelTranslatorId:"UserManagement.firstName",autoFocus:!0,helperText:n.touched.firstName&&n.errors.firstName,inputProps:{value:n.values.firstName,onChange:n.handleChange,error:n.touched.firstName&&Boolean(n.errors.firstName)}})}),Object(c.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h,{id:"lastName",labelTranslatorId:"UserManagement.lastName",name:"lastName",autoCompleteName:"lname",helperText:n.touched.lastName&&n.errors.lastName,inputProps:{value:n.values.lastName,onChange:n.handleChange,error:n.touched.lastName&&Boolean(n.errors.lastName)}})}),Object(c.jsx)(K.a,{item:!0,xs:12,children:Object(c.jsx)(h,{id:"email",labelTranslatorId:"UserManagement.email",name:"email",type:"email",autoCompleteName:"email",helperText:n.touched.email&&n.errors.email,inputProps:{value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email)}})}),Object(c.jsx)(K.a,{item:!0,xs:12,children:Object(c.jsx)(h,{name:"password",labelTranslatorId:"UserManagement.password",type:"password",id:"password",autoCompleteName:"password",helperText:n.touched.password&&n.errors.password,inputProps:{value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password)}})}),Object(c.jsx)(K.a,{item:!0,xs:12,children:Object(c.jsx)(h,{name:"confirmPassword",labelTranslatorId:"UserManagement.confirmPassword",type:"password",id:"confirmPassword",autoCompleteName:"confirmPassword",helperText:n.touched.confirmPassword&&n.errors.confirmPassword,inputProps:{value:n.values.confirmPassword,onChange:n.handleChange,error:n.touched.confirmPassword&&Boolean(n.errors.confirmPassword)}})})]}),Object(c.jsx)(Se,{}),Object(c.jsx)(K.a,{container:!0,justify:"flex-end",children:Object(c.jsx)(K.a,{item:!0,children:Object(c.jsx)(M,{to:"/login",linkProps:{variant:"body2"},labelTranslatorId:"UserManagement.alreadyRegistered"})})}),Object(c.jsx)(K.a,{container:!0,justify:"flex-start",children:Object(c.jsx)(b,{})})]})]})},ye=Object(b.a)((function(e){return Object(_.a)({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)}})})),we=Object(b.a)((function(e){return Object(_.a)({avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}})})),Ce=Object(b.a)((function(e){return Object(_.a)({submit:{margin:e.spacing(3,0,2)}})})),Ne=function(){var e=we();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(be.a,{className:e.avatar,children:Object(c.jsx)(fe.a,{})}),Object(c.jsx)(q.a,{component:"h1",variant:"h5",children:Object(c.jsx)(v.a,{id:"UserManagement.signup"})})]})},Pe=function(e){var a=e.data;if(void 0!==a){if("id"in a&&void 0!==a.id)return Object(c.jsx)(v.a,{id:"UserManagement.signupSuccess"});if("message"in a&&void 0!==a.message)return Object(c.jsxs)("div",{children:[" ",a.message," "]})}return Object(c.jsx)("div",{})},Se=function(){var e=Ce();return Object(c.jsx)(re.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:Object(c.jsx)(v.a,{id:"UserManagement.signup"})})},ke=function(){return Object(c.jsx)(V,{children:Object(c.jsx)(xe.a,{component:"main",maxWidth:"xs",children:Object(c.jsx)(Me,{})})})},Ue=r(382),Fe=r(383),Te=r(384),Ie=r(380),De=r(381),Ee=r(393),Be=r(386),Le=r(333),qe=r(102),Ge=r.n(qe),Re=r(177),Ae=r.n(Re),ze=function(e){var a=e.fileID,r=e.fileName,t=Object(o.a)();return Object(c.jsx)(Le.a,{onClick:function(){var e=document.createElement("a");e.href="".concat(j,"/FileManagement/image?download=true&fileId=").concat(a),e.setAttribute("download",r),e.click()},"aria-label":t.formatMessage({id:"FileManagement.download"}),children:Object(c.jsx)(Ae.a,{})})},We=function(e){var a=e.fileID,r=e.fileName,t=function(e){var a,r=Object(o.a)(),t=e.fileID,n=L("/FileManagement/delete?fileId=".concat(t)),i=n.data,s=n.isLoading,l=n.ajax,d=function(){l(),Ma()};return{deleted:null!==(a=null===i||void 0===i?void 0:i.error)&&void 0!==a&&a,DeleteButton:function(){return Object(c.jsx)(Le.a,{onClick:d,disabled:s,"aria-label":r.formatMessage({id:"FileManagement.delete"}),children:Object(c.jsx)(Ge.a,{})})}}}({fileID:a}),n=t.deleted,i=t.DeleteButton;return Object(c.jsxs)(Q.a,{children:[!n&&Object(c.jsx)(i,{}),Object(c.jsx)(ze,{fileID:a,fileName:r})]})},Ze=r(103);function He(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var r=1024,t=a<0?0:a,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(r));return"".concat(parseFloat((e/Math.pow(r,i)).toFixed(t))," ").concat(n[i])}var Ve=function(e){var a,r=e.handleClick,t=e.isItemSelected,n=e.labelId,i=e.row;return Object(c.jsxs)(Ie.a,{hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,children:[Object(c.jsx)(De.a,{padding:"checkbox",onClick:function(e){return r(e,i.fileID)},children:Object(c.jsx)(ce.a,{checked:t,inputProps:{"aria-labelledby":n}})}),Object(c.jsx)(De.a,{align:"left",padding:"none",children:i.fileName}),Object(c.jsx)(De.a,{align:"left",padding:"none",children:He(i.fileSize)}),Object(c.jsx)(De.a,{align:"left",padding:"none",children:i.filePath}),Object(c.jsx)(De.a,{align:"left",padding:"none",children:(a=i.uploaded,a.toLocaleString(Ze.DateTime.DATETIME_FULL))}),Object(c.jsx)(De.a,{align:"left",padding:"none",children:Object(c.jsx)(We,Object(O.a)({},i))})]},i.fileID)};var Ye=[{id:"fileName",numeric:!1},{id:"fileSize",numeric:!0},{id:"filePath",numeric:!1},{id:"uploaded",numeric:!1}],Je=function(e){var a=e.data,r=aa(),n=Object(o.a)(),i=Object(t.useState)("asc"),s=Object(P.a)(i,2),l=s[0],d=s[1],j=Object(t.useState)("fileName"),u=Object(P.a)(j,2),m=u[0],b=u[1],g=Object(t.useState)([]),f=Object(P.a)(g,2),O=f[0],p=f[1],h=Object(t.useState)(0),x=Object(P.a)(h,2),v=x[0],M=x[1],y=Object(t.useState)(!1),w=Object(P.a)(y,2),C=w[0],N=w[1],S=Object(t.useState)(5),k=Object(P.a)(S,2),U=k[0],F=k[1],T="error"in a?[]:a.map((function(e){return a=e.fileID,r=e.fileName,t=e.fileSize,n=e.uploaded,i=e.filePath,s=e.mime,o=e.accessID,{fileID:a,fileName:r,fileSize:t,filePath:i,uploaded:Ze.DateTime.fromSQL(n),mime:s,accessID:o};var a,r,t,n,i,s,o})),I=U-Math.min(U,T.length-v*U),D=function(e,a){var r=O.indexOf(a),t=[];-1===r?t=t.concat(O,a):0===r?t=t.concat(O.slice(1)):r===O.length-1?t=t.concat(O.slice(0,-1)):r>0&&(t=t.concat(O.slice(0,r),O.slice(r+1))),p(t)};return Object(c.jsxs)("div",{className:r.root,children:[Object(c.jsxs)(G.a,{className:r.paper,children:[Object(c.jsx)(sa,{selected:O}),Object(c.jsx)(Ue.a,{children:Object(c.jsxs)(Fe.a,{className:r.table,"aria-labelledby":"tableTitle",size:C?"small":"medium","aria-label":n.formatMessage({id:"Gallery.Table.title"}),children:[Object(c.jsx)(_e,{numSelected:O.length,onSelectAllClick:function(e){if(e.target.checked){var a=T.map((function(e){return e.fileID}));p(a)}else p([])},onRequestSort:function(e,a){d(m===a&&"asc"===l?"desc":"asc"),b(a)},order:l,orderBy:m,rowCount:T.length,headCells:Ye,intl:n}),Object(c.jsxs)(Te.a,{children:[la(T,ca(l,m)).slice(v*U,v*U+U).map((function(e,a){var r,t=(r=e.fileID,-1!==O.indexOf(r));return Object(c.jsx)(Ve,{row:e,labelId:"gallery-".concat(a),isItemSelected:t,handleClick:D},e.fileID)})),I>0&&Object(c.jsx)(Ie.a,{style:{height:(C?33:53)*I},children:Object(c.jsx)(De.a,{colSpan:6})})]})]})}),Object(c.jsx)(Ee.a,{rowsPerPageOptions:[5,10,25],component:"div",count:T.length,rowsPerPage:U,page:v,onChangePage:function(e,a){M(a)},onChangeRowsPerPage:function(e){F(parseInt(e.target.value,10)),M(0)}})]}),Object(c.jsx)(oe.a,{control:Object(c.jsx)(Be.a,{checked:C,onChange:function(e){N(e.target.checked)}}),label:"Dense padding"})]})},Ke=r(387),Qe=r(402);function Xe(e,a){return function(r){a(r,e)}}var _e=function(e){var a=e.numSelected,r=e.onRequestSort,t=e.onSelectAllClick,n=e.order,i=e.orderBy,s=e.rowCount,o=e.headCells,l=e.intl,d=ea();return Object(c.jsx)(Ke.a,{children:Object(c.jsxs)(Ie.a,{children:[Object(c.jsx)(De.a,{padding:"checkbox",children:Object(c.jsx)(ce.a,{indeterminate:a>0&&a<s,checked:s>0&&a===s,onChange:t,inputProps:{"aria-label":l.formatMessage({id:"Gallery.Table.checkboxLabel"})}})}),o.map((function(e){return Object(c.jsx)(De.a,{align:"left",padding:"none",sortDirection:i===e.id&&n,children:Object(c.jsxs)(Qe.a,{active:i===e.id,direction:i===e.id?n:"asc",onClick:Xe(e.id,r),children:[l.formatMessage({id:"Gallery.Table.".concat(e.id)}),i===e.id?Object(c.jsx)("span",{className:d.visuallyHidden,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id)}))]})})},$e=r(11),ea=Object(b.a)((function(){return Object(_.a)({visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})})),aa=Object(b.a)((function(e){return Object(_.a)({root:{width:"100%",overflowY:"auto",overflowX:"hidden"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:"100%"}})})),ra=Object(b.a)((function(e){return Object(_.a)({root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object($e.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}})})),ta=r(96),na=r(385),ia=r(403),sa=function(e){var a=e.selected,r=ra(),t=a.length;return Object(c.jsxs)(na.a,{className:Object(R.a)(r.root,Object(ta.a)({},r.highlight,t>0)),children:[t>0?Object(c.jsx)(q.a,{className:r.title,color:"inherit",variant:"subtitle1",component:"div",children:Object(c.jsx)(v.a,{id:"Gallery.Table.selected",values:{numSelected:t}})}):Object(c.jsx)(q.a,{className:r.title,variant:"h6",id:"tableTitle",component:"div",children:Object(c.jsx)(v.a,{id:"Gallery.Table.title"})}),t>0&&Object(c.jsx)(ia.a,{title:"Delete",children:Object(c.jsx)(Le.a,{"aria-label":"delete",children:Object(c.jsx)(Ge.a,{})})})]})};function oa(e,a,r){return a[r]<e[r]?-1:a[r]>e[r]?1:0}function ca(e,a){return"desc"===e?function(e,r){return oa(e,r,a)}:function(e,r){return-oa(e,r,a)}}function la(e,a){var r=e.map((function(e,a){return[e,a]}));return r.sort((function(e,r){var t=a(e[0],r[0]);return 0!==t?t:e[1]-r[1]})),r.map((function(e){return e[0]}))}var da=r(45),ja=function(){var e,a=ba(),r=function(){var e=Object(t.useState)(!1),a=Object(P.a)(e,2),r=a[0],n=a[1],i=function(e,a){"clickaway"!==a&&n(!1)};return{setOpen:n,GallerySnackbar:function(e){var a=e.data;return Object(c.jsx)(ha,{handleClose:i,data:a,open:r})}}}(),n=r.GallerySnackbar,i=r.setOpen,s=L("/FileManagement/upload"),o=s.data,d=s.isLoading,j=s.error,u=s.ajax,m=l({SuccessComponent:n,data:void 0!==o?Object.entries(o):void 0,isLoading:d,error:j}).AjaxComponent,b=Object(le.a)({initialValues:{files:[]},onSubmit:function(e){if(void 0!==e.files){for(var a=function(e){var a,r=[],t=new Map,n=Object(da.a)(e.files);try{for(n.s();!(a=n.n()).done;){var i=a.value;t.has(i.name)||(t.set(i.name,!0),r.push(i))}}catch(s){n.e(s)}finally{n.f()}return r}(e),r=new FormData,t=0;t<a.length;t++)r.append("images[]",a[t]);a.length>0&&(u(r),b.resetForm(),i(!0),Ma())}}});return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{className:a.form,onSubmit:b.handleSubmit,noValidate:!0,children:[!d&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(I,{onDropHandler:function(e){if(0!==e.length){var a=b.values.files;b.setFieldValue("files",void 0===a?e:(null!==e&&void 0!==e?e:[]).concat(a))}},files:null!==(e=b.values.files)&&void 0!==e?e:[]}),Object(c.jsx)(ma,{}),Object(c.jsx)(ua,{resetForm:b.resetForm})]}),Object(c.jsx)(m,{})]})})},ua=function(e){var a=e.resetForm;return Object(c.jsx)(re.a,{variant:"contained",color:"primary",onClick:a,children:Object(c.jsx)(v.a,{id:"FileManagement.clear"})})},ma=function(){return Object(c.jsx)(re.a,{variant:"contained",type:"submit",color:"primary",children:Object(c.jsx)(v.a,{id:"FileManagement.upload"})})},ba=Object(b.a)((function(){return Object(_.a)({input:{display:"none"}})})),ga=function(){var e=xa(),a=function(e,a){var r,n=Object(B.a)(e,(function(e){return u.get(e,{params:a}).then((function(e){return e.data}))})),i=n.data,s=n.error,o=Object(t.useState)(void 0),c=Object(P.a)(o,2),l=c[0],d=c[1];return Object(t.useEffect)((function(){s&&"message"in s?d({error:!0,message:s.message}):i&&"error"in i&&i.error&&d(i)}),[i,s]),{data:null!==(r=i)&&void 0!==r?r:void 0,isLoading:void 0===l&&void 0===i,error:l}}("FileManagement/folderImages",{filePath:""}),r=a.data,n=a.isLoading,i=a.error,s=l({SuccessComponent:Je,data:r,isLoading:n,error:i}).AjaxComponent;return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(s,{}),Object(c.jsx)(ja,{})]})},fa=r(397),Oa=r(394);function pa(e){return Object(c.jsx)(Oa.a,Object(O.a)({elevation:6,variant:"filled"},e))}var ha=function(e){var a,r=e.open,n=e.data,i=e.handleClose,s=Object(t.useState)([]),o=Object(P.a)(s,2),l=o[0],d=o[1],j=Object(t.useState)(0),u=Object(P.a)(j,2),m=u[0],b=u[1];return Object(t.useEffect)((function(){d(n.filter((function(e){var a=Object(P.a)(e,2);a[0];return a[1].error}))),b(n.filter((function(e){var a=Object(P.a)(e,2);a[0];return!a[1].error})).length)}),[n]),void 0===n||0===n.length?Object(c.jsx)("div",{}):(a=0===m?Object(c.jsxs)(pa,{severity:"error",children:[Object(c.jsx)(v.a,{id:"FileManagement.uploadedFailed"})," "]}):m===n.length?Object(c.jsxs)(pa,{severity:"success",children:[" ",Object(c.jsx)(v.a,{id:"FileManagement.uploadedSuccessfully"})]}):Object(c.jsx)(pa,{severity:"warning",children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h2",{id:"gallery-alert-title",children:[" ",Object(c.jsx)(v.a,{id:"FileManagement.someFileFailedTitle"})," "]}),l.map((function(e,a){var r,t=Object(P.a)(e,2),n=t[0],i=t[1];return Object(c.jsx)("p",{children:Object(c.jsxs)("b",{children:[Object(c.jsx)(v.a,{id:"FileManagement.uploadedFailureInfo",values:{filename:n,errorMessage:null!==(r=i.message)&&void 0!==r?r:"of an internal server error"}})," "]})},"gallery-snackbar-description ".concat(n," ").concat(a))}))]})}),Object(c.jsx)(fa.a,{open:r,autoHideDuration:6e3,onClose:i,children:a}))};var xa=Object(b.a)((function(e){return Object(_.a)({root:{"& > *":{margin:e.spacing(1)}}})})),va=function(){return Object(c.jsx)(V,{children:Object(c.jsx)(ga,{})})},Ma=function(){Object(B.b)("FileManagement/folderImages")},ya=r(180),wa=r(388),Ca=r(389),Na=r(106),Pa=r(107),Sa=Object(ya.a)({palette:{primary:{main:Na.a[900]},secondary:{main:Pa.a[500]},type:"dark"}}),ka=function(){return Object(c.jsxs)(wa.a,{theme:Sa,children:[Object(c.jsx)(Ca.a,{}),Object(c.jsx)(n.a,{hashType:"noslash",children:Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{path:"/gallery",children:Object(c.jsx)(va,{})}),Object(c.jsx)(i.a,{exact:!0,path:"/login",children:Object(c.jsx)(ve,{})}),Object(c.jsx)(i.a,{exact:!0,path:"/signup",children:Object(c.jsx)(ke,{})}),Object(c.jsx)(i.a,{exact:!0,path:"/",children:Object(c.jsx)(J,{})}),Object(c.jsx)(i.a,{children:Object(c.jsx)(Y,{})})]})})]})},Ua=r(392),Fa=r(179),Ta=(r(327),r(14)),Ia=r.n(Ta),Da=navigator.languages&&navigator.languages[0]||navigator.language,Ea=Fa,Ba=function(){return Object(c.jsx)(t.StrictMode,{children:Object(c.jsx)(Ua.a,{locale:Da,messages:Ea,children:Object(c.jsx)(ka,{})})})};Ia.a.render(Object(c.jsx)(Ba,{}),document.getElementById("root"))}},[[328,1,2]]]);
//# sourceMappingURL=main.7c7bcd99.chunk.js.map