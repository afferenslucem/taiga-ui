(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95725],{95725:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-hosted-dropdown-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiHostedDropdownExample3 {\n    protected open = false;\n\n    protected readonly items = [\n        ['By interest', 'By genre', 'By release year', 'By subject'],\n        ['Ascending', 'Descending'],\n    ];\n\n    protected primary = 'By genre';\n\n    protected ascending = false;\n\n    protected onClick(item: string): void {\n        if (this.items[0].includes(item)) {\n            this.primary = item;\n\n            return;\n        }\n\n        this.ascending = item === this.items[1][0];\n    }\n\n    protected itemIsActive(item: string): boolean {\n        return (\n            item === this.primary ||\n            (this.ascending && item === this.items[1][0]) ||\n            (!this.ascending && item === this.items[1][1])\n        );\n    }\n}\n"}}]);