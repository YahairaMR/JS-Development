const _ = require('lodash');

const sort = (data, sortBy, order) => {
  const sortedData = _.sortBy(data, sortBy);

  if (order === 'desc') {
    sortedData.reverse();
  }

  return sortedData;
};

module.exports = sort;
