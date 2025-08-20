/*
   Rutas de usurios /Auth
   host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();
const { validateFields } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJwt')
const { createUser, userLogin, revalidateToken } = require('../controlers/auth');


router.post(
    '/new',
    [
        //middlewares para validacion de campos
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener mas de 6 caracteres').isLength({
            min: 6
        }),
        validateFields
    ],
    createUser
);

router.post(
    '/',
    [
        //middlewares para validacion de campos
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener mas de 6 caracteres').isLength({
            min: 6
        }),
        validateFields
    ],
    userLogin
);

router.get('/renew', validateJWT, revalidateToken);

module.exports = router;