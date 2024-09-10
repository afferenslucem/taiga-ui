(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[23258],{23258:n=>{n.exports="@import '@taiga-ui/core/styles/taiga-ui-local';\n\n.wrapper {\n    display: grid;\n    inline-size: 100%;\n    gap: 1px;\n    grid-template-columns: repeat(3, 1fr);\n    margin: auto;\n    font: var(--tui-font-text-xs);\n\n    @media @tui-desktop-min {\n        font: var(--tui-font-text-s);\n        inline-size: 31.25rem;\n    }\n}\n\n.item {\n    display: flex;\n    block-size: 6.25rem;\n    background: var(--tui-background-neutral-1);\n    color: var(--tui-text-primary);\n    justify-content: center;\n    align-items: center;\n}\n\n@breakpoints: tui-mobile, tui-mobile-min, tui-mobile-interval, tui-tablet, tui-tablet-min, tui-tablet-interval,\n    tui-desktop, tui-desktop-min, tui-desktop-interval, tui-desktop-lg-min;\n\neach(@breakpoints, {\n    .@{value} {\n        @media @@value {\n            background: var(--tui-background-accent-1);\n            color: var(--tui-text-primary-on-accent-1);\n        }\n    }\n});\n\n.tui-desktop-lg-min {\n    grid-column: span 3;\n}\n"}}]);