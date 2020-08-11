const path = require("path");

module.exports = {

  networks: {
    teams: {
      url: `ws://marshmallow:8002/77f042b1-a657-49d2-b5eb-1d8facbcb333`,
      network_id: "*",
      gas: 5500000
    }
  }
};
