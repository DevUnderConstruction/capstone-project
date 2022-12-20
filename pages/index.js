import Head from "next/head";
import Header from "../components/Header";
import Usercard from "../components/Usercard";
import Footer from "../components/Footer";
import UserForm from "../components/UserForm";
import { useState } from "react";
import { nanoid } from "nanoid";
import CostumerForm from "../components/CostumerForm";
const curCostumers = [
  {
    id: 1,
    firstName: "Saven",
    lastName: "Berger",
    email: "info@extend.de",
    phoneNumber: "022029375097",
    street: "Schwalbenweg 28",
    zip: 51467,
    city: "Bergisch Gladbach",
  },
  {
    id: 2,
    firstName: "Naiche",
    lastName: "Knuffig",
    email: "infos@web-t.net",
    phoneNumber: "02771/4657505",
    street: "Alter Weg 19",
    zip: 35687,
    city: "Dillenburg",
  },
  {
    id: 3,
    firstName: "Silviana",
    lastName: "Kaspar",
    email: "info@web-t.net",
    phoneNumber: "0203/4638163",
    street: "Gaterweg 22",
    zip: 47229,
    city: "Duisburg",
  },
  {
    id: 4,
    firstName: "Hildis",
    lastName: "Müller",
    email: "gnther@comm-prefix.de",
    phoneNumber: "07045/4295987",
    street: "Bertha-Benz-Str. 4B",
    zip: 75038,
    city: "Oberderdingen",
  },
];
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
  const [nav, setNav] = useState("userCard");
  const [costumers, setCostumers] = useState(curCostumers);
  const [addCostumerFormData, setCostumerFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    street: "",
    zip: "",
    city: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const handleAddCostumerForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCostumerFormData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleAddCostumerFormSubmit = (event) => {
    event.preventDefault();
    const newCostumer = {
      id: nanoid(),
      firstName: addCostumerFormData.firstName,
      lastName: addCostumerFormData.lastName,
      email: addCostumerFormData.email,
      phoneNumber: addCostumerFormData.phoneNumber,
      street: addCostumerFormData.street,
      zip: addCostumerFormData.zip,
      city: addCostumerFormData.city,
    };
    setCostumers([...costumers, newCostumer]);
  };
  const deleteCostumer = (id) => {
    const updatedCostumer = [...costumers].filter(
      (costumer) => costumer.id !== id
    );
    setCostumers(updatedCostumer);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleUser = () => {
    return setNav("userForm");
  };
  const handleCostumer = () => {
    return setNav("costumerForm");
  };
  const handleStart = () => {
    return setNav("userCard");
  };
  return (
    <>
      <Head>
        <title>BillyBob.io🥂</title>
      </Head>
      <Header />
      {nav === "userCard" && <Usercard client={client} />}
      {nav === "userForm" && (
        <UserForm
          client={client}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}

      {nav === "costumerForm" && (
        <CostumerForm
          setCostumers={setCostumers}
          costumers={costumers}
          handleAddCostumerFormSubmit={handleAddCostumerFormSubmit}
          handleAddCostumerForm={handleAddCostumerForm}
          deleteCostumer={deleteCostumer}
        />
      )}

      <Footer
        handleUser={handleUser}
        handleCostumer={handleCostumer}
        handleStart={handleStart}
      />
    </>
  );
}
