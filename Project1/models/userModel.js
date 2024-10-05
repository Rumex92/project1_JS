const db = require('../config/database');

class User {
    static async create(name, email, password) {
        try {
            const [result] = await db.query('INSERT INTO users (name, email, password) VALUES (?,?,?)',[name, email, password]);
            return result.insertId;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    static async findAll() {
        try {
            const [rows] = await db.query('SELECT * FROM users');
            return rows;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }

    static async findById(id) {
        try {
            const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            console.error('Error finding user by ID:', error);
            throw error;
        }
    }

    static async update(id, name, email) {
        try {
            await db.query('UPDATE users SET name = ?, email = ? WHERE id =?', [name, email, id]);

        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            await db.query('DELETE FROM users WHERE id=?', [id]);
        }catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
}
module.exports = User;