import {useState} from "react"
import { Container, Button, Nav, Navbar as NavbarBs} from "react-bootstrap"
import Cart from "../images/cart.jpeg"
import {NavLink} from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import {StoreItem} from "../components/StoreItem"

export function Navbar () {
    const [search, setSearch] = useState('')
    const { openCart, cartQuantity } = useShoppingCart()
   

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
      }

    return(
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3 ">
            <Container className="me-auto">
            <Nav >
                  <Nav.Link to="/" as={NavLink}>
                   Store
                  </Nav.Link>
                </Nav>
                <form >
           <input type ="text" placeholder='Search' 
           className='justify-content-center' 
           style={{
            paddingLeft: "30px",
           borderRadius: "10px",
           border: "1px solid grey",
           WebkitTransition: 'all 0.1s ease-in-out',
           transition: 'all 0.1s ease-in-out',
        }}
        onChange={handleChange} />
           </form>
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