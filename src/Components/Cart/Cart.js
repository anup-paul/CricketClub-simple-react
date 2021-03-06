import AddPlayer from "../AddPlayer/AddPlayer";
import './Cart.css'

const Cart = (props) => {
    const cart = props.cartInfo;
    let totalBudget = 0;
    for (let i = 0; i < cart.length; i++) {
         const player = cart[i];
        totalBudget = totalBudget + player.salary;
    }
    return (
        <div className="box-container ">
            <div className="cart-info-design" >
                <h3>Player Added : {cart.length}</h3>
                <h3>Total budget : ${totalBudget}</h3>
            </div>
            {
                cart.map(addPlayer => <AddPlayer addPlayerInfo = {addPlayer} key = {addPlayer.id}></AddPlayer> )
            }
        </div>
    );
};

export default Cart;