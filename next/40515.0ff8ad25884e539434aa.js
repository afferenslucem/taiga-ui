"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[40515],{40515:(fe,m,n)=>{n.r(m),n.d(m,{ExampleTuiInputDateModule:()=>Se});var E=n(12057),F=n(23738),C=n(12021),g=n(78697),y=n(36518),_=n(66187),D=n(91068),v=n(75695),e=n(74788),i=n(40287),G=n(82880),J=n(98204),V=n(88331),b=n(37159),H=n(66596),X=n(57068),O=n(64374),r=n(41833),s=n(40813),z=n(31510),Q=n(36951),Y=n(7114);const W=function(){return[]};let j=(()=>{class o{constructor(){this.testForm=new F.cw({testValue:new F.NI(new i.TU1(2017,0,15))})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-date-example-1"]],decls:9,vars:8,consts:function(){let a;return a=$localize`:␟94fc108253bd1502cd271951ce40db76787fe618␟918573850120182890: If a field is optional, but unfinished field should be marked as invalid, use ${"\ufffd#3\ufffd"}:START_TAG_CODE:tuiUnfinishedValidator${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE: directive `,[[1,"b-form",3,"formGroup","tuiTextfieldCleaner"],a,["tuiUnfinishedValidator","Finish filling the field","formControlName","testValue"],["formControlName","testValue",3,"error"]]},template:function(t,u){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"p"),e.tHW(2,1),e._UZ(3,"code"),e.N_p(),e.qZA(),e.TgZ(4,"tui-input-date",2),e._uU(5," Choose a date "),e.qZA(),e._UZ(6,"tui-error",3),e.ALo(7,"async"),e.ALo(8,"tuiFieldError"),e.qZA()),2&t&&(e.Q6J("formGroup",u.testForm)("tuiTextfieldCleaner",!0),e.xp6(6),e.Q6J("error",e.lcZ(7,3,e.lcZ(8,5,e.DdM(7,W)))))},directives:[F._Y,F.JL,F.sg,O.b,r.j,s.k,z.Q,F.JJ,F.u,Q.v],pipes:[E.Ov,Y.A],encapsulation:2,changeDetection:0}),o})();var N=n(10200),S=n(68874);let K=(()=>{class o{constructor(){this.testForm=new F.cw({testValue:new F.NI(new i.TU1(2017,2,15))})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-date-example-2"]],decls:7,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_vertical-4",3,"tuiTextfieldLabelOutside"],["formControlName","testValue","tuiTextfieldSize","l"]],template:function(t,u){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-date",1),e._uU(2," Choose a date "),e.qZA(),e.TgZ(3,"tui-input-date",2),e._uU(4," Choose a date "),e.qZA(),e.TgZ(5,"tui-input-date",3),e._uU(6," Choose a date "),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",u.testForm),e.xp6(3),e.Q6J("tuiTextfieldLabelOutside",!0))},directives:[F._Y,F.JL,F.sg,r.j,s.k,F.JJ,F.u,N.s,S.x],encapsulation:2,changeDetection:0}),o})(),B=(()=>{class o{constructor(){this.from=null,this.to=null,this.min=new i.TU1(2017,9,4),this.max=i.TU1.currentLocal(),this.items=[new D.AIQ(i.OyN.append({year:-1}),"Until today",i.TU1.currentLocal())]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-date-example-3"]],decls:8,vars:6,consts:[[1,"tui-text_h4"],[1,"b-form"],[3,"min","max","ngModel","ngModelChange"],[3,"min","items","ngModel","ngModelChange"]],template:function(t,u){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Taiga UI usage experience"),e.qZA(),e.TgZ(2,"p",1),e.TgZ(3,"tui-input-date",2),e.NdJ("ngModelChange",function(T){return u.from=T}),e._uU(4," Start "),e.qZA(),e.qZA(),e.TgZ(5,"p",1),e.TgZ(6,"tui-input-date",3),e.NdJ("ngModelChange",function(T){return u.to=T}),e._uU(7," Finish "),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("min",u.min)("max",u.max)("ngModel",u.from),e.xp6(3),e.Q6J("min",u.from||u.min)("items",u.items)("ngModel",u.to))},directives:[r.j,s.k,F.JJ,F.On],encapsulation:2,changeDetection:0}),o})();var k=n(79121),w=n(91030);let q=(()=>{class o{constructor(){this.control=new F.NI(new i.TU1(2017,0,15))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-date-example-4"]],features:[e._Bn([{provide:i.P_B,useValue:"YMD"},{provide:i.q_$,useValue:"/"}])],decls:11,vars:1,consts:[[1,"tui-space_bottom-4","b-form"],[1,"b-form",3,"formControl"],["tuiTextfield","","autocomplete","bday"]],template:function(t,u){1&t&&(e.TgZ(0,"tui-notification",0),e._uU(1," If you need to set some attributes or listen to events on native "),e.TgZ(2,"code"),e._uU(3,"input"),e.qZA(),e._uU(4," , you can put it inside with "),e.TgZ(5,"code"),e._uU(6,"Textfield"),e.qZA(),e._uU(7," directive as shown below\n"),e.qZA(),e.TgZ(8,"tui-input-date",1),e._uU(9," Choose a date "),e._UZ(10,"input",2),e.qZA()),2&t&&(e.xp6(8),e.Q6J("formControl",u.control))},directives:[k.L,r.j,s.k,F.JJ,F.oH,w.M],encapsulation:2,changeDetection:0}),o})(),ee=(()=>{class o{fromControlValue(t){return t&&i.TU1.fromLocalNativeDate(t)}toControlValue(t){return(null==t?void 0:t.toLocalNativeDate())||null}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),te=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=e.lG2({type:o,selectors:[["tui-input-date","toNativeDate",""]],features:[e._Bn([{provide:D.HFz,useClass:ee}])]}),o})(),oe=(()=>{class o{constructor(){this.nativeDateControl=new F.NI(new Date(2022,0,26)),this.defaultControl=new F.NI(new i.TU1(2022,0,26))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-date-example-5"]],decls:24,vars:4,consts:[[1,"b-form",3,"formControl"],["toNativeDate","",1,"b-form",3,"formControl"]],template:function(t,u){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Control's output as TuiDay (default)"),e.qZA(),e.TgZ(2,"tui-input-date",0),e._uU(3," Choose a date\n"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Stringified control value:"),e.qZA(),e.TgZ(6,"p"),e.TgZ(7,"code"),e._uU(8),e.qZA(),e.qZA(),e._UZ(9,"hr"),e.TgZ(10,"h3"),e._uU(11,"Control's output as native Date"),e.qZA(),e.TgZ(12,"p"),e._uU(13," (see "),e.TgZ(14,"code"),e._uU(15,"toNativeDate"),e.qZA(),e._uU(16," directive)\n"),e.qZA(),e.TgZ(17,"tui-input-date",1),e._uU(18," Choose a date\n"),e.qZA(),e.TgZ(19,"p"),e._uU(20,"Stringified control value:"),e.qZA(),e.TgZ(21,"p"),e.TgZ(22,"code"),e._uU(23),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("formControl",u.defaultControl),e.xp6(6),e.Oqu(u.defaultControl.value),e.xp6(9),e.Q6J("formControl",u.nativeDateControl),e.xp6(6),e.Oqu(u.nativeDateControl.value))},directives:[r.j,s.k,F.JJ,F.oH,te],encapsulation:2,changeDetection:0}),o})();var ne=n(31823),ae=n(44051),ue=n(17023),Fe=n(54218),ie=n(3729),Te=n(84848),le=n(76349);function de(o,a){if(1&o&&(e.TgZ(0,"div",2),e.tHW(1,3),e._UZ(2,"code"),e.N_p(),e.qZA(),e.TgZ(3,"h3"),e.SDv(4,4),e.qZA(),e.TgZ(5,"dl"),e.tHW(6,5),e.TgZ(7,"dt"),e._UZ(8,"code"),e.qZA(),e.TgZ(9,"dd",6),e._UZ(10,"code"),e.qZA(),e.TgZ(11,"dt"),e._UZ(12,"code"),e.qZA(),e._UZ(13,"dd"),e.N_p(),e.qZA(),e.TgZ(14,"p",2),e.TgZ(15,"a",7),e._uU(16," See example "),e.qZA(),e._uU(17," with the usage of these tokens. "),e.qZA(),e.TgZ(18,"h3"),e.SDv(19,8),e.qZA(),e.TgZ(20,"dl"),e.tHW(21,9),e.TgZ(22,"dt"),e._UZ(23,"code"),e.qZA(),e.TgZ(24,"dd"),e._UZ(25,"a",10),e.TgZ(26,"p"),e._UZ(27,"a",11),e._UZ(28,"a",12),e.qZA(),e.qZA(),e.N_p(),e.qZA(),e.TgZ(29,"tui-doc-example",13),e._UZ(30,"tui-input-date-example-1"),e.qZA(),e.TgZ(31,"tui-doc-example",14),e._UZ(32,"tui-input-date-example-2"),e.qZA(),e.TgZ(33,"tui-doc-example",15),e._UZ(34,"tui-input-date-example-3"),e.qZA(),e.TgZ(35,"tui-doc-example",16),e._UZ(36,"tui-input-date-example-4"),e.qZA(),e.TgZ(37,"tui-doc-example",17),e._UZ(38,"tui-input-date-example-5"),e.qZA()),2&o){const t=e.oxw();e.xp6(29),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2),e.xp6(2),e.Q6J("content",t.example3),e.xp6(2),e.Q6J("content",t.example4),e.xp6(2),e.Q6J("content",t.example5)}}function _e(o,a){if(1&o&&(e.TgZ(0,"tui-input-date",26),e._uU(1," Choose a date "),e.qZA()),2&o){const t=e.oxw(2);e.Q6J("formControl",t.control)("focusable",t.focusable)("min",t.min)("max",t.max)("markerHandler",t.markerHandler)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoInvalid",t.pseudoInvalid)("readOnly",t.readOnly)("disabledItemHandler",t.disabledItemHandler)("items",t.items)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiHintAppearance",t.hintAppearance)}}function De(o,a){1&o&&(e.tHW(0,27),e._UZ(1,"code"),e.N_p())}function re(o,a){1&o&&(e.tHW(0,28),e._UZ(1,"div"),e._UZ(2,"strong"),e.N_p())}function se(o,a){1&o&&e.SDv(0,29)}function ce(o,a){1&o&&e.SDv(0,30)}function pe(o,a){1&o&&e.SDv(0,31)}function me(o,a){1&o&&e.SDv(0,32)}function Ee(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"tui-doc-demo",18),e.YNc(1,_e,2,18,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,De,2,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(d){return e.CHM(t),e.oxw().disabled=d}),e.YNc(4,re,3,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(d){return e.CHM(t),e.oxw().disabledItemHandler=d}),e.YNc(5,se,1,0,"ng-template",21),e.NdJ("documentationPropertyValueChange",function(d){return e.CHM(t),e.oxw().items=d}),e.YNc(6,ce,1,0,"ng-template",22),e.NdJ("documentationPropertyValueChange",function(d){return e.CHM(t),e.oxw().markerHandler=d}),e.YNc(7,pe,1,0,"ng-template",23),e.NdJ("documentationPropertyValueChange",function(d){return e.CHM(t),e.oxw().min=d}),e.YNc(8,me,1,0,"ng-template",24),e.NdJ("documentationPropertyValueChange",function(d){return e.CHM(t),e.oxw().max=d}),e.qZA(),e._UZ(9,"inherited-documentation",25)}if(2&o){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.xp6(1),e.Q6J("documentationPropertyValues",t.itemsVariants)("documentationPropertyValue",t.items),e.xp6(1),e.Q6J("documentationPropertyValues",t.markerHandlerVariants)("documentationPropertyValue",t.markerHandler),e.xp6(1),e.Q6J("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("dropdown",!0)}}function Ce(o,a){if(1&o&&(e.TgZ(0,"p"),e.tHW(1,33),e._UZ(2,"a",34),e._UZ(3,"code"),e._UZ(4,"code"),e._UZ(5,"a",35),e.N_p(),e.qZA(),e.TgZ(6,"ol",36),e.TgZ(7,"li"),e.TgZ(8,"p"),e.tHW(9,37),e._UZ(10,"code"),e.N_p(),e.qZA(),e._UZ(11,"tui-doc-code",38),e.qZA(),e.TgZ(12,"li"),e.TgZ(13,"p"),e.tHW(14,39),e._UZ(15,"code"),e._UZ(16,"code"),e.N_p(),e.qZA(),e._UZ(17,"tui-doc-code",40),e.qZA(),e.TgZ(18,"li"),e._uU(19," Use "),e.TgZ(20,"code"),e._uU(21,"TuiInputDate"),e.qZA(),e._uU(22," in template: "),e._UZ(23,"tui-doc-code",41),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(11),e.Q6J("code",t.exampleModule),e.xp6(6),e.Q6J("code",t.exampleForm),e.xp6(6),e.Q6J("code",t.exampleHtml)}}const ge=["var(--tui-primary)","var(--tui-info-fill)"],Oe=["var(--tui-success-fill)"];let Ne=(()=>{class o extends G.b{constructor(){super(...arguments),this.exampleForm=n.e(90463).then(n.t.bind(n,90463,17)),this.exampleModule=n.e(83168).then(n.t.bind(n,83168,17)),this.exampleHtml=n.e(20862).then(n.t.bind(n,20862,17)),this.example1={TypeScript:n.e(84625).then(n.t.bind(n,84625,17)),HTML:n.e(99226).then(n.t.bind(n,99226,17))},this.example2={TypeScript:n.e(31617).then(n.t.bind(n,31617,17)),HTML:n.e(64576).then(n.t.bind(n,64576,17))},this.example3={TypeScript:n.e(96459).then(n.t.bind(n,96459,17)),HTML:n.e(74187).then(n.t.bind(n,74187,17))},this.example4={TypeScript:n.e(54884).then(n.t.bind(n,54884,17)),HTML:n.e(54075).then(n.t.bind(n,54075,17))},this.example5={TypeScript:n.e(39403).then(n.t.bind(n,39403,17)),HTML:n.e(54544).then(n.t.bind(n,54544,17)),"native-date-transformer.directive.ts":n.e(43784).then(n.t.bind(n,43784,17))},this.minVariants=[i.nNo,new i.TU1(2017,2,5),new i.TU1(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[i.OyN,new i.TU1(2017,11,11),new i.TU1(2020,2,5),new i.TU1(2300,0,1)],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[i.IyD,({day:t})=>t%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemsVariants=[[],[new D.AIQ(i.OyN.append({year:-1}),"Until today")]],this.markerHandlerVariants=[_.zE9,t=>t.day%2==0?ge:Oe],this.markerHandler=this.markerHandlerVariants[0],this.items=this.itemsVariants[0],this.autocompleteVariants=["off","bday"],this.autocomplete="",this.cleaner=!1,this.control=new F.NI(null,F.kI.required)}}return o.\u0275fac=function(){let a;return function(u){return(a||(a=e.n5z(o)))(u||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["example-tui-input-date"]],features:[e._Bn([{provide:J.x,useExisting:(0,e.Gpc)(()=>o)}]),e.qOj],decls:4,vars:0,consts:function(){let a,t,u,d,T,f,M,A,P,I,U,$,x,h,L,R,c,Z,p;return a=$localize`:␟fc2811ea354291326a11dd08fc35a97719f75c2d␟2917939038176412665:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputDate${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: – input with a calendar. `,t=$localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`,u=$localize`:␟ce9790eaf90c30d2b6ab0af894665e9a649da178␟5888187430077433259:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#9\ufffd"}:START_TAG_DD: active date format ( ${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: ). ${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#13\ufffd"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.).${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:`,u=e.Zx4(u),d=$localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`,T=$localize`:␟c3dbb47cc33bb0541b868b672596570b063d5377␟8174380454533362440:${"\ufffd#22\ufffd"}:START_TAG_DT:${"\ufffd#23\ufffd"}:START_TAG_CODE:TUI_DATE_VALUE_TRANSFORMER${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#22\ufffd"}:CLOSE_TAG_DT:${"\ufffd#24\ufffd"}:START_TAG_DD: custom format of control output ( ${"\ufffd#25\ufffd"}:START_LINK: TuiDay ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd]"}:CLOSE_LINK: is default). ${"\ufffd#26\ufffd"}:START_PARAGRAPH:${"\ufffd#27\ufffd"}:START_LINK_1: See example ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd]"}:CLOSE_LINK: with built-in ${"\ufffd#28\ufffd"}:START_LINK_2: Date ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd]"}:CLOSE_LINK: object as control's output. ${"\ufffd/#26\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd/#24\ufffd"}:CLOSE_TAG_DD:`,T=e.Zx4(T),f=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,M=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,A=$localize`:␟eb73759f9121c31958ef3331f1a481a509877cb5␟6714747026286972804:With named dates`,P=$localize`:␟d72cd49783dcc040c08cd98ae2904eab57a0bb2e␟6669974721565177418:Date localization`,I=$localize`:␟8b48bfc50979dda56f42928887986fe0052cbc99␟4905475235330782118:With native Date output`,U=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,$=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,x=$localize`:␟537796d614601f54059199b6f42a55fd283fa400␟6619372356871511006: A list of preset dates for dropdown `,h=$localize`:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `,L=$localize`:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `,R=$localize`:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `,c=$localize`:␟5616c14157b3a5879b9da1e6c8a1e9fb827ff4d9␟7181776168306782987: Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open ${"\ufffd#2\ufffd"}:START_LINK: mobile calendar ${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LINK: , add imports of ${"[\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: into your root module. Also, check that you did not forget about ${"\ufffd#5\ufffd"}:START_LINK_1: tui-root ${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LINK:`,c=e.Zx4(c),Z=$localize`:␟592c56416c0d2ae15744eba65a71a0c074426731␟6680887665039790545: Import an Angular module for forms and ${"\ufffd#10\ufffd"}:START_TAG_CODE:TuiInputDateModule${"\ufffd/#10\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,p=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#15\ufffd|\ufffd#16\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#15\ufffd|\ufffd#16\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,p=e.Zx4(p),[["header","InputDate","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],a,t,u,[1,"tui-space_bottom-5"],["tuiLink","","routerLink",".","fragment","date-localization"],d,T,["tuiLink","","target","_blank","href","https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/date-time/day.ts"],["tuiLink","","routerLink",".","fragment","native-date-output"],["tuiLink","","target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"],["id","base","heading",f,3,"content"],["id","sizes","heading",M,3,"content"],["id","named","heading",A,3,"content"],["id","date-localization","heading",P,3,"content"],["id","native-date-output","heading",I,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","TuiNamedDay[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","focusable","min","max","markerHandler","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","disabledItemHandler","items","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiHintContent","tuiHintDirection","tuiHintAppearance"],U,$,x,h,L,R,c,["tuiLink","","routerLink","/components/mobile-calendar"],["tuiLink","","routerLink","/getting-started"],[1,"b-demo-steps"],Z,["filename","myComponent.module.ts",3,"code"],p,["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]]},template:function(t,u){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,de,39,5,"ng-template",1),e.YNc(2,Ee,10,13,"ng-template",1),e.YNc(3,Ce,24,3,"ng-template",1),e.qZA())},directives:[V.q,b.n,H.V,C.yS,X.f,j,K,B,q,oe,ne.F,ae.z,ue.B,Fe.w,r.j,s.k,F.JJ,F.oH,ie.aR,O.b,S.x,N.s,Te.b,le.c],encapsulation:2,changeDetection:0}),o})(),Se=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.fV,v.f,F.UX,F.u5,E.ez,_.jzK,D.Ltw,_.fNO,D.hr9,y.nw,D.hsT,_.cnw,_.goS,_.Shu,D.YuV,_.HiG,C.Bz.forChild((0,g.Ve)(Ne))]]}),o})()}}]);