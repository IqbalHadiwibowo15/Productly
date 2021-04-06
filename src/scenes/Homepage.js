import React from "react";
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';
import Section from 'elements/Section';
import List from 'elements/Lists';
import Card from 'elements/Card';
import Header from 'parts/Header';
import Clients from 'parts/Clients';
import Features from 'parts/Feature';
import Footer from 'parts/Footer';

import HeroImage from 'assets/images/hero-image.png';
import FeatureTile01 from 'assets/images/feature-tile-icon-01.svg';
import FeatureTile02 from 'assets/images/feature-tile-icon-02.svg';
import FeatureTile03 from 'assets/images/feature-tile-icon-03.svg';

export default function Homepage() {
	
	const features = [
		{
			imgSrc: FeatureTile01,
			imgAlt: "Feature tile icon 01",
			title: "Join the system",
			description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
		},
		{
			imgSrc: FeatureTile02,
			imgAlt: "Feature tile icon 02",
			title: "Join the system",
			description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
		},
		{
			imgSrc: FeatureTile03,
			imgAlt: "Feature tile icon 03",
			title: "Join the system",
			description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
		}
	];

	const listPricing = [
		{
			price: 27,
			currencySymbol: "$",
			description:  "Lorem ipsum is a common text",
			features: [
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: false, content: "Excepteur sint occaecat velit"},
				{isChecked: false, content: "Excepteur sint occaecat velit"},
			]
		},
		{
			price: 47,
			currencySymbol: "$",
			description:  "Lorem ipsum is a common text",
			features: [				
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: false, content: "Excepteur sint occaecat velit"},
			]
		},
		{
			price: 67,
			currencySymbol: "$",
			description:  "Lorem ipsum is a common text",
			features: [
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: true, content: "Excepteur sint occaecat velit"},
				{isChecked: true, content: "Excepteur sint occaecat velit"},
			]
		}
	]
    return ( 
    <div className="body-wrap">
        <Header></Header>
        <main className="site-content">
            <Section className="hero illustration-section-01" isCenteredContent>
					<div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
                                <Fade delay={500}>
								<h1 className="mt-0 mb-16">
									Landing template for startups
								</h1>
                                </Fade>
                                <Fade delay={1000}>
								<div className="container-xs">
									<p className="mt-0 mb-32">
										Our landing page template works on all
										devices, so you only have to set it up
										once, and get beautiful results forever.
									</p>
								</div>
                                </Fade>
							</div>
                            <Fade delay={1500}>
							<div
								className="hero-figure illustration-element-01">
								<img src={HeroImage}/>
							</div>
                            </Fade>
						</div>
					</div>
            </Section>
			<Clients></Clients>
			<Section className="features-style">
			<div className="container">
				<div className="features-tiles-inner section-inner">
					<div className="tiles-wrap">
						{features.map((feature, index) => (
							<Features key={index} delayInMS={index * 500} data={feature}></Features>
						))}
					</div>
				</div>
			</div>
			</Section>
			<Section className="pricing">
				<div className="container">
					<div className="pricing-inner section-inner has-top-divider">
						<div className="section-header center-content">
							<div className="container-xs">
								<h2 className="mt-0 mb-16">Simple, transarent pricing </h2>
									<p className="m-0">
										Lorem ipsum is common placeholder text
										used to demonstrate the graphic elements
										of a document or visual presentation.</p>
							</div>
						</div>
						<div className="tiles-wrap">
							{
								listPricing.map((list, index) => (
								<Card hasShadow> 
									<div className="pricing-item-content">
											<div className="pricing-item-header pb-24 mb-24">
												<div className="pricing-item-price mb-4">
													<span className="pricing-item-price-currency h2">
														{list.currencySymbol}
													</span>
													<span
														className="pricing-item-price-amount h1 pricing-switchable"
														data-pricing-monthly="34"
														data-pricing-yearly="27"
														>{list.price}
														</span>
												</div>
												<div className="text-xs text-color-low">
													{list.description}
												</div>
											</div>
											<div className="pricing-item-features mb-40">
												<div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
													What’s included
												</div>
												<List 
													data={list.features} 
													isSmall 
													className="pricing-item-features-list mb-32">
												</List>
											</div>
										</div>
										<div className="pricing-item-cta mb-8">
											<Button isPrimary isBlock>
												Start free trial
											</Button>
										</div>
								</Card>
							))}
						</div>
					</div>
				</div>
			</Section>
		</main>
		<Footer></Footer>
    </div>
    );
}
