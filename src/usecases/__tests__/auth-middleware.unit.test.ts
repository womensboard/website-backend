import { expect } from 'chai';
import { InvalidAuthorizationHeaders, InvalidToken } from 'utils/errors';
import { AuthMiddlewareUsecase } from 'usecases/auth-middleware';
import { tokenManagerStub } from '__tests__/unit-test-stubs';

const fakeJWTSecretKey = 'some-fake-secret';
const authMiddleware = new AuthMiddlewareUsecase(
  tokenManagerStub,
  fakeJWTSecretKey
);
describe('Auth middleware usecase', () => {
  afterEach(() => {
    tokenManagerStub.verifyToken.reset();
  });
  it('should throw an Unauthorized error if authorization headear is invalid', async () => {
    await expect(authMiddleware.execute()).to.be.rejectedWith(
      InvalidAuthorizationHeaders
    );
    await expect(authMiddleware.execute('bearer token')).to.be.rejectedWith(
      InvalidAuthorizationHeaders
    );
    await expect(authMiddleware.execute('Bearer')).to.be.rejectedWith(
      InvalidAuthorizationHeaders
    );
  });

  it('should throw InvalidToken error if token validation fails', async () => {
    tokenManagerStub.decode.throws(new InvalidToken());
    await expect(authMiddleware.execute('Bearer token')).to.be.rejectedWith(
      InvalidToken
    );
  });

  it('should return the email that is contained in the token', async () => {
    tokenManagerStub.decode.returns({
      email: 'mock@emial.com',
    });
    await expect(authMiddleware.execute('Bearer token')).to.eventually.eql({
      email: 'mock@emial.com',
    });
  });

  it('should throw error when verifying token with using jwt secret fails', async () => {
    tokenManagerStub.decode.returns({
      email: 'mock@emial.com',
    });

    tokenManagerStub.verifyToken.throws(new InvalidToken());
    await expect(authMiddleware.execute('Bearer token')).to.be.rejectedWith(
      InvalidToken
    );

    tokenManagerStub.verifyToken.should.have.been.calledOnceWithExactly(
      'some-fake-secret',
      'token'
    );
  });
});
