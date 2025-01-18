# NMKR-STUDIO-API GENERATOR

## Goal

This repository aims to provide a way to quickly generate the latest typescript API client to use with [NMKR Studio](https://www.nmkr.io/studio)

## Usage

In this folder you will find a `package.json` file with two commands `generate-local` to generate a client defined by the API definition from the `swagger.json` file. This can be useful if you want to test new API endpoints or one which still is in development. Additionally, the `generate-latest` command which will pull the latest available swagger file from [https://studio-api.nmkr.io/swagger/v2/swagger.json](https://studio-api.nmkr.io/swagger/v2/swagger.json)

TLDR;

- `npm install` to install the dependencies
- `npm install openapi-typescript-codegen --save-dev` to install the generator
- `npm run generate-local` from local swagger.json file
- `npm run generate-latest` from latest published version on the web

Afterwards, you will find under `/nmkr-studio-api/src` the generated typescript files. To build them, navigate to `cd /nmkr-studio-api` in the terminal and run

- `npm run test`
- `npm run lint`
- `npm run format`
- `npm run build`

To run the tests, you need to provide an API-Key for a NMKR STUDIO ACCOUNT with at least 1 project. This has to be saved in a `.env` file similar as the `.env.example` file.

In case you have access rights to the NPM-Account you can, after testing, deploy the new version to npm (only with the required account) via:

- `npm login`
- `npm version patch`
- `npm publish`

## Roadmap

- [x] API Client
- [x] Basic testing setup
- [ ] Further testing (100% coverage?)
- [ ] Further documentation and usage examples
- [ ] Automatic updates after Swagger changes
- [ ] Automatic deploy pipeline to simplify PRs

## Mentions and further reading

If you have any requests, problems or suggestions regarding this package, the best way to reach us is via this [github repository](https://github.com/nftmakerio/NMKR-Studio-API-GeneratorTS). For general help please contact the [NMKR support](https://www.nmkr.io/#contact)

If you make a PR, please use the provided linting before commiting your code.

We are using diffrent npm packages and tools to ensure the best developer experience, for further reading please take a look at:

- [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) to generate the client
- [axios](https://github.com/ferdikoomen/openapi-typescript-codegen) as HTTP-Client
