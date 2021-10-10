const path = require('path');
const withFonts = require('nextjs-fonts');

const withSass = require('@zeit/next-sass');

module.exports = withSass(withFonts({
  webpack(config) {
    return config;
  }
}));

module.exports = {
  sassOptions: {
    includePath: [path.join(__dirname, 'static/assets/style')]
  }
};
