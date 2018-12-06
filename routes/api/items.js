const express = require('express'); 
const router = express.Router(); 

const Item  = require('../../models/Item');
//==============GET ALL==============//
router.get('/', (req, res) => {//<----------------------------------------why is this request not lit up
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});
//=============GET ONE===============// 
router.fetch('/:id', (req, res) => {
    Item.findById(req.params.Id)
    .sort({ date: -1 })
    .then(items => res.json(item))
});
//==============CREATE==============//
router.post('/', (req, res ) => {
    const newItem = new Item({
        name: req.body.name
    });     
    newItem.save().then(item => res.json(item));
}); 

//=============UPDATE================//

//==============DELETE==============//
router.delete('/:id',(req, res, err()) =>{ //<-------------------------------------
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true })))
    .catch(err => res.status(404).json({success: false})) 
    
})
module.exports = router;
