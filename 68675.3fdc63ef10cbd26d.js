(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[68675],{68675:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nclass Account {\n    constructor(\n        protected readonly name: string,\n        protected readonly balance: number,\n    ) {}\n\n    protected toString(): string {\n        return `${this.name} (${this.balance})`;\n    }\n}\n\n@Component({\n    selector: 'tui-accordion-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAccordionExample2 {\n    protected readonly accounts = [\n        new Account('Rubles', 500),\n        new Account('Dollar', 237),\n        new Account('Euro', 100),\n    ];\n\n    protected svgIcons = {\n        rubles: import('./rubles.svg?raw'),\n    };\n\n    protected testForm = new FormGroup({\n        name: new FormControl(''),\n        accounts: new FormControl(this.accounts[0]),\n    });\n}\n"}}]);