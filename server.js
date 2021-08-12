
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favoriteFood = process.env.AWS_MEDIA_BUCKET;
  
  while(true) {
    console.log(`My favorite food is ${favoriteFood}`);
    await sleep(5000);
  }
}

main();
