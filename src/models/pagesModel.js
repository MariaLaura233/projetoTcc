const { deletePage } = require("../controllers/admin/pagesController");
const database = require("../database/database");

class PagesModel {
  static async selectAllPages() {
    const selectAllPages = "SELECT * pages;";
    const [result] = await database.query(selectAllPages);

    return result;
  }

  static async selectPageById(page_id) {
    const selectAllPages = "SELECT * FROM pages WHERE pages_id = ?;";
    const [[result]] = await database.query(selectAllPages, [page_id]);

    return result;
  }

  static async insertPages(page) {
    const { page_title, page_status, page_content, position_position_id } =
      page;
    const insertPages = `INSERT INTO pages (page_title, page_status, page_content, position_position_id) VALUES (?, ?, ?, ?);`;
    const [result] = await database.query(insertPages, [
      page_title,
      page_status,
      page_content,
      position_position_id,
    ]);

    return result;
  }
  static async updatePage(page_id, page) {
    const { page_title, page_status, page_content, position_position_id } =
      page;
    const insertPages = `UPDATE pages SET page_title = ?, page_status = ?, page_content = ?, position_position_id = ? WHERE pages_id = ?;`;
    const [result] = await database.query(insertPages, [
      page_title,
      page_status,
      page_content,
      position_position_id,
      page_id,
    ]);

    return result;
  }

  static async deletePage(page_id) {
    const insertPages = `DELETE FROM pages WHERE pages_id = ?;`;
    const [result] = await database.query(insertPages, [page_id]);

    return result;
  }
  static async selectJoinPagesPosition() {
    const selectJoin = `SELECT  p.pages_id, p.page_title, p.page_status, p.page_content, p.page_date, pos.position_name, pos.position_date
                            FROM login_register_system.pages p 
                            JOIN login_register_system.position pos
                            ON p.position_position_id = pos.position_id;`;
    const [result] = await database.query(selectJoin);

    return result;
  }
  static async selectJoinPagesPositionById(id) {
    const selectJoin = `SELECT pages.pages_id,
                                   pages.page_title,
                                   pages.page_content,
                                   position.position_id,
                                   position.position_name
                            FROM
                                   login_register_system.pages
                            JOIN
                                  login_register_system.position
                                  ON pages.position_position_id = position.position_id
                            WHERE
                                pages.pages_id = ?;
                                 `;
    const [[result]] = await database.query(selectJoin, [id]);

    return result;
  }
}

module.exports = PagesModel;
