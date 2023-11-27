const { z } = require("zod");

// Zod schema for MasjidInfo
searchByUsernameSchema = z.object({
  query: z.object({
    username: z
      .string({
        invalid_type_error: "Username Should be string",
        required_error: "username  is required",
      }).min(2,'username Min length Should be 2')
      
  }),
});
module.exports = searchByUsernameSchema;
