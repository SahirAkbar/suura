const { z } = require("zod");

// Zod schema for MasjidInfo
RegisterSchema = z.object({
  body: z.object({
    email: z
      .string({
        invalid_type_error: "email should be string",
        required_error: "Email is required",
      })
      .email("Email is not valid"),
    password:z.string({invalid_type_error:'Password should be string',required_error:'Password is required'}).min(8,'Password Should be minimum 8 characters long')
  }),
});
module.exports = RegisterSchema;
