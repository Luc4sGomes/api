const expressKeep = require('express');

const application = expressKeep();

application.listen('3000');

application.route('/').get((request, response) => {
  response.send("hello");
})

application.route('/about').get((request, response) => {
  response.send("about");
});
