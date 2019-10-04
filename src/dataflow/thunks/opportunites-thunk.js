// import axios from 'axios';

// import {
// 	saveOrgUsers,
// 	updateUserAvatar,
// 	saveInvitedUsers,
// } from '../modules/account-module';

// import {
// 	updateUserProfileMiddleware,
// } from '../middlewares/petronect-oppportunites-api';

// const thumbnailBase = `${process.env.REACT_APP_UPLOAD_THUMBNAIL}`;

// export const convertUsers = info => (
// 	(dispatch) => {
// 		const users = {};

// 		info.response.data.data.forEach((user) => {
// 			users[user.user_id] = {
// 			};
// 		});


// 		dispatch(saveOrgUsers(users));
// 	}
// );

// export const convertInviteds = info => (
// 	(dispatch) => {
// 		const inviteds = {};

// 		info.response.data.data.forEach((invited) => {
// 			inviteds[invited.email] = {
// 				orgId: invited.organization_id,
// 				email: invited.email,
// 				role: 'user',
// 				isInvited: true,
// 			};
// 		});
// 		dispatch(saveInvitedUsers(inviteds));
// 	}
// );

// export const uploadAvatar = info => (
// 	axios.put(
// 		`${thumbnailBase}?key=users/${info.logo.name}`,
// 		info.logo.preview,
// 		{
// 			headers: {
// 				'Content-Type': `${info.logo.type}`,
// 				Authorization: info.token,
// 			},
// 		},
// 	)
// );

// export const uploadUserAvatarThunk = info => (
// 	async (dispatch) => {
// 		try {
// 			await uploadAvatar(info);

// 			const data = {
// 				userId: info.userId,
// 				avatar: `${process.env.REACT_APP_GET_THUMBNAIL}/users/${info.ratio.width}x${info.ratio.height}/${info.logo.name}`,
// 			};

// 			dispatch(updateUserProfileMiddleware(data));
// 		} catch (err) {
// 			dispatch(updateUserAvatar({
// 				isError: true,
// 			}));
// 		}
// 	}
// );