function dateToTimestamp(dateStr) {
  return Math.floor(new Date(dateStr).getTime() / 1000);
}

async function buildWitness({ birthdate, minAge, currentDate }) {
  return {
    birthdate: dateToTimestamp(birthdate),
    minAge,
    currentDate: dateToTimestamp(currentDate),
  };
}

module.exports = { buildWitness };

