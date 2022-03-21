exports.computeFees = async (data) => {
    try {
          
    return {
        error: false,
        data: {
            fee_id:"",
            fee_currency:""
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