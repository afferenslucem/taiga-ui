"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[65792],{65792:(fe,p,t)=>{t.r(p),t.d(p,{ExampleTuiSliderModule:()=>Me});var c=t(12057),a=t(23738),x=t(12021),_=t(78697),d=t(66187),h=t(91068),e=t(74788),$=t(88331),A=t(37159),y=t(66596),I=t(57068),r=t(47044);let v=(()=>{class o{constructor(){this.value=4,this.formControl=new a.NI(60)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-slider-example-1"]],decls:2,vars:2,consts:[["tuiSlider","","type","range","max","10","step","1","size","s",3,"ngModel","ngModelChange"],["tuiSlider","","type","range","value","60","size","m",3,"formControl"]],template:function(n,i){1&n&&(e.TgZ(0,"input",0),e.NdJ("ngModelChange",function(s){return i.value=s}),e.qZA(),e._UZ(1,"input",1)),2&n&&(e.Q6J("ngModel",i.value),e.xp6(1),e.Q6J("formControl",i.formControl))},directives:[r.i,a.eT,a.Fj,a.JJ,a.On,a.oH],encapsulation:2,changeDetection:0}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-slider-example-2"]],decls:3,vars:0,consts:[["tuiSlider","","type","range","value","65",1,"first"],["tuiSlider","","type","range","value","80",1,"second"],["tuiSlider","","type","range","value","40",1,"third"]],template:function(n,i){1&n&&(e._UZ(0,"input",0),e._UZ(1,"input",1),e._UZ(2,"input",2))},directives:[r.i],styles:[".first[_ngcontent-%COMP%]{--tui-primary: var(--tui-support-01);--tui-primary-hover: var(--tui-support-21);--tui-primary-active: var(--tui-support-02)}.second[_ngcontent-%COMP%]{--tui-primary: var(--tui-support-03);--tui-primary-hover: var(--tui-support-04);--tui-primary-active: var(--tui-positive)}.third[_ngcontent-%COMP%]{--tui-primary: var(--tui-support-12);--tui-primary-hover: var(--tui-support-07);--tui-primary-active: var(--tui-support-08)}"],changeDetection:0}),o})();var U=t(79121);function b(o,l){if(1&o){const n=e.EpF();e.TgZ(0,"button",3),e.NdJ("click",function(){const s=e.CHM(n).$implicit;return e.oxw().patchValue(s)}),e._uU(1),e.qZA()}if(2&o){const n=l.$implicit;e.xp6(1),e.hij(" $",n," ")}}let J=(()=>{class o{constructor(){this.labels=[0,250,500,750,1e3],this.formControl=new a.NI(250)}patchValue(n){this.formControl.patchValue(n)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-slider-example-3"]],decls:7,vars:6,consts:[["tuiSlider","","type","range","size","m",3,"max","step","segments","formControl"],[1,"ticks-labels"],["class","tick-label",3,"click",4,"ngFor","ngForOf"],[1,"tick-label",3,"click"]],template:function(n,i){1&n&&(e._UZ(0,"input",0),e.TgZ(1,"div",1),e.YNc(2,b,2,1,"button",2),e.qZA(),e.TgZ(3,"p"),e._uU(4," Control value: "),e.TgZ(5,"code"),e._uU(6),e.qZA(),e.qZA()),2&n&&(e.Q6J("max",1e3)("step",250)("segments",4)("formControl",i.formControl),e.xp6(2),e.Q6J("ngForOf",i.labels),e.xp6(4),e.Oqu(i.formControl.value))},directives:[r.i,a.eT,a.Fj,a.JJ,a.oH,c.sg],styles:[".ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}.tick-label[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;outline:0;cursor:pointer}"],changeDetection:0}),o})(),G=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-slider-example-4"]],decls:1,vars:0,consts:[["tuiSlider","","type","range","disabled","","value","80"]],template:function(n,i){1&n&&e._UZ(0,"input",0)},directives:[r.i],encapsulation:2,changeDetection:0}),o})();var z=t(59);function H(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const n=l.$implicit;e.xp6(1),e.Oqu(n)}}let X=(()=>{class o{constructor(){this.labels=["5 000","100 000","300 000","1 000 000"],this.formControl=new a.NI(72e4),this.segments=this.labels.length-1,this.keySteps=[[0,5e3],[100/3,1e5],[100/3*2,3e5],[100,1e6]]}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-slider-example-5"]],decls:8,vars:8,consts:[["tuiSlider","","type","range",3,"keySteps","max","segments","formControl"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],["automation-id","key-steps-example-control-value"]],template:function(n,i){1&n&&(e._UZ(0,"input",0),e.TgZ(1,"div",1),e.YNc(2,H,2,1,"span",2),e.qZA(),e.TgZ(3,"p",3),e._uU(4," Control value: "),e.TgZ(5,"code"),e._uU(6),e.ALo(7,"number"),e.qZA(),e.qZA()),2&n&&(e.Q6J("keySteps",i.keySteps)("max",10*i.segments)("segments",i.segments)("formControl",i.formControl),e.xp6(2),e.Q6J("ngForOf",i.labels),e.xp6(4),e.Oqu(e.lcZ(7,6,i.formControl.value)))},directives:[z.t,r.i,a.eT,a.Fj,a.JJ,a.oH,c.sg],pipes:[c.JJ],styles:[".ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),o})();var V=t(40287),Q=t(26215),W=t(25917),K=t(46797),Y=t(87519),j=t(43190),B=t(96736),k=t(76189),w=t(30644),q=t(38988),ee=t(67446),te=t(29070),ne=t(54255),oe=t(15491),ie=t(56059);function le(o,l){if(1&o&&(e._uU(0),e.ALo(1,"percent")),2&o){const n=e.oxw();e.hij(" ",e.lcZ(1,1,n.value)," ")}}let ae=(()=>{class o{constructor(){this.min=.5,this.max=2,this.value=1,this.active$=new Q.X(!1),this.showHint$=this.active$.pipe((0,Y.x)(),(0,j.w)(n=>n?(0,W.of)(!0):(0,K.H)(1e3).pipe((0,B.h)(!1))))}onKeydown(n){this.active$.next(n)}change(n){this.value=(0,V.Kiv)(this.value+n,this.min,this.max)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-slider-example-6"]],hostBindings:function(n,i){1&n&&e.NdJ("pointerdown",function(){return i.onKeydown(!0)})("pointerup",function(){return i.onKeydown(!1)},!1,e.evT)},decls:9,vars:7,consts:[[1,"zoom-controller"],["tuiIconButton","","appearance","flat","tuiMode","onDark","size","s","icon","tuiIconMinus",1,"minus",3,"click"],["tuiSliderThumbLabel","",1,"slider-wrapper"],["tuiHintAppearance","onDark","tuiHintDirection","top",3,"tuiHint","tuiHintManual"],["hint",""],["tuiSlider","","type","range","step","any",3,"min","max","ngModel","ngModelChange"],["tuiIconButton","","appearance","flat","tuiMode","onDark","size","s","icon","tuiIconPlus",1,"plus",3,"click"]],template:function(n,i){if(1&n&&(e.TgZ(0,"article",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return i.change(-.25)}),e.qZA(),e.TgZ(2,"label",2),e._UZ(3,"div",3),e.ALo(4,"async"),e.YNc(5,le,2,3,"ng-template",null,4,e.W1O),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(s){return i.value=s}),e.qZA(),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){return i.change(.25)}),e.qZA(),e.qZA()),2&n){const u=e.MAs(6);e.xp6(3),e.Q6J("tuiHint",u)("tuiHintManual",!!e.lcZ(4,5,i.showHint$)),e.xp6(4),e.Q6J("min",i.min)("max",i.max)("ngModel",i.value)}},directives:[k.v,w.w,q.Z,ee.D,te.x,ne.t,oe.D,ie.Z,r.i,a.eT,a.Fj,a.JJ,a.On],pipes:[c.Ov,c.Zx],styles:[".zoom-controller[_ngcontent-%COMP%]{border-radius:1rem;background:var(--tui-base-05);display:flex;justify-content:space-between;align-items:center;max-width:18rem;grid-column-gap:.5rem;column-gap:.5rem}@media screen and (max-width: 47.9625em){.zoom-controller[_ngcontent-%COMP%]{max-width:100%}}.slider-wrapper[_ngcontent-%COMP%]{flex:1}.minus[_ngcontent-%COMP%]{border-radius:1rem 0 0 1rem}.plus[_ngcontent-%COMP%]{border-radius:0 1rem 1rem 0}"],changeDetection:0}),o})();var ue=t(31823),se=t(44051),Fe=t(17023),re=t(76349);function ce(o,l){1&o&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"tuiSliderThumbLabel"),e.qZA(),e._uU(3," for positioning any content so it slides alongside the thumb. "))}function de(o,l){if(1&o&&(e.TgZ(0,"dl"),e.tHW(1,2),e.TgZ(2,"dt"),e._UZ(3,"code"),e.qZA(),e.TgZ(4,"dd"),e._UZ(5,"code"),e.qZA(),e.N_p(),e.qZA(),e.TgZ(6,"p"),e._uU(7," Read more about current input's type in "),e.TgZ(8,"a",3),e._uU(9," MDN Docs "),e.qZA(),e._uU(10," . "),e.qZA(),e.TgZ(11,"p"),e.tHW(12,4),e._UZ(13,"strong"),e._UZ(14,"code"),e.N_p(),e.qZA(),e.TgZ(15,"tui-doc-example",5),e._UZ(16,"tui-slider-example-1"),e.qZA(),e.TgZ(17,"tui-doc-example",6),e._UZ(18,"tui-slider-example-2"),e.qZA(),e.TgZ(19,"tui-doc-example",7),e.TgZ(20,"tui-notification",8),e.TgZ(21,"p",9),e.tHW(22,10),e._UZ(23,"code"),e.N_p(),e.qZA(),e.TgZ(24,"p"),e.tHW(25,11),e._UZ(26,"code"),e._UZ(27,"code"),e.N_p(),e.qZA(),e.qZA(),e._UZ(28,"tui-slider-example-3"),e.qZA(),e.TgZ(29,"tui-doc-example",12),e._UZ(30,"tui-slider-example-4"),e.qZA(),e.TgZ(31,"tui-doc-example",13),e.TgZ(32,"dl",14),e.tHW(33,15),e.TgZ(34,"dt"),e._UZ(35,"strong"),e.qZA(),e._UZ(36,"dd"),e.N_p(),e.qZA(),e._UZ(37,"tui-slider-example-5"),e.qZA(),e.TgZ(38,"tui-doc-example",16),e.YNc(39,ce,4,0,"ng-template",null,17,e.W1O),e._UZ(41,"tui-slider-example-6"),e.qZA()),2&o){const n=e.MAs(40),i=e.oxw();e.xp6(15),e.Q6J("content",i.example1),e.xp6(2),e.Q6J("content",i.example2),e.xp6(2),e.Q6J("content",i.example3),e.xp6(10),e.Q6J("content",i.example4),e.xp6(2),e.Q6J("content",i.example5),e.xp6(7),e.Q6J("content",i.example6)("description",n)}}function me(o,l){if(1&o&&e._UZ(0,"input",25),2&o){const n=e.oxw(2);e.Q6J("max",n.max)("min",n.min)("step",n.step)("formControl",n.control)("size",n.size)("segments",n.segments)}}function Te(o,l){1&o&&(e.tHW(0,26),e._UZ(1,"code"),e.N_p())}function ge(o,l){1&o&&(e.tHW(0,27),e._UZ(1,"a",28),e._UZ(2,"code"),e.N_p())}function pe(o,l){1&o&&(e.tHW(0,29),e._UZ(1,"a",30),e._UZ(2,"code"),e.N_p())}function _e(o,l){1&o&&(e.tHW(0,31),e._UZ(1,"a",32),e._UZ(2,"code"),e.N_p())}function Se(o,l){1&o&&e.SDv(0,33)}function Ee(o,l){1&o&&(e.tHW(0,34),e._UZ(1,"p"),e._UZ(2,"code"),e.N_p())}function De(o,l){if(1&o){const n=e.EpF();e.TgZ(0,"tui-doc-demo",18),e.YNc(1,me,1,6,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,Te,2,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(n),e.oxw().disabled=u}),e.YNc(4,ge,3,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(n),e.oxw().max=u}),e.YNc(5,pe,3,0,"ng-template",21),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(n),e.oxw().min=u}),e.YNc(6,_e,3,0,"ng-template",22),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(n),e.oxw().step=u}),e.YNc(7,Se,1,0,"ng-template",23),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(n),e.oxw().size=u}),e.YNc(8,Ee,3,0,"ng-template",24),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(n),e.oxw().segments=u}),e.qZA()}if(2&o){const n=e.oxw();e.Q6J("control",n.control),e.xp6(3),e.Q6J("documentationPropertyValue",n.disabled),e.xp6(1),e.Q6J("documentationPropertyValue",n.max),e.xp6(1),e.Q6J("documentationPropertyValue",n.min),e.xp6(1),e.Q6J("documentationPropertyValue",n.step),e.xp6(1),e.Q6J("documentationPropertyValues",n.sizeVariants)("documentationPropertyValue",n.size),e.xp6(1),e.Q6J("documentationPropertyValue",n.segments)}}function Ce(o,l){if(1&o&&(e.TgZ(0,"ol",35),e.TgZ(1,"li"),e._uU(2," Import an Angular module for forms and "),e.TgZ(3,"code"),e._uU(4,"TuiSliderModule"),e.qZA(),e._uU(5," in the same module where you want to use our component: "),e._UZ(6,"tui-doc-code",36),e.qZA(),e.TgZ(7,"li"),e.TgZ(8,"p"),e.tHW(9,37),e._UZ(10,"code"),e._UZ(11,"code"),e.N_p(),e.qZA(),e._UZ(12,"tui-doc-code",38),e.qZA(),e.TgZ(13,"li"),e.TgZ(14,"p"),e.SDv(15,39),e.qZA(),e._UZ(16,"tui-doc-code",40),e.qZA(),e.qZA()),2&o){const n=e.oxw();e.xp6(6),e.Q6J("code",n.exampleImportModule),e.xp6(6),e.Q6J("code",n.exampleDeclareForm),e.xp6(4),e.Q6J("code",n.exampleInsertTemplate)}}let Oe=(()=>{class o{constructor(){this.sizeVariants=["s","m"],this.control=new a.NI(1),this.max=5,this.min=0,this.step=1,this.size=this.sizeVariants[1],this.segments=this.max,this.exampleImportModule=t.e(13345).then(t.t.bind(t,13345,17)),this.exampleDeclareForm=t.e(24001).then(t.t.bind(t,24001,17)),this.exampleInsertTemplate=t.e(72186).then(t.t.bind(t,72186,17)),this.example1={HTML:t.e(17183).then(t.t.bind(t,17183,17)),TypeScript:t.e(94780).then(t.t.bind(t,94780,17))},this.example2={HTML:t.e(39713).then(t.t.bind(t,39713,17)),LESS:t.e(5280).then(t.t.bind(t,5280,17)),TypeScript:t.e(40334).then(t.t.bind(t,40334,17))},this.example3={HTML:t.e(85143).then(t.t.bind(t,85143,17)),LESS:t.e(97180).then(t.t.bind(t,97180,17)),TypeScript:t.e(28777).then(t.t.bind(t,28777,17))},this.example4={HTML:t.e(41453).then(t.t.bind(t,41453,17)),TypeScript:t.e(11589).then(t.t.bind(t,11589,17))},this.example5={HTML:t.e(72627).then(t.t.bind(t,72627,17)),TypeScript:t.e(99862).then(t.t.bind(t,99862,17)),LESS:t.e(33402).then(t.t.bind(t,33402,17))},this.example6={HTML:t.e(92213).then(t.t.bind(t,92213,17)),LESS:t.e(42565).then(t.t.bind(t,42565,17)),TypeScript:t.e(98486).then(t.t.bind(t,98486,17))}}get disabled(){return this.control.disabled}set disabled(n){n?this.control.disable():this.control.enable()}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-slider"]],decls:4,vars:0,consts:function(){let l,n,i,u,s,g,m,S,E,D,C,O,M,f,N,P,R,T,L;return l=$localize`:␟adbed55b9ad040f016b7224d2376dcc556c96cde␟5051981916551990985:${"\ufffd#2\ufffd"}:START_TAG_DT:${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:tuiSlider${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#2\ufffd"}:CLOSE_TAG_DT:${"\ufffd#4\ufffd"}:START_TAG_DD: attribute component for native html tag ${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:<input type="range" />${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: to choose a value from a limited range. ${"\ufffd/#4\ufffd"}:CLOSE_TAG_DD:`,l=e.Zx4(l),n=$localize`:␟d17c664a1f4783e75fde9506a0cc298adc5d77b8␟6584790122390772242:${"\ufffd#13\ufffd"}:START_TAG_STRONG:Usage:${"\ufffd/#13\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd#14\ufffd"}:START_TAG_CODE:<input tuiSlider type="range" min="0" max="100" step="1" />${"\ufffd/#14\ufffd"}:CLOSE_TAG_CODE: . `,i=$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`,u=$localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`,s=$localize`:␟2491f5c0a188387f341fc89ca14558c666c96dc9␟3070830036852627562:With visual segments`,g=$localize`:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\ufffd#23\ufffd"}:START_TAG_CODE:tui-slider-ticks-labels${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `,m=$localize`:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\ufffd#26\ufffd|\ufffd#27\ufffd]"}:START_TAG_CODE:m${"[\ufffd/#26\ufffd|\ufffd/#27\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#26\ufffd|\ufffd#27\ufffd]"}:START_TAG_CODE:s${"[\ufffd/#26\ufffd|\ufffd/#27\ufffd]"}:CLOSE_TAG_CODE: ). `,m=e.Zx4(m),S=$localize`:␟f39256070bfc0714020dfee08895421fc1527014␟5769292297914455214:Disabled`,E=$localize`:␟21e3d6f0be967074ebe7bfc308ce12e1e9ef0763␟2043510449142398319:With key steps`,D=$localize`:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\ufffd#34\ufffd"}:START_TAG_DT:${"\ufffd#35\ufffd"}:START_TAG_STRONG:Key steps${"\ufffd/#35\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#34\ufffd"}:CLOSE_TAG_DT:${"\ufffd#36\ufffd"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\ufffd/#36\ufffd"}:CLOSE_TAG_DD:`,C=$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`,O=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,M=$localize`:␟7a9c2463dd2db1c76ddb6ab9b5ac72155b3febd3␟2441366795513240531: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: max ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,f=$localize`:␟0f9865bd37150fde43d1803c880f50904f4c19e5␟8291402794161186662: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: min ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,N=$localize`:␟3ef21ae73998ca229a066c4ebe6df772bcb4e1ff␟3867818126343854694: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: step ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,P=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,R=$localize`:␟a02033b049807cde07365ac37e1d79258c6f8b38␟1000197536572415972:${"\ufffd#1\ufffd"}:START_PARAGRAPH:A number of visual segments${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH: (use ${"\ufffd#2\ufffd"}:START_TAG_CODE:1${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: for no ticks) `,T=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,T=e.Zx4(T),L=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Slider","package","KIT","type","components"],["pageTab",""],l,["tuiLink","","target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/range"],n,["id","sizes","heading",i,3,"content"],["id","colors","heading",u,3,"content"],["id","segments","heading",s,3,"content"],[1,"tui-space_bottom-8"],[1,"tui-space_top-0"],g,m,["id","disabled","heading",S,3,"content"],["id","keySteps","heading",E,3,"content"],[1,"tui-space_bottom-8","tui-space_top-0"],D,["id","complex","heading",C,3,"content","description"],["tuiSliderThumbLabelDescription",""],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiSlider","","type","range",3,"max","min","step","formControl","size","segments"],O,M,["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#max","target","_blank"],f,["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#min","target","_blank"],N,["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step","target","_blank"],P,R,[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],T,["filename","myComponent.component.ts",3,"code"],L,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,de,42,7,"ng-template",1),e.YNc(2,De,9,8,"ng-template",1),e.YNc(3,Ce,17,3,"ng-template",1),e.qZA())},directives:[$.q,A.n,y.V,I.f,v,Z,U.L,J,G,X,ae,ue.F,se.z,Fe.B,r.i,a.eT,a.Fj,a.JJ,a.oH,re.c],encapsulation:2,changeDetection:0}),o})(),Me=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.ez,_.fV,h.c2K,a.u5,a.UX,d.jzK,d.HiG,d.zw7,d.fNO,d.goS,x.Bz.forChild((0,_.Ve)(Oe))]]}),o})()}}]);