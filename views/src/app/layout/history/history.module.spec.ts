import { HistoryModule } from './history.module';

describe('HistoryModule', () => {
    let HistoryModule: HistoryModule;

    beforeEach(() => {
        HistoryModule = new HistoryModule();
    });

    it('should create an instance', () => {
        expect(HistoryModule).toBeTruthy();
    });
});
