(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{R6rn:function(t,r,e){"use strict";e.r(r),e.d(r,"Superscript",(function(){return n})),e.d(r,"default",(function(){return n}));var s=e("jgtz");const n=s.Mark.create({name:"superscript",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"sup"},{style:"vertical-align",getAttrs(t){if("super"!==t)return!1}}],renderHTML({HTMLAttributes:t}){return["sup",Object(s.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setSuperscript:()=>({commands:t})=>t.setMark(this.name),toggleSuperscript:()=>({commands:t})=>t.toggleMark(this.name),unsetSuperscript:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-.":()=>this.editor.commands.toggleSuperscript()}}})}}]);