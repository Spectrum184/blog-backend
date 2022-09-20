"use strict";

const { createCoreService } = require("@strapi/strapi").factories;

/**
 * cookie service
 */

module.exports = createCoreService("api::cookie.cookie", ({ strapi }) => ({
  async find(params) {
    const { pagination } = await super.find(params);
    const results = await strapi.entityService.findMany(
      "api::cookie.cookie",
      Object.assign(params, {
        populate: { category: true },
      })
    );

    return { results, pagination };
  },
}));
