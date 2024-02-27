/* eslint-disable no-unused-vars */
import {
  banana,
  cakes,
  cakes00,
  cassava,
  chapati,
  chapati00,
  eggs,
  pani,
  pani00,
  rolex,
  samosa,
  samosa00,
  sausage,
} from "../assets";

export const cards = [
  {
    id: 1,
    img: samosa,
    title: "Samosa",
    price: 200,
  },
  {
    id: 2,
    img: cassava,
    title: "Cassava",
    price: 100,
  },
  {
    id: 3,
    img: chapati00,
    title: "Chapati",
    price: 500,
  },
  {
    id: 4,
    img: rolex,
    title: "Rolex",
    price: 0,
  },
  {
    id: 5,
    img: eggs,
    title: "Egg",
    price: 500,
  },
  {
    id: 6,
    img: cakes00,
    title: "HalfCake",
    price: 500,
  },
  {
    id: 7,
    img: pani,
    title: "Pancake",
    price: 100,
  },
  {
    id: 8,
    img: sausage,
    title: "Sausage",
    price: 500,
  },
  {
    id: 9,
    img: banana,
    title: "Banana",
    price: 500,
  },
];

export const baseUrl = "http://localhost:8000";
// TODO: add custom endpoints on password url
//password urls
export const passwordUrl = "http://localhost:8000/Password";
export const setPasswordUrl = `${passwordUrl}/set_password`;
export const resetPasswordUrl = `${passwordUrl}/reset_password`;
export const changePasswordUrl = `${passwordUrl}/change_password`;

//user urls
export const UserUrl = "http://localhost:8000/Admin/Dashboard/users";
export const getUserUrl = `${UserUrl}/all`;
export const createUserUrl = `${UserUrl}/createUser`;
export const editUserUrl = `${UserUrl}/editUser`;
export const deleteUserUrl = `${UserUrl}/deleteUser`;

//product urls
export const PdtUrl = "http://localhost:8000/Admin/Dashboard/products";
export const getPdtUrl = `${PdtUrl}/all`;
export const createPdtUrl = `${PdtUrl}/createPdt`;
export const editPdtUrl = `${PdtUrl}/editPdt`;
export const deletePdtUrl = `${PdtUrl}/deletePdt`;

//order urls
export const OrderUrl = "http://localhost:8000/Admin/Dashboard/orders";
