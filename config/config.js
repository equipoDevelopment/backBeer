require('dotenv').config();

const config = {

  port: 3000,
  uri: `mongodb+srv://BadKernel:zUduCAwBCfrW2PWf@clusterbadkernel.tphaiss.mongodb.net/beer_store?retryWrites=true&w=majority`,
  uri_local: `mongodb://${process.env.USER_LOCAL}:${process.env.PASSWORD_LOCAL}localhost:27017/${process.env.DBNAME}`,
  uri_localNoPassword: `mongodb://localhost:27017/${process.env.DBNAME}`,
  secret : process.env.SECRET,
}

module.exports = { config };
