import type {FC} from 'react';
import {Link} from 'react-router-dom';
import Input from '../../components/input';
import {Form, Formik} from 'formik';
import {registerInitialValues} from '../../utils/constants';
import {registerSchema} from '../../utils/schema';
import type {RegisterValues} from '../../types';
import {useAuth} from '../../providers/auth-provider';

const Register: FC = () => {
  const {register} = useAuth();

  const handleSubmit = (values: RegisterValues) => {
    register(values);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Create New Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={registerInitialValues}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}>
          <Form className="space-y-8">
            <Input label="Username" name="username" type="text" />
            <Input label="Email" name="email" type="email" />
            <Input label="Password" name="password" type="text" />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-55 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-yellow-60 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Register
              </button>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-yellow-55 hover:text-yellow-60 ps-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
