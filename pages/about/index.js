import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  SiFramer,
  FaWordpress,
  FaFigma,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/hi2";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react1" />,
          <FaReact key="react2" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
        key: "webby",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
        key: "adobe",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
        key: "uxui",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
        key: "webdev",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
        key: "intern",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
        key: "webdev-education",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
        key: "cs-diploma",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
        key: "graphic-designer",
      },
    ],
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
