import { Switch, Route } from "react-router-dom";
import DefaultGifs from "../components/defaultGifs/DefaultGifs";
import GifsList from "../components/gifsList/GifsList";
import ErrorPage from "../components/errorPage/404";

const MyRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={DefaultGifs} />
      <Route path="/search/:term" component={GifsList} />
      <Route path="/gif/:id" component={GifsList} />{" "}
      {/*------------------------------*/}
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default MyRoutes;
