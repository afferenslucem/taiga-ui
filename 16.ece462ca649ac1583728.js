(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3tXr":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("An66"),i=n("1VvW"),r=n("SVIu"),a=n("Qq0t"),l=n("kZht");let s=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.f,r.m,a.ub]]}),e})()},"K/iL":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=new(n("kZht").InjectionToken)("Component extends AbstractExample class")},KDbD:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("An66"),i=n("1VvW"),r=n("SVIu"),a=n("Qq0t"),l=n("kZht");let s=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.f,r.m,a.ub]]}),e})()},LusI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("Qq0t"),i=n("pVuH");class r extends i.a{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["Some content"],this.hintDirectionVariants=["left","right","bottom-left","bottom-right","top-left","top-right"],this.hintModeVariants=["error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=["Bell","<span>LongTextContent</span>"],this.customContentSelected=null,this.inputMode=this.inputModeVariants[0],this.autocomplete=null,this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.hintContent=null,this.hintDirection=this.hintDirectionVariants[2],this.hintMode=null,this.dropdownAlignVariants=["left","right"],this.dropdownAlign=this.dropdownAlignVariants[0],this.dropdownLimitWidthVariants=["fixed","min"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.dropdownDirection=null,this.dropdownSided=!1,this.dropdownMinHeight=o.c,this.dropdownMaxHeight=o.b}get customContent(){return"Bell"===this.customContentSelected?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}},Piem:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("An66"),i=n("SVIu"),r=n("KDbD"),a=n("jjvb"),l=n("3tXr"),s=n("kZht");let c=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.m,r.a,a.a,l.a]]}),e})()},jjvb:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("An66"),i=n("1VvW"),r=n("SVIu"),a=n("Qq0t"),l=n("kZht");let s=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.f,r.m,a.ub]]}),e})()},luzD:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiEditorNewModule",(function(){return de}));var o=n("An66"),i=n("3kIJ"),r=n("1VvW"),a=n("SVIu"),l=n("vgRF"),s=n("Qq0t"),c=n("Piem"),d=n("kZht"),u=n("LusI"),p=n("K/iL"),m=n("OZlg"),h=n("e0eB"),f=n("yZWP"),T=n("aPft"),g=n("iyc4"),b=n("zV1d"),E=n("McAJ"),S=n("PVE+");let y=(()=>{class e{constructor(){this.control=new i.FormControl('<p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) \u2014 <u>Rich Text Editor</u> for using with Angular<sup> forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p>ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: #FFDD2C" colspan="1" rowspan="1"><p>+</p></td><td style="background: #39b54a" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>',i.Validators.required)}onClick(){this.control.setValue('<p>Control</p><h2>is</h2><h1><span style="color: #e01f19">updated</span></h1>')}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-editor-example-1"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:l.a,useValue:l.n},{provide:l.b,useValue:l.p}])],decls:12,vars:3,consts:[["tuiButton","","type","button",3,"click"],["new","","exampleText","exampleText",1,"editor",3,"formControl"],[3,"content"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275elementStart"](1,"button",0),d["\u0275\u0275listener"]("click",(function(){return t.onClick()})),d["\u0275\u0275text"](2,"Set value"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-editor",1),d["\u0275\u0275text"](4," Placeholder\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"h4"),d["\u0275\u0275text"](6,"HTML:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](7,"tui-editor-socket",2),d["\u0275\u0275elementStart"](8,"h4"),d["\u0275\u0275text"](9,"Text:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"p"),d["\u0275\u0275text"](11),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("formControl",t.control),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("content",t.control.value),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate"](t.control.value))},directives:[b.a,E.a,i.NgControlStatus,i.FormControlDirective,S.a],styles:[".editor[_ngcontent-%COMP%]{max-height:18.75rem}"],changeDetection:0}),e})();var x=n("q7Lq"),v=n("SUM+"),C=n("4hRd");function _(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",6),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](2).insertSmile(n)})),d["\u0275\u0275elementEnd"]()}2&e&&d["\u0275\u0275property"]("innerHTML",t.$implicit,d["\u0275\u0275sanitizeHtml"])}function w(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",4),d["\u0275\u0275template"](1,_,1,1,"button",5),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("tuiActiveZoneParent",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",n.smiles)}}let I=(()=>{class e{constructor(e){this.editor=e,this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(e){this.editor.getOriginTiptapEditor().chain().focus().insertContent(e+" ").run()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](l.k))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["smiles-tool"]],decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["tuiIconButton","","type","button","size","s","icon","tuiIconStarLarge","appearance","icon","automation-id","smiles-tool__button",1,"tool-button",3,"pseudoPressed","focusable"],["smileDropdown",""],[1,"smiles",3,"tuiActiveZoneParent"],["class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],[1,"smile",3,"innerHTML","click"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0,1),d["\u0275\u0275element"](2,"button",2),d["\u0275\u0275template"](3,w,2,2,"ng-template",null,3,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](1),t=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("content",t),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("pseudoPressed",e.open)("focusable",e.open)}},directives:[x.a,v.a,b.a,C.a,o.s],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:background;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}"]}),e})();var A=n("7iy/"),D=n("ONKv");let O=(()=>{class e{constructor(){this.builtInTools=[l.i.Undo],this.control=new i.FormControl("",i.Validators.required)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-editor-example-2"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:l.a,useValue:[n.e(9).then(n.bind(null,"kT51")).then(e=>e.default)]}])],decls:7,vars:2,consts:[["new","",1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiToolbarTool",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-editor",0),d["\u0275\u0275text"](1," Smiles are custom tool. Try it. "),d["\u0275\u0275elementContainerStart"](2,1),d["\u0275\u0275element"](3,"smiles-tool",2),d["\u0275\u0275elementStart"](4,"span",3),d["\u0275\u0275element"](5,"tui-svg",4),d["\u0275\u0275text"](6," click it "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&d["\u0275\u0275property"]("formControl",t.control)("tools",t.builtInTools)},directives:[E.a,i.NgControlStatus,i.FormControlDirective,I,A.a,D.a],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),e})();var L=n("6uGs"),k=n("l4xa"),V=n("TLy2"),M=n("kuMc");let P=(()=>{class e{constructor(e,t,n){this.imageLoader=e,this.http=t,this.builtInTools=[l.i.Undo,l.i.Img],this.base64Image$=this.http.get("assets/images/lumberjack.png",{responseType:"blob"}).pipe(Object(V.a)(e=>this.imageLoader(e))),this.control=new i.FormControl(""),this.base64Image$.pipe(Object(M.a)(n)).subscribe(e=>{this.control.patchValue(`\n                <img data-type="image-editor" src="${e}" width="300">\n                <p>Try to drag right border of image!</p>\n\n                <p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p>\n            `)})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](l.c),d["\u0275\u0275directiveInject"](L.a),d["\u0275\u0275directiveInject"](k.bb))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-editor-example-3"]],features:[d["\u0275\u0275ProvidersFeature"]([k.bb,{provide:l.a,deps:[d.Injector],useFactory:e=>[n.e(9).then(n.bind(null,"kT51")).then(e=>e.default),Promise.resolve().then(n.bind(null,"Do+X")).then(t=>t.createImageEditorExtension(e))]},{provide:l.b,useValue:l.p}])],decls:4,vars:3,consts:[["new","",1,"editor",3,"formControl","tools"],[3,"content"]],template:function(e,t){1&e&&(d["\u0275\u0275element"](0,"tui-editor",0),d["\u0275\u0275elementStart"](1,"h4"),d["\u0275\u0275text"](2,"HTML:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](3,"tui-editor-socket",1)),2&e&&(d["\u0275\u0275property"]("formControl",t.control)("tools",t.builtInTools),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",t.control.value))},directives:[E.a,i.NgControlStatus,i.FormControlDirective,S.a],styles:[".editor[_ngcontent-%COMP%]{min-height:30rem}"],changeDetection:0}),e})();var $,R,j=n("EPR0"),G=n("yHor"),N=n("zGJC"),H=n("u8jZ");$=$localize`:␟f5964dc5d702c9d1481378adf62133c1cfd74148␟1500977810708377393: Rich Text Editor based on ${"\ufffd#2\ufffd"}:START_LINK:TipTap Editor${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: for using with Angular forms. For safety reasons use a ${"\ufffd#3\ufffd"}:START_LINK_1:sanitizer${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: with this component. `,$=d["\u0275\u0275i18nPostprocess"]($),R=$localize`:␟13553811257e8ef150c8f5ef14d673b883babe00␟188130905735364129: This component is experimental. Use it with caution. Expect breaking changes `;const F=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],U=["heading",$localize`:␟8a5e7d40e307be087206f463dc06bbcff5e0c48e␟6700333422041027148:With custom tool`];var z;z=$localize`:␟80d0aad7cf71915f6aae574bd227ebd7389fef84␟7771894138659657979:${"[\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_LIST_ITEM: Create component with tool button (which can get access to ${"\ufffd#15\ufffd"}:START_LINK: original TipTap editor API ${"\ufffd/#15\ufffd"}:CLOSE_LINK: via ${"[\ufffd#16\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#20\ufffd]"}:START_TAG_CODE:TuiTiptapEditorService${"[\ufffd/#16\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#20\ufffd]"}:CLOSE_TAG_CODE: from ${"[\ufffd#16\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#20\ufffd]"}:START_TAG_CODE:@taiga-ui/addon-editor${"[\ufffd/#16\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#20\ufffd]"}:CLOSE_TAG_CODE: ). ${"[\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_LIST_ITEM: Pass the component as content projection (with ${"[\ufffd#16\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#20\ufffd]"}:START_TAG_CODE:ngProjectAs="tools"${"[\ufffd/#16\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#20\ufffd]"}:CLOSE_TAG_CODE: ) to ${"[\ufffd#16\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#20\ufffd]"}:START_TAG_CODE:<tui-editor>${"[\ufffd/#16\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#20\ufffd]"}:CLOSE_TAG_CODE: . ${"[\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_LIST_ITEM:`,z=d["\u0275\u0275i18nPostprocess"](z);const q=["heading",$localize`:␟ecf77038d883166945bdbfd71a0a2953aebf29bb␟7856608464907240497:With resizable image`];function W(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,$),d["\u0275\u0275element"](2,"a",3),d["\u0275\u0275element"](3,"a",4),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-notification",5),d["\u0275\u0275i18n"](5,R),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"tui-doc-example",6),d["\u0275\u0275i18nAttributes"](7,F),d["\u0275\u0275element"](8,"tui-editor-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"tui-doc-example",7),d["\u0275\u0275i18nAttributes"](10,U),d["\u0275\u0275text"](11," You can create your own tool: "),d["\u0275\u0275elementStart"](12,"ul",8),d["\u0275\u0275i18nStart"](13,z),d["\u0275\u0275elementStart"](14,"li",9),d["\u0275\u0275element"](15,"a",10),d["\u0275\u0275element"](16,"code"),d["\u0275\u0275element"](17,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"li",9),d["\u0275\u0275element"](19,"code"),d["\u0275\u0275element"](20,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](21,"tui-editor-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"tui-doc-example",11),d["\u0275\u0275i18nAttributes"](23,q),d["\u0275\u0275element"](24,"tui-editor-example-3"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](13),d["\u0275\u0275property"]("content",e.example3)}}var Z,B,K,Y,X,J,Q,ee;function te(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,Z),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function ne(e,t){1&e&&d["\u0275\u0275i18n"](0,B)}function oe(e,t){1&e&&d["\u0275\u0275i18n"](0,K)}function ie(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275elementStart"](1,"tui-editor",12),d["\u0275\u0275text"](2," Start typing "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-documentation"),d["\u0275\u0275template"](4,te,2,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().disabled=t})),d["\u0275\u0275template"](5,ne,1,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().exampleText=t})),d["\u0275\u0275template"](6,oe,1,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().tools=t})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("exampleText",e.exampleText)("readOnly",e.readOnly)("tools",e.tools)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("documentationPropertyValue",e.disabled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.exampleText),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.toolsVariants)("documentationPropertyValue",e.tools)}}function re(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",16),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,Y),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,X),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",18),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"li"),d["\u0275\u0275elementStart"](11,"p"),d["\u0275\u0275i18n"](12,J),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](13,"tui-doc-code",19),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.provideExtensions)}}function ae(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"h2"),d["\u0275\u0275i18n"](1,Q),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](2," You can configure some editor's params via DI-token "),d["\u0275\u0275elementStart"](3,"code"),d["\u0275\u0275text"](4,"TUI_EDITOR_OPTIONS"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](5," . "),d["\u0275\u0275elementStart"](6,"p"),d["\u0275\u0275elementStart"](7,"strong"),d["\u0275\u0275text"](8,"Usage:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",20),d["\u0275\u0275elementStart"](10,"p"),d["\u0275\u0275elementStart"](11,"strong"),d["\u0275\u0275text"](12,"Description of the available configurations:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"dl"),d["\u0275\u0275i18nStart"](14,ee),d["\u0275\u0275elementStart"](15,"dt"),d["\u0275\u0275element"](16,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"dd",21),d["\u0275\u0275elementStart"](18,"p"),d["\u0275\u0275element"](19,"code"),d["\u0275\u0275element"](20,"strong"),d["\u0275\u0275element"](21,"strong"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"dt"),d["\u0275\u0275element"](23,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"dd",21),d["\u0275\u0275elementStart"](25,"p"),d["\u0275\u0275element"](26,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("code",e.exampleEditorOptionsToken)}}Z=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,B=$localize`:␟4451dd975ad87c22f3e58059c2d38ee4dce01d18␟8752995704195016078: Example text shown on empty focused input `,K=$localize`:␟0cea9742234b055b1bce51470d8f030dd089acde␟2877889858952730048: Allowed edit tools `,Y=$localize`:␟03a323cd3ce898d115bcdb8364920447fb35afb8␟1340683940823692236: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiEditorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,X=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,J=$localize`:␟a4522789e83281f7632d45800e72592d0542be06␟7133120873610052514: Provide the required extensions or use the default ones: `,Q=$localize`:␟efaa49ce895f1db3267f161305f62fa8bd4c8e7b␟8578885722748078515:TUI_EDITOR_OPTIONS`,ee=$localize`:␟4636403edf3598b53578bd36414f9b9fdf157160␟1663742613000105064:${"[\ufffd#15\ufffd|\ufffd#22\ufffd]"}:START_TAG_DT:${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:colors${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#15\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_DT:${"[\ufffd#17\ufffd|\ufffd#24\ufffd]"}:START_TAG_DD: map of colors in toolbar's dropdowns with color-selection. ${"[\ufffd#18\ufffd|\ufffd#25\ufffd]"}:START_PARAGRAPH: It accepts ${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:ReadonlyMap<string, string>${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE: : the ${"[\ufffd#20\ufffd|\ufffd#21\ufffd]"}:START_TAG_STRONG:key${"[\ufffd/#20\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_STRONG: is the name of the color (used only for hint and accessibility), the ${"[\ufffd#20\ufffd|\ufffd#21\ufffd]"}:START_TAG_STRONG:value${"[\ufffd/#20\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_STRONG: – HTML color code. ${"[\ufffd/#18\ufffd|\ufffd/#25\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd/#17\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#15\ufffd|\ufffd#22\ufffd]"}:START_TAG_DT:${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:blankColor${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#15\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_DT:${"[\ufffd#17\ufffd|\ufffd#24\ufffd]"}:START_TAG_DD: Null color. It is used in situations when there is no color selected. ${"[\ufffd#18\ufffd|\ufffd#25\ufffd]"}:START_PARAGRAPH: it accepts ${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:string${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE: (HTML color code). ${"[\ufffd/#18\ufffd|\ufffd/#25\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd/#17\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DD:`,ee=d["\u0275\u0275i18nPostprocess"](ee);let le=(()=>{class e extends u.a{constructor(){super(...arguments),this.exampleModule=n.e(297).then(n.bind(null,"EG5p")),this.exampleHtml=n.e(298).then(n.bind(null,"pN2s")),this.provideExtensions=n.e(299).then(n.bind(null,"o2d2")),this.exampleEditorOptionsToken=n.e(296).then(n.bind(null,"8x7P")),this.example1={TypeScript:'import {Component} from \'@angular/core\';\nimport {FormControl, Validators} from \'@angular/forms\';\nimport {changeDetection} from \'@demo/emulate/change-detection\';\nimport {encapsulation} from \'@demo/emulate/encapsulation\';\nimport {\n    defaultEditorExtensions,\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n} from \'@taiga-ui/addon-editor\';\n\n@Component({\n    selector: \'tui-editor-example-1\',\n    templateUrl: \'./index.html\',\n    styleUrls: [\'./index.less\'],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: defaultEditorExtensions,\n        },\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample1 {\n    control = new FormControl(\n        \'<p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) \u2014 <u>Rich Text Editor</u> for using with Angular<sup> forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p>ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: #FFDD2C" colspan="1" rowspan="1"><p>+</p></td><td style="background: #39b54a" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>\',\n        Validators.required,\n    );\n\n    onClick() {\n        this.control.setValue(\n            \'<p>Control</p><h2>is</h2><h1><span style="color: #e01f19">updated</span></h1>\',\n        );\n    }\n}\n',HTML:'<p>\n    <button tuiButton type="button" (click)="onClick()">Set value</button>\n</p>\n\n<tui-editor\n    new\n    exampleText="exampleText"\n    class="editor"\n    [formControl]="control"\n>\n    Placeholder\n</tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]="control.value"></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{control.value}}</p>\n',LESS:".editor {\n    max-height: 18.75rem;\n}\n"},this.example2={HTML:'<tui-editor new class="editor" [formControl]="control" [tools]="builtInTools">\n    Smiles are custom tool. Try it.\n\n    <ng-container ngProjectAs="tools">\n        <smiles-tool tuiToolbarTool></smiles-tool>\n\n        <span class="hint">\n            <tui-svg src="tuiIconArrowLeft"></tui-svg>\n            click it\n        </span>\n    </ng-container>\n</tui-editor>\n',TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\n\nexport function importStarterKit(): Promise<unknown> {\n    return import('@tiptap/starter-kit').then(m => m.default);\n}\n\n@Component({\n    selector: 'tui-editor-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [importStarterKit()],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample2 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n    readonly control = new FormControl('', Validators.required);\n}\n",LESS:".hint {\n    color: var(--tui-base-05);\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n","smiles-tool/smiles-tool.component.ts":"import {Component, Inject} from '@angular/core';\nimport {TuiTiptapEditorService} from '@taiga-ui/addon-editor';\n\n@Component({\n    selector: 'smiles-tool',\n    templateUrl: './smiles-tool.template.html',\n    styleUrls: ['./smiles-tool.styles.less'],\n})\nexport class ExampleSmilesToolComponent {\n    /* More smiles: https://www.w3schools.com/charsets/ref_emoji.asp */\n    readonly smiles = [\n        '&#129409;',\n        '&#9200;',\n        '&#9749;',\n        '&#9989;',\n        '&#10060;',\n        '&#10071;',\n        '&#10133;',\n        '&#128064;',\n        '&#128070;',\n        '&#128076;',\n        '&#128522;',\n        '&#128640;',\n    ];\n\n    constructor(\n        @Inject(TuiTiptapEditorService)\n        private readonly editor: TuiTiptapEditorService,\n    ) {}\n\n    insertSmile(smile: string): void {\n        this.editor\n            .getOriginTiptapEditor()\n            .chain()\n            .focus()\n            .insertContent(`${smile} `)\n            .run();\n    }\n}\n","smiles-tool/smiles-tool.template.html":'<tui-hosted-dropdown\n    #dropdown\n    tuiDropdownAlign="left"\n    class="t-wrapper"\n    [content]="smileDropdown"\n>\n    <button\n        tuiIconButton\n        type="button"\n        size="s"\n        icon="tuiIconStarLarge"\n        appearance="icon"\n        automation-id="smiles-tool__button"\n        class="tool-button"\n        [pseudoPressed]="dropdown.open"\n        [focusable]="dropdown.open"\n    ></button>\n    <ng-template #smileDropdown let-activeZone>\n        <div class="smiles" [tuiActiveZoneParent]="activeZone">\n            <button\n                *ngFor="let smile of smiles"\n                class="smile"\n                [innerHTML]="smile"\n                (click)="insertSmile(smile)"\n            ></button>\n        </div>\n    </ng-template>\n</tui-hosted-dropdown>\n',"smiles-tool/smiles-tool.styles.less":"@import 'taiga-ui-local';\n\n.tool-button {\n    .transition(background);\n\n    &:hover {\n        background: var(--tui-secondary-hover);\n    }\n}\n\n.smiles {\n    max-width: 18rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.smile {\n    .clearbtn();\n    .transition(background);\n    flex: 1 0 21%;\n    cursor: pointer;\n    border-radius: var(--tui-radius-s);\n    font: var(--tui-font-heading-4);\n    padding: 1rem;\n\n    &:hover {\n        background: var(--tui-secondary-hover);\n    }\n}\n","smiles-tool/smiles-tool.module.ts":"import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {TuiActiveZoneModule} from '@taiga-ui/cdk';\nimport {\n    TuiButtonModule,\n    TuiDropdownControllerModule,\n    TuiHostedDropdownModule,\n} from '@taiga-ui/core';\n\nimport {ExampleSmilesToolComponent} from './smiles-tool.component';\n\n@NgModule({\n    imports: [\n        CommonModule,\n        TuiButtonModule,\n        TuiHostedDropdownModule,\n        TuiActiveZoneModule,\n        TuiDropdownControllerModule,\n    ],\n    declarations: [ExampleSmilesToolComponent],\n    exports: [ExampleSmilesToolComponent],\n})\nexport class ExampleSmilesToolModule {}\n"},this.example3={TypeScript:"import {HttpClient} from '@angular/common/http';\nimport {Component, Inject, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n    TUI_IMAGE_LOADER,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService, TuiHandler} from '@taiga-ui/cdk';\nimport {Observable} from 'rxjs';\nimport {switchMap, takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-editor-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@tiptap/starter-kit').then(m => m.default),\n                import('@taiga-ui/addon-editor/extensions/image-editor').then(m =>\n                    m.createImageEditorExtension(injector),\n                ),\n            ],\n        },\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample3 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    base64Image$ = this.http\n        .get('assets/images/lumberjack.png', {responseType: 'blob'})\n        .pipe(switchMap(file => this.imageLoader(file)));\n\n    control = new FormControl('');\n\n    constructor(\n        @Inject(TUI_IMAGE_LOADER)\n        private readonly imageLoader: TuiHandler<Blob, Observable<string>>,\n        @Inject(HttpClient) private readonly http: HttpClient,\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n    ) {\n        this.base64Image$.pipe(takeUntil(destroy$)).subscribe(src => {\n            this.control.patchValue(`\n                <img data-type=\"image-editor\" src=\"${src}\" width=\"300\">\n                <p>Try to drag right border of image!</p>\n\n                <p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p>\n            `);\n        });\n    }\n}\n",HTML:'<tui-editor\n    new\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n></tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]="control.value"></tui-editor-socket>\n',LESS:".editor {\n    min-height: 30rem;\n}\n"},this.control=new i.FormControl,this.toolsVariants=[l.o,[l.i.Bold,l.i.Italic,l.i.Strikethrough,l.i.HR]],this.tools=this.toolsVariants[0]}}return e.\u0275fac=function(t){return se(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-editor-new"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:p.a,useExisting:Object(d.forwardRef)(()=>e)},{provide:l.a,useValue:l.n}]),d["\u0275\u0275InheritDefinitionFeature"]],decls:5,vars:0,consts:[["header","Editor[new]","package","ADDON-EDITOR","type","components"],["pageTab",""],["pageTab","DI tokens"],["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["status","warning",1,"tui-space_top-4"],["id","basic",3,"content",6,"heading"],["id","custom-tool",3,"content",6,"heading"],[1,"tui-list","tui-space_bottom-6"],[1,"tui-list__item"],["tuiLink","","target","_blank","href","https://tiptap.dev/api/introduction"],["id","resizable-image",3,"content",6,"heading"],["new","",3,"formControl","focusable","exampleText","readOnly","tools","pseudoInvalid","pseudoFocused","pseudoHovered"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tools","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiEditorTool>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],[3,"code"],[1,"tui-space_bottom-5"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,W,25,3,"ng-template",1),d["\u0275\u0275template"](2,ie,7,12,"ng-template",1),d["\u0275\u0275template"](3,re,14,3,"ng-template",1),d["\u0275\u0275template"](4,ae,27,1,"ng-template",2),d["\u0275\u0275elementEnd"]())},directives:[m.a,h.a,f.a,r.e,T.a,g.a,y,O,P,j.a,E.a,i.NgControlStatus,i.FormControlDirective,G.a,N.a,H.a],encapsulation:2,changeDetection:0}),e})();const se=d["\u0275\u0275getInheritedFactory"](le);let ce=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,s.W,s.sb,k.T,s.hb]]}),e})(),de=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,i.ReactiveFormsModule,l.g,l.h,s.Cb,s.W,c.a,a.i,s.ub,s.Sb,ce,r.f.forChild(Object(a.p)(le))]]}),e})()},pVuH:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));class o{constructor(){this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}}}]);