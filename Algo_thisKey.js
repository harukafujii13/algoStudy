
//function -> global(window,global)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

function playVideo(title){
    this.title = title;
    console.log(this);
}

video.showTags();


//fullName

function User(name){
    this.name = name;
    console.log(this);
}

const newUser = new User("Haruka");

