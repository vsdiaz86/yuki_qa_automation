const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');

let env = dotenv.config();
if (env.error) throw env.error;
env = dotenvParseVariables(env.parsed);

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: env.BASE_URL,
      show: env.SHOW_BROWSER,
      browser: env.BROWSER,
      waitForNavigation: "domcontentloaded",
      waitForAction: 700,
      chromium: {
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--ignore-certificate-errors']
      },
      firefox: {
        args: ['--no-sandbox', '--ignore-certificate-errors']
      }
    },
    CustomHelper: {
      require: './support/helpers/custom_helper.js'
    },
    ResembleHelper: {
      require: "codeceptjs-resemblehelper",
      screenshotFolder: "./output/",
      baseFolder: "./support/screenshots/base/",
      diffFolder: "./support/screenshots/diff/"
    },
    REST: {}
  },

  include: {
    I: './steps_file.js',
    HomePage: './page_objects/home_page.js'
  },

  gherkin: {
  features: './features/**/*.feature',
  steps: ['./step_definitions/**/*.js']
    
  },

  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'output'
    },
    screenshotOnFail: {
      enabled: true
    },
    skipper: {
      require: './support/plugins/skipper.js',
      enabled: true
    }
  },

  tests: './step_definitions/**/*.js',
  name: 'e2e'
};
