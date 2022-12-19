"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[12690],{12690:(le,O,t)=>{t.r(O),t.d(O,{ExampleTuiMobileCalendarModule:()=>ae});var p=t(12057),D=t(24751),g=t(33982),N=t(29851),m=t(63414),E=t(76040),u=t(68339),S=t(418),e=t(74788),P=t(88331),I=t(37159),$=t(66596),x=t(57068),y=t(89570),h=t(39761),b=t(57057),B=t(88002),U=t(76189);let Z=(()=>{class o{constructor(n,l,i){this.months=i,this.control=new D.NI(new u.TuiDay(2020,9,3)),this.date$=this.control.valueChanges.pipe((0,h.O)(this.control.value),(0,b.M)(this.months),(0,B.U)(([T,c])=>this.getParsed(T,c)));const d=(0,u.tuiControlValue)(this.control),_=e.zs3.create({providers:[{provide:S.TUI_CALENDAR_DATE_STREAM,useValue:d}],parent:l}),C=new y.Al(m.TuiMobileCalendarDialogComponent,_);this.dialog$=n.open(C,{size:"fullscreen",closeable:!1,data:{min:u.TuiDay.currentLocal()}})}get empty(){return!this.control.value}getParsed(n,l){if(!n)return"Choose a date";const{month:i,day:d,year:_}=n;return`${l[i]} ${d}, ${_}`}onClick(){this.dialog$.subscribe(n=>{this.control.setValue(n)})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(E.TuiDialogService),e.Y36(e.zs3),e.Y36(E.TUI_MONTHS))},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-mobile-calendar-example-1"]],decls:5,vars:5,consts:[[1,"wrapper"],["tuiIconButton","","type","button","title","Choose a date","appearance","secondary","shape","rounded","icon","tuiIconCalendarLarge",3,"click"],[1,"date"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return l.onClick()}),e.qZA(),e.TgZ(2,"span",2),e._uU(3),e.ALo(4,"async"),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.ekj("date_empty",l.empty),e.xp6(1),e.hij(" ",e.lcZ(4,3,l.date$)," "))},directives:[U.v],pipes:[p.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),o})();var r=t(73104);let v=(()=>{class o{constructor(){this.min=new u.TuiDay((new Date).getFullYear(),(new Date).getMonth(),1),this.max=new u.TuiDay((new Date).getFullYear(),(new Date).getMonth(),10)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-mobile-calendar-example-2"]],decls:2,vars:3,consts:[[1,"example"],[3,"min","max","single"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"tui-mobile-calendar",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("min",l.min)("max",l.max)("single",!1))},directives:[r.F],styles:[".example[_ngcontent-%COMP%]{height:35rem}"],changeDetection:0}),o})(),G=(()=>{class o{constructor(){this.min=u.TuiDay.currentLocal()}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-mobile-calendar-example-3"]],features:[e._Bn([{provide:E.TUI_FIRST_DAY_OF_WEEK,useValue:0}])],decls:1,vars:1,consts:[[3,"min"]],template:function(n,l){1&n&&e._UZ(0,"tui-mobile-calendar",0),2&n&&e.Q6J("min",l.min)},directives:[r.F],styles:["tui-mobile-calendar[_ngcontent-%COMP%]{max-width:20rem;height:30rem}"],changeDetection:0}),o})();var J=t(31823),V=t(54476),X=t(17023),H=t(76349);function z(o,a){1&o&&(e._uU(0," Use "),e.TgZ(1,"a",10),e._uU(2," TUI_FIRST_DAY_OF_WEEK "),e.qZA(),e._uU(3," token to change start day of the week (Monday by default). "))}const Y=function(){return["/components/input-date"]},Q=function(){return["/components/input-date-range"]};function W(o,a){if(1&o&&(e.TgZ(0,"p"),e.tHW(1,2),e._UZ(2,"a",3),e._UZ(3,"a",3),e._UZ(4,"code"),e._UZ(5,"code"),e.N_p(),e.qZA(),e.TgZ(6,"p"),e.tHW(7,4),e._UZ(8,"code"),e.N_p(),e.qZA(),e.TgZ(9,"strong"),e.SDv(10,5),e.qZA(),e.TgZ(11,"tui-doc-example",6),e._UZ(12,"tui-mobile-calendar-example-1"),e.qZA(),e.TgZ(13,"tui-doc-example",7),e._UZ(14,"tui-mobile-calendar-example-2"),e.qZA(),e.TgZ(15,"tui-doc-example",8),e.YNc(16,z,4,0,"ng-template",null,9,e.W1O),e._UZ(18,"tui-mobile-calendar-example-3"),e.qZA()),2&o){const n=e.MAs(17),l=e.oxw();e.xp6(2),e.Q6J("routerLink",e.DdM(6,Y)),e.xp6(1),e.Q6J("routerLink",e.DdM(7,Q)),e.xp6(8),e.Q6J("content",l.example1),e.xp6(2),e.Q6J("content",l.example2),e.xp6(2),e.Q6J("content",l.example3)("description",n)}}function K(o,a){1&o&&(e.tHW(0,18),e._UZ(1,"div"),e._UZ(2,"strong"),e.N_p())}function j(o,a){1&o&&e.SDv(0,19)}function k(o,a){1&o&&e.SDv(0,20)}function w(o,a){1&o&&e.SDv(0,21)}function q(o,a){1&o&&e.SDv(0,22)}function ee(o,a){1&o&&e.SDv(0,23)}function te(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"tui-doc-demo"),e._UZ(1,"tui-mobile-calendar",11),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,K,3,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().disabledItemHandler=i}),e.YNc(4,j,1,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().max=i}),e.YNc(5,k,1,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().min=i}),e.YNc(6,w,1,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(n),e.oxw().single=i}),e.YNc(7,q,1,0,"ng-template",16),e.YNc(8,ee,1,0,"ng-template",17),e.qZA()}if(2&o){const n=e.oxw();e.xp6(1),e.Q6J("disabledItemHandler",n.disabledItemHandler)("max",n.max)("min",n.min)("single",n.single),e.xp6(2),e.Q6J("documentationPropertyValues",n.disabledItemHandlerVariants)("documentationPropertyValue",n.disabledItemHandler),e.xp6(1),e.Q6J("documentationPropertyValues",n.maxVariants)("documentationPropertyValue",n.max),e.xp6(1),e.Q6J("documentationPropertyValues",n.minVariants)("documentationPropertyValue",n.min),e.xp6(1),e.Q6J("documentationPropertyValue",n.single)}}function ne(o,a){if(1&o&&(e.TgZ(0,"ol",24),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,25),e._UZ(4,"code"),e._UZ(5,"code"),e.N_p(),e.qZA(),e._UZ(6,"tui-doc-code",26),e.qZA(),e.TgZ(7,"li"),e.TgZ(8,"p"),e.tHW(9,27),e._UZ(10,"code"),e._UZ(11,"code"),e._UZ(12,"code"),e.N_p(),e.qZA(),e._UZ(13,"tui-doc-code",26),e.qZA(),e.TgZ(14,"li"),e.TgZ(15,"p"),e.SDv(16,28),e.qZA(),e._UZ(17,"tui-doc-code",29),e.qZA(),e.qZA()),2&o){const n=e.oxw();e.xp6(6),e.Q6J("code",n.exampleModule),e.xp6(7),e.Q6J("code",n.exampleImportDialogModule),e.xp6(4),e.Q6J("code",n.exampleHtml)}}let oe=(()=>{class o{constructor(){this.exampleHtml=t.e(87147).then(t.t.bind(t,87147,17)),this.exampleModule=t.e(38346).then(t.t.bind(t,38346,17)),this.exampleImportDialogModule=t.e(60697).then(t.t.bind(t,60697,17)),this.example1={TypeScript:t.e(96985).then(t.t.bind(t,96985,17)),HTML:t.e(82551).then(t.t.bind(t,82551,17)),LESS:t.e(95840).then(t.t.bind(t,95840,17))},this.example2={TypeScript:t.e(38739).then(t.t.bind(t,38739,17)),HTML:t.e(65382).then(t.t.bind(t,65382,17))},this.example3={TypeScript:t.e(8863).then(t.t.bind(t,8863,17)),HTML:t.e(58130).then(t.t.bind(t,58130,17)),LESS:t.e(1468).then(t.t.bind(t,1468,17))},this.minVariants=[u.TUI_FIRST_DAY,new u.TuiDay(2017,2,5),new u.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[u.TUI_LAST_DAY,new u.TuiDay(2020,2,5),new u.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.single=!0,this.disabledItemHandlerVariants=[u.ALWAYS_FALSE_HANDLER,({day:n})=>n%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new D.NI,this.stream=(0,u.tuiControlValue)(this.control)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-tui-mobile-calendar"]],features:[e._Bn([{provide:S.TUI_CALENDAR_DATE_STREAM,deps:[o],useFactory:a=>a.stream}])],decls:4,vars:0,consts:function(){let a,n,l,i,d,_,C,T,c,A,L,R,M,s,f;return a=$localize`:␟e253a142950382b57f7a632d8882cc344d30496b␟1931204519440953968: A calendar for mobile devices. It is used in ${"\ufffd#2\ufffd"}:START_LINK: InputDate ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: and ${"\ufffd#3\ufffd"}:START_LINK_1: InputDateRange ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: if ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: are both imported once in the main module `,a=e.Zx4(a),n=$localize`:␟37450d9bbcdd2e6c6c427202fa81ded22ebf7d3a␟7782646258279612162: You can use ${"\ufffd#8\ufffd"}:START_TAG_CODE:TUI_CALENDAR_DATE_STREAM${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: token to set value from outside (see samples) `,l=$localize`:␟be132442c61ba6f1af8c7f6a614b07ce4aea8918␟2432796667542330911:Component should be used on mobile devices as fullscreen dialog`,i=$localize`:␟0361f42c5934060e30ced524323effc0a4fe560f␟3980173860964639072:Custom dropdown`,d=$localize`:␟0427b9c1f10441c6f4c53f1788242e2a97954be1␟2348971518300945764:Range`,_=$localize`:␟e061ac5bfcd825eb1f33d30b974df79546114460␟2732752787737094710:Localization`,C=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,T=$localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `,c=$localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `,A=$localize`:␟2a1554aaea9c8357628e5c7de4f8fb7615e37d70␟4032379093756044480: Single date or a range `,L=$localize`:␟166ac781bfe693de7c6c507c3747d4fad5808bfe␟8437696185745475137: "Cancel" clicked `,R=$localize`:␟0b81f93ee05a0d9a3237fb88342921b96a0aec2a␟3862541995331771793: "Confirm" button clicked `,M=$localize`:␟ca588819ac4ec61a814c286dfbc0f57f3aa24973␟194075401487100702: Import ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiMobileCalendarModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: once into the main module `,M=e.Zx4(M),s=$localize`:␟a448f82c6f5ac9a0ac04ed774204f6b5fe5713c3␟5351309614134079765: Import ${"[\ufffd#10\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: for automatic use with ${"[\ufffd#10\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TuiInputDate${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#10\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TuiInputDateRange${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: : `,s=e.Zx4(s),f=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","MobileCalendar","package","ADDON-MOBILE","type","components"],["pageTab",""],a,["tuiLink","",3,"routerLink"],n,l,["id","dropdown","heading",i,3,"content"],["id","range","heading",d,3,"content"],["id","localization","heading",_,3,"content","description"],["localizationDescription",""],["tuiLink","","routerLink","/utils/tokens","fragment","first-day-of-week"],[1,"calendar",3,"disabledItemHandler","max","min","single"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","single","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cancel","documentationPropertyMode","output","documentationPropertyType","void"],["documentationPropertyName","confirm","documentationPropertyMode","output","documentationPropertyType","TuiDayRange | TuiDay"],C,T,c,A,L,R,[1,"b-demo-steps"],M,["filename","myComponent.module.ts",3,"code"],s,f,["filename","myComponent.template.html",3,"code"]]},template:function(n,l){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,W,19,8,"ng-template",1),e.YNc(2,te,9,11,"ng-template",1),e.YNc(3,ne,18,3,"ng-template",1),e.qZA())},directives:[P.q,I.n,$.V,g.yS,x.f,Z,v,G,J.F,r.F,V.z,X.B,H.c],styles:[".calendar[_ngcontent-%COMP%]{height:28.75rem}"],changeDetection:0}),o})(),ae=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.ez,D.UX,E.TuiLinkModule,E.TuiButtonModule,m.TuiMobileCalendarModule,m.TuiMobileCalendarDialogModule,N.fV,g.Bz.forChild((0,N.Ve)(oe))]]}),o})()}}]);