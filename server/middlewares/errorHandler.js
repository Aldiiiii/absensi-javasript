async function errorHandler(err, req, res, next){
    let code = 500
    let message = 'Internal Server Error'

    if(err.name === 'error invalid username or email or password'){
        code = 401
        message = err.name
    }else if(err.name === 'SequelizeValidationError'){
        code = 400
        message = err.errors.map(el => { return el.message})
    }else if(err.name === 'unauthenticated' || err.name === 'JsonWebTokenError'){
        code = 401
        message = 'Invalid Token'
    }else if(err.name === 'Data Not Found'){
        code = 404
        message = err.name
    }else if(err.name === 'Forbidden'){
        code = 403
        message = err.name
    }else if(err.name === 'Email or Password cannot be null' || "Update fail" || "Delete fail"){
        code = 400
        message = err.name
    }else if(err.name === 'email already exists'){
        code = 400
        message = err.name
    }else if(err.name === 'Error Not Found'){
        code = 404
        message = err.name
    }
    res.status(code).json({message})
}

module.exports = errorHandler