# ProductsAPI

## Introduction

Team Terramuse - composed of the astounding team of 3 developers- **<a href="https://github.com/akolatch" target="_blank">Aharon</a>, [Albert](https://github.com/blargeth), and [Zach](https://github.com/zrealberg)**- was tasked to create a working backend of each of their respective parts to an API of an E-commerce site. 

***This is the Products API.***

## ** NOTE THIS README IS UNDER CONSTRUCTION**

## Table of Contents

- [Installation](#installation)
    - [TEST](#this-is-a-test)
    - [Link to another link](#another-link)


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


## Installation

### This is a test
### Another link


NOTE:

Messing around with Docker. To connect locally, you need to change mongoUri in DB/index.js to your local mongo database. 
