import {Injectable} from 'angular2/core';


@Injectable()

export class LoggingService{
  private _lastMessage ='';
  log(message: string){
    console.log('current message: '+ message +' & last message: '+ this._lastMessage);
    this._lastMessage = message;
  }
}
