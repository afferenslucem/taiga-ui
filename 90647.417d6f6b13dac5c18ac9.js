"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[90647],{90647:(Je,f,n)=>{n.r(f),n.d(f,{ExampleTuiPrimitiveTextfieldModule:()=>Ze});var g=n(12057),T=n(24751),C=n(33982),_=n(29851),d=n(76040),c=n(48611),$=n(89570),e=n(74788);let X=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[T.u5,g.ez,_.Lx,_.mG,d.TuiModeModule,c.TuiAccordionModule]]}),i})(),Z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({}),i})();var J=n(77788),U=n(75695),b=n(82387),G=n(98204),H=n(57750),z=n(88331),Q=n(37159),Y=n(57068),B=n(79121),W=n(66596),F=n(68339),m=n(63060),p=n(62733),M=n(88494),P=n(91030),E=n(34880),j=n(67446),K=n(29070),w=n(54255),k=n(15491);function q(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"tui-svg",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().togglePasswordVisibility()}),e.qZA()}if(2&i){const t=e.oxw(),o=e.MAs(6);e.Q6J("tuiHint",o)("src",t.icon)}}function ee(i,l){if(1&i&&e._uU(0),2&i){const t=e.oxw();e.Oqu(t.hint)}}const te=["*"];let ie=(()=>{class i extends F.AbstractTuiControl{constructor(t,o){super(t,o),this.isPasswordHidden=!0}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return!!this.textfield&&this.textfield.focused}get icon(){return this.isPasswordHidden?"tuiIconEyeOffLarge":"tuiIconEyeLarge"}get hint(){return this.isPasswordHidden?"Show password":"Hide password"}get inputType(){return this.isPasswordHidden?"password":"text"}onValueChange(t){this.updateValue(t)}onFocused(t){this.updateFocused(t)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.a5,10),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["tui-primitive-textfield-example-1"]],viewQuery:function(t,o){if(1&t&&e.Gf(d.TuiPrimitiveTextfieldComponent,5),2&t){let a;e.iGM(a=e.CRH())&&(o.textfield=a.first)}},features:[e.qOj],ngContentSelectors:te,decls:7,vars:7,consts:[[3,"tuiTextfieldIcon","invalid","focusable","disabled","readOnly","value","valueChange","focusedChange"],["tuiTextfield","",3,"type"],["iconContent",""],["hintContent",""],[1,"icon",3,"tuiHint","src","click"]],template:function(t,o){if(1&t&&(e.F$t(),e.TgZ(0,"tui-primitive-textfield",0),e.NdJ("valueChange",function(u){return o.onValueChange(u)})("focusedChange",function(u){return o.onFocused(u)}),e.Hsn(1),e._UZ(2,"input",1),e.qZA(),e.YNc(3,q,1,2,"ng-template",null,2,e.W1O),e.YNc(5,ee,1,1,"ng-template",null,3,e.W1O)),2&t){const a=e.MAs(4);e.Q6J("tuiTextfieldIcon",a)("invalid",o.computedInvalid)("focusable",o.focusable)("disabled",o.disabled)("readOnly",o.readOnly)("value",o.value),e.xp6(2),e.Q6J("type",o.inputType)}},directives:[m.y,p.B,M.AW,P.M,E.P,j.D,K.x,w.t,k.D],styles:["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}"],changeDetection:0}),i})();var x=n(10200),I=n(68874),O=n(64374),ne=n(88135);function oe(i,l){1&i&&e._UZ(0,"tui-svg",7)}let ae=(()=>{class i extends F.AbstractTuiControl{constructor(t,o){super(t,o)}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return!!this.textfield&&this.textfield.focused}onValueChange(t){this.updateValue(t)}onFocused(t){this.updateFocused(t)}getFallbackValue(){return""}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.a5,10),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["tui-primitive-textfield-example-2"]],viewQuery:function(t,o){if(1&t&&e.Gf(d.TuiPrimitiveTextfieldComponent,5),2&t){let a;e.iGM(a=e.CRH())&&(o.textfield=a.first)}},features:[e._Bn([(0,d.tuiTextfieldOptionsProvider)({iconCleaner:"tuiIconChevronUp"})]),e.qOj],decls:11,vars:5,consts:function(){let l,t;return l=$localize`:␟f37c19d3d4ffc35f74d9ae6f62d686cb69b3890c␟270336154752876683:Modified cleaner icon`,t=$localize`:␟cf50d9a6ca344e37ff60255e1c9bd1332e292b01␟7576419264776917124:Override modified cleaner icon`,[["tuiTextfieldSize","m",1,"b-form",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["tuiLabel",l],[3,"value","valueChange","focusedChange"],["tuiTextfield","","type","email"],["tuiLabel",t,1,"tui-space_top-4"],[3,"value","iconCleaner","valueChange","focusedChange"],["iconCleaner",""],["src","tuiIconEdit2"]]},template:function(t,o){if(1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"label",1),e.TgZ(2,"tui-primitive-textfield",2),e.NdJ("valueChange",function(u){return o.onValueChange(u)})("focusedChange",function(u){return o.onFocused(u)}),e._uU(3," Type an email "),e._UZ(4,"input",3),e.qZA(),e.qZA(),e.TgZ(5,"label",4),e.TgZ(6,"tui-primitive-textfield",5),e.NdJ("valueChange",function(u){return o.onValueChange(u)})("focusedChange",function(u){return o.onFocused(u)}),e._uU(7," Type an email "),e._UZ(8,"input",3),e.qZA(),e.qZA(),e.qZA(),e.YNc(9,oe,1,0,"ng-template",null,6,e.W1O)),2&t){const a=e.MAs(10);e.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),e.xp6(2),e.Q6J("value",o.value),e.xp6(4),e.Q6J("value",o.value)("iconCleaner",a)}},directives:[T._Y,T.JL,T.F,x.s,I.x,O.b,ne.A,m.y,p.B,P.M,E.P],encapsulation:2,changeDetection:0}),i})();var le=n(31823),ue=n(6707),re=n(87205),de=n(3729),Te=n(44998),_e=n(89437),se=n(84848),ce=n(54476),me=n(17023),pe=n(16406),Ee=n(15800),fe=n(54218),ge=n(44124),Ce=n(76349);const Fe=["interactiveContent"];function Me(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"p"),e.tHW(1,2),e._UZ(2,"strong"),e.N_p(),e.qZA(),e.TgZ(3,"tui-doc-example",3),e.TgZ(4,"tui-notification",4),e._uU(5," Simplified version of "),e.TgZ(6,"a",5),e.TgZ(7,"code"),e._uU(8,"InputPassword"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"tui-primitive-textfield-example-1",6),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().password=a}),e._uU(10," Type a password "),e.qZA(),e.qZA(),e.TgZ(11,"tui-doc-example",7),e.TgZ(12,"tui-notification",4),e._uU(13," If you need to set some attributes or listen to events on native "),e.TgZ(14,"code"),e._uU(15,"input"),e.qZA(),e._uU(16," , you can put it inside with "),e.TgZ(17,"code"),e._uU(18,"Textfield"),e.qZA(),e._uU(19," directive as shown below "),e.qZA(),e.TgZ(20,"tui-primitive-textfield-example-2",8),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().example2Value=a}),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("content",t.example1),e.xp6(6),e.Q6J("ngModel",t.password),e.xp6(2),e.Q6J("content",t.example2),e.xp6(9),e.Q6J("ngModel",t.example2Value)}}function Pe(i,l){if(1&i&&(e._UZ(0,"tui-avatar",23),e._uU(1)),2&i){const t=l.$implicit;e.Q6J("text",t),e.xp6(1),e.hij(" ",t," ")}}function xe(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"tui-svg",24),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).onClick()}),e.qZA()}}function Ie(i,l){1&i&&e.SDv(0,25)}function Oe(i,l){1&i&&e.SDv(0,26)}function Se(i,l){1&i&&(e.tHW(0,27),e._UZ(1,"code"),e.N_p())}function ve(i,l){1&i&&(e.tHW(0,28),e.TgZ(1,"a",29),e._UZ(2,"code"),e.qZA(),e.TgZ(3,"p"),e._UZ(4,"code"),e.qZA(),e.N_p())}function De(i,l){1&i&&(e.tHW(0,30),e.TgZ(1,"a",31),e._UZ(2,"code"),e.qZA(),e.N_p())}function he(i,l){1&i&&(e.tHW(0,32),e.TgZ(1,"a",31),e._UZ(2,"code"),e.qZA(),e.N_p())}function Ne(i,l){1&i&&e.SDv(0,33)}function Le(i,l){1&i&&e.SDv(0,34)}function ye(i,l){1&i&&e.SDv(0,35)}function Re(i,l){1&i&&e.SDv(0,36)}function Ve(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"tui-primitive-textfield",9),e.NdJ("valueChange",function(a){return e.CHM(t),e.oxw().value=a}),e._uU(2," Component label "),e.qZA(),e.qZA(),e.YNc(3,Pe,2,2,"ng-template",null,10,e.W1O),e.YNc(5,xe,1,0,"ng-template",null,11,e.W1O),e.TgZ(7,"tui-doc-documentation"),e.YNc(8,Ie,1,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().disabled=a}),e.YNc(9,Oe,1,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().editable=a}),e.YNc(10,Se,2,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().filler=a}),e.YNc(11,ve,5,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().selectedIcon=a}),e.YNc(12,De,3,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().prefix=a}),e.YNc(13,he,3,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().postfix=a}),e.YNc(14,Ne,1,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().readOnly=a}),e.YNc(15,Le,1,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().invalid=a}),e.YNc(16,ye,1,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().value=a}),e.qZA(),e._UZ(17,"hint-controller-documentation"),e._UZ(18,"textfield-controller-documentation"),e._UZ(19,"inherited-documentation"),e.TgZ(20,"tui-doc-documentation",21),e.YNc(21,Re,1,0,"ng-template",22),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(t),e.oxw().textAlign=a}),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.Udp("text-align",t.textAlign),e.Q6J("focusable",t.focusable)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldCustomContent",t.customContent)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)("tuiTextfieldFiller",t.filler)("pseudoActive",t.pseudoPressed)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("disabled",t.disabled)("editable",t.editable)("filler",t.filler)("tuiTextfieldIcon",t.iconContent)("tuiTextfieldIconLeft",t.iconLeft)("readOnly",t.readOnly)("tuiTextfieldPrefix",t.prefix)("tuiTextfieldPostfix",t.postfix)("invalid",t.invalid)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiHintAppearance",t.hintAppearance)("value",t.value),e.xp6(7),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValue",t.editable),e.xp6(1),e.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",t.filler),e.xp6(1),e.Q6J("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.selectedIcon),e.xp6(1),e.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",t.prefix),e.xp6(1),e.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",t.postfix),e.xp6(1),e.Q6J("documentationPropertyValue",t.readOnly),e.xp6(1),e.Q6J("documentationPropertyValue",t.invalid),e.xp6(1),e.Q6J("documentationPropertyValue",t.value),e.xp6(5),e.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function Ae(i,l){if(1&i&&(e.TgZ(0,"ol",37),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,38),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",39),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,40),e.qZA(),e._UZ(9,"tui-doc-code",41),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(4),e.Q6J("code",t.exampleHtml)}}const S="Bell";let Xe=(()=>{class i extends H.O{constructor(){super(...arguments),this.interactiveIcon="",this.example1={TypeScript:n.e(75945).then(n.t.bind(n,75945,17)),HTML:n.e(34943).then(n.t.bind(n,34943,17)),LESS:n.e(35047).then(n.t.bind(n,35047,17))},this.example2={TypeScript:n.e(74039).then(n.t.bind(n,74039,17)),HTML:n.e(80036).then(n.t.bind(n,80036,17))},this.exampleModule=n.e(67875).then(n.t.bind(n,67875,17)),this.exampleHtml=n.e(83057).then(n.t.bind(n,83057,17)),this.themes=["Taiga UI","Bootstrap","Material"],this.theme=this.themes[0],this.iconVariants=["","tuiIconSearchLarge","Interactive content"],this.selectedIcon=this.iconVariants[0],this.iconLeftVariants=["","tuiIconPieChartLarge","tuiIconCreditCardLarge"],this.iconLeft="",this.iconAlignVariants=["left","right"],this.iconAlign=this.iconAlignVariants[1],this.typeVariants=["text","email","password","tel","url"],this.cleaner=!1,this.editable=!0,this.filler="",this.prefix="",this.postfix="",this.maxLengthVariants=[10],this.maxLength=null,this.inputModeVariants=["text","numeric"],this.inputMode=this.inputModeVariants[0],this.customContentVariants=["",S,"<span>LongTextContent</span>"],this.customContentSelected=this.customContentVariants[0],this.password="",this.example2Value="mail@example.com",this.value="",this.exampleText="",this.disabled=!1,this.readOnly=!1,this.labelOutside=!1,this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[2],this.hintContentVariants=["","Ivan Ivanov"],this.hintDirectionVariants=d.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.invalid=!1,this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0]}get customContent(){return this.customContentSelected===S?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get iconContent(){return""===this.selectedIcon?"":this.interactiveIcon&&"tuiIconSearchLarge"!==this.selectedIcon?this.interactiveIcon:"tuiIconSearchLarge"}get isBootstrap(){return this.theme===this.themes[1]}get isMaterial(){return this.theme===this.themes[2]}get placeholder(){return this.isBootstrap?"Type a value":"Theming sample"}get customizationSize(){return this.isBootstrap?"s":"l"}onClick(){console.info("Interactive icon clicked")}}return i.\u0275fac=function(){let l;return function(o){return(l||(l=e.n5z(i)))(o||i)}}(),i.\u0275cmp=e.Xpm({type:i,selectors:[["example-tui-primitive-textfield"]],viewQuery:function(t,o){if(1&t&&e.Gf(Fe,5),2&t){let a;e.iGM(a=e.CRH())&&(o.interactiveIcon=a.first)}},features:[e._Bn([{provide:G.x,useExisting:(0,e.Gpc)(()=>i)}]),e.qOj],decls:4,vars:0,consts:function(){let l,t,o,a,u,v,s,D,h,N,L,y,R,V,A;return l=$localize`:␟0a19998f90076b7d85207fea44209d8d3b9fcb5d␟5194718672583852151: PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Does not work with Angular forms${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,t=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,o=$localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`,a=$localize`:␟5195232cc6d6804f2b83c984b763d494b95728e8␟4703780784365037889: Disabled state `,u=$localize`:␟77c762ac18c6306d12dce74874a5fd96978eee9c␟8717823635323002701: Native input allows inputting `,v=$localize`:␟419fa02548c87627827951ec21d55c9dc384ce06␟1888868353645452552: Pale text suggestion for input (e.g. HH:MM:SS for time). Use ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiTextfieldFiller${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: instead `,s=$localize`:␟50404f2c99866f73bc25b4a3c5c51e10841a340b␟4610700863550936654: Icon content. If content is a string, it is used as stringified svg or a name of icon registered in ${"\ufffd#1\ufffd"}:START_LINK:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:SvgService${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:${"\ufffd#3\ufffd"}:START_PARAGRAPH: Requires you to import ${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiTextfieldControllerModule${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_PARAGRAPH:`,s=e.Zx4(s),D=$localize`:␟33c14f705b72544c3881517af4881b87d397d8f6␟4259878861045276785: Uneditable text before value. For example, currency symbol in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputNumber${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK: . `,h=$localize`:␟d24fc719133afa770a5d50c273a967e6b447bda8␟1195719053204982784: Uneditable text after value. For example, currency symbol in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputNumber${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK: . `,N=$localize`:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `,L=$localize`:␟28900c6ae3d4c1ba49407b4808673d3273f10d95␟6963908824346094281: Invalid state `,y=$localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `,R=$localize`:␟f53a375d54d7a00804c315043a43ae281c9efcb8␟226068063890007003: Custom align content by text-align `,V=$localize`:␟d9976023c60bcfadd11e6b545cc66aeee8d631af␟6346211509068135211: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPrimitiveTextfieldModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,A=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","PrimitiveTextfield","package","CORE","type","components"],["pageTab",""],l,["id","example-size","heading",t,3,"content"],[1,"tui-space_bottom-4","b-form"],["tuiLink","","routerLink","/components/input-password"],[1,"b-form",3,"ngModel","ngModelChange"],["id","options","heading",o,3,"content"],[3,"ngModel","ngModelChange"],[3,"focusable","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiTextfieldFiller","pseudoActive","pseudoFocus","pseudoHover","disabled","editable","filler","tuiTextfieldIcon","tuiTextfieldIconLeft","readOnly","tuiTextfieldPrefix","tuiTextfieldPostfix","invalid","tuiHintContent","tuiHintDirection","tuiHintAppearance","value","valueChange"],["template",""],["interactiveContent",""],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","filler","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldIcon","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","readOnly","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","invalid","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input-output","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.text-align",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["size","xs",1,"avatar",3,"text"],["src","tuiIconCalendarLarge",1,"icon-button",3,"click"],a,u,v,s,["tuiLink","","routerLink","/services/svg-service"],D,["tuiLink","","routerLink","/components/input-number"],h,N,L,y,R,[1,"b-demo-steps"],V,["filename","myComponent.module.ts",3,"code"],A,["filename","myComponent.template.html",3,"code"]]},template:function(t,o){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,Me,21,4,"ng-template",1),e.YNc(2,Ve,22,39,"ng-template",1),e.YNc(3,Ae,10,2,"ng-template",1),e.qZA())},directives:[z.q,Q.n,Y.f,B.L,W.V,C.yS,ie,T.JJ,T.On,ae,le.F,m.y,p.B,O.b,ue.B,I.x,x.s,re.k,M.AW,de.aR,Te.A,_e.T,se.bZ,ce.z,me.B,pe.F,Ee.O,fe.w,ge.J,E.P,Ce.c],styles:["[_nghost-%COMP%]{display:block}.icon-button[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{margin-right:.5rem}.label[_ngcontent-%COMP%]{width:22.5rem}.input[_ngcontent-%COMP%]{margin-top:.25rem}"],changeDetection:0}),i})(),Ze=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.ez,T.u5,T.UX,U.f,J.I,b.J,d.TuiPrimitiveTextfieldModule,d.TuiTextfieldControllerModule,d.TuiNotificationModule,c.TuiAvatarModule,d.TuiLinkModule,d.TuiSvgModule,d.TuiButtonModule,$.wq,d.TuiHintModule,c.TuiRadioListModule,X,d.TuiLabelModule,Z,_.fV,C.Bz.forChild((0,_.Ve)(Xe))]]}),i})()}}]);