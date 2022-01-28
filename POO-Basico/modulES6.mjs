export class PlatziClass{
    constructor({
        name,
        videoId,
    }){
        this.name = name;
        this.videoId = videoId;
    }
    reproducir(){
        videoPlay(this.videoId);
    }
    pausar(){
        videoStop(this.videoId);
    }
};

function videoPlay(id){
    const urlSecreta = "https://platzi.com/" + id;
    console.log('Se esta repoduciendo desde ' + urlSecreta);
}
function videoStop(id){
    const urlSecreta = "https://platzi.com/" + id;
    console.log('Se esta pausando desde ' + urlSecreta);
}
videoPlay(5);
videoStop(5);