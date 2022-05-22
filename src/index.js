const mongoose = require("mongoose")
const app = require('./expressServer.js');

mongoose.connect("mongodb+srv://disha123:hl6LMcJIED1eCZhr@cluster0.hrerz.mongodb.net/group66Database", {useNewUrlParser: true})
.then(()  => console.log('monogodb running on 3000'))
.catch(err => console.log(err))