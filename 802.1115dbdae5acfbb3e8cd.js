(window.webpackJsonp=window.webpackJsonp||[]).push([[802],{dIh5:function(t,n,e){"use strict";e.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiContextWithImplicit, tuiPure} from '@taiga-ui/cdk';\nimport {TuiNotification, TuiNotificationContentContext} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-notifications-service-example-with-custom-label',\n    templateUrl: './alert-example-with-custom-label.template.html',\n    changeDetection,\n})\nexport class AlertExampleWithCustomLabelComponent {\n    @tuiPure\n    get label(): PolymorpheusContent<TuiContextWithImplicit<TuiNotification>> {\n        return this.context.label;\n    }\n\n    @tuiPure\n    get status(): TuiNotification {\n        return this.context.$implicit;\n    }\n\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        private readonly context: TuiNotificationContentContext<boolean>,\n    ) {}\n}\n"}}]);