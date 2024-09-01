const User = require("../models/user-model");
const bcrypt = require('bcryptjs');


const Register = require("../models/register-model");
const Feedback = require("../models/feedback-model");
const TrainEmp = require("../models/trainemp-model");
const Salary = require("../models/salary-model");
const CashInFlow = require("../models/cash-model");
const { registerSchema } = require("../validators/auth-validator"); // Update this path to where you have your Zod schema



const home = async (req, res) => {
    try {
        res.status(200).send("Welcome using router");
    } catch (error) {
        console.log(error);
    }
};


// registration logic for Admin for now
const registers = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        });

        res
        .status(201)
        .json({ msg: "registration successfull", 
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
};

// User login logic 
const login = async (req, res) => {
    try{
        const {email, password } = req.body;

        const userExist = await User.findOne({email});

        console.log(userExist);

        if(!userExist) {
            return res.status(400).json({ message : "Invalid Credentials "});
        }

        //const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);


        if(user) {
            res.status(200).json({ 
                message: "Login successfull", 
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),

        });
    } else {
        res.status(500)
        .json({message:"Invalid email or password"});
    }

    }catch(error){
       // res.status(500).json("internal server error");
    next(error);
    }
};

//user logic
const user = async (req, res) => {
    try {
        //const userData = await User.find({});
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData});
    } catch (error) {
        console.log(`error from the user route ${error}`);
        
    }
};





// Function to generate a 6-digit unique ID
const generateEmployeeId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};


// //home logic
// const home = async (req,res) => {
//     try{
//         res.status(200).send("Welcome");

//     }catch(error) {
//         console.log(error);
//     }
// };


// Feedback logic
const submitFeedback = async (req, res, next) => {
    try {
        const {
            trainCoachtype,
            pname,
            contact,
            pnr,
            gender,
            coachBerthno,
            cleanlinessToilets,
            cleanlinessArea,
            cleanlinessWashbasin,
            cleanlinessDustbins,
            mosquitoRepelient,
            availabilitySoap,
            wipingWindowglasses,
            staffBehaviour,
            additionalComments
        } = req.body;
        console.log(req.body);

        // Create a new feedback document
        const newFeedback = new Feedback({
            trainCoachtype,
            pname,
            contact,
            pnr,
            gender,
            coachBerthno,
            cleanlinessToilets,
            cleanlinessArea,
            cleanlinessWashbasin,
            cleanlinessDustbins,
            mosquitoRepelient,
            availabilitySoap,
            wipingWindowglasses,
            staffBehaviour,
            additionalComments
        });

        await newFeedback.save();
        console.log("New feedback saved:", newFeedback);

        res.status(200).send({ message: "Feedback Submitted Successfully" });
    } catch (error) {
        console.error("Error during feedback submission:", error);
        res.status(500).json("Internal server error");
    }
};


//registration logic for employees
const register = async (req, res, next) => {
    try {
        // Validate request body using Zod schema
        const validation = registerSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ message: validation.error.message });
        }

        const {
            empname,
            fathersname,
            dob,
            gender,
            address,
            aadhar,
            phoneNo,
            pan,
            acc,
            ifsc,
            post,
            qual,
            pver,
            pverdate,
            pvertime,
            pverval,
            uanno,
            esicno,
            skill
        } = req.body;

        const registerExist = await Register.findOne({ aadhar });

        if (registerExist) {
            return res.status(400).json({ message: "Registration already exists" });
        }

        // Generate EmployeeId
        const employeeId = generateEmployeeId();
        console.log("Generated Employee ID:", employeeId);

        // Create new registration
        const newRegistration = new Register({
            empname,
            fathersname,
            dob,
            gender,
            address,
            aadhar,
            phoneNo,
            pan,
            acc,
            ifsc,
            post,
            qual,
            pver,
            pverdate: pver === 'Yes' ? pverdate : undefined,
            pvertime: pver === 'Yes' ? pvertime : undefined,
            pverval: pver === 'Yes' ? pverval : undefined,
            uanno,
            esicno,
            skill,
            employeeId
        });

        await newRegistration.save();
        console.log("New registration saved:", newRegistration);

        res.status(200).send({ message: "Registration Successful", employeeId });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



const submitTrainEmp = async (req, res) => {
    try {
        const trainemp = new TrainEmp(req.body);
        await trainemp.save();
        res.status(200).json({ message: 'Train Details submitted successfully' });
    } catch (error) {
        console.error('Error submitting train details:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

const submitSalary = async (req, res) => {
    try {
        const salary = new Salary(req.body);
        await salary.save();
        res.status(200).json({ message: 'Data submitted successfully' });
    } catch (error) {
        console.error('Error saving salary data:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

const submitCash = async (req, res) => {
    const { method } = req;
    console.log(`Method: ${method}, Params: ${req.params}, Body: ${req.body}`); // Debug log

    switch (method) {
        case 'POST':
        try {
            const cashInFlow = new CashInFlow(req.body);
            await cashInFlow.save();
            return res.status(201).json(cashInFlow);
        } catch (error) {
            console.error('Error saving cash inflow data:', error);
            return res.status(500).json({ error: error.message });
        }

        case 'GET':
            try {
                const { id } = req.params;
                console.log(`Fetching data for ID: ${id}`); // Debug log
                const cashInFlow = await CashInFlow.findById(id);
                if (cashInFlow) {
                    return res.status(200).json(cashInFlow);
                } else {
                    return res.status(404).json({ error: 'Data not found' });
                }
            } catch (error) {
                console.error('Error fetching cash inflow data:', error);
                return res.status(500).json({ error: error.message });
            }
            case 'DELETE':
            try {
                const { id } = req.params;
                await CashInFlow.findByIdAndDelete(id);
                return res.status(200).json({ message: 'Cash Inflow data deleted' });
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
            default:
                res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
                return res.status(405).end(`Method ${method} Not Allowed`);
        }
    };

    const submitSalaryTable = async (req, res) => {
        const { method } = req;
    
        switch (method) {
            case 'POST':
            try {
                const salarytable = new salarytable(req.body);
                await salarytable.save();
                return res.status(201).json(salarytable);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
    
            case 'GET':
                try {
                    const salarytable = await salarytable.find();
                    return res.status(200).json(salarytable);
                } catch (error) {
                    return res.status(500).json({ error: error.message });
                }
                case 'DELETE':
                try {
                    const { id } = req.params;
                    await salarytable.findByIdAndDelete(id);
                    return res.status(200).json({ message: 'salarytable data deleted' });
                } catch (error) {
                    return res.status(500).json({ error: error.message });
                }
                default:
                    res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
                    return res.status(405).end(`Method ${method} Not Allowed`);
            }
        };


// module.exports = {home, register, submitFeedback, submitTrainEmp,submitSalary, submitCash, submitSalaryTable};

module.exports = { home, registers,login, user, home, register, submitFeedback, submitTrainEmp,submitSalary, submitCash, submitSalaryTable};
