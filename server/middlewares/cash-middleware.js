const validateCash = (cashSchema) => async (req, res, next) => {
    try {
        const parsedBody = await cashSchema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (err) {
        const status = 422;
        const message = 'Fill the input properly';
        const extraDetails = err.errors && err.errors.length > 0 ? err.errors[0].message : 'Invalid input';
        const error = {
            status,
            message,
            extraDetails,
        };

        console.log("Validation error",error);
        //next(error);
        res.status(status).json(error);
    }
};

module.exports = validateCash;