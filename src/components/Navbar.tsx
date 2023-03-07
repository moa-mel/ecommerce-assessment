import { Container, Button, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import Cart from "../images/cart.jpeg"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar () {
    const { openCart, cartQuantity } = useShoppingCart()
    return(
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                  <Nav.Link to="/" as={NavLink}>
                   Store
                  </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                <Button 
                onClick={openCart}
                style={{width:"2.5rem", height:"2.5rem", position:"relative"}}
                variant="outline-primary"
                className="rounded-circle">
                   <img src={Cart} alt="" style={{width:"2.5rem", height:"2.5rem", borderRadius: '50%', marginLeft: '-13px', marginTop:'-7px'}}/> 
                   <div className="rounded-circle bg-danger d-flex justify-content-center
                   align-items-center" 
                   style={{
                    width:"1.5rem",
                    color: "white",
                    height:"1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                }}>
                    {cartQuantity}
                </div>
                </Button>
                 )}
            </Container>
        </NavbarBs>
    )
}