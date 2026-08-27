(function attachConfiguratorProfiles(
  root,
  factory
) {
  const brandApi =
    root?.WestEndConfiguratorBrand ||
    (
      typeof module === 'object' &&
      module.exports
        ? require('./brand-profile.js')
        : null
    );

  const templateApi =
    root?.WestEndConfiguratorBrandTemplate ||
    (
      typeof module === 'object' &&
      module.exports
        ? require('./brand-profile-template.js')
        : null
    );

  const api = factory(
    brandApi,
    templateApi
  );

  if(
    typeof module === 'object' &&
    module.exports
  ){
    module.exports = api;
  }

  if(root){
    root.WestEndConfiguratorProfiles = api;
  }
})(
  typeof globalThis !== 'undefined'
    ? globalThis
    : this,
  function createConfiguratorProfiles(
    brandApi,
    templateApi
  ) {
    'use strict';

    if(
      !brandApi ||
      !templateApi
    ){
      throw new Error(
        'Universal brand APIs are required.'
      );
    }

    const STIHL_PROFILE =
      templateApi.createBrandProfileTemplate({
        id: 'STIHL',
        name: 'STIHL',
        baseline: 'yanmar',
        colors: {
          accent: '#f37a1f',
          dark: '#111111',
          surface: '#f5f5f5',
          border: '#dddddd',
          success: '#1f7a3a',
          danger: '#b00020'
        },
        packageComponentGroups: [
          'STIHL-PACKAGE-ATTACHMENT',
          'STIHL-PACKAGE-ACCESSORY'
        ],
        ruleIdPrefixes: [
          'FRT-STIHL'
        ],
        capabilities: {
          publicConfigurator: true,
          dealerMode: true,
          quotes: true,
          salesOrders: true,
          onlineOrders: true,
          financing: true,
          freightRules: true,
          promotions: true,
          inventory: true
        }
      });

    if(!brandApi.getBrandProfile('STIHL')){
      brandApi.registerBrandProfile(
        STIHL_PROFILE
      );
    }

    return Object.freeze({
      STIHL: STIHL_PROFILE
    });
  }
);