(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[54916],{54916:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {takeUntilDestroyed} from '@angular/core/rxjs-interop';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetDialogService} from '@taiga-ui/addon-mobile';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport {Subject, switchMap} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiButtonDirective],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly stream$ = new Subject<void>();\n\n    constructor() {\n        const service = inject(TuiSheetDialogService);\n\n        this.stream$\n            .pipe(\n                switchMap(() => service.open('', {label: 'Simple sheet'})),\n                takeUntilDestroyed(),\n            )\n            .subscribe();\n    }\n}\n"}}]);