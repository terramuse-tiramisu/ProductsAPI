# Atelier API - SDC

## Table of Contents
- [Introduction](#introduction)
- [Overview](#overview)
- [Installation](#installation)
    - [TEST](#this-is-a-test)
    - [Link to another link](#another-link)


## Introduction

Over the course of 12 days during our time at Hack Reactor, cohort 34, Team Terramuse - composed of the astounding team of 3 developers- **<a href="https://github.com/akolatch" target="_blank">Aharon</a>, [Albert](https://github.com/blargeth), and [Zach](https://github.com/zrealberg)**- was tasked to create a working backend of each of their respective parts to an API of an E-commerce site as part of our System Design Capstone (SDC).

Each of us was assigned to one piece of the API:
1. Products - Albert
2. Reviews - Zach
3. Q & A - Aharon

and can be found in our [team repository](https://github.com/terramuse-tiramisu).

The functionality of the API is outlined [here](https://gist.github.com/trentgoing/d69849d6c16b82d279ffc4ecd127f49f#file-api_overview-md).

# ProductsAPI - Albert's part

## Technologies
For this project, I chose the following languages and frameworks in my implementation:
- Node.js
- Express
- MongoDB
- Mongoose ODM
- Docker
- Amazon Elastic Compute Cloud (EC2)

## ** NOTE THIS README IS UNDER CONSTRUCTION**

<details><summary><b> dont press me yet. incomplete</b></summary>

Some code from an awesome readme...going to format it later

1. Install the preset:

    ```sh
    $ npm install --save-dev size-limit @size-limit/preset-app
    ```

2. Add the `size-limit` section and the `size` script to your `package.json`:

    ```diff
    + "size-limit": [
    +   {
    +     "path": "dist/app-*.js"
    +   }
    + ],
      "scripts": {
        "build": "webpack ./webpack.config.js",
    +   "size": "npm run build && size-limit",
        "test": "jest && eslint ."
      }
    ```

3. Here’s how you can get the size for your current project:

    ```sh
    $ npm run size

      Package size: 30.08 KB with all dependencies, minified and gzipped
      Loading time: 602 ms   on slow 3G
      Running time: 214 ms   on Snapdragon 410
      Total time:   815 ms
    ```

4. Now, let’s set the limit. Add 25% to the current total time and use that as
   the limit in your `package.json`:

    ```diff
      "size-limit": [
        {
    +     "limit": "1 s",
          "path": "dist/app-*.js"
        }
      ],
    ```

5. Add the `size` script to your test suite:

    ```diff
      "scripts": {
        "build": "webpack ./webpack.config.js",
        "size": "npm run build && size-limit",
    -   "test": "jest && eslint ."
    +   "test": "jest && eslint . && npm run size"
      }
    ```

6. If you don’t have a continuous integration service running, don’t forget
   to add one — start with [Travis CI].

</details>

## Overview 

The purpose of SDC was to build and deploy a functional, scalable backend; building upon the rudimentary concepts of server routing, database creation, and basic querying that I learned during my time at Hack Reactor.

### New technologies and key takeaways:
- MongoDB aggregation pipeline and seeding a database using ETL from csv files.
    - Working with large amounts of data (>26 million individual documents per csv)
    - Normalizing vs. denormalizing data
    - Query optimization
- System design optimizations and security concerns
    - Using Docker and containerization of services 
    - Deployment using Docker and EC2
    - Scalability - load balancing, server optimization, Docker-compose
- Testing and iterative design implementations
- Effectively adapting to new technologies through self-study and collaboration among team members 
- Docker complexity - Docker is a great tool, but very complex and relatively difficult to start using.

## Installation

### This is a test
### Another link


NOTE:

Messing around with Docker. To connect locally, you need to change mongoUri in DB/index.js to your local mongo database. 
