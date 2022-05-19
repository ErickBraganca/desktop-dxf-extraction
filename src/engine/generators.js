import dbMaterial from "./collection";

let dbList = [];
let dbCollection = JSON.parse(JSON.stringify(dbMaterial));

const generators = {
  occurrenceParser: (dbParser, callback) => {
    dbParser.forEach((element) => {
      dbList.push(dbCollection[element[1]]);
    });
    callback(dbList);
    dbList = [];
  },
};

export { generators };
