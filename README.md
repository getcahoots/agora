# cahoots - forumize

This repository contains our UI theme of the [Cahoots forum](https://forum.cahoots.pw).

It originated as a fork of the Bootstrap-based theme from [Kasper Isager](https://github.com/kasperisager/vanilla-bootstrap).

## Development

You need Node.js / io.js in order to build the theme.

Install all dependencies via npm:

```sh
$ npm install && npm run bower
```

The last script call will install all bower dependencies.

### Tasks

#### Wire mode (a.k.a. development mode)

```sh
$ SFTP_HOST=<sftp-host> SFTP_PORT=<sftp-port> SFTP_USER=<sftp-user> SFTP_PATH=<sftp-path> npm run wire
```

Will switch into development mode and listens for changes, compiles them and deploys this new version to the defined server.

#### Build

```sh
$ npm run build
```

Will compile all sources (you have to deploy this build manually).

---

Copyright &copy; 2014-2015 [Cahoots](https://github.com/getcahoots). Licensed under the terms of the [MIT License](LICENSE.md)
