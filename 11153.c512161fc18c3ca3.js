(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[11153],{11153:e=>{e.exports='<div class="description">\n    To highlight extra characters:\n    <ul class="steps">\n        <li>\n            use\n            <code>maxLength</code>\n            input\n        </li>\n        <li class="steps_optional">\n            (Optional) Don\'t forget to set form validator (for example,\n            <code>Validators.maxLength</code>\n            ) if you want to make field invalid on exceeding the characters limit\n        </li>\n    </ul>\n</div>\n\n<form [formGroup]="testForm">\n    <tui-textarea\n        formControlName="testValue1"\n        tuiHintContent="it\'s just a joke"\n        [expandable]="true"\n        [maxLength]="maxLength"\n    >\n        This is an example with very long label text\n    </tui-textarea>\n    <tui-error\n        formControlName="testValue1"\n        [error]="[] | tuiFieldError | async"\n    />\n</form>\n'}}]);