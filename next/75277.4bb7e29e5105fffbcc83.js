"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[75277],{75277:(Pe,d,n)=>{n.r(d),n.d(d,{ExampleTuiInputNumberModule:()=>fe});var h=n(12057),a=n(24751),N=n(33982),Z=n(23121),E=n(29851),_=n(76040),D=n(418),b=n(75695),e=n(74788),v=n(82880),B=n(98204),J=n(88331),G=n(37159),V=n(66596),X=n(57068),T=n(16753),m=n(13735),c=n(84848),H=n(99886);let z=(()=>{class o{constructor(){this.control=new a.NI(100)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-number-example-1"]],decls:9,vars:12,consts:[["tuiHintContent","Dollar sign is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","prefix"],["tuiHintContent","Euro sign (numeric code 978) is commonly placed AFTER the amount. Use [postfix].",3,"formControl","postfix"],["tuiHintContent","Pound sign (numeric code 826) is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","prefix"]],template:function(t,F){1&t&&(e.TgZ(0,"tui-input-number",0),e.ALo(1,"tuiCurrency"),e._uU(2," Type a sum\n"),e.qZA(),e.TgZ(3,"tui-input-number",1),e.ALo(4,"tuiCurrency"),e._uU(5," Type a sum\n"),e.qZA(),e.TgZ(6,"tui-input-number",2),e.ALo(7,"tuiCurrency"),e._uU(8," Type a sum\n"),e.qZA()),2&t&&(e.Q6J("formControl",F.control)("prefix",e.lcZ(1,6,"USD")),e.xp6(3),e.Q6J("formControl",F.control)("postfix",e.lcZ(4,8,"978")),e.xp6(3),e.Q6J("formControl",F.control)("prefix",e.lcZ(7,10,826)))},directives:[T.q,m.g,c.bZ,a.JJ,a.oH],pipes:[H.i],styles:["tui-input-number[_ngcontent-%COMP%]{max-width:20rem}tui-input-number[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),o})();var Q=n(79121),M=n(10200),Y=n(91030),g=n(68874);let K=(()=>{class o{constructor(){this.testForm=new a.cw({testValue:new a.NI})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-number-example-2"]],decls:10,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s","postfix","kg"],["tuiTextfield","","name","potato"],["formControlName","testValue","postfix","L","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside"],["id","milk","tuiTextfield",""],["postfix","cm","formControlName","testValue",1,"tui-space_top-2"],["tuiTextfield","",2,"color","orange"]],template:function(t,F){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-number",1),e._uU(2," Potatos "),e._UZ(3,"input",2),e.qZA(),e.TgZ(4,"tui-input-number",3),e._uU(5," Milk "),e._UZ(6,"input",4),e.qZA(),e.TgZ(7,"tui-input-number",5),e._uU(8," Carrot "),e._UZ(9,"input",6),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",F.testForm),e.xp6(4),e.Q6J("tuiTextfieldLabelOutside",!0))},directives:[a._Y,a.JL,a.sg,T.q,m.g,a.JJ,a.u,M.s,Y.M,g.x],encapsulation:2,changeDetection:0}),o})(),W=(()=>{class o{constructor(){this.testForm=new a.cw({testValue:new a.NI(Math.PI)})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-number-example-3"]],decls:5,vars:2,consts:[[1,"b-form",3,"formGroup"],["decimal","not-zero","formControlName","testValue",3,"precision"]],template:function(t,F){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-number",1),e.TgZ(2,"strong"),e._uU(3,"\u03c0"),e.qZA(),e._uU(4," -value "),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",F.testForm),e.xp6(1),e.Q6J("precision",8))},directives:[a._Y,a.JL,a.sg,T.q,m.g,a.JJ,a.u],encapsulation:2,changeDetection:0}),o})(),j=(()=>{class o{constructor(){this.value=1234.56}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-number-example-4"]],features:[e._Bn([{provide:_.TUI_NUMBER_FORMAT,useValue:{decimalSeparator:".",thousandSeparator:","}}])],decls:2,vars:1,consts:[["prefix","$","tuiHintContent","Using cleaner is not recommended ;)",1,"input",3,"ngModel","ngModelChange"]],template:function(t,F){1&t&&(e.TgZ(0,"tui-input-number",0),e.NdJ("ngModelChange",function(i){return F.value=i}),e._uU(1," Type a sum\n"),e.qZA()),2&t&&e.Q6J("ngModel",F.value)},directives:[T.q,m.g,c.bZ,a.JJ,a.On],styles:[".input[_ngcontent-%COMP%]{text-align:right;width:320px}"],changeDetection:0}),o})(),q=(()=>{class o{constructor(){this.value=123.56}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-number-example-5"]],features:[e._Bn([{provide:_.TUI_NUMBER_FORMAT,useValue:{decimalSeparator:",",thousandSeparator:"."}}])],decls:2,vars:2,consts:[["prefix","\xa5 ","decimal","never",3,"postfix","ngModel","ngModelChange"]],template:function(t,F){1&t&&(e.TgZ(0,"tui-input-number",0),e.NdJ("ngModelChange",function(i){return F.value=i}),e._uU(1," Type a sum\n"),e.qZA()),2&t&&e.Q6J("postfix",F.value?",00":" ,00")("ngModel",F.value)},directives:[T.q,m.g,a.JJ,a.On],encapsulation:2,changeDetection:0}),o})();var k=n(31823),w=n(54476),ee=n(17023),te=n(54218),ne=n(3729),oe=n(64374),ue=n(6707),Fe=n(44998),ie=n(89437),ae=n(87205),le=n(76349);function re(o,u){1&o&&(e.TgZ(0,"p"),e.tHW(1,22),e._UZ(2,"code"),e._UZ(3,"code"),e._UZ(4,"a",23),e.N_p(),e.qZA())}function _e(o,u){1&o&&(e._uU(0," Customize input via "),e.TgZ(1,"a",24),e._uU(2," TextfieldControllers "),e.qZA(),e._uU(3," . "))}function Te(o,u){1&o&&(e._uU(0," Use property "),e.TgZ(1,"code"),e._uU(2,"[precision]"),e.qZA(),e._uU(3," to configure a number of digits after comma. "))}function me(o,u){if(1&o&&(e.TgZ(0,"div",2),e.SDv(1,3),e.qZA(),e.TgZ(2,"section"),e.tHW(3,4),e._UZ(4,"h3"),e.TgZ(5,"ul",5),e.TgZ(6,"li",6),e.TgZ(7,"a",7),e._UZ(8,"strong"),e.qZA(),e.qZA(),e.TgZ(9,"li",6),e.TgZ(10,"a",8),e._UZ(11,"strong"),e.qZA(),e.qZA(),e.TgZ(12,"li",6),e.TgZ(13,"a",9),e._UZ(14,"strong"),e.qZA(),e._UZ(15,"code"),e.qZA(),e.TgZ(16,"li",6),e.TgZ(17,"a",10),e._UZ(18,"strong"),e.qZA(),e._UZ(19,"code"),e.qZA(),e.qZA(),e.N_p(),e.qZA(),e.TgZ(20,"p"),e.tHW(21,11),e._UZ(22,"a",12),e.N_p(),e.qZA(),e.TgZ(23,"tui-doc-example",13),e.YNc(24,re,5,0,"ng-template",null,14,e.W1O),e._UZ(26,"tui-input-number-example-1"),e.qZA(),e.TgZ(27,"tui-doc-example",15),e.YNc(28,_e,4,0,"ng-template",null,16,e.W1O),e.TgZ(30,"tui-notification",17),e._uU(31," If you need to set some attributes or listen to events on native "),e.TgZ(32,"code"),e._uU(33,"input"),e.qZA(),e._uU(34," , you can put it inside with "),e.TgZ(35,"code"),e._uU(36,"Textfield"),e.qZA(),e._uU(37," directive as shown below "),e.qZA(),e._UZ(38,"tui-input-number-example-2"),e.qZA(),e.TgZ(39,"tui-doc-example",18),e.YNc(40,Te,4,0,"ng-template",null,19,e.W1O),e._UZ(42,"tui-input-number-example-3"),e.qZA(),e.TgZ(43,"tui-doc-example",20),e._UZ(44,"tui-input-number-example-4"),e.qZA(),e.TgZ(45,"tui-doc-example",21),e._UZ(46,"tui-input-number-example-5"),e.qZA()),2&o){const t=e.MAs(25),F=e.MAs(29),l=e.MAs(41),i=e.oxw();e.xp6(23),e.Q6J("content",i.example1)("description",t),e.xp6(4),e.Q6J("content",i.example2)("description",F),e.xp6(12),e.Q6J("content",i.example3)("description",l),e.xp6(4),e.Q6J("content",i.example4),e.xp6(2),e.Q6J("content",i.example5)}}function se(o,u){if(1&o&&(e.TgZ(0,"tui-input-number",35),e._uU(1," Type a sum "),e.qZA()),2&o){const t=e.oxw(2);e.Udp("text-align",t.textAlign),e.Q6J("formControl",t.control)("focusable",t.focusable)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldCustomContent",t.customContent)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)("tuiTextfieldPrefix",t.prefix)("tuiTextfieldPostfix",t.postfix)("tuiTextfieldFiller",t.filler)("prefix",t.prefix)("postfix",t.postfix)("min",t.min)("max",t.max)("pseudoInvalid",t.pseudoInvalid)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoActive",t.pseudoPressed)("precision",t.precision)("readOnly",t.readOnly)("decimal",t.decimal)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiHintAppearance",t.hintAppearance)}}function pe(o,u){1&o&&(e.tHW(0,36),e._UZ(1,"code"),e.N_p())}function ce(o,u){1&o&&e.SDv(0,37)}function de(o,u){1&o&&e.SDv(0,38)}function Ne(o,u){1&o&&(e.tHW(0,39),e._UZ(1,"code"),e.N_p())}function Ee(o,u){1&o&&(e.tHW(0,40),e._UZ(1,"code"),e.N_p())}function De(o,u){1&o&&e.SDv(0,41)}function Me(o,u){1&o&&e.SDv(0,42)}function ge(o,u){1&o&&e.SDv(0,43)}function Ce(o,u){if(1&o){const t=e.EpF();e.TgZ(0,"tui-doc-demo",25),e.YNc(1,se,2,26,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,pe,2,0,"ng-template",26),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().disabled=l}),e.YNc(4,ce,1,0,"ng-template",27),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().min=l}),e.YNc(5,de,1,0,"ng-template",28),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().max=l}),e.YNc(6,Ne,2,0,"ng-template",29),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().prefix=l}),e.YNc(7,Ee,2,0,"ng-template",30),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().postfix=l}),e.YNc(8,De,1,0,"ng-template",31),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().precision=l}),e.YNc(9,Me,1,0,"ng-template",32),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().decimal=l}),e.qZA(),e._UZ(10,"inherited-documentation"),e.TgZ(11,"tui-doc-documentation",33),e.YNc(12,ge,1,0,"ng-template",34),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().textAlign=l}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValues",t.prefixVariants)("documentationPropertyValue",t.prefix),e.xp6(1),e.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValues",t.prefixVariants)("documentationPropertyValue",t.postfix),e.xp6(1),e.Q6J("documentationPropertyValues",t.precisionVariants)("documentationPropertyValue",t.precision),e.xp6(1),e.Q6J("documentationPropertyValues",t.decimalVariants)("documentationPropertyValue",t.decimal),e.xp6(3),e.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function Oe(o,u){if(1&o&&(e.TgZ(0,"ol",44),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,45),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",46),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.tHW(8,47),e._UZ(9,"code"),e._UZ(10,"code"),e.N_p(),e.qZA(),e._UZ(11,"tui-doc-code",48),e.qZA(),e.TgZ(12,"li"),e.TgZ(13,"p"),e.SDv(14,49),e.qZA(),e._UZ(15,"tui-doc-code",50),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(6),e.Q6J("code",t.exampleForm),e.xp6(4),e.Q6J("code",t.exampleHtml)}}let Se=(()=>{class o extends v.b{constructor(){super(...arguments),this.exampleForm=n.e(25924).then(n.t.bind(n,25924,17)),this.exampleModule=n.e(19856).then(n.t.bind(n,19856,17)),this.exampleHtml=n.e(19624).then(n.t.bind(n,19624,17)),this.example1={HTML:n.e(61406).then(n.t.bind(n,61406,17)),TypeScript:n.e(6456).then(n.t.bind(n,6456,17)),LESS:n.e(35512).then(n.t.bind(n,35512,17))},this.example2={HTML:n.e(64780).then(n.t.bind(n,64780,17)),TypeScript:n.e(86101).then(n.t.bind(n,86101,17))},this.example3={HTML:n.e(37519).then(n.t.bind(n,37519,17)),TypeScript:n.e(10311).then(n.t.bind(n,10311,17))},this.example4={TypeScript:n.e(34933).then(n.t.bind(n,34933,17)),HTML:n.e(34468).then(n.t.bind(n,34468,17)),LESS:n.e(70707).then(n.t.bind(n,70707,17))},this.example5={TypeScript:n.e(89302).then(n.t.bind(n,89302,17)),HTML:n.e(82435).then(n.t.bind(n,82435,17))},this.minVariants=[-1/0,-500,5,25],this.min=this.minVariants[0],this.maxVariants=[1/0,10,500],this.max=this.maxVariants[0],this.autocompleteVariants=["off","transaction-amount"],this.autocomplete="",this.decimalVariants=["not-zero","always","never"],this.decimal=this.decimalVariants[0],this.cleaner=!1,this.precisionVariants=[2,3,4],this.precision=this.precisionVariants[0],this.control=new a.NI(6432,a.kI.required)}}return o.\u0275fac=function(){let u;return function(F){return(u||(u=e.n5z(o)))(F||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["example-tui-input-number"]],features:[e._Bn([{provide:B.x,useExisting:(0,e.Gpc)(()=>o)}]),e.qOj],decls:4,vars:0,consts:function(){let u,t,F,l,i,C,O,S,s,f,P,U,x,R,I,L,$,y,p,A;return u=$localize`:␟10ffa175baed8ebf9062197a5bad595f5480f78e␟1048262239433767130: A component to input numbers. Control value is also of number type. `,t=$localize`:␟135d3647ed7a3ea1b3d5080b3113250a2f018540␟5806261041507532016:${"\ufffd#4\ufffd"}:START_HEADING_LEVEL3:There are also other components to input numbers:${"\ufffd/#4\ufffd"}:CLOSE_HEADING_LEVEL3:${"\ufffd#5\ufffd"}:START_UNORDERED_LIST:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#7\ufffd"}:START_LINK:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputCount${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (integers only) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#10\ufffd"}:START_LINK_1:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:Slider${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK:${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#13\ufffd"}:START_LINK_2:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputSlider${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (it uses ${"[\ufffd#15\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:InputNumber${"[\ufffd/#15\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: inside) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#17\ufffd"}:START_LINK_3:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputRange${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (it uses ${"[\ufffd#15\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:InputNumber${"[\ufffd/#15\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: inside) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"\ufffd/#5\ufffd"}:CLOSE_UNORDERED_LIST:`,t=e.Zx4(t),F=$localize`:␟f04807d740cad8bf4061798407cd7d4eda1851b1␟5187759459933626480: Number formatting can be customized with ${"\ufffd#22\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#22\ufffd"}:CLOSE_LINK: token. `,l=$localize`:␟32072c7fb0469aaf82d256a59b3e0d6ecce973b9␟4327471061205783634:Currency`,i=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,C=$localize`:␟281bab00c72643e8a46c97d760098178f7bca379␟6364160638647394724:8 digits after comma`,O=$localize`:␟1e39c3e479610bfcb275d70e5797a7c144e9846e␟4961291854954937284:Align to the right`,S=$localize`:␟1254bd53a81179b793dbdce2ac9307e07cbfe883␟6787854778648694703:Prefix and postfix`,s=$localize`:␟704ffcbd53b377c11d2bc072068ffa7a5ee5312b␟4971956858864594750: To input money use properties ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:[postfix]${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:[prefix]${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: . To get currency symbol use pipe ${"\ufffd#4\ufffd"}:START_LINK: tuiCurrency ${"\ufffd/#4\ufffd"}:CLOSE_LINK: . `,s=e.Zx4(s),f=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,P=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,U=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,x=$localize`:␟d55d1388b4efab9ee15f5c14ce1c120f40729dcd␟1879425198292284445: A prefix symbol, like currency. Use ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiTextfieldPrefix${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: instead `,R=$localize`:␟7b61da6cab4a3822fad7c3ec823f861a1cbe2d42␟9096865805394289506: A postfix symbol, like currency. Use ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiTextfieldPostfix${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: instead `,I=$localize`:␟4d605907abe7259a5f8375543b52c8a01272002c␟7859588428304649828: A number of digits after comma `,L=$localize`:␟29ca7cd63e443b8d4cc789b248893976685ce792␟4020917276602472682: Show/hide decimal `,$=$localize`:␟f53a375d54d7a00804c315043a43ae281c9efcb8␟226068063890007003: Custom align content by text-align `,y=$localize`:␟ff39c2adbe221092857a8cdbd75bce39a6e5d5e5␟4070105638851960915: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputNumberModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,p=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,p=e.Zx4(p),A=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputNumber","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],u,t,[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["tuiLink","","routerLink","/components/input-count"],["tuiLink","","routerLink","/components/slider"],["tuiLink","","routerLink","/components/input-slider"],["tuiLink","","routerLink","/components/input-range"],F,["tuiLink","","routerLink","/utils/tokens","fragment","number-format"],["id","currency","heading",l,3,"content","description"],["currencyPipeDescription",""],["id","sizes","heading",i,3,"content","description"],["textFieldControllerDescription",""],[1,"tui-space_bottom-4","b-form"],["id","precision","heading",C,3,"content","description"],["precisionDescription",""],["id","align","heading",O,"description","With currency symbol as prefix and custom format",3,"content"],["id","prefix-postfix","heading",S,3,"content"],s,["tuiLink","","routerLink","/pipes/currency"],["tuiLink","","routerLink","/directives/textfield-controller"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","precision","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimal","documentationPropertyMode","input","documentationPropertyType","TuiDecimalT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.text-align",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiTextfieldPrefix","tuiTextfieldPostfix","tuiTextfieldFiller","prefix","postfix","min","max","pseudoInvalid","pseudoFocus","pseudoHover","pseudoActive","precision","readOnly","decimal","tuiHintContent","tuiHintDirection","tuiHintAppearance"],f,P,U,x,R,I,L,$,[1,"b-demo-steps"],y,["filename","myComponent.module.ts",3,"code"],p,["filename","myComponent.component.ts",3,"code"],A,["filename","myComponent.template.html",3,"code"]]},template:function(t,F){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,me,47,8,"ng-template",1),e.YNc(2,Ce,13,18,"ng-template",1),e.YNc(3,Oe,16,3,"ng-template",1),e.qZA())},directives:[J.q,G.n,V.V,N.yS,X.f,z,Q.L,K,W,j,q,k.F,w.z,ee.B,te.w,T.q,m.g,a.JJ,a.oH,ne.aR,oe.b,ue.B,g.x,M.s,Fe.A,ie.T,ae.k,c.bZ,le.c],encapsulation:2,changeDetection:0}),o})(),fe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,a.u5,a.UX,D.TuiInputNumberModule,Z.TuiCurrencyPipeModule,_.TuiSvgModule,D.TuiRadioListModule,_.TuiButtonModule,_.TuiLinkModule,_.TuiTextfieldControllerModule,_.TuiNotificationModule,E.fV,b.f,_.TuiHintModule,N.Bz.forChild((0,E.Ve)(Se))]]}),o})()}}]);