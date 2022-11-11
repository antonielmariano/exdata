import { Switch, Route } from "react-router-dom";
import FilterResults from "./pages/filterResults";
import UploadFile from "./pages/uploadFile";


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/filtrar">
                <FilterResults />
            </Route>
            <Route exact path="/">
                <UploadFile />
            </Route>
        </Switch>
    )
}