import React, {useState, useEffect} from "react";
import Card from "./Card";
import axios from "axios";

const url = "http://deckofcardsapi.com/api/deck"


const CardDeck = () => {

    const [deckInfo, setDeckInfo] = useState("");

    async function shuffleDeck() {
        let newDeck = await axios.get(`${url}/new/shuffle`);
        console.log("newDeck", newDeck)
        setDeckInfo(newDeck.data)
    }


    return (
        <>
        <div className="card">
            <Card deck_id={deckInfo.deck_id}/>
        </div>
        <span>
            <button onClick={shuffleDeck}>Shuffle</button>
        </span>
        </>
    )
}

export default CardDeck;