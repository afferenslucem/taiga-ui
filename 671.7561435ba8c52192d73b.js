(window.webpackJsonp=window.webpackJsonp||[]).push([[671],{"+lL0":function(n,e,t){"use strict";t.r(e),e.default='<ng-template\n    #previewImages\n    let-dialog\n>\n    <tui-preview [rotatable]="true">\n        <img\n            *ngIf="image"\n            loading="lazy"\n            alt=""\n            class="t-image-preview"\n            [src]="image.src"\n        />\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconCloseLarge"\n            title="Close"\n            (click)="dialog.complete()"\n        ></button>\n    </tui-preview>\n</ng-template>\n'}}]);