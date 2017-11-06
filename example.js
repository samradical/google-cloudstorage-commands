const GOOGLE = require('./index')
var fs = require('fs');
var path = require('path');
const BUCKET_NAME = 'orchard-lane/'
const BUCKET = `gs://${BUCKET_NAME}`
/*
return GOOGLE.upload("some/directory", "gs://soe_bucket/path...", force: boolean)
  .then(() => {})
  .catch(err => {
    console.log(err);
  })
*/
  return GOOGLE.cors(BUCKET)
  .then(() => {})
  .catch(err => {
    console.log(err);
  })

return GOOGLE.publicRead(BUCKET)
  .then(() => {})
  .catch(err => {
    console.log(err);
  })
