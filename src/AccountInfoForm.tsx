import { ChangeEvent, FC, FormEvent } from 'react';

interface AccountInfoProperties {
  formData: {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  prevStep: () => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AccountInfoForm: FC<AccountInfoProperties> = ({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
}) => {
  return (
    <div className="step-two-container d-flex flex-column vh-100 align-items-center justify-content-center">
      <div className="form-container d-flex flex-column justify-content-center align-items-center">
        <div className="form-content d-flex flex-column justify-content-center align-content-center">
          <div className="form-header d-flex flex-column justify-content-center">
            <h1 className="fs-2 text-center">Account Informations</h1>
          </div>
          <div className="form-container-two">
            <form className="container mt-5" action="" onSubmit={handleSubmit}>
              <div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="input-group mb-3">
                      <div className="outline-label">
                        <input
                          className="form-control"
                          type="text"
                          id="username"
                          name="username"
                          value={formData.username}
                          placeholder=""
                          onChange={handleChange}
                          autoComplete="username"
                        />
                        <label className="form-label" htmlFor="username">
                          Username :
                        </label>
                      </div>
                      <span className="input-group-text">
                        <i className="bi bi-person-fill"></i>
                      </span>
                    </div>
                    {/* <div className="text-danger">
                  <span>Please enter your username</span>
                </div> */}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="input-group mb-3">
                      <div className="outline-label">
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          placeholder=""
                          onChange={handleChange}
                          autoComplete="email"
                        />
                        <label className="form-label" htmlFor="email">
                          Email :
                        </label>
                      </div>
                      <span className="input-group-text">
                        <i className="bi bi-envelope-at-fill"></i>
                      </span>
                    </div>
                    {/* <div className="text-danger">
                  <span>Please enter your email</span>
                </div> */}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="input-group mb-3">
                      <div className="outline-label">
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          placeholder=""
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="password">
                          Password :
                        </label>
                      </div>
                      <span className="input-group-text">
                        <i className="bi bi-lock-fill"></i>
                      </span>
                    </div>
                    {/* <div className="text-danger">
                  <span>Please enter your password</span>
                </div> */}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="input-group mb-3">
                      <div className="outline-label">
                        <input
                          className="form-control"
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          placeholder=""
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="confirmPassword">
                          Confirm Password :
                        </label>
                      </div>
                      <span className="input-group-text">
                        <i className="bi bi-key-fill"></i>
                      </span>
                    </div>
                    {/* <div className="text-danger">
                  <span>Please confirm your password</span>
                </div> */}
                  </div>
                </div>
                <div className="row form-footer justify-content-between align-content-center mt-4">
                  <button
                    className="btn btn-outline-primary w-25"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
                  <button className="btn btn-outline-secondary w-25">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoForm;
