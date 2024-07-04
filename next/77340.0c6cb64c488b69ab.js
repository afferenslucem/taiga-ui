(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[77340],{77340:n=>{n.exports='<button\n    appearance="outline"\n    iconStart="@tui.ellipsis-vertical"\n    size="m"\n    tuiButton\n    tuiDropdownLimitWidth="fixed"\n    type="button"\n    class="example"\n    [tuiDropdown]="content"\n    [(tuiDropdownOpen)]="dropdownOpen"\n>\n    List of components\n</button>\n\n<ng-template #content>\n    <tui-data-list tuiDataListDropdownManager>\n        <button\n            iconEnd="@tui.chevron-right"\n            tuiDropdownAlign="right"\n            tuiDropdownDirection="top"\n            tuiDropdownSided\n            tuiOption\n            [tuiDropdown]="money"\n            [tuiDropdownManual]="true"\n        >\n            💰 Money:\n        </button>\n        <button\n            automation-id="tui-data-list-calendar-option"\n            iconEnd="@tui.chevron-right"\n            tuiDropdownAlign="right"\n            tuiDropdownSided\n            tuiOption\n            [tuiDropdown]="calendar"\n            [tuiDropdownManual]="false"\n        >\n            📅 Calendar: {{ dateValue }}\n        </button>\n        <button\n            automation-id="tui-data-list-email-option"\n            iconEnd="@tui.chevron-right"\n            tuiDropdownAlign="right"\n            tuiDropdownSided\n            tuiOption\n            [tuiDropdown]="input"\n            [tuiDropdownManual]="false"\n        >\n            📧 Email: {{ emailValue }}\n        </button>\n        <button\n            automation-id="tui-data-list-range-option"\n            iconEnd="@tui.chevron-right"\n            tuiDropdownAlign="right"\n            tuiDropdownDirection="top"\n            tuiDropdownSided\n            tuiOption\n            [tuiDropdown]="range"\n            [tuiDropdownManual]="false"\n        >\n            ⌛ Range: {{ rangeValue }}\n        </button>\n    </tui-data-list>\n\n    <ng-template #money>\n        <tui-input\n            automation-id="tui-data-money-input"\n            [(ngModel)]="moneyValue"\n        >\n            RUB\n            <input\n                name="moneyValue"\n                tuiTextfieldLegacy\n            />\n        </tui-input>\n\n        <tui-data-list tuiDataListDropdownManager>\n            <button\n                iconEnd="@tui.chevron-right"\n                tuiDropdownAlign="right"\n                tuiDropdownDirection="bottom"\n                tuiDropdownSided\n                tuiOption\n                [tuiDropdown]="currency"\n                [tuiDropdownManual]="true"\n            >\n                Exchange Rates:\n            </button>\n        </tui-data-list>\n    </ng-template>\n\n    <ng-template #calendar>\n        <tui-calendar\n            [value]="dateValue"\n            (dayClick)="onDayClick($event)"\n            (mousedown.silent.prevent)="(0)"\n        />\n    </ng-template>\n\n    <ng-template #input>\n        <tui-input\n            automation-id="tui-data-list-email-field"\n            [(ngModel)]="emailValue"\n        >\n            Email\n            <input\n                name="emailValue"\n                tuiTextfieldLegacy\n            />\n        </tui-input>\n    </ng-template>\n\n    <ng-template #currency>\n        <div class="example">\n            <div\n                tuiGroup\n                class="group"\n            >\n                <tui-input [(ngModel)]="dollar">1 Rub = (X) Dollars</tui-input>\n                <tui-input [(ngModel)]="euro">1 Rub = (Y) Euros</tui-input>\n            </div>\n\n            <ul class="exchange tui-list tui-list_large">\n                <li class="tui-list__item">\n                    <span>{{ moneyValue / dollar | tuiAmount: \'USD\' | async }}</span>\n                </li>\n                <li class="tui-list__item">\n                    <span>{{ moneyValue / euro | tuiAmount: \'EUR\' | async }}</span>\n                </li>\n            </ul>\n        </div>\n    </ng-template>\n\n    <ng-template #range>\n        <tui-input-date-range\n            automation-id="tui-data-list-range-field"\n            class="form"\n            [(ngModel)]="rangeValue"\n        >\n            Range\n        </tui-input-date-range>\n    </ng-template>\n</ng-template>\n\n<div class="example">\n    <p>Email: {{ emailValue }}</p>\n    <p>Chosen date: {{ dateValue }}</p>\n    <p>Range date: {{ rangeValue }}</p>\n    <p>Dol - {{ dollar }}, Eur - {{ euro }}</p>\n</div>\n'}}]);