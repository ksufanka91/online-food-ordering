import Hero from "@/components/content/Hero/Hero";
import Contacts from "@/components/content/Contacts/Contacts";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <Contacts showAboutUs={true}/>
        </>
    );
};

export default HomePage;