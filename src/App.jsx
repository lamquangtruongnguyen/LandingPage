import styles from "./style";

import { Navbar, Hero, Projects, Skills, Footer } from "./components";

const App = () => (
  <div className="bg-gradient-to-b from-cyan-100 to-blue-200 w-full overflow-hidden">
    {/* Header and navigationn bar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero section */}
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* Skill, Projects, Footer */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
