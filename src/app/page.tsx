"use client";
import { ROLE } from "@/types/role";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export default function Home() {

  return (
    <>
      <DefaultLayout>
        {ROLE.ADMIN ? <ECommerce /> : <h2>User Not Access</h2>}
      </DefaultLayout>
    </>
  );
}
