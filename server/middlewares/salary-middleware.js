const validateSalary = (salarySchema) => async (req, res, next) => {
    console.log('Request Body:', req.body);  // Add this line to debug
    try {
        const parsedBody = await salarySchema.parseAsync(req.body);
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

        console.log('Validation Error:', error);  // Add this line to debug
        next(error);
    }
};

module.exports = validateSalary;
