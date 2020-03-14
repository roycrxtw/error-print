# Readme

This is a test result about the Error stack trace messages for different node.js 
versions.

For changing the node.js version easily, please use the handy tool: `nvm`.


## v13.11.0

```bash
$ nvm use v13.11.0
Now using node v13.11.0 (npm v6.13.7)

$ npm start

> error-print@1.0.0 start /Users/roy/workspace/roy/error-print
> node -v && node index.js

v13.11.0
Current node.js version: v13.11.0
messages: [
  'Error',
  '    at Object.<anonymous> (/Users/roy/workspace/roy/error-print/index.js:6:18)',
  '    at Module._compile (internal/modules/cjs/loader.js:1147:30)',
  '    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1167:10)',
  '    at Module.load (internal/modules/cjs/loader.js:996:32)',
  '    at Function.Module._load (internal/modules/cjs/loader.js:896:14)',
  '    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)',
  '    at internal/main/run_main_module.js:17:47'
]
```

## v12.16.1 (Latest LTS: Erbium)

```bash
$ nvm use v12.16.1
Now using node v12.16.1 (npm v6.13.4)

$ npm start

> error-print@1.0.0 start /Users/roy/workspace/roy/error-print
> node -v && node index.js

v12.16.1
Current node.js version: v12.16.1
messages: [
  'Error',
  '    at Object.<anonymous> (/Users/roy/workspace/roy/error-print/index.js:6:18)',
  '    at Module._compile (internal/modules/cjs/loader.js:1158:30)',
  '    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)',
  '    at Module.load (internal/modules/cjs/loader.js:1002:32)',
  '    at Function.Module._load (internal/modules/cjs/loader.js:901:14)',
  '    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)',
  '    at internal/main/run_main_module.js:18:47'
]
```


# v10.19.0 (Latest LTS: Dubnium)

```bash
$ nvm use v10.19.0
Now using node v10.19.0 (npm v6.13.4)

$ npm start

> error-print@1.0.0 start /Users/roy/workspace/roy/error-print
> node -v && node index.js

v10.19.0
Current node.js version: v10.19.0
messages: [ 'Error',
  '    at Object.<anonymous> (/Users/roy/workspace/roy/error-print/index.js:6:18)',
  '    at Module._compile (internal/modules/cjs/loader.js:778:30)',
  '    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)',
  '    at Module.load (internal/modules/cjs/loader.js:653:32)',
  '    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)',
  '    at Function.Module._load (internal/modules/cjs/loader.js:585:3)',
  '    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)',
  '    at startup (internal/bootstrap/node.js:283:19)',
  '    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)' ]
```


# v10.18.1

```bash
$ nvm use v10.18.1
Now using node v10.18.1 (npm v6.13.4)

$ npm start

> error-print@1.0.0 start /Users/roy/workspace/roy/error-print
> node -v && node index.js

v10.18.1
Current node.js version: v10.18.1
messages: [ 'Error',
  '    at Object.<anonymous> (/Users/roy/workspace/roy/error-print/index.js:6:18)',
  '    at Module._compile (internal/modules/cjs/loader.js:778:30)',
  '    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)',
  '    at Module.load (internal/modules/cjs/loader.js:653:32)',
  '    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)',
  '    at Function.Module._load (internal/modules/cjs/loader.js:585:3)',
  '    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)',
  '    at startup (internal/bootstrap/node.js:283:19)',
  '    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)' ]
```

## 8.17.0 (Latest LTS: Carbon)

```bash
$ npm start

> error-print@1.0.0 start /Users/roy/workspace/roy/error-print
> node -v && node index.js

v8.17.0
Current node.js version: v8.17.0
messages: [ 'Error',
  '    at Object.<anonymous> (/Users/roy/workspace/roy/error-print/index.js:6:18)',
  '    at Module._compile (module.js:653:30)',
  '    at Object.Module._extensions..js (module.js:664:10)',
  '    at Module.load (module.js:566:32)',
  '    at tryModuleLoad (module.js:506:12)',
  '    at Function.Module._load (module.js:498:3)',
  '    at Function.Module.runMain (module.js:694:10)',
  '    at startup (bootstrap_node.js:204:16)',
  '    at bootstrap_node.js:625:3' ]
```


## v6.17.1 (Latest LTS: Boron)

```bash
$ nvm use v6.17.1
$ npm start

> error-print@1.0.0 start /Users/roy/workspace/roy/error-print
> node -v && node index.js

v6.17.1
Current node.js version: v6.17.1
messages: [ 'Error',
  '    at Error (native)',
  '    at Object.<anonymous> (/Users/roy/workspace/roy/error-print/index.js:6:32)',
  '    at Module._compile (module.js:577:32)',
  '    at Object.Module._extensions..js (module.js:586:10)',
  '    at Module.load (module.js:494:32)',
  '    at tryModuleLoad (module.js:453:12)',
  '    at Function.Module._load (module.js:445:3)',
  '    at Module.runMain (module.js:611:10)',
  '    at run (bootstrap_node.js:394:7)',
  '    at startup (bootstrap_node.js:160:9)' ]
```

## v4.9.1 (Latest LTS: Argon)

```bash
$ nvm use v4.9.1
Now using node v4.9.1 (npm v2.15.11)

$ npm start

> error-print@1.0.0 start /Users/roy/workspace/roy/error-print
> node -v && node index.js

v4.9.1
Current node.js version: v4.9.1
messages: [ 'Error',
  '    at Error (native)',
  '    at Object.<anonymous> (/Users/roy/workspace/roy/error-print/index.js:6:18)',
  '    at Module._compile (module.js:409:26)',
  '    at Object.Module._extensions..js (module.js:416:10)',
  '    at Module.load (module.js:343:32)',
  '    at Function.Module._load (module.js:300:12)',
  '    at Function.Module.runMain (module.js:441:10)',
  '    at startup (node.js:140:18)',
  '    at node.js:1043:3' ]
```
