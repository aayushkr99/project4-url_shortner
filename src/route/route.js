
const express = require('express');


const urlController = require('../controller/urlController.js')
const router = express.Router();

router.post("/url/shorten", urlController.urlShort)
router.get('/:urlCode', urlController.getUrlRedis )


module.exports = router;