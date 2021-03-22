const prez = {
    name: "Guillaume",
    campus: "Nantes",
    message: function(){
        return `hello, i'm ${prez.name} from ${prez.campus}'s campus`;
    }
}

module.exports = prez;