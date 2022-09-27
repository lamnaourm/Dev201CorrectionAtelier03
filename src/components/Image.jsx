export default function Image({url, titre}) {
    return (
        <div className="image">
            <img src={url} alt={titre}/>
        </div>
    )
}