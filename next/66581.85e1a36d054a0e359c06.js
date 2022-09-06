"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[66581],{66581:(We,C,t)=>{t.r(C),t.d(C,{ExampleTuiFieldErrorModule:()=>Ye});var a=t(12057),r=t(23738),S=t(12021),U=t(55970),L=t(78697),G=t(36256),E=t(66187),s=t(91068),J=t(96087),X=t(89570),e=t(74788),V=t(88331),b=t(37159),Q=t(66596),z=t(57068),c=t(88135),p=t(77027),m=t(41360),g=t(10200),_=t(68874),T=t(36951),D=t(7114);const x=function(){return[]},H=/^[a-zA-Z]+$/;function A(o){return o.value&&H.test(o.value)?null:{other:"Only latin letters are allowed"}}function Y(o){return"42"===o.value?null:{other:"Wrong"}}let W=(()=>{class o{constructor(){this.testValue1=new r.NI("",[r.kI.required,A]),this.testValue3=new r.NI("",[r.kI.required,A]),this.testForm=new r.cw({testValue1:this.testValue1,testValue2:new r.NI("",[r.kI.required,Y])}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return o.\u0275fac=function(F){return new(F||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-field-error-pipe-example-1"]],decls:15,vars:15,consts:function(){let n,F,i;return n=$localize`:␟c2f188eeca60463782738d8247914bf170df5098␟3772154377692784553:Type the ultimate answer`,F=$localize`:␟4de3cc8dba3c7b052f74a1db4752f51bda859e9c␟8591875090862306452:Set a password`,i=$localize`:␟55293e53f2eaf13c5a165765c4319f4527d577a4␟5532503478235461752: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change `,[[1,"b-form",3,"formGroup"],["tuiLabel",n,1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2",3,"error"],["tuiLabel",F],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1",3,"error"],i]},template:function(F,i){1&F&&(e.TgZ(0,"form",0),e.TgZ(1,"label",1),e.TgZ(2,"tui-input",2),e._uU(3," to the Question of Life, the Universe, and Everything "),e.qZA(),e._UZ(4,"tui-error",3),e.ALo(5,"async"),e.ALo(6,"tuiFieldError"),e.qZA(),e.TgZ(7,"label",4),e.TgZ(8,"tui-input",5),e._uU(9," Latin letters only "),e.qZA(),e._UZ(10,"tui-error",6),e.ALo(11,"async"),e.ALo(12,"tuiFieldError"),e.qZA(),e.TgZ(13,"p"),e.SDv(14,7),e.qZA(),e.qZA()),2&F&&(e.Q6J("formGroup",i.testForm),e.xp6(2),e.Q6J("tuiTextfieldLabelOutside",!0),e.xp6(2),e.Q6J("error",e.lcZ(5,5,e.lcZ(6,7,e.DdM(13,x)))),e.xp6(4),e.Q6J("tuiTextfieldLabelOutside",!0),e.xp6(2),e.Q6J("error",e.lcZ(11,9,e.lcZ(12,11,e.DdM(14,x)))))},directives:[r._Y,r.JL,r.sg,c.A,p.K,m.w,r.JJ,r.u,g.s,_.x,T.v],pipes:[a.Ov,D.A],encapsulation:2,changeDetection:0}),o})();var B=t(20945),K=t(42145),j=t(88002),w=t(39761),q=t(65009),k=t(10383);const P=function(){return[]};function ee(o){return`Maximum length \u2014 ${o.requiredLength}`}function te(o){return`Minimum length \u2014 ${o.requiredLength}`}let oe=(()=>{class o{constructor(){this.testValue1=new r.NI("",[r.kI.minLength(4),r.kI.maxLength(4)]),this.testValue2=new r.NI("",[r.kI.required,r.kI.email]),this.testValue3=new r.NI(2,[r.kI.min(3)]),this.testForm=new r.cw({testValue1:this.testValue1,testValue2:this.testValue2,testValue3:this.testValue3}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return o.\u0275fac=function(F){return new(F||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-field-error-pipe-example-2"]],features:[e._Bn([{provide:s.Z4Y,useValue:{required:"Enter this!",email:"Enter a valid email",maxlength:ee,minlength:te,min:(0,B.F)(2e3).pipe((0,K.R)(n=>!n,!1),(0,j.U)(n=>n?"Fix please":"Min number 3"),(0,w.O)("Min number 3"))}}])],decls:19,vars:20,consts:function(){let n;return n=$localize`:␟87a9e0f6ceb1444cab6185424f933a376357a91c␟3646762244302681891: Required `,[[1,"b-form",3,"formGroup"],["tuiLabel","Enter an email",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],n,["formControlName","testValue2",3,"error"],["tuiLabel","Minimum and maximum length",1,"tui-space_bottom-4"],["formControlName","testValue1","tuiTextfieldSize","m"],["formControlName","testValue1",3,"error"],["tuiLabel","Minimum number"],["formControlName","testValue3","tuiTextfieldSize","m"],["formControlName","testValue3",3,"error"]]},template:function(F,i){1&F&&(e.TgZ(0,"form",0),e.TgZ(1,"label",1),e.TgZ(2,"tui-input",2),e.SDv(3,3),e.qZA(),e._UZ(4,"tui-error",4),e.ALo(5,"async"),e.ALo(6,"tuiFieldError"),e.qZA(),e.TgZ(7,"label",5),e.TgZ(8,"tui-input",6),e._uU(9," 4 letters word... "),e.qZA(),e._UZ(10,"tui-error",7),e.ALo(11,"async"),e.ALo(12,"tuiFieldError"),e.qZA(),e.TgZ(13,"label",8),e.TgZ(14,"tui-input-count",9),e._uU(15," number "),e.qZA(),e._UZ(16,"tui-error",10),e.ALo(17,"async"),e.ALo(18,"tuiFieldError"),e.qZA(),e.qZA()),2&F&&(e.Q6J("formGroup",i.testForm),e.xp6(2),e.Q6J("tuiTextfieldLabelOutside",!0),e.xp6(2),e.Q6J("error",e.lcZ(5,5,e.lcZ(6,7,e.DdM(17,P)))),e.xp6(6),e.Q6J("error",e.lcZ(11,9,e.lcZ(12,11,e.DdM(18,P)))),e.xp6(6),e.Q6J("error",e.lcZ(17,13,e.lcZ(18,15,e.DdM(19,P)))))},directives:[r._Y,r.JL,r.sg,c.A,p.K,m.w,r.JJ,r.u,g.s,_.x,T.v,q.E,k.a],pipes:[a.Ov,D.A],encapsulation:2,changeDetection:0}),o})();var d=t(40287),M=t(76189);const Fe=["errorContent"],re=["bigErrorContent"];function ne(o,n){1&o&&(e._uU(0," Secret number must contain "),e.TgZ(1,"strong"),e._uU(2,"10 or 12 digits"),e.qZA(),e._uU(3," . "))}function ie(o,n){1&o&&(e._uU(0," This company is already registered "),e.TgZ(1,"button",9),e._uU(2," It is mine "),e.qZA())}const ue=function(){return["required","inn"]},le=function(){return[]},h=/^\d{10}$/,I=/^\d{12}$/;let ae=(()=>{class o{constructor(){this.errorContent="",this.bigErrorContent="",this.testValue2=new r.NI(""),this.testForm=new r.cw({testValue1:new r.NI("",[r.kI.required,this.getSecretValidator()]),testValue2:this.testValue2}),this.companyValidator=F=>F.value?{inn:new d.T8v(this.bigErrorContent)}:null}ngOnInit(){this.testValue2.setValidators([r.kI.required,this.companyValidator])}getSecretValidator(){return F=>F.value&&(h.test(F.value)||I.test(F.value))?null:{secret:new d.T8v(this.errorContent)}}}return o.\u0275fac=function(F){return new(F||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-field-error-pipe-example-3"]],viewQuery:function(F,i){if(1&F&&(e.Gf(Fe,5),e.Gf(re,5)),2&F){let u;e.iGM(u=e.CRH())&&(i.errorContent=u.first),e.iGM(u=e.CRH())&&(i.bigErrorContent=u.first)}},decls:15,vars:15,consts:function(){let n;return n=$localize`:␟7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed␟2295031025708706060:Enter company name`,[[1,"b-form",3,"formGroup"],["tuiLabel","Secret number"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"error"],["tuiLabel",n,1,"tui-space_top-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2",3,"error"],["tuiButton","","type","button",1,"tui-space_top-2"]]},template:function(F,i){1&F&&(e.TgZ(0,"form",0),e.TgZ(1,"label",1),e._UZ(2,"tui-input",2),e.YNc(3,ne,4,0,"ng-template",null,3,e.W1O),e._UZ(5,"tui-error",4),e.ALo(6,"async"),e.ALo(7,"tuiFieldError"),e.qZA(),e.TgZ(8,"label",5),e._UZ(9,"tui-input",6),e.YNc(10,ie,3,0,"ng-template",null,7,e.W1O),e._UZ(12,"tui-error",8),e.ALo(13,"async"),e.ALo(14,"tuiFieldError"),e.qZA(),e.qZA()),2&F&&(e.Q6J("formGroup",i.testForm),e.xp6(2),e.Q6J("tuiTextfieldLabelOutside",!0),e.xp6(3),e.Q6J("error",e.lcZ(6,5,e.lcZ(7,7,e.DdM(13,ue)))),e.xp6(4),e.Q6J("tuiTextfieldLabelOutside",!0),e.xp6(3),e.Q6J("error",e.lcZ(13,9,e.lcZ(14,11,e.DdM(14,le)))))},directives:[r._Y,r.JL,r.sg,c.A,p.K,m.w,r.JJ,r.u,g.s,_.x,T.v,M.v],pipes:[a.Ov,D.A],encapsulation:2,changeDetection:0}),o})();var Ee=t(78750),se=t(45303),de=t(91030);const Te=["phoneErrorContent"];function De(o,n){1&o&&e._uU(0,"Invalid phone number length")}const $=function(){return[]};function ce(o,n){if(1&o){const F=e.EpF();e.TgZ(0,"label",4),e.TgZ(1,"span",5),e.TgZ(2,"tui-input-phone",6),e._UZ(3,"input",7),e.qZA(),e.TgZ(4,"button",8),e.NdJ("click",function(){const f=e.CHM(F).index;return e.oxw().removePhone(f)}),e.qZA(),e.qZA(),e.YNc(5,De,1,0,"ng-template",null,9,e.W1O),e._UZ(7,"tui-error",10),e.ALo(8,"async"),e.ALo(9,"tuiFieldError"),e.qZA()}if(2&o){const F=n.index;e.MGl("tuiLabel","Phone number ",F+1,""),e.xp6(2),e.s9C("formControlName",F),e.Q6J("tuiTextfieldLabelOutside",!0),e.xp6(5),e.s9C("formControlName",F),e.Q6J("error",e.lcZ(8,5,e.lcZ(9,7,e.DdM(9,$))))}}let pe=(()=>{class o{constructor(){this.phoneErrorContent="",this.testForm=new r.cw({phones:new r.Oe([new r.NI("",[r.kI.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new r.NI("",this.addValidators()))}removePhone(F){this.formData.removeAt(F);let i=0;for(;i<=1&&this.formData.controls[i];)this.formData.controls[i].setValidators([r.kI.required,this.getPhoneLengthValidator()]),i++}addValidators(){return this.formData.controls.length<2?[r.kI.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return F=>12!==F.value.length?{length:new d.T8v(this.phoneErrorContent)}:null}getPhoneArrayValidator(){return F=>F.controls.length<2||F.controls.filter(i=>i.errors).length&&F.controls.length?{length:new d.T8v("You should add at least 2 phone number")}:null}}return o.\u0275fac=function(F){return new(F||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-field-error-pipe-example-4"]],viewQuery:function(F,i){if(1&F&&e.Gf(Te,5),2&F){let u;e.iGM(u=e.CRH())&&(i.phoneErrorContent=u.first)}},decls:7,vars:8,consts:[[3,"formGroup"],["formArrayName","phones","class","tui-space_bottom-4",3,"tuiLabel",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error",3,"error"],["tuiButton","","type","button","size","s",1,"tui-space_top-4",3,"click"],["formArrayName","phones",1,"tui-space_bottom-4",3,"tuiLabel"],[1,"row"],["tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["tuiTextfield","","autocomplete","off"],["tuiIconButton","","type","button","size","m","title","Delete phone number","appearance","icon","icon","tuiIconTrash",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName","error"]],template:function(F,i){1&F&&(e.TgZ(0,"form",0),e.YNc(1,ce,10,10,"label",1),e._UZ(2,"tui-error",2),e.ALo(3,"async"),e.ALo(4,"tuiFieldError"),e.TgZ(5,"button",3),e.NdJ("click",function(){return i.addPhone()}),e._uU(6," Add a phone number "),e.qZA(),e.qZA()),2&F&&(e.Q6J("formGroup",i.testForm),e.xp6(1),e.Q6J("ngForOf",i.formData.controls),e.xp6(1),e.Q6J("error",e.lcZ(3,3,e.lcZ(4,5,e.DdM(7,$)))))},directives:[r._Y,r.JL,r.sg,a.sg,T.v,r.CE,M.v,c.A,Ee.y,se.X,g.s,r.JJ,r.u,_.x,de.M],pipes:[a.Ov,D.A],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),o})();var Z=t(25917),v=t(71289);const me=function(){return[]},ge=/^[a-zA-Z]+$/;let fe=(()=>{class o{constructor(F,i){this.fb=F,this.form=this.fb.group({text:["\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",r.kI.required]}),this.form.controls.text.setAsyncValidators(function(o){return n=>n.value&&ge.test(n.value)?(0,Z.of)(null):(0,Z.of)({error:new d.T8v("Only latin letters allowed")}).pipe((0,v.g)(o?0:5e3))}(i)),this.form.controls.text.markAsTouched()}}return o.\u0275fac=function(F){return new(F||o)(e.Y36(r.qu),e.Y36(d.B4V))},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-field-error-pipe-example-5"]],decls:7,vars:7,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","text",1,"input"],["formControlName","text",3,"error"]],template:function(F,i){1&F&&(e.TgZ(0,"form",0),e.TgZ(1,"div",1),e.TgZ(2,"tui-input",2),e._uU(3," Enter some text "),e.qZA(),e._UZ(4,"tui-error",3),e.ALo(5,"async"),e.ALo(6,"tuiFieldError"),e.qZA(),e.qZA()),2&F&&(e.Q6J("formGroup",i.form),e.xp6(4),e.Q6J("error",e.lcZ(5,2,e.lcZ(6,4,e.DdM(6,me)))))},directives:[r._Y,r.JL,r.sg,p.K,m.w,r.JJ,r.u,T.v],pipes:[a.Ov,D.A],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),o})();var Re=t(19582),Pe=t(222),Oe=t(96408),Ce=t(57681),Se=t(35459),Le=t(84190),xe=t(62818),Ae=t(48598),Me=t(16753),he=t(13735),Ie=t(67446),$e=t(29070),Ze=t(54255),ve=t(15491),Ne=t(99886),ye=t(44457);function Ue(o,n){if(1&o&&(e.TgZ(0,"td",8),e._uU(1),e.qZA()),2&o){const F=e.oxw().$implicit;e.xp6(1),e.hij(" ",F.name," ")}}const Ge=function(){return[]};function Je(o,n){if(1&o&&(e.TgZ(0,"td",8),e.TgZ(1,"tui-input-number",9),e.ALo(2,"tuiCurrency"),e.ALo(3,"tuiFieldErrorContent"),e._uU(4," Price "),e.qZA(),e.qZA()),2&o){const F=e.oxw().index,i=e.oxw();e.xp6(1),e.Q6J("postfix",e.lcZ(2,3,"UGX"))("formControl",i.controls[F])("tuiHint",e.lcZ(3,5,e.DdM(7,Ge)))}}function Xe(o,n){1&o&&(e.TgZ(0,"tr",6),e.YNc(1,Ue,2,1,"td",7),e.YNc(2,Je,5,8,"td",7),e.qZA()),2&o&&(e.xp6(1),e.Q6J("tuiCell","name"),e.xp6(1),e.Q6J("tuiCell","price"))}let Ve=(()=>{class o{constructor(){this.data=[{name:"Latte"},{name:"Cappuccino"}],this.latteControl=new r.NI(null,[r.kI.required,r.kI.max(6)]),this.cappuccinoControl=new r.NI(null,[r.kI.required,r.kI.max(5)]),this.controls=[this.latteControl,this.cappuccinoControl],this.columns=["name","price"]}}return o.\u0275fac=function(F){return new(F||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-field-error-content-pipe-example-6"]],features:[e._Bn([{provide:s.Z4Y,useValue:{required:"Enter this!",max:n=>`Too expensive, max ${n.max}`}}])],decls:9,vars:4,consts:[["tuiTable","",1,"table",3,"columns"],["tuiThGroup",""],["tuiTh","",3,"resizable"],["tuiTh",""],["tuiTbody","",3,"data"],["tuiTr","",4,"tuiRow","tuiRowOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""],["tuiHintDirection","right",3,"postfix","formControl","tuiHint"]],template:function(F,i){1&F&&(e.TgZ(0,"table",0),e.TgZ(1,"thead"),e.TgZ(2,"tr",1),e.TgZ(3,"th",2),e._uU(4," Name "),e.qZA(),e.TgZ(5,"th",3),e._uU(6,"Price"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"tbody",4),e.YNc(8,Xe,3,2,"tr",5),e.qZA(),e.qZA()),2&F&&(e.Q6J("columns",i.columns),e.xp6(3),e.Q6J("resizable",!0),e.xp6(4),e.Q6J("data",i.data),e.xp6(1),e.Q6J("tuiRowOf",i.data))},directives:[Re.c,Pe.E,Oe.W,Ce.j,Se.L,Le.f,xe.B,Ae.K,Me.q,he.g,r.JJ,r.oH,Ie.D,$e.x,Ze.t,ve.D],pipes:[Ne.i,ye.y],styles:[".table[_ngcontent-%COMP%]{width:100%;table-layout:fixed}.error[_ngcontent-%COMP%]{color:#fff}"],changeDetection:0}),o})();var be=t(76349);function Qe(o,n){if(1&o&&(e.tHW(0,3),e.TgZ(1,"p"),e._UZ(2,"code"),e._UZ(3,"code"),e.qZA(),e.TgZ(4,"p"),e._UZ(5,"code"),e._UZ(6,"code"),e._UZ(7,"a",4),e.qZA(),e.TgZ(8,"tui-doc-example",5),e._UZ(9,"tui-field-error-pipe-example-1"),e.qZA(),e.TgZ(10,"tui-doc-example",6),e._UZ(11,"tui-field-error-pipe-example-2"),e.qZA(),e.TgZ(12,"tui-doc-example",7),e._UZ(13,"tui-field-error-pipe-example-3"),e.qZA(),e.TgZ(14,"tui-doc-example",8),e._UZ(15,"tui-field-error-pipe-example-4"),e.qZA(),e.TgZ(16,"tui-doc-example",9),e._UZ(17,"tui-field-error-pipe-example-5"),e.qZA(),e.TgZ(18,"tui-doc-example",10),e._UZ(19,"tui-field-error-content-pipe-example-6"),e.qZA(),e.N_p()),2&o){const F=e.oxw();e.xp6(8),e.Q6J("content",F.example1),e.xp6(2),e.Q6J("content",F.example2),e.xp6(2),e.Q6J("content",F.example3),e.xp6(2),e.Q6J("content",F.example4),e.xp6(2),e.Q6J("content",F.example5),e.xp6(2),e.Q6J("content",F.example6)}}function ze(o,n){if(1&o&&(e.TgZ(0,"ol",11),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,12),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",13),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,14),e.qZA(),e._UZ(9,"tui-doc-code",15),e.qZA(),e.qZA()),2&o){const F=e.oxw();e.xp6(5),e.Q6J("code",F.exampleModule),e.xp6(4),e.Q6J("code",F.exampleHtml)}}let He=(()=>{class o{constructor(){this.exampleModule=t.e(97011).then(t.t.bind(t,97011,17)),this.exampleHtml=t.e(85093).then(t.t.bind(t,85093,17)),this.example1={TypeScript:t.e(98695).then(t.t.bind(t,98695,17)),HTML:t.e(72178).then(t.t.bind(t,72178,17))},this.example2={TypeScript:t.e(14720).then(t.t.bind(t,14720,17)),HTML:t.e(93850).then(t.t.bind(t,93850,17))},this.example3={TypeScript:t.e(4697).then(t.t.bind(t,4697,17)),HTML:t.e(18777).then(t.t.bind(t,18777,17))},this.example4={TypeScript:t.e(79147).then(t.t.bind(t,79147,17)),HTML:t.e(39218).then(t.t.bind(t,39218,17)),LESS:t.e(37605).then(t.t.bind(t,37605,17))},this.example5={TypeScript:t.e(19684).then(t.t.bind(t,19684,17)),HTML:t.e(52261).then(t.t.bind(t,52261,17)),LESS:t.e(74547).then(t.t.bind(t,74547,17))},this.example6={TypeScript:t.e(52108).then(t.t.bind(t,52108,17)),HTML:t.e(91072).then(t.t.bind(t,91072,17)),LESS:t.e(67129).then(t.t.bind(t,67129,17))}}}return o.\u0275fac=function(F){return new(F||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-field-error-pipe"]],decls:3,vars:0,consts:function(){let n,F,i,u,f,O,R,N,y;return n=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,F=$localize`:␟878e6fe461fd9ca2712122350e24522f5de8fd18␟8087109270529539309:With custom messages for validators`,i=$localize`:␟beedd8b329a8f8773c3b0f41eefeeb5e601578a9␟7592818721454246340:with a template`,u=$localize`:␟f168335edcd7a2503812f5cdb86f5fdf3f53881e␟296183290148574667:With adding new controls (FormArray)`,f=$localize`:␟4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e␟2219993318238885702:async validator`,O=$localize`:␟cd32fd6943404603d4285581b8c6fc926a23eec0␟2645314855951305243:tuiFieldErrorContentPipe`,R=$localize`:␟42c69b6d2ac097886f22a489d25b3d405635b997␟362690177758388643:${"[\ufffd#1\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH: FieldErrorPipe takes order of errors as array and transform it to ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:TuiValidationError${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: . Can be used with ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:TuiError${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd#1\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH: You can also use ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:tuiFieldErrorContentPipe${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: with ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:TuiHint${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: (see ${"\ufffd#7\ufffd"}:START_LINK: tuiFieldErrorContentPipe example ${"\ufffd/#7\ufffd"}:CLOSE_LINK: ). It returns a content of the TuiValidationError. ${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#8\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#9\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"\ufffd/#9\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#10\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#11\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"\ufffd/#11\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#12\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\ufffd#13\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"\ufffd/#13\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#14\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\ufffd#15\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"\ufffd/#15\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#16\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\ufffd#17\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"\ufffd/#17\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#18\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\ufffd#19\ufffd"}:START_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"\ufffd/#19\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,R=e.Zx4(R),N=$localize`:␟121f4dac7c3383d54e07bb2845ac74f2ade59411␟3384755420899190664: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFieldErrorPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,y=$localize`:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`,[["header","FieldError","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],R,["tuiLink","","routerLink",".","fragment","content"],["id","base","heading",n,3,"content"],["id","customMessages","heading",F,3,"content"],["id","patterns","heading",i,3,"content"],["id","formArray","heading",u,3,"content"],["id","async","heading",f,3,"content"],["id","content","heading",O,3,"content"],[1,"b-demo-steps"],N,["filename","myComponent.module.ts",3,"code"],y,["filename","myComponent.template.html",3,"code"]]},template:function(F,i){1&F&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,Qe,20,6,"ng-template",1),e.YNc(2,ze,10,2,"ng-template",2),e.qZA())},directives:[V.q,b.n,Q.V,S.yS,z.f,W,oe,ae,pe,fe,Ve,be.c],encapsulation:2,changeDetection:0}),o})(),Ye=(()=>{class o{}return o.\u0275fac=function(F){return new(F||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.ez,r.UX,L.fV,E.cnw,E.Shu,J.Yu,E.U8r,E.goS,s.QfL,E.fNO,s.Kjg,s.$HZ,E.jzK,G.jz,E.goS,s._Hh,U.wc,X.wq,S.Bz.forChild((0,L.Ve)(He))]]}),o})()}}]);