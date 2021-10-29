declare const require: any;

export const environment = {
  production: false,
  releasesUrl: 'https://api.github.com/repos/dmitry9888/falcon-desktop/releases/latest',
  version: require('../../package.json').version,
  envName: 'docker1',
  falconHost: 'localhost',
  falconPort: 52935,
  marketVersion: 'UNKNOWN',
  marketHost: 'localhost',
  marketPort: 3100,
  isTesting: false
};
