(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58526],{58526:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiMapper} from '@taiga-ui/cdk';\nimport {TuiMapperPipe} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    imports: [TuiMapperPipe],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected numbers = [1, 2, 3, 4, 5] as const;\n\n    protected readonly mapper: TuiMapper<[readonly number[], number], number[]> = (\n        numbers,\n        multiplier,\n    ) => numbers.map(number => number * multiplier);\n}\n"}}]);