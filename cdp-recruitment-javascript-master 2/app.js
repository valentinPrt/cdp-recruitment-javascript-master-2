const { data } = require("./data");
const { count, filter  } = require('./utils');

process.argv?.slice(2).forEach((arg) => {
  if (arg.startsWith("--")) {
    const listArgs = arg.slice(2).split("=");

    switch (listArgs[0]) {
      case 'filter':
        console.log(JSON.stringify(filter(data, listArgs[1]), null, 2));
        break;
      case 'count':
        console.log(JSON.stringify(count(data), null, 2));
        break;
      default:
        console.log("no command found for ", arg);
    }
  }
});
