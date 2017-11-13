import './playground.scss';
import * as angular from 'angular';
import {IModule} from "angular";
import uiRouter from '@uirouter/angularjs';
import {IStateProvider, IUrlRouterProvider} from "angular-ui-router";
import PlaygroundComponent from './playground.component';

const PlaygroundModule: IModule = angular
    .module('app.components.playground', [
        uiRouter
    ])
    .component('playground', PlaygroundComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('playground', {
                component: 'playground',
                url: '/playground'
            });
        $urlRouterProvider.otherwise('/');
    });

export default PlaygroundModule;