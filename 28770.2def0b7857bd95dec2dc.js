"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[28770],{28770:n=>{n.exports="import {Component, Inject} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {timer} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n@Component({\n    template: `\n        <iframe\n            *ngIf=\"src$ | async as src; else loading\"\n            [src]=\"src\"\n        ></iframe>\n        <ng-template #loading><tui-loader size=\"xl\"></tui-loader></ng-template>\n    `,\n    styles: [\n        `\n            :host {\n                display: flex;\n                height: 100%;\n            }\n            :host > * {\n                flex: 1;\n            }\n        `,\n    ],\n})\nexport class PdfContent {\n    private readonly pdf = 'assets/media/taiga.pdf';\n\n    /**\n     * @description:\n     * Embedded PDFs in mobile doesn't work,\n     * so you can use third-party services\n     * or your own service to render PDF in mobile iframe\n     */\n    readonly src$ = timer(3000).pipe(\n        map(() =>\n            this.sanitizer.bypassSecurityTrustResourceUrl(\n                this.isMobile\n                    ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`\n                    : this.pdf,\n            ),\n        ),\n    );\n\n    constructor(\n        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,\n        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,\n    ) {}\n}\n"}}]);