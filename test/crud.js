const Crud = artifacts.require('Crud');

contract('Crud', () => {
    let crud = null;

    before(async () => {
        crud = await Crud.deployed();
    });

    it('Should create a new user', async () => {
        await crud.create('Frank');
        const user = await crud.read(1);
        assert(user[0].toNumber() == 1);
        assert(user[1] == 'Frank');
    });

    it('Should update a user', async () => {
        await crud.update(1, 'John');
        const user = await crud.read(1);
        assert(user[1] == 'John');
    });

    it('Should NOT update a NONE existing User', async () => {
        try {kay
            await crud.update(2, 'John');
        } catch(e){
            assert(e.message.includes('User does not exist'));
            return;
        }
        assert(false);
    });

    it('Should delete a user', async () => {
        await crud.destroy(1);
        try{
            await crud.read(1);
        }catch(e){
            assert(e.message.includes('User does not exist'));
            return;
        }
        assert(false);
    });

    it('Should NOT delete a non-existing user', async () => {

        try{
            await crud.destroy(10);
        }catch(e){
            assert(e.message.includes('User does not exist'));
            return;
        }
        assert(false);
    });

});
