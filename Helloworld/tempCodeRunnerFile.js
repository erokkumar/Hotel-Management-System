
    // app.get('/menu', async (req, res) => {
    //   try {
    //     const menuIt  = await MenuItem.find();
    //     res.json(menuIt);
    //   } catch(error){
    //     console.error('Error fetching menu items:', error);
    //     res.status(500).json({ error: 'Internal server error' });
    //   }
    // })

    // app.post('/menu', async (req, res) => {
    //   try {
    //     const menuItemdata = req.body;
    //     const newmenu = new Menu(menuItemdata);
    //     const menu_data = await newmenu.save();
    //     console.log('Menu item saved');
    //     res.status(201).json(menu_data); 

    //   }catch(err){
    //     console.error('Error creating menu item:', error);
    //     res.status(500).json({ error: 'Internal server error' });
    //   }
    // })