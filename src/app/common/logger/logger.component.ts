import {IComponentOptions} from 'angular';
import LoggerController from './logger.controller';

const template: string = require('./logger.html');
const LoggerComponent: IComponentOptions = {
    template,
    controller: LoggerController,
    transclude: true
};

export default LoggerComponent;