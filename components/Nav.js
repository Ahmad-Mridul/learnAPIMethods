import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<div className="py-5 space-y-5">
			<ul className="flex justify-center space-x-5">
				<Link href="/client-posts">
					<li>CSR</li>
				</Link>
				<Link href="/ssr-posts">
					<li>SSR</li>
				</Link>
				<Link href="/ssg-posts">
					<li>SSG</li>
				</Link>
				<Link href="/notes">
					<li>NOTES</li>
				</Link>
			</ul>
			<hr className="w-full border-dashed" />
		</div>
	);
};

export default Nav;
