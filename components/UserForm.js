export default function UserForm({ client, handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Name{client.firstName}</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        //defaultValue={curUser.firstName}
        value={client.firstName}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="lastName">LastName</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        //defaultValue={curUser.lastName}
        value={client.lastName}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        name="email"
        //defaultValue={curUser.email}
        value={client.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="phoneNumber">PhoneNumber</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        //defaultValue={curUser.phoneNumber}
        value={client.phoneNumber}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="zib">ZIB</label>
      <input
        type="text"
        id="zib"
        name="zib"
        //defaultValue={curUser.zib}
        value={client.zib}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        //defaultValue={curUser.street}
        value={client.street}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        //defaultValue={curUser.city}
        value={client.city}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        name="country"
        //defaultValue={curUser.country}
        value={client.country}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="iban">IBAN</label>
      <input
        type="text"
        id="iban"
        name="iban"
        //defaultValue={curUser.iban}
        value={client.iban}
        onChange={handleInputChange}
        required
      />
      <button type="submit">save</button>
    </form>
  );
}
