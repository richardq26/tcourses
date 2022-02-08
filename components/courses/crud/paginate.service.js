const getConnection = require("../../../database");
module.exports = async ({
  page = 1,
  perPage = 50,
  sort = "DESC",
  categoryId,
}) => {
  try {
    const connection = await getConnection();
    const courseRepository = connection.getRepository("Course");
    let findLogic = {
      order: { created: sort },
      relations: ["category"],
    };
    if (categoryId) {
      findLogic.where = { categoryId };
    }
    if (page) {
      findLogic.skip = perPage * (page - 1);
      findLogic.take = perPage;
    }
    let [data, total] = await courseRepository.findAndCount(findLogic);
    let pages = Math.ceil(total / perPage);
    return {
        page,
        perPage,
        pages,
        data,
        total,
      };
  } catch (error) {
    return {
      error: {
        code: 400,
        message: error.message,
      },
    };
  }
};
