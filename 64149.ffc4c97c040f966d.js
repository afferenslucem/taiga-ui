(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[64149],{64149:n=>{n.exports='<div tuiCell>\n    <div tuiTitle>\n        Single action\n        <div tuiSubtitle>Description of the action</div>\n    </div>\n    <button\n        tuiButton\n        type="button"\n    >\n        Action\n    </button>\n</div>\n\n<div tuiCell>\n    <div tuiTitle>\n        Multiple actions\n        <div tuiSubtitle>With no content on the right</div>\n    </div>\n\n    <button\n        appearance="icon"\n        iconStart="@tui.ellipsis"\n        tuiDropdownAlign="right"\n        tuiDropdownOpen\n        tuiIconButton\n        type="button"\n        [tuiDropdown]="dropdown"\n    >\n        Action\n    </button>\n    <ng-template\n        #dropdown\n        let-close\n    >\n        <tui-data-list-wrapper\n            [items]="items"\n            (itemClick)="close()"\n        />\n    </ng-template>\n</div>\n\n<button\n    tuiCell\n    type="button"\n>\n    <div tuiTitle>\n        Multiple actions\n        <div tuiSubtitle>When there\'s content on the right</div>\n    </div>\n    <div\n        tuiCellActions\n        tuiGroup\n        tuiTheme="dark"\n        [collapsed]="true"\n    >\n        <button\n            *ngFor="let item of items"\n            appearance="opposite"\n            tuiIconButton\n            type="button"\n            [iconStart]="item.icon"\n        >\n            {{ item }}\n        </button>\n    </div>\n    <div tuiTitle>\n        Hover over\n        <div tuiSubtitle>Put it before the right side</div>\n    </div>\n</button>\n'}}]);