(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[56458],{56458:n=>{n.exports='```html\n<tui-input\n  *ngIf="value | tuiEmails as emails"\n  [(ngModel)]="value"\n>\n  Введите адрес\n  <ng-template\n    *ngIf="emails.length"\n    [tuiDataList]\n  >\n    <tui-data-list-wrapper [items]="emails"></tui-data-list-wrapper>\n  </ng-template>\n</tui-input>\n```\n'}}]);