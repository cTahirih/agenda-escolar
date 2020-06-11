export interface INewUser {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  user: IUser;
}

export interface IUserName {
  userName: string;
  password: string;
}

export interface IUser {
  id: number;
  userName: string;
  password: string;
  createAt: any;
  status: boolean;
  role: IRole;
}

export interface IRole {
  id: number;
  role: string;
  status: boolean;
}
