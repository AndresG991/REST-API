import { db_connect } from '../db.js'

export const getGameUser = async (req, res) => {
    const sql = db_connect();
    const query = "SELECT id, username FROM users WHERE id = $1";
    const values = [req.params.id];
    const result = await sql.query(query, values);

    if (result.rows.length > 0) {
        res.json(result.rows[0]);
    } else {
        res.status(404).json({ message: "User not found" });
    };
};
