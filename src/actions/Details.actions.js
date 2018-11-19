import { TimeSlotData } from '../../src/service/Data'
import { GET_SINGLE_SLOT } from './actionTypes';

const getRecord = (id) => {
  return {
    type : GET_SINGLE_SLOT,
    payload : new Promise(async(resolve, reject) => {
      try {
        let response = await TimeSlotData.get(id)
        console.log(response, 'reponse')
        if(response)
            resolve({
              data : response
            })
        else
            reject({
              data : "error occurred"
            })
      }
      catch(error) { 
          return reject({ data : error })
      }
    })
  }
}

export const _getRecord = (id) => {
  console.log(id)
  return (dispatch, getState) => { 
      dispatch(getRecord(id)).catch(error => {})
  }
}