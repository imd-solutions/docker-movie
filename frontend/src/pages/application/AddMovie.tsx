import SiteHeader from "../../components/partials/SiteHeader";

export default function AddMovie() {

    return (
        <>
            <SiteHeader />
            <section className="py-10 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <h1 className="font-heading max-w-xl mb-2 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                        Movie Quotes
                    </h1>
                    <p className="text-gray-500 font-bold mb-10 ">
                        Add New Movie
                    </p>
                </div>
            </section>
        </>
    )
}