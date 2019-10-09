// import axios from 'axios';

// const studioBase = `${process.env.REACT_APP_PETRONECT_OPPOTUNITES_GET_URL}`;


// export const getCanvasDraft = info => (
// 	axios({
// 		url: `${studioBase}/canvases/`,
// 		method: 'get',
// 		headers: {
// 			Authorization: `Bearer ${{session_token}}`,
// 			// 'X-Petronect-OrganizationID': info.orgId,
// 		},
// 	})
// );

// export const getCanvasDraft = info => (
// 	axios({
// 		url: `${studioBase}/canvases/`,
// 		method: 'get',
// 		headers: {
// 			Authorization: `Bearer ${{session_token}}`,
// 			// 'X-Petronect-OrganizationID': info.orgId,
// 		},
// 	})
// );

// export const postCanvasJsonMiddleware = info => (
// 	axios({
// 		url: `${studioBase}/canvases/${info.uuid}/draft`,
// 		method: 'post',
// 		headers: {
// 			Authorization: `Bearer ${info.accessToken}`,
// 			'X-Strytegy-OrganizationID': info.orgId,
// 		},
// 		data: {
// 			data: {
// 				canvas_id: info.uuid,
// 				draft: info.draft,
// 				status: info.status || 0,
// 			},
// 		},
// 	})
// );

// export const getCanvasJsonMiddleware = info => (
// 	axios({
// 		url: `${studioBase}/canvases?filters=${info.filters}`,
// 		method: 'get',
// 		headers: {
// 			Authorization: `Bearer ${info.accessToken}`,
// 			'X-Strytegy-OrganizationID': info.organizationId,
// 		},
// 	})
// );

// export const renameCanvasMiddleware = info => (
// 	axios({
// 		url: `${studioBase}/canvases/${info.uuid}`,
// 		method: 'put',
// 		headers: { 'X-Strytegy-OrganizationID': info.orgId },
// 		data: {
// 			data: {
// 				canvas_id: info.uuid,
// 				name: info.name,
// 				status: info.status,
// 			},
// 		},
// 	})
// );

// export const deleteCanvasMiddleware = info => (
// 	axios({
// 		url: `${studioBase}/canvases/${info.uuid}`,
// 		method: 'delete',
// 		headers: {
// 			Authorization: `Bearer ${info.accessToken}`,
// 			'X-Strytegy-OrganizationID': info.orgId,
// 		},
// 	})
// );

// export const publishCanvasMiddleware = info => (
// 	axios({
// 		url: `${studioBase}/canvases/${info.form.canvas_id}`,
// 		method: 'put',
// 		headers: {
// 			Authorization: `Bearer ${info.accessToken}`,
// 			'X-Strytegy-OrganizationID': info.organizationId,
// 		},
// 		data: {
// 			data: {
// 				...info.form,
// 			},
// 		},
// 	})
// );

// export const unpublishCanvasMiddleware = info => (
// 	axios({
// 		url: `${studioBase}/canvases/${info.uuid}`,
// 		method: 'put',
// 		headers: {
// 			Authorization: `Bearer ${info.accessToken}`,
// 			'X-Strytegy-OrganizationID': info.organizationId,
// 		},
// 		data: {
// 			data: {
// 				canvas_id: info.uuid,
// 				status: 0,
// 			},
// 		},
// 	})
// );

// export const publishJourneyMiddleware = info => (
// 	axios({
// 		url: `${studioBase}/journeys/${info.form.journey_id}`,
// 		method: 'put',
// 		headers: {
// 			Authorization: `Bearer ${info.accessToken}`,
// 			'X-Strytegy-OrganizationID': info.organization.uuid,
// 		},
// 		data: {
// 			data: {
// 				...info.form,
// 			},
// 		},
// 	})
// );