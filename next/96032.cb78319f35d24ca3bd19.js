"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[96032],{96032:(q,N,e)=>{e.r(N),e.d(N,{ExampleTuiInputPhoneInternationalModule:()=>w});var m=e(12057),i=e(24751),g=e(33982),E=e(29851),s=e(76040),_=e(418),M=e(75695),t=e(74788),l=e(72773),h=e(82880),A=e(98204),F=e(88331),f=e(37159),S=e(57068),p=e(66015),I=e(68874),y=e(76189);let D=(()=>{class o{constructor(){this.testForm=new i.cw({testValue:new i.NI("+77777777777",i.kI.required)}),this.countries=[l.Xi.RU,l.Xi.KZ,l.Xi.UA,l.Xi.BY],this.countryIsoCode=l.Xi.RU,this.contact={phone:"+375123456789",phoneCountryCode:l.Xi.BY}}patchValue(){var n;this.countryIsoCode=this.contact.phoneCountryCode,null===(n=this.testForm.get("testValue"))||void 0===n||n.patchValue(this.contact.phone)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-input-phone-international-example-1"]],decls:4,vars:4,consts:[[3,"formGroup"],["formControlName","testValue",1,"input",3,"countries","tuiTextfieldLabelOutside","countryIsoCode","countryIsoCodeChange"],["tuiButton","",1,"tui-space_top-4",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-input-phone-international",1),t.NdJ("countryIsoCodeChange",function(r){return a.countryIsoCode=r}),t.qZA(),t.qZA(),t.TgZ(2,"button",2),t.NdJ("click",function(){return a.patchValue()}),t._uU(3," Patch value\n"),t.qZA()),2&n&&(t.Q6J("formGroup",a.testForm),t.xp6(1),t.Q6J("countries",a.countries)("tuiTextfieldLabelOutside",!0)("countryIsoCode",a.countryIsoCode))},directives:[i._Y,i.JL,i.sg,p.Q,i.JJ,i.u,I.x,y.v],styles:[".input[_ngcontent-%COMP%]{max-width:24.375rem}"],changeDetection:0}),o})();var R=e(79121),x=e(46780);const L=function(){return[]};let U=(()=>{class o{constructor(){this.testForm=new i.cw({testValue:new i.NI("",i.kI.minLength(12))}),this.countries=Object.values(l.Xi),this.countryIsoCode=l.Xi.US}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-input-phone-international-example-2"]],decls:5,vars:8,consts:[[3,"formGroup"],["formControlName","testValue",1,"input",3,"countries","countryIsoCode","countryIsoCodeChange"]],template:function(n,a){1&n&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-input-phone-international",1),t.NdJ("countryIsoCodeChange",function(r){return a.countryIsoCode=r}),t.ALo(2,"async"),t.ALo(3,"tuiSortCountries"),t._uU(4," Type your number "),t.qZA(),t.qZA()),2&n&&(t.Q6J("formGroup",a.testForm),t.xp6(1),t.Q6J("countries",t.lcZ(2,3,t.lcZ(3,5,a.countries))||t.DdM(7,L))("countryIsoCode",a.countryIsoCode))},directives:[i._Y,i.JL,i.sg,p.Q,i.JJ,i.u],pipes:[m.Ov,x.T],styles:[".input[_ngcontent-%COMP%]{max-width:24.375rem}"],changeDetection:0}),o})();var H=e(31823),Z=e(54476),$=e(17023),v=e(54218),J=e(64374),X=e(33250),V=e(84848),G=e(76349);function Q(o,u){if(1&o&&(t.TgZ(0,"p"),t.SDv(1,2),t.qZA(),t.TgZ(2,"tui-doc-example",3),t._UZ(3,"tui-input-phone-international-example-1"),t.qZA(),t.TgZ(4,"tui-doc-example",4),t.TgZ(5,"tui-notification",5),t._uU(6," Use "),t.TgZ(7,"code"),t._uU(8,"SortCountries"),t.qZA(),t._uU(9," pipe from "),t.TgZ(10,"code"),t._uU(11,"TuiSortCountriesPipeModule"),t.qZA(),t._uU(12," to sort countries according to your current language. "),t.qZA(),t._UZ(13,"tui-input-phone-international-example-2"),t.qZA()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("content",n.example1),t.xp6(2),t.Q6J("content",n.example2)}}function z(o,u){if(1&o){const n=t.EpF();t.TgZ(0,"tui-input-phone-international",10),t.NdJ("countryIsoCodeChange",function(T){return t.CHM(n),t.oxw(2).countryIsoCode=T}),t._uU(1," Type a phone number "),t.qZA()}if(2&o){const n=t.oxw(2);t.Q6J("formControl",n.control)("focusable",n.focusable)("countries",n.countries)("readOnly",n.readOnly)("tuiTextfieldCleaner",n.cleaner)("tuiDropdownDirection",n.dropdownDirection)("tuiDropdownMinHeight",n.dropdownMinHeight)("tuiDropdownMaxHeight",n.dropdownMaxHeight)("tuiHintContent",n.hintContent)("tuiHintDirection",n.hintDirection)("tuiHintAppearance",n.hintAppearance)("pseudoHover",n.pseudoHovered)("pseudoFocus",n.pseudoFocused)("pseudoInvalid",n.pseudoInvalid)("tuiTextfieldLabelOutside",n.labelOutside)("countryIsoCode",n.countryIsoCode)}}function B(o,u){1&o&&(t.tHW(0,11),t._UZ(1,"code"),t.N_p())}function Y(o,u){1&o&&t.SDv(0,12)}function b(o,u){1&o&&t.SDv(0,13)}function j(o,u){if(1&o){const n=t.EpF();t.TgZ(0,"tui-doc-demo",6),t.YNc(1,z,2,16,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,B,2,0,"ng-template",7),t.NdJ("documentationPropertyValueChange",function(T){return t.CHM(n),t.oxw().disabled=T}),t.YNc(4,Y,1,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(T){return t.CHM(n),t.oxw().countries=T}),t.YNc(5,b,1,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(T){return t.CHM(n),t.oxw().countryIsoCode=T}),t.qZA(),t._UZ(6,"inherited-documentation")}if(2&o){const n=t.oxw();t.Q6J("control",n.control),t.xp6(3),t.Q6J("documentationPropertyValue",n.disabled),t.xp6(1),t.Q6J("documentationPropertyValues",n.countriesVariants)("documentationPropertyValue",n.countries),t.xp6(1),t.Q6J("documentationPropertyValues",n.countryIsoCodeVariants)("documentationPropertyValue",n.countryIsoCode)}}function K(o,u){if(1&o&&(t.TgZ(0,"ol",14),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,15),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",16),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.tHW(8,17),t._UZ(9,"code"),t._UZ(10,"code"),t.N_p(),t.qZA(),t._UZ(11,"tui-doc-code",18),t.qZA(),t.TgZ(12,"li"),t.TgZ(13,"p"),t.SDv(14,19),t.qZA(),t._UZ(15,"tui-doc-code",20),t.qZA(),t.qZA()),2&o){const n=t.oxw();t.xp6(5),t.Q6J("code",n.exampleModule),t.xp6(6),t.Q6J("code",n.exampleForm),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let W=(()=>{class o extends h.b{constructor(){super(...arguments),this.exampleForm=e.e(67698).then(e.t.bind(e,67698,17)),this.exampleModule=e.e(84308).then(e.t.bind(e,84308,17)),this.exampleHtml=e.e(18164).then(e.t.bind(e,18164,17)),this.example1={TypeScript:e.e(61363).then(e.t.bind(e,61363,17)),HTML:e.e(62125).then(e.t.bind(e,62125,17)),LESS:e.e(48065).then(e.t.bind(e,48065,17))},this.example2={TypeScript:e.e(76028).then(e.t.bind(e,76028,17)),HTML:e.e(13763).then(e.t.bind(e,13763,17)),LESS:e.e(20244).then(e.t.bind(e,20244,17))},this.cleaner=!1,this.control=new i.NI("",[i.kI.required,i.kI.minLength(9)]),this.countriesVariants=[[l.Xi.RU,l.Xi.KZ,l.Xi.UA,l.Xi.BY],Object.values(l.Xi)],this.countries=this.countriesVariants[0],this.countryIsoCodeVariants=[l.Xi.RU,l.Xi.KZ,l.Xi.UA,l.Xi.BY],this.countryIsoCode=this.countryIsoCodeVariants[0],this.labelOutside=!0}}return o.\u0275fac=function(){let u;return function(a){return(u||(u=t.n5z(o)))(a||o)}}(),o.\u0275cmp=t.Xpm({type:o,selectors:[["example-tui-input-phone-international"]],features:[t._Bn([{provide:A.x,useExisting:(0,t.Gpc)(()=>o)}]),t.qOj],decls:4,vars:0,consts:function(){let u,n,a,T,r,O,C,d,P;return u=$localize`:␟e6a9c5f8ed29fc6385948897fb5c70e1822bb9ed␟5478561261855774640:Allows to input phone number in international format`,n=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟c150954294b192344cd8128f107d0609281e937e␟6100465147963561455:All available countries`,T=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,r=$localize`:␟2605436fc68fe6f28c38cc283c805404c1c4fe7d␟3337127772712145540: Array of ISO-codes of countries to choose `,O=$localize`:␟86063816038d414b35c237ad8c8a46b14e169a07␟1487566375988482708: ISO-code of selected country `,C=$localize`:␟2c3923c6968ec5417c5a5e45ba3645399d72f3c3␟7217508107343995741: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputPhoneInternationalModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,d=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,d=t.Zx4(d),P=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputPhoneInternational","package","KIT","type","components"],["pageTab",""],u,["id","base","heading",n,3,"content"],["id","all-countries","heading",a,3,"content"],[1,"tui-space_bottom-3"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countries","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiCountryIsoCode>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countryIsoCode","documentationPropertyMode","input-output","documentationPropertyType","TuiCountryIsoCode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","countries","readOnly","tuiTextfieldCleaner","tuiDropdownDirection","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintAppearance","pseudoHover","pseudoFocus","pseudoInvalid","tuiTextfieldLabelOutside","countryIsoCode","countryIsoCodeChange"],T,r,O,[1,"b-demo-steps"],C,["filename","myComponent.module.ts",3,"code"],d,["filename","myComponent.component.ts",3,"code"],P,["filename","myComponent.template.html",3,"code"]]},template:function(n,a){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,Q,14,2,"ng-template",1),t.YNc(2,j,7,6,"ng-template",1),t.YNc(3,K,16,3,"ng-template",1),t.qZA())},directives:[F.q,f.n,S.f,D,R.L,U,H.F,Z.z,$.B,v.w,p.Q,i.JJ,i.oH,J.b,X.Ek,V.bZ,I.x,G.c],encapsulation:2,changeDetection:0}),o})(),w=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,i.u5,i.UX,_.TuiInputPhoneInternationalModule,M.f,s.TuiTextfieldControllerModule,s.TuiDropdownModule,s.TuiHintModule,E.fV,s.TuiButtonModule,_.TuiSortCountriesPipeModule,s.TuiNotificationModule,g.Bz.forChild((0,E.Ve)(W))]]}),o})()}}]);