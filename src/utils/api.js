import axios from 'axios';
import {apiUrl} from '../../config/keys';

const hitApi = async (method, endpoint, token, data = null, options = null) => {
  const url = `${apiUrl}${endpoint}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    const builder = () => {
      let args = [];
      if (data) args.push(data);
      args.push({headers, ...options});
      return args;
    };

    const res = await axios[method.toLowerCase()](`${url}`, ...builder());

    return res.data;
  } catch (error) {
    console.log('API Error', error);
    return false;
  }
};

export const requestCreateTable = async (token, tableId) => {
  return await hitApi('POST', '/newtable', token, {tableId});
};

export const requestDineHistory = async (token) => {
  return await hitApi('GET', '/menu/getrecentorders', token);
};

// export const createTable = (token, tableId)=>{
// 	Axios({
// 		// TODO: /createTable
// 		url: `${apiUrl}/newtable`,
// 		method: 'POST',
// 		headers: {
// 		  'Content-Type': 'application/json',
// 		  Authorization: `Bearer ${token}`,
// 		},
// 		data: {tableId},
// 	  })
// 		.then((res) => {
// 		  console.log(res.data);
// 		  if (res.data.error) {
// 			Alert.alert('Sorry, Incorrect Table Id');
// 		  } else {
// 			updateTable(res.data._id);
// 			updateRoom(res.data.roomId);
// 			await AsyncStorage.setItem('tableId', res.data._id.toString());
// 			await AsyncStorage.setItem('roomId', res.data.roomId.toString());
// 			isSubmitting(false);
// 			// props.navigation.dispatch(
// 			//     CommonActions.reset({
// 			//         index: 0,
// 			//         routes: [
// 			//             {
// 			//                 name: 'Table',
// 			//                 //TODO: remove this
// 			//                 params: { roomId: res.data.roomId }
// 			//             },
// 			//         ],
// 			//     })
// 			// );
// 			console.log('VALID: ' + res.data);
// 		  }
// 		})
// 		.catch((err) => {
// 		  isSubmitting(false);
// 		  console.log(err);
// 		});
// }
