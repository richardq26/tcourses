module.exports = {
  name: "Course",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      nullable: true,
    },
    description:{
      type: "varchar",
      nullable: true,
    },
    categoryId: {
      type: "int",
    },
    created: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updated: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    category: {
      target: "Category",
      type: "many-to-one",
    },
  },
};
