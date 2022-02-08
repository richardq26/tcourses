const getConnection = require("../../../database");
module.exports = async (data) => {
  try {
    const connection = await getConnection();
    const categoryRepository = connection.getRepository("Category");
    const courseRepository = connection.getRepository("Course");
    const category = await categoryRepository.findOne({ id: data.categoryId });
    if (!category) {
      return {
        error: {
          code: 404,
          message: "La categoría no existe",
        },
      };
    }
    const course = await courseRepository.findOne({
      name: data.name,
      categoryId: data.categoryId,
    });
    if (course) {
      return {
        error: {
          code: 404,
          message: "El curso ya existe",
        },
      };
    }
    return await courseRepository.save(data);
  } catch (error) {
    return {
      error: {
        code: 400,
        message: error.message,
      },
    };
  }
};
