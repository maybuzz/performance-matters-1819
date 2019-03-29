# Web App From Scratch @cmda-minor-web 18-19

## Summary
Part 2 of the "oba for dummies" app. Adding performance and other fixes.

![performance oba app](/img/localhost-audits2.png)

## Table of contents
- [Live demo](#Live-demo)
- [Install](#Install)
- [Features](#Features)
- [Performance](#Performance)
- [Code snippets](#Code-snippets)
- [Audits](#Audits)
- [Client vs Server](#Cient-vs-server)
- [To-do](#To-do)
- [Resources](#Resources)

## Live demo
[Click here](https://maybuzz.github.io/...) to see my live demo.

## Install
To install this project you'll have to fork this repository and open your terminal
```bash
  # insert your username to this link
  # put this in your terminal to clone the repo
  git clone https://github.com/your-user-name/performance-matters-1819/
```

## Features
- [x] `Compression`
- [x] Add `bootstrap`
- [x] Concat CSS using `gulp`
- [x] Minify CSS using `gulp`
- [x] Font-display: `swap`
- [x] Fallback fonts
- [x] Placeholder for images while loading
- [x] Service worker
- [x] Cache control
- [x] Offline pages
- [ ] `Critical css`

## Performance
The following images show my performance the first time I did my audits check. This shows possible improvements in **PWA**, **SEO** and **accessibility**.

During this project I am focussing on `time to first byte` and `repeat view`.

To improve time to first byte I used gulp at prestart to minify my CSS and JS. To do this I need to split the files I want to serve. When starting my server gulp takes the files from my `src` files and minifies them. After that the files will be put in my static folder. This is send to the server and served to the browser. It includes my views, my data and other static files. ll these things add to minimize the time to first byte.

![first localhost audits](/img/localhost-audits.png)
![performance oba app](/img/localhost-network.png)

By using `compression` files will be served to the server as gzipped files. This improves the first view.

These next screenshots show my audits check after I imported the bootstrap file and compiled everything using `compression`.

![first localhost audits](/img/localhost-audits2.png)
![performance oba app](/img/compression-network2.png)

### Code snippets
Implementing the service worker and cache control allow users to render files from the cache. The manifest file contains information about my `PWA` such as icons and theme color.

The following code is from my `sw.js` file. It shows the pages and files I want to serve offline. This is only possible when cache is enabled. The url's will be cached and will be fetched from the cache on reload.

```js
const CACHE_NAME = 'my-site-cache-v1'
const urlsToCache = [
  '/',
  '/books',
  '/courses',
  '/offline',
  '/css/index.css',
  '/data/bookData.json',
  '/data/courseData.json'
]
```

The following code shows the cache control and can be found in my `app.js` file. This code tells the cache to store files for a year 365.

```js
.use((req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 * 60);  

  next()
})
```

## Audits
The following image shows my final audits.  As you can see I improved my `accessibility`, `PWA` and `seo`. During this project my performance varied a bit, from 95 to 91 to 100 to 97.

A reason for this variation might be that my app is very small and not everything will add to performance.

![first localhost audits](/img/final-audits.png)

## Client vs server
The first screenshots shows the application with `client side` rendering. This means HTML is server from de client (browser) using JS. As you can see the performance is not that bad. It is a bit slower that the server side render. Mainly because of the DOM, because the amount of requests is less than the server side render.
![client side audits check](/img/client-audits.png)
![client side network check](/img/client-network.png)

## To-do
- [x] `Express` `nodejs` server   
- [x] `.ejs` templating   
- [x] Serve data with json file   
- [x] `Client side` vs `Server side` performance check   
- [ ] Use branches   
  - [x] Tried, but failed
- [x] First view
  - [x] Compression
- [x] Repeat view
  - [x] Service worker
  - [x] Manifest file
  - [x] Cache control
- [ ] Perceived performance
  - [x] font-display: swap
  - [ ] `Critical css`, inline
- [x] Image loading
    - [x] Set width to image (don't cause reflows)
- [x] Time to first byte
  - [x] Use gulp
  - [x] CSS minify
  - [x] JS minify

## Resources
- [JSON with nodejs](https://stackoverflow.com/questions/12703098/how-to-get-a-json-file-in-express-js-and-display-in-view)   
- [Expressjs routing](http://expressjs.com/en/api.html#req.params)
- [Client vs Server](https://medium.com/@benjburkholder/javascript-seo-server-side-rendering-vs-client-side-rendering-bc06b8ca2383)
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/)
- [NPM compression](https://www.npmjs.com/package/compression)
- [Gulp docs](https://gulpjs.com/docs/en/getting-started/creating-tasks)
- [Service worker docs](https://developers.google.com/web/fundamentals/primers/service-workers/)
- [Manifest file](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
