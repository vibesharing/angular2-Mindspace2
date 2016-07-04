import {Component} from 'angular2/core';
import {HttpService} from "./http.service";

@Component({
    selector: 'my-app',
    template: `
<div>
    <div class="input">
        <label for="title">Title</label>
        <input type="text" id="name" #name>
    </div>
    <div class="input">
        <label for="body">number</label>
        <input type="number" id="number" #number>
    </div>
    <div class="input">
        <label for="user-id">user ID</label>
        <input type="text" id="user-id" #userId>
    </div>
    <button (click)='onPost(name.value, number.value)'> Post Data</button>
    <button (click)='onGetPosts()'> Get all post</button>
    <p>
        Response: {{response | json}}
    </p>
</div>
`,
providers: [HttpService]
})

export class AppComponent {
response: string;
constructor(private _httpService: HttpService){}
onGetPosts(){
    this._httpService.getPosts()
    .subscribe(
        response =>this.response = response,
        error => console.log(error)
    )

}
onPost(name: string, number: string){
    this._httpService.createPost({name: name, number: number})
    .subscribe(
        response => this.response = response,
        error => console.log(error)
    )
}
}
