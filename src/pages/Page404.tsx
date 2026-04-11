import { type FC } from "react";
import { Link } from "react-router-dom";

const Page404: FC = () => (
  <article>
    <h1>404</h1>
    <p>Can't find what you were after.</p>
    <Link to="/">Home</Link>
  </article>
);

export default Page404;
