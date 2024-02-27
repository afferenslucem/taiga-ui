(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88642],{88642:e=>{e.exports="import {Component, inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPreviewDialogService} from '@taiga-ui/addon-preview';\nimport {tuiClamp, TuiSwipe} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiDialogContext} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-preview-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiPreviewExample1 {\n    private readonly previewService = inject(TuiPreviewDialogService);\n    private readonly alerts = inject(TuiAlertService);\n\n    @ViewChild('preview')\n    protected readonly preview?: TemplateRef<TuiDialogContext>;\n\n    @ViewChild('contentSample')\n    protected readonly contentSample?: TemplateRef<Record<string, unknown>>;\n\n    protected index = 0;\n    protected length = 2;\n\n    protected get title(): string {\n        return this.index === 0 ? 'Transaction cert.jpg' : 'My face.jpg';\n    }\n\n    protected get previewContent(): PolymorpheusContent {\n        return this.index === 0 && this.contentSample\n            ? this.contentSample\n            : 'https://avatars.githubusercontent.com/u/10106368';\n    }\n\n    protected show(): void {\n        this.previewService.open(this.preview || '').subscribe({\n            complete: () => console.info('complete'),\n        });\n    }\n\n    protected download(): void {\n        this.alerts.open('Downloading...').subscribe();\n    }\n\n    protected delete(): void {\n        this.alerts.open('Deleting...').subscribe();\n    }\n\n    protected onSwipe(swipe: TuiSwipe): void {\n        if (swipe.direction === 'left') {\n            this.index = tuiClamp(this.index + 1, 0, this.length - 1);\n        }\n\n        if (swipe.direction === 'right') {\n            this.index = tuiClamp(this.index - 1, 0, this.length - 1);\n        }\n    }\n}\n"}}]);