const { generateProof, verifyProof } = require('@semaphore-protocol/proof');
const { Semaphore } = require('@semaphore-protocol/core');

async function createSemaphoreProof(identity, groupId, externalNullifier, signal) {
  const group = new Semaphore(groupId);
  group.addMember(identity.commitment);

  const fullProof = await generateProof(
    identity,
    group,
    externalNullifier,
    signal
  );

  return fullProof;
}

async function verifySemaphoreProof(fullProof) {
  return verifyProof(fullProof);
}

module.exports = {
  createSemaphoreProof,
  verifySemaphoreProof,
};
