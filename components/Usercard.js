export default function Usercard({ client }) {
  return (
    <ul key={client.id}>
      <li>{client.firstName}</li>
      <li>{client.lastName}</li>
      <li>{client.phoneNumber}</li>
      <li>{client.email}</li>
      <li>{client.street}</li>
      <li>{client.zip}</li>
      <li>{client.city}</li>
      <li>{client.country}</li>
      <li>{client.iban}</li>
    </ul>
  );
}
