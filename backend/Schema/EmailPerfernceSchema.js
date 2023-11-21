const { z } = require("zod");
const EmailPreferencesSchema =
  z.object({
    body: z.object({
      preferences: z.array(
        z.enum([
          'Marketing',
          'Payments',
          'Support',
          'Messages',
          'Job Postings',
          'Profile Suggestions',
          'Project Management',
          'Availability Reminders',
          'Suura Pro',
        ])
      )
    })
});
module.exports = EmailPreferencesSchema;