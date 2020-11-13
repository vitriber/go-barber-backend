"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListProviderDayAvailabilityService = _interopRequireDefault(require("@modules/appointments/services/ListProviderDayAvailabilityService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderDayAvailabilityController {
  async index(request, response) {
    const {
      provider_id
    } = request.params;
    const {
      month,
      year,
      day
    } = request.query;

    const listProviderDayAvailabilityService = _tsyringe.container.resolve(_ListProviderDayAvailabilityService.default);

    const availability = await listProviderDayAvailabilityService.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
      day: Number(day)
    });
    return response.json(availability);
  }

}

exports.default = ProviderDayAvailabilityController;