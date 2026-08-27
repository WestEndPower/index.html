'use strict';

const assert = require('node:assert/strict');
const brandApi = require('./brand-profile.js');
const profiles =
  require('./brand-profiles.js');

const stihlProfile =
  brandApi.getBrandProfile('STIHL');

assert.ok(stihlProfile);
assert.deepEqual(
  profiles.STIHL,
  stihlProfile
);
assert.notEqual(
  profiles.STIHL,
  stihlProfile
);
assert.equal(stihlProfile.id, 'STIHL');
assert.equal(stihlProfile.name, 'STIHL');
assert.equal(
  stihlProfile.appearance.colors.accent,
  '#f37a1f'
);
assert.equal(
  stihlProfile.data.files.products,
  'data/products.csv'
);
assert.deepEqual(
  stihlProfile.freight.ruleIdPrefixes,
  ['FRT-STIHL']
);
assert.equal(
  stihlProfile.capabilities.dealerMode,
  true
);
assert.equal(
  stihlProfile.capabilities.financing,
  true
);
assert.equal(
  brandApi.validateRegisteredProfiles().valid,
  true
);

const stihlDocument = {
  documentElement: {
    dataset: {
      configuratorBrand: 'STIHL'
    }
  }
};

assert.equal(
  brandApi.getActiveBrandId(stihlDocument),
  'STIHL'
);
assert.equal(
  brandApi.getActiveBrandProfile(
    stihlDocument
  ),
  stihlProfile
);

console.log(
  'STIHL brand-profile tests passed.'
);