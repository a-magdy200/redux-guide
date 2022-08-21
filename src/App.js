import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
	getList1Action,
	getList2Action,
} from "./redux/actions/productsActions";

function App() {
	const dispatch = useDispatch();
	const storeState = useSelector((FullStoreState) => FullStoreState);
	return (
		<div>
			<p>Products Count: {storeState.products?.list?.length || 0}</p>
			<button
				onClick={() => {
					dispatch(getList1Action);
				}}>
				Dispatch Type 1 -> Push
			</button>
			<button
				onClick={() => {
					dispatch(getList2Action);
				}}>
				Dispatch Type 2 -> Pop
			</button>
		</div>
	);
}

export default App;
