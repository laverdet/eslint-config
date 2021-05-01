# marcel's eslint config

I think it's crazy that most popular ESLint configs make no distinction between warnings and errors.
A missing semicolon shouldn't turn my IDE into a casserole of red squiggly lines. On the other hand
a redeclared identifier or a missing loop increment should probably grab my attention because the
program isn't even worth testing in this condition.

This is an opinionated config based on my current personal preferences and style. Most things are
warnings but some things are errors. React is not included right now because my current project
doesn't need it.

`.eslint.yaml`
```yaml
extends: '@laverdet/eslint-config'
env:
  es2021: true
  node: true
parserOptions:
  project: ./tsconfig.json
  sourceType: module
```

Also copy over the `.vscode` settings.
