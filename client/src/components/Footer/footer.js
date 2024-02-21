import React from "react";
import { Typography } from "@material-tailwind/react";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Material FilmBase
      </Typography>
      <ul className="footer-links">
        <li>
          <Typography
            as="a"
            href="/home"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Home
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/movies"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Movies
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/person"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Person
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/tv"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            TV
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
