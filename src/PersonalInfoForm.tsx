import { ChangeEvent, FC } from 'react';

interface PersonalInfoProperties {
  formData: {
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    gender?: string;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nextStep: () => void;
}

const PersonalInfoForm: FC<PersonalInfoProperties> = ({
  formData,
  handleChange,
  nextStep,
}) => {
  return (
    <div className="step-one-container d-flex flex-column vh-100 align-items-center justify-content-center">
      <div className="form-container d-flex flex-column justify-content-center align-items-center">
        <div className="form-content d-flex flex-column justify-content-center align-content-center">
          <div className="form-header d-flex flex-column justify-content-center">
            <h1 className="fs-2 text-center">Personal Informations</h1>
          </div>
          <div className="form-container-one">
            <div className="container">
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="input-group mb-4">
                    <div className="outline-label">
                      <input
                        className="form-control"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        placeholder=""
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="firstName">
                        First Name :
                      </label>
                    </div>
                    <span className="input-group-text">
                      <i className="bi bi-asterisk"></i>
                    </span>
                  </div>
                  {/* <div className="text-danger">
              <span>Please enter your first name</span>
            </div> */}
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-4">
                    <div className="outline-label">
                      <input
                        className="form-control"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        placeholder=""
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="lastName">
                        Last Name :
                      </label>
                    </div>
                    <span className="input-group-text">
                      <i className="bi bi-asterisk"></i>
                    </span>
                  </div>
                  {/* <div className="text-danger">
              <span>Please enter your last name</span>
            </div> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <label
                    className="form-label birth-date-label"
                    htmlFor="birthDate"
                  >
                    Birth Date :
                  </label>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                    />
                    <span className="input-group-text">
                      <i className="bi bi-calendar-date-fill"></i>
                    </span>
                  </div>
                  {/* <div className="text-danger">
              <span>Please enter your birth date </span>
            </div> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <label className="form-label gender-label" htmlFor="gender">
                    Gender :
                  </label>
                  <div className="input-group mb-3">
                    <select className="form-select" name="gender">
                      <option defaultValue="" disabled selected hidden>
                        Select your gender
                      </option>
                      <option value="M">Masculin</option>
                      <option value="F">Féminin</option>
                    </select>
                    <span className="input-group-text">
                      <i className="bi bi-gender-neuter"></i>
                    </span>
                  </div>
                  {/* <div className="text-danger">
              <span>Please select your gender</span>
            </div> */}
                </div>
              </div>
              <div className="row form-footer align-content-center justify-content-center mt-4">
                <button
                  className="btn btn-outline-primary w-50"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
