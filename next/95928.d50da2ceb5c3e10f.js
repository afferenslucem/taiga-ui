(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95928],{95928:n=>{n.exports='<button\n    appearance="flat"\n    iconStart="@tui.ellipsis-vertical"\n    tuiIconButton\n    type="button"\n    [tuiAppearanceState]="open ? \'hover\' : null"\n    [tuiDropdown]="content"\n    [(tuiDropdownOpen)]="open"\n></button>\n<ng-template #content>\n    <tui-data-list\n        tuiDataListDropdownManager\n        [size]="size"\n    >\n        <button\n            *tuiLet="\'French Fries\' as item"\n            tuiOption\n            (click)="selectOption(item)"\n        >\n            {{ item }}\n        </button>\n        <button\n            iconEnd="@tui.chevron-right"\n            tuiDropdownAlign="right"\n            tuiDropdownSided\n            tuiOption\n            [tuiDropdown]="burgersTmp"\n            [tuiDropdownManual]="false"\n        >\n            Burgers\n        </button>\n        <button\n            iconEnd="@tui.chevron-right"\n            tuiDropdownAlign="right"\n            tuiDropdownSided\n            tuiOption\n            [tuiDropdown]="drinksTmp"\n            [tuiDropdownManual]="false"\n        >\n            Drinks\n        </button>\n        <button\n            *tuiLet="\'Ice Cream\' as item"\n            tuiOption\n            (click)="selectOption(item)"\n        >\n            {{ item }}\n        </button>\n    </tui-data-list>\n    <ng-template #burgersTmp>\n        <tui-data-list tuiDataListDropdownManager>\n            <button\n                *ngFor="let burger of burgers"\n                tuiOption\n                (click)="selectOption(burger)"\n            >\n                {{ burger }}\n            </button>\n            <button\n                iconEnd="@tui.chevron-right"\n                tuiDropdownAlign="right"\n                tuiDropdownSided\n                tuiOption\n                [tuiDropdown]="drinksTmp"\n                [tuiDropdownManual]="false"\n            >\n                Nested menu\n            </button>\n        </tui-data-list>\n    </ng-template>\n    <ng-template #drinksTmp>\n        <tui-data-list [size]="size">\n            <button\n                *ngFor="let drink of drinks"\n                tuiOption\n                (click)="selectOption(drink)"\n            >\n                {{ drink }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</ng-template>\n'}}]);