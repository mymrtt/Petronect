import { getAllOpportunitesMiddleware } from '../middlewares/opportunites-middlewares-api';

// const thumbnailBase = `${process.env.REACT_APP_UPLOAD_THUMBNAIL}`;

// eslint-disable-next-line import/prefer-default-export
export const getAllOpportunitiesThunk = () => (
	async (dispatch) => {
		try {
			const response = await getAllOpportunitesMiddleware();

			const data = {};

			response.forEach((item) => {
				data[item.item_id] = {
					id: 'Test8',
					favorite: false,
					fit: 'Test8',
					category: 'Test8',
					titleDescription: 'Test8',
					deadLineInitial: '18/06/19',
					deadLineLastOne: '28/08/19',

				};
			});

			console.log(response.data);
		} catch (err) {
			console.log(err);
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
