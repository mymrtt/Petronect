import axios from 'axios';

import { getAllOpportunitesMiddleware } from '../middlewares/opportunites-middlewares-api';

// const thumbnailBase = `${process.env.REACT_APP_UPLOAD_THUMBNAIL}`;

export const getAllOpportunitiesThunk = () => (
	async (dispatch) => {
		try {
			const response = await getAllOpportunitesMiddleware();

			const data = {};

			response.forEach((item) => {
				data[item.item_id] = {
					opportunityId: item.opportunityId,

				};
			});

			console.log(response.data);
		} catch (err) {
		}
	}
);


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
