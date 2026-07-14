/* -------------------------------------------------------------------------- */
/*                                 USER ROLE                                  */
/* -------------------------------------------------------------------------- */

export type UserRole =
  | "admin"
  | "recruiter"
  | "candidate";

/* -------------------------------------------------------------------------- */
/*                                   USER                                     */
/* -------------------------------------------------------------------------- */

export interface User {
  id: number;

  username: string;

  email: string;

  role?: UserRole;

  first_name?: string;

  last_name?: string;

  profile_image?: string | null;

  is_active?: boolean;

  created_at?: string;

  updated_at?: string;
}

/* -------------------------------------------------------------------------- */
/*                               AUTH TOKENS                                  */
/* -------------------------------------------------------------------------- */

export interface AuthTokens {
  access: string;

  refresh: string;
}

/* -------------------------------------------------------------------------- */
/*                              LOGIN REQUEST                                 */
/* -------------------------------------------------------------------------- */

export interface LoginRequest {
  email: string;

  password: string;
}

/* -------------------------------------------------------------------------- */
/*                            REGISTER REQUEST                                */
/* -------------------------------------------------------------------------- */

export interface RegisterRequest {
  username: string;

  email: string;

  password: string;
}

/* -------------------------------------------------------------------------- */
/*                            LOGIN RESPONSE                                  */
/* -------------------------------------------------------------------------- */

export interface LoginResponse {
  access: string;

  refresh: string;
}

/* -------------------------------------------------------------------------- */
/*                          REGISTER RESPONSE                                 */
/* -------------------------------------------------------------------------- */

export interface RegisterResponse {
  id: number;

  username: string;

  email: string;
}

/* -------------------------------------------------------------------------- */
/*                          REFRESH TOKEN RESPONSE                            */
/* -------------------------------------------------------------------------- */

export interface RefreshTokenResponse {
  access: string;
}

/* -------------------------------------------------------------------------- */
/*                                API ERROR                                   */
/* -------------------------------------------------------------------------- */

export interface ApiError {
  detail?: string;

  message?: string;

  errors?: Record<string, string[]>;

  status?: number;
}

/* -------------------------------------------------------------------------- */
/*                              AUTH CONTEXT                                  */
/* -------------------------------------------------------------------------- */

export interface AuthContextType {
  user: User | null;

  loading: boolean;

  isAuthenticated: boolean;

  login: (
    payload: LoginRequest
  ) => Promise<void>;

  register: (
    payload: RegisterRequest
  ) => Promise<void>;

  logout: () => Promise<void>;

  refreshUser: () => Promise<void>;
}