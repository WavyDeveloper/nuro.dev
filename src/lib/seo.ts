import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'nuro ─ developer';
	const description = "Hey I am Theo 👋 - HR, Marketing and Legal";

	return {
		title,
		description,
		canonical: `https://iamtheo.click/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Theo',
			url: `https://iamtheo.click/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://nuro.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@nts.theo',
			site: '@nts.theo',
		},
		...props,
	};
}
