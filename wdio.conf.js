import { fileURLToPath } from 'node:url';

export const config = {
    runner: 'local',
    port: 4723,
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'nightwatch-android',
        'appium:avd': 'nightwatch-android',
        'appium:platformVersion': '11',
        'appium:app': fileURLToPath(new URL('./app/android.wdio.native.app.v2.2.0.apk', import.meta.url)),
        'appium:appPackage': 'com.wdiodemoapp',
        'appium:appActivity': 'com.wdiodemoapp.MainActivity',
        'appium:noReset': false
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
