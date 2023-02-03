"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[47451],{47451:n=>{n.exports="import {Component, Inject, Injector} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {DomSanitizer, SafeHtml} from '@angular/platform-browser';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\nimport {TUI_IS_CYPRESS, tuiPure} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-editor-embed-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@taiga-ui/addon-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@taiga-ui/addon-editor/extensions/iframe-editor').then(\n                    ({createIframeEditorExtension}) =>\n                        createIframeEditorExtension(injector),\n                ),\n            ],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorEmbedExample2 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n\n    readonly control = new FormControl(\n        `\n        <p>Here is an online IDE:</p>\n        <iframe\n            src=\"https://stackblitz.com/edit/angular?embed=1${\n                this.isCypress ? '&view=editor' : ''\n            }\"\n            frameborder=\"0\"\n            width=\"100%\"\n            allowfullscreen=\"true\"\n            data-type=\"iframe-editor\"\n            height=\"500\"\n        >\n        </iframe>\n        <p>Here is a media player:</p>\n        <iframe\n            src=\"https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/\"\n            height=\"42\"\n            width=\"100%\"\n            data-type=\"iframe-editor\">\n        </iframe>\n        <p></p>\n    `,\n        Validators.required,\n    );\n\n    constructor(\n        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,\n        @Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean,\n    ) {}\n\n    @tuiPure\n    safe(content: string): SafeHtml {\n        return this.sanitizer.bypassSecurityTrustHtml(content);\n    }\n}\n"}}]);