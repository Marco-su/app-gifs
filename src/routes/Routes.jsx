import { Switch, Route } from "react-router-dom";
import DefaultGifs from "../views/DefaultGifs";
import GifsList from "../views/GifsList";
import ErrorPage from "../views/404";
import SingleGif from "../views/SingleGif";
import SiteInfo from "../views/SiteInfo";

const MyRoutes = () => {
  return (
    <Switch>
      <Route exact path={["/", "/app-gifs"]} component={DefaultGifs} />
      <Route path="/info" component={SiteInfo} />
      <Route path="/search/:term" component={GifsList} />
      <Route path="/gif/:gifId" component={SingleGif} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default MyRoutes;
