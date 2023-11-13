const {generateErrorMessage} = require('zod-error')
const options  = {
  delimiter: {
    error: " error ",
  },
  code: {
    enabled: false,
  },
  path: {
    enabled: false,
  },
  maxErrors: 1,
  transform: ({ errorMessage, index }) => `  ${errorMessage}`,
};
const validate =
  (schema) =>
  (req, res, next) => {
    try {
      const result = schema.safeParse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      if (!result.success) {
        const errorMessage = generateErrorMessage(result.error.issues, options);
        console.log("errorMessage", errorMessage);
        return res.status(400).send(errorMessage);
      }
      next();
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: error });
    }
  };
module.exports = validate;
