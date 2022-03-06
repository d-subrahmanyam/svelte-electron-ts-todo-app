# electron-svelte-typescript

Template for apps written with [Electron](https://github.com/electron/electron), [Svelte](https://github.com/sveltejs/svelte) and [Typescript](https://github.com/microsoft/TypeScript).

The template does hot module replacement and reloads electron on main process file changes out of the box.
It also follows some good security practices, such as Content-Security-Policy meta tags in html,
context isolation set to true, remote modules set to false etc.

## Get started

To create a new project based on this template you must first clone the repo and then delete the folder .git:

```bash
git clone https://github.com/d-subrahmanyam/svelte-electron-ts-todo-app MyAppName
cd MyAppName
rm -rf .git
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

Install the dependencies...

```bash
npm i
```

...then start coding in dev mode:

```bash
npm start
```

The start script spins up [Rollup](https://github.com/rollup/rollup)
in watch mode with a [Rollup-Plugin-Serve](https://github.com/thgh/rollup-plugin-serve) instance
serving the frontend static files on [localhost:5000](http://localhost:5000) and a
nodemon server to watch for file changes related to the main electron process.

## Contributing

In order to lint the code you run:

```bash
npm run lint
```

In order to prettify the code you run:

```bash
npm run format
```

You should run the following command, which runs lint and then format, on your contributed code:

```bash
npm run preversion
```

before creating a pull request.

All suggestions are welcome!

## Licence

This project is licensed under the terms described in [LICENSE](https://github.com/d-subrahmanyam/svelte-electron-ts-todo-app/blob/master/LICENSE).

🤝 A big thanks to [fuzzc0re](https://github.com/fuzzc0re). A lot of the config and project structure are inspiration from his repo - [electron-svelte-typescript](https://github.com/fuzzc0re/electron-svelte-typescript.git)