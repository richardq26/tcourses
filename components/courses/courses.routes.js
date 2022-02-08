const coursesController = require("./courses.controller");
const categoryController = require("../category/category.controller");

module.exports = (api, opts) => {
  api.post("/", coursesController.create);
  api.post("/createCategory", categoryController.create);
  api.get("/category/:id/listCourses", coursesController.paginate)
};
