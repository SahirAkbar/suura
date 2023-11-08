const {z} = require('zod')

// Zod schema for MasjidInfo
 signupSchema = z.object({
  body: z.object({
    email: z.string({ invalid_type_error: 'email should be string', required_error: 'Email is required' }).email('Email is not valid'),
    first_name: z.string({ invalid_type_error: 'First Name should be string', required_error: 'first_name is required' }).nonempty(),
    last_name: z.string({ invalid_type_error: 'last_name should be string', required_error: 'last_name is required' }).nonempty(),
    username: z.string({ invalid_type_error: 'username should be string', required_error: 'username is required' }).nonempty(),
    country: z.string({ invalid_type_error: 'country should be string', required_error: 'country is required' }).nonempty(),
    state: z.string({ invalid_type_error: 'state should be string', required_error: 'state is required' }).nonempty(),
    city: z.string({ invalid_type_error: 'city should be string', required_error: 'city is required' }).nonempty(),
    time_zone: z.string({ invalid_type_error: 'time_zone should be string', required_error: 'time_zone is required' }).nonempty(),
    currency: z.string({ invalid_type_error: 'currency should be string', required_error: 'currency is required' }).nonempty(),
    business: z.string({ invalid_type_error: 'business should be string', required_error: 'business is required' }).nonempty(),
  }),
});
module.exports = signupSchema;