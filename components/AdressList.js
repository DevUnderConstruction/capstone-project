export default function Adresslist({ billAdress }) {
  return (
    <section>
      <p>
        {billAdress.firstName} {billAdress.lastName}
      </p>
      <p>{billAdress.street}</p>
      <p>
        {billAdress.zip} {billAdress.city}
      </p>
    </section>
  );
}
