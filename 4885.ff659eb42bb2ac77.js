(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4885],{4885:n=>{n.exports='<strong>Buttons</strong>\n<tui-segmented>\n    <button type="button">Buttons</button>\n    <button type="button">Can be</button>\n    <button type="button">Used</button>\n</tui-segmented>\n<hr />\n<strong>Links</strong>\n<tui-segmented>\n    <a\n        routerLinkActive\n        [routerLink]="routes.Link"\n    >\n        Use routerLink\n    </a>\n    <a\n        routerLinkActive\n        [routerLink]="routes.Segmented"\n        [routerLinkActiveOptions]="options"\n    >\n        And routerLinkActive\n    </a>\n    <a\n        fragment="content"\n        routerLinkActive\n        [routerLink]="routes.Segmented"\n        [routerLinkActiveOptions]="options"\n    >\n        To work with links\n    </a>\n</tui-segmented>\n<hr />\n<strong>Icons</strong>\n<tui-segmented>\n    <button type="button">\n        <tui-icon icon="@tui.sun" />\n    </button>\n    <button type="button">\n        <tui-icon icon="@tui.moon" />\n    </button>\n</tui-segmented>\n<hr />\n<strong>Control</strong>\n<tui-segmented>\n    <label>\n        <input\n            name="radio"\n            type="radio"\n            value="a"\n            [(ngModel)]="selected"\n        />\n        Use radio inside\n    </label>\n    <label>\n        <input\n            name="radio"\n            type="radio"\n            value="b"\n            [(ngModel)]="selected"\n        />\n        It would be hidden\n    </label>\n    <label>\n        <input\n            name="radio"\n            type="radio"\n            value="c"\n            [(ngModel)]="selected"\n        />\n        Automatically\n    </label>\n</tui-segmented>\n<button\n    appearance="floating"\n    size="s"\n    tuiButton\n    type="button"\n    (click)="selected = \'b\'"\n>\n    Select second option\n</button>\n'}}]);