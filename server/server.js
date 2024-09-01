require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require ("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const { required } = require("./validators/auth-validator");

// const errorMiddleware = require("./middlewares/error-middleware");
const feedbackMiddleware = require("./middlewares/feedback-middleware");
const trainempMiddleware = require("./middlewares/trainemp-middleware");
const salaryMiddeware = require("./middlewares/salary-middleware");
const validateMiddleware = require("./middlewares/validate-middleware");
const cashMiddleware = require("./middlewares/cash-middleware");
const employeeRouter = require("./router/auth-router");



//lets tackle cors

const corsOption = {
    origin:"http://localhost:5173",
    methods : "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOption));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);
// app.use(required);

//lets define the admin route
app.use("/api/admin", adminRoute);
app.use('/api/auth', employeeRouter);


app.use(errorMiddleware);
// app.use(errorMiddleware);
app.use(feedbackMiddleware);
app.use(trainempMiddleware);
app.use(salaryMiddeware);
app.use(validateMiddleware);
app.use(cashMiddleware);



const PORT = 8000;
connectDb().then(() =>{
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
});

