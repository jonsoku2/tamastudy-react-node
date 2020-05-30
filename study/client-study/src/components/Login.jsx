import React, { useState } from 'react';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={formData.email}
          placeholder={'이메일을 입력해주세요. '}
          onChange={handleChange}
          name={'email'}
        />
        <input
          type="current-password"
          value={formData.password}
          placeholder={'비밀번호를 입력해주세요. '}
          onChange={handleChange}
          name={'password'}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
