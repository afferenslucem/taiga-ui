(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3459],{3459:n=>{n.exports="```ts\nimport {PolymorpheusComponent} from '@taiga-ui/polymorpheus';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {inject} from '@angular/core';\n\n// ...\n\nexport class Example {\n  private readonly dialogs = inject(TuiDialogService);\n\n  // ...\n\n  open() {\n    this.dialogs.open('Hello!').subscribe();\n  }\n}\n```\n"}}]);