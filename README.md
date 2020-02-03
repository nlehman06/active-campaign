# ActiveCampaign Contacts Exercise

## Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone the repo
$ git clone https://github.com/nlehman06/active-campaign.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with yarn
$ yarn install

# start the server
$ yarn start
```

Go to [http://localhost:8080](http://localhost:8080) in your browser.


## Getting Started

### Dependencies

What you need to run this app:

* `node` and `yarn`
* Ensure you're running Node (`v8.x.x`+) and yarn (`1.6.x`+)

### Installing

* `fork` this repo
* `clone` your fork
* `yarn install` to install all dependencies

### Developing

After you have installed all dependencies you can now start developing with:

* `yarn start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and update with Hot Module Replacement (HMR). The application can be checked at `http://localhost:8080`.

### Testing

Have a look at [`tests.webpack.js`](src/tests.webpack.js) and [`src/app/components/home/home.controller.test.js`](src/app/components/home/home.controller.test.js).

* Run: `yarn test` or `yarn run test:live`


## License

[MIT License](LICENSE)