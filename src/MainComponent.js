import React from "react";
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import MainLayout from "./Layout/MainLayout";
import WaitSpinner from "./Layout/WaitSpinner";
import Error404 from "./common/Error404";

const RootPage = React.lazy(() => import("./components/RootPage"));
// const ChapterOne = React.lazy(()=> import("./components/ChapterOne"));



const components = [
    {
        title : "Scribble Pad",
        fileName : "ScribblePad",
        link : "scribble",
    },
    {
        title : "Ch 1: Drawing Shapes",
        fileName : "ChapterOne",
        link : "chapterOne",
    },
    {
        title : "Ch 2: Old Tv",
        fileName : "ChapterTwo",
        link : "chapterTwo",
    },
    {
        title : "Ch 3: Random Drawing",
        fileName : "ChapterThree",
        link : "chapterThree",
    },
    {
        title : "Pr 1: Shortest Path",
        fileName : "ProjectOne",
        link : "projectOne",
    },
    {
        title : "Ch 4: Acceleration",
        fileName : "Acceleration",
        link : "acceleration",
    },
    {
        title : "Ch 5: Bounce",
        fileName : "Bounce",
        link : "bounce",
    },
    {
        title : "Ch 6: Multi Axes Movement",
        fileName : "MoveXY",
        link : "moveXY",
    },
    {
        title : "Pr 2: Projectile Motion",
        fileName : "ProjectileMotion",
        link : "projectile",
    },
    {
        title : "Ch 7: Multiple Balls",
        fileName : "Multiple Balls",
        link : "multiple-balls",
    },

];



const MainComponent = () => {

    const routes = components.map((c,i) => <Route key={c.link} exact path={"/"+c.link} component={React.lazy(()=> import("./components/"+c.fileName))} /> );


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