import AboutUs from '@components/AboutUs/AboutUs';
import Gallery from '@components/AboutUs/Gallery';

const page = () => {
    return (
        <section className="h-full w-full pt-[123px] lg:pt-[6.41vw]">
            <AboutUs />
            <Gallery />
        </section>
    );
};

export default page;