import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export default function AccessPage() {

    return (
        <DefaultLayout>
            <div className="mx-auto max-w-270">
                <Breadcrumb pageName="No Access" />
                <h2>Only Admin Access This Page</h2>
            </div>
        </DefaultLayout>
    )
}
