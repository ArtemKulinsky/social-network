import axios from "axios";
import React from "react";
import User from "./User/User";
import s from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length === 0) {

  axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
        });

  // props.setUsers([
  //     { id: 1, followed: true, userInf: {fullName: "Grigoriy Kuznezov", status: "Ебу коменду за матрас", location: {city: "Междуреченск", country: "Russia"}} },
  //     { id: 2, followed: true, userInf: {fullName: "Nikolay Latkin", status: "Скучно на трех работах, развлекаюсь как могу", location: {city: "Краснодырск", country: "Russia"}} },
  //     { id: 3, followed: false, userInf: {fullName: "Vladimir Tashinskiy", status: "Все как и на первом курсе", location: {city: "Воронежегрязинск", country: "Russia"}} },
  //     { id: 4, followed: true, userInf: {fullName: "Maksim Sokolov", status: "Пивко смешаю с водкой: ерж пиздец колючий", location: {city: "Краснодырск", country: "Russia"}} },
  //     { id: 5, followed: true, userInf: {fullName: "Elmira Abramova", status: "Резницы слиплись от холода. Переберусь- ка еще посевернее", location: {city: "Petrozavods State University", country: "Russia"}} },
  //     { id: 6, followed: false, userInf: {fullName: "Artem Schiva", status: "Опять приходил Артем, нажрался как сука", location: {city: "Краснодырск", country: "Russia"}} },
  //     { id: 7, followed: false, userInf: {fullName: "Grigoriy Kuznezov", status: "Ебу коменду за матрас", location: {city: "Междуреченск", country: "Russia"}} },
  //   ])
  }

    return (
      <div className={s.usersList}>
        {props.users.map((user) => (
          <User onFollowClick={props.changeFollow} user={user} key={user.id} />
        ))}
      </div>
    );
}

export default UsersList;
