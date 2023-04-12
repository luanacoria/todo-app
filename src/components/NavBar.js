"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTasks } from "@/context/TaskContext";

const NavBar = () => {
	const router = useRouter();
	const { tasks } = useTasks();
	return (
		<header className="flex justify-between items-center bg-gray-800 px-28 py-3">
			<Link href="/">
				<h1 className="font-bold text-3x1 text-white">TODO APP
        <span className="text-slate-300 text-sm ml-5">{tasks.length} tareas </span>
        </h1>
			</Link>

			<div>
				<button
					className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inlinle-flex items-center"
					onClick={() => {
						router.push("/new");
					}}
				>
					Añadir tarea
				</button>
			</div>
		</header>
	);
};

export default NavBar;
