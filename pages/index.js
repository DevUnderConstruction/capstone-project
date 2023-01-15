import Head from "next/head";
import Header from "../components/Header";
import Usercard from "../components/Usercard";
import Footer from "../components/Footer";
import UserForm from "../components/UserForm";
import { useState } from "react";
import { nanoid } from "nanoid";
import CustomerForm from "../components/CustomerForm";
import ArticleCard from "../components/ArticleCard";
import BillCard from "../components/BillCard";

const currentCustomers = [
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

const currentUser = {
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

const currentArticles = [
  {
    articleNumber: 1,
    articleName: "Kartoffeln",
    price: 95,
  },
  {
    articleNumber: 2,
    articleName: "Eis",
    price: 5,
  },
  {
    articleNumber: 3,
    articleName: "Pilze",
    price: 10,
  },
];

export default function Home() {
  const [client, setClient] = useState(currentUser);
  const [nav, setNav] = useState("userCard");
  const [customers, setCustomers] = useState(currentCustomers);
  const [articles, setArticles] = useState(currentArticles);
  const [addCustomerFormData, setCustomerFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    street: "",
    zip: "",
    city: "",
  });

  const handleInputClientChange = (event) => {
    const { name, value } = event.target;
    setClient((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const handleAddCustomerForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCustomerFormData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleAddCustomerFormSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      id: nanoid(),
      firstName: addCustomerFormData.firstName,
      lastName: addCustomerFormData.lastName,
      email: addCustomerFormData.email,
      phoneNumber: addCustomerFormData.phoneNumber,
      street: addCustomerFormData.street,
      zip: addCustomerFormData.zip,
      city: addCustomerFormData.city,
    };
    setCustomers([...customers, newCustomer]);
  };
  const deleteCustomer = (id) => {
    const updatedCustomer = [...customers].filter(
      (customer) => customer.id !== id
    );
    setCustomers(updatedCustomer);
  };
  const handleSubmitClientForm = (event) => {
    event.preventDefault();
  };

  const handleArticleAdd = (event) => {
    event.preventDefault();
    const newArticle = {
      articleNumber: +event.target.articleNumber.value,
      articleName: event.target.articleName.value,
      price: +event.target.price.value,
    };
    setArticles([...articles, newArticle]);
    event.target.reset();
  };

  const handleClickClient = () => {
    return setNav("userForm");
  };
  const handleClickCustomer = () => {
    return setNav("customerForm");
  };
  const handleClickHome = () => {
    return setNav("userCard");
  };
  const handleClickArticle = () => {
    return setNav("articleCard");
  };
  const handleSelectAccount = () => {
    return setNav("billCard");
  };

  return (
    <>
      <Head>
        <title>BillyBob.io🥂</title>
      </Head>
      <Header />
      {nav === "userCard" && (
        <Usercard onClick={handleSelectAccount} client={client} />
      )}
      {nav === "userForm" && (
        <UserForm
          client={client}
          onChange={handleInputClientChange}
          onSubmit={handleSubmitClientForm}
        />
      )}

      {nav === "customerForm" && (
        <CustomerForm
          setCustomers={setCustomers}
          customers={customers}
          handleAddCustomerFormSubmit={handleAddCustomerFormSubmit}
          handleAddCustomerForm={handleAddCustomerForm}
          deleteCustomer={deleteCustomer}
        />
      )}
      {nav === "articleCard" && (
        <ArticleCard
          articles={articles}
          setArticles={setArticles}
          onArticleAddSubmit={handleArticleAdd}
        />
      )}
      {nav === "billCard" && <BillCard client={client} customers={customers} />}
      <Footer
        onClickClient={handleClickClient}
        onClickCustomer={handleClickCustomer}
        onClickHome={handleClickHome}
        onClickArticle={handleClickArticle}
      />
    </>
  );
}
