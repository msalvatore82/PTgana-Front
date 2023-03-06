import { render, screen } from "@testing-library/react"
import Home from "../components/Home/Home"

describe('home test suite', () => {
     test("should render the component", ()=>{
        render(<Home />)
        screen.debug()
     }) 
    })