(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90918],{90918:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-table-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiTableExample6 {\n    protected data: Array<Record<string, number | string>> = [{id: 1, name: 'name'}];\n\n    protected get columns(): string[] {\n        return Object.keys(this.data[0]);\n    }\n\n    protected addColumn(): void {\n        this.data = this.data.map(item => ({\n            ...item,\n            [`extra-${this.columns.length + 1}`]: `extra column ${\n                this.columns.length + 1\n            }`,\n        }));\n    }\n\n    protected addRows(): void {\n        this.data = [...this.data, {...this.data[0], id: this.data.length + 1}];\n    }\n}\n"}}]);