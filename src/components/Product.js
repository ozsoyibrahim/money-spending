import { useState } from "react";
import { moneyFormat } from "../helpers";

function Product({ product, total, money, basket, setBasket }) {
    const basketItem = basket.find(item => item.id == product.id);

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        // ürün daha önce eklenmiş
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }

    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id);
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
        currentBasket.amount -= 1;
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])

        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }



return (
    <>
        <div className="product">
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <div className="price">$ {moneyFormat(product.price)}</div>
            <div className="actions">
                <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Subtract</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>Add</button>
            </div>
            <style jsx> {`
                    .product {
                        padding: 15px;
                        background: #fff;
                        border: 1px solid #ddd;
                        margin-bottom: 20px;
                        width: 24%;
                    }

                    .product img {
                        width: 100%;
                    }

                    .product h3{
                        font-size: 20px;
                        margin-bottom: 10px;
                    }

                    .product .price{
                        font-size: 20px;
                        color: #179b17;
                    }

                    .product .actions{
                        display: flex;
                        align-items: center;
                        margin-top: 15px;
                    }

                    .actions button{
                        height: 40px;
                        padding: 0 15px;
                        flex: 1;
                        cursor: pointer;
                    }

                    .actions button[disabled]{
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .actions .buy-btn{
                        background: #61dafb;
                        font-size: 18px;
                        font-weight: 500;
                        border-radius: 0 4px 4px 0;
                    }
                    .actions .sell-btn{
                        background: #ccc;
                        color: #333;
                        font-size: 18px;
                        font-weight: 500;
                        border-radius: 4px 0 0 4px;
                    }

                    .product .actions .amount {
                        width: 50px;
                        font-size: 18px;
                        font-weight: 500;
                        text-align: center;
                        margin: 0 10px 0 10px;
                        border: 1 px solid #ddd;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #555;
                    }
                `}</style>
        </div>
    </>
)
}


export default Product;