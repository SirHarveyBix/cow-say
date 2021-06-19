const prez = {
  name: "Dany",
  campus: "Roubaix",
  message: function () {
    return `hello, i'm ${prez.name} from ${prez.campus}'s campus`;
  },
};
console.log(prez.name);
module.exports = prez;
