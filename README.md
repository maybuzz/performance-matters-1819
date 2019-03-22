# Web App From Scratch @cmda-minor-web 18-19

## Summary
Part 2 of the "oba for dummies" app. Adding performance and other fixes.

![performance oba app](/img/localhost-audits2.png)

## Table of contents
1. [Live demo](#Live-demo)
2. [Install](#Install)
3. [Features](#Features)
3. [Performance](#Performance)
8. [To-do](#To-do)
9. [Resources](#Resources)

## Live demo
[Click here](https://maybuzz.github.io/...) to see my live demo.

To install this project you'll have to fork this repository and open your terminal
```bash
  # insert your username to this link
  # put this in your terminal to clone the repo
  git clone https://github.com/your-user-name/performance-matters-1819/
```

## Features
- [x] `Compression`
- [x] Add `bootstrap`
- [ ] Minify stuff using `gulp`
- [ ] font-display: `swap`
- [ ] Fallback fonts
- [ ] Placeholder for images

## Performance
The following screenshots show my first audits check on Google Chrome. This is before I did anything to improve performance.
![first localhost audits](/img/localhost-audits.png)
![performance oba app](/img/localhost-network.png)


These next screenshots show my audits check after I imported the bootstrap file and compiled everything using `compression`.
![first localhost audits](/img/localhost-audits2.png)
![performance oba app](/img/compression-network2.png)

## Client side vs Server side
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
- [x] `Compress`
- [ ] `Minify`

## Resources
- [JSON with nodejs](https://stackoverflow.com/questions/12703098/how-to-get-a-json-file-in-express-js-and-display-in-view)   
- [Expressjs routing](http://expressjs.com/en/api.html#req.params)
- [Client vs Server](https://medium.com/@benjburkholder/javascript-seo-server-side-rendering-vs-client-side-rendering-bc06b8ca2383)
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/)
- [NPM compression](https://www.npmjs.com/package/compression)

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
