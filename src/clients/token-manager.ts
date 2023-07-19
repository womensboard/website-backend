import axios from 'axios';
import { InvalidToken } from 'utils/errors';
import jwt from 'jsonwebtoken';
import { type ITokenManager } from 'usecases';

export class TokenManager implements ITokenManager {
  async verifySocialLogin(idToken: string) {
    try {
      const response = await axios.post(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`
      );
      const data = response.data;
      return {
        iss: data.iss,
        aud: data.aud,
        email: data.email,
        emailIsVerified: data.email_verified,
      };
    } catch (error) {
      throw new InvalidToken('Google token validation failed');
    }
  }

  async generateToken(secretKey: string, payload: object) {
    return jwt.sign(payload, secretKey, { expiresIn: '1d' });
  }

  decode(token: string): any {
    try {
      const decoded = jwt.decode(token);
      if (!decoded) throw new InvalidToken();
      return decoded;
    } catch (error) {
      throw new InvalidToken();
    }
  }

  async verifyToken(secretKey: string, token: string) {
    try {
      return jwt.verify(token, secretKey);
    } catch {
      throw new InvalidToken();
    }
  }
}
