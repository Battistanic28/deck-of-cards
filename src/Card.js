import React, {useState, useEffect} from "react";
import axios from "axios";


const Card = (props) => {
    const url = `http://deckofcardsapi.com/api/deck/${props.deck_id}/draw/?count=1`;

    const [cardInfo, setCardInfo] = useState(null);

    async function drawCard() {
        let newCard = await axios.get(`${url}`);
        console.log("newCard", newCard.data)
        setCardInfo(newCard.data)
    }

    return (
        <>
        {cardInfo &&
            <img alt="card" src={cardInfo.cards[0].image}></img>
        }
        <button onClick={drawCard}>Draw</button>
        </>
    )
};

export default Card;
