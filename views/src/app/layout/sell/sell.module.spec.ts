import { SellModule } from './sell.module';

describe('FormModule', () => {
    let formModule: SellModule;

    beforeEach(() => {
        formModule = new SellModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
