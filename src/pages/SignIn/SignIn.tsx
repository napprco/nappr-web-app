const SignIn: React.FC = () => {
  return (
    <div className='sign-in'>
      <h1>Login NAPPR</h1>
      <form action='' className='login-form'>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='text' placeholder='abcde@gmail.com' name='email' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Password</label>
          <input type='text' placeholder='*******' name='email' />
          <p>Forget Password</p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
