import {assert} from "chai"
import { mathEnforcer } from "../mathEnforcer.js"

describe("add five method", () => {

    describe("test with invalid value", ()=>{
        it("test with string", ()=>{    
            assert.isUndefined(mathEnforcer.addFive("hello"), " result must be undefined")
        })
        it("test with array", ()=>{
            assert.isUndefined(mathEnforcer.addFive([6]), " result must be undefined")
        })
        it("test with object", ()=>{
            assert.isUndefined(mathEnforcer.addFive({name: "pesho"}), " result must be undefined")
        })
        
        
    })
    describe("test with valid value", ()=>{
        it("test with number", ()=>{
            assert.equal(mathEnforcer.addFive(5), 10, " result must be 10")
        })
        it("test with floating point number", ()=>{
            assert.closeTo(mathEnforcer.addFive(5.5), 10.5, 0.01, " result must be 10.5")
        })
        it("test with negative number", ()=>{
            assert.equal(mathEnforcer.addFive(-5), 0, " result must be 0")
        })
        it("test with zero", ()=>{
            assert.equal(mathEnforcer.addFive(0), 5, " result must be 5")
        })
    })
})

describe("subtractTen method", ()=> {
    describe("test with invalid value", () =>{
        it("test with string", ()=>{
            assert.isUndefined(mathEnforcer.subtractTen("hello"), " result must be undefined")
        })
        it("test with array", ()=>{
            assert.isUndefined(mathEnforcer.subtractTen([6]), " result must be undefined")
        })
        it("test with object", ()=>{
            assert.isUndefined(mathEnforcer.subtractTen({name: "pesho"}), " result must be undefined")
        })

    })
    describe("test with valid value", ()=>{
        it("test with number", ()=>{
            assert.equal(mathEnforcer.subtractTen(15), 5, " result must be 5")
        })
        it("test with floating point number", ()=>{
            assert.closeTo(mathEnforcer.subtractTen(5.5), -4.5, 0.01, " result must be -4.5")
        })
        it("test with negative number", ()=>{
            assert.equal(mathEnforcer.subtractTen(-5), -15, " result must be -15")
        })
        it("test with zero", ()=>{
            assert.equal(mathEnforcer.subtractTen(0), -10, " result must be -10")
        })
    })
})

describe("sum method", ()=> {
    describe("test with invalid value", ()=>{   
        it("test with string", ()=>{
            assert.isUndefined(mathEnforcer.sum("hello", 5), " result must be undefined")
        })
        it("test with string", ()=>{
            assert.isUndefined(mathEnforcer.sum("", 5), " result must be undefined")
        })
        it("test with array", ()=>{
            assert.isUndefined(mathEnforcer.sum([6], 5), " result must be undefined")
        })
        it("test with object", ()=>{
            assert.isUndefined(mathEnforcer.sum({name: "pesho"}, 5), " result must be undefined")
        })

    })
    describe("test with valid value", ()=>{
        it("test with number", ()=>{
            assert.equal(mathEnforcer.sum(5, 5), 10, " result must be 10")
        })
        it("test with floating point number", ()=>{
            assert.closeTo(mathEnforcer.sum(5.5, 5.5), 11, 0.01, " result must be 11")
        })
        it("test with negative number", ()=>{
            assert.equal(mathEnforcer.sum(-5, -5), -10, " result must be -10")
        })
        it("test with zero", ()=>{
            assert.equal(mathEnforcer.sum(0, 0), 0, " result must be 0")
        })
    })
})
