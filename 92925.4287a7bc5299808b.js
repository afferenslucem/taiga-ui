(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[92925],{92925:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {map, startWith, Subject, switchMap, timer} from 'rxjs';\n\n@Component({\n    selector: 'tui-tab-bar-example-4',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiTabBarExample4 {\n    protected readonly load$ = new Subject<void>();\n\n    protected readonly items$ = this.load$.pipe(\n        startWith(null),\n        switchMap(() =>\n            timer(3000).pipe(\n                map(() => [\n                    {\n                        text: 'Favorites',\n                        icon: 'tuiIconHeartLarge',\n                    },\n                    {\n                        text: 'Calls',\n                        icon: 'tuiIconPhoneLarge',\n                    },\n                    {\n                        text: 'Profile',\n                        icon: 'tuiIconUserLarge',\n                    },\n                    {\n                        text: 'Settings and configuration',\n                        icon: 'tuiIconSettingsLarge',\n                    },\n                ]),\n                startWith([]),\n            ),\n        ),\n    );\n}\n"}}]);