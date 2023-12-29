import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Searchbar from "./searchbar";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex flex-row gap-4 justify-between items-center px-8 py-2">
			<h1 className="font-bold text-2xl h-auto mr-16">YACA</h1>

			<Searchbar />
			<div className="flex flex-row gap-4">
				<Button>Login</Button>
				<Button variant="secondary">Register</Button>
			</div>
		</nav>
	);
};

export default Navbar;
