import { setUp, dropDatabase } from "../../connection";

describe("Database", ()=> {
    it("Connection test", async() => {
        expect(setUp()).resolves.not.toThrow()
    })
})

