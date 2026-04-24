import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
  clientId: '<APP_KEY>',
  clientSecret: '<APP_SECRET>',
  refreshToken: '<YOUR_REFRESH_TOKEN>'
});

// The SDK handles the refresh automatically when calling methods
dbx.usersGetCurrentAccount()
  .then(response => console.log(response))
  .catch(error => console.error(error));
