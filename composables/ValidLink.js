async function isValid (url) {
  try {
    const get = await fetch(url, { method: 'HEAD' });
    return get.ok;
  }
  catch(error) {
    return false;
  }
}
const inputPromise = new Promise((resolve) => {
  console.log('Please input: ');
  process.stdin.on('data', (data) => {
    resolve(data);
  })
})

process.stdin.setEncoding('utf-8');
inputPromise.then(data => isValid(data))
  .then(valid => { console.log(`status: ${valid}`)})
  .finally(() => process.exit());
