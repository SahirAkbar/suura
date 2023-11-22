const { z } = require("zod");

// Zod schema for MasjidInfo
const updateProfileSchema = z.object({
  body: z.object({
    first_name: z.string().min(1).max(50),
    last_name: z.string().min(1).max(50),
    username: z.string().min(3).max(30),
    contactnumber: z.string().min(10).max(15), // You may need to adjust the min and max based on your requirements for phone numbers
    portfolioUrl: z.string().url(),
    state: z.string().min(1).max(30),
    city: z.string().min(2).max(30),

    time_zone: z.string().min(1).max(50),
    currency: z.string().min(1).max(10),
  }),
});
module.exports = updateProfileSchema;
