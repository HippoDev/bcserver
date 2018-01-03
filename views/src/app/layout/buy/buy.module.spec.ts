import { BuyModule } from './buy.module';

describe('BuyModule', () => {
    let BuyModule: BuyModule;

    beforeEach(() => {
        BuyModule = new BuyModule();
    });

    it('should create an instance', () => {
        expect(BuyModule).toBeTruthy();
    });
});
