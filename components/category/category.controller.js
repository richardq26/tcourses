const categoryService = require("./crud");
const { response } = require("../../helpers");

exports.create = async (req, res) => {
  let course = await categoryService.create(req.body);
  if (course.error) {
    return response(res, 400, course.error);
  }
  return response(res, 200, course);
};
