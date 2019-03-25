const express = require('express');
const app = express();
var knexfile = require('./knexfile.js');
const knex = require('./knex')
app.use(express.json())

app.post('/courses', (req, res)=>{
    knex('courses').insert({name: req.body.name, description: req.body.description})
      .then( (result)=> {
         return res.json({ success: true, message: 'ok' }); 
         }).catch((err)=>{
           return res.json(err)
         })
})

app.get('/courses', (req, res)=> {
    knex('courses').select('*')
        .then((data)=> {
            return res.json(data);
        }).catch((err)=>{
            return res.json("data not found");
        })
})

app.get('/courses/:id', (req, res)=> {
    knex('courses').select('*').where('id',  req.params.id)
        .then((data)=>{
            return res.json(data)
        }).catch((err)=>{
            return res.json("data not found");
        })
})

app.put('/courses/:id', (req, res)=> {
    knex('courses').count('id')
        .then((total)=> {
            if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('description')){
                console.log("dono")
                knex('courses').update({'name': req.body.name, 'description': req.body.description}).where('id', req.params.id)
                    .then((data)=>{ 
                        return res.json("data updated 2")
                    }).catch((err)=> {
                        return res.json("data not updated")
                    }) 
            }
            else if(req.body.hasOwnProperty('name')){
                console.log("ek")
                knex('courses').update('name', req.body.name).where('id', req.params.id)
                    .then((data)=>{
                        return res.json("data updated")
                    }).catch((err)=> {
                        return res.json("data not updated")
                    })
            } else if(req.body.hasOwnProperty('description')){
                knex('courses').update('description', req.body.description).where('id', req.params.id)
                    .then((data)=>{
                        return res.json("data updated d")
                    }).catch((err)=> {
                        return res.json("data not updated")
                    })
                } 
        }).catch((err)=>{
            return res.json("data not found");
        })
})


app.post('/courses/:id/exercises', (req, res)=>{
    knex('exercise').insert({courseId: req.params.id,name: req.body.name, content: req.body.content, hint: req.body.hint})
      .then( (result)=> {
         return res.json({ success: true, message: 'ok' }); 
         }).catch((err)=>{
           return res.json(err)
         })
})


app.get('/courses/:id/exercises', (req, res)=> {
    knex('exercise').select('*').where('courseId', req.params.id)
        .then((data)=> {
            return res.json(data);
        }).catch((err)=>{
            return res.json("data not found");
        })
})


app.get('/courses/:cid/exercises/:eid', (req, res)=> {
    knex('exercise').select('*').where({courseId: req.params.cid , id: req.params.eid})
        .then((data)=> {
            return res.json(data);
        }).catch((err)=>{
            return res.json("data not found");
        })
})

app.put('/courses/:cid/exercises/:eid', (req, res)=> {
    knex('exercise').count('id')
        .then((total)=> {
            if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('content') && req.body.hasOwnProperty('hint')){
                console.log("dono")
                knex('exercise').update({'name': req.body.name, 'content': req.body.content, hint: req.body.hint}).where({courseId: req.params.cid, id: req.params.eid})
                    .then((data)=>{ 
                        return res.json("data updated 2")
                    }).catch((err)=> {
                        return res.json("data not updated")
                    }) 
            }
            else if(req.body.hasOwnProperty('name')){
                console.log("ek")
                knex('exercise').update('name', req.body.name).where({courseId: req.params.cid, id: req.params.eid})                    .then((data)=>{
                        return res.json("data updated")
                    }).catch((err)=> {
                        return res.json("data not updated")
                    })  
            } else if(req.body.hasOwnProperty('content')){
                knex('exercise').update('content', req.body.description).where({courseId: req.params.cid, id: req.params.eid})
                    .then((data)=>{
                        return res.json("data updated d")
                    }).catch((err)=> {
                        return res.json("data not updated")
                    })
            }else if(req.body.hasOwnProperty('hint')){
                    knex('exercise').update('hint', req.body.hint).where({courseId: req.params.cid, id: req.params.eid})
                        .then((data)=>{
                            return res.json("data updated d")
                        }).catch((err)=> {
                            return res.json("data not updated")
                        })
                    }        
        }).catch((err)=>{
            return res.json("data not found");
        })
})

app.post('/courses/:cid/exercises/:eid/submissions', (req, res, next) =>{
    knex('submissions').insert({courseId: req.params.cid,exerciseId: req.params.eid,content: req.body.content, userName: req.body.username})
      .then( (result)=> {
         return res.json({ success: true, message: 'ok' }); 
         }).catch((err)=>{
           return res.json(err)
         })

})

app.get('/courses/:cid/exercises/:eid/submissions', (req, res)=> {
    knex('submissions').select('*').where({courseId: req.params.cid, exerciseId: req.params.eid})
        .then((data)=> {
            return res.json(data);
        }).catch((err)=>{
            return res.json("data not found");
        })
})








app.listen(3000)