import react,{useRef} from 'react'
import { motion } from "framer-motion";
import "./App.css";
import heroImage from './assets/hero.jpg'
import logo from './assets/logo.png'
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Helper untuk Framer Motion variants (fade up)
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function App() {
  const name = import.meta.env.VITE_WEBSITE_NAME
  const services = [
              { title: "Rat Extermination & Control", icon:<Icon icon="mdi:rat" width="50" height="50" color="black" /> },
              { title: "Cockroach & Ant Control", icon:<Icon icon="fluent-emoji-high-contrast:cockroach" width="50" height="50" color="black" />  },
              { title: "Termite Control", icon: <Icon icon="f7:ant" width="50" height="50" color="black" /> },
              { title: "Bed Bug Control", icon: <Icon icon="solar:bug-bold" width="50" height="50" color="black" />  }
            ]

  const whyChoose = [
              { title: "Safe & Eco-Friendly Materials", icon: <Icon icon="material-symbols:eco" width="50" height="50" color="black" />},
              { title: "Affordable & Transparent Prices", icon:  <Icon icon="mdi:tag" width="50" height="50" color="black" />},
              { title: "Fast Response", icon:  <Icon icon="mdi:thunder" width="50" height="50" color="black" />},
              { title: "Certified & Licensed Team", icon:  <Icon icon="qlementine-icons:certified-16" width="50" height="50" color="black" /> }
            ]

     const pages = useRef([]);  
     
      const slideTo = (index) =>{
         pages.current[index].scrollIntoView({
            behavior:"smooth",
            block : "start",
          })
        
      }
  return (
    <>
     <header>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <span>{name}</span>
        </div>
        <div className="nav-right">
          <a onClick={()=> slideTo(0)}  >HOME</a>
          <a onClick={()=> slideTo(1)} >SERVICES</a>
          <a >CONTACT</a>
          <a  aria-label="WhatsApp" className="nav-wa-icon">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" color="#32A041" />
          </a>
        </div>
      </nav>
    </header>
      

      <main>
        {/* ---------- HERO ---------- */}
         <section ref={(el)=> (pages.current[0]= el)}  id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            WELCOME TO <i style={{color :'#FFD100'}}>{name}</i> 
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Your Pest Control Specialist Throughout Terengganu 
          </motion.h2>
           <motion.h3
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            A fast and professional solution to eliminate rodent, cockroach, and insect pests directly from the source for the safety of your family.
          </motion.h3>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <button  onClick={()=> slideTo(1)}  className="hero-btn">
            
              VIEW SERVICES
            </button>
            <button onClick={()=> slideTo(2)}  className="hero-btn">
              
              Expertise
            </button>
          </motion.div>
        </div>
      </section>

        {/* ---------- SERVICES ---------- */}
        <section ref={(el)=> (pages.current[1]= el) } id="services" className="services-section">
          <h2><strong>OUR SERVICES</strong></h2>
          <div className="services-grid">
            {services.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05 }} 
                initial={{ opacity: 0, scale: 0.9 }}//awal
                whileInView={{ opacity: 1, scale: 1 }}//ketika dalam screeen
                transition={{ duration: 0.4, delay: idx * 0.1 }}//transisi
                className="service-card"
              >
                <h3>{item.title}</h3>
                {item.icon}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------- WHY CHOOSE US ---------- */}
        <section ref={(el)=> (pages.current[2]= el) }  className="choose-section">
          <h2><strong>WHY CHOOSE US?</strong></h2>
          <p>We don't just repel, but completely solve your pest problems with the highest safety standards.</p>
          <div className="choose-grid">
            {whyChoose.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="choose-card"
              >
                {item.icon}
                <h4>{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------- SPECIFIC EXPERTISE ---------- */}
        <section ref={(el)=> (pages.current[3]= el) }  className="expertise-section">
          <h2><strong>Specific Expertise</strong></h2>
          
          {/* Row 1: Termite - Imej di kiri, teks di kanan */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="expertise-row"
          >
            <div className="expertise-img">
              <Icon icon="f7:ant" width="50" height="50" color="black" /> 
            </div>
            <div className="expertise-content">
              <h3>Termite Treatment</h3>
              <h4><b>METHOD</b></h4>
              <ul>
                <li>Soil Treatment Termite</li>
                <li>Termite Baiting</li>
              </ul>
            </div>
          </motion.div>

          {/* Row 2: Mosquito - Imej di kanan, teks di kiri (reverse) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="expertise-row reverse"
          >
            <div className="expertise-img">
              <Icon icon="fa7-solid:mosquito" width="50" height="50" color="black" /> 
            </div>
            <div className="expertise-content">
              <h3>Waterbased Mosquito Fogging</h3>
              <ul>
                <li>Suitable For: Residential and office areas</li>
                <li>More environmentally & resident friendly</li>
                <li>Does not leave oily stains on floors, walls, furniture</li>
                <li>Less air pollution.</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* ---------- CTA SECTION ---------- */}
        <section ref={(el)=> (pages.current[4]= el )}  id="contact" className="cta-section">
          <h2>Get a Free Inspection Now!</h2>
          {/* Guna Tailwind CSS untuk button ini */}
          <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            CONTACT US NOW!  <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#ffffff" />
          </button>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", color: "#fff", fontWeight: "bold" }}>
              <img src={logo} style={{ borderRadius: "50%" }} alt="Logo" />
              C.I.E ENTERPRISE
            </div>
            <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
              A quick and safe solution to get rid of pests in your home
            </p>
          </div>
          <div className="footer-col">
            <h4>QUICK LINK</h4>
            <ul>
              <li><a onClick={()=> slideTo(0)} >HOME</a></li>
              <li><a onClick={()=> slideTo(1)} >SERVICES</a></li>
              <li><a onClick={()=> slideTo(2)} >WHY CHOOSE US</a></li>
              <li><a onClick={()=> slideTo(3)} >SPECIFIC EXPERTISE</a></li>
              
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOLLOW US</h4>
            <ul>
              <li><a href="https://www.tiktok.com/@cei_pest.control?is_from_webapp=1&sender_device=pc">TIKTOK</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <button className="back-top-btn" onClick={()=> slideTo(0)}>
            BACK TO TOP ⬆
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;