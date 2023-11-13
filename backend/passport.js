const passport = require('passport');
const InstagramStrategy = require('passport-instagram').Strategy;

passport.use(new InstagramStrategy({
  clientID: '193694740445138',
  clientSecret: '2c910d7ba91506503afabe1c69e3fced',
  callbackURL: 'http://insightsfactory.in/api/user/register/connect-instagram/callback', // Replace with your callback URL
}, (accessToken, refreshToken, profile, done) => {
  // This callback is triggered when the user authorizes your app
  // You can save the Instagram user profile information in your database here
  return done(null, profile);
}));
