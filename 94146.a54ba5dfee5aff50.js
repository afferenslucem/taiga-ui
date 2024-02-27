(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[94146],{94146:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiIsPresent} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-miscellaneous-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiMiscellaneousExample5 {\n    protected readonly items = ['String', 'null', 'undefined'];\n\n    protected parametersForm = new FormGroup({\n        value: new FormControl<string | null>(null),\n    });\n\n    protected get isPresent(): boolean {\n        const {value} = this.parametersForm.value;\n        const objectedValue = this.objectifyValue(value ?? '');\n\n        return tuiIsPresent(objectedValue);\n    }\n\n    private objectifyValue(value: string): string | null | undefined {\n        if (value === 'null') {\n            return null;\n        }\n\n        if (value === 'undefined') {\n            return undefined;\n        }\n\n        return value;\n    }\n}\n"}}]);