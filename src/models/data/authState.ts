interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  error: any;
  pending: boolean;
  isLogin: boolean;
  token: string | null;
}

export type {AuthState};
