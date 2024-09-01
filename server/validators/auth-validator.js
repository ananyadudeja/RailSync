const {z} = require ("zod");

const loginSchema = z.object({
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,{message:"Password must be atleast of 6 characters"})
    .max(1024,{message:"password must not be more than 1024 characters"}),
    

});

//creating an object schema
const signupSchema = loginSchema.extend({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),

    
    phone: z.string().length(10, { message: 'Phone number must be 10 characters' }),
});

// module.exports = {signupSchema,loginSchema};


// Creating an object schema

const feedbackSchema = z.object({
    trainCoachtype: z.string().min(1, 'Train/Coach Type is required'),
    pname: z.string().min(1, 'Passenger Name is required'),
    contact: z.string().min(1, 'Contact is required'),
    pnr: z.string().min(1, 'PNR is required'),
    gender: z.string().min(1, 'Gender is required'),
    coachBerthno: z.string().min(1, 'Coach/Berth No is required'),
    cleanlinessToilets: z.string().min(1, 'Rating is required'),
    cleanlinessArea: z.string().min(1, 'Rating is required'),
    cleanlinessWashbasin: z.string().min(1, 'Rating is required'),
    cleanlinessDustbins: z.string().min(1, 'Rating is required'),
    mosquitoRepelient: z.string().min(1, 'Rating is required'),
    availabilitySoap: z.string().min(1, 'Rating is required'),
    wipingWindowglasses: z.string().min(1, 'Rating is required'),
    staffBehaviour: z.string().min(1, 'Rating is required'),
    additionalComments: z.string().optional()
});



// RegisterSchema
const registerSchema = z.object({
    empname: z.string().min(3, { message: 'Employee Name must be at least 3 characters' }).max(255),
    fathersname: z.string().min(3, { message: 'Father\'s Name must be at least 3 characters' }).max(255),
    dob: z.string().min(3, { message: 'Date of Birth is required' }).max(20),
    gender: z.string().min(1, { message: 'Gender is required' }).max(1024),
    address: z.string().min(6, { message: 'Address must be at least 6 characters' }).max(1024),
    aadhar: z.string().length(12, { message: 'Aadhar number must be 12 characters' }),
    phoneNo: z.string().length(10, { message: 'Phone number must be 10 characters' }),
    pan: z.string().length(10, { message: 'PAN number must be 10 characters' }),
    acc: z.string().min(6, { message: 'Account Number must be at least 6 characters' }).max(20),
    ifsc: z.string().length(11, { message: 'IFSC Code must be 11 characters' }),
    post: z.string().min(1, { message: 'Post is required' }).max(255),
    qual: z.string().min(1, { message: 'Qualification is required' }).max(255),
    pver: z.enum(['Yes', 'No'], { message: 'Police Verification must be either Yes or No' }),
    pverdate: z.string().optional(),
    pvertime: z.string().optional(),
    pverval: z.string().optional(),
    uanno: z.string().min(10, { message: 'UAN Number must be at least 2 characters' }).max(20),
    esicno: z.string().min(10, { message: 'ESIC Number must be at least 2 characters' }).max(20),
    skill: z.string().min(1, { message: 'Skill Level is required' }).max(255),
});


const trainempSchema = z.object({
    supervisorName:  z.string().min(1, 'Supervisor Name is required'),
    trainNo: z.string().min(1, 'Train no is required'),
    date: z.string().min(1, 'Date is required'),
    timeStarted: z.string().min(1, 'Time Started is required'),
    timeEnded: z.string().min(1, 'Time Ended is required'),
    numCoachesRake: z.string().min(1, 'Number Coaches Rake is required'),
    numCoachesAttended: z.string().min(1, 'Number Coaches Attended is required'),
    department: z.string().min(1, 'Department is required'),
    numCoachesAllotted: z.string().min(1, 'Alloted Coaches is required'),
    trainCardObhsDivision: z.string().min(1, 'Train Card OHS Division is required'),
    trainCardObhsRailway: z.string().min(1, 'Train Card OHS Railway is required'),
    
    tableData:z.array(z.object({
    name:z.string().min(1, 'Name is required'),
    designation : z.string().min(1, 'Designation is required'),
    travellingAuthority:z.string().min(1, 'travellingAuthority is required'),
    uniform:z.string().min(1, 'uniform is required'),
    presenceOfStaff:z.string().min(1, 'presenceOfStaff is required'),
    })).nonempty('At least one table row is required'),

    footerData:z.array(z.object({
    brush: z.string().min(1, 'brush is required'),
    mop: z.string().min(1, 'mop is required'),
    toiletBrush:z.string().min(1, 'toiletBrush is required'),
    bucket:z.string().min(1, 'bucket is required'),
    mask:z.string().min(1, 'mask is required'),
    shoes: z.string().min(1, 'shoes is required'),
    other:z.string().min(1, 'other is required')
    })).nonempty('At least one footer row is required'),
});

const salarySchema= z.object({
    empname:  z.string().min(1).max(1024),
    sal: z.number().min(1),
    etf: z.boolean(),
    epf: z.boolean(),
    etfAmount: z.number().optional(),
    epfAmount: z.number().optional(),
    gsal: z.number().optional(),
    allow: z.number().optional(),
    nsal: z.number().optional()
});

const cashSchema = z.object({
    id: z.string().min(1, 'ID is required'),
    empname: z.string().min(1, 'Name is required'),
    cashDeclaration: z.string().min(1, 'Cash Declaration is required'),
    phoneNo: z.string().min(1, 'Phone No. is required'),
    cashInflow: z.string().min(1, 'Cash Inflow is required'),
    uniform: z.enum(['Yes', 'No'], { errorMap: () => ({ message: 'Uniform must be Yes or No' }) }),
    idCard: z.enum(['Yes', 'No'], { errorMap: () => ({ message: 'ID Card must be Yes or No' }) }),
});

const salary2Schema = z.object({
uan:  z.number().optional(),
ecr:  z.number().optional(),
uanrepo:  z.number().optional(),
gross:  z.number().optional(),
epf:  z.number().optional(),
eps:  z.number().optional(),
edli:  z.number().optional(),
ee:  z.number().optional(),
eps:  z.number().optional(),
er:  z.number().optional(),
ncpdays:  z.number().optional(),
refunds:  z.number().optional(),
pensionshare:  z.number().optional(),
erpfshare:  z.number().optional(),
eeshare:  z.number().optional(),
pcstinglo: z.number().optional(),

});




module.exports = {signupSchema,loginSchema, registerSchema, feedbackSchema, trainempSchema, salarySchema, cashSchema};