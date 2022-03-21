const { HTTP } = require("../../../_constants/statusCodes");
const { RESPONSE } = require("../../../_constants/response");
const createError = require("../../../_helpers/createError");
const { createResponse } = require("../../../_helpers/createResponse");
const ProcessorService  = require("../services");

class ProcessorController {
    constructor() {
      this.processorService = new ProcessorService();
    }
    async createConfig(req, res, next) {
      const { FeeConfigurationSpec } = req.body;
   
      const { error, data } = await this.processorService.create(FeeConfigurationSpec);
      if (error) {
        return next(
          createError(HTTP.BAD_REQUEST, [
            {
              status: RESPONSE.ERROR,
              message,
              statusCode:
                data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
              data,
              code: HTTP.BAD_REQUEST,
            },
          ])
        );
      }
      return createResponse(data)(res, HTTP.OK);
     
    }
    async computeCharges(req, res, next) {
    
        const { error, data } = await this.processorService.computeFees(req.body);
        if (error) {
          return next(
            createError(HTTP.BAD_REQUEST, [
              {
                status: RESPONSE.ERROR,
                message,
                statusCode:
                  data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
                data,
                code: HTTP.BAD_REQUEST,
              },
            ])
          );
        }
        return createResponse(data)(res, HTTP.OK);
    }
  }
  module.exports =  ProcessorController;