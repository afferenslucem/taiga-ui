(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88926],{88926:n=>{n.exports='<header tuiNavigationHeader>\n    <span tuiNavigationLogo>\n        Custom color\n        <input\n            tuiToggle\n            type="checkbox"\n            [ngModel]="color"\n            (ngModelChange)="onColor($event)"\n        />\n    </span>\n    <button\n        iconRight="tuiIconChevronDown"\n        tuiButton\n        tuiDropdown="Set --tui-theme-color for :root and theme-color meta tag to the same color"\n        tuiDropdownOpen\n    >\n        How to?\n    </button>\n</header>\n<main tuiNavigationMain>\n    <a\n        appearance="icon"\n        iconLeft="tuiIconChevronLeft"\n        size="xs"\n        tuiButton\n    >\n        Back\n    </a>\n    <header tuiHeader>\n        <h1 tuiTitle>\n            <div tuiNavigationLogo>\n                <tui-icon icon="tuiIconGitlab"></tui-icon>\n                <span tuiFade>Research and Development Platform</span>\n                <tui-icon\n                    icon="tuiIconHeart"\n                    tuiBadge\n                ></tui-icon>\n            </div>\n            <div tuiSubtitle>\n                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the\n                visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used\n                as a placeholder before the final copy is available. It is also used to temporarily replace text, which\n                allows designers to consider the form of a webpage or publication, without the meaning of the text\n                influencing the design.\n            </div>\n            <div\n                tuiCaption\n                tuiFade\n            >\n                <span>\n                    <tui-icon icon="tuiIconUser"></tui-icon>\n                    Alex Inkin\n                </span>\n                <span>Edited 6 minutes ago</span>\n                <span>\n                    <tui-icon icon="tuiIconLock"></tui-icon>\n                    Private\n                </span>\n            </div>\n        </h1>\n        <aside tuiAccessories>\n            <button\n                appearance="secondary"\n                tuiButton\n            >\n                Secondary\n            </button>\n            <button tuiButton>Primary</button>\n            <button\n                appearance="secondary"\n                iconLeft="tuiIconMoreHorizontal"\n                tuiIconButton\n            >\n                More\n            </button>\n        </aside>\n    </header>\n    <nav tuiNavigationNav>\n        <tui-tabs>\n            <button tuiTab>Default view</button>\n            <button tuiTab>Details</button>\n            <button tuiTab>Followers</button>\n        </tui-tabs>\n        <hr />\n        <button tuiButton>Primary</button>\n        <button\n            appearance="secondary"\n            iconLeft="tuiIconMoreHorizontal"\n            tuiIconButton\n        >\n            More\n        </button>\n    </nav>\n    <div\n        *tuiRepeatTimes="let index of 10"\n        tuiCardLarge\n        tuiHeader\n        tuiSurface="elevated"\n    >\n        <h2 tuiTitle>\n            Some random content\n            <span tuiSubtitle>A subtitle</span>\n        </h2>\n    </div>\n</main>\n'}}]);