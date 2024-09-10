(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35603],{35603:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiItem, TuiRepeatTimes} from '@taiga-ui/cdk';\nimport {TuiButton, TuiDataList, TuiDropdown, TuiLink} from '@taiga-ui/core';\nimport {TuiBreadcrumbs, tuiBreadcrumbsOptionsProvider} from '@taiga-ui/kit';\nimport {TuiAsideItemDirective} from '@taiga-ui/layout';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [\n        FormsModule,\n        TuiAsideItemDirective,\n        TuiBreadcrumbs,\n        TuiButton,\n        TuiDataList,\n        TuiDropdown,\n        TuiInputNumberModule,\n        TuiItem,\n        TuiLink,\n        TuiRepeatTimes,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiBreadcrumbsOptionsProvider({\n            icon: '@tui.arrow-right',\n            size: 'l',\n        }),\n    ],\n})\nexport default class Example {\n    protected readonly items = [\n        {\n            caption: 'Open Source',\n            link: 'https://github.com',\n        },\n        {\n            caption: 'Angular',\n            link: 'https://github.com/topics/angular',\n        },\n        {\n            caption: 'Taiga UI',\n            link: 'https://github.com/taiga-family/taiga-ui',\n        },\n        {\n            caption: 'Components',\n            link: 'https://taiga-ui.dev',\n        },\n        {\n            caption: 'Breadcrumbs',\n            link: 'https://taiga-ui.dev/navigation/breadcrumbs',\n        },\n    ];\n\n    protected max = 4;\n}\n"}}]);