exports.parsePayload = async (payload) => {
    try {
          // parse payload

        //   compose storage object
    return {
        error: false,
        data: {
            fee_id:"",
            fee_currency:"",
            fee_locale:"",
            fee_entity:"",
            entity_property:"",
            fee_type:"",
            fee_value:""
        }

    }
    } catch (error) {
        console.log(error);
        return {
            error: true,
            data: error
        }
    }
  
}