(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[32842],{32842:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButtonDirective, TuiDialogService} from '@taiga-ui/core';\nimport {TuiDialogFormService, TuiInputModule} from '@taiga-ui/kit';\nimport type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent8\",\n    imports: [TuiInputModule, FormsModule, TuiButtonDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [TuiDialogFormService],\n})\nexport default class ExampleComponent {\n    private readonly dialogForm = inject(TuiDialogFormService);\n    private readonly dialogs = inject(TuiDialogService);\n\n    protected value = '';\n\n    protected onModelChange(value: string): void {\n        this.value = value;\n        this.dialogForm.markAsDirty();\n    }\n\n    protected onClick(content: PolymorpheusContent): void {\n        const closeable = this.dialogForm.withConfirm({\n            label: 'Are you sure?',\n            data: {\n                content: 'Your data will be <strong>lost</strong>',\n            },\n        });\n\n        this.dialogs.open(content, {closeable, dismissible: closeable}).subscribe({\n            complete: () => {\n                this.value = '';\n                this.dialogForm.markAsPristine();\n            },\n        });\n    }\n}\n"}}]);