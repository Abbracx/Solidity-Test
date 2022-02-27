const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', (accounts) => {
    let advancedStorage;

    before(async () => {
        advancedStorage = await AdvancedStorage.deployed();
        [admin, _] = accounts;
    });

    it('Should add an element to ids array', async () => {
        await advancedStorage.add(10);
        result = await advancedStorage.ids(0);
        assert(result.toNumber() == 10);
    });

    it('Should get an element of the ids array', async () => {
        await advancedStorage.add(20);
        result = await advancedStorage.get(1);
        assert(result.toNumber() == 20);
    });

    it('Should get all raw elements of an array', async () => {
        const rawIds = await advancedStorage.getAll();
        const ids = rawIds.map( id => id.toNumber());
        assert.deepEqual(ids, [10, 20]);
    });

    it('Should get the legnth of an array', async () => {
        const length = await advancedStorage.length();
        assert(length.toNumber(), 2);
    });

});
