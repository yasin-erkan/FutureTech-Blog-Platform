import {
  createContext,
  type FC,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {type LoginValues, type RegisterValues, type User} from '../types';
import {authService} from '../services/auth';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

interface AuthContextType {
  loading: boolean;
  user: User | null | undefined;
  register: (values: RegisterValues) => Promise<void>;
  login: (values: LoginValues) => Promise<void>;
  logout: () => Promise<void>;
}

// Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Context Provider
const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null | undefined>(undefined);

  // every page loaded, get user data from api
  useEffect(() => {
    // if user is not logged in, stop function
    if (localStorage.getItem('isLoggedIn') !== 'true') return setUser(null);

    const getUser = async () => {
      setLoading(true);

      try {
        const user = await authService.getProfile();
        setUser(user);
      } catch (error: any) {
        setUser(null);
        console.log(error);
      }

      setLoading(false);
    };

    getUser();
  }, []);

  const register = async (values: RegisterValues) => {
    try {
      await authService.register(values);
      toast.success('Your account has been created. Please login.');
      navigate('/login');
    } catch (error: any) {
      toast.error(error.response.data.message || 'An error occurred');
    }
  };

  const login = async (values: LoginValues) => {
    try {
      setLoading(true);
      const {user} = await authService.login(values);
      setUser(user);
      localStorage.setItem('isLoggedIn', 'true');

      navigate('/');
      toast.success('You are logged in');
    } catch (error: any) {
      toast.error(error.response.data.message || 'An error occurred');
    }

    setLoading(false);
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      navigate('/login');
      toast.success('You are logged out');
      localStorage.setItem('isLoggedIn', 'false');
    } catch (error: any) {
      toast.error(error.response.data.message || 'An error occurred');
    }
  };

  const value: AuthContextType = {
    loading,
    user,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Context Consumer
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return context;
};

export default AuthProvider;
