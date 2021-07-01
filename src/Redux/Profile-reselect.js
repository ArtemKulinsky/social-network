export const getProfilePhotos = (state) => {
   return state.profileReducer.profileInformation.photos
};

export const getProfilePhotoIsFetching = (state) => {
   return state.profileReducer.profileInformation.photos.isFetching
};