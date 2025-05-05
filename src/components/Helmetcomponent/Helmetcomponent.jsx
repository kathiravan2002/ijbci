import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="keywords" content="IJBCI, International Journal of Business and Commerce Insights, Business research, commerce insights, finance, marketing, entrepreneurship, management, economics, trade, innovation, business ethics, strategy, global markets, corporate studies" />
    <meta name="description" content="IJBCI publishes innovative research in business, commerce, and economics, fostering global insights, academic excellence, and practical industry applications." />
    <meta name="author" content="IJBCI Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="International Journal of Business and Commerce Insights" />
    <meta property="og:description" content="IJBCI publishes innovative research in business, commerce, and economics, fostering global insights, academic excellence, and practical industry applications." />
    <meta property="og:url" content="https://www.ijbci.com/" />
    <meta property="og:image" content="https://www.ijbci.com/assets/IJBCI.png" />

    <link rel="canonical" href="https://www.ijbci.com/" />
    <link rel="icon" type="image/svg+xml" href="https://www.ijbci.com/assets/Fav.png" />
  </Helmet>
  );
};

export default Helmetcomponent;