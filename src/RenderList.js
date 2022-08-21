import { useSelector } from "react-redux";

const RenderList = () => {
	const { list } = useSelector((state) => state.products);
	return list.map((item, index) => {
		return <p key={index}>item #{index + 1}</p>;
	});
};
export default RenderList;
