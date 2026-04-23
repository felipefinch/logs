const ACCESS_TOKEN = 'YOUR_DROPBOX_ACCESS_TOKEN';
const jsonData = { name: "John Doe", status: "active" };

const uploadJsonToDropbox = async (data, filename) => {
  const url = 'https://content.dropboxapi.com/2/files/upload';
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Dropbox-API-Arg': JSON.stringify({
        path: `/Data/${filename}.json`, // Destination folder and filename
        mode: 'overwrite',             // Overwrites if the file exists
        autorename: true,
        mute: false
      }),
      'Content-Type': 'application/octet-stream'
    },
    body: JSON.stringify(data) // The JSON data itself
  });

  const result = await response.json();
  console.log('Upload successful:', result);
};

uploadJsonToDropbox(jsonData, 'user_data');