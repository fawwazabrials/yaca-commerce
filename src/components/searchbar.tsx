import { Input } from "@/components/ui/input";

const Searchbar = () => {
	return (
		<Input
			className="focus:outline-none"
			type="search"
			placeholder="Search for product"
		/>
	);
};

export default Searchbar;
