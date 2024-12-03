const PagesModel = require("../models/pagesModel");

class HomeController {
  static async getHome(req, res) {
    const result = await PagesModel.selectJoinPagesPosition();

    res.render("home", { pages: result });
  }
}

module.exports = HomeController;
