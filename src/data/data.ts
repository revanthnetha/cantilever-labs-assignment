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
    Restaurant

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
       value:"$550",
       date:"12/20/20",
       img: Holidays,
       name:"Holidays"
    },
    {
        value:"$200",
        date:"12/20/20",
        img:Renovation,
        name:"Renovation"
     },
     {
        value:"$820",
        date:"12/20/20",
        img:xbox,
        name:"Xbox"
     }
]

export const TransactioHistoryData=[
    {
        receiver: "Tesco Market",
        type: "Shopping",
        date: "13 Dec 2020",
        amount: "$75.67",
        img:cart
    },
    {
        receiver: "ElectroMen Market",
        type: "Shopping",
        date: "14 Dec 2020",
        amount: "$250.00",
        img:cart
    },
    {
        receiver: "Fiorgio Restaurant",
        type: "Food",
        date: "07 Dec 2020",
        amount: "$19.50",
        img:Restaurant
    },
    {
        receiver: "John Mathew Kayne",
        type: "Sport",
        date: "06 Dec 2020",
        amount: "$350",
        img:person
    },
    {
        receiver: "Ann Marlin",
        type: "Shopping",
        date: "31 Nov 2020",
        amount: "$430",
        img:person
    },
]
