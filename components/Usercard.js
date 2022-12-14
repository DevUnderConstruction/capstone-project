export default function Usercard() {
  const user = {
    id: 1,
    firstName: "Rainer",
    lastName: "Zufall",
    email: "rainer@zufall.com",
    phoneNumber: "07428233312",
    zib: "56789",
    street: "Brandenburgische Str. 90",
    city: "Cologne",
    country: "Germany",
    iban: "DE43500105175854591561",
  };
  return (
    <ul key={user.id}>
      <li value={user.firstName}>{user.firstName}</li>
      <li value={user.lastName}>{user.lastName}</li>
      <li value={user.email}>{user.email}</li>
      <li value={user.street}>{user.street}</li>
      <li value={user.zib}>{user.zib}</li>
      <li value={user.city}>{user.city}</li>
      <li value={user.country}>{user.country}</li>
      <li value={user.iban}>{user.iban}</li>
    </ul>
  );
}
