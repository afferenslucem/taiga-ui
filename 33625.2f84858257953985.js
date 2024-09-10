(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33625],{33625:n=>{n.exports='<button\n    tuiSurface\n    type="button"\n    class="card"\n    [style.background-image]="\'url(/assets/images/tickets.svg)\'"\n    [style.color]="\'#d45d8c\'"\n>\n    <h3 class="heading">Tickets</h3>\n    <div class="content">Concerts, theater, sports and movies</div>\n    <tui-badge\n        appearance="primary"\n        size="s"\n        class="badge"\n    >\n        20% off\n    </tui-badge>\n</button>\n<button\n    tuiSurface\n    type="button"\n    class="card"\n    [style.background-image]="\'url(/assets/images/gas.svg)\'"\n    [style.color]="\'#7caeff\'"\n>\n    <h3 class="heading">Gas</h3>\n    <tui-badge\n        appearance="primary"\n        size="s"\n        class="badge"\n    >\n        +2000%\n    </tui-badge>\n</button>\n\n<div\n    tuiSurface\n    class="restaurant"\n>\n    <header\n        tuiTheme="dark"\n        class="header"\n    >\n        <label tuiTitle>\n            <span tuiSubtitle>RESTAURANT</span>\n            Eat all you can\n        </label>\n        <button\n            appearance="icon"\n            iconStart="@tui.ellipsis"\n            size="xs"\n            tuiIconButton\n            type="button"\n        >\n            More\n        </button>\n    </header>\n    <footer class="footer">\n        <button\n            appearance="glass"\n            size="m"\n            tuiButton\n            type="button"\n            [style.border-radius.rem]="5"\n        >\n            Book a table\n        </button>\n        <button\n            appearance="glass"\n            iconStart="@tui.heart"\n            size="m"\n            tuiIconButton\n            type="button"\n            [style.border-radius.rem]="5"\n        >\n            Favorite\n        </button>\n    </footer>\n</div>\n\n<div\n    tuiSurface\n    tuiTheme="dark"\n    class="blur"\n>\n    <tui-avatar src="/assets/images/avatar.jpg" />\n    <label tuiLabel="Taiga UI">Alex Inkin</label>\n    <button\n        appearance="glass"\n        iconStart="@tui.mail"\n        size="m"\n        tuiIconButton\n        type="button"\n        class="button"\n    >\n        Message\n    </button>\n</div>\n\n<div\n    tuiCardLarge\n    tuiSurface="elevated"\n    class="reviews"\n>\n    <h3 class="heading">\n        Taiga UI reviews\n        <button\n            tuiLink\n            type="button"\n            class="link"\n        >\n            Hide\n        </button>\n    </h3>\n    <tui-scrollbar\n        class="scrollbar"\n        [hidden]="true"\n    >\n        <div class="wrapper">\n            <div\n                *ngFor="let review of reviews"\n                tuiSurface="flat"\n                class="review"\n            >\n                {{ review.body }}\n                <footer class="footer">\n                    <tui-avatar\n                        size="m"\n                        src="/assets/images/avatar.jpg"\n                    />\n                    <label tuiTitle>\n                        {{ review.name }}\n                        <span tuiSubtitle>{{ review.time }}</span>\n                    </label>\n                </footer>\n            </div>\n        </div>\n    </tui-scrollbar>\n    <button\n        appearance="secondary"\n        size="m"\n        tuiButton\n        type="button"\n    >\n        See all\n    </button>\n</div>\n\n<div\n    tuiSurface\n    tuiTheme="dark"\n    class="mask"\n>\n    <h3 class="heading">\n        My bank account\n        <button\n            appearance="secondary"\n            iconStart="@tui.pencil"\n            size="s"\n            tuiIconButton\n            type="button"\n            class="button"\n        >\n            Edit name\n        </button>\n    </h3>\n    <span class="sum">{{ 23742 | tuiAmount: \'USD\' : \'left\' | async }}</span>\n    <footer class="footer">\n        <tui-thumbnail-card\n            paymentSystem="mastercard"\n            [style.background]="\'#337\'"\n        >\n            1234\n        </tui-thumbnail-card>\n        <tui-thumbnail-card\n            paymentSystem="visa"\n            [style.background]="\'#e33\'"\n        >\n            5678\n        </tui-thumbnail-card>\n        <button\n            appearance="secondary"\n            iconStart="@tui.plus"\n            size="s"\n            tuiIconButton\n            type="button"\n            class="add"\n        >\n            Add card\n        </button>\n    </footer>\n</div>\n'}}]);