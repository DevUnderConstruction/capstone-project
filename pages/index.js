import Head from "next/head";
import Header from "../components/Header";
import Usercard from "../components/Usercard";
import Footer from "../components/Footer";
import UserForm from "../components/UserForm";
import { useState } from "react";

const curUser = {
  id: 1,
  firstName: "Rainer",
  lastName: "Zufall",
  email: "rainer@zufall.com",
  phoneNumber: "07428233312",
  zip: "56789",
  street: "Brandenburgische Str. 90",
  city: "Cologne",
  country: "Germany",
  iban: "DE43500105175854591561",
};
export default function Home() {
  const [client, setClient] = useState(curUser);
  const [nav, setNav] = useState(true);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(client);
  };
  const handleNav = () => {
    return setNav(!nav);
  };

  return (
    <>
      <Head>
        <title>BillyBob.io🥂</title>
      </Head>
      <Header />

      {nav ? (
        <Usercard client={client} />
      ) : (
        <UserForm
          client={client}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      )}

      <Footer handleNav={handleNav} />
    </>
  );
}
