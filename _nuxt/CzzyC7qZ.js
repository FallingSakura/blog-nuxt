import{_ as C}from"./CioAv7Q5.js";import{n as Y,x as c,o as _,c as y,a as v,y as z,z as A,A as R,B as N,C as b,_ as x,s as D,w as p,v as E,t as G,b as r,p as J,e as K}from"./BE-iDqcD.js";function Q(a){const e={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};return a.size!==e.size||a.x!==e.x||a.y!==e.y||a.rotate!==e.rotate||a.flipX||a.flipY}const Z={key:0,style:{display:"none"}},ee=["innerHTML"],te=["innerHTML"],j=Y({__name:"icon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:a=>[!0,!1,"horizontal","vertical","both"].includes(a)},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:void 0},listItem:{type:Boolean,default:!1},pull:{type:String,default:void 0,validator:a=>["right","left"].includes(a)},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:void 0,validator:a=>[90,180,270].includes(Number.parseInt(a,10))},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:void 0,validator:a=>["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].includes(a)},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:void 0},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:void 0},titleId:{type:String,default:void 0},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup(a){const e=a,u=c(()=>w(e.icon)),f=c(()=>w(e.mask)),l=c(()=>{if(e.transform){const t=typeof e.transform!="object"?R.transform(e.transform):e.transform;if(t&&Q(t))return M(t)}}),s=c(()=>N(u.value,{classes:k.value,title:e.title,titleId:e.titleId})),m=c(()=>N(f.value)),S=c(()=>{var n,o,i,d,h,g;const t={"aria-hidden":!0,"data-prefix":(n=s.value)==null?void 0:n.prefix,"data-icon":(o=s.value)==null?void 0:o.iconName,class:k.value,focusable:!1,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${(i=s.value)==null?void 0:i.icon[0]} ${(d=s.value)==null?void 0:d.icon[1]}`};return e.symbol&&(t.id=[(h=s.value)==null?void 0:h.prefix,"fa",(g=s.value)==null?void 0:g.iconName].join("-")),e.title&&(t["aria-labelledby"]=B.value),t}),$=c(()=>{const t=P();if(m.value){const n=e.maskId||m.value.iconName;return`<defs>
      <clipPath id="clip-${n}">
        <path fill="currentColor" d="${m.value.icon[4]}"></path>
      </clipPath>
      <mask id="mask-${n}" x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
        <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
        ${t}
      </mask>
    </defs>
    <rect fill="currentColor" clip-path="url(#clip-${n})" mask="url(#mask-${n})" x="0" y="0" width="100%" height="100%"></rect>`}return t}),k=c(()=>{const t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==void 0,[`fa-rotate-${e.rotation}`]:e.rotation!==void 0,[`fa-pull-${e.pull}`]:e.pull!==void 0,"fa-swap-opacity":e.swapOpacity,"fa-bounce":e.bounce,"fa-shake":e.shake,"fa-beat":e.beat,"fa-fade":e.fade,"fa-beat-fade":e.beatFade,"fa-spin-pulse":e.spinPulse,"fa-spin-reverse":e.spinReverse},n=Object.keys(t).map(o=>t[o]?o:null).filter(o=>o);return[b.replacementClass,...n]}),B=c(()=>b.replacementClass+"-title-"+(e.titleId||T()));function w(t){if(t){if(typeof t=="string"){const n={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"};let o=n[b.styleDefault]||"fas",i=t.replace(/\bfa-/g,"");if(i.includes(" ")){const d=i.split(/\s+/);d[0]in n&&(o=n[d[0]]),i=d[1]}return{prefix:o,iconName:i}}if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="object"&&"prefix"in t&&"iconName"in t)return t}}function M(t){var I;const o=((I=s.value)==null?void 0:I.icon[0])||512,i=t.x||0,d=t.y||0,h=t.size||0,g=t.rotate||0,F=t.flipX||0,H=t.flipY||0,L="translate(".concat(String(512/2)," 256)"),U="translate(".concat(String(i*32),", ").concat(String(d*32),") "),W="scale(".concat(String(h/16*(F?-1:1)),", ").concat(String(h/16*(H?-1:1)),") "),q="rotate(".concat(String(g)," 0 0)"),V="".concat(U," ").concat(W," ").concat(q),X="translate(".concat(String(o/2*-1)," -256)");return{outer:L,inner:V,path:X}}function T(){const t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";let n=12,o="";for(;n-- >0;)o+=t[Math.random()*62|0];return o}function P(){const t=m.value?"black":"currentColor",n=[];let o=s.value.icon[4];return Array.isArray(o)||(o=[o]),o.forEach(i=>{n.push(`<path fill="${t}"${l.value?' transform="'+l.value.path+'"':""} d="${i}"></path>`)}),l.value&&(n.unshift(`<g transform="${l.value.outer}">`,`<g transform="${l.value.inner}">`),n.push("</g>","</g>")),e.title&&n.unshift(`<title id="${B.value}">${e.title}</title>`),n.join("")}return e.icon&&!s.value&&console.info("Could not find main icon",u.value),e.mask&&!m.value&&console.info("Could not find mask icon",f.value),(t,n)=>s.value&&a.symbol?(_(),y("svg",Z,[v("symbol",z(S.value,{innerHTML:$.value}),null,16,ee)])):s.value?(_(),y("svg",z({key:1},S.value,{innerHTML:$.value}),null,16,te)):A("",!0)}}),ae={key:0,class:"ico"},ne={__name:"NavButton",props:{title:{type:String,require:!0},url:{type:String,default:"./#"},ico:{type:Boolean,default:!1}},setup(a){const e=a;return(u,f)=>{const l=C;return _(),D(l,{to:e.url,class:"nav-btn"},{default:p(()=>[e.ico?(_(),y("div",ae,[E(u.$slots,"default",{},void 0,!0)])):A("",!0),v("span",null,G(e.title),1)]),_:3},8,["to"])}}},oe=x(ne,[["__scopeId","data-v-f4b7a411"]]),se={},le={class:"search-btn active"};function ie(a,e){const u=j;return _(),y("div",le,[r(u,{icon:"search"})])}const re=x(se,[["render",ie],["__scopeId","data-v-cc43064b"]]),ce={},O=a=>(J("data-v-9d37c47f"),a=a(),K(),a),ue={class:"nav-bar"},fe=O(()=>v("img",{src:"https://cdn.jsdelivr.net/gh/FallingSakura/Source@main/img/202305211656851.webp"},null,-1)),de=O(()=>v("h2",{class:"title"},"FallingSakura",-1)),pe={class:"nav"},_e={class:"button1"};function ve(a,e){const u=C,f=j,l=oe,s=re;return _(),y("div",ue,[r(u,{class:"icon",to:"/"},{default:p(()=>[fe,de]),_:1}),v("div",pe,[v("div",_e,[r(l,{class:"nav-button",title:"Home",url:"./",ico:!0},{default:p(()=>[r(f,{icon:"house"})]),_:1}),r(l,{class:"nav-button",title:"Archives",url:"./archives",ico:!0},{default:p(()=>[r(f,{icon:"box-archive"})]),_:1}),r(l,{class:"nav-button",title:"Albums",url:"./albums",ico:!0},{default:p(()=>[r(f,{icon:"images"})]),_:1}),r(l,{class:"nav-button",title:"About",url:"./about",ico:!0},{default:p(()=>[r(f,{icon:"circle-info"})]),_:1})]),r(s,{class:"search"})])])}const ye=x(ce,[["render",ve],["__scopeId","data-v-9d37c47f"]]);export{ye as _,j as a,oe as b};
