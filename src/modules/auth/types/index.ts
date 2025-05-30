import { UserRole } from '../../user/entities/user.entity';

export type UserPayload = {
  id: string;
  email: string;
  roles: UserRole[];
  wallet?: string;
};

export type JwtPayload = {
  sub: string;
  email: string;
  roles: UserRole[];
  wallet: string | undefined;
  iat?: number;
  exp?: number;
};

export type AuthTokens = {
  access_token: string;
  expires_in?: number;
};

export type WalletLoginParams = {
  publicAddress: string;
  signature: string[];
};
