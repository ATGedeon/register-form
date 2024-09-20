import { useState, FormEvent, FC, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
// import { useSpring, animated } from '@react-spring/web';
import PersonalInfoForm from './PersonalInfoForm';
import AccountInfoForm from './AccountInfoForm';
import './RegisterForm.css';

const RegisterForm: FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO More here
    alert('form submited');
  };

  return (
    <div className="register-form">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -400 }}
        transition={{ duration: 0.4 }}
      >
        {step === 1 && (
          <PersonalInfoForm
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <AccountInfoForm
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        )}
      </motion.div>
    </div>
  );
};

export default RegisterForm;
