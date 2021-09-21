const HelloWorld = artifacts.require('HelloWorld');

contract('Hello World', () => {
    it('Should return hello world.', async () => {
        helloWorld = await HelloWorld.deployed();
        result = await helloWorld.hello()
        console.log(helloWorld.address)
        assert(result === 'Hello World');
    });
}); 