(window.webpackJsonp=window.webpackJsonp||[]).push([[791],{xeWg:function(n,t,e){"use strict";e.r(t),t.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiNotificationContentContext} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-notifications-service-example',\n    templateUrl: './alert-example.template.html',\n    changeDetection,\n})\nexport class AlertExampleComponent {\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        private readonly context: TuiNotificationContentContext<boolean>,\n    ) {}\n\n    ok() {\n        this.context.emitAndCloseHook(true);\n    }\n\n    cancel() {\n        this.context.emitAndCloseHook(false);\n    }\n}\n"}}]);