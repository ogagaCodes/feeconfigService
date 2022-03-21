const ProcessorRepository  = require("../repository/index");
const { parsePayload } = require("../../../_helpers/parsePayload");
const { computeFees } = require("../../../_helpers/computeFees");

class ProcessorService {
  constructor() {
    this.processorRepository =  new ProcessorRepository();
  }
  async create(datum) {
    //   parse data
    const { error, data } = await parsePayload(datum)
    if(!error){
    return this.processorRepository.create({...data});
    }
    return {
        error: true,
        data: error
    }
  }

  async getAllConfig() {
    return this.processorRepository.getConfigData();
  }
  async computeFees(datum){
     const { error, data } = await computeFees(datum);
     if(error){
         return {
             error: false,
             data
         }
     }
     return {
         error: false,
         data
     }
  }

}
module.exports = ProcessorService;