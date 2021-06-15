import axios from "axios"


const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
   "API-KEY": "6937657e-e964-4c15-9936-04c475fabf96",
   },
})

export const UsersAPI = {
   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data
         })
   },

   unfollowUser(id) {
      return instance.delete(`follow/${id}`)
      .then(response => response.data);
   },

   followUser(id) {
      return instance.post(`follow/${id}`)
      .then(response => response.data);
   },
};

export const HeaderAPI = {
   isAuth() {
      return instance.get('auth/me')
         .then(response => response.data.data)
   },
}

export const ProfileAPI = {
   setProfile(id) {
      return instance.get(`profile/${id}`)
         .then(response => response.data)
   },
}
