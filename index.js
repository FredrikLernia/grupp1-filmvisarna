const Sass = require('./sass');
const config = require('./config.json');

const Server = require('./Server');
new Server();

// start the sass compiler
for (let conf of config.sass) {
  new Sass(conf);
}
