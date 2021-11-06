import allureReporter from '@wdio/allure-reporter';
describe('Suite', () => {
    it('Case 1', () => {
        allureReporter.addFeature('Feature')
    })
})