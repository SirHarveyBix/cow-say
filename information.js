const prez = {
  name: 'Dany',
  campus: 'nantes & co ',
  message: function () {
    return `hello, i'm ${prez.name} from ${prez.campus}'s campus`;
  },
};
console.log('files changed');
module.exports = prez;
