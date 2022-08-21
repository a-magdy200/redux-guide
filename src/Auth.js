import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction, loginAction } from "./redux/actions/authActions";
const Auth = () => {
	const { isLoggedIn, userData } = useSelector((state) => state.auth);
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	return (
		<div>
			{isLoggedIn ? (
				<div>
					<p>You are logged In, {userData.name}</p>
					<button
						onClick={() => {
							dispatch(logoutAction);
						}}>
						Logout
					</button>
				</div>
			) : (
				<div>
					<p>You are logged Out</p>
					<input value={name} onChange={(e) => setName(e.target.value)} />
					<button
						onClick={() => {
							dispatch(
								loginAction({
									name,
								})
							);
							setName("");
						}}>
						Login
					</button>
				</div>
			)}
		</div>
	);
};
export default Auth;
