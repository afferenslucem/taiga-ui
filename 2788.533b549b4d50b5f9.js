(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2788],{2788:n=>{n.exports='<tui-avatar-stack\n    *ngFor="let size of sizes; let odd = odd"\n    class="tui-space_vertical-4"\n    [direction]="odd ? \'left\' : \'right\'"\n>\n    <tui-avatar\n        *ngFor="let name of names"\n        [round]="odd"\n        [size]="size"\n        [src]="name | tuiInitials"\n        [style.background]="name | tuiAutoColor"\n    />\n    <tui-avatar\n        [round]="odd"\n        [size]="size"\n    >\n        99+\n    </tui-avatar>\n</tui-avatar-stack>\n'}}]);