import { generators } from "./generators";

const controller = {
  methods: function (method, data) {
    let handler = {
      typical() {
        //Call typical generation function
        console.log("[Controller] Started Typical Parser");
        return generators.typicalGroupParser(data);
      },
      individual() {
        //Call individual generation function
        console.log("[Controller] Started Individual Parser");
        return generators.individualGroupParser(data);
      },
      total() {
        //Call total generation function
        console.log("[Controller] Started Total Parser");
        return generators.totalGroupParser(data);
      },
    };
    return handler[method];
  },
};

export { controller };
