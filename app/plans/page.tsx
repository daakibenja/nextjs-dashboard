import Package from "../ui/plans/package";
import HeaderSection from "../ui/welcome/header-section";
export default function Page() {
    const plans = [

        {
            name: "Economy",
            tagline: "The most basic and affordable",
            description: "Suitable for beginners or casual swimmers who just want to learn the basics or have some fun in the water",
            features: [
                "16 sessions of one hour each, spread over 5 weeks",
                "Access to the hotel swimming pool during off-peak hours (e.g. early morning or late evening)",
                "Group lessons with up to 10 students per instructor",
                "No cancellation or rescheduling options",
                "No extra benefits or perks",],
            price: 20000,
            status: { isSubscribed: false }
        },
        {
            name: "Economy Flex",
            tagline: "More flexible and convenient",
            description: "suitable for intermediate or busy swimmers who want to improve their skills or have more options for their schedule.",
            features: [
                "16 sessions of one hour each, spread over 5 weeks",
                "Access to the hotel swimming pool during peak hours(e.g.afternoon or weekend)",
                "Group lessons with up to 6 students per instructor",
                "One free cancellation or rescheduling per week, subject to availability",
                "Free towel and locker service",],
            price: 40000,
            status: { isSubscribed: false }
        },
        {
            name: "Business",
            tagline: "Premium and personalized",
            description: "Suitable for advanced or serious swimmers who want to achieve their goals or have more attention from the instructor. ",
            features: [
                "16 sessions of one hour each, spread over 5 weeks",
                "Access to the hotel swimming pool anytime",
                "Semi - private lessons with up to 2 students per instructor",
                "Unlimited cancellations or rescheduling, subject to availability",
                "Free towel, locker, and shower service",
                " Free water bottle and snack"
            ],
            price: 80000,
            status: { isSubscribed: false }
        },

        {
            name: "First Class",
            tagline: "Ultimate and exclusive",
            description: "Suitable for elite or professional swimmers who want to excel or have the best possible experience.",
            features: [
                "16 sessions of one hour each, spread over 5 weeks",
                "Access to the hotel swimming pool anytime",
                "Private lessons with one - on - one instructor",
                "Unlimited cancellations or rescheduling, guaranteed",
                "Free towel, locker, shower, and spa service",
                "Free water bottle, snack, and meal",
                "Free access to the hotel gym and sauna",
            ],
            price: 160000,
            status: { isSubscribed: false }
        },

    ];
    return <div>




        <section className="p-4 md:p-8 bg-blue-0">
            <HeaderSection />
            <div className="py-8 mt-10 max-w-screen-xl lg:py-16">
                <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-4">Pricing Plans</h2>
                    <p className="text-xl">Choose a plan that best suits your swimming interests.</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">

                    {
                        plans.map((plan) => {
                            return (
                                <Package key={plan.name} name={plan.name} tagline={plan.tagline} price={plan.price} features={plan.features} status={plan.status} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </div>
}