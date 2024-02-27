(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59388],{59388:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContext} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-input-slider-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputSliderExample5 {\n    protected readonly max = 100;\n    protected readonly min = 0;\n\n    protected readonly smallControl = new FormControl(this.min);\n    protected readonly bigControl = new FormControl(this.max);\n\n    protected readonly customLabel = ({\n        $implicit,\n    }: TuiContext<number>): number | string => {\n        switch ($implicit) {\n            case this.max:\n                // eslint-disable-next-line @typescript-eslint/quotes\n                return \"Digits can't describe my love!\";\n            case this.min:\n                return 'Just a label for min value';\n            case (this.max - this.min) / 2:\n                return 'Middle';\n            default:\n                return $implicit;\n        }\n    };\n}\n"}}]);