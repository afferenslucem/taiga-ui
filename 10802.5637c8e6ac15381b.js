(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[10802,20332],{25096:(t,e,i)=>{i.d(e,{W:()=>C});var n,s=i(84911),a=i(20755),r=i(2697),o=i(45873),u=i(69781),c=i(8610),h=i(77355),d=i(42463),m=i(96954),g=i(76893),l=i(17085),p=i(2255);const v=function(t){return{$implicit:t}};function I(t,e){if(1&t){const t=a.EpF();a.O4$(),a.TgZ(0,"path",5),a.NdJ("tuiHoveredChange",(function(e){const i=a.CHM(t).$implicit,n=a.oxw();return a.KtG(n.onHovered(e,i))})),a.qZA()}if(2&t){const t=e.$implicit,i=a.oxw();a.Udp("color",i.getColor(t)),a.Q6J("tuiHint",i.hintContent)("tuiHintContext",a.VKq(6,v,t))("tuiPieChart",i.segments[t]),a.uIk("transform",i.getTransform(t))}}const f={xs:"50",s:"50",m:"77.8",l:"81.9",xl:"81.3"},x={xs:1.15,s:1.25,m:1.11,l:1.09,xl:1.08};class C{constructor(){this.hintOptions=(0,a.f3M)(o.TuiHintOptionsDirective,{optional:!0}),this.autoIdString=(0,a.f3M)(r.TuiIdService).generate(),this.value=[],this.size="m",this.masked=!1,this.activeItemIndex=NaN,this.activeItemIndexChange=new a.vpe,this.hintOptions&&(this.hintOptions.showDelay=0,this.hintOptions.hideDelay=0)}get empty(){return!this.getSum(this.value)}get hintContent(){return this.hintOptions?.content||""}get maskId(){return`tui-ring-chart-${this.autoIdString}`}get mask(){return this.masked?`url(#${this.maskId})`:null}get radius(){return f[this.size]}get segments(){return this.getSegments(this.value)}getTransform(t){const e=this.masked?`scale(${x[this.size]})`:`scale(${x.xs})`;return t===this.activeItemIndex?e:null}onHovered(t,e){this.updateActiveItemIndex(t?e:NaN)}getColor(t){return`var(--tui-chart-${t})`}getSum(t){return(0,r.tuiSum)(...t)}getSegments(t){return t.map(((t,e,i)=>i.reduce(((t,i,n)=>n<e?this.getDeg(i)+t:t),this.getDeg(t)))).map(((t,e,i)=>[i[e-1]||0,Math.min(t,359.9999)]))}getDeg(t){return t/this.getSum(this.value)*360}updateActiveItemIndex(t){t!==this.activeItemIndex&&(this.activeItemIndex=t,this.activeItemIndexChange.next(t))}}(n=C).ɵfac=function(t){return new(t||n)},n.ɵcmp=a.Xpm({type:n,selectors:[["tui-pie-chart"]],hostVars:3,hostBindings:function(t,e){2&t&&(a.uIk("data-size",e.size),a.ekj("_empty",e.empty))},inputs:{value:"value",size:"size",masked:"masked",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},features:[a._Bn([],[(0,o.tuiHintOptionsProvider)({direction:"top-right",appearance:"dark"})])],decls:8,vars:5,consts:[["focusable","false","height","100%","viewBox","-100 -100 200 200","width","100%","xmlns","http://www.w3.org/2000/svg",1,"t-svg"],["fill","white","height","400","width","400","x","-200","y","-200"],["cx","0","cy","0"],["cx","0","cy","0","r","100",1,"t-placeholder"],["automation-id","tui-pie-chart__segment","d","","fill","currentColor","tuiHintPointer","","class","t-segment",3,"color","tuiHint","tuiHintContext","tuiPieChart","tuiHoveredChange",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["automation-id","tui-pie-chart__segment","d","","fill","currentColor","tuiHintPointer","",1,"t-segment",3,"tuiHint","tuiHintContext","tuiPieChart","tuiHoveredChange"]],template:function(t,e){1&t&&(a.O4$(),a.TgZ(0,"svg",0)(1,"defs")(2,"mask"),a._UZ(3,"rect",1)(4,"circle",2),a.qZA()(),a.TgZ(5,"g"),a._UZ(6,"circle",3),a.YNc(7,I,1,8,"path",4),a.qZA()()),2&t&&(a.xp6(2),a.uIk("id",e.maskId),a.xp6(2),a.uIk("r",e.radius),a.xp6(1),a.Udp("mask",e.mask),a.xp6(2),a.Q6J("tuiRepeatTimesOf",e.segments.length))},dependencies:[u.X,c.c,h.D,d.x,m.t,g.q,l.D,p.K],styles:["[_nghost-%COMP%]{position:relative;display:block;width:var(--t-size);height:var(--t-size)}[data-size=xs][_nghost-%COMP%]{--t-size: 2rem;pointer-events:none}[data-size=s][_nghost-%COMP%]{--t-size: 4rem}[data-size=m][_nghost-%COMP%]{--t-size: 9rem}[data-size=l][_nghost-%COMP%]{--t-size: 11rem}[data-size=xl][_nghost-%COMP%]{--t-size: 16rem}.t-svg[_ngcontent-%COMP%]{position:relative;overflow:visible;transform:rotate(-90deg)}.t-segment[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}._empty[_nghost-%COMP%]   .t-segment[_ngcontent-%COMP%]{display:none}.t-placeholder[_ngcontent-%COMP%]{fill:var(--tui-base-03)}"],changeDetection:0}),(0,s.gn)([r.tuiPure],C.prototype,"getSum",null),(0,s.gn)([r.tuiPure],C.prototype,"getSegments",null)},2255:(t,e,i)=>{i.d(e,{K:()=>l});var n=i(20755),s=i(5393),a=i(569),r=i(2697),o=i(45873),u=i(56424),c=i(74114),h=i(84787),d=i(92425),m=i(85228),g=i(81749);let l=(()=>{var t;class e{constructor(){this.sector$=new u.X([0,0]);const t=(0,n.f3M)(n.SBq).nativeElement,e=(0,n.f3M)(s.KS),i=(0,n.f3M)(s.L1),l=(0,n.f3M)(o.TUI_ANIMATIONS_SPEED);this.sector$.pipe((0,c.G)(),(0,h.w)((([t,n])=>{const s=e.now(),a=n[0]-t[0],u=n[1]-t[1];return i.pipe((0,d.U)((t=>(0,r.tuiEaseInOutQuad)((0,r.tuiClamp)((t-s)/(0,o.tuiGetDuration)(l),0,1)))),(0,m.o)((t=>t<1),!0),(0,d.U)((e=>[t[0]+a*e,n[1]>359?n[1]:t[1]+u*e])))})),(0,r.tuiZonefree)((0,n.f3M)(n.R0b)),(0,g.R)((0,n.f3M)(r.TuiDestroyService,{self:!0}))).subscribe((([e,i])=>t.setAttribute("d",(0,a.IP)(e,i))))}set tuiPieChart(t){this.sector$.next(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=n.lG2({type:t,selectors:[["path","tuiPieChart",""]],inputs:{tuiPieChart:"tuiPieChart"},features:[n._Bn([r.TuiDestroyService])]}),e})()},10802:(t,e,i)=>{i.d(e,{i:()=>r});var n=i(20755),s=i(25096);const a=["*"];let r=(()=>{var t;class e{constructor(){this.value=[],this.size="m",this.activeItemIndex=NaN,this.activeItemIndexChange=new n.vpe}onActiveItemIndexChange(t){this.updateActiveItemIndex(t)}updateActiveItemIndex(t){t!==this.activeItemIndex&&(this.activeItemIndex=t,this.activeItemIndexChange.next(t))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["tui-ring-chart"]],hostVars:1,hostBindings:function(t,e){2&t&&n.uIk("data-size",e.size)},inputs:{value:"value",size:"size",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},ngContentSelectors:a,decls:5,vars:4,consts:[[1,"t-content"],[1,"t-wrapper"],[1,"t-chart",3,"activeItemIndex","masked","size","value","activeItemIndexChange"],[1,"t-shield"]],template:function(t,e){1&t&&(n.F$t(),n.TgZ(0,"div",0)(1,"div",1),n.Hsn(2),n.qZA()(),n.TgZ(3,"tui-pie-chart",2),n.NdJ("activeItemIndexChange",(function(t){return e.onActiveItemIndexChange(t)})),n.qZA(),n._UZ(4,"div",3)),2&t&&(n.xp6(3),n.Q6J("activeItemIndex",e.activeItemIndex)("masked",!0)("size",e.size)("value",e.value))},dependencies:[s.W],styles:["[_nghost-%COMP%]{position:relative;display:block;width:var(--t-size);height:var(--t-size);flex-shrink:0}[data-size=xs][_nghost-%COMP%]{--t-size: 3rem}[data-size=s][_nghost-%COMP%]{--t-size: 4rem}[data-size=m][_nghost-%COMP%]{--t-size: 9rem}[data-size=l][_nghost-%COMP%]{--t-size: 11rem}[data-size=xl][_nghost-%COMP%]{--t-size: 16rem}.t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;font:var(--tui-font-text-m);max-height:100%;flex-direction:column;justify-content:center;text-align:center;padding:1.5rem;border-radius:100%;box-sizing:border-box;overflow:hidden;word-break:break-word;white-space:pre-wrap;color:var(--tui-text-02)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-xs)}.t-wrapper[_ngcontent-%COMP%]:first-line{color:var(--tui-text-01)}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-l);font-weight:700}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-m);font-weight:700}.t-shield[_ngcontent-%COMP%]{position:absolute;top:25%;left:25%;right:25%;bottom:25%;border-radius:100%}.t-chart[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0}),e})()},569:(t,e,i)=>{i.d(e,{IP:()=>a,iP:()=>u});var n=i(2697);const s="M 100 0 A 100 100 0 1 1 100 0 L 0 0";function a(t,e){const i=(0,n.tuiToRadians)(t),a=(0,n.tuiToRadians)(e),r=100*Math.cos(i),o=100*Math.sin(i),u=100*Math.cos(a),c=100*Math.sin(a),h=["M",r,o,"A 100 100 0",(0,n.tuiToInt)(e-t>180),1,u,c,"L 0 0"];return Number.isNaN(u)?s:h.join(" ")}function r(t,e,i,n=!1,s=.2){const a=e||t,r=i||t,o=function(t,e){const i=e[0]-t[0],n=e[1]-t[1];return Math.atan2(n,i)}(a,r)+(n?Math.PI:0),u=function(t,e){const i=e[0]-t[0],n=e[1]-t[1];return Math.sqrt(i**2+n**2)}(a,r)*s;return[t[0]+Math.cos(o)*u,t[1]+Math.sin(o)*u]}const o=500;function u(t,e,i){return i?function(t,e,i){const[n,s]=r(t[e-1],t[e-2],t[e],!1,i),[a,o]=r(t[e],t[e-1],t[e+1],!0,i);return`C ${n},${s} ${a},${o} ${t[e][0]},${t[e][1]}`}(t,e,i/o):`L ${[t[e][0],t[e][1]]}`}}}]);