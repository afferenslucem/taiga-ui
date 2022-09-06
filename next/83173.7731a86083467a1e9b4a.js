"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[83173],{83173:(A,a,t)=>{t.r(a),t.d(a,{ExampleTuiSwipeModule:()=>$});var s=t(12057),_=t(12021),u=t(78697),M=t(36518),T=t(40287),e=t(74788),m=t(88331),O=t(37159),F=t(57068),c=t(99021);let r=(()=>{class n{constructor(){this.swiped="default"}onSwipe(o){this.swiped=o.direction}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-swipe-example-1"]],hostVars:2,hostBindings:function(o,l){2&o&&e.Tol(l.swiped)},decls:2,vars:2,consts:[[1,"box","tui-text_body-l",3,"ngClass","tuiSwipe"]],template:function(o,l){1&o&&(e.TgZ(0,"div",0),e.NdJ("tuiSwipe",function(S){return l.onSwipe(S)}),e._uU(1),e.qZA()),2&o&&(e.Q6J("ngClass",l.swiped),e.xp6(1),e.hij(" Swiped ",l.swiped,"\n"))},directives:[s.mk,c.W],styles:[".box[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--tui-primary);transition:all .5s ease-out;display:flex;justify-content:center;align-items:center;touch-action:none}.box.left[_ngcontent-%COMP%]{background-color:var(--tui-support-12)}.box.right[_ngcontent-%COMP%]{background-color:var(--tui-support-03)}.box.top[_ngcontent-%COMP%]{background-color:var(--tui-support-08)}.box.bottom[_ngcontent-%COMP%]{background-color:var(--tui-support-10)}"],changeDetection:0}),n})();var D=t(79765),I=t(83628);function f(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"div",2),e.NdJ("tuiSwipe",function(d){return e.CHM(o),e.oxw().onSwipe(d)}),e._uU(1," Swipe right to close "),e.qZA()}}let P=(()=>{class n{constructor(){this.open$=new D.xQ}toggle(o){this.open$.next(o)}onSwipe(o){console.info(o.direction),"left"===o.direction&&this.toggle(!0),"right"===o.direction&&this.toggle(!1)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-swipe-example-2"]],decls:4,vars:4,consts:[[1,"container","tui-text_body-l",3,"tuiSwipe"],["class","sidebar tui-text_body-l",3,"tuiSwipe",4,"tuiSidebar","tuiSidebarDirection"],[1,"sidebar","tui-text_body-l",3,"tuiSwipe"]],template:function(o,l){1&o&&(e.TgZ(0,"div",0),e.NdJ("tuiSwipe",function(S){return l.onSwipe(S)}),e._uU(1," Swipe left to open "),e.YNc(2,f,2,0,"div",1),e.ALo(3,"async"),e.qZA()),2&o&&(e.xp6(2),e.Q6J("tuiSidebar",!!e.lcZ(3,2,l.open$))("tuiSidebarDirection","right"))},directives:[c.W,I.B],pipes:[s.Ov],styles:[".container[_ngcontent-%COMP%]{width:200px;height:200px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"],changeDetection:0}),n})();var x=t(76349);function R(n,i){if(1&n&&(e.TgZ(0,"p"),e.tHW(1,3),e._UZ(2,"code"),e.N_p(),e.qZA(),e.TgZ(3,"p"),e.tHW(4,4),e._UZ(5,"code"),e._UZ(6,"br"),e.N_p(),e.qZA(),e.TgZ(7,"dl"),e.TgZ(8,"dt"),e.TgZ(9,"strong"),e._uU(10,"timeout:"),e.qZA(),e.qZA(),e.TgZ(11,"dd"),e._uU(12,"max time between touchstart and touchend"),e.qZA(),e.TgZ(13,"dt"),e.TgZ(14,"strong"),e._uU(15,"threshold"),e.qZA(),e._uU(16," : "),e.qZA(),e.TgZ(17,"dd"),e._uU(18,"min distance between touchstart and touchend."),e.qZA(),e.qZA(),e.TgZ(19,"tui-doc-example",5),e._UZ(20,"tui-swipe-example-1"),e.qZA(),e.TgZ(21,"tui-doc-example",6),e._UZ(22,"tui-swipe-example-2"),e.qZA()),2&n){const o=e.oxw();e.xp6(19),e.Q6J("content",o.example1),e.xp6(2),e.Q6J("content",o.example2)}}function h(n,i){if(1&n&&(e.TgZ(0,"ol",7),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,8),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",9),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,10),e.qZA(),e._UZ(9,"tui-doc-code",11),e.qZA(),e.qZA()),2&n){const o=e.oxw();e.xp6(5),e.Q6J("code",o.exampleModule),e.xp6(4),e.Q6J("code",o.exampleHtml)}}let N=(()=>{class n{constructor(){this.exampleModule=t.e(72030).then(t.t.bind(t,72030,17)),this.exampleHtml=t.e(68817).then(t.t.bind(t,68817,17)),this.example1={TypeScript:t.e(67610).then(t.t.bind(t,67610,17)),HTML:t.e(69445).then(t.t.bind(t,69445,17)),LESS:t.e(83914).then(t.t.bind(t,83914,17))},this.example2={TypeScript:t.e(62531).then(t.t.bind(t,62531,17)),HTML:t.e(34473).then(t.t.bind(t,34473,17)),LESS:t.e(60499).then(t.t.bind(t,60499,17))}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-tui-swipe"]],decls:3,vars:0,consts:function(){let i,o,l,d,S,p,g,C;return i=$localize`:␟692d3486522b76f188e85c329a8dee83471e833d␟2599663742744214450:Swipe`,o=$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`,l=$localize`:␟a34630ac655c7ae6ca59883b8038230b9a706cd1␟2985041163238726247:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiSwipe${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: directive allows detecting swipes on mobile devices. `,d=$localize`:␟9c102467fc96b921efb10bbc95fb3d3eeca98348␟1350150750840159964: You can configure the directive with ${"\ufffd#5\ufffd"}:START_TAG_CODE:TUI_SWIPE_OPTIONS${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: token. ${"\ufffd#6\ufffd\ufffd/#6\ufffd"}:LINE_BREAK: Allowed options: `,S=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,p=$localize`:␟a3fa24e288faa8addbc361884d78e4bf1fa3937d␟5947747490679912275:With sidebar`,g=$localize`:␟4531ea54619a566db576498d7b988287093002a3␟4746491400247048532: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiSwipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,C=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",i,"package","CDK","type","directives"],["pageTab",""],["pageTab",o],l,d,["id","base","heading",S,3,"content"],["id","base","heading",p,3,"content"],[1,"b-demo-steps"],g,["filename","myComponent.module.ts",3,"code"],C,["filename","myComponent.template.html",3,"code"]]},template:function(o,l){1&o&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,R,23,2,"ng-template",1),e.YNc(2,h,10,2,"ng-template",2),e.qZA())},directives:[m.q,O.n,F.f,r,P,x.c],encapsulation:2,changeDetection:0}),n})(),$=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.ez,T.zq,u.fV,M.T,T.Ah6,_.Bz.forChild((0,u.Ve)(N))]]}),n})()}}]);