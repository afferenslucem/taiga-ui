(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36620],{36620:t=>{t.exports="import {NgFor} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCarouselModule, TuiIslandModule, TuiPaginationModule} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    imports: [TuiCarouselModule, NgFor, TuiIslandModule, TuiPaginationModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected index = 0;\n\n    protected readonly itemsCount = 3;\n\n    protected readonly items = [\n        {title: 'First', content: 'First content'},\n        {title: 'Title #2', content: 'Much more content here so the height is bigger'},\n        {title: 'Title III', content: 'Small item again'},\n        {title: 'Title four', content: 'Relatively ling content here'},\n        {title: 'Fifth item', content: 'Tiny text'},\n        // eslint-disable-next-line @typescript-eslint/quotes\n        {title: '6', content: \"That one's short too\"},\n        {title: 'Lucky 7', content: 'This takes about two lines or so'},\n        {title: 'Eighth card', content: 'Almost the last one'},\n        {title: 'X', content: 'This is the longest item there is in this list'},\n    ];\n\n    protected get rounded(): number {\n        return Math.floor(this.index / this.itemsCount);\n    }\n\n    protected onIndex(index: number): void {\n        this.index = index * this.itemsCount;\n    }\n}\n"}}]);