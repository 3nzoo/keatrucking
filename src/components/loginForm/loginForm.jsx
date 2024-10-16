'use client';

import { login } from '@/lib/action';
import styles from './loginForm.module.css';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { Italiana } from 'next/font/google';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <h1> Login Account</h1>
      <input type='text' placeholder='username' name='username' />
      <input type='password' placeholder='password' name='password' />
      <button>Login</button>
      {state?.error}
    </form>
  );
};

export default LoginForm;
