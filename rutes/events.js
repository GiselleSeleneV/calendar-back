/* Ruta para eventos del calendario /api/events */
const { Router } = require('express')
const { validateJWT } = require('../middlewares/validateJwt');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controlers/events');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use(validateJWT);

router.get('/', validateJWT, getEvents);

router.post(
    '/',
    [
        check('title', 'El título es un campo obligatorio.').not().isEmpty(),
        check('start', 'La fecha de inicio es un campo obligatorio.').custom(isDate),
        check('end', 'La fecha de finalización es un campo obligatorio.').custom(isDate),

        validateFields
    ],
    validateJWT,
    createEvent
);


router.put('/:id',
    [
        check('title', 'El título es un campo obligatorio.').not().isEmpty(),
        check('start', 'La fecha de inicio es un campo obligatorio.').custom(isDate),
        check('end', 'La fecha de finalización es un campo obligatorio.').custom(isDate),

        validateFields
    ],
    validateJWT,
    updateEvent
);

router.delete('/:id', validateJWT, deleteEvent);

module.exports = router;