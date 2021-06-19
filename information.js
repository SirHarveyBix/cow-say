const prez = {
  name: "Madické",
  campus: "Saint-Ouen",
  message: function () {
    return `hello, i'm ${prez.name} from ${prez.campus}'s campus`;
  },
};

module.exports = prez;
