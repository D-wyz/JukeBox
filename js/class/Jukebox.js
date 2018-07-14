class Jukebox {
    constructor(app) {
        this.app = document.getElementById(app);
        this.app.cssText = "background-image: images/jukebox-interface.jpg;"
        
        this.app.innerHTML= "Hello from JS Class"
    }
}