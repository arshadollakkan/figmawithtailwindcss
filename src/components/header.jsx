
import '../styles/header.css'
import Nav from './navbar';
import Section from './section';
const Header = () => {
    return ( 
        <section className="m-auto w-[1440px] h-[910px]  bg-[#FAFAFA]">
          <Nav/>
          <Section/>
        </section>
     );
}
 
export default Header;