(window.webpackJsonp=window.webpackJsonp||[]).push([[814],{LlCA:function(o,n,i){"use strict";i.r(n),n.default="import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiNotificationsService} from '@taiga-ui/core';\nimport {Injector} from '@angular/core';\nimport {CustomNotificationComponent} from 'customNotification.component';\n...\n\n    constructor(@Inject(Injector) private injector: Injector,\n                @Inject(TuiNotificationsService) private readonly notificationsService: TuiNotificationsService\n...\n    this.notificationsService.show(\n        new PolymorpheusComponent(CustomNotificationComponent, this.injector),\n        { label: 'Heading' },\n    )\n        .subscribe();\n...\n"}}]);