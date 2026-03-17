const _ = require('lodash');

const sort = (data, sortBy, sortOrder) => {
  // capitalize every element's first letter in name
  const correctCase = data.map((element) => {
    element.name = element.name[0].toUpperCase() + element.name.slice(1);
    return element;
  });

  const sortedData = _.sortBy(correctCase, sortBy);

  if (sortOrder === 'desc') {
    sortedData.reverse();
  }

  return sortedData;
};

module.exports = sort;
