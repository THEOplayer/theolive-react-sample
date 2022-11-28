import { Player } from "@theolive/player";
import { useCallback, useEffect, useState } from "react";
import "@theolive/player/THEOLive.css";

interface Props {
    onPlayer: (player: Player) => void;
}

export default function THEOliveWrapper({ onPlayer }: Props) {
    const [player, setPlayer] = useState<Player | null>(null);
    const onMount = useCallback((node: HTMLElement | null) => {
        if (node) {
            setPlayer(new Player(node));
        }
    }, []);

    useEffect(() => {
        if (player && onPlayer) {
            onPlayer(player);
        }
    }, [player, onPlayer]);

    return <div ref={onMount} />;
}
