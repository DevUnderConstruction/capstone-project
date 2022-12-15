export default function UserForm({ client, handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={client.firstName}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="lastName">LastName</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={client.lastName}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={client.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="phoneNumber">PhoneNumber</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={client.phoneNumber}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="zip">ZIP</label>
      <input
        type="text"
        id="zip"
        name="zip"
        value={client.zip}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        value={client.street}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={client.city}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        name="country"
        value={client.country}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="iban">IBAN</label>
      <input
        type="text"
        id="iban"
        name="iban"
        value={client.iban}
        onChange={handleInputChange}
        required
      />
      <button type="submit">save</button>
    </form>
  );
}
