const client = require('frappejs/client');

// start server
client.start({
    columns: 3,
    server: 'localhost:8000'
}).then(() => {

    // require modules
    frappe.registerModels(require('../models'));

    frappe.registerView('List', 'ToDo', require('frappejs/models/doctype/ToDo/ToDoList.js'));
    frappe.registerView('List', 'Account', require('../models/doctype/Account/AccountList.js'));
    frappe.registerView('Form', 'Account', require('../models/doctype/Account/AccountForm.js'));
    frappe.registerView('List', 'Invoice', require('../models/doctype/Invoice/InvoiceList.js'));

    frappe.desk.menu.addItem('ToDo', '#list/ToDo');
    frappe.desk.menu.addItem('Accounts', '#list/Account');
    frappe.desk.menu.addItem('Items', '#list/Item');
    frappe.desk.menu.addItem('Customers', '#list/Customer');
    frappe.desk.menu.addItem('Invoice', '#list/Invoice');

    frappe.router.default = '#list/ToDo';

    frappe.router.show(window.location.hash);
});

module.exports = false;