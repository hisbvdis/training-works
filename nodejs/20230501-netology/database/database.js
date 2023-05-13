export let userList = [
  {id: 0, name: "Vasya"},
  {id: 1, name: "Petya"},
  {id: 2, name: "Tolya"},
]

export const setUserList = (param) => {
  userList = param;
}
