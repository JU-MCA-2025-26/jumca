export enum Role {
  STUDENT = "STUDENT",
  ALUMNI = "ALUMNI",
  ADMIN = "ADMIN",
}

export interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    role: Role;
  };
}
