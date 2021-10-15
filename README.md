<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Typescript][typescript-shield]][typescript-url]
[![NodeJs][nodejs-shield]][nodejs-url]
[![MongoDB][mongodb-shield]][mongodb-url]
[![AWS][aws-shield]][aws-url]
[![JWT][jwt-shield]][jwt-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>

  <h3 align="center">ACK NestJs Boilerplate 🚀🚀🚀 </h3>

  <p align="center">
	Boilerplate with <a href="https://github.com/goldbergyoni/nodebestpractices"><strong>Mongoose</strong></a> and <a href="https://github.com/goldbergyoni/nodebestpractices"><strong>MongoDB</strong></a> as Database. 
	<br /> 
	Made with following <a href="https://github.com/goldbergyoni/nodebestpractices"><strong>nodejs-best-practice</strong></a> as benchmark and NestJs Habit.
    <br />
    <br />
    <a href="https://github.com/andrechristikan/ack-nestjs-mongoose/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/andrechristikan/ack-nestjs-mongoose">View Demo</a>
    ·
    <a href="https://github.com/andrechristikan/ack-nestjs-mongoose/issues">Report Bug</a>
    ·
    <a href="https://github.com/andrechristikan/ack-nestjs-mongoose/issues">Request Feature</a>
  </p>
</div>

<br />


<div align="center">
	<hr>
	<h1> ##### LAST UPDATE README ON 11 OCT 2021 ( ONGOING) ##### </h1>
	<hr>
</div>

## Description

ACK is a [NestJs](nestjs-url) boilerplate 🚀. ACK uses [Typescript](typescript-url) Program Language.
Best uses for build an API Project, and Microservice Project. Made with following [nodejs-best-practice](nodejs-bestpractice-url) as benchmark and NestJs Habit.

ACK will provide JWT (Json Web Token) Implementation 🔐 (Access Token and Refresh Token), Role and Permission Implementation 👥 , Multi Language Support 🔣 , Database migration, etc. [Spill about Features](#features)

## Prerequisites
We assume that all people are coming to here is `Programmer with intermediate knowledge of programming` and we need to understanding more knowledge before we start to reduce knowledge gaps.

* Understood [ExpressJs Fundamental](expressjs-url), NodeJs Base Framework. It will help we to understand how the NestJs works.
* Understood [Typescript Fundamental](typescript-url), Programming Language. It will help we to write and read the code.
* Understood [NestJs Fundamental](nestjs-fundamental-url), NodeJs Framework with support fully TypeScript.
* Understand what is and how NoSql works as a Database, specially [MongoDB](#acknowledgements).

## Build With
* [NestJs](nestjs-url) v7.6.11
* [Mongoose](mongoose-url) v5.11.14
* [MongoDB](mongodb-url) v4.4.0
* [NodeJs](nodejs-url) v12.21.0
* [Yarn](yarn-url) v1.22.10

## Features
The features will spill on this section, please read secretly and keep silent 🤫 🤫

- [x] Centralize Configuration
- [x] Centralize Exception
- [x] Centralize Response
- [x] Mongoose Implementation
- [x] Json Web Token Guard
- [x] Basic Auth Guard
- [x] Role and Permission Management.
- [x] Hash Password with Bcrypt
- [x] Database Migration
- [x] Support Multi Language
- [x] Incoming Request Validation
- [x] Logger Module level Database
- [x] Debugger Module level File, on/off feature

#### Modules
- [x] AppModule - MainModule
- [x] AuthModule
- [x] AwsModule - S3 Implementation
- [x] ConfigModule
- [x] DatabaseModule
- [x] DebuggerModule
- [x] Helper Module (e.g Manipulation DateTime, Random string or int, etc)
- [x] LoggerModule
- [x] MessageModule - Include LanguageModule
- [x] PaginationModule
- [x] PermissionModule
- [x] PipeModule - RequestValidationPipe
- [x] ResponseModule
- [x] RoleModule
- [x] UserModule
- [x] KafkaModule - Kafka Admin
  - [x] ProducerModule
  - [x] ConsumerModule
- [ ] Other Module** (Ongoing)

You can request other modules, [feel free to request](issues-url)

#### Middleware
- [x] Rate Limit
- [x] Compression
- [x] Helmet
- [x] Cors
- [x] BodyParser
- [x] Cors

#### Example
- [x] Login
- [x] Refresh Token
- [ ] Sign Up
- [x] Server Side Pagination
- [x] Simple CRUD
- [x] Mongoose Population and Deep Population
- [ ] Upload Image into AWS S3

## Endpoints
All endpoints in [endpoints.json](endpoints.json) and need import to PostMan. [Follow this step for import into Postman](postman-import-endpoint)

## Getting Started
Before we start, we need to install [NodeJs](nodejs-url) (Suggest LTS Version), [Yarn](yarn-url), and [MongoDB](mongodb-url) (Suggest LTS Version). Please see their official document. 

#### Make sure that we don't get any error after installation, open our terminal and follow this instruction
1. Check NodeJs is successful installed in our OS. 
    ```sh
    node --version

    # will return 
    # v12.21.0
    ```

2. Check package manager is running, with yarn
    ```sh
    yarn --version

    # will return 
    # 1.22.10
    ```

    with npm
    ```sh
    npm --version

    # will return 
    # 7.8.0
    ```


3. Check MongoDB
    ```sh
    mongod --version

    # will return 
    # db version v4.4.0
    ```

#### Clone repo, and install all dependencies.
1. Clone
    ```sh
    git clone https://github.com/andrechristikan/ack-nestjs-mongoose
    ```

2. Go to into dir
    ```sh
    cd ack-nestjs-mongoose
    ```

3. Install dependencies, here we use `Yarn as Package Manager`
    ```sh
    yarn
    ```

    with `NPM as Package Manager`
    ```sh
    npm i
    ```

#### Setting up the project

1. Build our Env based on `.env.example` file.
    ```sh
    cp .env.example .env
    ```

    and then we need to adjust with our env
    ```env
    APP_ENV=development
    APP_HOST=localhost
    APP_PORT= 3000
    APP_LANGUAGE=en
    APP_DEBUG=false
    APP_TZ=Asia/Jakarta

    DATABASE_HOST=localhost:27017
    DATABASE_NAME=ack
    DATABASE_USER=
    DATABASE_PASSWORD=
    DATABASE_ADMIN=false
    DATABASE_SRV=false
    DATABASE_DEBUG=false
    DATABASE_SSL=false
    DATABASE_OPTIONS=

    AUTH_JWT_ACCESS_TOKEN_SECRET_KEY=123456
    AUTH_JWT_ACCESS_TOKEN_EXPIRATION_TIME=1d
    AUTH_JWT_ACCESS_TOKEN_NOT_BEFORE_EXPIRATION_TIME=0
    AUTH_JWT_ACCESS_TOKEN_REMEMBER_ME_EXPIRATION_TIME=7d
    AUTH_JWT_ACCESS_TOKEN_REMEMBER_ME_NOT_BEFORE_EXPIRATION_TIME=0

    AUTH_JWT_REFRESH_TOKEN_SECRET_KEY=01001231
    AUTH_JWT_REFRESH_TOKEN_EXPIRATION_TIME=2d
    AUTH_JWT_REFRESH_TOKEN_NOT_BEFORE_EXPIRATION_TIME=1d
    AUTH_JWT_REFRESH_TOKEN_REMEMBER_ME_EXPIRATION_TIME=9d
    AUTH_JWT_REFRESH_TOKEN_REMEMBER_ME_NOT_BEFORE_EXPIRATION_TIME=7d

    AUTH_BASIC_TOKEN_CLIENT_ID=asdzxc
    AUTH_BASIC_TOKEN_CLIENT_SECRET=1234567890

    HELPER_IMAGE_MAX_SIZE=1048576

    AWS_CREDENTIAL_KEY=awskey12345
    AWS_CREDENTIAL_SECRET=awssecret12345
    AWS_S3_REGION=us-east-2
    AWS_S3_BUCKET=acks3
    ```

2. Create Database, [follow this instruction from mongodb official](mongodb-create-database-url)

3. We need to Migration Role and Permission for first usage

    - Fresh migrate
      ```sh
      yarn Migrate
      ```

      with npm
      ```sh
      npm run migrate
      ```

    - Rollback migrate
      ```sh
      yarn migrate:rollback
      ```

      with npm
      ```sh
      npm run migrate:rollback
      ```

7.  <strong> *** PLEASE SKIP THIS STEP, UNIT TEST, AND E2E TEST DO NOT FINISH YET *** </strong>. 

    Make sure we do the correct step. Go run `TestModule` and make sure all test passed with success status.

    - Run Unit Testing
      ```sh
      yarn test
      ```

      with npm
      ```sh
      npm run test
      ```

    - Run E2E Testing
      ```sh
      yarn test:e2e
      ```

      with npm
      ```sh
      npm run test:e2e
      ```

8. Last step, run the project
    ```sh
    yarn start:dev
    ```

    with npm
    ```sh
    npm run start:dev
    ```

Congrats !!! Cheers 🍻🍻, our project is running well. Now we can use all features.

Go install or open `REST Client` you prefer. In this case, let assume we use [Postman Client](postman-url). 
After installation, we need to import all endpoint into postman, [see this instruction](#endpoint).


## Usage
Documents usage will has difference file. Document will put in [USAGE.md](usage-url)

## License

Distributed under [MIT licensed](LICENSE.md).

## Contact

[Andre Christi kan](author-email)

[![Github][github-shield]][author-github]
[![LinkedIn][linkedin-shield]][author-linkedin]
[![Instagram][instagram-shield]][author-instagram]


<br />
<p align="right"><a href="#top">back to top</a></p>

<!-- BADGE LINKS -->
[contributors-shield]: https://img.shields.io/github/contributors/andrechristikan/ack-nestjs-mongoose?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/andrechristikan/ack-nestjs-mongoose?style=for-the-badge
[stars-shield]: https://img.shields.io/github/stars/andrechristikan/ack-nestjs-mongoose?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/andrechristikan/ack-nestjs-mongoose?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/andrechristikan/ack-nestjs-mongoose?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[instagram-shield]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[typescript-shield]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[mongodb-shield]: https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B
[nodejs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[jwt-shield]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white
[aws-shield]: https://img.shields.io/badge/Amazon_AWS-{232F3E}?style=for-the-badge&logo=amazonaws&logoColor=white

<!-- CONTACTS -->
[author-linkedin]: https://linkedin.com/in/andrechristikan
[author-instagram]: https://www.instagram.com/___ac.k
[author-email]: mailto:andrechristikan@gmail.com
[author-github]: https://github.com/andrechristikan

<!-- GITHUB LINKS -->
[repo-url]: https://github.com/andrechristikan/ack-nestjs-mongoose
[license-url]: https://github.com/andrechristikan/ack-nestjs-mongoose/blob/main/LICENSE.md
[issues-url]: https://github.com/andrechristikan/ack-nestjs-mongoose/issues
[stars-url]: https://github.com/andrechristikan/ack-nestjs-mongoose/stargazers
[forks-url]: https://github.com/andrechristikan/ack-nestjs-mongoose/network/members
[contributors-url]: https://github.com/andrechristikan/ack-nestjs-mongoose/graphs/contributors
[readme-url]: https://github.com/andrechristikan/ack-nestjs-mongoose/blob/main/README.md
[usage-url]: https://github.com/andrechristikan/ack-nestjs-mongoose/blob/main/USAGE.md


<!-- NESTJS LINKS -->
[nestjs-url]: http://nestjs.com/
[nestjs-fundamental-url]: http://nestjs.com/

<!-- OTHER LINKS -->
[aws-url]: https://aws.amazon.com
[nodejs-url]: https://nodejs.org/
[bcrypt-url]: https://www.npmjs.com/package/bcrypt
[expressjs-url]: https://expressjs.com
[mongoose-url]: https://mongoosejs.com/
[mongodb-url]: https://docs.mongodb.com/
[passport-url]: https://github.com/jaredhanson/passport
[class-transformer-url]: https://github.com/typestack/class-transformer
[class-validation-url]: https://github.com/typestack/class-validator
[yarn-url]: https://yarnpkg.com
[typescript-url]: https://www.typescriptlang.org/
[jwt-url]: https://jwt.io
[postman-url]: https://www.postman.com/product/rest-client/
[postman-import-endpoint]: https://learning.postman.com/docs/getting-started/importing-and-exporting-data/
[mongodb-create-database-url]: https://www.mongodb.com/basics/create-database
[nodejs-bestpractice-url]: https://github.com/goldbergyoni/nodebestpractices