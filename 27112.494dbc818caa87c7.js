(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[27112],{27112:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-data-list-wrapper-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDataListWrapperExample2 {\n    protected readonly control = new FormControl<{name: string; surname: string} | null>(\n        null,\n    );\n\n    protected readonly items = [\n        {name: 'John', surname: 'Cleese'},\n        {name: 'Eric', surname: 'Idle'},\n        {name: 'Graham', surname: 'Chapman'},\n        {name: 'Michael', surname: 'Palin'},\n        {name: 'Terry', surname: 'Gilliam'},\n        {name: 'Terry', surname: 'Jones'},\n    ];\n\n    protected readonly stringify = (item: {name: string; surname: string}): string =>\n        `${item.name} ${item.surname}`;\n}\n"}}]);