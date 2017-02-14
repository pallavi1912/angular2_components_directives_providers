import { Injectable } from '@angular/core';

@Injectable()

export class FriendService{
	friends:Array<any>

	constructor(){
	this.friends = [
    { age: 40, name: 'Jordan Houston' },
    { age: 23, name: 'Josh Beh' },
    { age: 23, name: 'Joseph Canina' }
    ];
}

 getFriends(){
	return this.friends;
 }
}

