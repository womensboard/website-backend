import chai from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
export const mochaGlobalSetup = function (): void {
  chai.should();
  chai.use(chaiHttp);
  chai.use(sinonChai);
  chai.use(chaiAsPromised);
};
