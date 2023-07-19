import { InvalidAuthorizationHeaders, InvalidToken } from 'utils/errors';
import { type ITokenManager } from './interfaces';

export class AuthMiddlewareUsecase {
  constructor(
    private readonly tokenManager: ITokenManager,
    private readonly jwtSignPrivateKey: string
  ) {}

  async execute(authorization?: string) {
    const token = await this.getToken(authorization);
    const decoded = await this.decodeToken(token);
    await this.tokenManager.verifyToken(this.jwtSignPrivateKey, token);

    return { email: decoded.email };
  }

  private async getToken(authorization) {
    const authParts = authorization?.split(' ');
    if (authParts?.length !== 2) throw new InvalidAuthorizationHeaders();

    const [bearer, token] = authParts;

    if (bearer !== 'Bearer') throw new InvalidAuthorizationHeaders();

    return token;
  }

  private async decodeToken(token: any) {
    const decoded = await this.tokenManager.decode(token);

    if (!decoded?.email) throw new InvalidToken();

    return decoded;
  }
}
