

import { fetchUsers } from '../../actions'; 
export default function loadData(store) {
    return store.dispatch(fetchUsers());
}