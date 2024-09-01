import { useState } from 'react';
import './Feedback.css';

export const Feedback = () => {
    const [formData, setFormData] = useState({
        trainCoachtype: '',
        pname: '',
        contact: '',
        pnr: '',
        gender: '',
        coachBerthno: '',
        cleanlinessToilets: '',
        cleanlinessArea: '',
        cleanlinessWashbasin: '',
        cleanlinessDustbins: '',
        mosquitoRepelient: '',
        availabilitySoap: '',
        wipingWindowglasses: '',
        staffBehaviour: '',
        additionalComments: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/api/auth/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Failed to submit feedback');
            }
    
            const result = await response.json();
            alert(result.message);
            setFormData({
                trainCoachtype: '',
                pname: '',
                contact: '',
                pnr: '',
                gender: '',
                coachBerthno: '',
                cleanlinessToilets: '',
                cleanlinessArea: '',
                cleanlinessWashbasin: '',
                cleanlinessDustbins: '',
                mosquitoRepelient: '',
                availabilitySoap: '',
                wipingWindowglasses: '',
                staffBehaviour: '',
                additionalComments: ''
            });
    
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting your feedback');
        }
    };


    return (
        <div className="feedback-container">
            <form onSubmit={handleSubmit} className="feedback-form">
                <h1>Feedback</h1>
                <div className="form-group">
                    <label>Train/Coach Type: </label>
                    <input type="text" name="trainCoachtype" value={formData.trainCoachtype} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Passenger Name: </label>
                    <input type="text" name="pname" value={formData.pname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Contact: </label>
                    <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>PNR: </label>
                    <input type="text" name="pnr" value={formData.pnr} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Gender: </label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Coach/ Berth No: </label>
                    <input type="text" name="coachBerthno" value={formData.coachBerthno} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Cleanliness of toilets including wash basins and absence of foul smell by sprinkling of Lizol or any other disinfectant:</label>
                    <div className="rating-container">
                        <div className="rating-numbers">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <span key={rating}>{rating}</span>
                            ))}
                        </div>
                        <div className="radio-group">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <label key={rating}>
                                    <input
                                        type="radio"
                                        name="cleanlinessToilets"
                                        value={rating}
                                        checked={formData.cleanlinessToilets === String(rating)}
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Cleanliness of passenger occupation area:</label>
                    <div className="rating-container">
                        <div className="rating-numbers">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <span key={rating}>{rating}</span>
                            ))}
                        </div>
                        <div className="radio-group">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <label key={rating}>
                                    <input
                                        type="radio"
                                        name="cleanlinessArea"
                                        value={rating}
                                        checked={formData.cleanlinessArea === String(rating)}
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Cleanliness of vestibul area and doorways and wash basin:</label>
                    <div className="rating-container">
                        <div className="rating-numbers">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <span key={rating}>{rating}</span>
                            ))}
                        </div>
                        <div className="radio-group">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <label key={rating}>
                                    <input
                                        type="radio"
                                        name="cleanlinessWashbasin"
                                        value={rating}
                                        checked={formData.cleanlinessWashbasin === String(rating)}
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Cleanliness of dust bins and collection of garbage in polybags:</label>
                    <div className="rating-container">
                        <div className="rating-numbers">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <span key={rating}>{rating}</span>
                            ))}
                        </div>
                        <div className="radio-group">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <label key={rating}>
                                    <input
                                        type="radio"
                                        name="cleanlinessDustbins"
                                        value={rating}
                                        checked={formData.cleanlinessDustbins === String(rating)}
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Spraying of mosquito repelient in passenger area, toilet and vestibule area, and spraying of Air freshner:</label>
                    <div className="rating-container">
                        <div className="rating-numbers">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <span key={rating}>{rating}</span>
                            ))}
                        </div>
                        <div className="radio-group">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <label key={rating}>
                                    <input
                                        type="radio"
                                        name="mosquitoRepelient"
                                        value={rating}
                                        checked={formData.mosquitoRepelient === String(rating)}
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Availability of liquid soap in all toilet and tissue paper roll only in western type toilets:</label>
                    <div className="rating-container">
                        <div className="rating-numbers">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <span key={rating}>{rating}</span>
                            ))}
                        </div>
                        <div className="radio-group">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <label key={rating}>
                                    <input
                                        type="radio"
                                        name="availabilitySoap"
                                        value={rating}
                                        checked={formData.availabilitySoap === String(rating)}
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Wiping of window glasses from platform side using collins:</label>
                    <div className="rating-container">
                        <div className="rating-numbers">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <span key={rating}>{rating}</span>
                            ))}
                        </div>
                        <div className="radio-group">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <label key={rating}>
                                    <input
                                        type="radio"
                                        name="wipingWindowglasses"
                                        value={rating}
                                        checked={formData.wipingWindowglasses === String(rating)}
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Behaviour of janitors & EHK and promptness of Service:</label>
                    <div className="rating-container">
                        <div className="rating-numbers">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <span key={rating}>{rating}</span>
                            ))}
                        </div>
                        <div className="radio-group">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <label key={rating}>
                                    <input
                                        type="radio"
                                        name="staffBehaviour"
                                        value={rating}
                                        checked={formData.staffBehaviour === String(rating)}
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Any Other Suggestion:</label>
                    <input
                        type="text"
                        name="additionalComments"
                        value={formData.additionalComments}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        );
};