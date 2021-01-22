import foot from "../styles/footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default function Footer() {
  return (
    <div>
      <footer className={foot.footer}>
        <div id={foot.copyright}>
          <p>&copy; ShAaGGy. All rights reserved. | Design by Sagar Vartak</p>
          <ul className={foot.contact}>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  size="2x"
                  color="white"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  size="2x"
                  color="white"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  size="2x"
                  color="white"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
