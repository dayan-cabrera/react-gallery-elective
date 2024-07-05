export class GalleyService {
	private images = [
		"01.png",
		"02.jpg",
		"03.jpg",
		"04.jpg",
		"05.jpg",
		"06.jpg",
		"07.jpg",
		"08.jpg",
		"09.jpg",
		"10.jpg",
		"11.jpg",
		"12.jpg",
		"13.jpg",
		"14.webp",
		"15.jpg",
		"16.jpg",
		"17.jpg",
		"18.jpg",
		"19.jpg",
		"21.jpg",
		"22.jpg",
		"23.jpg",
		"24.jpg",
		"27.jpg",
		"28.jpg",
		"29.jpg",
		"30.jpg",
		"31.jpg",
		"32.jpg",
		"33.png",
		"34.png",
		"35.png",
		"36.png",
		"37.png",
		"38.png",
		"39.png",
		"40.jpg",
		"41.png",
		"42.jpg",
		"43.jpg",
		"44.jpg",
		"45.jpg",
		"46.jpg",
		"47.jpg",
		"48.jpg",
		"49.png",
		"50.jpg",
		"51.jpg",
		"52.png",
		"53.jpg",
		"54.jpg",
		"55.jpg",
		"56.jpg",
		"57.jpg",
		"58.jpg",
		"59.jpg",
		"60.jpeg",
		"61.jpg",
		"62.jpg",
		"63.jpg",
		"64.jpg",
		"65.png",
		"66.png",
		"67.jpg",
		"68.png",
		"69.jpeg",
		"70.png",
		"71.png",
		"72.jpg",
		"73.jpg",
		"74.jpg",
		"75.jpg",
		"76.jpg",
		"77.jpg",
		"78.jpg",
		"79.jpg",
		"80.jpg",
		"81.jpg",
		"82.jpg",
		"83.png",
		"84.jpg",
	];

	showMore = (currentImages: string[]): string[] => {
		if (this.images.length === 0) return currentImages;

		let nextNineImages = this.images.slice(0, 9);
		this.images = this.images.slice(9);
		console.log(this.images.length);

		return [...currentImages, ...nextNineImages];
	};

	showLess = (currentImages: string[]): string[] => {
		const lastNineImages = this.images.slice(-9);
		this.images.push(...lastNineImages);

		currentImages = currentImages.slice(0, -9);
		console.log(this.images.length);

		return currentImages;
	};

	downloadImage = async (image: string): Promise<void> => {
		try {
			const response = await fetch(
				`${process.env.PUBLIC_URL}/assets/images/${image}`
			);
			const blob = await response.blob();
			this.downloadBlob(blob, image);
		} catch (error) {
			console.error("Error downloading image:", error);
		}
	};

	private downloadBlob = (blob: Blob, filename: string): void => {
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.setAttribute("download", filename);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	};
}
