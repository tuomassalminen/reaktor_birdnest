const resetDatabase = async (db) => {
  db.Pilot.destroy({
    where: {},
    truncate: true
  });
};

module.exports = {
  resetDatabase
};