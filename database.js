var pgp = require('pg-promise')();
var access = process.env.getDb;
console.log(access);
var db=pgp(access)

function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
module.exports = {
    getAllProducts}