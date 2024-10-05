const Category = require('../models/categoryModel');

exports.index = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.render('categories/list', { categories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).send('Error fetching categories');
    }
};

exports.showCreateForm = (req, res) => {
    res.render('categories/create');
};

exports.create = async (req, res) => { 
    const { name } = req.body;
    try {
        await Category.create(name);
        res.redirect('/categories');
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).send('Error creating category');
    }
};

exports.delete = async (req, res) => {
    try {
        await Category.delete(req.params.id);
        res.redirect('/categories');
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).send('Server Error');
    }
};
