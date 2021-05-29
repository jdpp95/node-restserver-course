const { Router } = require('express')
const { 
    userGetResponse, 
    userPostResponse,
    userPutResponse,
    userPatchResponse,
    userDeleteResponse
} = require('../controllers/user.controller')

const router = Router();

router.get('/', userGetResponse);

router.post('/', userPostResponse);

router.put('/', userPutResponse);

router.patch('/', userPatchResponse);

router.delete('/', userDeleteResponse);

module.exports = router;