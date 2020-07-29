(this["webpackJsonpreact-iygufs"]=this["webpackJsonpreact-iygufs"]||[]).push([[0],{224:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},241:function(e,t,a){e.exports=a.p+"static/media/blue-marker.bc8cc4ea.svg"},247:function(e,t,a){e.exports=a(534)},252:function(e,t,a){},533:function(e,t,a){},534:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(9),s=a.n(r),i=(a(252),a(15)),l=a(16),c=a(18),u=a(17),m=a(224),d=a.n(m),p=a(10),g=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),n.a.createElement("span",{className:"App-title"},"Around"),this.props.isLoggedIn?n.a.createElement("a",{className:"logout",onClick:this.props.handleLogout},n.a.createElement(p.a,{type:"logout"})," ","Logout"):null)}}]),a}(n.a.Component),h=a(545),f=a(541),v=a(542),b=a(50),y=a(535),E="https://around-179500.appspot.com",w="TOKEN_KEY",O={enableHighAccuracy:!0,maximumAge:3e5,timeout:27e3},L="video",S="unknown",k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={confirmDirty:!1,autoCompleteResult:[]},e.handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields((function(t,a){t||(console.log("Received values of form: ",a),fetch("".concat(E,"/signup"),{method:"POST",body:JSON.stringify({username:a.username,password:a.password})}).then((function(e){if(e.ok)return e.text();throw new Error(e.statusText)})).then((function(t){console.log(t),h.a.success("Registration succeed!"),e.props.history.push("/login")})).catch((function(e){console.error(e),h.a.error("Registration failed.")})))}))},e.handleConfirmBlur=function(t){var a=t.target.value;e.setState({confirmDirty:e.state.confirmDirty||!!a})},e.compareToFirstPassword=function(t,a,o){var n=e.props.form;a&&a!==n.getFieldValue("password")?o("Two passwords that you enter is inconsistent!"):o()},e.validateToNextPassword=function(t,a,o){var n=e.props.form;a&&e.state.confirmDirty&&n.validateFields(["confirm"],{force:!0}),o()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};return n.a.createElement(f.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit,className:"register"}),n.a.createElement(f.a.Item,{label:"Username"},e("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(v.a,null))),n.a.createElement(f.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(n.a.createElement(v.a.Password,null))),n.a.createElement(f.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(n.a.createElement(v.a.Password,{onBlur:this.handleConfirmBlur}))),n.a.createElement(f.a.Item,t,n.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Register"),n.a.createElement("p",null,"I already have an account, go back to ",n.a.createElement(y.a,{to:"/login"},"login"))))}}]),a}(n.a.Component),P=f.a.create({name:"register"})(k),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields((function(t,a){t||(console.log("Received values of form: ",a),fetch("".concat(E,"/login"),{method:"POST",body:JSON.stringify({username:a.username,password:a.password})}).then((function(e){if(e.ok)return e.text();throw new Error(e.stateText)})).then((function(t){console.log(t),e.props.handleLoginSucceed(t),h.a.success("Login succeed!")})).catch((function(e){console.error(e),h.a.error("Login failed.")})))}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(f.a,{onSubmit:this.handleSubmit,className:"login-form"},n.a.createElement(f.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),n.a.createElement(f.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),n.a.createElement(f.a.Item,null,n.a.createElement(b.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",n.a.createElement(y.a,{to:"/register"},"register now!")))}}]),a}(n.a.Component),C=f.a.create({name:"normal_login"})(j),I=a(540),N=a(536),T=a(537),F=a(538),x=a(544),A=a(148),M=a(234),B=a.n(M),D=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.images.map((function(e){return Object(A.a)(Object(A.a)({},e),{},{customOverlay:n.a.createElement("div",{style:R},n.a.createElement("div",null,"".concat(e.user,": ").concat(e.caption)))})}));return n.a.createElement("div",{style:G},n.a.createElement(B.a,{backdropClosesModal:!0,images:e,enableImageSelection:!1}))}}]),a}(o.Component),G={display:"block",minHeight:"1px",width:"100%",border:"1px solid #ddd",overflow:"auto"},R={backgroundColor:"rgba(0, 0, 0, 0.8)",maxHeight:"240px",overflow:"hidden",position:"absolute",bottom:"0",width:"100%",color:"white",padding:"2px",fontSize:"90%"},W=a(543),q=a(539),z=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},e.beforeUpload=function(){return!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return n.a.createElement(f.a,t,n.a.createElement(f.a.Item,{label:"Message"},e("message",{rules:[{required:!0,message:"Please input message."}]})(n.a.createElement(v.a,null))),n.a.createElement(f.a.Item,{label:"Image/Video"},n.a.createElement("div",{className:"dropbox"},e("image",{valuePropName:"fileList",getValueFromEvent:this.normFile,rules:[{required:!0,message:"Please select an image."}]})(n.a.createElement(q.a.Dragger,{name:"files",beforeUpload:this.beforeUpload},n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(p.a,{type:"inbox"})),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload."))))))}}]),a}(n.a.Component),J=f.a.create()(z),U=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={visible:!1,confirmLoading:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(){e.form.validateFields((function(t,a){if(console.log(a),!t){var o=localStorage.getItem(w),n=JSON.parse(localStorage.getItem("POS_KEY")),r=n.lat,s=n.lon,i=new FormData;i.set("lat",r+.02*Math.random()*2-.02),i.set("lon",s+.02*Math.random()*2-.02),i.set("message",a.message),i.set("image",a.image[0].originFileObj),e.setState({confirmLoading:!0}),fetch("".concat(E,"/post"),{method:"POST",headers:{Authorization:"".concat("Bearer"," ").concat(o)},body:i}).then((function(t){if(t.ok)return e.props.loadPostsByTopic();throw new Error("Failed to create post.")})).then((function(){e.setState({visible:!1,confirmLoading:!1}),e.form.resetFields(),h.a.success("Post created successfully!")})).catch((function(t){console.error(t),h.a.error("Failed to create post."),e.setState({confirmLoading:!1})}))}}))},e.handleCancel=function(){console.log("Clicked cancel button"),e.setState({visible:!1})},e.getFormRef=function(t){e.form=t},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.confirmLoading;return n.a.createElement("div",null,n.a.createElement(b.a,{type:"primary",onClick:this.showModal},"Create New Post"),n.a.createElement(W.a,{title:"Create New Post",visible:t,onOk:this.handleOk,okText:"Create",confirmLoading:a,onCancel:this.handleCancel},n.a.createElement(J,{ref:this.getFormRef})))}}]),a}(n.a.Component),V=a(59),H=a(241),K=a.n(H),_=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isOpen:!1},e.handleToggle=function(){e.setState((function(e){return{isOpen:!e.isOpen}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.post,t=e.user,a=e.message,o=e.url,r=e.location,s=e.type,i=r.lat,l=r.lon,c="image"===s,u=c?void 0:{url:K.a,scaledSize:new window.google.maps.Size(26,41)};return n.a.createElement(V.Marker,{position:{lat:i,lng:l},onMouseOver:c?this.handleToggle:void 0,onMouseOut:c?this.handleToggle:void 0,onClick:c?void 0:this.handleToggle,icon:u},this.state.isOpen?n.a.createElement(V.InfoWindow,null,n.a.createElement("div",null,c?n.a.createElement("img",{src:o,alt:a,className:"around-marker-image"}):n.a.createElement("video",{src:o,controls:!0,className:"around-marker-video"}),n.a.createElement("p",null,"".concat(t,": ").concat(a)))):null)}}]),a}(n.a.Component),Y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).reloadMarker=function(){var t=e.getCenter(),a=e.getRadius();e.props.loadPostsByTopic(t,a)},e.getMapRef=function(t){e.map=t,window.map=t},e}return Object(l.a)(a,[{key:"getCenter",value:function(){var e=this.map.getCenter();return{lat:e.lat(),lon:e.lng()}}},{key:"getRadius",value:function(){var e=this.map.getCenter(),t=this.map.getBounds();if(e&&t){var a=t.getNorthEast(),o=new window.google.maps.LatLng(e.lat(),a.lng());return.001*window.google.maps.geometry.spherical.computeDistanceBetween(e,o)}}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("POS_KEY")),t=e.lat,a=e.lon;return n.a.createElement(V.GoogleMap,{ref:this.getMapRef,defaultZoom:11,defaultCenter:{lat:t,lng:a},onDragEnd:this.reloadMarker,onZoomChanged:this.reloadMarker},this.props.posts.map((function(e){return n.a.createElement(_,{post:e,key:e.url})})))}}]),a}(n.a.Component),Z=Object(V.withScriptjs)(Object(V.withGoogleMap)(Y)),X=I.a.TabPane,$=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoadingGeoLocation:!1,isLoadingPosts:!1,error:"",posts:[],topic:"around"},e.onSuccessLoadGeoLocation=function(t){console.log(t);var a=t.coords,o=a.latitude,n=a.longitude;localStorage.setItem("POS_KEY",JSON.stringify({lat:o,lon:n})),e.setState({isLoadingGeoLocation:!1,error:""}),e.loadNearbyPosts()},e.onFailedLoadGeoLocation=function(){e.setState({isLoadingGeoLocation:!1,error:"Failed to load geo location."})},e.loadNearbyPosts=function(t,a){var o=t||JSON.parse(localStorage.getItem("POS_KEY")),n=o.lat,r=o.lon,s=a||20,i=localStorage.getItem(w);return e.setState({isLoadingPosts:!0,error:""}),fetch("".concat(E,"/search?lat=").concat(n,"&lon=").concat(r,"&range=").concat(s),{method:"GET",headers:{Authorization:"".concat("Bearer"," ").concat(i)}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load posts.")})).then((function(t){console.log(t),e.setState({posts:t||[],isLoadingPosts:!1})})).catch((function(t){console.error(t),e.setState({isLoadingPosts:!1,error:t.message})}))},e.handleTopicChange=function(t){var a=t.target.value;e.setState({topic:a}),"around"===a?e.loadNearbyPosts():e.loadFacesAroundTheWolrd()},e.loadFacesAroundTheWolrd=function(){var t=localStorage.getItem(w);return e.setState({isLoadingPosts:!0,error:""}),fetch("".concat(E,"/cluster?term=face"),{method:"GET",headers:{Authorization:"".concat("Bearer"," ").concat(t)}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load posts")})).then((function(t){console.log(t),e.setState({posts:t||[],isLoadingPosts:!1})})).catch((function(t){console.error(t),e.setState({isLoadingPosts:!1,error:t.message})}))},e.loadPostsByTopic=function(t,a){return"around"===e.state.topic?e.loadNearbyPosts(t,a):e.loadFacesAroundTheWolrd()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){"geolocation"in navigator?(this.setState({isLoadingGeoLocation:!0,error:""}),navigator.geolocation.getCurrentPosition(this.onSuccessLoadGeoLocation,this.onFailedLoadGeoLocation,O)):this.setState({error:"Geolocation is not supported."})}},{key:"renderImagePosts",value:function(){var e=this.state.posts.filter((function(e){return"image"===e.type})).map((function(e){return{user:e.user,src:e.url,thumbnail:e.url,caption:e.message,thumbnailWidth:400,thumbnailHeight:300}}));return n.a.createElement(D,{images:e})}},{key:"renderVideoPosts",value:function(){var e=this.state.posts;return n.a.createElement(N.a,{gutter:30},e.filter((function(e){return[L,S].includes(e.type)})).map((function(e){return n.a.createElement(T.a,{span:6,key:e.url},n.a.createElement("video",{src:e.url,controls:!0,className:"video-block"}),n.a.createElement("p",null,e.user,": ",e.message))})))}},{key:"renderPosts",value:function(e){var t=this.state,a=t.error,o=t.isLoadingGeoLocation,r=t.isLoadingPosts,s=t.posts;return a||(o?n.a.createElement(F.a,{tip:"Loading geo location..."}):r?n.a.createElement(F.a,{tip:"Loading posts..."}):s.length>0?"image"===e?this.renderImagePosts():this.renderVideoPosts():"No nearby posts")}},{key:"render",value:function(){var e=n.a.createElement(U,{loadPostsByTopic:this.loadPostsByTopic});return n.a.createElement("div",null,n.a.createElement(x.a.Group,{onChange:this.handleTopicChange,value:this.state.topic},n.a.createElement(x.a,{value:"around"},"Posts Around Me"),n.a.createElement(x.a,{value:"face"},"Faces Around The World")),n.a.createElement(I.a,{tabBarExtraContent:e,className:"main-tabs"},n.a.createElement(X,{tab:"Image Posts",key:"1"},this.renderPosts("image")),n.a.createElement(X,{tab:"Video Posts",key:"2"},this.renderPosts(L)),n.a.createElement(X,{tab:"Map",key:"3"},n.a.createElement(Z,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyD3CEh9DXuyjozqptVB5LA-dN7MxWWkr9s&v=3.exp&libraries=geometry,drawing,places",loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"600px"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}}),posts:this.state.posts,loadPostsByTopic:this.loadPostsByTopic}))))}}]),a}(n.a.Component),Q=a(42),ee=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getLogin=function(){return e.props.isLoggedIn?n.a.createElement(Q.a,{to:"/home"}):n.a.createElement(C,{handleLoginSucceed:e.props.handleLoginSucceed})},e.getHome=function(){return e.props.isLoggedIn?n.a.createElement($,null):n.a.createElement(Q.a,{to:"/login"})},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement(Q.c,null,n.a.createElement(Q.b,{exact:!0,path:"/",render:this.getLogin}),n.a.createElement(Q.b,{path:"/login",render:this.getLogin}),n.a.createElement(Q.b,{path:"/register",component:P}),n.a.createElement(Q.b,{path:"/home",render:this.getHome}),n.a.createElement(Q.b,{render:this.getLogin})))}}]),a}(n.a.Component),te=(a(533),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoggedIn:Boolean(localStorage.getItem(w))},e.handleLoginSucceed=function(t){localStorage.setItem(w,t),e.setState({isLoggedIn:!0})},e.handleLogout=function(){localStorage.removeItem(w),e.setState({isLoggedIn:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,{handleLogout:this.handleLogout,isLoggedIn:this.state.isLoggedIn}),n.a.createElement(ee,{handleLoginSucceed:this.handleLoginSucceed,isLoggedIn:this.state.isLoggedIn}))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(546);s.a.render(n.a.createElement(ae.a,null,n.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[247,1,2]]]);
//# sourceMappingURL=main.d7f13189.chunk.js.map