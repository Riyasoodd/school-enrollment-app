(function(){"use strict";var e={4357:function(e,t,n){var o=n(5130),r=n(6768);const a={id:"app"};function l(e,t,n,o,l,s){const u=(0,r.g2)("LessonList"),i=(0,r.g2)("Cart");return(0,r.uX)(),(0,r.CE)("div",a,[t[0]||(t[0]=(0,r.Lk)("header",null,[(0,r.Lk)("h1",null,"School Enrollment App")],-1)),(0,r.Lk)("main",null,[(0,r.bF)(u,{lessons:l.lessons,onAddToCart:s.addToCart},null,8,["lessons","onAddToCart"]),(0,r.bF)(i,{cart:l.cart,name:l.name,phone:l.phone,onRemoveFromCart:s.removeFromCart,"onUpdate:name":s.updateName,"onUpdate:phone":s.updatePhone,onCheckout:s.handleCheckout},null,8,["cart","name","phone","onRemoveFromCart","onUpdate:name","onUpdate:phone","onCheckout"])])])}n(4114),n(8992),n(4520),n(2577);var s=n(4232);const u={class:"sort-options"},i={class:"lesson-cards"},c=["onClick"];function p(e,t,n,a,l,p){return(0,r.uX)(),(0,r.CE)("div",null,[t[7]||(t[7]=(0,r.Lk)("h2",null,"Available Lessons",-1)),(0,r.Lk)("div",u,[t[6]||(t[6]=(0,r.Lk)("label",null,"Sort by:",-1)),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.sortKey=e)},t[3]||(t[3]=[(0,r.Lk)("option",{value:"subject"},"Subject",-1),(0,r.Lk)("option",{value:"location"},"Location",-1),(0,r.Lk)("option",{value:"price"},"Price",-1),(0,r.Lk)("option",{value:"spaces"},"Availability",-1)]),512),[[o.u1,l.sortKey]]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"radio",value:"asc","onUpdate:modelValue":t[1]||(t[1]=e=>l.sortOrder=e)},null,512),[[o.XL,l.sortOrder]]),t[4]||(t[4]=(0,r.eW)(" Ascending "))]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"radio",value:"desc","onUpdate:modelValue":t[2]||(t[2]=e=>l.sortOrder=e)},null,512),[[o.XL,l.sortOrder]]),t[5]||(t[5]=(0,r.eW)(" Descending "))])]),(0,r.Lk)("div",i,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(p.sortedLessons,(t=>((0,r.uX)(),(0,r.CE)("div",{key:t.id,class:"lesson-card"},[(0,r.Lk)("h3",null,"Subject: "+(0,s.v_)(t.subject),1),(0,r.Lk)("p",null,"Location: "+(0,s.v_)(t.location),1),(0,r.Lk)("p",null,"Price: £"+(0,s.v_)(t.price),1),(0,r.Lk)("p",null,"Spaces: "+(0,s.v_)(t.spaces),1),(0,r.Lk)("button",{onClick:n=>e.$emit("add-to-cart",t)},"Add to Cart",8,c)])))),128))])])}var d={name:"LessonList",props:{lessons:{type:Array,required:!0}},data(){return{sortKey:"subject",sortOrder:"asc"}},computed:{sortedLessons(){const e=[...this.lessons].sort(((e,t)=>{let n=0;return e[this.sortKey]<t[this.sortKey]?n=-1:e[this.sortKey]>t[this.sortKey]&&(n=1),"asc"===this.sortOrder?n:-n}));return e}}},h=n(1241);const m=(0,h.A)(d,[["render",p]]);var v=m;const k=["onClick"],f={key:0},b={key:1};function L(e,t,n,a,l,u){return(0,r.uX)(),(0,r.CE)("div",null,[t[7]||(t[7]=(0,r.Lk)("h2",null,"Shopping Cart",-1)),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.cart,(t=>((0,r.uX)(),(0,r.CE)("li",{key:t.id},[(0,r.eW)((0,s.v_)(t.subject)+" - £"+(0,s.v_)(t.price)+" (Quantity: "+(0,s.v_)(t.quantity)+") ",1),(0,r.Lk)("button",{onClick:n=>e.$emit("remove-from-cart",t.id)},"Remove",8,k)])))),128))]),0===n.cart.length?((0,r.uX)(),(0,r.CE)("p",f,"Your cart is empty.")):(0,r.Q3)("",!0),n.cart.length>0?((0,r.uX)(),(0,r.CE)("div",b,[(0,r.Lk)("label",null,[t[5]||(t[5]=(0,r.eW)(" Name: ")),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.localName=e),onInput:t[1]||(t[1]=t=>e.$emit("update:name",l.localName)),placeholder:"Enter your name"},null,544),[[o.Jo,l.localName]])]),(0,r.Lk)("label",null,[t[6]||(t[6]=(0,r.eW)(" Phone: ")),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>l.localPhone=e),onInput:t[3]||(t[3]=t=>e.$emit("update:phone",l.localPhone)),placeholder:"Enter your phone number"},null,544),[[o.Jo,l.localPhone]])]),(0,r.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>u.checkout&&u.checkout(...e))},"Checkout")])):(0,r.Q3)("",!0)])}var y={name:"Cart",props:{cart:{type:Array,required:!0},name:{type:String,required:!0},phone:{type:String,required:!0}},data(){return{localName:this.name,localPhone:this.phone}},methods:{checkout(){this.$emit("checkout")}}};const C=(0,h.A)(y,[["render",L]]);var g=C,O={name:"App",components:{LessonList:v,Cart:g},data(){return{lessons:[{id:1,subject:"Art",location:"London",price:9,spaces:6},{id:2,subject:"English",location:"Bristol",price:8,spaces:10},{id:3,subject:"Math",location:"London",price:10,spaces:5},{id:4,subject:"Music",location:"Oxford",price:7,spaces:8},{id:5,subject:"Science",location:"New York",price:15,spaces:2}],cart:[],name:"",phone:""}},methods:{addToCart(e){const t=this.cart.find((t=>t.id===e.id));t?t.quantity+=1:this.cart.push({...e,quantity:1})},removeFromCart(e){this.cart=this.cart.filter((t=>t.id!==e))},updateName(e){this.name=e},updatePhone(e){this.phone=e},handleCheckout(){this.name&&this.phone?(alert(`Thank you, ${this.name}! Your enrollment has been confirmed.`),this.cart=[],this.name="",this.phone=""):alert("Please provide your name and phone number to checkout.")}}};const j=(0,h.A)(O,[["render",l]]);var E=j,A=n(1387);const _=[{path:"/",name:"Home",component:v},{path:"/cart",name:"Cart",component:g}],P=(0,A.aE)({history:(0,A.LA)("/"),routes:_});var X=P;n(323);(0,o.Ef)(E).use(X).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,a<l&&(l=a));if(s){e.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,l=o[0],s=o[1],u=o[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(t&&t(o);i<l.length;i++)a=l[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkschool_enrollment_app"]=self["webpackChunkschool_enrollment_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(4357)}));o=n.O(o)})();
//# sourceMappingURL=app.158a2cbe.js.map