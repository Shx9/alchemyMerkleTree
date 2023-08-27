const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const readline = require('readline');

const serverUrl = 'http://localhost:1225';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
   // Ask user for name to check in nice list
   rl.question('Please enter your name: ', async (name) => {

    // Send the name and proof to the server
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      name: name,
    });

    console.log({ gift });

    // Close the readline interface
    rl.close();
  });
}

main();