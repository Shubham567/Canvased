import React from "react";
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import MainLayout from "./Layout/MainLayout";
import WaitSpinner from "./Layout/WaitSpinner";
import Error404 from "./common/Error404";

const RootPage = React.lazy(() => import("./components/RootPage"));
// const ChapterOne = React.lazy(()=> import("./components/ChapterOne"));



const components = [
    {
        title : "Chapter One",
        fileName : "ChapterOne",
        link : "chapterOne",
    },
    {
        title : "Chapter Two",
        fileName : "ChapterTwo",
        link : "chapterTwo",
    },
    {
        title : "Chapter Three",
        fileName : "ChapterThree",
        link : "chapterThree",
    },
];



const MainComponent = () => {

    const routes = components.map((c,i) => <Route key={i} exact path={"/"+c.link} component={React.lazy(()=> import("./components/"+c.fileName))} /> );


    return (
        <React.Fragment>
            <BrowserRouter>
                <MainLayout links={components}>
                    <React.Suspense fallback={<WaitSpinner />}>
                        <Switch>
                            <Route exact path={"/"} component={RootPage}/>
                            {
                                routes
                            }
                            <Route component={Error404} />
                        </Switch>
                    </React.Suspense>
                </MainLayout>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default MainComponent;