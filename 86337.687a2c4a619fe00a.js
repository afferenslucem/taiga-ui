(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[86337],{86337:s=>{s.exports='<h6 class="description">Single color</h6>\n<p>\n    Use\n    <code tuiText="<progress />"></code>\n    \'s CSS-property\n    <code>color</code>\n    to set solid color of progress indicator.\n</p>\n\n<progress\n    max="100"\n    tuiProgressBar\n    class="progress"\n    [value]="fastValue$ | async"\n></progress>\n\n<h6 class="description">With fancy color gradient</h6>\n<p>\n    Set component\'s input property\n    <code>color</code>\n    to get more complex color combinations.\n</p>\n\n<progress\n    color="linear-gradient(to right, var(--tui-chart-categorical-02), var(--tui-chart-categorical-14), var(--tui-chart-categorical-12))"\n    max="100"\n    tuiProgressBar\n    class="progress"\n    [value]="fastValue$ | async"\n></progress>\n\n<h6 class="description">Multicolor segments</h6>\n<p>\n    Use\n    <code>tuiProgressColorSegments</code>\n    directive to to get multicolor segments.\n</p>\n\n<progress\n    max="100"\n    tuiProgressBar\n    class="progress"\n    [tuiProgressColorSegments]="colors"\n    [value]="fastValue$ | async"\n></progress>\n\n<progress\n    tuiProgressBar\n    class="progress"\n    [max]="colors.length"\n    [tuiProgressColorSegments]="colors"\n    [value]="slowValue$ | async"\n></progress>\n'}}]);