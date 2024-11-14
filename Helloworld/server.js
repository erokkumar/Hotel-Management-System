const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // stored data in req.body
//const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');


app.get('/',function (req,res) {
    res.send('Welcome to my hotel how i can help you')
})

app.post('/person',async(req,res) =>{
      try{
        const data = req.body;

        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
      }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
      }
  })

  app.get('/person', async (req, res) => {
    try{
      const data = await Person.find();
      console.log('data fatched');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Not fatched to find data'});
    }
    }) 

    app.get('/menu', async (req, res) => {
      try {
        const menuIt  = await MenuItem.find();
        res.json(menuIt);
      } catch(error){
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    })

    app.post('/menu', async (req, res) => {
      try {
        const menuItemdata = req.body;
        const newmenu = new MenuItem(menuItemdata);
        const menu_data = await newmenu.save();
        console.log('Menu item saved');
        res.status(201).json(menu_data); 

      }catch(error){
        console.error('Error creating menu item:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    })



app.listen(3000, ()=> {
  console.log('listening on port 3000');
})