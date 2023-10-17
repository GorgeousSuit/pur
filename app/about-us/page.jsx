import Nav from '@components/Nav';
import Image from 'next/image';
import AboutUs from '@components/AboutUs/AboutUs';
import Gallery from '@components/AboutUs/Gallery';

const page = () => {
    return (
        <section className="h-full w-[calc(100%+80px)] bg-white mt-[-40px] ml-[-40px]">
            <Nav />
            <AboutUs />
			<Gallery />
        </section>
    );
};

export default page;
