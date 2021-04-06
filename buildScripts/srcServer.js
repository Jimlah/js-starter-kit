import express from 'express';

import { join } from 'path';

import open from 'open';

/** eslint-disable no-console */

const port = 3000;
const server = express();

server.get('/', (req, res)=>{
  res.sendFile(join(__dirname, '../src/index.html'));
})

server.listen(port, (err)=>{
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
    console.log('Server listening on port ' + port)

  }
})

