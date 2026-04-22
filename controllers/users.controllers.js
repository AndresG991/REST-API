import { db_connect } from '../db.js'

export const getUsers = async (req, res) => {
    const sql = db_connect();
    const query = "SELECT * FROM users";
    const result = await sql.query(query);

    if (result.rows.length === 0) {
        res.json({ message: "No users on database" })
    } else {
        res.json(result.rows);
    }
};

export const getUser = async (req, res) => {
    const sql = db_connect();
    const query = "SELECT * FROM users WHERE id = $1";
    const values = [req.params.id];
    const result = await sql.query(query, values);

    if (result.rows.length > 0) {
        res.json(result.rows[0]);
    } else {
        res.status(404).json({ message: "User not found" });
    };
};

export const postUser = async (req, res) => {
    const sql = db_connect();
    const {username, password} = req.body;
    const query = "INSERT INTO users (username, password) VALUES ($1, $2)";
    const values = [username, password];
    const result = await sql.query(query, values);

    res.json({ message: "User created" });
};

export const putUser = async (req, res) => {
    const sql = db_connect();
    const id = req.params.id
    const {username, password} = req.body;
    const query = "UPDATE users SET username = $1, password = $2 WHERE id = $3";
    const values = [username, password, id];
    const result = await sql.query(query, values);

    res.json({ message: "User updated" });
};

export const deleteUser = async (req, res) => {
    const sql = db_connect();
    const id = req.params.id;
    const query = "DELETE FROM users WHERE id = $1";
    const values = [id];
    const result = await sql.query(query, values);

    res.json({ message: "User deleted" });
};
