import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage1.webp")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Java & Spring Boot Microservices</h3>
              <p>
                I design and ship REST APIs and microservices with Spring Boot,
                JPA/Hibernate and Spring Security on PostgreSQL, MySQL and AWS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Systems icon" />
            <div className={styles.aboutItemText}>
              <h3>Rust & Distributed Systems</h3>
              <p>
                I build high-performance Rust services and optimization engines
                for multi-tenant, distributed backends.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Delivery</h3>
              <p>
                I build React and Next.js front ends end to end, with CI/CD,
                Docker and a focus on testable, maintainable code.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
