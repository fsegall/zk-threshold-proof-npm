const snarkjs = require('snarkjs');
const fs = require('fs');
const path = require('path');

// Caminhos absolutos para a nova estrutura circuits
const basePath = path.join(__dirname, '../circuits/ageVerifier');

async function generateProof(witness) {
  const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    witness,
    path.join(basePath, 'ageVerifier_js/ageVerifier.wasm'),
    path.join(basePath, 'circuit_final.zkey')
  );

  return { proof, publicSignals };
}

module.exports = { generateProof };

