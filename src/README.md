# IPSC Practice FE

## Docker
All docker commands are executed from `docker` folder.

Run this command: `docker compose up -d --no-deps --build ipsc-fe` when first build

Run this command: `docker compose up -d` when lunching the container

If you change any dockers `.env` variables, run first command.

In dockers `.env` file enter commands to be executed after container is up and running:

### Dev

```dotenv
# npm
APP_RUN_CMD="npm run dev"
APP_RUN_CMD2=""
```

### Production

```dotenv
# npm
APP_RUN_CMD="npm run build"
APP_RUN_CMD2="node .output/server/index.mjs"
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

and than start the server:

```bash
# npm
npm run start
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
