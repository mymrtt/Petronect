import axios from 'axios';

const API_URL = 'http://petronect-app-core-api-homolog-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api';

export const getAllOpportunitesMiddleware = () => axios({
	url: `${API_URL}/opportunities?page=0&limit=20`,
	method: 'get',
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZWx2aW4uZi5hbG1laWRhQGdtYWlsLmNvbSIsImV4cCI6MTU3MDQ1MTI3OH0.LiPghaFhMzMaY_gmSEb0gCBbu_egAHufDqTZP0g3LOyVTzpP_3Q2YzZfdPFHZHIdGJnV0cVebXQGb7zbkO8AiQ',
	},
});

export const getOpportunitesById = (info) => axios({
	url: `${API_URL}/opportunities/${info.opportunityId}/`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${info.token}`,
	},
});

//

// export const updateUserInterests = (token, interests) => {
//   return axios({
//     url: ${API_URL}/user/interests,
//     method: 'put',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//     data: {interests},
//   });
// };

// export const updateInitiative = (token, idInitiative, initiativeData) => {
//   return axios({
//     url: ${API_URL}/initiative/${idInitiative},
//     method: 'put',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//     data: initiativeData,
//   });
// };

// export const updateInitiativeInterests = (
//   token,
//   idInitiative,
//   interestsData,
// ) => {
//   return axios({
//     url: ${API_URL}/initiative/${idInitiative}/interests,
//     method: 'put',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//     data: interestsData,
//   });
// };

// export const findUserAccount = token => {
//   return axios({
//     url: ${API_URL}/login/verify,
//     method: 'get',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//   });
// };

// export const findUser = (token, id) => {
//   return axios({
//     url: ${API_URL}/user/${id},
//     method: 'get',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//   });
// };

// export const getInterests = () => {
//   return axios({
//     url: ${API_URL}/interests,
//     method: 'get',
//   });
// };

// export const getAllInitiative = (user, token) => {
//   return axios({
//     url: ${API_URL}/user/${user.id}/initiatives,
//     method: 'get',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//   });
// };

// export const getInitiative = (iniciativeId, token) => {
//   return axios({
//     url: ${API_URL}/initiative/${iniciativeId},
//     method: 'get',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//   });
// };

// export const createImages = (body, initiativeId, token) => {
//   return axios({
//     method: 'post',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//     url: ${API_URL}/initiative/photos/${initiativeId},
//     data: body,
//   });
// };

// export const deleteInitiative = (initiativeId, token) => {
//   return axios({
//     method: 'delete',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//     url: ${API_URL}/initiative/${initiativeId},
//   });
// };

// export const deleteMatch = data => {
//   return axios({
//     method: 'delete',
//     headers: {
//       Authorization: Bearer ${data.token},
//     },
//     url: ${API_URL}/user/${data.userId}/match/${data.initiativeId},
//   });
// };

// export const createInitiative = (newInitiative, token) => {
//   return axios({
//     url: ${API_URL}/initiative,
//     method: 'post',
//     headers: {
//       Authorization: Bearer ${token},
//     },
//     data: newInitiative,
//   });
// };

// export const createToken = (user_access_token, type) => {
//   return axios({
//     url: ${API_URL}/login/${type},
//     method: 'post',
//     data: {user_access_token},
//   });
// };

// export const createMatch = match => {
//   return axios({
//     url: ${API_URL}/user/${match.userId}/match/${match.initiativeId},
//     method: 'post',
//     headers: {
//       Authorization: Bearer ${match.token},
//     },
//     data: {liked: match.liked},
//   });
// };
