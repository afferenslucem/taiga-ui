(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[50980],{50980:(n,e,t)=>{t.r(e),t.d(e,{IconsModule:()=>un});var o=t(12057),i=t(24751),c=t(33982),s=t(96292),r=t(3497),a=t(55908),u=t(39761),l=t(88002),p=t(74788),g=t(67350);const d=["tuiIconElectron","tuiIconElectronMono","tuiIconCirrus","tuiIconMaestro","tuiIconMaestroMono","tuiIconMastercard","tuiIconMastercardMono","tuiIconMir","tuiIconMirMono","tuiIconVisa","tuiIconVisaMono","tuiIconUnionPay","tuiIconJCB","tuiIconPayPal","tuiIconAmex","tuiIconDinersClub","tuiIconDiscover","tuiIconHumo","tuiIconRuPay","tuiIconUzcard","tuiIconVerve"],m=["tuiIconApplePay","tuiIconGooglePay","tuiIconSamsungPay","tuiIconWorldPay","tuiIconAliPay","tuiIconAmazonPay","tuiIconAndroidPay"],h=["tuiIconRedo","tuiIconRefresh","tuiIconRefreshLarge","tuiIconSortUp","tuiIconSortDown","tuiIconUndo"],{LARGE:f,NORMAL:b}=function(){const n=[],e=[],t=new Set([...d,...m]);for(const o in g)t.has(o)||"tuiCoreIcons"===o||"tuiKitIcons"===o||(o.includes("Large")?n.push(o):e.push(o));return{LARGE:n,NORMAL:e}}(),x=new p.OlP("[TUI_DEMO_ICONS]: Icons",{factory:()=>{return n=(0,p.f3M)(r.TUI_SVG_OPTIONS).deprecated,{"Description and examples":{"Normal / 16px":b.filter((e=>!n(e)&&!h.includes(e))),"Large / 24px":f.filter((e=>!n(e)&&!h.includes(e))),"Payment systems":d,"Payment services":m}};var n}});var v=t(43560),T=t(93525),y=t(79121),I=t(66596),M=t(64762),_=t(50506),Z=t(68807),k=t(54395),w=t(45435),A=t(87519),C=t(18819);class O{constructor(n){this.template=n}}O.ɵfac=function(n){return new(n||O)(p.Y36(p.Rgc))},O.ɵdir=p.lG2({type:O,selectors:[["","iconGroup",""]],inputs:{iconGroup:"iconGroup"}}),(0,M.gn)([(0,Z.tuiDefaultProp)()],O.prototype,"iconGroup",void 0);var P=t(77027),U=t(41360),S=t(84848),L=t(10200),J=t(68874),q=t(40939),N=t(9358),F=t(4123),G=t(68165),Q=t(47305);function z(n,e){1&n&&(p.TgZ(0,"p"),p._uU(1,"Nothing found"),p.qZA())}const B=function(n,e,t){return{icon:n,group:e,copyPath:t}};function R(n,e){if(1&n&&p.GkF(0,9),2&n){const n=e.$implicit,t=p.oxw(2).$implicit,o=p.oxw(2);p.Q6J("ngTemplateOutlet",(null==o.iconGroup?null:o.iconGroup.template)||null)("ngTemplateOutletContext",p.kEZ(2,B,n,t,o.copyPath))}}function Y(n,e){if(1&n&&(p.ynx(0),p.TgZ(1,"div",5),p.TgZ(2,"h2",0),p._uU(3),p.qZA(),p._UZ(4,"tui-badge",6),p.qZA(),p.YNc(5,z,2,0,"p",4),p.TgZ(6,"div",7),p.YNc(7,R,1,6,"ng-container",8),p.qZA(),p.BQk()),2&n){const n=e.ngIf,t=p.oxw().$implicit,o=p.oxw().tuiLet;p.xp6(1),p.uIk("data-heading",t),p.xp6(2),p.hij(" ",t," "),p.xp6(1),p.Q6J("hoverable",!0)("value",n.length.toString())("status",n.length?"success":"error"),p.xp6(1),p.Q6J("ngIf",!n.length),p.xp6(2),p.Q6J("tuiForAsyncOf",n)("tuiForAsyncTimeout",o.timeout)}}function E(n,e){if(1&n&&(p.ynx(0),p.YNc(1,Y,8,8,"ng-container",4),p.ALo(2,"tuiFilter"),p.BQk()),2&n){const n=e.$implicit,t=p.oxw().tuiLet,o=p.oxw();p.xp6(1),p.Q6J("ngIf",p.Dn7(2,1,o.icons[n],o.matcher,t.search))}}function D(n,e){if(1&n&&(p.ynx(0),p.YNc(1,E,3,5,"ng-container",3),p.ALo(2,"tuiKeys"),p.BQk()),2&n){const n=e.tuiLet,t=p.oxw();p.xp6(1),p.Q6J("tuiForAsyncOf",p.lcZ(2,2,t.icons))("tuiForAsyncTimeout",n.timeout)}}const $=function(n,e){return{search:n,timeout:e}};class H{constructor(n,e){this.clipboard=n,this.alerts=e,this.icons={},this.matcher=Z.TUI_DEFAULT_MATCHER,this.control=new i.NI(""),this.search$=this.control.valueChanges.pipe((0,k.b)(500),(0,w.h)((n=>n.length>2||0===n.length)),(0,A.x)(),(0,C.B)()),this.copyPath=n=>{this.clipboard.copy(n),this.alerts.open(`The name ${n} copied`,{status:"success"}).subscribe()}}}H.ɵfac=function(n){return new(n||H)(p.Y36(_.TU),p.Y36(r.TuiAlertService))},H.ɵcmp=p.Xpm({type:H,selectors:[["icons-group"]],contentQueries:function(n,e,t){if(1&n&&p.Suo(t,O,5),2&n){let n;p.iGM(n=p.CRH())&&(e.iconGroup=n.first)}},inputs:{icons:"icons"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[1,"title"],["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"formControl","tuiTextfieldLabelOutside"],[4,"tuiLet"],[4,"tuiForAsync","tuiForAsyncOf","tuiForAsyncTimeout"],[4,"ngIf"],[1,"header-group"],["size","m",1,"badge",3,"hoverable","value","status"],[1,"icons"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"tuiForAsync","tuiForAsyncOf","tuiForAsyncTimeout"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,e){if(1&n&&(p.F$t(),p.TgZ(0,"h2",0),p._uU(1,"Search by name"),p.qZA(),p.TgZ(2,"tui-input",1),p._uU(3," Input icon name to highlight\n"),p.qZA(),p.Hsn(4),p.YNc(5,D,3,4,"ng-container",2),p.ALo(6,"async"),p.ALo(7,"async")),2&n){let n;p.xp6(2),p.Q6J("formControl",e.control)("tuiTextfieldLabelOutside",!0),p.xp6(3),p.Q6J("tuiLet",p.WLB(7,$,null!==(n=p.lcZ(6,3,e.search$))&&void 0!==n?n:"",null!==(n=null==(n=p.lcZ(7,5,e.search$))?null:n.length)&&void 0!==n&&n?0:10))}},directives:[P.K,U.w,S.bZ,L.s,i.JJ,i.oH,J.x,q.L,N.X,o.O5,F.g,o.tP],pipes:[o.Ov,G.R,Q.S],styles:[".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem}"],changeDetection:0}),(0,M.gn)([(0,Z.tuiDefaultProp)()],H.prototype,"icons",void 0);var V=t(81894),X=t(76189),j=t(33772),K=t(51904),W=t(34880);let nn=(()=>{class n{}return n.ɵfac=function(e){return new(e||n)},n.ɵcmp=p.Xpm({type:n,selectors:[["customization-icons-example"]],features:[p._Bn([{provide:r.TUI_SANITIZER,useClass:K.RB},(0,r.tuiSvgOptionsProvider)({srcProcessor:n=>{const e="icons8::";return String(n).startsWith(e)?`assets/icons8/${String(n).replace(e,"")}.svg`:n}})])],decls:10,vars:0,consts:[[1,"icons8"],[1,"icons8-label","icons8-label-violet"],["src","icons8::android",1,"icons8-icon","icons8-violet"],["src","icons8::ios",1,"icons8-icon","icons8-violet"],[1,"icons8-label","icons8-label-blue"],["src","icons8::android",1,"icons8-icon","icons8-blue"],["src","icons8::ios",1,"icons8-icon","icons8-blue"]],template:function(n,e){1&n&&(p.TgZ(0,"div",0),p.TgZ(1,"p",1),p._uU(2,"Violet color"),p.qZA(),p._UZ(3,"tui-svg",2),p._UZ(4,"tui-svg",3),p.qZA(),p.TgZ(5,"div",0),p.TgZ(6,"p",4),p._uU(7,"Blue color"),p.qZA(),p._UZ(8,"tui-svg",5),p._UZ(9,"tui-svg",6),p.qZA())},directives:[W.P],styles:[".icons8[_ngcontent-%COMP%]{margin-bottom:1.5rem}.icons8-icon[_ngcontent-%COMP%]{width:4rem;height:4rem}.icons8-label[_ngcontent-%COMP%]{font-weight:bold;display:inline-block;padding:.25rem .625rem;color:#fff;border-radius:.25rem}.icons8-label-violet[_ngcontent-%COMP%]{background:#a340f1}.icons8-label-blue[_ngcontent-%COMP%]{background:#316df6}.icons8-violet[_ngcontent-%COMP%]{color:#a340f1}.icons8-blue[_ngcontent-%COMP%]{color:#316df6}"],changeDetection:0}),n})(),en=(()=>{class n{constructor(){this.svg='\n        <svg xmlns="http://www.w3.org/2000/svg"\n     viewBox="0 0 200 200"\n     preserveAspectRatio="xMidYMid slice"\n     id="svg">\n\n    <linearGradient id="grad">\n        <stop class="stop stop--1"\n              stop-color="crimson"\n              offset="0"></stop>\n        <stop class="stop stop--2"\n              stop-color="gold"\n              offset="49%"></stop>\n        <stop class="stop stop--2"\n              stop-color="gold"\n              offset="51%"></stop>\n        <stop class="stop stop--3"\n              stop-color="teal"\n              offset="100%"></stop>\n    </linearGradient>\n\n    <pattern id="pattern"\n              viewBox="0 0 50 50"\n              width="2" height="2"\n             patternUnits="userSpaceOnUse">\n        <path stroke="black"\n              stroke-width="6"\n              d="M0,50 50,0\n                 "></path>\n    </pattern>\n\n    <mask id="mask">\n        <rect width="100%" height="100%"\n          fill="white">\n        </rect>\n        <rect width="100%" height="100%"\n          fill="url(#pattern)">\n        </rect>\n    </mask>\n\n    <g mask="url(#mask)">\n        <text x="50.7%" y="50.7%" dy=".25em"\n          text-anchor="middle"\n          fill="none"\n          stroke="url(#grad)"\n          stroke-width=".25"\n          >Text</text>\n       <text x="50%" y="50%" dy=".25em"\n          text-anchor="middle"\n          fill="url(#grad)"\n          >Text</text>\n    </g>\n</svg>'}}return n.ɵfac=function(e){return new(e||n)},n.ɵcmp=p.Xpm({type:n,selectors:[["inline-svg-example"]],features:[p._Bn([{provide:r.TUI_SANITIZER,useClass:K.RB}])],decls:1,vars:1,consts:[[1,"example",3,"src"]],template:function(n,e){1&n&&p._UZ(0,"tui-svg",0),2&n&&p.Q6J("src",e.svg)},directives:[W.P],styles:[".example[_ngcontent-%COMP%]{font-family:Georgia,sans-serif;font-size:5rem;font-weight:bold;width:6.25rem;height:6.25rem;position:relative}.example[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}"],changeDetection:0}),n})();function tn(n,e){if(1&n){const n=p.EpF();p.TgZ(0,"button",12),p.NdJ("click",(function(){const e=p.CHM(n),t=e.icon;return(0,e.copyPath)(t)})),p.ALo(1,"async"),p.qZA()}if(2&n){const n=e.icon,t=p.oxw(3);p.ekj("t-appearance",t.appearance)("t-background",t.background)("t-wrapper-icons_dark","onDark"===p.lcZ(1,8,t.mode$)),p.Q6J("icon",n),p.uIk("aria-label",n)}}function on(n,e){if(1&n){const n=p.EpF();p.TgZ(0,"tui-notification"),p._uU(1," Open source theme for Taiga UI uses processed "),p.TgZ(2,"a",4),p._uU(3," Feather Icons "),p.qZA(),p._uU(4," as its icon pack with some custom made icons. "),p.qZA(),p.TgZ(5,"p"),p._uU(6," These icons can be used by name in "),p.TgZ(7,"a",5),p._uU(8," Svg "),p.qZA(),p._uU(9," component and all Taiga UI component accepting icons as input. If you use unsafe icons or inline SVG with linear gradient you need to provide "),p.TgZ(10,"a",6),p._uU(11," TUI_SANITIZER "),p.qZA(),p._uU(12," token, which is responsible for removing malicious code from the svg. "),p.qZA(),p.TgZ(13,"icons-group",7),p.TgZ(14,"div",8),p.TgZ(15,"tui-checkbox-labeled",9),p.NdJ("ngModelChange",(function(e){return p.CHM(n),p.oxw(2).background=e})),p._uU(16," Background "),p.qZA(),p.TgZ(17,"tui-checkbox-labeled",10),p.NdJ("ngModelChange",(function(e){return p.CHM(n),p.oxw(2).appearance=e})),p._uU(18," Icon appearance "),p.qZA(),p.qZA(),p.YNc(19,tn,2,10,"ng-template",11),p.qZA()}if(2&n){const n=p.oxw().$implicit,e=p.oxw();p.xp6(13),p.Q6J("icons",e.icons[n]),p.xp6(2),p.Q6J("ngModel",e.background),p.xp6(2),p.Q6J("ngModel",e.appearance)}}function cn(n,e){if(1&n&&p.YNc(0,on,20,3,"ng-template",3),2&n){const n=e.$implicit;p.Q6J("pageTab",n)}}function sn(n,e){if(1&n&&(p.TgZ(0,"tui-doc-example",13),p._UZ(1,"customization-icons-example"),p.qZA(),p.TgZ(2,"tui-doc-example",14),p._UZ(3,"inline-svg-example"),p.qZA()),2&n){const n=p.oxw();p.Q6J("content",n.example1),p.xp6(2),p.Q6J("content",n.example2)}}let rn=(()=>{class n{constructor(n,e){this.icons=n,this.mode=e,this.keys=Object.keys(this.icons),this.appearance=!1,this.background=!0,this.mode$=this.mode.change$.pipe((0,u.O)(null),(0,l.U)((()=>this.mode.mode||"onLight"))),this.example1={TypeScript:t.e(98667).then(t.t.bind(t,98667,17)),HTML:t.e(82580).then(t.t.bind(t,82580,17)),LESS:t.e(39993).then(t.t.bind(t,39993,17))},this.example2={TypeScript:t.e(4262).then(t.t.bind(t,4262,17)),HTML:t.e(56688).then(t.t.bind(t,56688,17)),LESS:t.e(23567).then(t.t.bind(t,23567,17))}}}return n.ɵfac=function(e){return new(e||n)(p.Y36(x),p.Y36(r.TuiModeDirective))},n.ɵcmp=p.Xpm({type:n,selectors:[["icons"]],decls:3,vars:1,consts:[["header","Icons"],[4,"ngFor","ngForOf"],["pageTab","SVG Tips"],[3,"pageTab"],["tuiLink","","target","_blank","rel","noreferrer","href","https://feathericons.com/"],["tuiLink","","routerLink","/components/svg"],["tuiLink","","routerLink","/icon-set#sanitizer"],[3,"icons"],[1,"icons-customization"],["size","m",1,"t-checkbox",3,"ngModel","ngModelChange"],["size","m",1,"t-checkbox","tui-space_right-3",3,"ngModel","ngModelChange"],["iconGroup",""],["tuiIconButton","","type","button","size","m","title","Copy","appearance","icon",1,"icon",3,"icon","click"],["id","base","heading","Customization","description","You can customize the path to your icons and inherit color",3,"content"],["id","inline","heading","Inline SVG","description","If you use unsafe icons or inline SVG with linear gradient you need to provide TUI_SANITIZER",3,"content"]],template:function(n,e){1&n&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,cn,1,1,void 0,1),p.YNc(2,sn,4,2,"ng-template",2),p.qZA()),2&n&&(p.xp6(1),p.Q6J("ngForOf",e.keys))},directives:[v.q,o.sg,T.n,y.L,I.V,c.yS,H,V.p,i.JJ,i.On,O,X.v,j.f,nn,en],pipes:[o.Ov],styles:[".icon[_ngcontent-%COMP%]{margin:.75rem;transition:all .5s ease-in;border:1px solid var(--tui-base-03);box-shadow:0 .05rem .5rem #3333;will-change:transform,box-shadow;border-radius:.625rem}.icon.t-background[_ngcontent-%COMP%]{background-image:linear-gradient(45deg,var(--tui-base-02) 25%,transparent 25%),linear-gradient(-45deg,var(--tui-base-02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,var(--tui-base-02) 75%),linear-gradient(-45deg,transparent 75%,var(--tui-base-02) 75%);background-size:1.25rem 1.25rem;background-position:0 0,0 .625rem,.625rem -.625rem,-.625rem 0}.icon.t-background.t-wrapper-icons_dark[_ngcontent-%COMP%]{border:1px solid var(--tui-base-03);background-image:linear-gradient(45deg,#2b2b2b 25%,transparent 25%),linear-gradient(-45deg,#2b2b2b 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#2b2b2b 75%),linear-gradient(-45deg,transparent 75%,#2b2b2b 75%)}.icon[_ngcontent-%COMP%]:hover{transform:scale(1.5);background:var(--tui-base-01);z-index:1}.icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]:hover{transition:.5s}.icon[_ngcontent-%COMP%]:not(.t-appearance)     [tuiWrapper][data-appearance=icon]{opacity:1!important}.icons-customization[_ngcontent-%COMP%]{display:flex;margin-top:.625rem;flex-flow:row-reverse}"],changeDetection:0}),n})(),an=(()=>{class n{}return n.ɵfac=function(e){return new(e||n)},n.ɵmod=p.oAB({type:n}),n.ɵinj=p.cJS({imports:[[o.ez,a.TuiInputModule,a.TuiBadgeModule,Z.TuiForAsyncModule,Z.TuiKeysPipeModule,Z.TuiFilterPipeModule,r.TuiHintModule,r.TuiTextfieldControllerModule,i.UX,Z.TuiLetModule]]}),n})(),un=(()=>{class n{}return n.ɵfac=function(e){return new(e||n)},n.ɵmod=p.oAB({type:n}),n.ɵinj=p.cJS({imports:[[o.ez,i.u5,r.TuiNotificationModule,r.TuiLinkModule,r.TuiSvgModule,r.TuiButtonModule,s.fV,an,c.Bz.forChild((0,s.Ve)(rn)),a.TuiCheckboxLabeledModule]]}),n})()}}]);