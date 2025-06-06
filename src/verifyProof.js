const snarkjs = require('snarkjs');
const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '../circuits/ageVerifier');

async function verifyProof(proof, publicSignals) {
  const vKey = JSON.parse(
    fs.readFileSync(path.join(basePath, 'verification_key.json'))
  );
  return await snarkjs.groth16.verify(vKey, publicSignals, proof);
}

module.exports = { verifyProof };
