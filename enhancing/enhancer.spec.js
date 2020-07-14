const enhancer = require('./enhancer.js');

describe("enhancer unit tests", () => {

    // REPAIR FUNCTION TESTS ////////////////////////////////////////////////////////////////////////////////////////////////////

    it("repairs if durability is less than 100", () => {
        expect(enhancer.repair({ name: "Sword", durability: 45, enhancement: 18 })).toEqual({ name: "Sword", durability: 100, enhancement: 18 })
        expect(enhancer.repair({ name: "Sword", durability: -25, enhancement: 18 })).toEqual({ name: "Sword", durability: 100, enhancement: 18 })
        expect(enhancer.repair({ name: "Sword", durability: 100, enhancement: 18 })).toEqual({ name: "Sword", durability: 100, enhancement: 18 })
    })

    // SUCCEED FUNCTION TESTS /////////////////////////////////////////////////////////////////////////////////////////////////

    it("if enhancement succeeds the item's enhancement increases by 1 and item durability is not changed", () => {
        expect(enhancer.succeed({ name: "Sword", durability: 45, enhancement: 12 })).toEqual({ name: "Sword", durability: 45, enhancement: 13 })
    })

    it("if enhancement succeeds and the item enhancement level is 20, the enhancement level is not changed and item durability is not changed" , () => {
        expect(enhancer.succeed({ name: "Sword", durability: 45, enhancement: 20 })).toEqual({ name: "Sword", durability: 45, enhancement: 20 })
    })

    // FAIL FUNCTION TESTS ////////////////////////////////////////////////////////////////////////////////////////////////////

    it("if enhancement fails and the item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
        expect(enhancer.fail({ name: "Sword", durability: 45, enhancement: 14 })).toEqual({ name: "Sword", durability: 40, enhancement: 14 })
        expect(enhancer.fail({ name: "Sword", durability: 45, enhancement: 3 })).toEqual({ name: "Sword", durability: 40, enhancement: 3 })
    })

    it("if enhancement fails and the item's enhancement is 15 or more, the durability of the item is decreased by 10", () => {
        expect(enhancer.fail({ name: "Sword", durability: 45, enhancement: 15 })).toEqual({ name: "Sword", durability: 35, enhancement: 15 })
    })

    it("if enhancement fails and the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17)", () => {
        expect(enhancer.fail({ name: "Sword", durability: 45, enhancement: 17 })).toEqual({ name: "Sword", durability: 35, enhancement: 16 })
    })

    // it("", () => {
        
    // })
})
