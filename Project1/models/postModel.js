const db = require('../config/database');

class Post {

    static async create(userId, title, content, photo, categoryId) {
        try {
            const [result] = await db.query(
               'INSERT INTO posts (user_id, title, content, photo ,category_id) VALUES (?,?,?,?,?)',
               [userId, title, content, photo, categoryId]
            );
            return result.insertId;
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

    static async findAll(){
        try {
            const[rows] = await db.query(
                'SELECT posts. *, users.name AS author,  categories.name AS category FROM posts JOIN users ON posts.user_id = users.id JOIN categories ON posts.category_id = categories.id'
            );
            return rows;
        } catch (error) {
            console.error('Error fetching posts', error);
            throw error;
        }
    }

    static async findById(id) {
        try {
            const [rows] = await db.query(
                'SELECT posts.*, users.name AS author, categories.name AS category FROM posts JOIN users ON posts.user_id = users.id JOIN categories ON posts.category_id = categories.id WHERE posts.id = ?', [id]
            );
            return rows[0];
        } catch (error) {
            console.error('Error finding post by ID:', error);
            throw error;
        }
    }

    static async update(id, title, content, photo, categoryId) {
        try {
            if (photo) {
                await db.query(
                    'UPDATE posts SET title = ?, content = ?, photo = ?, category_id = ? WHERE id = ?',
                    [title, content, photo, categoryId, id] 
                );
            } else {
                await db.query(
                    'UPDATE posts SET title = ?, content = ?, category_id = ? WHERE id = ?',
                    [title, content, categoryId, id] 
                );
            }
        } catch (error) {
            console.error('Error updating post:', error);
            throw error;
        }
    }
    

    static async delete(id) {
        try {
            await db.query('DELETE FROM posts WHERE id = ?', [id]);
        } catch (error) {
            console.error('Error deleting post:', error);
            throw error;
        }
    }
}

module.exports = Post;