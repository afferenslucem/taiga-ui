(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[31032],{31032:(t,e,n)=>{n.r(e),n.d(e,{default:()=>R});var i=n(4594),o=n(66094),a=n(49237),u=n(57218),r=n(48266),s=n(5136),c=n(60902),l=n(29963),d=n(75123),h=n(275),g=n(905),p=n(89407),m=n(51160),f=n(13591),T=n(84439),x=n(35548),C=n(86561),b=n(84155),Z=n(4855),J=n(93098),A=n(23772),w=n(64419),M=n(99829),y=n(25138),$=n(24242),D=n(23014),q=n(90070),N=n(29329),Q=n(38264),_=n(39519),v=n(23660),O=n(64903),U=n(81841);function L(t,e){if(1&t){const t=x.EpF();x.TgZ(0,"tui-reorder",7),x.NdJ("itemsChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.initial=e)}))("enabledChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.onEnabled(e))})),x.qZA()}if(2&t){const t=x.oxw();x.Q6J("enabled",t.enabled)("items",t.initial)}}function S(t,e){1&t&&(x.TgZ(0,"th",14),x._uU(1," Name "),x.qZA())}function B(t,e){1&t&&(x.TgZ(0,"th",14),x._uU(1," Date of Birth "),x.qZA())}function H(t,e){1&t&&(x.TgZ(0,"th",14),x._uU(1," Age "),x.qZA())}function I(t,e){if(1&t&&(x.TgZ(0,"td",19),x._uU(1),x.qZA()),2&t){const t=x.oxw().$implicit,e=x.oxw(3);x.ekj("match",e.isMatch(t.name)),x.xp6(1),x.hij(" ",t.name," ")}}function P(t,e){if(1&t&&(x.TgZ(0,"td",19),x._uU(1),x.qZA()),2&t){const t=x.oxw().$implicit,e=x.oxw(3);x.ekj("match",e.isMatch(t.dob)),x.xp6(1),x.hij(" ",t.dob," ")}}function k(t,e){if(1&t&&(x.TgZ(0,"td",19),x._uU(1),x.qZA()),2&t){const t=x.oxw().$implicit,e=x.oxw(3);x.ekj("match",e.isMatch(e.getAge(t))),x.xp6(1),x.hij(" ",e.getAge(t)," ")}}function Y(t,e){1&t&&(x.TgZ(0,"tr",17),x.YNc(1,I,2,3,"td",18),x.YNc(2,P,2,3,"td",18),x.YNc(3,k,2,3,"td",18),x.qZA()),2&t&&(x.xp6(1),x.Q6J("tuiCell","name"),x.xp6(1),x.Q6J("tuiCell","dob"),x.xp6(1),x.Q6J("tuiCell","age"))}function j(t,e){if(1&t&&(x.TgZ(0,"tbody",15),x.YNc(1,Y,4,3,"tr",16),x.qZA()),2&t){const t=e.tuiLet;x.Q6J("data",t),x.xp6(1),x.Q6J("ngForOf",t)}}function z(t,e){if(1&t){const t=x.EpF();x.TgZ(0,"table",8),x.NdJ("directionChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.direction$.next(e))}))("tuiSortByChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.sorter$.next(e))})),x.ALo(1,"async"),x.ALo(2,"async"),x.TgZ(3,"thead")(4,"tr",9),x.YNc(5,S,2,0,"th",10),x.YNc(6,B,2,0,"th",10),x.YNc(7,H,2,0,"th",10),x.qZA()(),x.YNc(8,j,2,2,"tbody",11),x.ALo(9,"tuiTableSort"),x.TgZ(10,"tfoot")(11,"tr")(12,"td",12)(13,"tui-table-pagination",13),x.NdJ("paginationChange",(function(e){x.CHM(t);const n=x.oxw();return x.KtG(n.onPagination(e))})),x.ALo(14,"async"),x.qZA()()()()()}if(2&t){const t=e.ngIf,n=x.oxw();x.Q6J("columns",n.columns)("direction",x.lcZ(1,9,n.direction$)||1)("tuiSortBy",x.lcZ(2,11,n.sorter$)),x.xp6(5),x.Q6J("tuiHead","name"),x.xp6(1),x.Q6J("tuiHead","dob"),x.xp6(1),x.Q6J("tuiHead","age"),x.xp6(1),x.Q6J("tuiLet",x.lcZ(9,13,t)),x.xp6(4),x.Q6J("colSpan",n.columns.length),x.xp6(1),x.Q6J("total",x.lcZ(14,15,n.total$)||0)}}const E=u.TuiDay.currentLocal(),F=["John","Jane","Jack","Jill","James","Joan","Jim","Julia","Joe","Julia"],K=["Smith","West","Brown","Jones","Davis","Miller","Johnson","Jackson","Williams","Wilson"],G=Array.from({length:300},(()=>({name:`${K[Math.floor(10*Math.random())]}, ${F[Math.floor(10*Math.random())]}`,dob:E.append({day:-Math.floor(4e3*Math.random())-7500})}))),X={Name:"name",Age:"age","Date of Birth":"dob"};function W({dob:t}){const e=E.year-t.year,n=E.month-t.month,i=E.day-t.day;return e+(0,u.tuiToInt)(n>0||!n&&i>9)}const R=(()=>{var t;class e{constructor(){this.size$=new c.X(10),this.page$=new c.X(0),this.direction$=new c.X(-1),this.sorter$=new c.X("name"),this.minAge=new o.NI(21),this.request$=(0,l.a)([this.sorter$,this.direction$,this.page$,this.size$,(0,u.tuiControlValue)(this.minAge)]).pipe((0,d.b)(0),(0,h.w)((t=>this.getData(...t).pipe((0,g.O)(null)))),(0,p.B)()),this.initial=["Name","Date of Birth","Age"],this.enabled=this.initial,this.columns=["name","dob","age"],this.search="",this.loading$=this.request$.pipe((0,m.U)(u.tuiIsFalsy)),this.total$=this.request$.pipe((0,f.h)(u.tuiIsPresent),(0,m.U)((({length:t})=>t)),(0,g.O)(1)),this.data$=this.request$.pipe((0,f.h)(u.tuiIsPresent),(0,m.U)((t=>t.filter(u.tuiIsPresent))),(0,g.O)([])),this.getAge=W}onEnabled(t){this.enabled=t,this.columns=this.initial.filter((e=>t.includes(e))).map((t=>X[t]))}onDirection(t){this.direction$.next(t)}onPagination({page:t,size:e}){this.page$.next(t),this.size$.next(e)}isMatch(t){return!!this.search&&(0,u.TUI_DEFAULT_MATCHER)(t,this.search)}getData(t,e,n,i,o){console.info("Making a request");const a=n*i,r=a+i,s=[...G].sort(function(t,e){return(n,i)=>"age"===t?e*(0,u.tuiDefaultSort)(W(n),W(i)):e*(0,u.tuiDefaultSort)(n[t],i[t])}(t,e)).filter((t=>W(t)>=o)).map(((t,e)=>e>=a&&e<r?t:null));return(0,T.H)(3e3).pipe((0,m.U)((()=>s)))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=x.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent4",features:[x.jDz],decls:13,vars:11,consts:[["tuiTextfieldSize","m",1,"filters"],[1,"input",3,"tuiTextfieldCleaner","ngModel","ngModelChange"],["decimal","never",1,"tui-space_horizontal-3",3,"formControl"],["size","m","tuiButton","","tuiChevron","","tuiDropdownOpen","","type","button",3,"tuiDropdown"],["dropdown",""],[3,"overlay","showLoader"],["tuiTable","","class","table",3,"columns","direction","tuiSortBy","directionChange","tuiSortByChange",4,"ngIf"],[1,"columns",3,"enabled","items","itemsChange","enabledChange"],["tuiTable","",1,"table",3,"columns","direction","tuiSortBy","directionChange","tuiSortByChange"],["tuiThGroup",""],["tuiSortable","","tuiTh","",4,"tuiHead"],["tuiTbody","",3,"data",4,"tuiLet"],[3,"colSpan"],[1,"tui-space_top-2",3,"total","paginationChange"],["tuiSortable","","tuiTh",""],["tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",3,"match",4,"tuiCell"],["tuiTd",""]],template:function(t,e){if(1&t&&(x.TgZ(0,"p",0)(1,"tui-input",1),x.NdJ("ngModelChange",(function(t){return e.search=t})),x._uU(2," Find on page "),x.qZA(),x.TgZ(3,"tui-input-number",2),x._uU(4," Minimum age "),x.qZA(),x.TgZ(5,"button",3),x._uU(6," Columns "),x.qZA(),x.YNc(7,L,1,2,"ng-template",null,4,x.W1O),x.qZA(),x.TgZ(9,"tui-loader",5),x.ALo(10,"async"),x.YNc(11,z,15,17,"table",6),x.ALo(12,"async"),x.qZA()),2&t){const t=x.MAs(8);x.xp6(1),x.Q6J("tuiTextfieldCleaner",!0)("ngModel",e.search),x.xp6(2),x.Q6J("formControl",e.minAge),x.xp6(2),x.Q6J("tuiDropdown",t),x.xp6(4),x.Q6J("overlay",!0)("showLoader",!!x.lcZ(10,7,e.loading$)),x.xp6(2),x.Q6J("ngIf",x.lcZ(12,9,e.data$))}},dependencies:[a.TuiTable,C.c,b.j,Z.E,J.W,A.K,w.f,M.B,y.D,$.P,D.g,q.y,r.TuiTextfieldControllerModule,N.b,Q.s,s.TuiInputModule,_.K,v.w,s.TuiInputNumberModule,O.q,U.g,a.TuiReorderComponent,r.TuiLoaderComponent,i.Ov,i.O5,a.TuiTablePaginationComponent,o.UX,o.JJ,o.oH,r.TuiDropdownDirective,r.TuiButtonDirective,s.TuiChevronDirective,r.TuiDropdownOpenDirective,o.u5,o.On,i.sg,u.TuiLetDirective],styles:[".table[_ngcontent-%COMP%]{width:100%}.filters[_ngcontent-%COMP%]{display:flex}.input[_ngcontent-%COMP%]{flex:1}.columns[_ngcontent-%COMP%]{width:10.625rem}.match[_ngcontent-%COMP%]{background:var(--tui-selection)}"],changeDetection:0}),e})()}}]);