var knex = require('../../../db/knex');


module.exports = {

  populateReceipt: function (userID) {

    return knex.raw('SELECT * FROM shopping_carts s WHERE s.user_id = ' + userID + '');
  }


};