(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38230],{38230:n=>{n.exports='<button\n    tuiButton\n    tuiDropdownHover\n    type="button"\n    [tuiDropdown]="dropdown"\n    [(tuiDropdownOpen)]="open"\n>\n    Dropdown hover\n    <ng-template #dropdown>\n        <div [style.padding]="\'0 1rem\'">\n            <tui-select\n                class="margin"\n                [formControl]="selected"\n            >\n                Nested select\n                <tui-data-list-wrapper\n                    *tuiDataList\n                    [items]="selectItems"\n                />\n            </tui-select>\n\n            <p>\n                <button\n                    size="s"\n                    tuiButton\n                    tuiDropdownHover\n                    tuiDropdownOpen\n                    type="button"\n                    [tuiDropdown]="content"\n                >\n                    Nested dropdown hover\n                </button>\n                <ng-template #content>\n                    <p class="tui-space_horizontal-2">Nested content!</p>\n                </ng-template>\n            </p>\n        </div>\n\n        <tui-data-list>\n            <button\n                *ngFor="let item of items"\n                tuiOption\n                type="button"\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</button>\n'}}]);