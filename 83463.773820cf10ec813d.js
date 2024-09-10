(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[83463],{83463:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon} from '@taiga-ui/core';\nimport type {TuiCountryIsoCode} from '@taiga-ui/i18n';\nimport {\n    TuiInputPhoneInternational,\n    tuiInputPhoneInternationalOptionsProvider,\n    TuiTooltip,\n} from '@taiga-ui/kit';\nimport {defer} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [FormsModule, TuiIcon, TuiInputPhoneInternational, TuiTooltip],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputPhoneInternationalOptionsProvider({\n            metadata: defer(async () =>\n                import('libphonenumber-js/max/metadata').then((m) => m.default),\n            ),\n        }),\n    ],\n})\nexport default class Example {\n    protected readonly countries: readonly TuiCountryIsoCode[] = [\n        'TR',\n        'IR',\n        'IQ',\n        'SA',\n        'YE',\n    ];\n\n    protected countryIsoCode: TuiCountryIsoCode = 'TR';\n    protected value = '';\n}\n"}}]);