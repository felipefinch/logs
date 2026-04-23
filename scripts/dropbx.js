const uploadJson = async (data, filename) => {
  const token = 'sl.u.AGdsgu8W7cIR1VYoLN2hQpJvIyaPYAsgofz2ThkbjrLqxIWyKCzsIMUs-762TRCf1bZUJezbaEGOx1OuGcaqrTlP9RfPEHvHjODbhRNEysiPd_v2j-6EeFxuBgUU2LeFVg_kblb5PCxMWwEmYE1T9BD5GYtQs1tMtNabfblbltCCbjGBR44ioKKvAFhAnIb01INgxcFlE4N3oV2k3lT_45kUlxNUNay4zA_0ZfjXPdzTnmUwNIL5BQeGS33WEov7eT04M8JlX-gikNkaLNKqlc3co_gok9_4xNg3gR3LrQudf5lEyWKmQYWGqw1IcgESfRxgFoEa_oOcJ_xvalyHHgWe208a2BbkTyrD16lT-0nOtUDlqKHnhJG3vus7GNJRZyi8kRIkII4nqGQmO3Od-5p9xu9Z2foD1lSQRQ2WbtMQAarnsWnoCcsVoPms2d-atrWATAeXcROilgdSbjHPxzNJe2HvyL0A-JOWda0qoSDOv4JGUJv_9WiLrXuzrZn8v0LPxD88RywkL0aSR2WTtdE4LqSR6RT0ys2K__epWkyJAGfbmw9o-QyP1XcKEF3L5gZD62jv32ra6Oj5bq8tN5cuG65maFBdYzsf36MzHtHrVW-_UbzePd5K3sQZaQXCSiffNbV7wC9fc-YQGIwxlwzsVuA1m_iztpp_Q7AONlYN7CwmjvD-l2LI8iKxaYVR0NhOnEzDJU_aELKDu_zpZoU-Y5GBB7ecDHOuCJozOson3uHw-oDKAMFlnE8LnhUgKFNyB2VruXN3ael997tH_8cv4YUCDyrYfTlZvqxM590mjBY3y9qqMO808OdOCciG8pk0F6GBeSCrB86XL6QEsfH_9WlhH38T18DlBJ4BNUFFfGYaXoDNZVtp5t2rOrfbSGVULhQxXUUh067Sgw85L1r9hYLZlQk8b30sRBqFwiBMyrZEwM2Le54Alzu6i1UsmPU9f6YdKThp2lRJZmyJhfZOs-T3dGGplaDhdJi9ing-z5nCPZeLx0rXvRilFTOvE0Ir0VzojO06bPexRZxI4HxmpcF6cwQlXQzSK0BcbzHfv7A5WplLY7ADdLveYPOt_2MQFCjaDCJp3N_qzAw5uXCbAyFpEuhshsf2o0ArWIubqMI9FizmzZM-TF9RjkTtScA0a5dE7K8VqfbNxkoS4CY77dr0ju0CtSHXIYXOK1NYzHgdJx-1y6ihsZn3RH_tx8kMoLekrIYHJH7wogzg7MXn0ZXs8EctuMFgtLybCgXaB_stG-CJkSVaMghlPzoa9ZSmeT7yCaKdGAjXFzu7fJDU';
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

uploadJson({
  "name": "John Doe",
  "age": 30,
  "isEmployee": true,
  "department": null
}, "my_file.json");
