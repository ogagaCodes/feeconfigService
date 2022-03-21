const chai = require("chai");
const sinon = require("sinon");
const  ProcessorRepository = require("../src/app/modules/proccessor/repository");
const expect = chai.expect;
const { faker } = require('@faker-js/faker');
const ProcessorService = require("../src/app/modules/proccessor/services");

describe("ProcessorService", function() {
  describe("createConfig", function() {
    it("it should create a config spec", async function() {
      const stubValue = {
        FeeConfigurationSpec: faker.datatype.uuid,
      };
      const processRepo = new ProcessorRepository();
      const stub = sinon.stub(processRepo, "create").returns(stubValue);
      const processorService = new ProcessorService(processRepo);
      const configValue = await processorService.create(stubValue.FeeConfigurationSpec);
      expect(stub.calledOnce).to.be.true;
      expect(response.headers["Content-Type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
    });
  });
 
  describe("get config data", function() {
    it("it should get all config data", async function() {
        const stubValue = {
            id: faker.random.uuid(),
            user_name: faker.name.findName(),
            email: faker.internet.email(),
          };
      const processRepo = new ProcessorRepository();
    //   const stub = sinon.stub(processRepo, "getConfigData").returns();
      const processorService = new ProcessorService(processRepo);
      const configValue = await processorService.getAllConfig();
    //   expect(stub.calledOnce).to.be.true;
      expect(response.headers["Content-Type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
    });
  });

});



