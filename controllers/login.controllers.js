import { db_connect } from "../db.js";

export const login = async (req, res) => {
    const sql = db_connect();
    const {username, password} = req.body;
    const query = "SELECT * FROM users WHERE username = $1";
    const values = [username];
    const result = await sql.query(text, values);

    if (result.rows.length > 0) {
        if (result.rows[0].password === password) {
            res.status(200).json({ isLogin: true, user:result.rows[0] })
        } else {
            res.status(401).json({ isLogin: false, user: {} })
        }
    } else {
        res.status(404).json({ isLogin: false, user: {} })
    }
}