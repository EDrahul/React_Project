const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id:123 ,firstName: 'Hardik' , lastName: 'S' },
    {id:222 ,firstName: 'Pranay' , lastName: 'D' },
    {id:333 ,firstName: 'Chetan' , lastName: 'H' },
    {id:444 ,firstName: 'Rahul' , lastName: 'S' },
  ];

  res.json(customers);
});

const port = 9000;

app.listen(port, () => `Server running on port ${port}`);