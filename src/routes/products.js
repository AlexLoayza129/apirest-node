const { Router } = require('express');
const fs = require('fs'); // Require FileSystem
const router = Router();

const products = require('../../products.json');
const productsList = [...products];

router.get('/', (req,res) => {
    res.json(productsList);
});

router.post('/', (req,res) => {
    const { name, description, category, url } = req.body;

    if( name && description && category && url){
        const id = products.length + 1;
        let object = {id,...req.body}

        productsList.push(object);
        const json = JSON.stringify(productsList);

        fs.writeFileSync('products.json', json, 'utf-8');

        console.log('=========================================');
        console.log('======¡Se ha guardado el producto!=======');
        console.log('=========================================');

        res.send('Se ha guardado el producto!');

    }else{
        res.status(500).json('There was an error!')
    }
})

router.options('/', (req,res) => {
    const { name, description, category, url } = req.body;
    console.log(req.body)

    if( name && description && category && url){
        const id = products.length + 1;
        let object = {id,...req.body}

        productsList.push(object);
        const json = JSON.stringify(productsList);

        fs.writeFileSync('products.json', json, 'utf-8');

        console.log('=========================================');
        console.log('======¡Se ha guardado el producto!=======');
        console.log('=========================================');
        
        res.send('Se ha guardado el producto!');

    }else{
        res.status(500).json('There was an error!')
    }
})

module.exports = router;
