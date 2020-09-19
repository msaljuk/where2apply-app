import classnames from "classnames";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.container}>
      <nav>
        <ul className={styles.navbarMenu}>
          <li className={classnames(styles.linkElement, styles.logoElement)}>
            <Link className={classnames(styles.navbarLink, styles.logo)} to="/">
              where2apply
            </Link>
          </li>

          <div className={styles.middleLinks}>
            <li
              className={classnames(styles.linkElement, styles.processElement)}
            >
              <Link
                className={classnames(styles.navbarLink, styles.process)}
                smooth
                to="/#process"
              >
                Process
              </Link>
            </li>
            <li className={classnames(styles.linkElement, styles.dataElement)}>
              <Link
                className={classnames(styles.navbarLink, styles.data)}
                smooth
                to="/#data"
              >
                Data
              </Link>
            </li>
            <li className={classnames(styles.linkElement, styles.aboutElement)}>
              <Link
                className={classnames(styles.navbarLink, styles.about)}
                smooth
                to="/#about"
              >
                About
              </Link>
            </li>
          </div>

          {/* <li className={styles.tryElement} hidden>
            <Link
              className={classnames(styles.navbarLink, styles.try)}
      
            >
              Try
            </Link>
          </li> */}
        </ul>
      </nav>
    </nav>
  );
};

export default Header;
