import { connectDB, disconnectDB } from "../../src/database";

const url = process.env.MONGO_URL_TEST

afterEach(async() => await disconnectDB())

describe("Database", ()=> {

    it("Correct url", async() => {
        expect(connectDB(url)).resolves.not.toThrow()
    })

    it("Incorrect url", async() => {
        expect(connectDB("bad url")).rejects.toThrow()
    })   

})