// import React from 'react';
 import './Home.css';  // Make sure this file exists for styling

export const Home = () => {
return (
<div className="home-container">
 
    {/* <header>
    <h1>Welcome to Railsync</h1>
    <p>Railsync is your one-stop solution for comprehensive railway management services. Our platform offers a wide range of tools to help streamline operations, manage staff, and ensure efficient scheduling and salary calculations.</p>
    </header> */}
    
    
    {/* <section className="service">
    <div className="service-left">
        <img src="/images/feedback.png" alt="Feedback" />
    </div>
    <div className="service-right">
        <h2>Feedback</h2>
        <p>Our Feedback service allows you to gather valuable insights from your customers and staff. Use our tools to create custom surveys, analyze responses, and make informed decisions to improve your services.</p>
    </div>
    </section> */}
    

    <section className="service">
    <div className="service-right">
        <img src="/images/train-edited.png" alt="Train" />
    </div>
    <div className="service-left">
        <h2>A one-stop solution for comprehensive railway contractual staff management</h2>
        <p>Facilitates streamlining operations by managing staff and ensure efficient staff scheduling and their salary calculations.</p>
    </div>
    </section>

    {/* <section className="service">
    <div className="service-right">
        <img src="/images/registeration.png" alt="Registration Form" />
    </div>
    <div className="service-left">
        <h2>Registration Form</h2>
        <p>Our Registration Form service makes it easy to register new users and manage their information. Customize forms to fit your needs, and streamline the onboarding process with our efficient tools.</p>
    </div>
    </section> */}

    <section className="service">
    <div className="service-left">
        <img src="/images/staff.jpg" alt="Staff Details" />
    </div>
    <div className="service-right">
        <h2>Staff Details</h2>
        <p>Provides a comprehensive database for managing employee information. Store and access details such as contact information, job roles, and performance records securely and efficiently.</p>
    </div>
    </section>

    
    <section className="service">
    <div className="service-right">
        <img src="/images/schedule.png" alt="Staff Scheduling" />
    </div>
    <div className="service-left">
        <h2>Staff Scheduling</h2>
        <p>Helps organize and manage shifts, meetings, and other events. Create and share schedules with ease, and keep everyone on the same page with our intuitive tools.</p>
    </div>
    </section>
    
    <section className="service">
    <div className="service-left">
        <img src="/images/salary.png" alt="Staff Salary Details" />
    </div>
    <div className="service-right">
        <h2>Staff Salary Details</h2>
        <p>Helps manage payroll efficiently. Calculate salaries, bonuses, and deductions with ease, and ensure accurate and timely payments to your staff.</p>
    </div>
    </section>


    
    {/* <section className="service">
    <div className="service-right">
        <img src="/images/train.png" alt="Train" />
    </div>
    <div className="service-left">
        <h2>Train</h2>
        <p>Our Train service offers tools and resources for staff training and development. Create training programs, track progress, and ensure your team has the skills they need to succeed.</p>
    </div>
    </section> */}
</div>
);
};