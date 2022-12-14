const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; // config.json
const config = require('../config/config.json')[env]; // 서버에서 DB를 실행했을 때, 어떤 경로를 통해 어떤 파일을 불러와서 실행하는지가 기재
const db = {}; // db 빈 객체 생성

// 새로운 시퀄라이즈 객체 생성 (객체 내부에는 디비 연결 정보를 가지고 있음)
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Post = require("./post")(sequelize, Sequelize); // sequelize와 post를 접근할 수 있음
db.User = require("./user")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);
db.Like = require("./like")(sequelize, Sequelize);
db.Image = require("./image")(sequelize, Sequelize);

db.User.hasMany(db.Post, { foreignKey: "writer", targetKey: "user_id" }); // 외래키 설정
db.Post.belongsTo(db.User, { foreignKey: "writer"});

db.User.hasMany(db.Comment, { foreignKey: "user_id", targetKey: "user_id" });
db.Comment.belongsTo(db.User, { foreignKey: "user_id" });

db.User.hasMany(db.Like, { foreignKey: "user_id", targetKey: "user_id" });
db.Like.belongsTo(db.User, { foreignKey: "user_id" });

db.User.hasMany(db.Image, { foreignKey: "user_id", targetKey: "user_id" });
db.Image.belongsTo(db.User, { foreignKey: "user_id" });

db.Post.hasMany(db.Comment, { foreignKey: "post_id", targetKey: "post_id" });
db.Comment.belongsTo(db.Post, { foreignKey: "post_id" });

db.Post.hasMany(db.Like, { foreignKey: "post_id", targetKey: "post_id" });
db.Like.belongsTo(db.Post, { foreignKey: "post_id" });

db.Post.hasMany(db.Image, { foreignKey: "post_id", targetKey: "post_id" });
db.Image.belongsTo(db.Post, { foreignKey: "post_id" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
