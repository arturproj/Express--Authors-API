const express = require('express');
const app = express();
const port = 3000;

const list = [
    {
        name:"Lawrence Nowell",
        nationality: "UK",
        books :[
            "Beowulf",
        ]
    },{
        name:"William Shakespeare",
        nationality: "UK",
        books :[
            "Hamlet", "Othello", "Romeo and Juliet", "MacBeth"
        ]
    },{
        name:"Charles Dickens",
        nationality: "US",
        books :[
            "Oliver Twist", "A Christmas Carol"
        ]
    },{
        name:"Oscar Wilde",
        nationality: "UK",
        books :[
            "The Picture of Dorian Gray", "The Importance of Being Earnest"
        ]
    },
    
];
////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    console.log('GET', req.url)
    res.send('<b>Authors API</b>');
});
app.get('/json', (req, res) => {
    console.log('GET', req.url)
    res.json(list);
});

app.get('/authors/:id', (req, res) => {
    
    const value = list[Number(req.params.id)-1];
    console.log('GET', req.url, req.params, value)
    if(value !== 'undefined') {
        res.json({name : value.name ,nationality : value.nationality });
    }else{
        res.send(`<b>The author with the ID ${req.params.id} does not exist</b>`);
    }
    
});

app.get('/authors/:id/books', (req, res) => {
    console.log('GET', req.url, req.params, list[Number(req.params.id)-1].books)
    res.json({books : list[Number(req.params.id)-1].books});
});

app.get('*', (req, res) => {
    console.log('GET', req.url)
    res.json({status : 404, message : "Page not found"});
});

////////////////////////////////////////////////////////////////
app.put('*', (req, res) => {
    console.log('GET', req.url)
    res.json({status : 404, message : "Page not found"});
});

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});