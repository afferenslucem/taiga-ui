(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[30937],{30937:n=>{n.exports="import {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon, TuiTextfield} from '@taiga-ui/core';\nimport {\n    TuiChevron,\n    TuiDataListWrapper,\n    TuiFilterByInputPipe,\n    TuiTooltip,\n} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [\n        FormsModule,\n        TuiChevron,\n        TuiDataListWrapper,\n        TuiFilterByInputPipe,\n        TuiIcon,\n        TuiTextfield,\n        TuiTooltip,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value = '';\n\n    protected readonly items = inject<readonly string[]>('Pythons' as any);\n}\n"}}]);