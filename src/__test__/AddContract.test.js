import { render, screen } from "@testing-library/react"
import { Button, Input} from "antd"

describe("AddContract Test Suite", () => {
    test("should be render button", () => {
        render(<Button />)
        const button = screen.getAllByRole("button");
        expect(button).toBeDefined()
    });
    test("should be render input", () => {
        render(<Input />)
        const input = screen.getByRole("textbox")
        expect(input).toBeDefined()
    })
    test("should be render input", () => {
        const text = "hola"
        render(<Input value={text} />)
        const input = screen.getByRole("textbox")
        expect(input.value).toBe(text)
    })
    /*     test("Should be a render FormItem", () => {
            const name = "xxx"
            render(<Form name={name}/>)
            const form = screen.getByTestId("form")
            screen.debug()
        }) */

    // test("modal shows children", ()=>{
    //     const handleClose = jest.fn()
    //     const {getByText}=render(<Modal onClose={handleClose}> <p>hola</p> </Modal>)
    //     expect(getByText("hola")).toBeTruthy()
    //     fireEvent.click(getByText(/close/i))
    //     expect(handleClose).toHaveBeenCalledTimes(1)
    // })

    /*     test("modal", () => {
            render(<AddContract />)
            screen.debug()
        }) */
        


}) 