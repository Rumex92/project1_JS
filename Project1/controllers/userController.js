const User = require('../models/userModel');

exports.index = async (req, res) => {
    const users = await User.findAll();
    res.render('users/list', {users} );
};

exports.showCreateForm = (req,res) => {
    res.render('users/create');
};

exports.create = async (req, res) => {
    const{ name, email, password } = req.body;
    await User.create(name, email, password);
    res.redirect('/users');
};

exports.showEditForm = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/edit', {user });
};

exports.update = async (req, res) => {
    const { name, email } = req.body;
    await User.update(req.params.id, name, email);
    res.redirect('/users');
};

exports.delete = async (req, res) =>{
    await User.delete(req.params.id);
    res.redirect('/users');
};