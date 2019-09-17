const blake2 = require('blake2');
console.log('ExecPath', process.execPath);

process.on('message', (m) => {
  console.log('Got message:', m);
  const h = blake2.createHash('blake2b', {digestLength: 32});
  h.update(Buffer.from(m));
  process.send(`Hash of ${m} is: ${h.digest('hex')}`);
});