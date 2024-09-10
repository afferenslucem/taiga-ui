(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[56217],{56217:n=>{n.exports="import {AsyncPipe, JsonPipe} from '@angular/common';\nimport {Component, inject, signal} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    tuiCreateLuhnValidator,\n    TuiInputCard,\n    tuiInputCardOptionsProvider,\n    TuiInputCVC,\n    TuiInputExpire,\n} from '@taiga-ui/addon-commerce';\nimport {\n    TuiAlertService,\n    TuiError,\n    TuiTextfield,\n    tuiTextfieldOptionsProvider,\n} from '@taiga-ui/core';\nimport {TuiFieldErrorPipe} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [\n        AsyncPipe,\n        JsonPipe,\n        ReactiveFormsModule,\n        TuiError,\n        TuiFieldErrorPipe,\n        TuiInputCard,\n        TuiInputCVC,\n        TuiInputExpire,\n        TuiTextfield,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputCardOptionsProvider({autocomplete: true}),\n        tuiTextfieldOptionsProvider({cleaner: signal(true)}),\n    ],\n})\nexport default class Example {\n    private readonly alerts = inject(TuiAlertService);\n\n    protected readonly form = new FormGroup({\n        card: new FormControl('', tuiCreateLuhnValidator('Card number is invalid')),\n        expire: new FormControl(''),\n        cvc: new FormControl(''),\n    });\n\n    protected get card(): string | null {\n        const value: string | null | undefined = this.form.get('card')?.value;\n\n        if ((value?.length ?? 0) < 7) {\n            return null;\n        }\n\n        switch (value?.charAt(0)) {\n            case '0':\n            case '1':\n            case '2':\n                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';\n            case '3':\n            case '4':\n            case '5':\n                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';\n            case '6':\n            case '7':\n                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';\n            case '8':\n            case '9':\n            default:\n                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';\n        }\n    }\n\n    protected onBinChange(bin: string | null): void {\n        this.alerts.open(String(bin), {label: '(binChange)'}).subscribe();\n    }\n}\n"}}]);