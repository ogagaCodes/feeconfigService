const { FeeConfigModel } = require("./database/model");

class ProcessorRepository {
  constructor() {
    this.feeconfig = FeeConfigModel;
    // this.feeConfig.sync({ force: true });
  }
  async create(data) {
    return this.feeconfig.create({
      ...data
    });
  }
  async getConfigData() {
  return this.feeconfig.find({});
}
}

module.exports = ProcessorRepository;
