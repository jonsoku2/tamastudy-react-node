import React from 'react';
import {
  FormWrapper,
  FormTitle,
  Form,
  FiledSet,
  InputUsernameBox,
  InputEmailBox,
  InputPasswordBox,
  FormButtonBox,
  ResetPasswordButton,
  LoginButton,
} from './styled';

const SIGN_UP = 'signup';

const Signup = ({ onChange, onSubmit, formData, showPassword, onClickShowPassword }) => {
  return (
    <FormWrapper>
      <FormTitle>
        <p>이메일과 패스워드를 입력해주세요. </p>
      </FormTitle>
      <Form onSubmit={(e) => onSubmit(e, SIGN_UP)}>
        <FiledSet>
          <label htmlFor={'authUsername'}>User name *</label>
          <InputUsernameBox>
            <input
              placeholder={'Username을 입력해주세요. '}
              type={'text'}
              id={'authUsername'}
              name={'username'}
              value={formData.username}
              onChange={(e) => onChange(e, SIGN_UP)}
            />
          </InputUsernameBox>
        </FiledSet>
        <FiledSet>
          <label htmlFor={'authEmail'}>Email *</label>
          <InputEmailBox>
            <input
              placeholder={'Email을 입력해주세요. '}
              type={'text'}
              id={'authEmail'}
              name={'email'}
              value={formData.email}
              onChange={(e) => onChange(e, SIGN_UP)}
            />
          </InputEmailBox>
        </FiledSet>
        <FiledSet>
          <label htmlFor={'authPassword'}>Password *</label>
          <InputPasswordBox>
            <input
              placeholder={'Password를 입력해주세요. '}
              type={showPassword ? 'text' : 'password'}
              id={'authPassword'}
              name={'password'}
              value={formData.password}
              onChange={(e) => onChange(e, SIGN_UP)}
            />
            <button onClick={onClickShowPassword}>{showPassword ? 'Hide' : 'Show'}</button>
          </InputPasswordBox>
        </FiledSet>
        <FormButtonBox>
          <ResetPasswordButton onClick={(e) => e.preventDefault()}>
            비밀번호를 잊어버리셨습니까?
          </ResetPasswordButton>
          <LoginButton type={'submit'}>Register</LoginButton>
        </FormButtonBox>
      </Form>
    </FormWrapper>
  );
};

export default Signup;
