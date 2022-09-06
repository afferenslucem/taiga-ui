"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[63443],{63443:(te,c,n)=>{n.r(c),n.d(c,{ExampleTuiInputMonthRangeModule:()=>ee});var f=n(12057),i=n(23738),S=n(12021),N=n(78697),s=n(66187),h=n(91068),R=n(75695),e=n(74788),m=n(40287),P=n(82880),D=n(98204),I=n(88331),x=n(37159),A=n(57068),U=n(79121),_=n(12571),r=n(10638),g=n(64374),G=n(91030);let H=(()=>{class o{constructor(){this.control=new i.NI}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-month-range-example-1"]],decls:3,vars:2,consts:[[1,"b-form",3,"formControl","tuiTextfieldCleaner"],["tuiTextfield","","placeholder","3 months or more"]],template:function(t,u){1&t&&(e.TgZ(0,"tui-input-month-range",0),e._uU(1," Choose a range of months "),e._UZ(2,"input",1),e.qZA()),2&t&&e.Q6J("formControl",u.control)("tuiTextfieldCleaner",!0)},directives:[_.X,r.K,i.JJ,i.oH,g.b,G.M],encapsulation:2,changeDetection:0}),o})();var M=n(10200);let $=(()=>{class o{constructor(){this.testForm=new i.cw({testValue:new i.NI(null)})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-month-range-example-2"]],decls:7,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",1,"tui-space_bottom-2"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_vertical-4"],["formControlName","testValue"]],template:function(t,u){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-month-range",1),e._uU(2," Choose a range of months "),e.qZA(),e.TgZ(3,"tui-input-month-range",2),e._uU(4," Choose a range of months "),e.qZA(),e.TgZ(5,"tui-input-month-range",3),e._uU(6,"Choose a range of months"),e.qZA(),e.qZA()),2&t&&e.Q6J("formGroup",u.testForm)},directives:[i._Y,i.JL,i.sg,_.X,r.K,i.JJ,i.u,M.s],encapsulation:2,changeDetection:0}),o})(),y=(()=>{class o{constructor(){this.testForm=new i.cw({testValue:new i.NI(null)}),this.disabledItemHandler=(t,u)=>!!u&&!!u.value&&u.value instanceof m.dtp&&!!u.value.isSingleMonth&&t.month<u.value.from.month+2}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-month-range-example-3"]],decls:6,vars:2,consts:function(){let a;return a=$localize`:␟7d001062311f184e8efdbff81e0be00c597c0496␟524318922497344790: A sample with ${"\ufffd#2\ufffd"}:START_TAG_CODE:disabledItemHandler${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: when selecting a left value of range changes available right value: a range no more than one month
`,[a,[1,"b-form",3,"formGroup"],["formControlName","testValue",1,"tui-space_bottom-2",3,"disabledItemHandler"]]},template:function(t,u){1&t&&(e.TgZ(0,"p"),e.tHW(1,0),e._UZ(2,"code"),e.N_p(),e.qZA(),e.TgZ(3,"form",1),e.TgZ(4,"tui-input-month-range",2),e._uU(5," Choose a range of months "),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("formGroup",u.testForm),e.xp6(1),e.Q6J("disabledItemHandler",u.disabledItemHandler))},directives:[i._Y,i.JL,i.sg,_.X,r.K,i.JJ,i.u],encapsulation:2,changeDetection:0}),o})();var v=n(31823),Z=n(44051),L=n(17023),J=n(54218),V=n(3729),X=n(68874),b=n(84848),z=n(76349);function Q(o,a){if(1&o&&(e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"tui-doc-example",3),e.TgZ(3,"tui-notification",4),e._uU(4," If you need to set some attributes or listen to events on native "),e.TgZ(5,"code"),e._uU(6,"input"),e.qZA(),e._uU(7," , you can put it inside with "),e.TgZ(8,"code"),e._uU(9,"Textfield"),e.qZA(),e._uU(10," directive as shown below "),e.qZA(),e._UZ(11,"tui-input-month-range-example-1"),e.qZA(),e.TgZ(12,"tui-doc-example",5),e._UZ(13,"tui-input-month-range-example-2"),e.qZA(),e.TgZ(14,"tui-doc-example",6),e._UZ(15,"tui-input-month-range-example-3"),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("content",t.example1),e.xp6(10),e.Q6J("content",t.example2),e.xp6(2),e.Q6J("content",t.example3)}}function Y(o,a){if(1&o&&(e.TgZ(0,"tui-input-month-range",12),e._uU(1," Months "),e.qZA()),2&o){const t=e.oxw(2);e.Q6J("formControl",t.control)("min",t.min)("max",t.max)("focusable",t.focusable)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)("tuiTextfieldCleaner",t.cleaner)("readOnly",t.readOnly)("pseudoInvalid",t.pseudoInvalid)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoActive",t.pseudoPressed)("disabledItemHandler",t.disabledItemHandler)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiHintAppearance",t.hintAppearance)}}function B(o,a){1&o&&(e.tHW(0,13),e._UZ(1,"code"),e.N_p())}function W(o,a){1&o&&(e.tHW(0,14),e._UZ(1,"div"),e._UZ(2,"strong"),e.N_p())}function K(o,a){1&o&&e.SDv(0,15)}function j(o,a){1&o&&e.SDv(0,16)}function w(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"tui-doc-demo",7),e.YNc(1,Y,2,18,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,B,2,0,"ng-template",8),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().disabled=l}),e.YNc(4,W,3,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().disabledItemHandler=l}),e.YNc(5,K,1,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().min=l}),e.YNc(6,j,1,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().max=l}),e.qZA(),e._UZ(7,"inherited-documentation")}if(2&o){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.xp6(1),e.Q6J("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max)}}function q(o,a){if(1&o&&(e.TgZ(0,"ol",17),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,18),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",19),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.tHW(8,20),e._UZ(9,"code"),e._UZ(10,"code"),e.N_p(),e.qZA(),e._UZ(11,"tui-doc-code",21),e.qZA(),e.TgZ(12,"li"),e._uU(13," Use "),e.TgZ(14,"code"),e._uU(15,"TuiInputMonthComponent"),e.qZA(),e._uU(16," in template: "),e._UZ(17,"tui-doc-code",22),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(6),e.Q6J("code",t.exampleForm),e.xp6(6),e.Q6J("code",t.exampleHtml)}}let k=(()=>{class o extends P.b{constructor(){super(...arguments),this.exampleForm=n.e(45722).then(n.t.bind(n,45722,17)),this.exampleModule=n.e(22580).then(n.t.bind(n,22580,17)),this.exampleHtml=n.e(82082).then(n.t.bind(n,82082,17)),this.example1={TypeScript:n.e(11176).then(n.t.bind(n,11176,17)),HTML:n.e(57536).then(n.t.bind(n,57536,17))},this.example2={TypeScript:n.e(46649).then(n.t.bind(n,46649,17)),HTML:n.e(62394).then(n.t.bind(n,62394,17))},this.example3={TypeScript:n.e(59990).then(n.t.bind(n,59990,17)),HTML:n.e(5748).then(n.t.bind(n,5748,17))},this.minVariants=[m.nNo,new m.qld(2019,2),new m.qld(2007,0)],this.maxVariants=[m.OyN,new m.qld(2020,2),new m.qld(2023,0)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[m.IyD,({month:t})=>t%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.cleaner=!1,this.control=new i.NI(null,i.kI.required)}}return o.\u0275fac=function(){let a;return function(u){return(a||(a=e.n5z(o)))(u||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["example-tui-input-month-range"]],features:[e._Bn([{provide:D.x,useExisting:(0,e.Gpc)(()=>o)}]),e.qOj],decls:4,vars:0,consts:function(){let a,t,u,l,d,E,O,C,F,p;return a=$localize`:␟2f97016068f46347a787d20f1d43451ccec5ed5d␟7600412415333750041:Component to input a range of months`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,u=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,l=$localize`:␟792a3526674c0e6247dd50b0d67e6f89d2580185␟8131541999290053051:With a context usage in disabledItemHandler`,d=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,E=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,O=$localize`:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `,C=$localize`:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `,F=$localize`:␟68f05b078a893528095914c11e82a34e214bdf59␟7892161855673473900: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputMonthRangeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,p=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,p=e.Zx4(p),[["header","InputMonthRange","package","KIT","type","components"],["pageTab",""],a,["id","base","heading",t,3,"content"],[1,"tui-space_bottom-4","b-form"],["id","sizes","heading",u,3,"content"],["id","context","heading",l,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","focusable","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","readOnly","pseudoInvalid","pseudoFocus","pseudoHover","pseudoActive","disabledItemHandler","tuiHintContent","tuiHintDirection","tuiHintAppearance"],d,E,O,C,[1,"b-demo-steps"],F,["filename","myComponent.module.ts",3,"code"],p,["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]]},template:function(t,u){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,Q,16,3,"ng-template",1),e.YNc(2,w,8,8,"ng-template",1),e.YNc(3,q,18,3,"ng-template",1),e.qZA())},directives:[I.q,x.n,A.f,U.L,H,$,y,v.F,Z.z,L.B,J.w,_.X,r.K,i.JJ,i.oH,V.aR,g.b,X.x,M.s,b.b,z.c],encapsulation:2,changeDetection:0}),o})(),ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[N.fV,R.f,i.UX,i.u5,f.ez,s.jzK,s.fNO,h.qC6,s.cnw,s.goS,s.HiG,S.Bz.forChild((0,N.Ve)(k))]]}),o})()}}]);