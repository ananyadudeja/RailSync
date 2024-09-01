import  { useState } from "react";
import "./StaffDetailsForm.css"; // Import the CSS file

export const StaffDetailsForm = () => {
  const [formData, setFormData] = useState({
    supervisor: "",
    endTime: "",
    coachesAllotted: "",
    trainNo: "",
    rakeCoaches: "",
    divisionFrom: "",
    date: "",
    coachesAttended: "",
    railwayTo: "",
    startTime: "",
    dept: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <header className="header">
      <h1 className="header-title">Staff Details Form</h1>
      <form className="header-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="supervisor">Name of Supervisor:</label>
            <input
              type="text"
              id="supervisor"
              name="supervisor"
              value={formData.supervisor}
              onChange={handleChange}
              placeholder="Enter Supervisor Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="endTime">Time Work Ended:</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="coachesAllotted">No. of coaches to be allotted:</label>
            <input
              type="number"
              id="coachesAllotted"
              name="coachesAllotted"
              value={formData.coachesAllotted}
              onChange={handleChange}
              placeholder="Enter No. of Coaches"
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainNo">Train No.:</label>
            <input
              type="text"
              id="trainNo"
              name="trainNo"
              value={formData.trainNo}
              onChange={handleChange}
              placeholder="Enter Train No."
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rakeCoaches">No. of coaches in the Rake:</label>
            <input
              type="number"
              id="rakeCoaches"
              name="rakeCoaches"
              value={formData.rakeCoaches}
              onChange={handleChange}
              placeholder="Enter No. of Coaches in Rake"
            />
          </div>
          <div className="form-group">
            <label htmlFor="divisionFrom">Train Card for OBHS Division FROM:</label>
            <input
              type="text"
              id="divisionFrom"
              name="divisionFrom"
              value={formData.divisionFrom}
              onChange={handleChange}
              placeholder="Enter Division"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="coachesAttended">No. of coaches attended:</label>
            <input
              type="number"
              id="coachesAttended"
              name="coachesAttended"
              value={formData.coachesAttended}
              onChange={handleChange}
              placeholder="Enter No. of Coaches"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="railwayTo">Train Card for OBHS Railway to:</label>
            <input
              type="text"
              id="railwayTo"
              name="railwayTo"
              value={formData.railwayTo}
              onChange={handleChange}
              placeholder="Enter Railway"
            />
          </div>
          <div className="form-group">
            <label htmlFor="startTime">Time Work Started:</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dept">Dept:</label>
            <input
              type="text"
              id="dept"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
              placeholder="Enter Department"
            />
          </div>
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </header>
  );
};

// export default StaffDetailsForm;
