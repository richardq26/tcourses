const getConnection = require("../../../database");
module.exports = async (data) => {
  try {
    const connection = await getConnection();
    const categoryRepository = connection.getRepository("Category");
    return await categoryRepository.save(data);
  } catch (error) {
    return {
      error: {
        code: 400,
        message: error.message,
      },
    };
  }
};
