/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/

module.exports = {
  // Find the appropriate database to connect to, default to localhost if not found.
  db: process.env.DATABASE_URL || 'postgres://:@localhost:5432/donotpay',
  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',
  jsonWebTokenSecret: process.env.JSON_WEB_TOKEN_SECRET || 'Your JSON web token secret goes here',
  clefAppID: process.env.CLEF_APP_ID || "d5c497d85f986be65471108f722d2a0a",
  clefAppSecret: process.env.CLEF_APP_SECRET || "cfd75eb01aa935c23c75519403340e43"
};
