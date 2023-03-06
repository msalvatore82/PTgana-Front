import { render, screen } from "@testing-library/react"
import Contract from "../components/Contracts/Contract/Contract"


describe("Contract test suite", ()=>{
    test("a shold hace Href", ()=>{
        render(<Contract/>)
        screen.debug()
})

})