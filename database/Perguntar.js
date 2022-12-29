const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allow: false
    },

    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }

});

Pergunta.sync({ force: false }).then(() => { });

module.exports = Pergunta;