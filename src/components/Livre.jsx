import Image from "./Image";
import Prix from "./Prix";
import Titre from "./Titre";

export default function Livre({titre, prix,url}) {
    return (
        <div className="livre">
            <Image url={url} titre={titre} />
            <Titre titre={titre} />
            <Prix prix={prix} />
        </div>
    )
}