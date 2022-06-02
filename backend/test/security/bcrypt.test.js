import User from '../../src/models/User'

let pass;

describe('Encryption', ()=> {

    it('Invalid format encryption', async () => {
        const password = 1234;
        expect(User.encryptPass(password)).rejects.toThrow();
    })

    it('Correct encryption', async () => {
        const password = "1234";
        expect(User.encryptPass(password))
                .resolves.not.toEqual(password)
    })

    it('Compare password', async () => {
        const password = "1234";
        const encryptPass = await User.encryptPass(password);
        pass = encryptPass;
        const match = await User.comparePass(password, encryptPass);
        expect(match).toEqual(true)
    })

    it('Compare two encryptions, these should not be the same', async () => {
        const password = "1234";
        const encryptPass = await User.encryptPass(password);
        expect(encryptPass).not.toEqual(pass)
    })

})