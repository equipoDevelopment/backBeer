require('dotenv').config();

const config = {

  port: process.env.PORT || 3000,
  uri: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@clusterbadkernel.tphaiss.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  uri_local: `mongodb://${process.env.USER_LOCAL}:${process.env.PASSWORD_LOCAL}localhost:27017/${process.env.DBNAME}`,
  uri_localNoPassword: `mongodb://localhost:27017/${process.env.DBNAME}`,
  secret : process.env.SECRET,
}

module.exports = { config };