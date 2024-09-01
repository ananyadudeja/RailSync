// import {useAuth} from '../store/auth';

export const Service = () => {
    
    // const services = useAuth();
    // console.log(services);

    // return (
    //     <section className="section-services">
    //         <div className="container">
    //             <h1 className="main-heading">Services</h1>
    //         </div>

    //         <div className="container grid grid-three-cols">
    //             {services.map((curElem, index) => {
    //                 return (
    //                     <div className="card" key={index}>
    //                         <div className="card-img">
    //                             <img src="/images/design.png" alt="designer" width="200" />
    //                         </div>

    //                         <div className="card-details">
    //                             <div className="grid grid-two-cols">
    //                                 <p>{curElem.provider}</p>
    //                                 <p>{curElem.price}</p>
    //                             </div>

    //                             <h2>{curElem.service}</h2>
    //                             <p>{curElem.description}</p>
    //                         </div>
    //                     </div>

    //                 );
    //             })}
    //         </div>
    //     </section>
    // );


    return (
            <section className="section-services">
                <div className="container">
                    <h1 className="main-heading">Services</h1>
                </div>
                
                <div className="container grid grid-three-cols">
                
                        <div className="card">
                            <div className="card-img">
                                    <img src="/images/design.png" alt="registration image" width="200" />
                            </div>

                            < div className="card-details">
                                <a href="/admin"><h2>Registration</h2></a>
                            </div>  

                        </div>


                        <div className="card" >
                            <div className="card-img">
                                    <img src="/images/train.png" alt="designer" width="200" />
                            </div>

                            < div className="card-details">
                                <a href="/admin"><h2>Cash In Flow</h2></a>
                            
                                </div>   
                        
                        </div>

                        <div className="card" >
                            <div className="card-img">
                                    <img src="/images/staff.jpg" alt="designer" width="200" />
                            </div>

                            < div className="card-details">
                                <a href="/admin"><h2>TrainEmpForm</h2></a>
                            </div>   
                        
                        </div>

                        <div className="card" >
                            <div className="card-img">
                                    <img src="/images/feedback.png" alt="designer" width="200" />
                            </div>

                            < div className="card-details">
                                <a href="/admin"><h2>Feedback</h2></a>
                            </div>   
                                    
                        </div>

                        <div className="card" >
                            <div className="card-img">
                                    <img src="/images/salary.png" alt="designer" width="200" />
                            </div>

                            < div className="card-details">
                                <a href="/admin"><h2>Salary</h2></a>
                            </div>   
                                    
                        </div>

                        <div className="card" >
                            <div className="card-img">
                                <img src="/images/schedule.png" alt="designer" width="200" />

                            </div>

                            < div className="card-details">
                                <a href="/"><h2>Staff Scheduling</h2></a>
                            </div>   
                        
                        </div>

                </div>
        
            </section>
    );
};
