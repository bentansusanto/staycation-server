const Category = require('../models/Category');
const Bank = require('../models/Bank');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
    viewDashboard :(req, res) => {
        res.render('admin/dashboard/dashboard');
    },
    viewCategory : async(req, res) => {
        try{
            const category = await Category.find();
            // console.log(category);
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMessage, status : alertStatus};
            res.render('admin/category/category', {
                category, 
                alert
            });
        }
        catch(error){
            res.render('admin/category/category');
        }
    },
    addCategory : async(req, res) => {
        try{
            const {name} = req.body;
            await Category.create({name});
            req.flash('alertMessage', 'Success add Category');
            req.flash('alertStatus', success);
            res.redirect('/admin/category')
        }
        catch(error){
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/category')     
        }
    },

    editCategory : async(req, res) => {
        try{
            const {id, name} = req.body;
            const category = await Category.findOne({_id:id});
            category.name = name;
            await category.save();
            req.flash('alertMessage', 'Success update Category');
            req.flash('alertStatus', success);
            res.redirect('/admin/category');
        }catch(error){
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/category')     
        }
    },

    deleteCategory : async(req, res) => {
        try{
            const {id} = req.params;
            const category = await Category.findOne({_id : id});
            await category.remove();
            req.flash('alertMessage', 'Success Delete Category');
            req.flash('alertStatus', success);
            res.redirect('/admin/category');
        }catch(error){
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/category')     
        }
    },

    viewHotel :(req, res) => {
        res.render('admin/hotel/hotel');
    },

    // Endpoint Bank
    viewBank : async(req, res) => {
        try{
            const bank = await Bank.find();
            // console.log(category);
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMessage, status : alertStatus};
            res.render('admin/bank/bank', {
                bank, 
                alert
            });
        }catch(error){
            res.render('admin/bank/bank');
        }
    },

    addBank : async(req, res) => {
        try{
            const {nameBank, numberBank, name, imageUrl} = req.body;
            // console.log(req.file);
            await Bank.create({
                nameBank, 
                numberBank, 
                name,
                imageUrl :`images/${req.file.filename}`
            });
            req.flash('alertMessage', 'Success add Bank');
            req.flash('alertStatus', success);
            res.redirect('/admin/bank')
        }catch(error){  
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');   
        }
    },

    editBank : async(req, res) => {
        try{
            const {id, nameBank, numberBank, name} = req.body;
            const bank = await Bank.findOne({_id:id});
            if (req.file == undefined) {
                bank.name = name;
                bank.nameBank = nameBank;
                bank.numberBank = numberBank;
                await bank.save();
                req.flash('alertMessage', 'Success Update Bank');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/bank');
              } else {
                await fs.unlink(path.join(`public/${bank.imageUrl}`));
                bank.name = name;
                bank.nameBank = nameBank;
                bank.numberBank = numberBank;
                bank.imageUrl = `images/${req.file.filename}`
                await bank.save();
                req.flash('alertMessage', 'Success Update Bank');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/bank');
              }
        
        }catch(error){
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank'); 
        }
    },

    deleteBank : async(req, res) => {
        try {
            const {id} = req.params;
            const bank = await Bank.findOne({_id : id});
            await bank.remove();
            req.flash('alertMessage', 'Success Delete Bank');
            req.flash('alertStatus', success);
            res.redirect('/admin/bank');
        } catch (error) {
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank'); 
        }
    },

    // Endpoint Booking
    viewBooking :(req, res) => {
        res.render('admin/booking/booking');
    }
}