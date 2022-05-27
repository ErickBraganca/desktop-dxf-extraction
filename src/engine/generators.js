import dbMaterial from "./collection";
let baseList = [];

const generators = {
  //Generation list of typical itens
  typicalGroupParser: (data) => {
    let dbCollection = JSON.parse(JSON.stringify(dbMaterial));
    let dbList = [...baseList];
    data.forEach((element) => {
      let count = Number(element[0]);
      let tag = element[1];
      let index = dbCollection[tag];
      index.Materials.forEach((key) => {
        key.Count = key.Count * count;
      });
      dbList.push(index);
    });
    console.log("|----[Generator] Completed Typical Parser]----|");
    return dbList;
  },
  individualGroupParser: () => {
    //Generation list of individual itens
    console.log("|----[Generator] Completed Individual Parser]----|");
    return dbMaterial;
  },
  totalGroupParser: () => {
    //Generation of material list of total itens
    console.log("|----[Generator] Completed Total Parser]----|");
    return dbMaterial;
  },
};

export { generators };
