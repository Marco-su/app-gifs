import { Switch, Route } from "react-router-dom";
import DefaultGifs from "../pages/defaultGifs/DefaultGifs";
import GifsList from "../pages/gifsList/GifsList";
import ErrorPage from "../pages/error404/404";
import SingleGif from "../pages/singleGif/singleGif";

const MyRoutes = () => {
  return (
    <Switch>
      <Route exact path={["/", "/app-gifs"]} component={DefaultGifs} />
      <Route path="/search/:term" component={GifsList} />
      <Route path="/gif/:gifId" component={SingleGif} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default MyRoutes;
