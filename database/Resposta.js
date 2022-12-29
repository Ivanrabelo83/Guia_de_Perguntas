const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false

    }
});

Resposta.sync({ force: false });

module.exports = Resposta;







// const Pergunta = connection.define('perguntas', {
//     titulo: {
//         type: Sequelize.STRING,
//         allow: false
//     },

//     descricao: {
//         type: Sequelize.TEXT,
//         allowNull: false
//     }

// });

// Pergunta.sync({ force: false }).then(() => { });

// module.exports = Pergunta;