(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{AXTI:function(n,t,e){"use strict";e.r(t),e.d(t,"Underline",(function(){return u})),e.d(t,"default",(function(){return u}));var r=e("jgtz"),u=r.Mark.create({name:"underline",addOptions:function(){return{HTMLAttributes:{}}},parseHTML:function(){return[{tag:"u"},{style:"text-decoration",consuming:!1,getAttrs:function(n){return!!n.includes("underline")&&{}}}]},renderHTML:function(n){var t=n.HTMLAttributes;return["u",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:function(){var n=this;return{setUnderline:function(){return function(t){return t.commands.setMark(n.name)}},toggleUnderline:function(){return function(t){return t.commands.toggleMark(n.name)}},unsetUnderline:function(){return function(t){return t.commands.unsetMark(n.name)}}}},addKeyboardShortcuts:function(){var n=this;return{"Mod-u":function(){return n.editor.commands.toggleUnderline()}}}})}}]);