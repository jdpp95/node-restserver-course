const { response } = require('express')

const userGetResponse = (req, res = response) => {

    const {q, name='No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        name,
        apikey,
        page,
        limit
    })
}

const userPostResponse = (req, res = response) => {

    const { name, age } = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        name,
        age
    })
}

const userPutResponse = (req, res = response) => {

    const { id } = req.params;

    res.status(400).json({
        msg: 'put API - controller',
        id
    })
}

const userPatchResponse = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    })
}

const userDeleteResponse = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}

module.exports = {
    userGetResponse,
    userPostResponse,
    userPutResponse,
    userPatchResponse,
    userDeleteResponse
}