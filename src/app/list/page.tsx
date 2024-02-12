"use client";
import React from 'react';
import Image from 'next/image';
import { User } from "../../types/user";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

async function getUsers() {
    return (await fetch("https://jsonplaceholder.typicode.com/users").then(
        (res) => res.json()
    )) as User[];
}

export default function ListsPage() {

    const { data } = useQuery<User[]>({
        queryKey: ["stream-hydrate-users"],
        queryFn: () => getUsers(),
        staleTime: 5 * 1000,
    });

    return (
        <DefaultLayout>
            <div className="mx-auto max-w-270">
                <Breadcrumb pageName="Users" />
                <div className="grid grid-cols-1">
                    <>
                        {
                            <div className='grid grid-cols-4 gap-4'>
                                {data?.map((user) => (
                                    <div
                                        className='flex flex-col justify-center items-center text-center border-2'
                                        key={user.id}
                                    >
                                        <Image
                                            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                                            alt={user.name}
                                            width={180}
                                            height={180}
                                        />
                                        <h3>{user.name}</h3>
                                        <h3>{user.email}</h3>
                                    </div>
                                ))}
                            </div>
                        }
                    </>
                </div>
            </div>
        </DefaultLayout>
    )
}
