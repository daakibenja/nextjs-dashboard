'use client';

import PackageName from '@/app/ui/plans/package-name';
import PackagePricing from '@/app/ui/plans/package-pricing';
import PackageHeadline from '@/app/ui/plans/package-headline';
import PackageFeatures from './package-features';
import PackageSubscription from '@/app/ui/plans/package-subscription';

export default function Package({ name, tagline, price, features, status }: { name: string, tagline: string, price: Number, features: Array<string>, status: { isSubscribed: boolean } }) {

	// const features = [
	// 	'16 sessions of one hour each, spread over 5 weeks',
	// 	'Access to the hotel swimming pool during off - peak hours(e.g.early morning or late evening',
	// 	'Group lessons with up to 10 students per instructor',
	// 	'No cancellation or rescheduling options',
	// 	'No extra benefits or perks'
	// ];
	return (
		<div

			className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8  border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
			<h3 className="mb-4 text-2xl font-semibold">{name}</h3>
			<div className="flex justify-center items-baseline my-1 h-10">
				<p className="font-light sm:text-lg">{tagline}</p>
			</div>
			<div className="flex justify-center items-baseline my-9">

				<span className="mr-2 text-5xl font-extrabold">{price.toLocaleString()}</span>
				<span className="">/month</span>
			</div>
			<ul role="list" className="mb-8 space-y-4 text-left">
				{
					features.map((feature) => {
						return <li key={feature} className="flex items-center space-x-3">
							<svg className="w-6 h-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
								fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z">
								</path>
							</svg>
							<span className="text-base-content/80">{feature}</span>
						</li>
					})

				}

				{/* <li className="flex items-center space-x-3">
					<svg className="w-6 h-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
						fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z">
						</path>
					</svg>
					<span className="text-base-content/80">Smart downloader and cost-optimized AI</span>
				</li>
				<li className="flex items-center space-x-3">
					<svg className="w-6 h-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
						fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z">
						</path>
					</svg>
					<span className="text-base-content/80">Dedicated server</span>
				</li> */}
			</ul>

			{status.isSubscribed && <button className="w-full p-2 bg-blue-500 text-white font-bold gap-2 shadow uppercase">Current Plan</button>}
			{!status.isSubscribed && <button className="w-full p-2 bg-blue-500 text-white font-bold gap-2 shadow uppercase">Subscrib Now</button>}
		</div>
	);

}

