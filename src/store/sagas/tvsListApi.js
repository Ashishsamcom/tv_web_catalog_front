import {
   call,
   put,
   takeLatest
} from 'redux-saga/effects'
import request from '../../utils/request'
import {
   tvSuccess,
   tvsFailed,
   TYPES
} from '../actions/tvList'

function* fetchTvs() {

   let url = '/tvs'

   try {
      const tvList = yield call(request, url);

      yield put(tvSuccess(tvList));
   } catch (e) {
      console.error(e.message)
      yield put(tvsFailed(e.message));
   }
}

export default [
   takeLatest(TYPES.FETCH_TVS, fetchTvs)
];