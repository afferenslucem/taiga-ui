(window.webpackJsonp=window.webpackJsonp||[]).push([[822],{P5SX:function(t,n,i){"use strict";i.r(n),n.default='<table tuiTable [columns]="columns">\n    <thead>\n        <tr tuiThGroup>\n            <th *tuiHead="\'name\'" tuiTh>Name</th>\n            <th *tuiHead="\'email\'" tuiTh>E-mail</th>\n            <th *tuiHead="\'status\'" tuiTh>Status</th>\n            <th *tuiHead="\'tags\'" tuiTh [sorter]="null">Tags</th>\n            <th *tuiHead="\'actions\'" tuiTh [sorter]="null"></th>\n        </tr>\n    </thead>\n    <tbody tuiTbody [data]="users">\n        <tr *tuiRow="let item of users; let index = index" tuiTr>\n            <td *tuiCell="\'name\'" tuiTd>{{index + 1}}. {{item.name}}</td>\n            <td *tuiCell="\'email\'" tuiTd>\n                <a *ngIf="item.email" tuiLink [href]="\'mailto:\' + item.email">\n                    {{item.email}}\n                </a>\n            </td>\n            <td *tuiCell="\'status\'" tuiTd>\n                <div [class]="item.status">{{item.status}}</div>\n            </td>\n            <td *tuiCell="\'tags\'" tuiTd>\n                <tui-tag\n                    *ngFor="let tag of item.tags"\n                    class="tui-space_right-1"\n                    [value]="tag"\n                    [autoColor]="true"\n                ></tui-tag>\n            </td>\n            <td *tuiCell="\'actions\'" tuiTd>\n                <button\n                    tuiIconButton\n                    appearance="flat"\n                    size="s"\n                    icon="tuiIconTrash"\n                    title="Remove"\n                    shape="rounded"\n                    class="remove"\n                    (click)="remove(item)"\n                ></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n'}}]);