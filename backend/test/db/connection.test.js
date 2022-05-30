import { connectDB, disconnectDB } from "../../database";

const url = process.env.MONGO_URL_TEST

afterEach(async() => await disconnectDB())

describe.skip("Database", ()=> {

    it("Correct url", async() => {
        expect(connectDB(url)).resolves.not.toThrow()
    })

    it("Incorrect url", async() => {
        expect(connectDB("")).rejects.toThrow()
    })   

})