import Livre from "./Livre";

export default function Bibliotheque({ books }) {
  return (
    <div className="biblio">
      {books.map((item) => (
        <Livre
          url={item.image}
          titre={item.title}
          prix={item.price}
          key={item.id}
        />
      ))}
    </div>
  );
}
