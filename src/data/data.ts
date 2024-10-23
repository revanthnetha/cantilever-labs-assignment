import {
  Transaction,
  overview,
  goals,
  settings,
  invoice,
  card,
  Renovation,
  xbox,
  Holidays,
  cart,
  person,
  Restaurant,
  cartOutcome,
  Travels,
  Monica,
  Ann,
  John,
  Mia,
  Mike,
} from "../assets";

export const menuItems = [
  {
    name: "Overview",
    link: "#",
    imgUrl: overview,
  },
  {
    name: "Transactions",
    link: "#",
    imgUrl: Transaction,
  },
  {
    name: "Cards",
    link: "#",
    imgUrl: card,
  },
  {
    name: "Invoices",
    link: "#",
    imgUrl: invoice,
  },
  {
    name: "Goals",
    link: "#",
    imgUrl: goals,
  },
  {
    name: "Settings",
    link: "#",
    imgUrl: settings,
  },
];

export const GoalsCardData = [
  {
    value: "$550",
    date: "12/20/20",
    img: Holidays,
    name: "Holidays",
  },
  {
    value: "$200",
    date: "12/20/20",
    img: Renovation,
    name: "Renovation",
  },
  {
    value: "$820",
    date: "12/20/20",
    img: xbox,
    name: "Xbox",
  },
];

export const TransactioHistoryData = [
  {
    receiver: "Tesco Market",
    type: "Shopping",
    date: "13 Dec 2020",
    amount: "$75.67",
    img: cart,
  },
  {
    receiver: "ElectroMen Market",
    type: "Shopping",
    date: "14 Dec 2020",
    amount: "$250.00",
    img: cart,
  },
  {
    receiver: "Fiorgio Restaurant",
    type: "Food",
    date: "07 Dec 2020",
    amount: "$19.50",
    img: Restaurant,
  },
  {
    receiver: "John Mathew Kayne",
    type: "Sport",
    date: "06 Dec 2020",
    amount: "$350",
    img: person,
  },
  {
    receiver: "Ann Marlin",
    type: "Shopping",
    date: "31 Nov 2020",
    amount: "$430",
    img: person,
  },
];

export const OutcomeStaticsData = [
  {
    icon: cartOutcome,
    bgiconcolor: "#FFEADA",
    progressColor: "linear-gradient(270deg, #FCAE73 0%, #F79042 99.18%)",
    name: "Shopping",
    percentage: "52%",
  },
  {
    icon: cartOutcome,
    bgiconcolor: "#DDF9E4",
    progressColor: "linear-gradient(90deg, #209D43 0%, #2BC255 100%)",
    name: "Electronics",
    percentage: "21%",
  },
  {
    icon: Travels,
    bgiconcolor: "#FFEADA",
    progressColor: "#70A6E8",
    name: "Travels",
    percentage: "74%",
  },
];

export const NewTransactionData = [
  {
    name: "Ann",
    img: Ann,
  },
  {
    name: "Monica",
    img: Monica,
  },
  {
    name: "John",
    img: John,
  },
  {
    name: "Mike",
    img: Mike,
  },
  {
    name: "Mia",
    img: Mia,
  },
];
