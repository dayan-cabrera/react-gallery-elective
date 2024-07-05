import React, { useState } from "react";
import { GalleyService } from "../services/GalleryService";

const Gallery: React.FC = () => {
	const [isLoading] = useState(false);
	const [galleryService] = useState<GalleyService>(new GalleyService());
	const [images, setImages] = useState<string[]>(galleryService.showMore([]));

	const handleLoadMore = () => {
		setImages(galleryService.showMore([...images]));
		console.log(images.length);
	};

	const handleLoadLess = () => {
		if (images.length !== 9) {
			setImages(galleryService.showLess(images));
		}
	};

	const handleDownloadImage = async (imgName: string) => {
		await galleryService.downloadImage(imgName);
	};

	return (
		<>
			{isLoading ? (
				<div className="relative h-screen w-screen">
					<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						Loading...
					</h1>
				</div>
			) : (
				<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
					<div className="-m-1 flex flex-wrap md:-m-2">
						{images.map((image, index) => (
							<div className="flex w-1/3 flex-wrap">
								<div className="w-full p-1 md:p-2">
									<div className="relative">
										<img
											key={index}
											alt="gallery"
											className="block h-full w-full rounded-lg object-cover object-center"
											src={`${process.env.PUBLIC_URL}/assets/images/${image}`}
										/>
										<span className="absolute top-2 right-2 bg-black opacity-90 text-white px-2 py-1 rounded-md">
											<button
												onClick={() =>
													handleDownloadImage(image)
												}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													className="size-6">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
													/>
												</svg>
											</button>
										</span>
									</div>
								</div>
							</div>
						))}
						<div className="w-full flex justify-center p-2">
							{images.length === 81 ? (
								<></>
							) : (
								<>
									<button
										onClick={handleLoadMore}
										type="button"
										className="bg-gray-800 m-2 rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
										More
									</button>
								</>
							)}

							{images.length === 9 ? (
								<></>
							) : (
								<>
									<button
										onClick={handleLoadLess}
										type="button"
										className="bg-gray-500 m-2 rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
										Less
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Gallery;
