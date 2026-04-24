const uploadJson = async (data, filename) => {
  const token = 'access_token';
  const metadata = {
    path: `/${filename}`,
    mode: 'add',
    autorename: true
  };

  try {
    const response = await fetch('https://content.dropboxapi.com/2/files/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/octet-stream',
        'Dropbox-API-Arg': JSON.stringify(metadata)
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log('Upload Result:', result);
  } catch (err) {
    console.error('Upload failed:', err);
  }
};

// uploadJson({
//   "name": "Peter Legs",
//   "age": 30,
//   "isEmployee": true,
//   "department": null
// }, "my_file.json");
