(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[43672],{43672:n=>{n.exports="```ts\nimport {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n// ...\n\nexport class Example {\n  private readonly context: TuiDialogContext<boolean> = inject(POLYMORPHEUS_CONTEXT);\n\n  ok() {\n    this.context.completeWith(true);\n  }\n\n  cancel() {\n    this.context.completeWith(false);\n  }\n}\n```\n"}}]);