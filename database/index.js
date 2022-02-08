const typeorm = require("typeorm");
const EntitySchema = typeorm.EntitySchema;

const {
  DATABASE_NAME,
  SECRET_ARN,
  RESOURCE_ARN,
  RDS_REGION,
} = require("../config");
const { CategoryEntity, CourseEntity } = require("../entities");

const connectionOptions = {
  type: "aurora-data-api",
  synchronize: true,
  database: DATABASE_NAME,
  secretArn: SECRET_ARN,
  resourceArn: RESOURCE_ARN,
  region: RDS_REGION,
  charset: "utf8",
  formatOptions: {
    castParameters: false,
  },
  entities: [new EntitySchema(CategoryEntity), new EntitySchema(CourseEntity)],
};

var cachedConnection;
module.exports = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }
  cachedConnection = await typeorm.createConnection(connectionOptions);
  console.log("Nueva conexión creada");
  return cachedConnection;
};
