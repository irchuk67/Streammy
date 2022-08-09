import React from "react"
import {Router,Route , Switch} from "react-router-dom";
import StreamList from "./StreamList/StreamList";
import StreamCreate from "./StreamCreate";
import StreamEdit from "./StreamEdit";
import StreamDelete from "./StreamDelete";
import StreamShow from "./StreamShow";
import Header from "../components/Header/Header";
import {Container} from '@mui/material';
import history from "../history";

const App = () => {
  return (
    <Container>
        <Router history={history}>
            <div>
                <Header/>
                <Switch>
                    <Route path={'/'} exact component={StreamList}/>
                    <Route path={'/streams/new'} component={StreamCreate} />
                    <Route path={'/streams/edit/:id'} component={StreamEdit} />
                    <Route path={'/streams/delete/:id'} component={StreamDelete} />
                    <Route path={'/streams/:id'} component={StreamShow} />
                </Switch>
            </div>
        </Router>

    </Container>
  );
};

export default App;
