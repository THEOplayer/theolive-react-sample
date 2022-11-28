import { Player } from "@theolive/player";
import { useState } from "react";
import "./App.css";
import THEOliveWrapper from "./components/THEOliveWrapper";

function App() {
    const [player, setPlayer] = useState<Player | null>(null);

    const myChannelId = "production"; // Change this to your own channelId

    async function handlePlayer(newPlayer: Player) {
        setPlayer(newPlayer);
        await loadChannel();
    }

    async function loadChannel() {
        if (player) {
            // Example: adding event listeners. For a full list of possible events, please visit https://developers.theo.live/docs/player-api-details
            player.addEventListener("channelloaded", (e) =>
                console.log(`${e.type} event captured: ${JSON.stringify(e)}`)
            );
            player.addEventListener("pause", (e) =>
                console.log(`${e.type} event captured: ${JSON.stringify(e)}`)
            );

            // Load your channel
            await player.loadChannel(myChannelId);
        }
    }

    return (
        <div className="App">
            <header>
                <h1>Showcasing THEOlive player with React</h1>
            </header>
            <section className="theolive-container">
                <THEOliveWrapper onPlayer={handlePlayer} />
            </section>
        </div>
    );
}

export default App;
