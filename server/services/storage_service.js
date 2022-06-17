const { Player, Salary } = require('../db/models');

class StorageService {

  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    //TODO 1: Use Player sequelize model to retrieve the specific player
    return await Player.findAll({
      where: {
        player_id: player_id
      }
    });
  };

  createPlayer = async player => {
    //TODO 2: Use Player sequelize model to create a player
    await Player.create({
      "player_id": player.player_id,
      "player_name": player.player_name,
      "age": player.age,
      "position": player.position,
      "country": player.country
    });
  };

  createSalary = async salary => {
    //TODO 4: Use Salary sequelize model to create a salary
    await Salary.create({
      "start_date": salary.start_date,
      "end_date": salary.end_date,
      "amount": salary.amount,
      "player_id": salary.player_id
    })
  };

  getSalary = async (salary_id) => {
    //TODO 5: Use Salary sequelize model to get salary
    return await Salary.findAll({
      where: {
        id: salary_id
      }
    });
  };


}

module.exports = new StorageService();
