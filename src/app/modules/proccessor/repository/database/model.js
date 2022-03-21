const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    fee_id: String,
    fee_currency: String,
    fee_locale: String,
    fee_value: String,
    fee_entity: {
      type: String,
      enum: ["CREDIT-CARD", "DEBIT-CARD", "BANK-ACCOUNT", "USSD", "WALLET-ID"],
    },
    entity_property: { type: String },
    fee_type: { type: String, enum: ["FLAT", "PERC", "PERC", "FLAT_PERC"] },
  },
);

module.exports.FeeConfigModel = mongoose.model("FeeConfig", schema);
