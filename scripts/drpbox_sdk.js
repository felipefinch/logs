const { Dropbox } = require('dropbox');

const dbx = new Dropbox({
  clientId: '<DROPBOX_APP_KEY>',
  clientSecret: '<DROPBOX_APP_SECRET>',
  refreshToken: '<DROPBOX_REFRESH_TOKEN>'
});

// The SDK handles the refresh automatically when calling methods
dbx.usersGetCurrentAccount()
  .then(response => console.log(response))
  .catch(error => console.error(error));
