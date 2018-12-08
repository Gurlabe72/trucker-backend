const express = require('express'); 
const router = express.Router(); 

const Item  = require('../../models/Item');
//==============GET ALL==============//
router.get('/', (req, res) => {

});
//=============GET ONE===============// 
router.put('/:id', (req, res) => {
    Item.findById(req.params.id)
    .sort({ date: -1 })
    .then(item => res.json(item))
});
//==============CREATE==============//
router.post('/', (req, res ) => {
    const newItem = new Item({
        comment: req.body.comment
    });     
    newItem.save().then(item => res.json(item));
}); 
//=============UPDATE================//

//==============DELETE==============//
router.delete('/:id',(req, res) =>{ 
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true })))
    .catch(() => res.status(404).json({success: false })) 
    
})
module.exports = router;
