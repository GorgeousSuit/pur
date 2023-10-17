import Image from 'next/image';

const Gallery = () => {
    return (
        <section className="bg-white px-[40px] pt-[56px] lg:pt-[123px] lg:space-y-[120px] mt-[-1px] pb-[32px] lg:pb-[40px]">
            <div className="flex max-lg:flex-col-reverse justify-between">
                <Image
                    src="/assets/images/gallery/gallery-1.webp"
                    alt="Image"
                    width={242}
                    height={365}
                    className="w-[226px] h-[276px] lg:w-[16.81vw] lg:h-[25.35vw] lg:mt-[160px] object-cover max-lg:mb-[71px]"
                    unoptimized
                />
                <Image
                    src="/assets/images/gallery/gallery-2.webp"
                    alt="Image"
                    width={436}
                    height={382}
                    className="w-[255px] h-[224px] lg:w-[30.28vw] lg:h-[26.53vw] lg:mt-[71px] max-lg:self-end object-cover max-lg:mb-[40px]"
                    unoptimized
                />
                <Image
                    src="/assets/images/gallery/gallery-3.webp"
                    alt="Image"
                    width={205}
                    height={320}
                    className="w-[177px] h-[245px] lg:w-[14.24vw] lg:h-[22.22vw] max-lg:mb-[83px] object-cover"
                    unoptimized
                />
            </div>
            <div className="flex max-lg:flex-col justify-between">
                <Image
                    src="/assets/images/gallery/gallery-4.webp"
                    alt="Image"
                    width={242}
                    height={365}
                    className="w-[329px] h-[432px] max-lg:mx-auto max-lg:mb-[70px] lg:w-[14.24vw] lg:h-[22.22vw] self-center ml-[16.04vw] object-cover"
                    unoptimized
                />
                <Image
                    src="/assets/images/gallery/gallery-5.webp"
                    alt="Image"
                    width={436}
                    height={382}
                    className="w-[205px] h-[280px] lg:w-[49.1vw] lg:h-[45.83vw] mr-[-40px] object-cover max-lg:hidden"
                    unoptimized
                />
            </div>
			<div className="flex max-lg:flex-col justify-between">
                <Image
                    src="/assets/images/gallery/gallery-6.webp"
                    alt="Image"
                    width={242}
                    height={365}
                    className="w-full h-auto object-cover max-lg:hidden"
                    unoptimized
                />
            </div>
			<div className="flex flex-col justify-between">
                <div className="flex max-lg:flex-col justify-center lg:space-x-[33.89vw] lg:mb-[64px]">
					<Image
						src="/assets/images/gallery/gallery-7.webp"
						alt="Image"
						width={242}
						height={365}
						className="w-[205px] h-[280px] lg:w-[14.24vw] lg:h-[19.44vw] object-cover max-lg:mb-[42px]"
						unoptimized
					/>
					<Image
						src="/assets/images/gallery/gallery-8.webp"
						alt="Image"
						width={436}
						height={382}
						className="w-[205px] h-[300px] lg:w-[14.24vw] lg:h-[20.83vw] lg:mt-[80px] object-cover max-lg:self-end max-lg:mb-[89px]"
						unoptimized
					/>
				</div>
                <Image
                    src="/assets/images/gallery/gallery-9.webp"
                    alt="Image"
                    width={205}
                    height={320}
                    className="lg:w-[46.32vw] lg:h-[47.22vw] ml-[16.04vw] object-cover max-lg:hidden"
                    unoptimized
                />
            </div>
			<div className="flex max-lg:flex-col justify-between">
                <Image
                    src="/assets/images/gallery/gallery-10.webp"
                    alt="Image"
                    width={242}
                    height={365}
                    className="w-[240px] h-[272px] lg:w-[46.32vw] lg:h-[34.72vw] object-cover max-lg:mb-[45px]"
                    unoptimized
                />
                <Image
                    src="/assets/images/gallery/gallery-11.webp"
                    alt="Image"
                    width={436}
                    height={382}
                    className="w-[109px] h-[142px] lg:w-[14.24vw] lg:h-[22.22vw] self-end lg:self-center lg:mr-[18.82vw] object-cover"
                    unoptimized
                />
            </div>
			<div className="flex max-lg:flex-col justify-between">
                <Image
                    src="/assets/images/gallery/gallery-12.webp"
                    alt="Image"
                    width={242}
                    height={365}
                    className="w-full h-auto object-cover max-lg:hidden"
                    unoptimized
                />
            </div>
        </section>
    );
};

export default Gallery;
