(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13034],{13034:(t,n,i)=>{i.r(n),i.d(n,{default:()=>at});var e=i(4594),o=i(66094),a=i(85400),u=i(49237),c=i(57218),r=i(48266),s=i(5136),l=i(35548),p=i(86561),d=i(84155),g=i(4855),h=i(93098),x=i(23772),m=i(64419),f=i(99829),T=i(25138),w=i(56250),M=i(90070),y=i(44506),C=i(11266),Z=i(64903),J=i(81841),b=i(5989),Q=i(35599),q=i(55802),N=i(23199),A=i(94839),O=i(52174);function Y(t,n){1&t&&(l.TgZ(0,"th",15),l._uU(1," Name "),l.qZA()),2&t&&l.Q6J("sorter",null)("sticky",!0)}function H(t,n){1&t&&(l.TgZ(0,"th",16),l._uU(1," Price, $ "),l.qZA()),2&t&&l.Q6J("sticky",!0)}function $(t,n){1&t&&(l.TgZ(0,"th",17),l._uU(1," Purchase "),l.qZA()),2&t&&l.Q6J("sorter",null)}function F(t,n){1&t&&l.GkF(0)}function L(t,n){1&t&&(l.TgZ(0,"th",18),l._uU(1," Date "),l.qZA())}function _(t,n){if(1&t&&(l.TgZ(0,"th",19),l._uU(1," Total "),l.qZA()),2&t){const t=l.oxw();l.Q6J("sorter",t.totalSorter)}}function k(t,n){1&t&&(l.TgZ(0,"th",20),l._uU(1," Quantity "),l.qZA())}function P(t,n){1&t&&(l.TgZ(0,"th",21),l._uU(1," Units "),l.qZA())}function S(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"th",29)(1,"tui-textarea",30),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw().$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"name",i,e.pythons))})),l.qZA()()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.Q6J("colSpan",t.price>1e3?2:0),l.xp6(1),l.Q6J("expandable",!0)("ngModel",t.name)("ngModelOptions",n.options)}}function D(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"th",32)(1,"tui-input-number",33),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw(2).$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"price",i,e.pythons))})),l.qZA()()}if(2&t){const t=l.oxw(2).$implicit,n=l.oxw(2);l.xp6(1),l.Q6J("ngModel",t.price)("ngModelOptions",n.options)("tuiValidator",n.minPrice)}}function V(t,n){if(1&t&&(l.ynx(0),l.YNc(1,D,2,3,"th",31),l.BQk()),2&t){const t=l.oxw().$implicit;l.xp6(1),l.Q6J("ngIf",t.price<=1e3)}}function v(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"td",34)(1,"tui-input-number",35),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw().$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"quantity",i,e.pythons))})),l.qZA()()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.Q6J("ngModel",t.quantity)("ngModelOptions",n.options)}}function U(t,n){if(1&t&&l._UZ(0,"tui-data-list-wrapper",38),2&t){const t=l.oxw(4);l.Q6J("items",t.units)}}function G(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"td",34)(1,"tui-select",36),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw().$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"unit",i,e.pythons))})),l.YNc(2,U,1,1,"tui-data-list-wrapper",37),l.qZA()()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.Q6J("ngModel",t.unit)("ngModelOptions",n.options)}}function E(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"td",34)(1,"tui-input-date",39),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw().$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"date",i,e.pythons))})),l.qZA()()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.Q6J("ngModel",t.date)("ngModelOptions",n.options)}}function K(t,n){if(1&t&&(l.TgZ(0,"td",40),l._uU(1),l.ALo(2,"async"),l.ALo(3,"tuiFormatNumber"),l.qZA()),2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.hij(" ",l.lcZ(2,1,l.lcZ(3,3,n.getTotal(t)))," ")}}function B(t,n){1&t&&(l.TgZ(0,"tr",24),l.YNc(1,S,2,4,"th",25),l.YNc(2,V,2,1,"ng-container",26),l.YNc(3,v,2,2,"td",27),l.YNc(4,G,3,2,"td",27),l.YNc(5,E,2,2,"td",27),l.YNc(6,K,4,5,"td",28),l.qZA()),2&t&&(l.xp6(1),l.Q6J("tuiCell","name"),l.xp6(1),l.Q6J("tuiCell","price"),l.xp6(1),l.Q6J("tuiCell","quantity"),l.xp6(1),l.Q6J("tuiCell","unit"),l.xp6(1),l.Q6J("tuiCell","date"),l.xp6(1),l.Q6J("tuiCell","total"))}function I(t,n){if(1&t&&(l.TgZ(0,"tbody",22),l.YNc(1,B,7,6,"tr",23),l.qZA()),2&t){const t=n.tuiLet,i=l.oxw();l.Q6J("data",t),l.xp6(1),l.Q6J("ngForOf",t)("ngForTrackBy",i.trackByIndex)}}function j(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"th",34)(1,"tui-textarea",30),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw().$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"name",i,e.starwars))})),l.qZA()()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.Q6J("expandable",!0)("ngModel",t.name)("ngModelOptions",n.options)}}function W(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"th",32)(1,"tui-input-number",43),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw().$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"price",i,e.starwars))})),l.qZA()()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.Q6J("ngModel",t.price)("ngModelOptions",n.options)("tuiValidator",n.minPrice)}}function z(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"td",34)(1,"tui-input-number",35),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw().$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"quantity",i,e.starwars))})),l.qZA()()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.Q6J("ngModel",t.quantity)("ngModelOptions",n.options)}}function R(t,n){if(1&t&&l._UZ(0,"tui-data-list-wrapper",38),2&t){const t=l.oxw(4);l.Q6J("items",t.units)}}function X(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"td",34)(1,"tui-select",36),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw().$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"unit",i,e.starwars))})),l.YNc(2,R,1,1,"tui-data-list-wrapper",37),l.qZA()()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.Q6J("ngModel",t.unit)("ngModelOptions",n.options)}}function tt(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"td",34)(1,"tui-input-date",39),l.NdJ("ngModelChange",(function(n){l.CHM(t);const i=l.oxw().$implicit,e=l.oxw(2);return l.KtG(e.onValueChange(n,"date",i,e.starwars))})),l.qZA()()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.Q6J("ngModel",t.date)("ngModelOptions",n.options)}}function nt(t,n){if(1&t&&(l.TgZ(0,"td",40),l._uU(1),l.ALo(2,"async"),l.ALo(3,"tuiFormatNumber"),l.qZA()),2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(1),l.hij(" ",l.lcZ(2,1,l.lcZ(3,3,n.getTotal(t)))," ")}}function it(t,n){1&t&&(l.TgZ(0,"tr",24),l.YNc(1,j,2,3,"th",27),l.YNc(2,W,2,3,"th",42),l.YNc(3,z,2,2,"td",27),l.YNc(4,X,3,2,"td",27),l.YNc(5,tt,2,2,"td",27),l.YNc(6,nt,4,5,"td",28),l.qZA()),2&t&&(l.xp6(1),l.Q6J("tuiCell","name"),l.xp6(1),l.Q6J("tuiCell","price"),l.xp6(1),l.Q6J("tuiCell","quantity"),l.xp6(1),l.Q6J("tuiCell","unit"),l.xp6(1),l.Q6J("tuiCell","date"),l.xp6(1),l.Q6J("tuiCell","total"))}function et(t,n){if(1&t&&(l.TgZ(0,"tbody",41),l.YNc(1,it,7,6,"tr",23),l.qZA()),2&t){const t=n.tuiLet,i=l.oxw(),e=l.MAs(18);l.Q6J("data",t)("heading",e),l.xp6(1),l.Q6J("ngForOf",t)("ngForTrackBy",i.trackByIndex)}}function ot(t,n){1&t&&(l._UZ(0,"tui-svg",44),l._uU(1," Star Wars\n"))}const at=(()=>{var t;class n{constructor(){this.options={updateOn:"blur"},this.units=["items","kg","m"],this.pythons=[{name:"Holy Grail",price:999999,quantity:1,unit:this.units[0],date:c.TuiDay.currentLocal()},{name:"Foot",price:29.95,quantity:5,unit:this.units[2],date:c.TuiDay.currentLocal().append({day:-42})},{name:"Shed",price:499,quantity:2,unit:this.units[0],date:c.TuiDay.currentLocal().append({day:-237})}],this.starwars=[{name:"Lightsaber",price:4999,quantity:3,unit:this.units[0],date:c.TuiDay.currentLocal()},{name:"Spaceship",price:19999,quantity:1,unit:this.units[0],date:c.TuiDay.currentLocal().append({day:-237})},{name:"Stormtrooper helmet",price:14.95,quantity:5,unit:this.units[0],date:c.TuiDay.currentLocal().append({day:-42})}],this.columns=["name","price","quantity","unit","total"],this.minPrice=({value:t})=>t>400?null:{minPrice:"Price must be above $400"},this.totalSorter=(t,n)=>(0,c.tuiDefaultSort)(t.price*t.quantity,n.price*n.quantity)}trackByIndex(t){return t}getTotal({price:t,quantity:n}){return t*n}onValueChange(t,n,i,e){const o={...i,[n]:t};this.pythons=e===this.pythons?this.pythons.map((t=>t===i?o:t)):this.pythons,this.starwars=e===this.starwars?this.starwars.map((t=>t===i?o:t)):this.starwars}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent3",features:[l.jDz],decls:19,vars:18,consts:[["waIntersectionRoot","",1,"scrollbar",3,"hidden"],["size","l","tuiTable","",1,"table",3,"columns","direction","sorter"],["tuiThead",""],["tuiThGroup",""],["rowspan","2","tuiTh","","class","first",3,"sorter","sticky",4,"tuiHead"],["rowspan","2","tuiTh","","class","number second",3,"sticky",4,"tuiHead"],["colspan","2","tuiTh","",3,"sorter",4,"tuiHead"],[4,"tuiHead"],["rowspan","2","tuiTh","",4,"tuiHead"],["rowspan","2","tuiTh","","class","number",3,"sorter",4,"tuiHead"],["tuiTh","","class","number border",4,"tuiHead"],["tuiTh","",4,"tuiHead"],["heading","Monty Python","tuiTbody","",3,"data",4,"tuiLet"],["tuiTbody","",3,"data","heading",4,"tuiLet"],["template",""],["rowspan","2","tuiTh","",1,"first",3,"sorter","sticky"],["rowspan","2","tuiTh","",1,"number","second",3,"sticky"],["colspan","2","tuiTh","",3,"sorter"],["rowspan","2","tuiTh",""],["rowspan","2","tuiTh","",1,"number",3,"sorter"],["tuiTh","",1,"number","border"],["tuiTh",""],["heading","Monty Python","tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf","ngForTrackBy"],["tuiTr",""],["tuiTd","",3,"colSpan",4,"tuiCell"],[4,"tuiCell"],["tuiTd","",4,"tuiCell"],["tuiTd","","class","number text",4,"tuiCell"],["tuiTd","",3,"colSpan"],[1,"textarea",3,"expandable","ngModel","ngModelOptions","ngModelChange"],["tuiTd","","class","second",4,"ngIf"],["tuiTd","",1,"second"],[1,"number",3,"ngModel","ngModelOptions","tuiValidator","ngModelChange"],["tuiTd",""],["decimal","never",3,"ngModel","ngModelOptions","ngModelChange"],[1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"],[3,"ngModel","ngModelOptions","ngModelChange"],["tuiTd","",1,"number","text"],["tuiTbody","",3,"data","heading"],["tuiTd","","class","second",4,"tuiCell"],[3,"ngModel","ngModelOptions","tuiValidator","ngModelChange"],["src","tuiIconStarLarge",1,"tui-space_right-3"]],template:function(t,n){1&t&&(l.TgZ(0,"tui-scrollbar",0)(1,"table",1)(2,"thead",2)(3,"tr",3),l.YNc(4,Y,2,2,"th",4),l.YNc(5,H,2,1,"th",5),l.YNc(6,$,2,1,"th",6),l.YNc(7,F,1,0,"ng-container",7),l.YNc(8,L,2,0,"th",8),l.YNc(9,_,2,1,"th",9),l.qZA(),l.TgZ(10,"tr",3),l.YNc(11,k,2,0,"th",10),l.YNc(12,P,2,0,"th",11),l.qZA()(),l.YNc(13,I,2,3,"tbody",12),l.ALo(14,"tuiTableSort"),l.YNc(15,et,2,4,"tbody",13),l.ALo(16,"tuiTableSort"),l.qZA()(),l.YNc(17,ot,2,0,"ng-template",null,14,l.W1O)),2&t&&(l.Q6J("hidden",!0),l.xp6(1),l.Q6J("columns",n.columns)("direction",-1)("sorter",n.totalSorter),l.xp6(3),l.Q6J("tuiHead","name"),l.xp6(1),l.Q6J("tuiHead","price"),l.xp6(1),l.Q6J("tuiHead","quantity"),l.xp6(1),l.Q6J("tuiHead","unit"),l.xp6(1),l.Q6J("tuiHead","date"),l.xp6(1),l.Q6J("tuiHead","total"),l.xp6(2),l.Q6J("tuiHead","quantity"),l.xp6(1),l.Q6J("tuiHead","unit"),l.xp6(1),l.Q6J("tuiLet",l.lcZ(14,14,n.pythons)),l.xp6(2),l.Q6J("tuiLet",l.lcZ(16,16,n.starwars)))},dependencies:[u.TuiTable,p.c,d.j,g.E,h.W,x.K,m.f,f.B,T.D,w.N,M.y,a.$v,a.Q7,s.TuiTextareaModule,y.FC,C.B,o.u5,o.JJ,o.On,s.TuiInputNumberModule,Z.q,J.g,e.O5,c.TuiValidatorDirective,s.TuiInputDateModule,b.j,Q.k,s.TuiDataListWrapperModule,q.e,N.g,s.TuiSelectModule,A.u,O.O,e.sg,c.TuiLetDirective,r.TuiScrollbarComponent,r.TuiFormatNumberPipe,e.Ov,r.TuiSvgComponent],styles:[".table[_ngcontent-%COMP%]{table-layout:fixed}.textarea[_ngcontent-%COMP%]{min-height:var(--tui-height-l)}.number[_ngcontent-%COMP%]{text-align:right;flex-direction:row-reverse}.first[_ngcontent-%COMP%]{min-width:11.25rem;max-width:11.25rem}.second[_ngcontent-%COMP%]{left:11.25rem}.text[_ngcontent-%COMP%]{vertical-align:top;padding-top:1rem}.border[_ngcontent-%COMP%]{border-left:none}.select[_ngcontent-%COMP%]{width:6.25rem}.scrollbar[_ngcontent-%COMP%]{max-height:18.75rem}"],changeDetection:0}),n})()}}]);