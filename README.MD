# @beyonk/pino-logtail

*@beyonk/pino-logtail* is a so called "transport" for the [pino](https://github.com/pinojs/pino) logger. *pino-logtail* receives *pino* logs from `stdin` and 
sends them to a logsene compatible logger such as [logtail](https://logtail.com) via `@logtail/node`.

For example:

```bash
$ node your-app.js | pino-logtail --token my-api-token
```

## Demo

You can test the integration by running the demo:

```
$ npm run demo -- --token <my-api-token>
```

## Install

You should install *pino-logtail* globally so that it can be used as a utility:

```bash
$ pnpm install --production -g @beyonk/pino-logtail
```

## Configuration

*@beyonk/pino-logtail* only supports a single config option, `token` which is your logtail (or compatible) api token.

## License

[MIT License](https://antony.mit-license.org/)