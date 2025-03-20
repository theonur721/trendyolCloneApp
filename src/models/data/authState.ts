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
}

export type {AuthState};
