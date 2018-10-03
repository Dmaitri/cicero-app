import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ConfigurationPage from './components/configuration/ConfigurationPage';
import CoursePage from './components/course/CoursePage';
import ExecutionPage from './components/execution/ExecutionPage';
import ConfigEditPage from './components/configuration/configEditPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ConfigurationPage} />
        <Route path="home" component={HomePage} />
        <Route path="courses" component={CoursePage} />
        <Route path="execution" component={ExecutionPage} />
        <Route path="configedit" component={ConfigEditPage} />
    </Route>
);
