const courseService = require("./crud");
const { response } = require("../../helpers");

exports.create = async (req, res) => {
  let course = await courseService.create(req.body);
  if (course.error) {
    return response(res, 400, course.error);
  }
  return response(res, 200, course);
};

exports.paginate = async (req, res) => {
  const categoryId = req.params.id;
  const { page, perPage, sort } = req.query;
  let courses = await courseService.paginate({ categoryId, sort, page, perPage });
  if (courses.error) {
    return response(res, 400, courses.error);
  }
  return response(res, 200, courses);
};
