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

export const AuthAPI = {
   me() {
      return instance.get('auth/me')
         .then(response => response.data.data);
   },

   login(email, password, rememberMe) {
      return instance.post('auth/login', {
         email: email,
         password: password,
         rememberMe: rememberMe
      })
   },

   logout() {
      return instance.delete('auth/login');
   }
}

export const ProfileAPI = {
   getProfileInformation(id) {
      return instance.get(`profile/${id}`)
         .then(response => response.data)
   },

   getProfileStatus(id) {
      return instance.get(`/profile/status/${id}`)
   },

   updateProfileStatus(status){
      return instance.put('profile/status', { status: status },)
   },
}
